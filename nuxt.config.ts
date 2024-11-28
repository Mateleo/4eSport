// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxt/fonts",
    "@nuxtjs/seo",
    "@nuxt/content",
    "dayjs-nuxt",
  ],

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
    prerender: {
      failOnError: false
    }
  },
  dayjs: {
    locales: ['fr'],
    plugins: ['relativeTime', 'utc', 'timezone', 'customParseFormat'],
    defaultLocale: 'fr',
    defaultTimezone: 'Europe/Paris',
  },
  content: {
    documentDriven: {
      page:true,
      surround:false
    },
    highlight: {
      // Theme used in all color schemes.
      theme: 'monokai',
    }
  },


  compatibilityDate: "2024-11-26",
});