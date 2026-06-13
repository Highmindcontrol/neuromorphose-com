export const metadata = {
  title: "Le livre",
};

export default function LivrePage() {
  return (
    <article>
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <div className="overflow-hidden rounded-sm shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/couverture-livre.png"
                  alt="Couverture du livre « Les principes fondamentaux de la Neuromorphose® — Les formes qui transforment »"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="meta text-gris-meta">Le livre</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
                Le texte fondateur de la méthode
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gris-texte md:text-xl">
                François Le Moing y présente la Neuromorphose® dans son
                intégralité : origines, fondements neuroscientifiques,
                protocoles d&apos;application, cadre éthique strict.
                L&apos;ouvrage s&apos;adresse aussi bien au lecteur curieux
                qu&apos;au professionnel d&apos;accompagnement qui
                envisage de se former à la méthode.
              </p>
              <div className="mt-8 space-y-3 text-sm text-gris-texte">
                <p><strong className="text-encre">Format :</strong> broché · 280 pages (à paraître)</p>
                <p><strong className="text-encre">Éditeur :</strong> Neuroactif Édition</p>
                <p><strong className="text-encre">ISBN :</strong> à publier</p>
                <p><strong className="text-encre">Prix :</strong> 24 € · <span className="text-gris-meta">Version PDF gratuite en pré-publication</span></p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#"
                  aria-disabled
                  className="cursor-not-allowed rounded-full border border-gris-trait bg-blanc-casse px-6 py-3 text-sm font-medium uppercase tracking-wider text-gris-meta"
                >
                  Commander le broché (bientôt)
                </a>
                <a
                  href="#"
                  className="rounded-full border border-encre bg-blanc-casse px-6 py-3 text-sm font-medium uppercase tracking-wider text-encre transition-colors hover:border-[#3b82f6] hover:bg-[#3b82f6] hover:text-blanc-casse"
                >
                  Lire un extrait
                </a>
              </div>

              {/* === Encart offre PDF gratuite === */}
              <EncartTelechargementPdf />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-gris-meta">Sommaire</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Ce que vous trouverez dans le livre
          </h2>
          <ol className="mt-12 space-y-6">
            <Chapitre numero="1" titre="Origines de la Neuromorphose" texte="D'où vient la méthode, ce qu'elle doit aux neurosciences contemporaines, en quoi elle se distingue des approches existantes." />
            <Chapitre numero="2" titre="La visualisation géométrique" texte="Pourquoi le cerveau traite les formes plus efficacement que les mots. Comment encoder un état intérieur en forme géométrique précise." />
            <Chapitre numero="3" titre="Les ressentis comme boussole" texte="Les jauges multi-critères : calme, énergie, confiance, élan, ancrage. Mesurer objectivement le mouvement intérieur produit par une séance." />
            <Chapitre numero="4" titre="La futurisation" texte="L'évolution de la visualisation classique vers une projection structurée. Encoder l'état souhaité en forme précise et l'ancrer dans le présent." />
            <Chapitre numero="5" titre="Protocoles d'application" texte="Vingt protocoles concrets pour les principales problématiques rencontrées en accompagnement : anxiété, deuil, transitions de vie, performance, sommeil…" />
            <Chapitre numero="6" titre="Le cadre éthique" texte="La triple négation, la souveraineté du patient, le périmètre légitime de l'accompagnant. Pourquoi la Neuromorphose® ne se substitue jamais à un soin médical." />
            <Chapitre numero="7" titre="Devenir praticien" texte="Le parcours de formation, la certification FFPN, l'intégration dans une pratique existante. Pour les professionnels qui veulent enrichir leur boîte à outils." />
          </ol>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-gris-meta">À propos de l&apos;auteur</p>
          <div className="mt-8 grid gap-10 md:grid-cols-[280px_1fr] md:gap-14 md:items-start">
            {/* Photo de François Le Moing — format carré 667×667
                récupéré depuis l'annuaire praticien neuroactif.com */}
            <div className="overflow-hidden rounded-sm bg-gris-fond">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/francois-le-moing.jpg"
                alt="François Le Moing, fondateur de la Neuromorphose®"
                className="aspect-square w-full object-cover"
              />
            </div>

            {/* Texte */}
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
                François Le Moing
              </h2>
              <p className="mt-2 text-base italic text-gris-meta">
                Neuromorphologue, praticien en hypnose ericksonienne,
                praticien PNL formé par Richard Bandler en personne
              </p>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-gris-texte md:text-lg">
                <p>
                  Chercheur autodidacte passionné depuis son plus jeune
                  âge par les neurosciences et les pouvoirs du cerveau,
                  il observe et étudie pendant plus de dix ans, sur près
                  de <strong className="text-encre">1 500 clients</strong>{" "}
                  reçus en cabinet, le pouvoir transformateur des{" "}
                  <strong className="text-encre">formes intérieures</strong>{" "}
                  qui émergent spontanément à la place des mots dans les
                  états de transe légère, suscités par hypnose
                  conversationnelle et protocole de cohérence cardiaque.
                </p>
                <p>
                  De ces observations longues, croisées avec les avancées
                  des neurosciences contemporaines et des approches
                  somatiques, il a progressivement formalisé une méthode
                  clinique nouvelle — la{" "}
                  <strong className="text-encre">Neuromorphose®</strong>{" "}
                  — adossée à deux outils numériques dont il est le
                  créateur ({" "}
                  <strong className="text-encre">EndoFormia®</strong> et{" "}
                  <strong className="text-encre">EndoTonia®</strong>) et
                  à un cadre déontologique strict porté par la FFPN
                  (Fédération Française des Praticiens de la
                  Neuromorphose®), dont il est le président.
                </p>
                <p>
                  Auteur, conférencier, serial entrepreneur, il crée —
                  après un mandat de maire de l&apos;un des plus beaux
                  villages de France — le groupe{" "}
                  <a
                    href="https://ataraxis.group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-encre underline hover:text-gris-meta"
                  >
                    Ataraxis
                  </a>{" "}
                  afin de piloter le déploiement international de la
                  méthode et de ses outils auprès des praticiens formés.
                  Le présent ouvrage constitue la première formalisation
                  publique complète de la Neuromorphose® et de ses
                  outils cliniques et d&apos;apprentissage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

/**
 * Encart d'offre de téléchargement gratuit du PDF du manifeste.
 * Trois variantes de couleur disponibles — laisse la variante A
 * (corail tendre) active, garde les deux autres en commentaire.
 *
 * Variante A — Corail tendre (#e76f51 → #d4583a) : chaleureux,
 *   attractif, contraste fort avec la couverture sombre du livre,
 *   communique l'urgence/l'offre sans agression visuelle.
 *
 * Variante B — Doré profond (#c9a45a → #a88845) : sophistiqué,
 *   matche le doré du titre sur la couverture, registre premium
 *   plutôt que promotionnel.
 *
 * Variante C — Encadré sobre + accent doré + badge GRATUIT :
 *   le plus discret, blanc cassé avec liseré doré épais et badge
 *   coin haut-droit. Pour les sites institutionnels stricts.
 */
function EncartTelechargementPdf() {
  return (
    <a
      href="/manifeste-neuromorphose.pdf"
      download
      className="group mt-8 block rounded-sm bg-[#3b82f6] p-6 text-blanc-casse shadow-xl transition-all hover:scale-[1.01] hover:shadow-2xl md:p-7"
    >
      <div className="flex items-start gap-4">
        <span
          aria-hidden
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blanc-casse/15"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </span>
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-[0.18em] text-blanc-casse/90">
            Offre de pré-publication · gratuit
          </p>
          <p className="mt-2 text-xl font-semibold leading-tight tracking-[-0.015em] md:text-2xl">
            Téléchargez la version PDF complète du livre
          </p>
          <p className="mt-2 text-sm leading-relaxed text-blanc-casse/85">
            En attendant la sortie du broché, profitez gratuitement de
            l&apos;intégralité du manifeste scientifique en PDF — 11
            chapitres, bibliographie et glossaire compris.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blanc-casse px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#2563eb] transition-all group-hover:translate-x-0.5 group-hover:bg-encre group-hover:text-blanc-casse">
            Télécharger maintenant
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
              aria-hidden
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

function Chapitre({ numero, titre, texte }: { numero: string; titre: string; texte: string }) {
  return (
    <li className="flex gap-5">
      <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-sm font-semibold text-blanc-casse">
        {numero}
      </span>
      <div>
        <h3 className="text-lg font-semibold tracking-[-0.01em] text-encre">{titre}</h3>
        <p className="mt-2 text-base leading-relaxed text-gris-texte">{texte}</p>
      </div>
    </li>
  );
}
