const { test, expect } = require('@playwright/test');
const { DemoblazePage } = require('../pages/DemoblazePage');

test('Home page' , async ({page}) => {
  const demoblazePage = new DemoblazePage(page);

  await demoblazePage.open();

  const pageTitle = await page.title();
  console.log('page title is:', pageTitle);

  await expect(page).toHaveTitle('STORE');

  const pageURL=page.url();
  console.log('page URL is:', pageURL);




})