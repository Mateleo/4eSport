<script setup lang="ts">
import retake from "~/assets/retake.svg";
import calibrum from "~/assets/logo_calibrum.webp";
import papertree from "~/assets/papertree.svg";
import learningXp from "~/assets/Diapositive3.webp";

useSeoMeta({
  title: "Nos projets - 4eSport",
  description:
    "Les projets tech de 4eSport au service de ses membres : Retake, Calibrum, Papertree et les programmes internes.",
});

// `accent` = couleur du halo et de la pastille de jeu.
// `icon` = taille (px) du logo dans le rond de 80 px : réglée par logo pour qu'il
// remplisse le cercle sans l'écraser. Calibrum est déjà rond, il le remplit.
const projets = [
  {
    name: "Papertree",
    tag: "Riftbound",
    text: "Le QG du pôle Riftbound : decks, collections et échanges des membres. Connexion avec Discord, ouvert à tous.",
    url: "https://papertree.4esport.fr",
    accent: "#15c584",
    img: papertree,
    icon: 56,
    nouveau: true,
  },
  {
    name: "Retake",
    tag: "CS2",
    text: "Hub compétitif CS2 de l'association.",
    url: "https://retake.4esport.fr/",
    accent: "#f0a500",
    img: retake,
    icon: 72,
  },
  {
    name: "Calibrum",
    tag: "League of Legends",
    text: "Le successeur de LoL4Pros, avec un nouveau design et de nouvelles fonctionnalités.",
    url: "https://calibrum.4esport.fr/",
    accent: "#c89b3c",
    img: calibrum,
    icon: 80,
  },
];
</script>

<template>
  <main class="relative sm:mt-[70px]">
    <!-- Fond pleine largeur : un fond limité au conteneur aurait des bords nets -->
    <div class="hero-bg pointer-events-none absolute inset-x-0 top-[-140px] h-[620px] -z-10" aria-hidden="true">
      <div class="hero-grid absolute inset-0"></div>
    </div>
    <div class="w-[95%] md:w-[90%] lg:w-[80%] max-w-[1200px] m-auto">

    <div v-reveal class="flex flex-col text-center">
      <h1 class="text-2xl md:text-5xl font-semibold">Nos projets</h1>
      <h2 class="hero-accent mx-auto text-base md:text-2xl font-semibold">Ajoute le tien</h2>
    </div>

    <div class="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <a v-for="(projet, i) in projets" :key="projet.url" v-reveal="i * 80" :href="projet.url" target="_blank"
        rel="noopener"
        class="projet group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#15c584]"
        :style="{ '--accent': projet.accent }">
        <span v-if="projet.nouveau"
          class="absolute right-4 top-4 rounded-full bg-[#15c584] px-2 py-[1px] text-[10px] font-bold uppercase tracking-wide text-[#0b1120]">
          Nouveau
        </span>

        <div class="relative w-fit">
          <!-- Halo qui s'allume au survol -->
          <div
            class="absolute inset-0 rounded-full bg-[var(--accent)]/40 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"></div>
          <div class="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-black/60 ring-2 ring-white/10">
            <img :src="projet.img" alt="" loading="lazy" decoding="async" :width="projet.icon" :height="projet.icon"
              class="object-contain" :style="{ width: `${projet.icon}px`, height: `${projet.icon}px` }" />
          </div>
        </div>

        <div class="mt-5 flex items-center gap-2">
          <h3 class="text-xl font-semibold leading-tight">{{ projet.name }}</h3>
          <span class="rounded-full border px-2 py-[1px] text-[10px] font-bold uppercase tracking-wider"
            :style="{ color: projet.accent, borderColor: `color-mix(in srgb, ${projet.accent} 45%, transparent)` }">
            {{ projet.tag }}
          </span>
        </div>

        <p class="mt-2 flex-1 text-sm leading-relaxed text-white/65">{{ projet.text }}</p>

        <p class="mt-5 text-sm font-semibold text-white/40 transition-colors group-hover:text-[var(--accent)]">
          Découvrir
          <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </p>
      </a>
    </div>

    <section class="mt-16 md:mt-24">
      <div v-reveal class="flex items-center gap-4">
        <div>
          <h2 class="text-xl md:text-3xl font-semibold">Nos programmes</h2>
          <p class="text-sm md:text-base font-semibold text-[#15c584]">Surtout en interne</p>
        </div>
        <div class="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>

      <div class="mt-6 grid items-center gap-6 md:grid-cols-2 md:gap-10">
        <div v-reveal class="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-2">
          <img :src="learningXp" alt="4eSport Learning XP" loading="lazy" decoding="async"
            class="w-full rounded-xl" />
        </div>
        <div v-reveal="100">
          <h3 class="text-lg md:text-2xl font-semibold">
            Learning XP <span class="text-[#15c584]">(LXP)</span>
          </h3>
          <p class="mt-3 text-sm md:text-base leading-relaxed text-white/70">
            Chaque personne
            <NuxtLink to="/cotisation" class="font-semibold text-[#15c584] underline hover:text-[#15c584]/80">cotisante</NuxtLink>
            de l'association peut gagner des points LXP à chaque semestre, à travers les
            différentes actions menées avec l'asso : participation aux tournois, entraînements
            en équipe, organisation d'évènements, etc.
          </p>
          <NuxtLink to="/cotisation"
            class="mt-5 inline-flex rounded-lg border border-white/5 bg-[#8215c5]/70 px-3 py-1.5 text-sm font-semibold shadow-sm shadow-black/40 hover:bg-[#8215c5] sm:text-base">
            Cotiser pour participer
          </NuxtLink>
        </div>
      </div>
    </section>
    </div>
  </main>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .projet {
    transition: none;
  }
}
</style>
