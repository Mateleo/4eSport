<script setup lang="ts">
const props = withDefaults(defineProps<{ channel?: string }>(), {
  channel: "4esport_tv",
});

// Twitch exige que le domaine hôte soit déclaré via `parent`. On le lit au
// runtime pour que ça marche en local comme en prod sans config.
const parent = ref("");
onMounted(() => {
  parent.value = window.location.hostname;
});

const src = computed(
  () =>
    `https://player.twitch.tv/?channel=${props.channel}&parent=${parent.value}&muted=true`
);
</script>

<template>
  <article class="lg:mt-40 mt-10 md:mt-20">
    <div v-reveal class="flex flex-col text-center mb-8">
      <h1 class="text-lg md:text-3xl lg:text-4xl font-semibold">Notre chaîne</h1>
      <h2 class="text-base md:text-lg font-semibold text-[#15c584]">
        Retrouve nos matchs en direct
      </h2>
    </div>
    <div v-reveal class="m-auto max-w-[900px]">
      <ClientOnly>
        <div class="aspect-video overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-black/40">
          <iframe
            v-if="parent"
            :src="src"
            class="h-full w-full"
            allowfullscreen
            title="Chaîne Twitch 4eSport"
          ></iframe>
        </div>
        <template #fallback>
          <div class="aspect-video rounded-xl border border-white/10 bg-white/5"></div>
        </template>
      </ClientOnly>
      <p class="mt-3 text-center text-xs text-white/50">
        Pas de live en ce moment ? Retrouve les rediffusions sur
        <a
          :href="`https://www.twitch.tv/${channel}`"
          target="_blank"
          rel="noopener"
          class="underline hover:text-white/80"
          >twitch.tv/{{ channel }}</a
        >.
      </p>
    </div>
  </article>
</template>
