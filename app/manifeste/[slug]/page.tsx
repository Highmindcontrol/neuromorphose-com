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
import { LecteurVocal } from "@/components/lecteur-vocal";

/** Extrait le texte pur d'un markdown pour la synthèse vocale.
 *  Retire la syntaxe MD, le HTML, les références bibliographiques,
 *  les blocs de code, et garde uniquement la prose lisible. */
function extraireTexteVocal(md: string): string {
  return md
    // Strip blocs de code
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    // Strip HTML inline
    .replace(/<[^>]*>/g, " ")
    // Strip images
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    // Strip liens (garde le texte)
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    // Strip emphasis markdown
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    // Strip titres markdown
    .replace(/^#{1,6}\s+/gm, "")
    // Strip puces de liste
    .replace(/^[\s]*[-*•]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    // Strip blockquote markers
    .replace(/^>\s?/gm, "")
    // Strip séparateurs hr
    .replace(/^[-*_]{3,}$/gm, "")
    // Strip pipe tables
    .replace(/\|/g, " ")
    // Strip entités HTML basiques
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    // Nettoie les espaces multiples
    .replace(/\s+/g, " ")
    .trim();
}

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
  let textePourVocal = "";
  try {
    const raw = await readFile(filePath, "utf-8");
    html = await marked.parse(raw, { async: true });
    textePourVocal = extraireTexteVocal(raw);
  } catch {
    html = `<p>Contenu introuvable : <code>${entree.fichier}.md</code></p>`;
  }

  const { precedent, suivant } = getNavigationChapitre(slug);

  // Texte complet à lire : titre du chapitre + sous-titre + contenu
  const texteCompletVocal = [
    entree.numero === "Liminaire"
      ? "Chapitre liminaire"
      : entree.numero
        ? `Chapitre ${entree.numero}`
        : "",
    entree.titre,
    entree.sousTitre ?? "",
    textePourVocal,
  ]
    .filter(Boolean)
    .join(". ");

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

      {/* === Lecteur vocal === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-3xl px-6 py-6 md:px-10">
          <LecteurVocal texte={texteCompletVocal} />
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
