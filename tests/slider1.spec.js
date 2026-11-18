import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  await expect(page.getByRole('textbox', { name: 'Price range:' })).toBeVisible();
  await expect(page.locator('.ui-slider-handle').first()).toBeVisible();
  await expect(page.locator('.ui-slider-handle.ui-corner-all.ui-state-default.ui-state-hover')).toBeVisible();
  await page.locator('.ui-slider-handle').first().click();
  await page.locator('.ui-slider-handle.ui-corner-all.ui-state-default.ui-state-hover').click();
  await expect(page.getByRole('textbox', { name: 'Price range:' })).toBeVisible();
  await expect(page.locator('#HTML7')).toContainText('Price range:');
});