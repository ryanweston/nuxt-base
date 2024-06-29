// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    '@nuxt/fonts',
    'nuxt-og-image',
    '@nuxtjs/sitemap',
    'nuxt-simple-robots',
  ],
  site: { indexable: process.env.NUXT_SITE_ENV === 'production' },
  colorMode: {
    classSuffix: '',
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/styles/main.css',
  ],
  ogImage: {
    fonts: [
      'Inter:400',
      'Inter:500',
      'IBM+Plex+Mono:400',
    ],
  },
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
