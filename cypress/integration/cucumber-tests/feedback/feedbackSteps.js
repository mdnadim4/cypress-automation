import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackPage'

Given('I open the feedback form', () => {
    FeedbackPage.visit()
})

When('I fill all input fields', () => {
    FeedbackPage.fillFeedbackForm()
})

And('I click on send button', () => {
    FeedbackPage.submitButton()
})

// Then('I see "/sendFeedback.html" in the url', () => {
//     FeedbackPage.sendFeedback()
// })