export default {
  ssr: false,

  head: {
    title: 'portfolio-site',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'robots', content: 'noindex, nofollow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/scss/styles.scss'
  ],

  plugins: [],

  components: true,

  buildModules: [],

  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'UA-145060590-1'
  },

  styleResources: {
    scss: [
      '@/assets/scss/foundation/_variables.scss',
      '@/assets/scss/foundation/_mixin.scss'
    ]
  },

  build: {
    transpile: ['gsap'],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.node = {
          fs: 'empty'
        };
      }
    }
  }
}
