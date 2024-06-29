import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives({ enforce: 'pre' }),
  ],
  theme: {
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
      mono: ['IBM Plex Mono'],
    },
  },
})
