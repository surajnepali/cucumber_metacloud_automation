/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../page_objects/LoginPage";
import OnboardingPage from "../../page_objects/OnboardingPage";
import users from "../../fixtures/login.json";

const loginPage = new LoginPage();
const onboardingPage = new OnboardingPage();

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

Given("the user visits the quickconnect webapp", () => {
  // Implement the step here, for example:
  cy.visit(Cypress.env("baseUrl"));
});

When("the user fills the Login form and logs in", () => {
  loginPage.fillLoginForm(users.users[0].email, users.users[0].password);
  loginPage.clickLoginButton("Login");
});

When("the user fills the Onboarding form", () => {
  onboardingPage.fillForm();
});

When("the user clicks the Next button", () => {
  onboardingPage.clickButton("Next");
});

When("the user clicks the Complete button", () => {
  onboardingPage.clickButton("Complete");
});

When("the user checks the agreement checkbox", () => {
  onboardingPage.checkAgreeCheckbox();
});

Then("the user should be onboarded successfully", () => {
  onboardingPage.verifyTitleItemTextContains(
    "Your KYC has been submitted successfully!"
  );
});