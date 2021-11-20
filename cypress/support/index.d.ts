/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * Connexion à OrangeHRM.
       * @example cy.Login()
       */
      Login(): void
      /**
       * Déconnexion à OrangeHRM.
       * @example cy.Logout()
       */
       Logout(): void
       HttpLogin(): void
       HttpLogout(): void
       SetLanguage(language:string): void
       AddEmployee(emp:employeeInfos): void
       EmployeeSearchByName(name:string): void
       EmployeeSearchById(matricule:string): void
       EmployeeAddress(): void
       DeleteEmployee(): void
       DeleteAllEmployees(): void
  
    }
  }