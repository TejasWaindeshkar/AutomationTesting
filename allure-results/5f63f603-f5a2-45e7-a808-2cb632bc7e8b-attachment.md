# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPageTest.spec.js >> OramgeHRM Test cases >> valid login test
- Location: tests\loginPageTest.spec.js:20:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Test source

```ts
  1  | // import{test,expect} from '@playwright/test'
  2  | // import { LoginPage } from '../pages/LoginPage'
  3  | // import { DashboardPage } from '../pages/DashboardPage'
  4  | // import { AdminPage } from '../pages/AdminPage';
  5  | const {test,expect} = require('../fixtures/customfixtures');
  6  | 
  7  | test.describe('OramgeHRM Test cases',()=>{
  8  | 
  9  |     // let loginpage;
  10 |     // let dashboardpage;
  11 |     // let adminpage;
  12 | 
  13 |     test.beforeEach(async ({loginPage})=>{
  14 |         // loginpage = new LoginPage(page);
  15 |         // dashboardpage = new DashboardPage(page);
  16 |         // adminpage = new AdminPage(page)
  17 |         await loginPage.navigate("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  18 |     })
  19 | 
  20 | test('valid login test',async({loginPage,dashboardPage,page})=>{
> 21 |     expect(await loginPage.verifyPageLoaded()).toBe(true)
     |                                                ^ Error: expect(received).toBe(expected) // Object.is equality
  22 |     await loginPage.login('Admin','admin123')
  23 |     await dashboardPage.isDashboardPageHeadingVisible()
  24 |     await expect(page).toHaveURL(/dashboard\/index/)
  25 |     expect(await dashboardPage.verifyPageLoaded()).toBe(true)
  26 |     await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
  27 |     await dashboardPage.Logout()
  28 | })
  29 | 
  30 | test('invalid login test',async({loginPage,page})=>{
  31 |     await loginPage.login('Admin','admin1234')
  32 |     await expect(loginPage.inavalidCredMessage).toBeVisible()
  33 |     await expect(page).not.toHaveURL(/dashboard\/index/)
  34 |     await expect(page).toHaveURL(/auth\/login/)
  35 | })
  36 | test('Forgot Password test',async({loginPage,page})=>{
  37 |     await loginPage.forgotPassword()
  38 |     await expect(page).toHaveURL(/auth\/requestPasswordResetCode/)
  39 | })
  40 | test('create new user test',async({loginPage,adminPage,page})=>{
  41 |     await loginPage.login('Admin','admin123')
  42 |     await adminPage.openAdminPage()
  43 |     await adminPage.clickAddUser()
  44 |     const newuser = {
  45 |         role:'Admin',
  46 |         employeeName: 'Ravi M B',
  47 |         username: `ravi_test_${Date.now()}`,
  48 |         status: 'Enabled',
  49 |         password: 'Test@123'
  50 |     }
  51 |     await adminPage.adduser(newuser)
  52 |     await page.waitForTimeout(5000)
  53 | })
  54 | })
```