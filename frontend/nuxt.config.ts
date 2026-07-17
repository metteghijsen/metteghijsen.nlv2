import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
app: {
  head: {
    title: 'Mette Ghijsen | Front-end Developer & UX Designer',
    htmlAttrs: {
      lang: 'nl'
    },
    meta: [
      {
        charset: 'utf-8'
      },

      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },

      {
        name: 'description',
        content:
          'Portfolio van Mette Ghijsen, front-end developer en UX designer. Bekijk projecten op het gebied van webdevelopment, branding, UI/UX en interactieve digitale ervaringen.'
      },

      {
        name: 'robots',
        content: 'index,follow'
      },

      {
        property: 'og:type',
        content: 'website'
      },

      {
        property: 'og:title',
        content: 'Mette Ghijsen | Front-end Developer & UX Designer'
      },

      {
        property: 'og:description',
        content:
          'Ontdek mijn portfolio met websites, webapplicaties, UI/UX designs en creatieve digitale projecten.'
      },

      {
        property: 'og:image',
        content: 'https://metteghijsen.nl/img/og-image.jpg'
      },

      {
        property: 'og:url',
        content: 'https://metteghijsen.nl'
      },

      {
        property: 'og:site_name',
        content: 'Mette Ghijsen'
      },

      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },

      {
        name: 'twitter:title',
        content: 'Mette Ghijsen | Front-end Developer & UX Designer'
      },

      {
        name: 'twitter:description',
        content:
          'Ontdek mijn portfolio met websites, webapplicaties, UI/UX designs en creatieve digitale projecten.'
      },

      {
        name: 'twitter:image',
        content: 'https://metteghijsen.nl/img/og-image.jpg'
      }
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],

    noscript: [
      {
        children: 'JavaScript is required'
      }
    ]
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

  robots: {
  allow: ['/']
},

  compatibilityDate: '2025-02-12'
})
