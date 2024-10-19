import "cypress-iframe";

import {
  isClick,
  isEnabled,
  isVisible,
  isDisabled,
} from "../support/assertions";

class SignUpPage {
  constructor() {
    this.emailPhoneField = "input[name='user']";
    this.passwordField = "input[name='password']";
    this.captchaCheckbox = "iframe";
    this.createAccountButton = "div.common-button button";
  }

  verifyEmailPhoneField() {
    return isVisible(this.emailPhoneField);
  }

  verifyPasswordField() {
    return isVisible(this.passwordField);
  }

  verifyCaptchaCheckbox() {
    // return isVisible(this.captchaCheckbox).find("[role='checkbox']");
    return cy
      .get(this.captchaCheckbox)
      .its("0.#document")
      .should("not.be.empty")
      .then(cy.wrap)
      .find("[role='checkbox']");
  }

  verifyCreateAccountButton() {
    return isVisible(this.createAccountButton);
  }

  fillSignUpForm(emailPhone, password) {
    this.verifyEmailPhoneField().type(emailPhone);
    this.verifyPasswordField().type(password);

    cy.get("iframe")
      .first()
      .its("0.contentDocument.body")
      .should("not.be.undefined")
      .and("not.be.empty")
      .then(cy.wrap)
      .find("#recaptcha-anchor")
      .should("be.visible")
      .click();

    // Mock the reCAPTCHA API
    // cy.window().then((win) => {
    //   win.grecaptcha = {
    //     execute: cy.stub().resolves("mocked-recaptcha-token"),
    //     render: cy.stub(),
    //     ready: (callback) => callback(),
    //   };
    // });

    // cy.window().then((win) => {
    //   win.___grecaptcha_cfg = {
    //     count: 1,
    //     clients: {
    //       0: { D: { has_selected: true } },
    //     },
    //   };
    // });

    // // // Interact with the reCAPTCHA iframe
    // cy.iframe(this.captchaCheckbox)
    //   .should("be.visible")
    //   .then(($iframe) => {
    //     // Click the reCAPTCHA checkbox
    //     const $checkbox = $iframe.contents().find("[role='checkbox']");
    //     cy.wrap($checkbox).click();
    //     cy.wait(5000);
    //   });

    // // Wait for the reCAPTCHA to be "solved"
    // cy.iframe("#recaptcha-iframe")
    //   .find(".recaptcha-checkbox-checked")
    //   .should("be.visible");

    // cy.frameLoaded(this.captchaCheckbox);
    // // this.verifyCaptchaCheckbox().click();

    // cy.get(this.captchaCheckbox).then(($iframe) => {
    //   const $body = $iframe.contents().find("body");
    //   cy.log("BODY: ", $body);
    //   cy.wrap($body).find("button-selector").click();
    // });
  }

  clickCreateAccountButton() {
    this.verifyCreateAccountButton().click();
  }
}

export default SignUpPage;
