// ─────────────────────────────────────────────────────────────────────────────
// Chronologie de l'association.
//
// Une année sans évènement n'est pas affichée : les années scaffoldées plus bas
// (2024 → 2026) resteront invisibles tant qu'elles seront vides, rien de
// "à compléter" ne part donc en prod.
// ─────────────────────────────────────────────────────────────────────────────

export interface Year {
  year: number;
  /** Phrase courte affichée en tête d'année. Optionnel. */
  tagline?: string;
  events: string[];
}

export const timeline: Year[] = [
  {
    year: 2018,
    tagline: "Les origines",
    events: [
      "4eSport n'existe pas encore sous le nom que nous le connaissons aujourd'hui. C'est un discord de 20 personnes, fermé. Un simple club du BDS.",
      "Arrivé de Cleaver, Gros Poisson et Némésis. Cleaver s'occupe de démocratiser le club en ouvrant le discord à tous. Le nom 4eSport sera utilisé.",
      "Némésis et Gros Poisson forment une team League of Legends pour l'arrivée d'une nouvelle Compétition : La Grosse Ligue.",
    ],
  },
  {
    year: 2019,
    tagline: "Champions de France",
    events: [
      "L'équipe 4eSport avec Gros Poisson et Némésis gagne la compétition. L'équipe devient championne de France étudiant de League of Legends. La communication de l'EFREI s'empare du sujet. La popularité du discord explose.",
      "Champion de France, 4eSport est qualifiée pour représenter la France aux championnats européen étudiant de League of Legends. Cependant, elle finit avant dernière de sa poule.",
      "Cleaver établie officiellement 4eSport en tant qu'association loi 1901. Il est le premier président.",
      "Cleaver pose les bases de l'administration de 4eSport. CA, responsable pôle, équipes ELITE etc...",
      "Mateleo, nouveau L1, devient le premier responsable League of Legends.",
      "Création du pôle R6.",
    ],
  },
  {
    year: 2020,
    tagline: "La montée en puissance",
    events: [
      "4eSport devient le deuxième plus gros discord de l'école.",
      "League of Legends représente 80% de l'activité du Discord. CSGO, Hearthstone et Overwatch complètent le reste.",
      "Mateleo évolue pour devenir responsable eSport et rentre au CA",
      "L'équipe ELITE LoL, toujours avec Grois Poisson et Némésis, finit 4e pour cette GL. La visibilité nationale de l'association est assurée.",
    ],
  },
  {
    year: 2021,
    tagline: "L'association 100% en ligne",
    events: [
      "Mateleo devient le nouveau président de l'association.",
      "Une cotisation de 10€ est mise en place.",
      "Le pôle R6 continue de grossir.",
      "La pandémie frappe de plein fouet le monde associatif. 4eSport, association 100% en ligne, connait un succès sans précédent.",
      "Pendant 2 semaines, NotEnoughCards, le jeu de cartes à collectionner de l'association fait fureur.",
      "Le maillot 4eSport voit le jour.",
      "4eSport devient officieusement la plus grande association de l'école avec 218 adhérents.",
    ],
  },
  {
    year: 2022,
    tagline: "Modernisation",
    events: [
      "La pôle Valorant est créé. Pour la première fois, il dépasse le pôle League of Legends en termes de recrutement et le pôle R6 en terme d'activité.",
      "P4ND4 entre au CA en tant que Vice-président.",
      "L'association se modernise et s'automatise. Tickets, LXP, etc...",
      "Le site web 4eSport.fr est mis en ligne.",
      "Un pull associatif est proposé aux membres.",
      "NEC S2 dépasse les 200 joueurs uniques en 2 semaines.",
      "Une communication renforcée se met en place. Les affiches et messages sont plus récurrents. Une responsable communication est recrutée.",
    ],
  },
  {
    year: 2023,
    events: ["Une variante du pull est proposée."],
  },

  // ⚠️ À COMPLÉTER — années scaffoldées, invisibles tant que `events` est vide.
  { year: 2024, events: [] },
  { year: 2025, events: [] },
  { year: 2026, events: [] },
];
