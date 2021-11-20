/// <reference path="../support/index.d.ts" />
import './commands'
import './employee'

Cypress.Cookies.defaults({
    preserve: ['_orangehrm', 'orangehrm', 'Loggedin', 'PHPSESSID', 'MANTIS_secure_session', 'MANTIS_STRING_COOKIE', '']
})
