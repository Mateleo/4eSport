<script setup lang="ts">
import lol from "~/assets/lol.webp";
import r6 from "~/assets/R6.webp";
import csgo from "~/assets/csgo.webp";
import overwatch from "~/assets/overwatch.webp";
import rocketLeague from "~/assets/rocket_league.webp";
import valorant from "~/assets/valorant.webp";
import tft from "~/assets/TFT.webp";
import fortnite from "~/assets/fortnite.webp";
import soon from "~/assets/loading.webp";
import sweatWhite from "~/assets/4ESPORT_sweat_white_2026.webp";
import sweatBlack from "~/assets/4ESPORT_sweat_black_2026.webp";
import maillot2025 from "~/assets/Maillot_2025.webp";
import hoodie2024 from "~/assets/4ESPORT_hoodie_white.webp";
import hoodie2023 from "~/assets/4ESPORT_hoodie_navy.webp";
import hoodie2022 from "~/assets/unknown.webp";
import maillot2022 from "~/assets/Maillot_ORIGIN_fonce.webp";

// `accent` = couleur du halo au survol de la tuile.
const poles = [
  { name: "League of Legends", img: lol, accent: "#c89b3c" },
  { name: "Rainbow Six", img: r6, accent: "#0d7ec9" },
  { name: "CS2", img: csgo, accent: "#f0a500" },
  { name: "Overwatch 2", img: overwatch, accent: "#f06414" },
  { name: "Rocket League", img: rocketLeague, accent: "#0089ff" },
  { name: "Valorant", img: valorant, accent: "#ff4655" },
  { name: "Teamfight Tactics", img: tft, accent: "#8a5cf6" },
  { name: "Fortnite", img: fortnite, accent: "#2ec4f1" },
  { name: "À venir ...", img: soon, accent: "#15c584" },
];

// Prix relevés sur eliminate.fr/categorie-produit/clubs-esport/4esport/
// À revérifier si la boutique bouge.
const boutique = [
  {
    name: "Sweat Brodé White",
    price: "39,40 €",
    img: sweatWhite,
    url: "https://eliminate.fr/produit/4esport-sweat-brode-white/",
    nouveau: true,
  },
  {
    name: "Sweat Brodé Black",
    price: "39,40 €",
    img: sweatBlack,
    url: "https://eliminate.fr/produit/4esport-sweat-brode/",
    nouveau: true,
  },
  {
    name: "Jersey 2025",
    price: "29,90 €",
    img: maillot2025,
    url: "https://eliminate.fr/produit/4esport-jersey-2025/",
    nouveau: true,
  },
  {
    name: "Hoodie Brodé 2024",
    price: "40,40 €",
    img: hoodie2024,
    url: "https://eliminate.fr/produit/4esport-hoodie-brode-2024/",
  },
  {
    name: "Hoodie Brodé 2023",
    price: "40,40 €",
    img: hoodie2023,
    url: "https://eliminate.fr/produit/4esport-hoodie-brode-2023/",
  },
  {
    name: "Hoodie Brodé 2022",
    price: "40,40 €",
    img: hoodie2022,
    url: "https://eliminate.fr/produit/4esport-hoodie-brode-2022/",
  },
  {
    name: "Jersey 2022",
    price: "34,99 €",
    img: maillot2022,
    url: "https://eliminate.fr/produit/4esport-jersey-2022/",
  },
];

// Carrousel boutique : les flèches n'apparaissent que s'il reste à défiler
// de ce côté, et disparaissent donc quand tout tient à l'écran.
const shopTrack = ref<HTMLElement | null>(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

function updateShopArrows() {
  const el = shopTrack.value;
  if (!el) return;
  canScrollLeft.value = el.scrollLeft > 8;
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 8;
}

function scrollShop(direction: 1 | -1) {
  const el = shopTrack.value;
  if (!el) return;
  // Défile d'un écran moins une carte, pour garder un repère visuel.
  el.scrollBy({ left: direction * (el.clientWidth - 120), behavior: "smooth" });
}

onMounted(() => {
  updateShopArrows();
  window.addEventListener("resize", updateShopArrows);
});
onBeforeUnmount(() => window.removeEventListener("resize", updateShopArrows));
</script>

<template>
  <main class="relative sm:mt-[80px]">
    <!-- Fond du hero : dégradés radiaux + grille, fondus par masque (aucun bord net) -->
    <div class="hero-bg pointer-events-none absolute inset-x-0 top-[-160px] h-[760px] -z-10" aria-hidden="true">
      <div class="hero-grid absolute inset-0"></div>
    </div>
    <div class="w-[95%] md:w-[90%] lg:w-[80%] max-w-[1500px] m-auto">
      <h1 class="font-semibold text-3xl w-full text-center sm:hidden block">
        4eSport
      </h1>
      <main class="flex sm:flex-row flex-col m-auto mt-10 justify-between">
        <div class="grid sm:grid-cols-2 grid-rows-2 sm:grid-rows-none lg:gap-20 gap-12">
          <div v-reveal>
            <div class="">
              <h1 class="text-xl md:text-3xl lg:text-4xl font-semibold">
                L'association 100% en ligne.
              </h1>
              <h1 class="hero-accent text-xl md:text-3xl lg:text-4xl font-semibold">
                Pour tous, par tous.
              </h1>
              <p class="mt-3 text-sm md:text-lg lg:text-xl text-white/70 text-justify md:text-left">
                4eSport est l’association de jeux vidéo de l'Efrei. Elle
                regroupe en son sein une multitude de pôles regroupant
                l’ensemble des jeux esportifs du moment. Elle est ouverte à tous
                sans condition.
              </p>
            </div>
            <div class="flex items-center justify-center md:justify-start mt-3">
              <a class="flex px-2 py-1 rounded-lg border-[1px] border-[white]/5 bg-[#2c15c5]/70 hover:bg-[#2c15c5] shadow-sm shadow-black/40 mr-4"
                href="https://discord.gg/4eSport" target="_blank">
                <p class="sm:text-lg text-sm font-semibold">Rejoins nous !</p>
              </a>
              <router-link
                class="flex px-2 py-1 rounded-lg border-[1px] border-[white]/5 bg-[#8215c5]/70 hover:bg-[#8215c5] shadow-sm shadow-black/40 ml-4"
                to="/cotisation">
                <p class="sm:text-lg text-sm font-semibold">Cotiser</p>
              </router-link>
            </div>
          </div>
          <div v-reveal="120">
            <HeroSlideshow />
          </div>
        </div>
      </main>
      <div class="lg:mt-40 mt-10 md:mt-20">
        <h2 v-reveal class="font-semibold text-2xl sm:text-3xl md:text-4xl mb-5">
          Nos forces
        </h2>
        <div class="sm:flex sm:justify-between grid grid-cols-2 gap-2 md:gap-6 lg:gap-20 gap-y-6">
          <div v-reveal="0" class="flex flex-col">
            <h3 class="font-semibold sm:text-xl md:text-2xl text-white/80">
              Communauté
            </h3>
            <p class="text-white/70 mt-2 md:text-lg text-xs">
              4eSport possède une communauté inégalée.
            </p>
          </div>
          <div v-reveal="80" class="flex flex-col">
            <h3 class="font-semibold sm:text-xl md:text-2xl text-white/80">
              Online
            </h3>
            <p class="text-white/70 mt-2 md:text-lg text-xs">
              De par sa nature, l'association est ouverte 24h/24h, 7j/7.
            </p>
          </div>
          <div v-reveal="160" class="flex flex-col">
            <h3 class="font-semibold sm:text-xl md:text-2xl text-white/80">
              Projets
            </h3>
            <p class="text-white/70 mt-2 md:text-lg text-xs">
              4eSport c'est également des projets tech au service de ses
              membres.
            </p>
          </div>
          <div v-reveal="240" class="flex flex-col">
            <h3 class="font-semibold sm:text-xl md:text-2xl text-white/80">
              Compétitions
            </h3>
            <p class="text-white/70 mt-2 md:text-lg text-xs">
              L'association permet à ses joueurs de participer à de grands
              tournois.
            </p>
          </div>
        </div>
      </div>
      <article class="lg:mt-40 mt-10 md:mt-20">
        <div v-reveal class="flex flex-col text-center">
          <h1 class="text-lg md:text-3xl lg:text-4xl font-semibold">
            Une association en 8 pôles
          </h1>
          <h2 class="text-base md:text-lg font-semibold text-[#15c584]">
            Quel que soit le niveau
          </h2>
        </div>
        <div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 sm:gap-10 gap-6 mt-10">
            <div v-for="(pole, i) in poles" :key="pole.name" v-reveal="i * 60" class="pole aspect-square"
              :style="{ '--accent': pole.accent }">
              <div class="pole-frame rounded-xl overflow-hidden shadow-md shadow-black/50">
                <img :src="pole.img" :alt="pole.name" loading="lazy" decoding="async"
                  class="pole-img h-full w-full object-cover" />
              </div>
              <h3 class="pole-name text-center text-white/60 mt-3 sm:text-base lg:text-lg text-xs">
                {{ pole.name }}
              </h3>
            </div>
          </div>
        </div>
      </article>
      <article class="lg:mt-40 mt-10 md:mt-20">
        <div class="flex md:justify-between flex-col md:flex-row">
          <div class="grid grid-cols-2 gap-12 order-1 m-auto">
            <div v-reveal="0" class="flex flex-col text-center">
              <p class="text-2xl">🚀</p>
              <h4 class="font-semibold sm:text-4xl text-xl tabular-nums">
                <AnimatedCounter :value="200" suffix="+" />
              </h4>
              <p class="text-xs text-white/50 md:text-sm">
                membres en 2022 et 2023
              </p>
            </div>
            <div v-reveal="80" class="flex flex-col text-center">
              <p class="text-2xl">🤗</p>
              <h4 class="font-semibold sm:text-4xl text-xl tabular-nums">
                <AnimatedCounter :value="2500" suffix="+" />
              </h4>
              <p class="text-xs text-white/50 md:text-sm">
                utilisateurs sur notre Discord
              </p>
            </div>
            <div v-reveal="160" class="flex flex-col text-center">
              <p class="text-2xl">🌟</p>
              <h4 class="font-semibold sm:text-4xl text-xl tabular-nums">
                <AnimatedCounter :value="5100" suffix="+" />
              </h4>
              <p class="text-xs text-white/50 md:text-sm">
                points LXP distribués
              </p>
            </div>
            <div v-reveal="240" class="flex flex-col text-center">
              <p class="text-2xl">🤝</p>
              <h4 class="font-semibold sm:text-4xl text-xl tabular-nums">
                <AnimatedCounter :value="30" suffix="+" />
              </h4>
              <p class="text-xs text-white/50 md:text-sm">équipes par an</p>
            </div>
          </div>
          <div v-reveal class="md:w-1/2 w-full mb-10 md:mb-0">
            <h1 class="text-lg md:text-3xl lg:text-4xl font-semibold">
              Quelques chiffres
            </h1>
            <h2 class="text-base md:text-lg font-semibold text-[#15c584]">
              pour faire rêver
            </h2>
            <p class="text-white/70 text-justify md:text-left lg:text-lg mt-2 sm:text-base text-sm">
              4eSport est présente depuis 2019 au côté de ses membres. Elle a
              rapidement évoluée pour devenir la deuxième plus grande
              association de l'école en 2022.
            </p>
          </div>
        </div>
      </article>
      <article class="lg:mt-40 mt-10 md:mt-20">
        <div v-reveal class="flex flex-col text-center mb-5">
          <h1 class="text-lg md:text-3xl lg:text-4xl font-semibold">
            Notre boutique
          </h1>
          <h2 class="text-base md:text-lg font-semibold text-[#15c584]">
            Il est temps de Flex
          </h2>
          <p class="text-xs text-white/70 mt-4">
            Réductions jusqu'à 50% pour les membres de l'association. Dans la
            limite du possible.
          </p>
        </div>
        <div v-reveal="100" class="relative mt-8">
          <!-- Flèches : uniquement au pointeur fin, le tactile fait glisser -->
          <button v-if="canScrollLeft" type="button" aria-label="Produits précédents"
            class="shop-arrow left-0 -translate-x-1/2" @click="scrollShop(-1)">
            <svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M12.707 4.293a1 1 0 010 1.414L8.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
          </button>
          <button v-if="canScrollRight" type="button" aria-label="Produits suivants"
            class="shop-arrow right-0 translate-x-1/2" @click="scrollShop(1)">
            <svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M7.293 15.707a1 1 0 010-1.414L11.586 10 7.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg>
          </button>

          <div ref="shopTrack" class="shop-track -mt-2 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 pt-2"
            @scroll.passive="updateShopArrows">
            <a v-for="item in boutique" :key="item.url" :href="item.url" target="_blank" rel="noopener"
              class="shop-item group flex shrink-0 snap-start flex-col rounded-lg border border-white/10 bg-white/[0.04] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#15c584]/40 hover:bg-white/[0.07] w-[150px] sm:w-[175px] md:w-[195px]">
              <div class="relative overflow-hidden rounded-md bg-[#2a2a2a]">
                <span v-if="item.nouveau"
                  class="absolute left-1.5 top-1.5 z-10 rounded-full bg-[#15c584] px-1.5 py-[1px] text-[9px] font-bold uppercase tracking-wide text-[#0b1120]">
                  Nouveau
                </span>
                <img :src="item.img" :alt="item.name" loading="lazy" decoding="async"
                  class="shop-img aspect-[3/4] w-full object-cover object-top" />
              </div>
              <p class="mt-2 text-xs sm:text-sm font-semibold leading-tight">{{ item.name }}</p>
              <p class="mt-0.5 text-xs font-semibold text-[#15c584]">{{ item.price }}</p>
            </a>
          </div>
        </div>
      </article>
    </div>
  </main>
</template>

<style scoped>
/* Carrousel boutique */
.shop-track {
  scrollbar-width: thin;
  scroll-padding-left: 2px;
}

.shop-arrow {
  position: absolute;
  top: 42%;
  z-index: 20;
  display: none;
  padding: 0.5rem;
  border: 1px solid rgb(255 255 255 / 0.15);
  border-radius: 9999px;
  background: rgb(19 21 41 / 0.9);
  color: rgb(255 255 255 / 0.8);
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 14px rgb(0 0 0 / 0.5);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.shop-arrow:hover {
  background: #15c584;
  color: #0b1120;
}

/* Sur écran tactile on fait glisser au doigt : les flèches n'ont pas lieu d'être. */
@media (hover: hover) and (pointer: fine) {
  .shop-arrow {
    display: block;
  }
}

/* Vignettes boutique */
.shop-img {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.shop-item:hover .shop-img {
  transform: scale(1.06);
}

/* Tuiles de pôles */
.pole-frame {
  height: 100%;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
}

.pole-img {
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.35s ease;
  filter: saturate(0.85);
}

.pole-name {
  transition: color 0.25s ease;
}

.pole:hover .pole-frame {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px -8px color-mix(in srgb, var(--accent) 70%, transparent);
}

.pole:hover .pole-img {
  transform: scale(1.08);
  filter: saturate(1.15);
}

.pole:hover .pole-name {
  color: var(--accent);
}

@media (prefers-reduced-motion: reduce) {
  .pole-frame,
  .pole-img,
  .pole-name,
  .shop-img {
    transition: none;
  }
}
</style>
