import Link from "next/link";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";
import {
  MANIFESTE,
  getEntreeManifeste,
  getNavigationChapitre,
} from "@/lib/manifeste";

export async function generateStaticParams() {
  return MANIFESTE.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entree = getEntreeManifeste(slug);
  if (!entree) return { title: "Page introuvable" };
  return {
    title: entree.titre,
    description:
      entree.resume ??
      `${entree.titre} — manifeste scientifique de la Neuromorphose®.`,
  };
}

export default async function ChapitreManifestePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entree = getEntreeManifeste(slug);
  if (!entree) notFound();

  const filePath = path.join(
    process.cwd(),
    "content",
    "manifeste",
    `${entree.fichier}.md`,
  );

  let html = "";
  try {
    const raw = await readFile(filePath, "utf-8");
    html = await marked.parse(raw, { async: true });
  } catch {
    html = `<p>Contenu introuvable : <code>${entree.fichier}.md</code></p>`;
  }

  const { precedent, suivant } = getNavigationChapitre(slug);

  return (
    <article>
      {/* === Fil d'Ariane + retour === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-5xl px-6 py-6 md:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3 text-xs text-gris-meta">
            <p>
              <Link href="/" className="hover:text-encre">Accueil</Link>
              {" · "}
              <Link href="/manifeste" className="hover:text-encre">
                Manifeste scientifique
              </Link>
              {entree.numero && ` · Chapitre ${entree.numero}`}
            </p>
            <Link
              href="/manifeste"
              className="meta hover:text-encre"
            >
              ← Retour à la table des matières
            </Link>
          </div>
        </div>
      </section>

      {/* === Titre du chapitre === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
          {entree.numero && (
            <p className="meta text-gris-meta">
              {entree.numero === "Liminaire"
                ? "Chapitre liminaire"
                : `Chapitre ${entree.numero}`}
            </p>
          )}
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-encre md:text-5xl">
            {entree.titre}
          </h1>
          {entree.sousTitre && (
            <p className="mt-3 text-lg italic text-gris-meta">
              {entree.sousTitre}
            </p>
          )}
        </div>
      </section>

      {/* === Contenu === */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
          <div
            className="prose-manifeste"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>

      {/* === Navigation précédent / suivant === */}
      {(precedent || suivant) && (
        <section className="border-t border-gris-trait bg-gris-fond">
          <div className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {precedent ? (
                <Link
                  href={`/manifeste/${precedent.slug}`}
                  className="group flex flex-col gap-1 rounded-sm border border-gris-trait bg-blanc-casse p-5 transition-all hover:-translate-y-0.5 hover:border-encre"
                >
                  <p className="meta text-gris-meta">← Précédent</p>
                  <p className="text-base font-semibold tracking-[-0.01em] text-encre group-hover:text-gris-meta">
                    {precedent.titre}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {suivant ? (
                <Link
                  href={`/manifeste/${suivant.slug}`}
                  className="group flex flex-col gap-1 rounded-sm border border-gris-trait bg-blanc-casse p-5 text-right transition-all hover:-translate-y-0.5 hover:border-encre"
                >
                  <p className="meta text-gris-meta">Suivant →</p>
                  <p className="text-base font-semibold tracking-[-0.01em] text-encre group-hover:text-gris-meta">
                    {suivant.titre}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
