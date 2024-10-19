export const isVisible = (locator) => {
  return cy.get(locator).scrollIntoView().should("be.visible");
};

export const isEnabled = (locator) => {
  return cy.get(locator).should("be.enabled");
};

export const isDisabled = (locator) => {
  return cy.get(locator).should("be.disabled");
};
export const isClick = (locator) => {
  return cy.get(locator).click();
};
