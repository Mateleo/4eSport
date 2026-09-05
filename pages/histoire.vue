<script setup lang="ts">
import { timeline } from "~/data/histoire";

useSeoMeta({
  title: "Notre histoire - 4eSport",
  description:
    "De 2018 à aujourd'hui : l'épopée de 4eSport, l'association de jeux vidéo de l'Efrei.",
});

// Une année vide reste hors du site tant qu'elle n'est pas remplie.
const years = computed(() => timeline.filter((entry) => entry.events.length));

const selected = ref(years.value[years.value.length - 1]?.year ?? 0);
const current = computed(() => years.value.find((entry) => entry.year === selected.value));
</script>

<template>
  <main class="w-[95%] md:w-[90%] lg:w-[80%] max-w-[1100px] m-auto sm:mt-[70px]">
    <div v-reveal class="flex flex-col text-center">
      <h1 class="text-2xl md:text-5xl font-semibold">
        Découvre l'histoire de ton association.
      </h1>
      <h2 class="text-base md:text-2xl font-semibold text-[#15c584]">
        L'épopée de 4eSport.
      </h2>
    </div>

    <div class="mt-10 md:mt-16 flex flex-col md:flex-row md:gap-10">
      <!-- Sélecteur d'années : rail vertical sur desktop, pastilles scrollables sur mobile -->
      <nav
        class="md:sticky md:top-[110px] md:h-fit md:w-[130px] md:shrink-0 -mx-[2.5%] px-[2.5%] md:mx-0 md:px-0"
        aria-label="Années"
      >
        <ul
          class="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x"
        >
          <li v-for="entry in years" :key="entry.year" class="snap-start">
            <button
              type="button"
              class="year-btn w-full shrink-0 rounded-lg border px-4 py-2 text-left text-lg font-semibold transition-all duration-200"
              :class="
                entry.year === selected
                  ? 'border-[#15c584]/50 bg-[#15c584]/10 text-[#15c584]'
                  : 'border-white/10 bg-white/[0.03] text-white/50 hover:border-white/25 hover:text-white/80'
              "
              :aria-current="entry.year === selected ? 'true' : undefined"
              @click="selected = entry.year"
            >
              {{ entry.year }}
            </button>
          </li>
        </ul>
      </nav>

      <!-- Contenu : toutes les années sont dans le DOM (SEO), une seule visible -->
      <div class="mt-6 md:mt-0 flex-1">
        <div v-for="entry in years" v-show="entry.year === selected" :key="entry.year">
          <div class="flex items-baseline gap-3">
            <span class="text-4xl md:text-6xl font-bold text-white/10 leading-none">
              {{ entry.year }}
            </span>
            <span v-if="entry.tagline" class="text-sm md:text-lg font-semibold text-[#15c584]">
              {{ entry.tagline }}
            </span>
          </div>

          <ol class="relative mt-5 space-y-3 border-l border-white/10 pl-5 md:pl-6">
            <li
              v-for="(event, i) in entry.events"
              :key="i"
              class="event relative rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm md:text-base text-white/75 leading-relaxed transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              :style="{ animationDelay: `${i * 45}ms` }"
            >
              <span
                class="absolute left-[-25px] md:left-[-29px] top-5 h-[9px] w-[9px] rounded-full bg-[#15c584]"
                aria-hidden="true"
              ></span>
              {{ event }}
            </li>
          </ol>
        </div>

        <p v-if="!current" class="text-white/50">Aucune année à afficher pour le moment.</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Chaque évènement entre en cascade au changement d'année */
.event {
  animation: event-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes event-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
}

.year-btn {
  scroll-margin: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .event {
    animation: none;
  }
}
</style>
