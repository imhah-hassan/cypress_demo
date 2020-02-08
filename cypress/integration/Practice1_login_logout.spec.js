// 
//  First sample : login/logout to OrangeHRM
//

describe("OrangeHRM Add employee", () => {

    it("Login to orangehrm", () => {
        cy.on ('uncaught:exception', (err, runnable)=>{
            return false;
        })
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get('#divLogo > img')
            .should('be.visible')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')

        cy.get('#btnLogin').click()
        cy.get('#welcome')
            .should('contain', 'Welcome')

        cy.get('#welcome').click()
        cy.get('a[href*="auth/logout"]').click()

        cy.get('#divLogo > img')
            .should('be.visible')
    });
});
