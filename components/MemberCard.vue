<script setup lang="ts">
import type { Member } from "~/data/equipe";

const props = defineProps<{ member: Member }>();
const emit = defineEmits<{ open: [] }>();

// Les photos sont résolues depuis assets/equipe/ par nom de fichier, pour
// éviter un import par membre dans data/equipe.ts.
const files = import.meta.glob<string>("~/assets/equipe/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const photo = computed(() => {
  if (!props.member.photo) return undefined;
  const match = Object.keys(files).find((path) => path.endsWith(`/${props.member.photo}`));
  return match ? files[match] : undefined;
});

// Le pseudo prime, mais certains membres n'en ont pas renseigné.
const primary = computed(() => props.member.pseudo ?? props.member.name ?? "");
const secondary = computed(() =>
  props.member.pseudo && props.member.name ? props.member.name : undefined
);

// Une carte sans contenu détaillé reste informative, pas cliquable.
const hasDetails = computed(
  () =>
    Boolean(props.member.description) ||
    Boolean(props.member.parcours?.length) ||
    Boolean(props.member.projets?.length)
);

const initials = computed(() =>
  primary.value
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
);
</script>

<template>
  <component
    :is="hasDetails ? 'button' : 'div'"
    :type="hasDetails ? 'button' : undefined"
    :aria-label="hasDetails ? `Voir le parcours de ${primary}` : undefined"
    class="member group flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center transition-all duration-300"
    :class="
      hasDetails
        ? 'cursor-pointer hover:-translate-y-1 hover:border-[#15c584]/40 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#15c584]'
        : ''
    "
    @click="hasDetails && emit('open')"
  >
    <div class="relative">
      <!-- Halo qui s'allume au survol -->
      <div
        v-if="hasDetails"
        class="absolute inset-0 rounded-full bg-[#15c584]/40 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      ></div>
      <img
        v-if="photo"
        :src="photo"
        :alt="primary"
        loading="lazy"
        decoding="async"
        class="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover ring-2 ring-white/10"
      />
      <div
        v-else
        class="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#2c15c5] via-[#8215c5] to-[#15c584] text-xl font-semibold ring-2 ring-white/10"
        aria-hidden="true"
      >
        {{ initials }}
      </div>
    </div>

    <p class="mt-4 text-lg font-semibold leading-tight">{{ primary }}</p>
    <p v-if="secondary" class="text-xs text-white/45">{{ secondary }}</p>

    <p class="mt-2 text-xs sm:text-sm font-semibold text-[#15c584]">
      {{ member.role }}
    </p>

    <p
      v-if="hasDetails"
      class="mt-3 text-xs text-white/40 transition-colors group-hover:text-[#15c584]"
    >
      Voir le parcours →
    </p>
  </component>
</template>
