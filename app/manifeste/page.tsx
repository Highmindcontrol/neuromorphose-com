import Link from "next/link";
import { getEntreesParGroupe, type EntreeManifeste } from "@/lib/manifeste";

export const metadata = {
  title: "Le manifeste scientifique",
  description:
    "Manifeste scientifique de la Neuromorphose® en 11 chapitres. Fondations conceptuelles, méthode clinique, fondements neuroscientifiques, écosystème et perspective ouverte. Lecture en ligne et téléchargement PDF.",
};

export default function ManifesteIndexPage() {
  const groupes = getEntreesParGroupe();

  return (
    <article>
      {/* === Hero === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-24 md:px-10 md:py-32">
          <p className="meta text-gris-meta">Le manifeste scientifique</p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-encre md:text-7xl">
            La Neuromorphose<span className="text-gris-meta">®</span>
          </h1>
          <p className="mt-6 text-xl italic leading-relaxed text-gris-texte md:text-2xl">
            Une thérapie des formes — héritière d&apos;Erickson, ancrée
            dans l&apos;histoire millénaire de la géométrie platonicienne.
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-gris-texte md:text-lg">
            Document scientifique de référence sur la méthode
            Neuromorphose®, fondée par François Le Moing et appuyée par
            l&apos;outil EndoFormia® et l&apos;écosystème Neuroactif. Onze
            chapitres organisés en cinq parties — fondations conceptuelles,
            méthode clinique, fondements scientifiques (neurosciences,
            cristallographie, philosophie, hypnose, somatique), écosystème
            et perspective ouverte.
          </p>
          <p className="mt-4 text-sm text-gris-meta">
            Destiné à un public professionnel — thérapeutes, médecins,
            psychiatres, psychanalystes, psychologues, accompagnants
            somatiques.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/manifeste/chapitre-liminaire"
              className="rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-blanc-casse hover:text-encre"
            >
              Commencer la lecture
            </Link>
            <a
              href="/manifeste-neuromorphose.pdf"
              download
              className="rounded-full border border-encre bg-blanc-casse px-6 py-3 text-sm font-medium uppercase tracking-wider text-encre transition-colors hover:bg-encre hover:text-blanc-casse"
            >
              Télécharger le PDF complet
            </a>
          </div>
        </div>
      </section>

      {/* === Exergue === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <blockquote className="text-2xl italic leading-snug text-encre md:text-3xl">
            « Donner des mots à des maux qui souvent n&apos;en ont pas. »
          </blockquote>
          <p className="mt-4 text-sm text-gris-meta">— François Le Moing</p>
        </div>
      </section>

      {/* === Ouverture === */}
      <SectionGroupe
        eyebrow="Ouverture"
        titre="Avant d'entrer dans le texte"
        entrees={groupes.ouverture}
      />

      {/* === Chapitres === */}
      <SectionGroupe
        eyebrow="Onze chapitres"
        titre="Plan général du manifeste"
        description="Chaque chapitre se lit indépendamment, mais l'ordre canonique respecte la progression conceptuelle. Cinq parties : fondations, méthode clinique, fondements scientifiques (neurosciences, cristallographie, philosophie, hypnose, somatique), écosystème, perspective ouverte."
        entrees={groupes.chapitres}
      />

      {/* === Abrégés === */}
      <SectionGroupe
        eyebrow="Abrégés"
        titre="Trois niveaux de synthèse"
        description="Pour les lecteurs pressés ou les premières approches. Format ultra-court, intermédiaire ou complet — selon le temps disponible."
        entrees={groupes.abreges}
      />

      {/* === Ressources === */}
      <SectionGroupe
        eyebrow="Ressources"
        titre="Bibliographie et glossaire"
        description="Toutes les sources convoquées dans le manifeste, classées par discipline. Glossaire des termes techniques utilisés."
        entrees={groupes.ressources}
      />

      {/* === Téléchargement final === */}
      <section className="border-t border-gris-trait bg-encre">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24 text-center">
          <p className="meta text-gris-meta">Document complet</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-blanc-casse md:text-4xl">
            Télécharger le manifeste intégral
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-blanc-casse/80">
            Version PDF complète — 11 chapitres + bibliographie complète +
            glossaire + dédicace. Mise à jour à chaque révision majeure de
            la doctrine.
          </p>
          <a
            href="/manifeste-neuromorphose.pdf"
            download
            className="mt-10 inline-flex rounded-full border border-blanc-casse bg-blanc-casse px-6 py-3 text-sm font-medium uppercase tracking-wider text-encre transition-colors hover:bg-transparent hover:text-blanc-casse"
          >
            Télécharger le PDF (575 Ko)
          </a>
        </div>
      </section>
    </article>
  );
}

function SectionGroupe({
  eyebrow,
  titre,
  description,
  entrees,
}: {
  eyebrow: string;
  titre: string;
  description?: string;
  entrees: EntreeManifeste[];
}) {
  if (entrees.length === 0) return null;
  return (
    <section className="border-b border-gris-trait">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-24">
        <p className="meta text-gris-meta">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
          {titre}
        </h2>
        {description && (
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gris-texte md:text-lg">
            {description}
          </p>
        )}
        <ul className="mt-12 space-y-4">
          {entrees.map((e) => (
            <li key={e.slug}>
              <Link
                href={`/manifeste/${e.slug}`}
                className="group flex flex-col gap-2 rounded-sm border border-gris-trait bg-blanc-casse p-6 transition-all hover:-translate-y-0.5 hover:border-encre md:flex-row md:items-baseline md:gap-6"
              >
                {e.numero && (
                  <p className="meta flex-shrink-0 text-gris-meta md:w-24">
                    {e.numero}
                  </p>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-encre group-hover:text-gris-meta md:text-xl">
                    {e.titre}
                  </h3>
                  {e.sousTitre && (
                    <p className="mt-1 text-sm italic text-gris-meta">
                      {e.sousTitre}
                    </p>
                  )}
                  {e.resume && (
                    <p className="mt-2 text-sm leading-relaxed text-gris-texte">
                      {e.resume}
                    </p>
                  )}
                </div>
                <span className="meta flex-shrink-0 text-encre group-hover:translate-x-1 transition-transform">
                  Lire →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
