describe('Currency Exchange Testing', () => {
    
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            //Login via custom commands
            cy.login(username, password)
        })
    })

    it('Should fill find transaction form', () => {
        cy.get('#account_activity_tab').click()
        cy.contains('Find Transactions').click()
        cy.get('#aa_fromAmount').type('200')
        cy.get('#aa_toAmount').type('1000')
        
    })

    it('Should display results', () => {
        cy.get('#filtered_transactions_for_account').should('be.visible')
        cy.get('tbody>tr').its('length').should('be.gt', 0)
    })

});