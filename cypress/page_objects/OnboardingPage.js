import { onboardingData } from "../data/onboarding.data";
import { isVisible } from "../support/assertions";

class OnboardingPage {
  constructor() {
    (this.firstNameField = "input[name='first_name']"),
      (this.lastNameField = "input[name='last_name']"),
      (this.emailField = "input[name='email']"),
      (this.companyNameField = "input[name='name']"),
      (this.industryTypeDropdown = "select[name='industry_type']"),
      (this.companyPhoneNumberField = "input[name='phone']"),
      (this.companyLandlineNumberField = "input[name='phone1']"),
      (this.companyRegistrationNumberField =
        "input[name='company_registration_number']"),
      (this.stateDropdown = "select[name='state_id']"),
      (this.districtDropdown = "select[name='district_id']"),
      (this.cityField = "input[name='city']"),
      (this.addressField = "input[name='address']"),
      (this.companyWebsiteField = "input[name='website']"),
      (this.companyCertification = "div.custom-input.for-viber"),
      (this.button = (name) => `.common-button button:contains(${name})`),
      (this.agreeCheckbox = ".agree-item input[type='checkbox']"),
      (this.titleItemText = ".title-item"),
      (this.descriptionItemText = ".small-text p");
  }

  verifyFirstNameField() {
    return isVisible(this.firstNameField);
  }

  verifyLastNameField() {
    return isVisible(this.lastNameField);
  }

  verifyEmailField() {
    return isVisible(this.emailField);
  }

  verifyCompanyNameField() {
    return isVisible(this.companyNameField);
  }

  verifyIndustryTypeDropdown() {
    return isVisible(this.industryTypeDropdown);
  }

  verifyCompanyPhoneNumberField() {
    return isVisible(this.companyPhoneNumberField);
  }

  verifyCompanyLandlineNumberField() {
    return isVisible(this.companyLandlineNumberField);
  }

  verifyCompanyRegistrationNumberField() {
    return isVisible(this.companyRegistrationNumberField);
  }

  verifyStateDropdown() {
    return isVisible(this.stateDropdown);
  }

  verifyDistrictDropdown() {
    return isVisible(this.districtDropdown);
  }

  verifyCityField() {
    return isVisible(this.cityField);
  }

  verifyAddressField() {
    return isVisible(this.addressField);
  }

  verifyCompanyWebsiteField() {
    return isVisible(this.companyWebsiteField);
  }

  verifyCompanyCertification() {
    return isVisible(this.companyCertification);
  }

  verifyButton(name) {
    return isVisible(this.button(name));
  }

  verifyAgreeCheckbox() {
    return isVisible(this.agreeCheckbox);
  }

  verifyTitleItemText() {
    return isVisible(this.titleItemText);
  }

  verifyDescriptionItemText() {
    return isVisible(this.descriptionItemText);
  }

  fillForm() {
    this.verifyFirstNameField().clear().type(onboardingData.firstName);
    this.verifyLastNameField().clear().type(onboardingData.lastName);
    this.verifyCompanyNameField().clear().type(onboardingData.companyName);
    this.verifyIndustryTypeDropdown().select("Accounting");
    this.verifyCompanyPhoneNumberField()
      .clear()
      .type(onboardingData.companyMobileNumber);
    this.verifyCompanyLandlineNumberField()
      .clear()
      .type(onboardingData.companyLandlineNumber);
    this.verifyCompanyRegistrationNumberField()
      .clear()
      .type(onboardingData.companyRegistrationNumber);
    this.verifyStateDropdown().select("Bagmati");
    this.verifyDistrictDropdown().select("Kathmandu");
    this.verifyCityField().clear().clear().type(onboardingData.city);
    this.verifyAddressField().clear().type(onboardingData.address);
    this.verifyCompanyWebsiteField().clear().type("https://youtube.com");
    this.verifyCompanyCertification()
      .find("label[for='document']")
      .selectFile("cypress/fixtures/test.jpg");
  }

  clickButton(name) {
    this.verifyButton(name).click();
  }

  checkAgreeCheckbox() {
    this.verifyAgreeCheckbox().check();
  }

  verifyTitleItemTextContains(text) {
    this.verifyTitleItemText()
      .invoke("text")
      .then((value) => {
        expect(value).to.contain(text);
      });
  }

  verifyDescriptionItemTextContains(text) {
    this.verifyDescriptionItemText()
      .invoke("text")
      .then((value) => {
        expect(value).to.contain(text);
      });
  }
}

export default OnboardingPage;
