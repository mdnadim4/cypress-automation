describe('Verify feedback form', () => {

    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
    })

    it('should load feedback form', () => {
        cy.get('form').should('be.visible')
    });

    it('Should fill feedback form', () => {
        cy.get('#name').type('name')
        cy.get('#email').type('email@email.com')
        cy.get('#subject').type('just subject')
        cy.get('#comment').type('just my comment')
    });

    it('Should submit feeback form', () => {
        cy.contains('Send Message').click()
    });

    it('Should display feedback message', () => {
        cy.url().should('include', 'sendFeedback.html')
        cy.get('.offset3').contains('Thank you for your comments, name. They will be reviewed by our Customer Service staff and given the full attention that they deserve.')
    });
    
})
