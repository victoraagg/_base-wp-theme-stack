const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    // wpUser: 'admin',
    // wpPassword: 'admin',
    wpUser: 'ajksdfG234',
    wpPassword: '@mkgm&B3*)peX2AS46',
  },
  e2e: {
    // baseUrl: 'http://localhost/sanur/',
    baseUrl: 'https://www.bthebrand.es',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
