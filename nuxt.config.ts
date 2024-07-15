// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['floating-vue/nuxt', "@nuxt/image"],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  image: {
    domains: [
      'https://picsum.photos',
    ],
  },
})