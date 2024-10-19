Feature: Onboarding Functionality

    Scenario: Onboarding
        Given the user visits the quickconnect webapp
        When the user fills the Login form and logs in
        And the user fills the Onboarding form
        And the user clicks the Next button
        And the user checks the agreement checkbox
        And the user clicks the Complete button
        Then the user should be onboarded successfully