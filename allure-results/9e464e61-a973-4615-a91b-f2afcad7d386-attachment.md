# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPageTest.spec.js >> OramgeHRM Test cases >> valid login test
- Location: tests\loginPageTest.spec.js:20:1

# Error details

```
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

# Test source

```ts
  1  | const {BasePage} = require('../pages/BasePage')
  2  | class DashboardPage extends BasePage{
  3  |     constructor(page){
> 4  |         this.page = page
     |         ^ ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  5  |         this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
  6  |         this.dropDownTab = page.locator(".oxd-userdropdown-tab")
  7  |         this.logoutBtn = page.getByRole('menuitem', { name: 'Logout' })
  8  |         this.userProfileIcon = page.getByRole('img', { name: 'profile picture' }).nth(1)
  9  |     }
  10 |     async isDashboardPageHeadingVisible(){
  11 |        await this.dashboardHeading.waitFor({
  12 |             state:'visible'
  13 |        })
  14 |     }
  15 |       async verifyPageLoaded(){
  16 |        await this.dashboardHeading.waitFor({
  17 |             state:'visible'
  18 |        });
  19 |        return await this.dashboardHeading.isVisible();
  20 |     }
  21 |     // async isUserProfileIconVisible(){
  22 |     //     return await this.
  23 |     // }
  24 |     async Logout(){
  25 |         await this.dropDownTab.click()
  26 |         await this.logoutBtn.click()
  27 |     }
  28 | }
  29 | module.exports = {DashboardPage}
```