// Assert - compare actual result with expected result.
// expect - default assert or hard assert
// soft assert  - expect.soft
import{test,expect} from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);   // Hard Assert or Defalut Assert
  await expect.soft(page).toHaveTitle(/Playwright/);  // Soft Asseet
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect.soft(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

});

// Types of assertions 
// 1 locator assertions
// buttons, text box, dropdown etc....
// example  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

// 2 page assertions
// expect(page).toHaveTitle(/Playwright/);

// 3 Generic Assertions
// validate java script values, strings, numbers, arrays, objects, and conditions
// ex expect(200).toBe(200)

test('Assertion Test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByText('Username : Admin')).toBeVisible() // locator assertions
  await expect(page.getByPlaceholder('Username')).not.toBeHidden()
  await expect(page.getByRole('button',{name: 'Login'})).toBeEnabled()
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button',{name: 'Login'}).isVisible()    // verification
  await page.getByRole('button',{name: 'Login'}).click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByRole('heading')).toHaveText('Dashboard');
  await expect(page.getByRole('heading')).toContainText('Dashb');
  await page.getByRole('link',{name :'Leave'}).click()
  await page.locator('span.oxd-checkbox-input.oxd-checkbox-input--active.--label-right.oxd-checkbox-input').check()
  await expect(page.locator('input[type="checkbox"]').last()).toBeChecked()
});