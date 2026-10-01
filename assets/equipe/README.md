# Photos de l'équipe

Déposer les portraits **ici**, avec exactement ces noms de fichiers — ils sont
déjà référencés dans `data/equipe.ts`, il n'y a donc rien d'autre à modifier :

| Fichier                | Membre                              |
| ---------------------- | ----------------------------------- |
| `geodum.webp`          | Jules Rougier — Président           |
| `azuxo.webp`           | Louis Hislaire — Vice-Président     |
| `valgebo.webp`         | Valentin Lebras — Trésorier         |
| `take.webp`            | Vincent Burgevin — Secrétaire Général |
| `quasarhiver.webp`     | Maxime Duret — Administrateur       |
| `rafixol.webp`         | Raphaël — Vice-Trésorier            |
| `vxwed.webp`           | Responsable Communication           |
| `lila-bienvenu.webp`   | Lila Bienvenu — Responsable Artistique |
| `totom.webp`           | Responsable Partenariats            |

Tant qu'un fichier est absent, la carte affiche une pastille avec les initiales.
Aucun risque de casse : les noms manquants sont simplement ignorés.

## Format

Les photos sont affichées **en rond, 96 × 96 px**, donc :

- cadrer serré sur le visage et fournir une image **carrée** — une photo en
  pied ou en portrait sera recadrée au centre (`object-cover`) et risque de
  couper la tête ;
- **WebP** de préférence, ~200 Ko max.

Pour convertir des JPG/PNG déposés ici :

```bash
node scripts/optimize-images.mjs
```

Le script ne traite que `assets/` à la racine. Pour ce dossier, le plus simple
est de convertir à la main ou d'adapter la constante `DIR` du script.
