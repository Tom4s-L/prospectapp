// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
  ],
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  nitro: {
    plugins: ['~/server/index.ts'],
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },
});
