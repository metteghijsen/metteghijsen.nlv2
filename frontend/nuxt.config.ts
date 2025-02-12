import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Mette Ghijsen',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: 'Jouw beschrijving hier' },
        { hid: 'og:image', property: 'og:image', content: '/img/mette.png' },
        { hid: 'og:title', property: 'og:title', content: 'Mette Ghijsen' },
        { hid: 'og:description', property: 'og:description', content: 'Jouw beschrijving hier' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Mette Ghijsen' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      noscript: [{ children: 'JavaScript is required' }]
    }
  },

  vite: {
    plugins: process.env.NODE_ENV === 'development' ? [eslintPlugin()] : [],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },

  css: [
    '@/assets/scss/_normalize.css',
    '@/assets/scss/_defaults.scss',
    '@/assets/scss/_tailwind.css'
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    'nuxt-security',
    '@nuxtjs/robots',
    '@vueuse/motion/nuxt'
  ],

  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: { scale: 0, opacity: 0, y: 100 },
            visible: { scale: 1, opacity: 1, y: 0 }
          }
        }
      }
    }
  },

  tailwindcss: {},

  image: {
    providers: {
      ipx: {}
    }
  },

  security: {
    headers: {
      crossOriginEmbedderPolicy: { value: 'unsafe-none', route: '/**' },
      contentSecurityPolicy: {
        value: {
          'base-uri': ["'self'"],
          'font-src': ["'self'", 'https:', 'data:'],
          'form-action': ["'self'"],
          'frame-ancestors': ["'self'"],
          'img-src': ["'self'", 'data:', 'https://res.cloudinary.com'], // Fix voor afbeeldingen
          'object-src': ["'none'"],
          'script-src-attr': ["'none'"],
          'style-src': ["'self'", 'https:', "'unsafe-inline'"],
          'upgrade-insecure-requests': true
        },
        route: '/**'
      }
    }
  },

  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  compatibilityDate: '2025-02-12'
})
