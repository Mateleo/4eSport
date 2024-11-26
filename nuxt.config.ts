// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap", "@nuxtjs/robots", "@nuxt/fonts", "@nuxtjs/seo"],

  devtools: {
    enabled: true
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      meta: [
        {
          name: "google-site-verification",
          content: "XVOVwp6cx0xAEXKuYX33fYJsfgpGVg5YmjzXK7FNBfs",
        },
      ],
    },
  },
  experimental: {
    viewTransition: false
  },

  nitro: {
    compressPublicAssets: {
      brotli: true,
      gzip: true
    },
  },

  compatibilityDate: "2024-11-26",
});