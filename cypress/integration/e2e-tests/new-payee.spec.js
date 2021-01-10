/// <reference types="Cypress" />

describe('New Payee Testing', () => {
    
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.password
            //Login via custom commands
            cy.login(username, password)
        })
    })

    it('Should Add New Payee', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_address').type('Address')
        cy.get('#np_new_payee_account').type('123456789')
        cy.get('#np_new_payee_details').type('Details')
        cy.get('#add_new_payee').click()
    });

    it('Should display success message', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'The new payee Name was successfully created.')
        cy.get('.close').click()
        cy.get('#alert_content').should('not.be.visible')
    });

})
