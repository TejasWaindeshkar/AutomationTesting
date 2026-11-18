import{test,expect} from '@playwright/test'

test("Window Handle Test",async({page})=>{
    await page.goto("https://www.naukri.com/")
    const page1Promise = page.waitForEvent('popup')
    await page.locator("span[title='MNC']").click()
    const page1 = await page1Promise;
    await page1.locator("span[title='Remote Jobs']").click();
    const page2Promise = page.waitForEvent('popup')
    await page.locator("span[title='Startup']").click()
    const page2 = await page2Promise;
    await page2.locator("span[title='IT Jobs']").click()
    await page.waitForTimeout(5000) // static wait 
})

test("Multiple Window Handle Test",async({page,context})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.getByText("Popup Windows").click()
    await page.waitForTimeout(2000)
    const pages = context.pages();
    const page1 = pages[1]
    const page2 = pages[2]
    await page.waitForTimeout(2000)
  
    await page1.getByText("Downloads",{exact:true}).click()
    await expect(page1.getByRole('heading',{name: 'Downloads'})).toBeVisible()
    await page2.getByRole('link', { name: 'Get started' }).click();
    await expect(page2.getByRole('heading', { name: 'Installation' })).toBeVisible();
    await page.waitForTimeout(5000)
       
})

test('basic Auth Window',async({page})=>{
    test.setTimeout(60000)
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    await page.waitForTimeout(5000)
})

test("Basic Auth Test",async({browser})=>{
    test.setTimeout(60000)
    const context = await browser.newContext({
        httpCredentials:{
            username: 'admin',
            password: 'admin'
        }
    })
    const page = await context.newPage()
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
    await page.waitForTimeout(5000)
})