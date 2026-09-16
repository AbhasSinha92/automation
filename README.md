# Playwright Automation Project

This project uses Playwright Test with the Page Object Model (POM).

## Structure

```text
pages/   Page objects containing locators and reusable page actions
tests/   Test scenarios and assertions
```

## Page object usage

Create the page object with the Playwright `page` fixture, then call its actions
from the test:

```js
const { DemoblazePage } = require('../pages/DemoblazePage');

const demoblazePage = new DemoblazePage(page);
await demoblazePage.open();
await demoblazePage.login('username', 'password');
```

Keep selectors and reusable interactions in `pages/`. Keep test intent and
assertions in `tests/`.

## Run tests

```bash
npm test
npm run test:chromium
```
