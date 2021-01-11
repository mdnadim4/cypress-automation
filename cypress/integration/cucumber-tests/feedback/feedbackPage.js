/// <reference types="Cypress" />

const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME = '#name'
const EMAIL = '#email'
const SUBJECT = '#subject'
const COMMENT = '#comment'
const SUBMIT = 'input[type="submit"]'
const FEEDBACK_TITLE = '#feedback-title'
const URL_PERAMETER = '/sendFeedback.html'

class FeedbackPage {

    static visit() {
        cy.visit(URL)
    }

    static fillFeedbackForm() {
        cy.get(NAME).type('Name')
        cy.get(EMAIL).type('test@gmail.com')
        cy.get(SUBJECT).type('Subject Line')
        cy.get(COMMENT).type('This is dummy content')
    }

    static submitButton() {
        cy.get(SUBMIT).click()
    }

    // static sendFeedback() {
    //     cy.url().should('include', URL_PERAMETER)
    //     cy.get(FEEDBACK_TITLE).should('be.visible')
    // }

}

export default FeedbackPage