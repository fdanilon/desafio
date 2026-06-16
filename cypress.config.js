const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    specPattern: "cypress/test/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      

      // implement node event listeners here
    },
  },
});
