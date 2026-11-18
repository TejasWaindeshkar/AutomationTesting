# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPageTest.spec.js >> OramgeHRM Test cases >> invalid login test
- Location: tests\loginPageTest.spec.js:28:1

# Error details

```
ReferenceError: page is not defined
```

# Page snapshot

```yaml
- generic [ref=f1e4]:
  - generic [ref=f1e6]:
    - img "company-branding" [ref=f1e8]
    - generic [ref=f1e9]:
      - heading "Login" [level=5] [ref=f1e10]
      - generic [ref=f1e11]:
        - generic [ref=f1e12]:
          - alert [ref=f1e13]:
            - generic [ref=f1e14]:
              - generic [ref=f1e15]: 
              - paragraph [ref=f1e16]: Invalid credentials
          - generic [ref=f1e18]:
            - paragraph [ref=f1e19]: "Username : Admin"
            - paragraph [ref=f1e20]: "Password : admin123"
        - generic [ref=f1e21]:
          - generic [ref=f1e23]:
            - generic [ref=f1e24]:
              - generic [ref=f1e25]: 
              - generic [ref=f1e26]: Username
            - textbox "Username" [active] [ref=f1e28]
          - generic [ref=f1e30]:
            - generic [ref=f1e31]:
              - generic [ref=f1e32]: 
              - generic [ref=f1e33]: Password
            - textbox "Password" [ref=f1e35]
          - button "Login" [ref=f1e37] [cursor=pointer]
          - paragraph [ref=f1e39] [cursor=pointer]: Forgot your password?
      - generic [ref=f1e40]:
        - generic [ref=f1e41]:
          - link [ref=f1e42] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=f1e45] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=f1e48] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=f1e51] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=f1e54]:
          - paragraph [ref=f1e55]: OrangeHRM OS 5.9
          - paragraph [ref=f1e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=f1e57] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=f1e59]
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
  20 | test('valid login test',async({loginPage,dashboardPage})=>{
  21 |     await loginPage.login('Admin','admin123')
  22 |     await dashboardPage.isDashboardPageHeadingVisible()
  23 |     await expect(page).toHaveURL(/dashboard\/index/)
  24 |     await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
  25 |     await dashboardPage.Logout()
  26 | })
  27 | 
  28 | test('invalid login test',async({loginPage})=>{
  29 |     await loginPage.login('Admin','admin1234')
  30 |     await expect(loginPage.inavalidCredMessage).toBeVisible()
> 31 |     await expect(page).not.toHaveURL(/dashboard\/index/)
     |                  ^ ReferenceError: page is not defined
  32 |     await expect(page).toHaveURL(/auth\/login/)
  33 | })
  34 | test('Forgot Password test',async({loginPage})=>{
  35 |     await loginPage.forgotPassword()
  36 |     await expect(page).toHaveURL(/auth\/requestPasswordResetCode/)
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
  50 |     await page.waitForTimeout(5000)
  51 | })
  52 | })
```