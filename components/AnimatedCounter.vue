<script setup lang="ts">
const props = withDefaults(
  defineProps<{ value: number; suffix?: string; duration?: number }>(),
  { suffix: "", duration: 1800 }
);

const el = ref<HTMLElement | null>(null);
// Valeur finale au rendu serveur : la page reste correcte sans JS.
const displayed = ref(props.value);
let observer: IntersectionObserver | null = null;
let failsafe: number | undefined;

function cleanup() {
  observer?.disconnect();
  clearTimeout(failsafe);
}

function run() {
  cleanup();

  const start = performance.now();
  const step = (now: number) => {
    const t = Math.min((now - start) / props.duration, 1);
    const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    displayed.value = Math.round(props.value * eased);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;

  displayed.value = 0;
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) run();
    },
    { threshold: 0.4 }
  );
  observer.observe(el.value!);

  // Si l'observer ne se déclenche jamais, on affiche la vraie valeur plutôt
  // que de laisser un 0 trompeur à l'écran.
  failsafe = window.setTimeout(() => {
    cleanup();
    displayed.value = props.value;
  }, 4000);
});

onBeforeUnmount(cleanup);
</script>

<template>
  <span ref="el">{{ displayed.toLocaleString("fr-FR") }}{{ suffix }}</span>
</template>
