/// <reference path="../support/index.d.ts" />
import './commands'
import './employee'
import './admin'

Cypress.Cookies.defaults({
    preserve: ['_orangehrm', 'Loggedin']
})
