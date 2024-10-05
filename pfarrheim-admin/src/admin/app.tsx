import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: ['de', 'ru']
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
