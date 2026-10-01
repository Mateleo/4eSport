<script setup lang="ts">
import esl from "~/assets/ESL.webp";
import groupe1 from "~/assets/galerie/groupe-1.webp";
import groupe2 from "~/assets/galerie/groupe-2.webp";
import groupe3 from "~/assets/galerie/groupe-3.webp";

// Pour ajouter une photo : la déposer dans assets/galerie/, l'importer
// ci-dessus et l'ajouter à cette liste.
const slides = [
  { src: esl, alt: "La communauté 4eSport devant un écran de compétition" },
  { src: groupe1, alt: "Membres de 4eSport réunis en photo de groupe" },
  { src: groupe2, alt: "L'équipe 4eSport en maillot lors d'une LAN" },
  { src: groupe3, alt: "La communauté 4eSport en photo de groupe" },
];

/** Durée d'une photo, en secondes. Utilisée par la barre de progression. */
const DURATION = 5;

const current = ref(0);
const autoplay = ref(true);

function goTo(index: number) {
  current.value = (index + slides.length) % slides.length;
}

// La barre est une animation CSS : c'est sa fin qui déclenche la photo suivante.
// Pas de timer JS, donc la pause au survol (animation-play-state) est gratuite.
function onFillEnd(index: number) {
  if (index === current.value) goTo(current.value + 1);
}

// Avec « réduire les animations », le diaporama ne tourne pas tout seul :
// on garde la navigation manuelle par les segments.
onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) autoplay.value = false;
});
</script>

<template>
  <div
    class="slideshow group relative aspect-[16/10] w-full overflow-hidden rounded-md shadow-lg shadow-black/30 sm:aspect-[3/2] sm:max-h-[400px]"
    role="group"
    aria-roledescription="carrousel"
    aria-label="Photos de la communauté 4eSport"
  >
    <img
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
      :alt="slide.alt"
      :loading="i === 0 ? 'eager' : 'lazy'"
      decoding="async"
      draggable="false"
      class="slide absolute inset-0 h-full w-full object-cover"
      :class="i === current ? 'opacity-100' : 'opacity-0'"
      :aria-hidden="i === current ? undefined : 'true'"
    />

    <!-- Dégradé léger pour que la barre reste lisible sur les photos claires -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent"
      aria-hidden="true"
    ></div>

    <!-- Barre de progression : un segment par photo, le segment actif se remplit -->
    <div class="absolute inset-x-3 bottom-3 flex gap-1.5 sm:inset-x-4 sm:bottom-4">
      <button
        v-for="(slide, i) in slides"
        :key="i"
        type="button"
        class="segment relative h-4 flex-1 cursor-pointer focus-visible:outline-none"
        :aria-label="`Photo ${i + 1} sur ${slides.length}`"
        :aria-current="i === current ? 'true' : undefined"
        @click="goTo(i)"
      >
        <span class="absolute inset-x-0 bottom-[6px] h-[3px] overflow-hidden rounded-full bg-white/30 backdrop-blur-sm">
          <!-- Le :key relance l'animation à chaque passage sur ce segment -->
          <span
            v-if="i === current"
            :key="`fill-${i}-${current}`"
            class="fill block h-full w-full origin-left rounded-full bg-white/90"
            :class="{ 'fill-static': !autoplay }"
            :style="{ animationDuration: `${DURATION}s` }"
            @animationend="onFillEnd(i)"
          ></span>
          <span
            v-else-if="i < current"
            class="block h-full w-full rounded-full bg-white/90"
          ></span>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.slide {
  transition: opacity 0.8s ease;
}

.fill {
  animation-name: slide-fill;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

/* Pause au survol de l'image, ou quand un segment a le focus clavier */
.slideshow:hover .fill,
.slideshow:focus-within .fill {
  animation-play-state: paused;
}

/* Sans autoplay : le segment actif est simplement plein */
.fill-static {
  animation: none;
}

.segment:focus-visible > span {
  outline: 2px solid #15c584;
  outline-offset: 2px;
}

@keyframes slide-fill {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .slide {
    transition: none;
  }
}
</style>
