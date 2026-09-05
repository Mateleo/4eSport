<script setup lang="ts">
const props = withDefaults(
  defineProps<{ target: string; label?: string; endedLabel?: string }>(),
  { label: "", endedLabel: "C'est parti !" }
);

const parts = ref<{ value: number; unit: string }[]>([]);
const ended = ref(false);
let timer: ReturnType<typeof setInterval> | undefined;

// Ex. "samedi 12 septembre 2026 à 20h00"
const formattedDate = computed(() => {
  const date = new Date(props.target);
  if (Number.isNaN(date.getTime())) return "";

  const day = date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = date
    .toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
    .replace(":", "h");

  return `${day} à ${time}`;
});

function tick() {
  const diff = new Date(props.target).getTime() - Date.now();

  if (Number.isNaN(diff) || diff <= 0) {
    ended.value = true;
    clearInterval(timer);
    return;
  }

  parts.value = [
    { value: Math.floor(diff / 86400000), unit: "jours" },
    { value: Math.floor(diff / 3600000) % 24, unit: "heures" },
    { value: Math.floor(diff / 60000) % 60, unit: "min" },
    { value: Math.floor(diff / 1000) % 60, unit: "sec" },
  ];
}

onMounted(() => {
  tick();
  timer = setInterval(tick, 1000);
});
onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
  <ClientOnly>
    <div v-if="ended" class="text-center text-lg font-semibold text-[#15c584]">
      {{ endedLabel }}
    </div>
    <div v-else-if="parts.length" class="flex flex-col items-center gap-3">
      <p v-if="label" class="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50">
        {{ label }}
      </p>
      <div class="flex gap-2 sm:gap-4">
        <div
          v-for="part in parts"
          :key="part.unit"
          class="min-w-[62px] sm:min-w-[80px] rounded-xl border border-white/10 bg-white/5 px-2 py-2 sm:px-4 sm:py-3 text-center backdrop-blur-sm"
        >
          <div class="text-2xl sm:text-4xl font-semibold tabular-nums">
            {{ String(part.value).padStart(2, "0") }}
          </div>
          <div class="text-[10px] sm:text-xs uppercase tracking-wider text-white/50">
            {{ part.unit }}
          </div>
        </div>
      </div>
      <p v-if="formattedDate" class="text-sm md:text-base text-white/60 first-letter:uppercase">
        {{ formattedDate }}
      </p>
    </div>
  </ClientOnly>
</template>
