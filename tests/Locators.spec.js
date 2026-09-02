// const { expect } = require("@playwright/test");
import {test, expect} from '@playwright/test'
// test will provide test block and expect will be used for validation
test('Locators', async ({page})=> {

   await page.goto("https://www.demoblaze.com/index.html")
   
   //click on login button - property of element as locator
   //await page.click('id = login2')
   await page.click('id=login2')
   await page.fill('#loginusername' , 'pavanol')
   await page.fill("input[id='loginpassword']", 'test@123')
   await page.getByRole('button', { name: 'Log in' }).click();

   

})