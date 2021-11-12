/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        Login(): Chainable<Element>
        Logout(): Chainable<Element>
        EmployeeSearchByName(name:string): Chainable<Element>
        AddEmplyee(): Chainable<Element>
  
    }
  }