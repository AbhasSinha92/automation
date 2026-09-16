class DemoblazePage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.loginUsername = page.locator('#loginusername');
    this.loginPassword = page.locator('#loginpassword');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.links = page.locator('a');
    this.productTitles = page.locator("//div[@id='tbodyid']//div/h4/a");
  }

  async open() {
    await this.page.goto('https://www.demoblaze.com/index.html');
  }

  async openLogin() {
    await this.loginLink.click();
  }

  async login(username, password) {
    await this.openLogin();
    await this.loginUsername.fill(username);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
  }

  async getLinkTexts() {
    return this.links.allTextContents();
  }

  async getProductTitles() {
    return this.productTitles.allTextContents();
  }
}

module.exports = { DemoblazePage };
