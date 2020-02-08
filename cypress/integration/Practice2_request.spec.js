// 
// Login with request
// Get csrf_token 
// Preservce PHPSESSID
//

describe("Login programmatically with CSRF", () => {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('PHPSESSID', 'Loggedin');
      });


    it("Login programmatically to orangehrm", () => {
        cy.request("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        .its('body')
        .then((body) => {   
            // we can use Cypress.$ to parse the string body
            // thus enabling us to query into it easily
            const $html = Cypress.$(body)
            const csrf = $html.find('#csrf_token').val()
            cy.log(csrf)
            const bodyText = 'actionID=&hdnUserTimeZoneOffset=0&'+
                            'installation=&'+
                            '_csrf_token=' + csrf +
                            '&txtUsername=Admin&'+
                            'txtPassword=admin123&'+
                            'Submit=CONNEXION'
            cy.log(bodyText);
            cy.request({
                method: 'POST',
                form: true,
                url: 'https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials',
                body : bodyText
                });
            
            
        })
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
        cy.get('#welcome')
            .should('contain', 'Welcome');
  
    });

    it("Navigate GIP", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
        cy.get('#welcome')
            .should('contain', 'Welcome');
        
        cy.get('#menu_pim_viewPimModule').click();

        cy.get('#menu_pim_viewEmployeeList')
            .should("be.visible");
        cy.get('#menu_pim_addEmployee')
            .should("be.visible");


    });

    it("Navigate List", () => {
        cy.get('#menu_pim_viewPimModule').click();
        cy.get('#menu_pim_viewEmployeeList')
            .should("be.visible");

        cy.get('#menu_pim_viewEmployeeList').click();
        cy.get('#empsearch_id')
            .should("be.visible");


    });

    it("Logout", () => {
        cy.request("http://localhost/orangehrm/symfony/web/index.php/auth/logout");
    });
});
