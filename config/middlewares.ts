export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',

  {
    name: 'strapi::cors',
    config: {
      origin: ['*', 'http://localhost:3000'],
    },
  },

  'strapi::poweredBy',
  'strapi::query',

  {
    name: 'strapi::body',
    config: {
      formidable: {
        maxFileSize: 1073741824,
      },
    }
  },

  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
