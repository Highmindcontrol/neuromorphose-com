"use client";

/**
 * <LecteurVocal> — Lecteur audio du manifeste via la Web Speech API.
 *
 * Permet à l'utilisateur d'écouter un chapitre plutôt que de le lire.
 * Utilise la synthèse vocale native du navigateur (gratuite, hors
 * ligne, qualité variable selon le système). Sélecteur de voix
 * française si plusieurs sont disponibles.
 *
 * Limitations connues :
 *   - Qualité moyenne sur certains navigateurs (Safari macOS = Thomas,
 *     Chrome = Google français FR-fr, Edge = Microsoft Hortense)
 *   - Pas de mise en avant visuelle du mot lu (limite de la Web Speech
 *     API standard)
 *   - Coupe automatiquement si l'utilisateur change d'onglet (Chrome)
 *
 * Pour aller plus loin en V2 : intégrer ElevenLabs ou OpenAI TTS pour
 * une voix premium pré-générée, hébergée comme MP3 par chapitre.
 */

import { useCallback, useEffect, useRef, useState } from "react";

const CLE_VOIX = "neuromorphose-com::lecteur-voix-choisie";
const CLE_VITESSE = "neuromorphose-com::lecteur-vitesse";

/** Découpe un texte en segments d'au plus `maxLen` caractères, en
 *  respectant les frontières naturelles de phrase pour éviter de
 *  couper au milieu d'une idée. Utile pour les voix cloud (Google
 *  notamment) qui ne lisent pas correctement les textes trop longs. */
function decouperPourSynthese(texte: string, maxLen = 200): string[] {
  const phrases = texte
    .split(/(?<=[.!?…])\s+/)
    .map((p) => p.trim())
    .filter(Boolean);
  const segments: string[] = [];
  let buffer = "";
  for (const phrase of phrases) {
    if (phrase.length > maxLen) {
      // Phrase elle-même trop longue : on la coupe sur les virgules
      if (buffer) {
        segments.push(buffer);
        buffer = "";
      }
      const morceaux = phrase.split(/,\s+/);
      let courant = "";
      for (const m of morceaux) {
        if ((courant + ", " + m).length > maxLen) {
          if (courant) segments.push(courant);
          courant = m;
        } else {
          courant = courant ? courant + ", " + m : m;
        }
      }
      if (courant) segments.push(courant);
      continue;
    }
    if ((buffer + " " + phrase).length <= maxLen) {
      buffer = buffer ? buffer + " " + phrase : phrase;
    } else {
      if (buffer) segments.push(buffer);
      buffer = phrase;
    }
  }
  if (buffer) segments.push(buffer);
  return segments;
}

export function LecteurVocal({ texte }: { texte: string }) {
  const [dispo, setDispo] = useState(false);
  const [enLecture, setEnLecture] = useState(false);
  const [enPause, setEnPause] = useState(false);
  const [voixDispo, setVoixDispo] = useState<SpeechSynthesisVoice[]>([]);
  const [voixChoisie, setVoixChoisie] = useState<string>("");
  const [vitesse, setVitesse] = useState<number>(1.0);
  const utterRef = useRef<{
    arreter: () => void;
    timeoutId: ReturnType<typeof setTimeout> | null;
  } | null>(null);

  // Détection des voix disponibles — Chrome et Safari sont
  // asynchrones et n'envoient pas toujours l'événement onvoiceschanged
  // de façon fiable. On combine donc 3 stratégies : appel direct,
  // écoute d'événement, et retry périodique pendant 5 secondes pour
  // attraper les voix cloud Google qui arrivent souvent en différé.
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    setDispo(true);

    const synth = window.speechSynthesis;

    function chargerVoix() {
      const voix = synth
        .getVoices()
        .filter((v) => v.lang.toLowerCase().startsWith("fr"))
        .sort((a, b) => {
          // Privilégie les voix de qualité supérieure en tête de liste
          // (Google et Microsoft Premium sont meilleures qu'Apple Compact)
          const aPremium =
            a.name.toLowerCase().includes("google") ||
            a.name.toLowerCase().includes("premium") ||
            a.name.toLowerCase().includes("enhanced");
          const bPremium =
            b.name.toLowerCase().includes("google") ||
            b.name.toLowerCase().includes("premium") ||
            b.name.toLowerCase().includes("enhanced");
          if (aPremium && !bPremium) return -1;
          if (!aPremium && bPremium) return 1;
          return a.name.localeCompare(b.name);
        });

      setVoixDispo((precedentes) => {
        // On ne remplace que si on a strictement plus de voix qu'avant
        // (évite de perdre la liste si un getVoices() ponctuel renvoie [])
        if (voix.length >= precedentes.length) return voix;
        return precedentes;
      });

      const stockee = window.localStorage.getItem(CLE_VOIX);
      if (stockee && voix.some((v) => v.name === stockee)) {
        setVoixChoisie(stockee);
      } else if (voix.length > 0) {
        // Choisit par défaut la première voix premium si dispo
        setVoixChoisie((actuelle) => actuelle || voix[0].name);
      }

      const vitesseStockee = window.localStorage.getItem(CLE_VITESSE);
      if (vitesseStockee) setVitesse(parseFloat(vitesseStockee));
    }

    chargerVoix();
    synth.onvoiceschanged = chargerVoix;

    // Retry périodique pendant 5 secondes — capture les voix cloud
    // qui arrivent en différé sur Chrome
    const intervals = [200, 500, 1000, 2000, 3500, 5000].map((ms) =>
      setTimeout(chargerVoix, ms),
    );

    return () => {
      intervals.forEach(clearTimeout);
      // Stoppe la boucle d'enchaînement de segments AVANT de canceller
      // la synthèse, sinon le onerror du segment courant déclenche un
      // setTimeout qui ressuscite la lecture après le unmount.
      utterRef.current?.arreter();
      if (utterRef.current?.timeoutId) {
        clearTimeout(utterRef.current.timeoutId);
      }
      synth.cancel();
      synth.onvoiceschanged = null;
    };
  }, []);

  const lancerLecture = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    // Si une boucle précédente tourne, on l'arrête PROPREMENT avant
    // d'en lancer une nouvelle (sinon les deux boucles cohabitent)
    utterRef.current?.arreter();
    if (utterRef.current?.timeoutId) {
      clearTimeout(utterRef.current.timeoutId);
    }
    window.speechSynthesis.cancel();

    const voix = voixDispo.find((v) => v.name === voixChoisie);

    // Découpe le texte en phrases puis en segments d'au plus 200
    // caractères chacun. C'est nécessaire pour les voix cloud Google
    // qui plantent silencieusement au-delà d'environ 200-300 chars.
    // Les voix locales Apple n'ont pas cette limite mais le découpage
    // ne les pénalise pas (l'enchaînement est fluide).
    const segments = decouperPourSynthese(texte, 200);
    if (segments.length === 0) return;

    // État local de la boucle — fermé dans la closure, partagé via
    // utterRef pour pouvoir être manipulé depuis l'extérieur (bouton
    // Arrêter, cleanup au unmount).
    const etat = {
      index: 0,
      arrete: false,
      timeoutId: null as ReturnType<typeof setTimeout> | null,
    };

    const lireSuivant = () => {
      // Garde-fou unique : si on a été arrêté OU si on a fini, on
      // ne fait plus RIEN. Cette vérification doit être en tête de
      // fonction pour éviter toute résurrection accidentelle après
      // un cancel() qui déclenche onerror.
      if (etat.arrete || etat.index >= segments.length) {
        setEnLecture(false);
        setEnPause(false);
        return;
      }
      const utter = new SpeechSynthesisUtterance(segments[etat.index]);
      if (voix) utter.voice = voix;
      utter.lang = "fr-FR";
      utter.rate = vitesse;
      utter.onend = () => {
        if (etat.arrete) return;
        etat.index++;
        lireSuivant();
      };
      utter.onerror = (e) => {
        // Si l'erreur vient d'un cancel() explicite (arrêt utilisateur
        // ou unmount), on ne relance surtout pas — c'est ce bug qui
        // faisait redémarrer la lecture après changement de page.
        if (etat.arrete) return;
        console.error("[lecteur-vocal] erreur synthèse :", e);
        etat.index++;
        if (etat.index < segments.length) {
          etat.timeoutId = setTimeout(() => {
            if (!etat.arrete) lireSuivant();
          }, 100);
        } else {
          setEnLecture(false);
          setEnPause(false);
        }
      };
      window.speechSynthesis.speak(utter);
    };

    // Stocke les contrôles dans la ref pour pouvoir arrêter depuis
    // l'extérieur (bouton, cleanup au unmount)
    utterRef.current = {
      arreter: () => {
        etat.arrete = true;
        if (etat.timeoutId) clearTimeout(etat.timeoutId);
      },
      timeoutId: null,
    };

    lireSuivant();
    setEnLecture(true);
    setEnPause(false);
  }, [texte, voixChoisie, voixDispo, vitesse]);

  function basculerPause() {
    if (!window.speechSynthesis) return;
    if (enPause) {
      window.speechSynthesis.resume();
      setEnPause(false);
    } else {
      window.speechSynthesis.pause();
      setEnPause(true);
    }
  }

  function arreter() {
    if (!window.speechSynthesis) return;
    // Stoppe la boucle d'enchaînement segment par segment
    utterRef.current?.arreter();
    window.speechSynthesis.cancel();
    setEnLecture(false);
    setEnPause(false);
  }

  function changerVoix(name: string) {
    setVoixChoisie(name);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(CLE_VOIX, name);
    }
    // Si une lecture est en cours, on la relance avec la nouvelle voix
    if (enLecture) {
      lancerLecture();
    }
  }

  function changerVitesse(nv: number) {
    setVitesse(nv);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(CLE_VITESSE, String(nv));
    }
    if (enLecture) {
      lancerLecture();
    }
  }

  if (!dispo) {
    return (
      <div className="rounded-sm border border-gris-trait bg-gris-fond px-4 py-3 text-xs text-gris-meta">
        Lecture vocale indisponible — essayez Chrome, Edge ou Safari récent.
      </div>
    );
  }

  return (
    <div className="rounded-sm border border-gris-trait bg-gris-fond px-4 py-3">
      <div className="flex flex-wrap items-center gap-3">
        {/* Bouton play / arrêt */}
        {!enLecture ? (
          <button
            type="button"
            onClick={lancerLecture}
            className="inline-flex items-center gap-2 rounded-full border border-encre bg-encre px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:border-[#3b82f6] hover:bg-[#3b82f6] hover:text-blanc-casse"
            aria-label="Écouter ce chapitre"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3 w-3"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Écouter
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={basculerPause}
              className="inline-flex items-center gap-2 rounded-full border border-encre bg-blanc-casse px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-encre transition-colors hover:border-[#3b82f6] hover:bg-[#3b82f6] hover:text-blanc-casse"
              aria-label={enPause ? "Reprendre la lecture" : "Mettre en pause"}
            >
              {enPause ? "▶ Reprendre" : "❚❚ Pause"}
            </button>
            <button
              type="button"
              onClick={arreter}
              className="inline-flex items-center gap-2 rounded-full border border-gris-trait bg-blanc-casse px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gris-meta transition-colors hover:border-encre hover:text-encre"
              aria-label="Arrêter la lecture"
            >
              ■ Arrêter
            </button>
          </>
        )}

        {/* Sélecteur de voix */}
        {voixDispo.length > 0 && (
          <label className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gris-meta">
            Voix
            <select
              value={voixChoisie}
              onChange={(e) => changerVoix(e.target.value)}
              className="rounded-sm border border-gris-trait bg-blanc-casse px-1.5 py-0.5 text-[11px] normal-case tracking-normal text-encre focus:border-encre focus:outline-none"
            >
              {voixDispo.map((v) => (
                <option key={v.name} value={v.name}>
                  {v.name}
                </option>
              ))}
            </select>
          </label>
        )}

        {/* Vitesse */}
        <label className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gris-meta">
          Vitesse
          <select
            value={vitesse}
            onChange={(e) => changerVitesse(parseFloat(e.target.value))}
            className="rounded-sm border border-gris-trait bg-blanc-casse px-1.5 py-0.5 text-[11px] normal-case tracking-normal text-encre focus:border-encre focus:outline-none"
          >
            <option value="0.85">0.85×</option>
            <option value="1">1×</option>
            <option value="1.15">1.15×</option>
            <option value="1.3">1.3×</option>
            <option value="1.5">1.5×</option>
          </select>
        </label>

        <span className="meta text-gris-meta">
          {enLecture
            ? enPause
              ? "En pause"
              : "Lecture en cours…"
            : "Lecture vocale disponible"}
        </span>
      </div>
      {voixDispo.length > 0 && voixDispo.length < 3 && (
        <p className="mt-2 text-[10px] leading-relaxed text-gris-meta">
          Seulement {voixDispo.length} voix française
          {voixDispo.length > 1 ? "s" : ""} détectée
          {voixDispo.length > 1 ? "s" : ""}. Pour des voix de meilleure
          qualité (Google, Microsoft Premium), essaie d&apos;ouvrir ce
          site dans <strong className="text-encre">Chrome</strong> ou{" "}
          <strong className="text-encre">Edge</strong>.
        </p>
      )}
    </div>
  );
}
