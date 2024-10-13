// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],
  css: [
    "@/styles/global.sass"
  ],
  devtools: {
    enabled: import.meta.env.DEV,
    timeline: {
      enabled: true,
    }
  }
})
