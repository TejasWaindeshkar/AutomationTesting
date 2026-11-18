import { test, expect } from '@playwright/test';

test.describe('Login Test',()=>{
        test.describe.configure({
          mode:'parallel',
          retries:2,
          timeout : 90000
        })
test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.screenshot({
    path: 'screenshots/abc.jpeg',
    fullPage: true
  })
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('img', { name: 'profile picture' }).nth(1)).toBeVisible();
  await expect(page.getByText('Time at Work')).toBeVisible();
  await expect(page.getByRole('banner').getByRole('img', { name: 'profile picture' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await expect(page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('list')).toContainText('Admin');
  await expect(page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('list')).toContainText('Recruitment');
  await expect(page.getByRole('banner')).toMatchAriaSnapshot(`- button "Upgrade"`);
  await page.screenshot({
    path: 'screenshots/abc1.jpeg',
    fullPage: true
  })
  await expect(page.getByRole('button', { name: 'Assign Leave' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Leave List' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Apply Leave' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'My Leave' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'My Timesheet' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'profile picture' }).nth(2)).toBeVisible();
  await page.getByRole('img', { name: 'profile picture' }).nth(2).screenshot({
    path: 'screenshots/profile.jpeg'
  })
  await page.locator('div').filter({ hasText: /^Assign LeaveLeave ListTimesheetsApply LeaveMy LeaveMy Timesheet$/ }).first().click();
});

test('test1', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Dashboard');
});

test('playwright get by role locator test',async({page})=>{
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
})