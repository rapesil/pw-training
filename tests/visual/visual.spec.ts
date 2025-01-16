import { test, expect } from '@playwright/test';

test('has title', async ({ page, viewport }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveScreenshot(`${test.info().title}-${viewport?.width}.png`);
});
