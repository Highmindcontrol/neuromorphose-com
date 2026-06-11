export const metadata = {
  title: "FAQ",
};

const QUESTIONS = [
  {
    q: "La Neuromorphose® est-elle reconnue scientifiquement ?",
    a: "La méthode est jeune (formalisée publiquement en 2025) et son cadre de validation scientifique se met en place via la FFPN à partir de septembre 2026 — partenariats académiques, études structurées, publications. Aucune étude validée par les pairs n'est encore disponible. La page Recherche détaille les axes en cours de structuration.",
  },
  {
    q: "Est-ce un soin médical ?",
    a: "Non. La Neuromorphose® n'est ni un soin médical, ni une thérapie réglementée. Elle ne soigne pas, ne diagnostique pas, ne prescrit pas. C'est un outil d'accompagnement qui s'exerce en complément, jamais en substitution, d'un suivi médical le cas échéant. Cette frontière est inscrite dans la charte déontologique de la FFPN.",
  },
  {
    q: "Qui peut pratiquer la Neuromorphose® ?",
    a: "Tout professionnel de l'accompagnement formé via le cursus officiel de Neuroactif Pro Santé et certifié par la FFPN. Cela inclut autant les psychologues, psychiatres, psychothérapeutes (santé mentale réglementée) que les hypnopraticiens, sophrologues, naturopathes, coachs, thérapeutes énergétiques (accompagnants non médicaux).",
  },
  {
    q: "Combien coûte une séance ?",
    a: "Les tarifs sont fixés librement par chaque praticien selon son contexte (statut, pays, type d'accompagnement). À titre indicatif, les séances en cabinet en France oscillent autour de 60-90 € pour les accompagnants non médicaux et 80-150 € pour les professionnels de santé mentale.",
  },
  {
    q: "Puis-je pratiquer en autonomie via les outils ?",
    a: "Oui, les outils EndoFormia® et EndoTonia® sont accessibles aux particuliers sur la plateforme Neuroactif (espace particulier), avec un freemium gratuit et des fonctionnalités avancées en abonnement. L'accompagnement par un praticien certifié reste recommandé pour les problématiques profondes ou les situations de souffrance importante.",
  },
  {
    q: "Quelle est la durée de la formation pour devenir praticien ?",
    a: "Le cursus complet est conçu sur 6 à 9 mois, à raison de 4-6 heures par semaine. Il combine cours théoriques, supervisions, mises en situation avec sujets-cobayes et examens de validation. Plus d'informations sur Neuroactif Pro Santé.",
  },
  {
    q: "La méthode convient-elle aux enfants ?",
    a: "La forme adulte de la méthode n'est pas adaptée aux enfants. Une variante pédiatrique est en cours de réflexion mais n'est pas encore disponible. Pour les mineurs, l'orientation vers un professionnel de santé spécialisé est recommandée.",
  },
  {
    q: "Pourquoi parler de futurisation et pas simplement de visualisation ?",
    a: "La visualisation classique projette dans un futur vague (« imaginez-vous heureux dans 5 ans »). La futurisation encode l'état souhaité en forme géométrique précise et l'ancre dans le présent par des protocoles structurés. C'est cette précision et cette répétabilité qui distinguent la futurisation de la visualisation — et qui rendent la transformation mesurable.",
  },
  {
    q: "Comment trouver un praticien certifié près de chez moi ?",
    a: "L'annuaire public des praticiens certifiés FFPN ouvre en septembre 2026 sur neuromorphose.fr — recherche par ville, région, spécialité, type de praticien.",
  },
  {
    q: "Y a-t-il un risque de dépendance au praticien ?",
    a: "La Neuromorphose® est explicitement conçue pour autonomiser le sujet, pas pour le rendre dépendant. Les outils sont accessibles en autonomie, les formes encodées appartiennent au sujet, et la charte déontologique interdit toute pratique qui maintiendrait artificiellement la dépendance. Au contraire, l'objectif est de transmettre au sujet la capacité à pratiquer seul à terme.",
  },
];

export default function FaqPage() {
  return (
    <article>
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-gris-meta">FAQ</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-encre md:text-6xl">
            Questions fréquentes
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-gris-texte md:text-2xl">
            Les questions qui reviennent le plus souvent sur la méthode,
            sa reconnaissance, son cadre éthique et son accès.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <div className="space-y-8">
            {QUESTIONS.map((item, i) => (
              <Question key={i} numero={String(i + 1).padStart(2, "0")} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

function Question({ numero, q, a }: { numero: string; q: string; a: string }) {
  return (
    <div className="border-b border-gris-trait pb-8">
      <p className="meta text-gris-meta">{numero}</p>
      <h2 className="mt-2 text-xl font-semibold tracking-[-0.01em] text-encre md:text-2xl">
        {q}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-gris-texte">{a}</p>
    </div>
  );
}
