
const { test } = require('@playwright/test');
const { DemoblazePage } = require('../pages/DemoblazePage');

test('LocateMultipleElements', async ({ page }) => {
  const demoblazePage = new DemoblazePage(page);
  await demoblazePage.open();

  const links = await demoblazePage.getLinkTexts();
  for (const linkText of links) {
    console.log(linkText);
  }

  const products = await demoblazePage.getProductTitles();
  for (const productText of products) {
    console.log(productText);
  }
});
