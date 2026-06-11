export const metadata = {
  title: "Recherche & publications",
};

export default function RecherchePage() {
  return (
    <article>
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-gris-meta">Recherche & publications</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-encre md:text-6xl">
            Une recherche en construction
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-gris-texte md:text-2xl">
            La Neuromorphose® est une méthode jeune, en cours de validation
            scientifique. Les premiers travaux de recherche structurée
            ouvrent à partir de septembre 2026, portés par la FFPN et ses
            partenaires académiques. Cette page recensera les publications,
            communications et études en cours dès qu&apos;elles seront
            disponibles.
          </p>
        </div>
      </section>

      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Cinq axes prioritaires
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            La FFPN coordonne un programme international structuré sur cinq
            axes :
          </p>
          <ul className="mt-10 space-y-6">
            <Axe titre="Le son et la musique dans le développement cérébral" texte="Effets des fréquences sonores et structures musicales sur la plasticité neuronale, la concentration, l'apaisement, les processus mnésiques." />
            <Axe titre="Les ressentis émotionnels mesurables" texte="Cartographie systématique des ressentis avant/après séance, capturés en données structurées via EndoTonia®." />
            <Axe titre="La futurisation comme dispositif d'ancrage" texte="Études longitudinales sur les effets de la projection structurée à 6 et 12 mois." />
            <Axe titre="La mémoire et le passé revisité" texte="Reconsolidation thérapeutique vs faux souvenirs — cadre éthique strict de la pratique." />
            <Axe titre="La posture du praticien et l'effet relationnel" texte="Quels marqueurs distinguent les séances à fort effet ? Formation à la posture optimale." />
          </ul>
        </div>
      </section>

      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Pourquoi un dispositif inédit
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            Les approches d&apos;accompagnement classiques produisent peu
            de données structurées exploitables pour la recherche : chaque
            praticien note ses séances dans son carnet personnel, sans
            protocole standardisé ni outil de capture. Résultat : peu
            d&apos;études quantitatives à grande échelle.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gris-texte md:text-lg">
            La Neuromorphose®, en intégrant EndoFormia® et EndoTonia® à
            la pratique quotidienne des praticiens, change la donne :
            <strong className="text-encre"> chaque séance produit
            automatiquement des données structurées</strong> (formes
            encodées, ressentis avant/après, durée, contexte). Avec le
            consentement des sujets, ces données alimentent une base
            anonymisée mondiale — première du genre dans le champ de
            l&apos;accompagnement.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Vous êtes chercheur ou institution ?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            La FFPN ouvre en septembre 2026 ses appels à partenariats avec
            laboratoires universitaires en neurosciences, psychologie
            clinique, sciences cognitives, musicologie. Premiers partenariats
            à venir.
          </p>
          <a
            href="mailto:recherche@neuromorphose.fr"
            className="mt-8 inline-flex rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-blanc-casse hover:text-encre"
          >
            recherche@neuromorphose.fr
          </a>
        </div>
      </section>
    </article>
  );
}

function Axe({ titre, texte }: { titre: string; texte: string }) {
  return (
    <li className="border-l-2 border-encre pl-6">
      <h3 className="text-lg font-semibold tracking-[-0.01em] text-encre">{titre}</h3>
      <p className="mt-2 text-base leading-relaxed text-gris-texte">{texte}</p>
    </li>
  );
}
