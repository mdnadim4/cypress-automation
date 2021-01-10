/// <reference types="Cypress" />

describe('Currency Exchange Testing', () => {
    
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            //Login via custom commands
            cy.login(username, password)
        })
    })

    it('Should fill transfer funds form', () => {
        cy.get('#transfer_funds_tab').click()
        cy.url().should('include', 'transfer-funds.html')
        cy.get('#tf_fromAccountId').select('2')
        cy.get('#tf_toAccountId').select('5')
        cy.get('#tf_amount').type('3000')
        cy.get('#tf_description').type('Description')
        cy.get('#btn_submit').click()
        cy.url().should('include', '')
        
    });

    it('Should verify correct data', () => {
        cy.get('#tf_fromAccountId').should('have.value', 'Checking')
        cy.get('#tf_toAccountId').should('have.value', 'Credit Card')
        cy.get('#tf_amount').should('have.value', '3000')
        cy.get('#tf_description').should('have.value', 'Description')
        cy.get('#btn_submit').click()
    });
    
})