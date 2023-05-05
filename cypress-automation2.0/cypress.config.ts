import { defineConfig } from "cypress";

export default defineConfig({
    projectId: "17vivv",
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
        reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
        mochaJunitReporterReporterOptions: {
            mochaFile: 'cypress/reports/junit/results.json',
        },
        cypressMochawesomeReporterReporterOptions: {
            charts: true,
            reportPageTitle: 'Loyalty',
            overwrite: true,
            embeddedScreenshots: true,
            inlineAssets: true,
            saveAllAttempts: false,
            autoOpen: false
        },
    },
    env: {
        grepFilterSpecs: true,
        grepOmitFiltered: true
    },
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            require('@cypress/grep/src/plugin')(config);
        },
        baseUrl: 'https://lab.izio.com.br',
        fixturesFolder: 'cypress/fixtures/',                         
        screenshotsFolder: 'screenshots/',
        supportFile: 'cypress/support/',
        video: true,
        defaultCommandTimeout: 40000,
        pageLoadTimeout: 40000,
        retries: {
            runMode: 1,
            openMode: 0,
        },
        screenshotOnRunFailure: true,
        chromeWebSecurity: false
    },
});