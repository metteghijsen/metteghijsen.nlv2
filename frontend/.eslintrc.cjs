module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true
  },
  root: true,
  plugins: [
    'vuejs-accessibility'
  ],
  extends: [
    'plugin:nuxt/recommended', // https://www.npmjs.com/package/eslint-plugin-nuxt
    'plugin:vue/essential', // https://eslint.vuejs.org/rules/
    'plugin:vue/vue3-essential', // https://eslint.vuejs.org/rules/
    'eslint:recommended', // https://eslint.org/docs/latest/rules/
    '@nuxtjs/eslint-config-typescript', // https://typescript.nuxtjs.org/guide/lint/
    'plugin:vuejs-accessibility/recommended' // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off', // Components must be multi-word-with-dases off
        'vuejs-accessibility/no-onchange': 'off', // @blur must be used instead of @change on select dropdowns off
        'no-tabs': 'off', // Tabs must be spaces off
        'vuejs-accessibility/media-has-caption': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest' // Allows for the parsing of modern ECMAScript features
  }
}
