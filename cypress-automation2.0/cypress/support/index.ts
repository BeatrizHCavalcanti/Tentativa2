/// <reference types="cypress" />
/// <reference types="@cypress/grep" />

/**
 * @type {Cypress.PluginConfig}
*/

module.exports = (on, config) => {
}

import cypress = require('cypress');
import 'cypress-mochawesome-reporter/register';

const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()

declare namespace Cypress {
    // specify additional properties in the TestConfig object
    // in our case we will add "tags" property
    interface TestConfigOverrides {
        /**
         * List of tags for this test
         * @example a single tag
         *  it('logs in', { tags: '@smoke' }, () => { ... })
         * @example multiple tags
         *  it('works', { tags: ['@smoke', '@slow'] }, () => { ... })
         */
        tags?: string | string[]
    }
}