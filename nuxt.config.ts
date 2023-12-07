// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/robots", "nuxt-simple-sitemap", "@nuxtjs/tailwindcss"],
  googleFonts: {
    families: {
      Heebo: true,
    },
    prefetch: true,
  },
  app: {
    head: {
      title: "4eSport",
      meta: [
        {
          name: "google-site-verification",
          content: "XVOVwp6cx0xAEXKuYX33fYJsfgpGVg5YmjzXK7FNBfs",
        },
        { name: "title", content: "4eSport - Le fun par la performance" },
        {
          name: "description",
          content:
            "Association loi 1901 de jeux vidéo compétitifs. 4eSport est une communauté active avec de nombreux projets !",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://4esport.fr/" },
        { property: "og:title", content: "4eSport - Le fun par la performance" },
        {
          property: "og:description",
          content:
            "Association loi 1901 de jeux vidéo compétitifs. 4eSport est une communauté active avec de nombreux projets !",
        },
        {
          property: "og:image",
          content:
            "https://github.com/Mateleo/4eSport/raw/master/nuxt/assets/4eSport%20Banner.png",
        },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://4esport.fr/" },
        { property: "twitter:title", content: "4eSport - Le fun par la performance" },
        {
          property: "twitter:description",
          content:
            "Association loi 1901 de jeux vidéo compétitifs. 4eSport est une communauté active avec de nombreux projets !",
        },
        {
          property: "twitter:image",
          content:
            "https://github.com/Mateleo/4eSport/raw/master/nuxt/assets/4eSport%20Banner.png",
        },
      ],
    },
  },
  runtimeConfig: {
    siteUrl: 'https://4esport.fr',
  },
  site: {
    url: 'https://4esport.fr',
  },
});