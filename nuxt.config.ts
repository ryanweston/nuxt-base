// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxt/fonts',
    'nuxt-og-image',
    '@nuxtjs/sitemap',
    'nuxt-simple-robots',
  ],
  site: { indexable: process.env.NUXT_SITE_ENV === 'production' },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/styles/main.css',
  ],
  fonts: {
    experimental: {
      addPreloadLinks: true,
    },
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/example-content',
    ],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
    },
  },
})
