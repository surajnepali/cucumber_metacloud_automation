import { isVisible } from "../support/assertions";

class LoginPage {
  constructor() {
    (this.emailPhoneField =
      "input[placeholder='Enter email or mobile number']"),
      (this.passwordField = "input[name='password']"),
      (this.loginButton = (button) =>
        `.common-button button:contains(${button})`);
  }

  verifyEmailPhoneField() {
    return isVisible(this.emailPhoneField);
  }

  verifyPasswordField() {
    return isVisible(this.passwordField);
  }

  verifyLoginButton(button) {
    return isVisible(this.loginButton(button));
  }

  fillLoginForm(emailPhone, password) {
    this.verifyEmailPhoneField().type(emailPhone);
    this.verifyPasswordField().type(password);
  }

  clickLoginButton(button) {
    this.verifyLoginButton(button).click();
  }
}

export default LoginPage;
