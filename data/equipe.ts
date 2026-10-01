// ─────────────────────────────────────────────────────────────────────────────
// Membres du CA et du bureau étendu.
//
// Photos : déposer le fichier dans `assets/equipe/` et renseigner `photo` avec
// le nom du fichier (ex. "geodum.webp"). Sans photo, un avatar avec les
// initiales est généré automatiquement.
//
// Un membre avec `description`, `parcours` ou `projets` voit sa carte devenir
// cliquable : le détail s'ouvre dans un panneau. Sans ces champs, la carte
// reste simplement informative.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Pastille affichée à côté d'une étape, façon "type" Pokémon.
 * Le libellé et la couleur de chaque type sont dans MemberDetail.vue.
 */
export type BadgeKind = "ca" | "be" | "pole" | "respo" | "membre" | "projet";

/** Une étape du parcours : "2022 → 2024", "Depuis 2024", "2023"... */
export interface Step {
  period: string;
  label: string;
  badge?: BadgeKind;
  /** Met l'étape en avant (poste actuel, moment charnière). */
  highlight?: boolean;
}

export interface Project {
  name: string;
  text: string;
}

export interface Member {
  /** Pseudo en jeu. Mis en avant sur la carte. */
  pseudo?: string;
  /** Prénom + nom. */
  name?: string;
  role: string;
  photo?: string;
  /** Résumé rédigé, 2 à 4 phrases. */
  description?: string;
  parcours?: Step[];
  projets?: Project[];
}

export interface Team {
  slug: string;
  title: string;
  subtitle: string;
  members: Member[];
}

export const teams: Team[] = [
  {
    slug: "ca",
    title: "Conseil d'administration",
    subtitle: "Le CA",
    members: [
      {
        pseudo: "Geodum",
        photo: "geodum.webp",
        name: "Jules Rougier",
        role: "Président",
        description:
          "Entrée au bureau en 2023 par la trésorerie, puis la présidence l'année suivante. Présent sur quasiment tous les stands et journées portes ouvertes : le visage de l'asso en présentiel. Porte aussi l'association sur la scène TFT française à force de streams, de tournois et d'accompagnement des meilleurs joueurs vers des compétitions sérieuses. Assez loin pour que Riot vienne frapper à la porte.",
        parcours: [
          { period: "2023", label: "Trésorier", badge: "ca" },
          { period: "Depuis 2024", label: "Président", badge: "ca", highlight: true },
        ],
        projets: [
          {
            name: "SGNow 2023",
            text: "Participation au stream caritatif organisé par le SGN.",
          },
          {
            name: "La scène TFT",
            text: "Streams, présence sur de nombreux tournois TFT français et accompagnement des meilleurs joueurs vers des compétitions sérieuses. Résultat : Riot contacte 4eSport pour l'intégrer aux clubs fondateurs des TFT Clubs France.",
          },
        ],
      },
      {
        pseudo: "AzuXo",
        photo: "azuxo.webp",
        name: "Louis Hislaire",
        role: "Vice-Président",
        description:
          "Arrivée en L1 en 2022, côté joueur. Monte LE4, une ligue League of Legends au long cours, et en tient absolument tous les bouts : administration du tournoi, régie des streams, assets visuels, communication Discord. Rejoint le CA en 2024 comme vice-président, poste toujours occupé aujourd'hui.",
        parcours: [
          { period: "2022", label: "Arrivée dans l'asso, en L1", badge: "membre" },
          { period: "2024", label: "Création de la ligue LE4", badge: "projet" },
          { period: "Depuis 2024", label: "Vice-Président", badge: "ca", highlight: true },
        ],
        projets: [
          {
            name: "LE4",
            text: "Ligue League of Legends créée de toutes pièces : administration, régie des streams, assets visuels et communication Discord.",
          },
        ],
      },
      {
        pseudo: "Valgebo",
        photo: "valgebo.webp",
        name: "Valentin Lebras",
        role: "Trésorier",
        description:
          "Arrivée en L1 en 2022, avec l'envie de s'investir tout de suite. En moins d'un an, monte le pôle Splatoon à partir de rien, juste en allant chercher des joueurs motivés. La démonstration que n'importe qui peut ouvrir un pôle. Passe ensuite de l'autre côté du bureau : vice-trésorier en 2024, trésorier de l'association depuis 2025.",
        parcours: [
          { period: "2022", label: "Arrivée dans l'asso, en L1", badge: "membre" },
          { period: "2022 → 2024", label: "Responsable Splatoon", badge: "pole" },
          { period: "2024 → 2025", label: "Vice-Trésorier, entrée au CA", badge: "ca" },
          { period: "Depuis 2025", label: "Trésorier", badge: "ca", highlight: true },
        ],
        projets: [
          {
            name: "Pôle Splatoon",
            text: "Ouvert en solo en moins d'un an, sans rien au départ, et actif jusqu'à fin 2023. La preuve qu'un pôle ne tient qu'à une personne motivée.",
          },
          {
            name: "LE4",
            text: "Ligue ouverte à tous les niveaux, co-organisée. Casts en stream, visuels pro chaque semaine et de vraies rivalités entre équipes, sans doute le plus beau projet de ces dernières années.",
          },
        ],
      },
      {
        pseudo: "Take",
        name: "Vincent Burgevin",
        role: "Secrétaire Général",
        photo: "take.webp",
      },
      {
        pseudo: "Quasarhiver",
        photo: "quasarhiver.webp",
        name: "Maxime Duret",
        role: "Administrateur",
        description:
          "Arrivée en 2023, puis trois ans à la tête du pôle Fortnite. Y installe des tournois réguliers qui finissent par rassembler jusqu'à 100 joueurs, avant de rejoindre le bureau.",
        parcours: [
          { period: "2023 → 2026", label: "Responsable Fortnite", badge: "pole" },
          { period: "Depuis 2026", label: "Administrateur", badge: "ca", highlight: true },
        ],
        projets: [
          {
            name: "Les tournois Fortnite",
            text: "Un rythme régulier installé sur trois ans, jusqu'à réunir 100 joueurs sur un même tournoi.",
          },
        ],
      },
      {
        pseudo: "Rafixol",
        name: "Rafael Sanches Ruivo",
        role: "Vice-Trésorier",
        photo: "rafixol.webp",
      },
    ],
  },
  {
    slug: "be",
    title: "Bureau étendu",
    subtitle: "Le BE",
    members: [
      {
        pseudo: "vxwed",
        name: "Vidjay Velayoudam",
        role: "Responsable Communication",
        photo: "vxwed.webp",
        description:
          "Arrivée en 2023 avec une mission précise : réanimer un compte Instagram à l'abandon. Remet en route les posts tournois et events, puis passe responsable communication et entre au BE. Le poste, c'est surtout le lien direct avec les étudiants : leurs questions, leurs réactions en live pendant la Grosse Ligue, et l'évolution de l'asso vue de l'extérieur.",
        parcours: [
          { period: "2023", label: "Responsable Instagram", badge: "respo" },
          { period: "Depuis 2025", label: "Responsable Communication, entrée au BE", badge: "be", highlight: true },
        ],
        projets: [
          {
            name: "Le compte Instagram",
            text: "Repris quasiment mort, relancé autour des tournois et des events. Le relais des phases de Grosse Ligue, surtout, et les échanges en direct avec les étudiants.",
          },
          {
            name: "Le pull de l'année",
            text: "Participation au design.",
          },
        ],
      },
      {
        pseudo: "Lila",
        name: "Lila Bienvenu",
        role: "Responsable Artistique",
        photo: "lila-bienvenu.webp",
      },
      {
        pseudo: "Totom",
        role: "Responsable Partenariats",
        photo: "totom.webp",
      },
    ],
  },
];
