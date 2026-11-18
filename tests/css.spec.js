import{test,expect} from '@playwright/test'

test('css locator test',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // 1. By Tag Name
    await page.locator("input").nth(1).fill("admin")
    await page.locator("input").nth(2).fill("admin123")
    //visible – Matches only elements that are visible on the page
    await page.locator('button:visible').click(); 
 //   await page.locator("button").click()

    // 3. By Class Name (using .)
    expect(await page.locator(".oxd-topbar-header-breadcrumb-module")).toContainText('Dashboard')
    //await page.locator(".oxd-main-menu-item").first().click()
    // text-is("exact text") – Matches the smallest element with the exact text match
    await page.locator('span:text-is("Admin")').click();
  
      // 4. By Attribute (using brackets)
    await page.locator(`[class="oxd-input oxd-input--active"]`).last().fill("ravi")  
    await page.waitForTimeout(1000)
    // 2. By ID (using #)
    await page.goto("https://demoqa.com/login")
    await page.locator("#userName").fill("utkarshaa123")
    await page.locator("#password").fill("Utkarshaa@321")
    await page.locator("#login").click()
    // 4. By Attribute (using brackets)
    await page.locator('[id="gotoStore"]').click()
    await page.locator('[href="/books?search=9781449325862"]').click()
    // 5. Combining Tag, Class, and Attribute
    // await page.locator('button#addNewRecordButton.btn.btn-primary').last().click()

    // has-text("text") -  Matches elements that contain the specified text 
    await page.locator('button.btn.btn-primary:has-text("Back To Book Store")').click()
    await page.waitForTimeout(1000)

    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator('form#userForm input#firstName').fill("ravi")
    await page.waitForTimeout(1000)


})