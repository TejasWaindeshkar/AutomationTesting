# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPageTest.spec.js >> OramgeHRM Test cases >> Forgot Password test
- Location: tests\loginPageTest.spec.js:34:1

# Error details

```
TypeError: page.context is not a function
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
  17 |         await loginPage.navigate()
  18 |     })
  19 | 
  20 | test('valid login test',async({loginPage,dashboardPage,page})=>{
  21 |     await loginPage.login('Admin','admin123')
  22 |     await dashboardPage.isDashboardPageHeadingVisible()
  23 |     await expect(page).toHaveURL(/dashboard\/index/)
  24 |     await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
  25 |     await dashboardPage.Logout()
  26 | })
  27 | 
  28 | test('invalid login test',async({loginPage,page})=>{
  29 |     await loginPage.login('Admin','admin1234')
  30 |     await expect(loginPage.inavalidCredMessage).toBeVisible()
  31 |     await expect(page).not.toHaveURL(/dashboard\/index/)
  32 |     await expect(page).toHaveURL(/auth\/login/)
  33 | })
  34 | test('Forgot Password test',async({loginPage})=>{
  35 |     await loginPage.forgotPassword()
> 36 |     await expect(loginPage).toHaveURL(/auth\/requestPasswordResetCode/)
     |                             ^ TypeError: page.context is not a function
  37 | })
  38 | test('create new user test',async({loginPage,adminPage})=>{
  39 |     await loginPage.login('Admin','admin123')
  40 |     await adminPage.openAdminPage()
  41 |     await adminPage.clickAddUser()
  42 |     const newuser = {
  43 |         role:'Admin',
  44 |         employeeName: 'Ravi M B',
  45 |         username: `ravi_test_${Date.now()}`,
  46 |         status: 'Enabled',
  47 |         password: 'Test@123'
  48 |     }
  49 |     await adminPage.adduser(newuser)
  50 |     await adminPage.waitForTimeout(5000)
  51 | })
  52 | })
```