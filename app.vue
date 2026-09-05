<script lang="ts" setup>

useSeoMeta({
  title: "4eSport - Le fun par la performance",
  // "%s" laisse chaque page définir son propre titre ; sans ça, une chaîne
  // fixe ici écrase les titres de toutes les pages.
  titleTemplate: "%s",
  twitterTitle: "4eSport - Le fun par la performance",
  ogTitle: "4eSport - Le fun par la performance",
  description:
    "Association loi 1901 de jeux vidéo compétitifs. 4eSport est une communauté active avec de nombreux projets !",
  ogDescription:
    "Association loi 1901 de jeux vidéo compétitifs. 4eSport est une communauté active avec de nombreux projets !",
  twitterDescription:
    "Association loi 1901 de jeux vidéo compétitifs. 4eSport est une communauté active avec de nombreux projets !",
  ogImage:
    "/img/4eSport Banner.png",
  twitterImage:
    "/img/4eSport Banner.png",
  twitterCard: "summary_large_image",
  themeColor: "#0EA5E9",
  ogType: "website",
  ogUrl: "https://4esport.fr/",
  ogLocale: "fr_FR",
  msapplicationTileColor: "#0EA5E9",
  author: "Mateleo",
  ogSiteName: "4eSport",
  twitterSite: "4eSport",
  twitterCreator: "Mateleo",
  mobileWebAppCapable: "yes",
  appleMobileWebAppTitle: "4eSport",
  ogImageHeight: 1200,
  ogImageWidth: 630,
  ogImageType: "image/png",
});

useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})


</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body,
html,
#__nuxt {
  font-family: "Heebo";
  height: 100%;
  padding: 0;
  margin: 0;
}
:root {
  color: white;
  color-scheme: dark;
}

/* Apparition au scroll — piloté par la directive v-reveal (plugins/reveal.client.ts) */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal-in {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {

  .reveal,
  .reveal-in {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.25rem);
}


::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar:horizontal {
  height: 6px;
}
::-webkit-scrollbar-track,
::-webkit-scrollbar-corner {
  background: #131529;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #090a14;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #232364;
}

</style>
