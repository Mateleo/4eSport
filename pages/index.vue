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

let display = ref(true);

// Grand Tournoi de Rentrée 26-27 : 12 septembre 2026 à 20h.
const tournoiDate = "2026-09-12T20:00:00+02:00";
</script>

<template>
  <main class="relative sm:mt-[80px]">
    <!-- Halos décoratifs derrière le hero -->
    <div class="pointer-events-none absolute inset-x-0 top-[-160px] h-[520px] overflow-hidden -z-10" aria-hidden="true">
      <div class="glow glow-a absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-[#2c15c5]/40 blur-[110px]">
      </div>
      <div
        class="glow glow-b absolute right-[-5%] top-[60px] h-[380px] w-[380px] rounded-full bg-[#15c584]/25 blur-[110px]">
      </div>
      <div
        class="glow glow-c absolute left-1/2 top-[120px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#8215c5]/30 blur-[120px]">
      </div>
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
              <h1 class="textxl md:text-3xl lg:text-4xl font-semibold text-[#15c584]">
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
            <img src="../assets/ESL.webp" alt="" loading="eager" decoding="async"
              class="shadow-black/30 shadow-lg sm:rounded-md rounded-sm sm:max-h-[400px] m-auto h-[200px] sm:h-auto w-full object-cover" />
          </div>
        </div>
      </main>
      <section v-reveal class="mt-12 md:mt-16">
        <Countdown :target="tournoiDate" label="Grand Tournoi de Rentrée 26-27" />
      </section>
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
      <TwitchEmbed />
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
        <div v-reveal="100" class="flex sm:justify-center mt-10 justify-between flex-wrap md:flex-nowrap gap-2 sm:gap-0">
          <a class="my-auto" href="https://eliminate.fr/produit/4esport-hoodie-brode-2024/" target="_blank">
            <div
              class="p-2 bg-[#333333] rounded-lg shadow-black/50 shadow-md hover:bg-[#444444] transition-colors ease-in">
              <img src="../assets/4ESPORT_hoodie_white.webp" alt="" loading="lazy" decoding="async"
                class="h-[140px] w-[90px] md:h-[243px] md:w-[225px] object-cover" />
            </div>
            <p class="text-white/70 text-center mt-2">Pull v3 (Blanc) | 40€</p>
          </a>
          <a class="my-auto" href="https://eliminate.fr/produit/4esport-hoodie-brode-2022/" target="_blank">
            <div
              class="p-2 bg-[#333333] rounded-lg shadow-black/50 shadow-md hover:bg-[#444444] transition-colors ease-in">
              <img src="../assets/unknown.webp" alt="" loading="lazy" decoding="async"
                class="h-[140px] w-[90px] md:h-[270px] md:w-[250px] object-cover" />
            </div>
            <p class="text-white/70 text-center mt-2">Pull v1 | 40€</p>
          </a>
          <a class="z-10 md:-mx-2" href="https://eliminate.fr/produit/4esport-jersey-2022/" target="_blank">
            <div
              class="p-2 bg-[#333333] rounded-lg shadow-black/50 shadow-md hover:bg-[#444444] transition-colors ease-in"
              @mouseenter="display = false" @mouseleave="display = true">
              <img v-if="display" src="../assets/Maillot_ORIGIN_fonce.webp" alt=""
                class="h-[140px] w-[90px] sm:h-[220px] sm:w-[150px] md:h-[320px] md:w-[250px] object-cover scale-[1.2]" />
              <img v-else src="../assets/Maillot_ORIGIN_MODELISATION_3D.webp" alt=""
                class="h-[140px] w-[90px] sm:h-[220px] sm:w-[150px] md:h-[320px] md:w-[250px] object-cover scale-[1.2]" />
              <div />
            </div>
            <p class="text-white/70 text-center mt-2">Maillot | 35€</p>
          </a>
          <a class="my-auto" href="https://eliminate.fr/produit/4esport-hoodie-brode-2023/" target="_blank">
            <div
              class="p-2 bg-[#333333] rounded-lg shadow-black/50 shadow-md hover:bg-[#444444] transition-colors ease-in">
              <img src="../assets/4ESPORT_hoodie_navy.webp" alt="" loading="lazy" decoding="async"
                class="h-[140px] w-[90px] md:h-[270px] md:w-[250px] object-cover" />
            </div>
            <p class="text-white/70 text-center mt-2">Pull v2 | 40€</p>
          </a>
          <a class="my-auto" href="https://eliminate.fr/produit/4esport-hoodie-brode-2024/" target="_blank">
            <div
              class="p-2 bg-[#333333] rounded-lg shadow-black/50 shadow-md hover:bg-[#444444] transition-colors ease-in">
              <img src="../assets/4ESPORT_hoodie_pink.webp" alt="" loading="lazy" decoding="async"
                class="h-[140px] w-[90px] md:h-[243px] md:w-[225px] object-cover" />
            </div>
            <p class="text-white/70 text-center mt-2">Pull v3 (Rose) | 40€</p>
          </a>
        </div>
      </article>
    </div>
  </main>
</template>

<style scoped>
/* Halos du hero : dérive lente pour éviter un fond figé */
.glow {
  will-change: transform;
}

.glow-a {
  animation: drift-a 18s ease-in-out infinite alternate;
}

.glow-b {
  animation: drift-b 22s ease-in-out infinite alternate;
}

.glow-c {
  animation: drift-c 26s ease-in-out infinite alternate;
}

@keyframes drift-a {
  to {
    transform: translate3d(60px, 40px, 0) scale(1.15);
  }
}

@keyframes drift-b {
  to {
    transform: translate3d(-50px, 50px, 0) scale(1.1);
  }
}

@keyframes drift-c {
  to {
    transform: translate3d(-50%, -40px, 0) scale(1.2);
  }
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
  .glow {
    animation: none;
  }

  .pole-frame,
  .pole-img,
  .pole-name {
    transition: none;
  }
}
</style>
