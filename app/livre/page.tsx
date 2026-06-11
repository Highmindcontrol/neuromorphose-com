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
              <div className="aspect-[2/3] rounded-sm bg-encre p-10 text-blanc-casse shadow-xl">
                <p className="meta text-gris-meta">Le livre fondateur</p>
                <p className="mt-6 text-3xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-4xl">
                  Neuromorphose<span className="text-gris-meta">®</span>
                </p>
                <p className="mt-3 text-sm text-gris-meta">
                  La méthode
                </p>
                <p className="mt-auto pt-12 text-xs text-gris-meta">
                  François Le Moing
                  <br />
                  Neuroactif Édition · 2025
                </p>
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
                <p><strong className="text-encre">Format :</strong> broché · 280 pages</p>
                <p><strong className="text-encre">Éditeur :</strong> Neuroactif Édition</p>
                <p><strong className="text-encre">ISBN :</strong> à publier</p>
                <p><strong className="text-encre">Prix :</strong> 24 €</p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-blanc-casse hover:text-encre"
                >
                  Commander le livre
                </a>
                <a
                  href="#"
                  className="rounded-full border border-encre bg-blanc-casse px-6 py-3 text-sm font-medium uppercase tracking-wider text-encre transition-colors hover:bg-encre hover:text-blanc-casse"
                >
                  Lire un extrait
                </a>
              </div>
              <p className="mt-3 text-xs text-gris-meta">
                Liens de commande à activer après ouverture officielle des
                ventes.
              </p>
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
            {/* Photo de François Le Moing */}
            <div className="overflow-hidden rounded-sm bg-gris-fond">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/francois-le-moing.jpg"
                alt="François Le Moing, fondateur de la Neuromorphose®"
                className="aspect-[3/4] w-full object-cover"
                onError={(e) => {
                  // Fallback placeholder si l'image n'est pas encore
                  // déposée dans public/. Affiche un bloc gris avec
                  // une mention discrète.
                  const target = e.currentTarget;
                  target.style.display = "none";
                  target.parentElement?.classList.add(
                    "flex",
                    "aspect-[3/4]",
                    "items-center",
                    "justify-center",
                    "border",
                    "border-dashed",
                    "border-gris-trait",
                  );
                  const fallback = document.createElement("p");
                  fallback.className =
                    "px-4 text-center text-xs uppercase tracking-wider text-gris-meta";
                  fallback.textContent =
                    "Photo à déposer dans public/francois-le-moing.jpg";
                  target.parentElement?.appendChild(fallback);
                }}
              />
            </div>

            {/* Texte */}
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
                François Le Moing
              </h2>
              <p className="mt-2 text-base italic text-gris-meta">
                Fondateur de la Neuromorphose® et du groupe Ataraxis
              </p>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-gris-texte md:text-lg">
                <p>
                  Praticien et chercheur autodidacte, François Le Moing
                  observe depuis plus de dix ans, en cabinet et auprès de
                  près de mille cinq cents personnes accompagnées, le
                  pouvoir transformateur des <strong className="text-encre">
                  formes intérieures</strong> qui émergent spontanément
                  dans les états d&apos;attention partagée.
                </p>
                <p>
                  De ces observations longues, croisées avec les avancées
                  des neurosciences contemporaines, des approches
                  somatiques et de l&apos;hypnose conversationnelle
                  ericksonienne, il a progressivement formalisé une
                  méthode clinique nouvelle — la{" "}
                  <strong className="text-encre">Neuromorphose®</strong>{" "}
                  — adossée à des outils numériques propriétaires
                  (EndoFormia®, EndoTonia®) et à un cadre déontologique
                  strict porté par la FFPN.
                </p>
                <p>
                  Fondateur du groupe{" "}
                  <a
                    href="https://ataraxis.group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-encre underline hover:text-gris-meta"
                  >
                    Ataraxis
                  </a>
                  , il pilote le déploiement international de la méthode
                  et la diffusion de ses outils auprès des praticiens
                  formés. Le présent ouvrage constitue la première
                  formalisation publique complète de la Neuromorphose®.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

function Chapitre({ numero, titre, texte }: { numero: string; titre: string; texte: string }) {
  return (
    <li className="flex gap-6">
      <p className="flex-shrink-0 text-3xl font-light text-gris-meta">{numero}</p>
      <div>
        <h3 className="text-lg font-semibold tracking-[-0.01em] text-encre">{titre}</h3>
        <p className="mt-2 text-base leading-relaxed text-gris-texte">{texte}</p>
      </div>
    </li>
  );
}
