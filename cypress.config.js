const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeOut: 15000,
  defaultCommandTimeout: 14000,
  chromeWebSecurity: false,
  firefoxWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
