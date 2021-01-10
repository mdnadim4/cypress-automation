describe('Verify forget password', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('Should click on the signin button', () => {
        cy.get('#signin_button').click()
    })

    it('Should click on the forget password', () => {
        cy.get('.offset3 > a').click()
    })

    it('Should fill the email form', () => {
        cy.get('#user_email').type('test.email@email.com')
    })

    it('Should click on the Send password', () => {
        cy.contains('Send Password').click()
    })
})
