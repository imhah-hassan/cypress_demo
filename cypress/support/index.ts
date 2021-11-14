/// <reference path="../support/index.d.ts" />
import './commands'
import './employee'

Cypress.Cookies.defaults({
    preserve: ['_orangehrm', 'orangehrm', 'Loggedin']
})
