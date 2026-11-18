// innotations
// only - runs only this test.
// skip - skip the test completely
// fail - marks a test as expected to fail
// fixme - skip the test because it is broken or not yet completly implemented.
// slow - triplets the timeout.(30 * 3 = 90 seconds)
// describe - group related test cases

import { test, expect } from '@playwright/test';

test('test', async ({ page,browserName }) => {
  test.skip(browserName === "firefox", 'Feature not supported to firefox browser')
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Dashboard');
});

test.fixme('playwright get by role locator test',async({page})=>{
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

test("Handle Slider Test",async({page,browserName})=>{
    test.fail(browserName === 'firefox','test failed in firefox browser only')
    test.slow()
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const amount = await page.locator("input#amount")
    const handles = await page.locator("#slider-range .ui-slider-handle")

    await expect(amount).toHaveValue('$75 - $300')
    await expect(handles).toHaveCount(2)
    await page.waitForTimeout(20000)
    await handles.nth(0).focus()
    await page.keyboard.press('Home');
    for(let value = 0; value < 100; value++){
        await page.keyboard.press('ArrowRight')
    }

     await handles.nth(1).focus()
     await page.keyboard.press('End');
      for(let value = 0; value < 100; value++){
        await page.keyboard.press('ArrowLeft')
    }
     await expect(amount).toHaveValue('$100 - $400')
     await page.waitForTimeout(30000)


})