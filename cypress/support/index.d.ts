/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * Connexion à OrangeHRM.
       * @example cy.Login()
       */
      DeleteAll(): void
      Login(): void
      HttpLogin(): void
      /**
       * Déconnexion à OrangeHRM.
       * @example cy.Logout()
       */
       Logout(): void
       HttpLogout(): void
       AddEmployee(emp:employeeInfos): void
       EmployeeSearchByName(name:string): void
       EmployeeSearchById(matricule:string): void
       EmployeeAddress(): void
       DeleteEmployee(): void
       DeleteAllEmployees(): void

       CheckMenu(menuId:string, menuTitle:string, url:string): void
  
    }
  }