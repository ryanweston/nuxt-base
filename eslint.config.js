// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(antfu(
  {
    unocss: true,
    formatters: true,
    ignores: [
      'node_modules',
    ],
  },
  {
    rules: {
      'node/prefer-global/process': 'off',
      'antfu/top-level-function': 'off',
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ],
    },
  },
))
