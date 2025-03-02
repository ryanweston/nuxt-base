// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    '@nuxt/fonts',
    'nuxt-og-image',
    '@nuxt/icon',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/styles/main.css',
  ],

  site: { indexable: process.env.NUXT_SITE_ENV === 'production' },

  colorMode: {
    classSuffix: '',
  },

  compatibilityDate: '2024-07-31',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  fonts: {
    families: [
      { name: 'IBM Plex Mono', provider: 'bunny', preload: true },
    ],
    defaults: {
      preload: true,
    },
  },

  ogImage: {
    fonts: [
      'Inter:400',
      'Inter:500',
      'IBM+Plex+Mono:400',
    ],
  },

  sitemap: {
    sources: [
      '/api/__sitemap__/example-content',
    ],
  },
})
