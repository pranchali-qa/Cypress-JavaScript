const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // defaultCommandTimeout: 6000, // timeout set 6sec for all test should wait before fail
  env:{
      url: "https://rahulshettyacademy.com/"
    },
  // allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    video: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // this is event listner for reporter
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
