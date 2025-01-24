// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import vueI18n from "@intlify/eslint-plugin-vue-i18n"; // add this

export default withNuxt(
  // Your custom configs here
  ...vueI18n.configs['flat/recommended'], // add this
  { // 新增這段
    rules: {
      '@intlify/vue-i18n/no-missing-keys-in-other-locales': 'error',
      '@intlify/vue-i18n/no-raw-text': 'error', // add this
    },
    settings: {
      'vue-i18n': {
        localeDir: 'i18n/locales/*.{json,json5,yaml,yml}',
        messageSyntaxVersion: '^10.0.0'
      },
    }
  },
)
