import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gris-trait bg-blanc-casse/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-base font-semibold tracking-[-0.01em] text-encre">
          Neuromorphose<span className="text-gris-meta">®</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <NavLink href="/methode">La méthode</NavLink>
          <NavLink href="/manifeste">Manifeste</NavLink>
          <NavLink href="/livre">Le livre</NavLink>
          <NavLink href="/outils" className="hidden md:inline-flex">
            Les outils
          </NavLink>
          <NavLink href="/recherche" className="hidden lg:inline-flex">
            Recherche
          </NavLink>
          <NavLink href="/faq" className="hidden lg:inline-flex">FAQ</NavLink>
          <Link
            href="/contact"
            className="ml-2 rounded-full border border-encre bg-encre px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-blanc-casse hover:text-encre"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`rounded-sm px-3 py-1.5 text-encre transition-colors hover:text-gris-meta ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
