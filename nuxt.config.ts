// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/quill-editor.css',
  ],
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/image'],
  nitro: {
    plugins: ['~/server/index.ts'],
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },
  image: {
    dir: 'assets/images',
  },
});
