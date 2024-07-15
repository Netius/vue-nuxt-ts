// https://nuxt.com/docs/api/configuration/nuxt-config
// https://www.docs4.dev/posts/how-to-add-bootstrap-5-to-nuxt-3-a-beginner-s-guide

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