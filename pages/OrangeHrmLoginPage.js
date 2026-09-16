class OrangeHrmLoginPage {
  constructor(page) {
    this.page = page;
    this.logo = page.getByAltText('company-branding');
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { type: 'submit' });
  }

  async open() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { OrangeHrmLoginPage };
