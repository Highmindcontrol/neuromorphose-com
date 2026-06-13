import Link from "next/link";

export default function AccueilPage() {
  return (
    <article>
      {/* === Hero centré === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-24 md:px-10 md:py-32 text-center">
          <p className="meta text-gris-meta">La méthode</p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-encre md:text-7xl">
            La Neuromorphose<sup className="ml-0.5 text-[0.4em] font-normal align-super text-gris-meta">®</sup>
          </h1>
          <p className="mt-8 mx-auto max-w-3xl text-xl leading-relaxed text-gris-texte md:text-2xl">
            Une méthode d&apos;accompagnement qui utilise la visualisation
            de formes géométriques pour transformer le rapport au passé,
            au présent et au futur. <strong className="text-encre">
            Ni soin médical, ni thérapie réglementée — un outil de
            transformation intérieure encadré par une fédération
            professionnelle.</strong>
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              href="/methode"
              className="rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:border-[#3b82f6] hover:bg-[#3b82f6] hover:text-blanc-casse"
            >
              Découvrir la Neuromorphose
            </Link>
            <Link
              href="/livre"
              className="rounded-full border border-encre bg-blanc-casse px-6 py-3 text-sm font-medium uppercase tracking-wider text-encre transition-colors hover:border-[#3b82f6] hover:bg-[#3b82f6] hover:text-blanc-casse"
            >
              Lire le livre
            </Link>
          </div>
        </div>
      </section>

      {/* === Triple négation (positionnement canonique) === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-gris-meta">Positionnement</p>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-2xl font-semibold leading-snug tracking-[-0.015em] text-encre md:text-3xl">
                Ce qu&apos;elle fait
              </p>
              <ul className="mt-6 space-y-3 text-base text-gris-texte md:text-lg">
                <li>Elle prend soin.</li>
                <li>Elle ouvre la voie.</li>
                <li>Elle accompagne.</li>
              </ul>
            </div>
            <div>
              <p className="text-2xl font-semibold leading-snug tracking-[-0.015em] text-encre md:text-3xl">
                Ce qu&apos;elle ne fait pas
              </p>
              <ul className="mt-6 space-y-3 text-base text-gris-texte md:text-lg">
                <li>Elle ne soigne pas.</li>
                <li>Elle ne diagnostique pas.</li>
                <li>Elle ne prescrit pas.</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-gris-texte">
            Cette triple négation est la frontière éthique stricte de la
            méthode. Tout praticien certifié s&apos;engage à la respecter.
            Elle protège la souveraineté médicale du patient et le périmètre
            légitime de l&apos;accompagnant.
          </p>
        </div>
      </section>

      {/* === Trois fondements === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-gris-meta">Les trois fondements</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Visualisation, ressentis et futurisation
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            <Fondement
              numero="01"
              titre="La visualisation géométrique"
              texte="La Neuromorphose® encode les états intérieurs en formes géométriques. Un nœud d'angoisse devient une pyramide instable, une intuition claire devient une sphère lumineuse. Le cerveau, qui traite les images plus vite que les mots, gagne en clarté. Mille mots remplacés par une forme — c'est le saut conceptuel de la méthode."
            />
            <Fondement
              numero="02"
              titre="Les ressentis comme boussole"
              texte="Avant chaque séance, le sujet positionne ses ressentis sur des jauges multi-critères (calme, énergie, confiance, élan, ancrage…). Après la séance, il les positionne à nouveau. L'écart mesure objectivement le mouvement intérieur — premier dispositif de notation objective des ressentis dans le champ de l'accompagnement."
            />
            <Fondement
              numero="03"
              titre="La futurisation"
              texte="Évolution majeure de la visualisation classique. Au lieu de se projeter dans un futur vague, le sujet encode l'état souhaité en forme géométrique précise et l'ancre dans le présent. La futurisation ne rêve pas — elle structure le futur. C'est ce qui rend la transformation reproductible et mesurable."
            />
          </div>
        </div>
      </section>

      {/* === Le livre === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div className="overflow-hidden rounded-sm shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/couverture-livre.png"
                alt="Couverture du livre « Les principes fondamentaux de la Neuromorphose® »"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
                Le livre fondateur
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
                François Le Moing y présente la méthode dans son intégralité :
                ses origines, ses fondements neuroscientifiques, ses
                protocoles d&apos;application et le cadre éthique strict qui
                en garantit l&apos;intégrité. Le livre s&apos;adresse aussi
                bien au lecteur curieux qu&apos;au professionnel
                d&apos;accompagnement qui envisage de se former.
              </p>
              <Link
                href="/livre"
                className="mt-8 inline-flex rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:border-[#3b82f6] hover:bg-[#3b82f6] hover:text-blanc-casse"
              >
                Découvrir le livre
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === Pour qui ? === */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-gris-meta">Pour qui ?</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Deux portes d&apos;entrée selon votre situation
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <PorteEntree
              cible="Particuliers"
              description="Vous cherchez à mieux comprendre vos émotions, transformer un blocage du passé ou ancrer un futur souhaité. Accédez à la méthode via l'espace public, en autonomie ou accompagné d'un praticien certifié."
              lienHref="https://neuroactif.com"
              lienLabel="Espace particulier sur Neuroactif"
            />
            <PorteEntree
              cible="Professionnels de l'accompagnement"
              description="Vous êtes psychologue, sophrologue, hypnopraticien, naturopathe, coach, thérapeute énergétique… Formez-vous à la Neuromorphose® et intégrez-la dans votre pratique. Reconnaissance officielle via la FFPN."
              lienHref="https://neuroactif.com/pro"
              lienLabel="Espace praticien sur Neuroactif Pro"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

function Fondement({
  numero,
  titre,
  texte,
}: {
  numero: string;
  titre: string;
  texte: string;
}) {
  return (
    <div>
      <p className="text-3xl font-light text-gris-meta">{numero}</p>
      <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em] text-encre">
        {titre}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-gris-texte">{texte}</p>
    </div>
  );
}

function PorteEntree({
  cible,
  description,
  lienHref,
  lienLabel,
}: {
  cible: string;
  description: string;
  lienHref: string;
  lienLabel: string;
}) {
  return (
    <div className="rounded-sm border border-gris-trait bg-blanc-casse p-8">
      <p className="meta text-gris-meta">Pour</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.015em] text-encre">
        {cible}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-gris-texte">{description}</p>
      <a
        href={lienHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-encre hover:text-gris-meta"
      >
        {lienLabel} →
      </a>
    </div>
  );
}
