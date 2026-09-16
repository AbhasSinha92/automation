const { test } = require('@playwright/test');
const { DemoblazePage } = require('../pages/DemoblazePage');

test('Locators', async ({ page }) => {
   const demoblazePage = new DemoblazePage(page);

   await demoblazePage.open();
   await demoblazePage.login('pavanol', 'test@123');

})