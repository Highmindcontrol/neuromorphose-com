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

export function LecteurVocal({ texte }: { texte: string }) {
  const [dispo, setDispo] = useState(false);
  const [enLecture, setEnLecture] = useState(false);
  const [enPause, setEnPause] = useState(false);
  const [voixDispo, setVoixDispo] = useState<SpeechSynthesisVoice[]>([]);
  const [voixChoisie, setVoixChoisie] = useState<string>("");
  const [vitesse, setVitesse] = useState<number>(1.0);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Détection des voix disponibles (asynchrone selon les navigateurs)
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    setDispo(true);

    function chargerVoix() {
      const voix = window.speechSynthesis
        .getVoices()
        .filter((v) => v.lang.toLowerCase().startsWith("fr"))
        .sort((a, b) => a.name.localeCompare(b.name));
      setVoixDispo(voix);

      const stockee = window.localStorage.getItem(CLE_VOIX);
      if (stockee && voix.some((v) => v.name === stockee)) {
        setVoixChoisie(stockee);
      } else if (voix.length > 0) {
        setVoixChoisie(voix[0].name);
      }

      const vitesseStockee = window.localStorage.getItem(CLE_VITESSE);
      if (vitesseStockee) setVitesse(parseFloat(vitesseStockee));
    }

    chargerVoix();
    window.speechSynthesis.onvoiceschanged = chargerVoix;
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const lancerLecture = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(texte);
    const voix = voixDispo.find((v) => v.name === voixChoisie);
    if (voix) utter.voice = voix;
    utter.lang = "fr-FR";
    utter.rate = vitesse;
    utter.onend = () => {
      setEnLecture(false);
      setEnPause(false);
    };
    utter.onerror = () => {
      setEnLecture(false);
      setEnPause(false);
    };
    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
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
            className="inline-flex items-center gap-2 rounded-full border border-encre bg-encre px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-blanc-casse hover:text-encre"
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
              className="inline-flex items-center gap-2 rounded-full border border-encre bg-blanc-casse px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-encre transition-colors hover:bg-encre hover:text-blanc-casse"
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
    </div>
  );
}
