<script setup lang="ts">
import { timeline } from "~/data/histoire";

useSeoMeta({
  title: "Notre histoire - 4eSport",
  description:
    "De 2018 à aujourd'hui : l'épopée de 4eSport, l'association de jeux vidéo de l'Efrei.",
});

// Une année vide reste hors du site tant qu'elle n'est pas remplie.
const years = computed(() => timeline.filter((entry) => entry.events.length));

// Année active dans le menu : suit le scroll (scroll-spy), ou le clic.
const selected = ref(years.value[0]?.year ?? 0);

// Pendant un défilement déclenché par un clic, on fige la sélection pour que
// le menu ne clignote pas sur chaque année traversée. Le verrou tombe 150 ms
// après le dernier évènement de scroll (ou 1,5 s au plus si rien ne bouge).
let locked = false;
let unlockTimer: ReturnType<typeof setTimeout> | undefined;

function lock(delay: number) {
  locked = true;
  clearTimeout(unlockTimer);
  unlockTimer = setTimeout(() => (locked = false), delay);
}

// Calcul très léger (quelques années) : appelé directement à chaque scroll,
// sans requestAnimationFrame que certains navigateurs gèlent.
function updateSelected() {
  if (locked) {
    lock(150);
    return;
  }
  const list = years.value;
  if (!list.length) return;

  // En bas de page, la dernière année est active même si elle est trop courte
  // pour atteindre la ligne de lecture.
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (atBottom) {
    selected.value = list[list.length - 1].year;
    return;
  }

  // Ligne de lecture à 35 % de la hauteur de l'écran.
  const line = window.innerHeight * 0.35;
  let active = list[0].year;
  for (const entry of list) {
    const el = document.getElementById(`annee-${entry.year}`);
    if (el && el.getBoundingClientRect().top <= line) active = entry.year;
  }
  selected.value = active;
}

function goTo(year: number) {
  selected.value = year;
  lock(1500);
  document
    .getElementById(`annee-${year}`)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Sur mobile les pastilles défilent horizontalement : on garde l'année active
// visible. On agit sur la liste elle-même pour ne jamais faire bouger la page.
const yearList = ref<HTMLElement | null>(null);
watch(selected, async () => {
  await nextTick();
  const list = yearList.value;
  const active = list?.querySelector<HTMLElement>("[aria-current]");
  if (!list || !active || list.scrollWidth <= list.clientWidth) return;
  list.scrollTo({
    left: active.offsetLeft - (list.clientWidth - active.offsetWidth) / 2,
    behavior: "smooth",
  });
});

onMounted(() => {
  updateSelected();
  window.addEventListener("scroll", updateSelected, { passive: true });
  window.addEventListener("resize", updateSelected);
});
onBeforeUnmount(() => {
  clearTimeout(unlockTimer);
  window.removeEventListener("scroll", updateSelected);
  window.removeEventListener("resize", updateSelected);
});
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
      <!-- Menu des années : rail sticky à gauche sur desktop, pastilles sticky sous le header sur mobile -->
      <nav
        class="year-nav sticky top-[29px] z-[5] md:top-[80px] md:h-fit md:w-[130px] md:shrink-0 -mx-[2.5%] px-[2.5%] py-2 md:mx-0 md:px-0 md:py-0 bg-[#0b0c1a]/85 backdrop-blur md:bg-transparent md:backdrop-blur-none"
        aria-label="Années"
      >
        <ul ref="yearList" class="relative flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
          <li v-for="entry in years" :key="entry.year">
            <button
              type="button"
              class="year-btn w-full shrink-0 rounded-lg border px-4 py-2 text-left text-base md:text-lg font-semibold transition-all duration-200"
              :class="
                entry.year === selected
                  ? 'border-[#15c584]/50 bg-[#15c584]/10 text-[#15c584]'
                  : 'border-white/10 bg-white/[0.03] text-white/50 hover:border-white/25 hover:text-white/80'
              "
              :aria-current="entry.year === selected ? 'true' : undefined"
              @click="goTo(entry.year)"
            >
              {{ entry.year }}
            </button>
          </li>
        </ul>
      </nav>

      <!-- Toutes les années à la suite : le menu suit le scroll -->
      <div class="mt-4 md:mt-0 flex-1 space-y-12 md:space-y-16">
        <section
          v-for="entry in years"
          :id="`annee-${entry.year}`"
          :key="entry.year"
          v-reveal
          class="year-section"
        >
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
              class="relative rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm md:text-base text-white/75 leading-relaxed transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <span
                class="absolute left-[-25px] md:left-[-29px] top-5 h-[9px] w-[9px] rounded-full bg-[#15c584]"
                aria-hidden="true"
              ></span>
              {{ event }}
            </li>
          </ol>
        </section>

        <p v-if="!years.length" class="text-white/50">Aucune année à afficher pour le moment.</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Les ancres ne doivent pas passer sous le header fixe et le menu mobile */
.year-section {
  scroll-margin-top: 100px;
}

@media (min-width: 768px) {
  .year-section {
    scroll-margin-top: 80px;
  }
}
</style>
