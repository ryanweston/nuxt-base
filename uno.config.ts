import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives({ enforce: 'pre' }),
  ],
  theme: {
    fontFamily: {
      sans: ['Inter var', 'Inter', 'sans-serif'],
      mono: ['IBM Plex Mono'],
    },
  },
})
