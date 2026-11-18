import{test,expect} from '@playwright/test'

// Auto wait (default wait) - click(), fill(), check(), uncheck(), setInputFiles(), selectioptions() etc...
//locator wait (waitFor()) - dynamic wait.
// explicit wait (waitFortimeout()) - static wait
// wait for load state
// wait for url 
// wait for response
// wait for request
// wait for event 
// assertion wait (expect()) - default time 5000 ms
test('waiting mechanism',async({page})=>{
    test.slow()
   // test.setTimeout(60000)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/dashboard/index',{timeout:40000}) // wait for url
    await page.waitForLoadState('load')
    const Dashbaord = await page.getByRole('heading', { name: 'Dashboard' });
    await expect(await Dashbaord).toBeVisible({timeout:10000})
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    page.on('dialog',async dialog=>{
        console.log(dialog.message())
        await dialog.accept("Utkarshaa Academy")
    })
    await page.getByText("Prompt Alert").click()
    await page.waitForTimeout(5000)
    const page1promise = page.waitForEvent('popup') // WAIT FOR EVEVENT
    await page.getByText("New Tab").click()
    const page1 = await page1promise;
    await page1.getByText("Online Training").click()
    await page1.waitForTimeout(5000)
})

test('api test',async({page})=>{
   await page.goto('https://demoqa.com/login')
   
   await page.locator("#userName").fill('ravibn')
   await page.locator("#password").fill('Ravi@123')
  
   const requestPromise = page.waitForRequest(request =>
    request.url().includes('/Account/v1/Login') && request.method() === 'POST'
   )
   const responsePromise = page.waitForResponse(response =>
    response.url().includes('/Account/v1/Login') && response.request().method() === 'POST'
   )
    await page.locator("#login").click()
   const [loginRequest, loginResponse] = await Promise.all([requestPromise, responsePromise])
   expect(loginRequest.method()).toBe('POST')
   expect(loginResponse.status()).toBe(200)

})