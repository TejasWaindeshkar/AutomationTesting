import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Dashboard');
});

test('playwright get by role locator test @smoke',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole('checkbox',{name: 'Sunday'}).check();
    await page.getByRole('radio', { name: 'Male',exact:true}).click()
    await page.getByRole('checkbox',{name: 'Monda'}).check();
    await page.getByText('Tuesday').check()
    await page.getByText('Submit',{exact:true}).nth(1).click()
    await page.getByText('Blog',{exact:true}).first().click()
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.getByLabel("Email Address:").fill("utkarshaa.academy@gmail.com")
    await page.getByLabel("Password:").fill("admin123")
    await page.getByLabel("Your Age:").fill("42")
    await page.getByLabel("Express").click()

    await page.getByPlaceholder("Enter your full name").fill("Utkarshaa Academy")
    await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("8830158607")

    await expect(await page.getByAltText("logo image")).toBeVisible();
    const toolTipText = await page.getByTitle("Tooltip text").textContent()
    expect(await toolTipText).toEqual('This text has a tooltip')

    const profile_name = await page.getByTestId("profile-name").textContent()
    expect(await profile_name).toEqual('John Doe')
    await page.getByTestId("nav-products").click()
    await page.waitForTimeout(5000)
})