// xpath - xml(extended markup language) path

import{test,expect} from '@playwright/test'

test('xpath locator test',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // basic xpath syntax
    //tagname[@attribute='value']
    await page.locator('//input[@name="username"]').fill('admin')
    await page.locator('xpath=//input[@type="password"]').fill('admin123')

    // xpath using text
    // syntax
    //tagname[text()='text_value']
    await page.locator("//button[text()=' Login ']").click()

    // partial text - contains text

    await page.goto('https://demoqa.com/automation-practice-form')
    await page.locator("//label[contains(text(),'Mu')]").check()

    // contains partial attribute value
    await page.locator('//input[contains(@placeholder,"First")]').fill("Utkarshaa")

    // starts-with
    await page.locator('//input[starts-with(@placeholder,"Last")]').fill("academy")

    // And using xpatg
    await page.locator('//input[@class=" mr-sm-2 form-control" and @placeholder="Mobile Number"]').fill('9423111564')
  //  await page.locator('//input[@class="mr-sm-2 form-control" or @placeholder="name@example.com"]').fill('utkarshaa.academy@gmail.com')
    await page.locator('//input[@class="mr-sm-2 form-control" or @placeholder="name@example"]').fill('utkarshaa.academy@gmail.com')
    // await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
    await page.waitForTimeout(5000)

})