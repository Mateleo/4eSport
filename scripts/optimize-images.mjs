// Convertit les images de assets/ en WebP à côté des originaux.
// Les originaux sont conservés (Vite ne bundle que ce qui est importé).
//
//   node scripts/optimize-images.mjs
//
// Les .svg sont ignorés (déjà vectoriels).
//
// Le script convertit TOUT assets/, y compris des images qu'aucune page
// n'utilise : après un passage, les .webp non référencés sont juste du bruit
// dans `git status` et peuvent être supprimés sans risque.
import { readdir, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const DIR = "assets";
const MAX_WIDTH = 1200;
/** Côté des portraits de assets/equipe/, affichés en rond de 96 px (x2 pour le retina). */
const AVATAR_SIZE = 256;

// Parcourt assets/ et ses sous-dossiers (assets/equipe/ notamment).
async function collect(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const found = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...(await collect(path)));
    } else if ([".jpg", ".jpeg", ".png"].includes(extname(entry.name).toLowerCase())) {
      found.push(path);
    }
  }

  return found;
}

const files = await collect(DIR);

let before = 0;
let after = 0;

for (const src of files) {
  const file = basename(src);
  const out = join(src.slice(0, -file.length), `${basename(file, extname(file))}.webp`);

  const image = sharp(src);
  const { width } = await image.metadata();

  // Les portraits de assets/equipe/ sont affichés dans un rond : on les recadre
  // en carré sur la zone saillante (le visage) plutôt que bêtement au centre,
  // sinon une photo en pied se retrouve coupée au niveau du torse.
  const isPortrait = src.replaceAll("\\", "/").includes("assets/equipe/");

  const pipeline = isPortrait
    ? image.resize(AVATAR_SIZE, AVATAR_SIZE, {
        fit: "cover",
        position: sharp.strategy.attention,
      })
    : image.resize({
        width: Math.min(width ?? MAX_WIDTH, MAX_WIDTH),
        withoutEnlargement: true,
      });

  await pipeline.webp({ quality: 82, effort: 5 }).toFile(out);

  const srcSize = (await stat(src)).size;
  const outSize = (await stat(out)).size;
  before += srcSize;
  after += outSize;

  const saved = Math.round((1 - outSize / srcSize) * 100);
  console.log(
    `${src.padEnd(44)} ${(srcSize / 1024).toFixed(0).padStart(6)} Ko -> ${(outSize / 1024)
      .toFixed(0)
      .padStart(6)} Ko  (-${saved}%)`
  );
}

console.log(
  `\nTotal : ${(before / 1024 / 1024).toFixed(2)} Mo -> ${(after / 1024 / 1024).toFixed(2)} Mo`
);
