export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-i18n',
      {
        // vueI18n: {},
        // vueI18nLoader: false,
        locales: [
          { code: 'es', iso: 'es-ES', file: 'es-ES.js' },
          { code: 'en', iso: 'en-US', file: 'en-US.js' }
        ],
        defaultLocale: 'en',
        defaultLocaleRouteNameSuffix: 'default',
        strategy: 'prefix_except_default',
        lazy: true,
        langDir: 'locales/',
        detectBrowserLanguage: {
          useCookie: true,
          cookieDomain: null,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: false,
          fallbackLocale: null
        },
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}