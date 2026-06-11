export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <article>
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-gris-meta">Contact</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-encre md:text-6xl">
            Nous contacter
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-gris-texte md:text-2xl">
            Une question sur la méthode, le livre, les outils ou la
            formation ? Voici comment nous joindre.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            <CarteContact
              titre="Renseignements généraux"
              email="contact@neuromorphose.com"
              description="Pour toute question sur la méthode, les ouvrages, l'orientation vers un praticien."
            />
            <CarteContact
              titre="Formation & cursus praticien"
              email="formation@neuromorphose.com"
              description="Vous êtes professionnel de l'accompagnement et souhaitez vous former à la Neuromorphose® ?"
              cta={{
                href: "https://neuroactif.com/pro",
                label: "Découvrir le cursus complet →",
              }}
            />
            <CarteContact
              titre="Presse & média"
              email="presse@neuromorphose.com"
              description="Journalistes, demandes d'interviews avec François Le Moing, dossier de presse."
            />
            <CarteContact
              titre="Recherche scientifique"
              email="recherche@neuromorphose.fr"
              description="Chercheurs, universités, laboratoires intéressés par un partenariat scientifique. Géré par la FFPN."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <p className="meta text-gris-meta">Architecture de l&apos;écosystème</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-encre md:text-3xl">
            Trois sites pour trois usages
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-gris-texte">
            <p>
              <strong className="text-encre">neuromorphose.com</strong>{" "}
              (ce site) — la méthode dans son intégralité : fondements,
              livre, outils, recherche.
            </p>
            <p>
              <strong className="text-encre">neuroactif.com</strong> —
              la plateforme d&apos;application : espace particulier avec
              les outils EndoFormia® et EndoTonia®, espace praticien pour
              les professionnels certifiés.
            </p>
            <p>
              <strong className="text-encre">neuromorphose.fr</strong> —
              le site de la FFPN, fédération des praticiens : annuaire,
              adhésion, recherche scientifique structurée.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

function CarteContact({
  titre,
  email,
  description,
  cta,
}: {
  titre: string;
  email: string;
  description: string;
  cta?: { href: string; label: string };
}) {
  return (
    <div className="rounded-sm border border-gris-trait bg-blanc-casse p-6">
      <h3 className="text-base font-semibold text-encre">{titre}</h3>
      <a
        href={`mailto:${email}`}
        className="mt-2 inline-block text-sm text-encre underline hover:text-gris-meta"
      >
        {email}
      </a>
      <p className="mt-3 text-sm leading-relaxed text-gris-texte">{description}</p>
      {cta && (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-encre hover:text-gris-meta"
        >
          {cta.label}
        </a>
      )}
    </div>
  );
}
