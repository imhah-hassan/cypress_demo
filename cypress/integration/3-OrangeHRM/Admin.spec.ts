/// <reference types="cypress" />
describe("Scénarion de connexion / déconnexion", () => {
    before("Ouvrir la page d'accueil", () => {
        cy.HttpLogin()
    });
    it ("Update Organization General Information",()=>{
        cy.visit ("/admin/viewOrganizationGeneralInformation")
        cy.fixture("organization").then (org=>{
            cy.get('#btnSaveGenInfo').click()
            cy.get('#organization_name').clear().type(org.name)
            cy.get('#organization_phone').clear().type(org.phone)
            cy.get('#organization_email').clear().type(org.email)
            cy.get('#organization_street1').clear().type(org.street1)
            cy.get('#organization_city').clear().type(org.city)
            cy.get('#organization_zipCode').clear().type(org.zipCode)
            cy.get('#organization_province').clear().type(org.province)
            cy.get('#organization_country').select(org.country)
            cy.get('#organization_note').clear().type(org.note)
            cy.get('#btnSaveGenInfo').click()
        })
    })
    it ("Locations",()=>{
        cy.visit ("/admin/viewLocations")
        cy.get('#btnAdd').click()
        cy.fixture("location").then (location=>{
            cy.get('#location_name').clear().type(location.name)
            cy.get('#location_country').select(location.country)
            cy.get('#location_province').clear().type(location.province)
            cy.get('#location_city').clear().type(location.city)
            cy.get('#location_address').clear().type(location.address)
            cy.get('#location_zipCode').clear().type(location.zipCode)
            cy.get('#location_notes').clear().type(location.notes)
            cy.get('#btnSave').click()
        })
    })
    it ("Company Structure",()=>{
        cy.visit ("/admin/viewCompanyStructure")
        cy.get('#btnEdit').click()
        cy.fixture("StructureUnits").then (unit=>{
            cy.get('#treeLink_addChild_1').click()
            cy.get('#title').should("have.text", "OrangeHRM - "+Cypress.env("AddUnit"))
            cy.get('#txtUnit_Id').clear().type(unit.Id)
            cy.get('#txtName').clear().type(unit.Name)
            cy.get('#txtDescription').clear().type(unit.Description)
            cy.get('#btnSave').click()
        })
        cy.get('#btnEdit').click()

    })
    it ("Add job",()=>{
        cy.visit ("/admin/viewJobTitleList")
        cy.fixture("JobTitles").then (JobTitles=>{
            JobTitles.forEach((JobTitle: any) => {
                cy.get('#btnAdd').click()
                cy.get('#jobTitle_jobTitle').type (JobTitle.title)
                cy.get('#jobTitle_jobDescription').type (JobTitle.description)
                cy.get('#jobTitle_note').type (JobTitle.note)
                cy.get('#btnSave').click()
          });
        })
    })

    it ("Add job status",()=>{
        cy.visit ("/admin/employmentStatus")
        cy.fixture("JobStatus").then (statuses=>{
            statuses.forEach((status: any) => {
                cy.get('#btnAdd').click()
                cy.get('#empStatus_name').type (status.Status_name)
                cy.get('#btnSave').click()
            })
        })
    })
    it ("Add job category",()=>{
        cy.visit ("/admin/jobCategory")
        cy.fixture("JobCategories").then (JobCategories=>{
            JobCategories.forEach((JobCategory: any) => {
                cy.get('#btnAdd').click()
                cy.get('#jobCategory_name').type (JobCategory.name)
                cy.get('#btnSave').click()
            });
        })
    })

    it ("Add job pay grade",()=>{
        cy.fixture("PayGrades").then (PayGrades=>{
            PayGrades.forEach((PayGrade: any) => {
                cy.visit ("/admin/viewPayGrades")
                cy.get('#btnAdd').click()
                cy.get('#payGrade_name').type (PayGrade.name)
                cy.get('#btnSave').click()
            });
        })
    })

})