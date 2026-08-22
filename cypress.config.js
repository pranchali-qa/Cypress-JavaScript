const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // defaultCommandTimeout: 6000, // timeout set 6sec for all test should wait before fail
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
