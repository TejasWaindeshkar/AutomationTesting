import{test,expect}from'@playwright/test';

test('datepicker test @smoke',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const selectDate = await page.locator("input#datepicker");
    await selectDate.click();
   //await selectDate.fill("06/06/2026"); 
   const date = 16;
   await page.locator(`a[data-date="${date}"]`).click();
   await page.waitForTimeout(2000)
   await page.locator("input#txtDate").click()
   const month = "Dec";
   const year = "2027";
   await page.locator('select[data-handler="selectMonth"]').selectOption(month);
   await page.locator('select[data-handler="selectYear"]').selectOption(year);
   await page.locator(`a[data-date="${date}"]`).click();
   await page.waitForTimeout(2000)

   await page.getByPlaceholder("Start Date").fill("2026-10-06")
   await page.getByPlaceholder("End Date").fill("2026-11-06")
   await page.locator("button.submit-btn").click()
   await page.waitForTimeout(5000)
})