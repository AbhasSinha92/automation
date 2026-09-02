// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Find all Playwright tests in the tests folder.
  testDir: './tests',

  // Allow independent tests to run at the same time.
  fullyParallel: true,

  // Prevent accidental test.only usage in CI environments.
  forbidOnly: !!process.env.CI,

  // Retry failed tests only when running in CI.
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Generate an HTML report after the test run.
  reporter: 'html',

  // Settings shared by every browser project.
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // Run the test suite in Chromium, Firefox, and WebKit.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

