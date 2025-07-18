// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/eslint'],
  devtools: { enabled: true },
  app: {
    baseURL: '/blog/',
    head: {
      titleTemplate: '%s - mtsgi blog'
    }
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: {
        semi: true,
        commaDangle: 'never'
      }
    }
  }
});
