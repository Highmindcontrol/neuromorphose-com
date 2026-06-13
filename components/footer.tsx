import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gris-trait bg-blanc-casse">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-encre">
              Neuromorphose<span className="text-gris-meta">®</span>
            </p>
            <p className="mt-2 text-xs leading-relaxed text-gris-texte">
              Méthode d&apos;accompagnement par la visualisation géométrique
              et la futurisation. Marque déposée à l&apos;INPI.
            </p>
            <p className="mt-3 text-xs text-gris-texte">
              Édité par{" "}
              <a
                href="https://neuroactif.com"
                className="underline hover:text-encre"
                target="_blank"
                rel="noopener noreferrer"
              >
                Neuroactif Édition
              </a>
              .
            </p>
          </div>
          <div>
            <p className="meta text-gris-meta">Naviguer</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li><Link href="/methode" className="hover:text-gris-meta">La méthode</Link></li>
              <li><Link href="/manifeste" className="hover:text-gris-meta">Manifeste scientifique</Link></li>
              <li><Link href="/livre" className="hover:text-gris-meta">Le livre</Link></li>
              <li><Link href="/outils" className="hover:text-gris-meta">Les outils</Link></li>
              <li><Link href="/recherche" className="hover:text-gris-meta">Recherche</Link></li>
              <li><Link href="/faq" className="hover:text-gris-meta">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="meta text-gris-meta">Ressources liées</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <a
                  href="https://neuroactif.com"
                  className="hover:text-gris-meta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Neuroactif — espace public & praticien
                </a>
              </li>
              <li>
                <a
                  href="https://neuromorphose.fr"
                  className="hover:text-gris-meta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FFPN — fédération des praticiens
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gris-meta">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-gris-trait pt-6 text-xs text-gris-texte">
          © {new Date().getFullYear()} François Le Moing — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
