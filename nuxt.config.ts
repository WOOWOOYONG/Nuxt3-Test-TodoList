// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt3-Simple-TodoList'
    }
  }
})
