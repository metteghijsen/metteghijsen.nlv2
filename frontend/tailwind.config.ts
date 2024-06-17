import { Config } from 'tailwindcss'
export default <Partial<Config>> {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        red100: 'var(--color-red-100)',
        red60: 'var(--color-red-60)',
        red40: 'var(--color-red-40)',
        orange100: 'var(--color-orange-100)',
        orange60: 'var(--color-orange-60)',
        orange40: 'var(--color-orange-40)',
        yellow100: 'var(--color-yellow-100)',
        yellow60: 'var(--color-yellow-60)',
        yellow40: 'var(--color-yellow-40)',
        green100: 'var(--color-green-100)',
        green60: 'var(--color-green-60)',
        green40: 'var(--color-green-40)',
        blue100: 'var(--color-blue-100)',
        blue60: 'var(--color-blue-60)',
        blue40: 'var(--color-blue-40)',
        purple100: 'var(--color-purple-100)',
        purple60: 'var(--color-purple-60)',
        purple40: 'var(--color-purple-40)',
        pink100: 'var(--color-pink-100)',
        pink60: 'var(--color-pink-60)',
        pink40: 'var(--color-pink-40)',
        darkblue100: 'var(--color-dark-blue-100)',
        darkblue60: 'var(--color-dark-blue-60)',
        darkblue40: 'var(--color-dark-blue-40)',
        black100: 'var(--color-black-100)',
        black90: 'var(--color-black-90)',
        black80: 'var(--color-black-80)',
        black70: 'var(--color-black-70)',
        black60: 'var(--color-black-60)',
        black50: 'var(--color-black-50)',
        black20: 'var(--color-black-20)',
        black10: 'var(--color-black-10)',
        white100: 'var(--color-white-100)',
        white90: 'var(--color-white-90)',
        white80: 'var(--color-white-80)',
        white70: 'var(--color-white-70)',
        white60: 'var(--color-white-60)',
        white50: 'var(--color-white-50)'
      }
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '4px',
      1: '8px',
      1.5: '12px',
      2: '16px',
      2.5: '20px',
      3: '24px',
      3.5: '28px',
      4: '32px',
      5: '36px',
      6: '40px',
      7: '48px',
      8: '56px',
      9: '64px',
      10: '72px',
      11: '80px',
      12: '96px',
      14: '128px'
    },
    fontFamily: {
      montserrat: 'Montserrat',
      poppins: 'Poppins',
      inter: 'Inter'
    }
  },
  darkMode: 'class',
  plugins: [

  ]
}
