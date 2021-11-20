/// <reference types="cypress" />
describe("Scénarion de connexion / déconnexion", () => {
    before("Login", () => {
      cy.HttpLogin()
    });
    Cypress._.times(2, () => {
    it("Menu Admin Job", () => {
      cy.get('#menu_admin_viewAdminModule').click();
      cy.get('#menu_admin_Job').click({force:true});

      cy.CheckMenu ("admin_viewJobTitleList", "Titres de postes", "/admin/viewJobTitleList")
      cy.CheckMenu ("admin_viewPayGrades", "Échelons de rémunération", "/admin/viewPayGrades")
      cy.CheckMenu ("admin_employmentStatus", "Statut Emploi", "/admin/employmentStatus")
      cy.CheckMenu ("admin_jobCategory", "Catégories d'Emplois", "/admin/jobCategory")
      cy.CheckMenu ("admin_workShift", "Équipes de Travail", "/admin/workShift")


    });

    it("Menu Admin Users", () => {
      cy.get('#menu_admin_viewAdminModule').click();
      cy.CheckMenu ("admin_UserManagement", "Utilisateurs du système", "/admin/viewSystemUsers")
      cy.CheckMenu ("admin_viewSystemUsers", "Utilisateurs du système", "/admin/viewSystemUsers")
    });

    it("Organization", () => {
      cy.get('#menu_admin_viewAdminModule').click();
      cy.get('#menu_admin_Organization').click({force:true});
      cy.CheckMenu ("admin_viewOrganizationGeneralInformation", "Informations générales", "/admin/viewOrganizationGeneralInformation")
      cy.CheckMenu ("admin_viewLocations", "Filiales", "/admin/viewLocations")
      cy.CheckMenu ("admin_viewCompanyStructure", "Structure de l'organisation", "/admin/viewCompanyStructure")
    });

    it("Qualifications", () => {
      cy.get('#menu_admin_viewAdminModule').click();
      cy.get('#menu_admin_Qualifications').click({force:true});
      cy.CheckMenu ("admin_viewSkills", "Compétences", "/admin/viewSkills")
      cy.CheckMenu ("admin_viewEducation", "Etudes", "/admin/viewEducation")
      cy.CheckMenu ("admin_viewLicenses", "Permis", "/admin/viewLicenses")
      cy.CheckMenu ("admin_viewLanguages", "Langues", "/admin/viewLanguages")
      cy.CheckMenu ("admin_membership", "Adhésion", "/admin/membership")
    });

    it("Configuration", () => {
      cy.CheckMenu ("admin_nationality", "Nationalités", "/admin/nationality")
      cy.get('#menu_admin_viewAdminModule').click();
      cy.get('#menu_admin_Configuration').click({force:true});
      cy.CheckMenu ("admin_listMailConfiguration", "Configuration de la messagerie", "/admin/listMailConfiguration")
      cy.CheckMenu ("admin_viewEmailNotification", "Notification par Email", "/admin/viewEmailNotification")
      cy.CheckMenu ("admin_localization", "Localisation", "/admin/localization")
      cy.CheckMenu ("admin_languagePackage", "Language Packages", "/admin/languagePackage")
      cy.CheckMenu ("admin_viewModules", "Configuration du module", "/admin/viewModules")
      cy.CheckMenu ("admin_openIdProvider", "Liste Fournisseurs", "/admin/openIdProvider")
      cy.CheckMenu ("admin_registerOAuthClient", "Ajouter Client OAuth", "/admin/registerOAuthClient")
    });

    it("Menu PIM", () => {
      cy.get('#menu_pim_viewPimModule').click();
      cy.CheckMenu ("pim_addEmployee", "Ajouter un employé", "/pim/addEmployee")
      cy.CheckMenu ("pim_viewEmployeeList", "Informations sur les employés", "/pim/viewEmployeeList")
      cy.CheckMenu ("core_viewDefinedPredefinedReports", "Rapports de l'employé", "/core/viewDefinedPredefinedReports")
      cy.get('#menu_pim_Configuration').click({force:true});
      cy.CheckMenu ("pim_viewTerminationReasons", "Add Termination ReasonRaisons pour Fin de Contrat", "/pim/viewTerminationReasons")
      
    });
  });

    after("Logout", () => {
      cy.HttpLogout()
    });
  });
