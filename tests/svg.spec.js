import{test,expect} from '@playwright/test'

test('test svg element',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const circle = await page.locator('svg circle')
    await circle.click()
    await page.waitForTimeout(5000)
    await page.goto("https://www.google.com/")
    await page.locator('svg[class="hWdRGb"]').click()
    await page.waitForTimeout(5000)
})