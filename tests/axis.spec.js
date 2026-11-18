import{test,expect} from '@playwright/test'

test('Xpath Axis method test',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill('admin')
    await page.locator('//input[@name="password"]').fill('admin123')
    await page.locator("//button").click()

    // child Axis method
    await page.locator("//a[@class='oxd-main-menu-item']//child::span[text()='Admin']").click()
    await page.locator('//div[@class="orangehrm-header-container"]//child::button').click()

    // follwing
    await page.locator("(//label[text()='User Role']//following::div[@class='oxd-select-wrapper'])[1]").click()
    //  parent 
    await page.locator("//span[text()='Admin']//parent::div").click()

    // following-sibling
    await page.locator('//div[@class="oxd-autocomplete-text-input--before"]//following-sibling::input').fill('ravi')

    await page.locator('//span[text()="bala kumar ravi"]').click()
    await page.locator("(//label[text()='User Role']//following::div[@class='oxd-select-wrapper'])[2]").click()
    await page.locator('//span[text()="Enabled"]').click()
    await page.locator("//label[text()='Username']//parent::div//following-sibling::div//input").fill('ravin')
    await page.waitForTimeout(5000)
})