/**
 * Structure du manifeste scientifique de la Neuromorphose® — table
 * des matières navigable. Source : 11 chapitres + abrégés + biblio +
 * glossaire rédigés par François Le Moing et stockés en MD dans
 * content/manifeste/.
 *
 * Chaque entrée pointe vers un fichier MD lu en build time. La route
 * /manifeste/[slug] rend chaque entrée via marked.
 */

export type EntreeManifeste = {
  slug: string;
  fichier: string; // sans .md
  numero?: string;
  titre: string;
  sousTitre?: string;
  resume?: string;
  groupe: "ouverture" | "chapitres" | "abreges" | "ressources";
};

export const MANIFESTE: EntreeManifeste[] = [
  // === Ouverture ===
  {
    slug: "dedicace",
    fichier: "dedicace",
    titre: "Dédicace",
    sousTitre: "Voix de l'auteur",
    groupe: "ouverture",
  },
  {
    slug: "chapitre-liminaire",
    fichier: "chapitre-liminaire",
    numero: "Liminaire",
    titre: "Présentation et voix du praticien",
    resume:
      "Posture personnelle de François Le Moing. Dix années d'observation clinique en cabinet, mille cinq cents patients accompagnés. Statut épistémologique honnête de la doctrine présentée.",
    groupe: "ouverture",
  },

  // === Chapitres ===
  {
    slug: "chapitre-1",
    fichier: "chapitre-1",
    numero: "01",
    titre: "Le cadre conceptuel et clinique",
    resume:
      "Origine empirique des formes neuroactives. La triple articulation des objets — Neuromorphose® comme méthode, EndoFormia® comme outil, Neuroactif comme écosystème. Les trois modes (résolution, exploration, futurisation).",
    groupe: "chapitres",
  },
  {
    slug: "chapitre-2",
    fichier: "chapitre-2",
    numero: "02",
    titre: "Ce qu'est la Neuromorphose®, et ce qu'elle n'est pas",
    resume:
      "Différenciation méthodologique vis-à-vis de l'hypnose, des approches somatiques, de la visualisation positive et du dessin libre. Filiation revendiquée — ericksonienne, somatique, géométrique.",
    groupe: "chapitres",
  },
  {
    slug: "chapitre-3",
    fichier: "chapitre-3",
    numero: "03",
    titre: "La méthode clinique en sept temps",
    resume:
      "Anamnèse, phase préhypnotique, induction, émergence de la forme, matérialisation, sortie écologique, consolidation. Deux observations transversales — le thérapeute n'est jamais en panne, la dimension ludique.",
    groupe: "chapitres",
  },
  {
    slug: "chapitre-4",
    fichier: "chapitre-4",
    numero: "04",
    titre: "La doctrine de la futurisation",
    resume:
      "Rupture conceptuelle avec la visualisation classique. L'ancrage géométrique d'une intention crée une trace mnésique traitée par le cerveau avec la même densité qu'un souvenir réel.",
    groupe: "chapitres",
  },
  {
    slug: "chapitre-5",
    fichier: "chapitre-5",
    numero: "05",
    titre: "Fondements neuroscientifiques",
    resume:
      "Perception géométrique, rotation mentale (Shepard et Metzler 1971), topologie des réseaux neuronaux (Blue Brain Project), simulation prospective (Schacter, Addis), cellules de lieu (O'Keefe, Nobel 2014), théorie polyvagale (Porges), interoception (Damasio).",
    groupe: "chapitres",
  },
  {
    slug: "chapitre-6",
    fichier: "chapitre-6",
    numero: "06",
    titre: "Fondation cristallographique et biologique",
    resume:
      "Pourquoi la nature converge vers les solides de Platon. Capsides virales icosaédriques (Caspar et Klug 1962), buckminsterfullerène C60 (Nobel 1996), quasi-cristaux (Shechtman, Nobel 2011). La géométrie comme langage commun entre matière et vivant.",
    groupe: "chapitres",
  },
  {
    slug: "chapitre-7",
    fichier: "chapitre-7",
    numero: "07",
    titre: "Filiation philosophique et psychanalytique",
    resume:
      "Platon et le Timée. Néoplatonisme (Plotin, Proclus). Jung et la géométrie psychique (quaternité, mandala, individuation). Marie-Louise von Franz. Winnicott et l'objet transitionnel. Médiations en thérapie contemporaine (Roussillon).",
    groupe: "chapitres",
  },
  {
    slug: "chapitre-8",
    fichier: "chapitre-8",
    numero: "08",
    titre: "Filiation hypnotique et somatique",
    resume:
      "Milton Erickson en amont de la PNL. Approches somatiques contemporaines (Levine, Ogden, Porges). La triple négation (ne soigne pas, ne diagnostique pas, ne prescrit pas), les trois niveaux d'encadrement.",
    groupe: "chapitres",
  },
  {
    slug: "chapitre-9",
    fichier: "chapitre-9",
    numero: "09",
    titre: "Neuroactif — l'écosystème professionnel",
    resume:
      "La plateforme neuroactif.com comme infrastructure complète au service du praticien. Sept fonctions — mapping longitudinal, assistance LYA, espace patient sécurisé, conformité HDS, formation continue, annuaire des praticiens, dimension communauté et recherche.",
    groupe: "chapitres",
  },
  {
    slug: "chapitre-10",
    fichier: "chapitre-10",
    numero: "10",
    titre: "La perspective ouverte",
    resume:
      "Ce que la Neuromorphose® ouvre comme champ de recherche. Pistes pour des études cliniques à venir. L'invitation aux praticiens à observer et contribuer. L'ambition à long terme d'une médecine somato-imaginative.",
    groupe: "chapitres",
  },

  // === Abrégés ===
  {
    slug: "abrege-niveau-1",
    fichier: "abrege-niveau-1",
    titre: "Abrégé niveau 1",
    sousTitre: "Format ultra-court",
    resume: "Vue synthétique de la méthode en quelques pages.",
    groupe: "abreges",
  },
  {
    slug: "abrege-niveau-2",
    fichier: "abrege-niveau-2",
    titre: "Abrégé niveau 2",
    sousTitre: "Format intermédiaire",
    resume:
      "Présentation structurée des fondations conceptuelles et de la méthode clinique.",
    groupe: "abreges",
  },
  {
    slug: "abrege-niveau-3",
    fichier: "abrege-niveau-3",
    titre: "Abrégé niveau 3",
    sousTitre: "Format complet",
    resume:
      "Synthèse approfondie incluant les fondements scientifiques et l'écosystème. Disponible aussi en anglais et espagnol.",
    groupe: "abreges",
  },

  // === Ressources ===
  {
    slug: "bibliographie",
    fichier: "bibliographie",
    titre: "Bibliographie complète",
    sousTitre: "Sources classées par discipline",
    resume:
      "Toutes les sources convoquées dans le manifeste, classées par discipline avec DOI quand disponible.",
    groupe: "ressources",
  },
  {
    slug: "glossaire",
    fichier: "glossaire",
    titre: "Glossaire",
    sousTitre: "Termes techniques définis",
    resume:
      "Définitions précises des termes techniques utilisés dans le document, pour le lecteur professionnel.",
    groupe: "ressources",
  },
];

export function getEntreeManifeste(slug: string): EntreeManifeste | undefined {
  return MANIFESTE.find((e) => e.slug === slug);
}

export function getEntreesParGroupe(): Record<string, EntreeManifeste[]> {
  const groupes: Record<string, EntreeManifeste[]> = {
    ouverture: [],
    chapitres: [],
    abreges: [],
    ressources: [],
  };
  for (const e of MANIFESTE) groupes[e.groupe].push(e);
  return groupes;
}

/** Navigation chapitre précédent / suivant. Boucle uniquement sur les
 *  chapitres principaux (pas les abrégés ni ressources). */
export function getNavigationChapitre(slug: string): {
  precedent?: EntreeManifeste;
  suivant?: EntreeManifeste;
} {
  const ordreLecture = MANIFESTE.filter(
    (e) => e.groupe === "ouverture" || e.groupe === "chapitres",
  );
  const index = ordreLecture.findIndex((e) => e.slug === slug);
  if (index === -1) return {};
  return {
    precedent: index > 0 ? ordreLecture[index - 1] : undefined,
    suivant:
      index < ordreLecture.length - 1 ? ordreLecture[index + 1] : undefined,
  };
}
