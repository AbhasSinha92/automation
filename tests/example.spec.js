// @ts-check
import { test, expect } from '@playwright/test';
const { PlaywrightDocsPage } = require('../pages/PlaywrightDocsPage');

test('has title', async ({ page }) => {
  const docsPage = new PlaywrightDocsPage(page);
  await docsPage.open();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  const docsPage = new PlaywrightDocsPage(page);
  await docsPage.open();

  await docsPage.openGettingStarted();

  await expect(docsPage.installationHeading).toBeVisible();
});
