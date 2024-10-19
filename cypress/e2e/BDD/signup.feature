Feature: Signup Functionality

    Scenario: Signup
        Given the user visits the quickconnect webapp
        When the user goes to Signup tab
        And the user fills the registration form
        And the user clicks the Submit button
        And the user is enters the OTP
        And the user clicks Submit button
        Then the user should be signed up successfully