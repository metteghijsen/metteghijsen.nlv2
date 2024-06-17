export default [{ UserAgent: `${process.env.NUXT_PUBLIC_APP_ENV}` !== 'production' ? '*' : '' }, { Disallow: '/' }];
