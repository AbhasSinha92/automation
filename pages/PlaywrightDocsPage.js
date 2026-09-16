class PlaywrightDocsPage {
  constructor(page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }

  async open() {
    await this.page.goto('https://playwright.dev/');
  }

  async openGettingStarted() {
    await this.getStartedLink.click();
  }
}

module.exports = { PlaywrightDocsPage };
