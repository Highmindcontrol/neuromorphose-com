export const metadata = {
  title: "Les outils",
};

export default function OutilsPage() {
  return (
    <article>
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-gris-meta">Les outils</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-encre md:text-6xl">
            EndoFormia<span className="text-gris-meta">®</span> et EndoTonia<span className="text-gris-meta">®</span>
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-gris-texte md:text-2xl">
            Deux outils logiciels qui rendent la Neuromorphose® applicable
            au quotidien : <strong className="text-encre">EndoFormia®</strong>{" "}
            pour encoder les états intérieurs en formes géométriques
            visualisables, <strong className="text-encre">EndoTonia®</strong>{" "}
            pour mesurer les ressentis avant et après chaque séance.
          </p>
        </div>
      </section>

      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <Outil
              numero="01"
              nom="EndoFormia®"
              soustitre="L'encodage géométrique vivant"
              description="EndoFormia® permet au sujet (en autonomie ou guidé par un praticien) de matérialiser sur écran la forme géométrique qui correspond à son état intérieur. Cinquante formes de base, déformables en temps réel, paramétrables en couleur, texture, mouvement. La forme devient une image objet partageable, sauvegardable, comparable dans le temps."
              utilisateurs={[
                "Particuliers en autonomie ou accompagnés",
                "Praticiens certifiés pour la pratique en cabinet",
                "Sujets en suivi de recherche (FFPN)",
              ]}
            />
            <Outil
              numero="02"
              nom="EndoTonia®"
              soustitre="La console intérieure du différentiel"
              description="EndoTonia® est l'instrument de mesure du mouvement intérieur. Le sujet positionne ses ressentis sur des jauges multi-critères avant la séance, puis à nouveau après. L'écart, visualisé en temps réel, mesure objectivement l'effet de la séance. La trace historique permet de suivre les évolutions sur plusieurs séances, plusieurs semaines, plusieurs années."
              utilisateurs={[
                "Sujets pour leur auto-suivi",
                "Praticiens pour mesurer l'efficacité de leurs protocoles",
                "FFPN pour la recherche scientifique structurée mondiale",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Disponibles sur Neuroactif
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            Les outils EndoFormia® et EndoTonia® sont intégrés à la
            plateforme <strong className="text-encre">Neuroactif</strong> —
            espace particulier gratuit avec freemium pour aller plus loin,
            espace praticien pour les professionnels certifiés. L&apos;une
            des spécificités de Neuroactif est que les particuliers
            inscrits peuvent prendre rendez-vous en visioconférence avec
            un praticien certifié de la FFPN directement depuis la
            plateforme.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://neuroactif.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-blanc-casse hover:text-encre"
            >
              Accéder à Neuroactif
            </a>
            <a
              href="https://neuroactif.com/pro"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-encre bg-blanc-casse px-6 py-3 text-sm font-medium uppercase tracking-wider text-encre transition-colors hover:bg-encre hover:text-blanc-casse"
            >
              Espace praticien
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-gris-meta">Marques déposées</p>
          <p className="mt-4 text-base leading-relaxed text-gris-texte md:text-lg">
            EndoFormia® et EndoTonia® sont des marques déposées de
            Neuroactif Édition. Leur usage est réservé aux contextes
            officiels de la méthode Neuromorphose®. Toute appropriation
            commerciale en dehors du cadre fixé par Neuroactif Édition est
            interdite.
          </p>
        </div>
      </section>
    </article>
  );
}

function Outil({
  numero,
  nom,
  soustitre,
  description,
  utilisateurs,
}: {
  numero: string;
  nom: string;
  soustitre: string;
  description: string;
  utilisateurs: string[];
}) {
  return (
    <div>
      <p className="text-3xl font-light text-gris-meta">{numero}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
        {nom}
      </h2>
      <p className="mt-2 text-base text-gris-meta">{soustitre}</p>
      <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
        {description}
      </p>
      <div className="mt-6">
        <p className="meta text-gris-meta">Utilisateurs</p>
        <ul className="mt-3 space-y-1 text-sm text-gris-texte">
          {utilisateurs.map((u) => (
            <li key={u} className="flex gap-2">
              <span className="text-encre">·</span>
              <span>{u}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
