# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPageTest.spec.js >> OramgeHRM Test cases >> create new user test
- Location: tests\loginPageTest.spec.js:40:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for getByText('-- Select --').nth(1)

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "Admin" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: john Doe
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: User Management
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - generic [ref=f4e136]:
              - text: Job
              - generic [ref=f4e137]: 
          - listitem [ref=f4e138] [cursor=pointer]:
            - generic [ref=f4e139]:
              - text: Organization
              - generic [ref=f4e140]: 
          - listitem [ref=f4e141] [cursor=pointer]:
            - generic [ref=f4e142]:
              - text: Qualifications
              - generic [ref=f4e143]: 
          - listitem [ref=f4e144] [cursor=pointer]:
            - link "Nationalities" [ref=f4e145]:
              - /url: "#"
          - listitem [ref=f4e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=f4e147]:
              - /url: "#"
          - listitem [ref=f4e148] [cursor=pointer]:
            - generic [ref=f4e149]:
              - text: Configuration
              - generic [ref=f4e150]: 
          - button "" [ref=f4e152] [cursor=pointer]
  - generic [ref=f4e154]:
    - generic [ref=f4e157]:
      - heading "Add User" [level=6] [ref=f4e158]
      - separator [ref=f4e159]
      - generic [ref=f4e160]:
        - generic [ref=f4e162]:
          - generic [ref=f4e164]:
            - generic [ref=f4e165]: User Role*
            - generic [ref=f4e169] [cursor=pointer]:
              - generic [ref=f4e170]: Admin
              - generic [ref=f4e171]: 
          - generic [ref=f4e174]:
            - generic [ref=f4e175]: Employee Name*
            - textbox "Type for hints..." [ref=f4e180]: Ravi M B
          - generic [ref=f4e182]:
            - generic [ref=f4e183]: Status*
            - generic [ref=f4e187] [cursor=pointer]:
              - generic [ref=f4e188]: "-- Select --"
              - generic [ref=f4e189]: 
          - generic [ref=f4e192]:
            - generic [ref=f4e193]: Username*
            - textbox [active] [ref=f4e196]: ravi_test_1793120050491
        - generic [ref=f4e198]:
          - generic [ref=f4e199]:
            - generic [ref=f4e200]:
              - generic [ref=f4e201]: Password*
              - textbox [ref=f4e204]
            - paragraph [ref=f4e205]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=f4e207]:
            - generic [ref=f4e208]: Confirm Password*
            - textbox [ref=f4e211]
        - separator [ref=f4e212]
        - generic [ref=f4e213]:
          - paragraph [ref=f4e214]: "* Required"
          - button "Cancel" [ref=f4e215] [cursor=pointer]
          - button "Save" [ref=f4e216] [cursor=pointer]
    - generic [ref=f4e217]:
      - paragraph [ref=f4e218]: OrangeHRM OS 5.9
      - paragraph [ref=f4e219]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e220] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | class AdminPage{
  2  |     constructor(page){
  3  |         this.page = page;
  4  |         this.adminlink = page.getByRole('link', { name: 'Admin' })
  5  |         this.AddButton = page.getByRole('button', { name: ' Add' })
  6  |         this.selectUserRoleDropdown = page.getByText('-- Select --').first()
  7  |         this.selectStatusDropDown = page.getByText('-- Select --').nth(1)
  8  |         this.employeeNameInput = page.getByRole('textbox', { name: 'Type for hints...' })
  9  |         this.userNameInput = page.getByRole('textbox').nth(2)
  10 |         this.passwordInput = page.getByRole('textbox').nth(3)
  11 |         this.confirmPasswordInput = page.getByRole('textbox').nth(4)
  12 |         this.SaveBtn = page.getByRole('button', { name: 'Save' })
  13 |     }
  14 | 
  15 |     async openAdminPage(){
  16 |         await this.adminlink.click()
  17 |         await this.page.waitForURL(/admin\/viewSystemUsers/)
  18 |     }
  19 |     async clickAddUser(){
  20 |         await this.AddButton.click()
  21 |         await this.page.getByRole('heading', { name: 'Add User' }).waitFor({state: 'visible'})
  22 |     }
  23 |     async selectUserRole(role){
  24 |         await this.selectUserRoleDropdown.click()
  25 |         await this.page.getByRole('option',{
  26 |             name : role,
  27 |             exact: true
  28 |         }).click()
  29 |     }
  30 |     async selectStatus(status){
> 31 |         await this.selectStatusDropDown.click()
     |                                         ^ Error: locator.click: Test timeout of 40000ms exceeded.
  32 |         await this.page.getByRole('option',{
  33 |             name : status,
  34 |             exact: true
  35 |         }).click()
  36 |     }
  37 |     async selectEmployee(employeeName){
  38 |         await this.employeeNameInput.fill(employeeName)
  39 |         const suggest = this.page.locator('.oxd-autocomplete-option')
  40 |             .filter({ hasText: employeeName })
  41 |             .first()
  42 |         await suggest.waitFor({state:'visible'})
  43 |         await suggest.click()
  44 |     }
  45 |     async adduser(user){
  46 |         await this.selectUserRole(user.role)
  47 |         await this.selectEmployee(user.employeeName)
  48 |         await this.userNameInput.fill(user.username)
  49 |         await this.selectStatus(user.status)
  50 |         await this.passwordInput.fill(user.password)
  51 |         await this.confirmPasswordInput.fill(user.password)
  52 |         await this.SaveBtn.click()
  53 |     }
  54 | }
  55 | module.exports ={AdminPage}
```