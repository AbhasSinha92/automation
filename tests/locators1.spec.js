const {test, expect } = require('@playwright/test');
const { OrangeHrmLoginPage } = require('../pages/OrangeHrmLoginPage');

test('locators1', async ({ page }) => {
  const loginPage = new OrangeHrmLoginPage(page);

  await loginPage.open();

  await expect(loginPage.logo).toBeVisible();

  await loginPage.login('Admin', 'admin123');

});