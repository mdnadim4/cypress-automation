describe('Verify Navbar', () => {

    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
   
    it('Should display homepage content', () => {
        cy.contains('Home').click()
        cy.url().should('include', 'index.html')
    })

    it('Should display Online Banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        
    })

    it('Should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').contains('Feedback').should('be.visible')
        
    })

})
