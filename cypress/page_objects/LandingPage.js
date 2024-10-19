import { isVisible } from "../support/assertions";

class LandingPage {
  constructor() {
    this.navItem = (name) => `div.nav-item:contains(${name})`;
  }

  verifyNavItem(name) {
    return isVisible(this.navItem(name));
  }

  clickNavItem(name) {
    this.verifyNavItem(name).click();
  }
}

export default LandingPage;
