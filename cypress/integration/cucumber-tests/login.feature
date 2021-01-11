Feature: Login to Application

    As a valid user
    I want to login into application

    Scenario: Valid login
        
        Given I open to login page
        When I submit login button
        Then I should see homepage