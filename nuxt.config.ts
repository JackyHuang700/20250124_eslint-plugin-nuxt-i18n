import { i18n } from './i18n/index'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxt/eslint', '@nuxtjs/tailwindcss'],
  eslint: {
    // options here
    checker: true
  },
  tailwindcss: {

  },
  i18n
})