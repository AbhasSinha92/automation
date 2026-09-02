
const { test, expect } = require('@playwright/test');

test('LocateMultipleElements', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // Get all links
  const links = await page.$$('a');
  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText);
  }

  // Get all product titles
  const products = await page.$$("//div[@id='tbodyid']//div/h4/a");
  for (const product of products) {
    const productText = await product.textContent();
    console.log(productText);
  }
});
