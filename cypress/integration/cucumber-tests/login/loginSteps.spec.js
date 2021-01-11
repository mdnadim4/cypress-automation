import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("I open to login page", () => {
    cy.visit("https://demoqa.com/login")

})

When("I submit login button", () => {
    cy.get("#userName").type("admin")
    cy.get("#password").type("Nadim@100")
    cy.contains("#login").click()
})

Then("I should see homepage", () => {
    cy.should("include", "demoqa.com/profile")
    cy.contains("Profile").should("be.visible")
})