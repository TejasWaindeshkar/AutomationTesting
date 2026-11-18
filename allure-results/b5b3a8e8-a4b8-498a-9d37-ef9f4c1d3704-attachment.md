# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hooks.spec.js >> My Info Test
- Location: tests\hooks.spec.js:52:5

# Error details

```
Test timeout of 40000ms exceeded while running "afterEach" hook.
```

# Page snapshot

```yaml
- generic [ref=f5e3]:
  - generic:
    - complementary [ref=f5e4]:
      - navigation "Sidepanel" [ref=f5e5]:
        - generic [ref=f5e6]:
          - link [ref=f5e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f5e9]
          - text: 
        - generic [ref=f5e10]:
          - generic [ref=f5e11]:
            - generic [ref=f5e12]:
              - textbox "Search" [ref=f5e15]
              - button "" [ref=f5e16] [cursor=pointer]
            - separator [ref=f5e18]
          - list [ref=f5e19]:
            - listitem [ref=f5e20]:
              - link "Admin" [ref=f5e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f5e25]:
              - link "PIM" [ref=f5e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f5e41]:
              - link "Leave" [ref=f5e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f5e46]:
              - link "Time" [ref=f5e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f5e54]:
              - link "Recruitment" [ref=f5e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f5e62]:
              - link "My Info" [ref=f5e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f5e70]:
              - link "Performance" [ref=f5e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f5e80]:
              - link "Dashboard" [ref=f5e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f5e85]:
              - link "Directory" [ref=f5e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f5e90]:
              - link "Maintenance" [ref=f5e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f5e96]:
              - link "Claim" [ref=f5e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f5e105]:
              - link "Buzz" [ref=f5e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f5e110]:
      - generic [ref=f5e111]:
        - generic [ref=f5e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f5e114]
        - link [ref=f5e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f5e117] [cursor=pointer]
        - list [ref=f5e123]:
          - listitem [ref=f5e124]:
            - generic [ref=f5e125] [cursor=pointer]:
              - img "profile picture" [ref=f5e126]
              - paragraph [ref=f5e127]: Rudraksh Pareek
              - generic [ref=f5e128]: 
      - navigation "Topbar Menu" [ref=f5e130]:
        - list [ref=f5e131]:
          - button "" [ref=f5e133] [cursor=pointer]
  - generic [ref=f5e135]:
    - generic [ref=f5e139]:
      - generic [ref=f5e140]:
        - generic [ref=f5e141]:
          - heading "Rudraksh Pareek" [level=6] [ref=f5e143]
          - img "profile picture" [ref=f5e146] [cursor=pointer]
        - tablist [ref=f5e147]:
          - tab [ref=f5e148]:
            - link "Personal Details" [ref=f5e149] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/7
          - tab [ref=f5e150]:
            - link "Contact Details" [ref=f5e151] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/7
          - tab [ref=f5e152]:
            - link "Emergency Contacts" [ref=f5e153] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/7
          - tab [ref=f5e154]:
            - link "Dependents" [ref=f5e155] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/7
          - tab [ref=f5e156]:
            - link "Immigration" [ref=f5e157] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/7
          - tab [ref=f5e158]:
            - link "Job" [ref=f5e159] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/7
          - tab [ref=f5e160]:
            - link "Salary" [ref=f5e161] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/7
          - tab [ref=f5e162]:
            - link "Report-to" [ref=f5e163] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/7
          - tab [ref=f5e164]:
            - link "Qualifications" [ref=f5e165] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/7
          - tab [ref=f5e166]:
            - link "Memberships" [ref=f5e167] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/7
      - generic [ref=f5e168]:
        - generic [ref=f5e169]:
          - heading "Personal Details" [level=6] [ref=f5e170]
          - separator [ref=f5e171]
          - generic [ref=f5e172]:
            - generic [ref=f5e173]:
              - generic [ref=f5e176]:
                - generic [ref=f5e177]: Employee Full Name*
                - generic [ref=f5e179]:
                  - textbox "First Name" [ref=f5e182]: Rudraksh
                  - textbox "Middle Name" [ref=f5e185]
                  - textbox "Last Name" [ref=f5e188]: Pareek
              - generic [ref=f5e191]:
                - generic [ref=f5e192]: Nickname
                - textbox [ref=f5e195]: Rudraksh
            - separator [ref=f5e196]
            - generic [ref=f5e197]:
              - generic [ref=f5e198]:
                - generic [ref=f5e200]:
                  - generic [ref=f5e201]: Employee Id
                  - textbox [ref=f5e204]: mho64
                - generic [ref=f5e206]:
                  - generic [ref=f5e207]: Other Id
                  - textbox [ref=f5e210]: oid-f865b25
              - generic [ref=f5e211]:
                - generic [ref=f5e213]:
                  - generic [ref=f5e214]: Driver's License Number
                  - textbox [ref=f5e217]: "56788"
                - generic [ref=f5e219]:
                  - generic [ref=f5e220]: License Expiry Date
                  - generic [ref=f5e224]:
                    - textbox "yyyy-dd-mm" [ref=f5e225]: 2023-18-10
                    - generic [ref=f5e226] [cursor=pointer]: 
              - generic [ref=f5e227]:
                - generic [ref=f5e229]:
                  - generic [ref=f5e230]: SSN Number
                  - textbox [ref=f5e233]
                - generic [ref=f5e235]:
                  - generic [ref=f5e236]: SIN Number
                  - textbox [ref=f5e239]
            - separator [ref=f5e240]
            - generic [ref=f5e241]:
              - generic [ref=f5e242]:
                - generic [ref=f5e244]:
                  - generic [ref=f5e245]: Nationality
                  - generic [ref=f5e249] [cursor=pointer]:
                    - generic [ref=f5e250]: Indian
                    - generic [ref=f5e251]: 
                - generic [ref=f5e254]:
                  - generic [ref=f5e255]: Marital Status
                  - generic [ref=f5e259] [cursor=pointer]:
                    - generic [ref=f5e260]: Single
                    - generic [ref=f5e261]: 
              - generic [ref=f5e263]:
                - generic [ref=f5e265]:
                  - generic [ref=f5e266]: Date of Birth
                  - generic [ref=f5e270]:
                    - textbox "yyyy-dd-mm" [ref=f5e271]: 2030-01-01
                    - generic [ref=f5e272] [cursor=pointer]: 
                - generic [ref=f5e274]:
                  - generic [ref=f5e275]: Gender
                  - generic [ref=f5e277]:
                    - generic [ref=f5e281] [cursor=pointer]:
                      - radio "Male" [checked] [ref=f5e282]
                      - text: Male
                    - generic [ref=f5e287] [cursor=pointer]:
                      - radio "Female" [ref=f5e288]
                      - text: Female
            - separator [ref=f5e290]
            - generic [ref=f5e292]:
              - generic [ref=f5e294]:
                - generic [ref=f5e295]: Military Service
                - textbox [ref=f5e298]
              - generic [ref=f5e300]:
                - generic [ref=f5e301]: Smoker
                - generic [ref=f5e305] [cursor=pointer]:
                  - checkbox " Yes" [ref=f5e306]
                  - generic [ref=f5e307]: 
                  - text: "Yes"
            - separator [ref=f5e309]
            - generic [ref=f5e310]:
              - paragraph [ref=f5e311]: "* Required"
              - button "Save" [ref=f5e312] [cursor=pointer]
        - generic [ref=f5e313]:
          - separator [ref=f5e314]
          - generic [ref=f5e315]:
            - heading "Custom Fields" [level=6] [ref=f5e316]
            - separator [ref=f5e317]
            - generic [ref=f5e318]:
              - generic [ref=f5e320]:
                - generic [ref=f5e322]:
                  - generic [ref=f5e323]: Blood Type
                  - generic [ref=f5e327] [cursor=pointer]:
                    - generic [ref=f5e328]: A+
                    - generic [ref=f5e329]: 
                - generic [ref=f5e332]:
                  - generic [ref=f5e333]: Test_Field
                  - textbox [ref=f5e336]: "445"
              - separator [ref=f5e337]
              - button "Save" [ref=f5e339] [cursor=pointer]
        - generic [ref=f5e340]:
          - separator [ref=f5e341]
          - generic [ref=f5e343]:
            - heading "Attachments" [level=6] [ref=f5e344]
            - button " Add" [ref=f5e345] [cursor=pointer]:
              - generic [ref=f5e346]: 
              - text: Add
          - generic [ref=f5e347]:
            - separator [ref=f5e348]
            - generic [ref=f5e349]: (2) Records Found
          - table [ref=f5e352]:
            - rowgroup [ref=f5e353]:
              - row [ref=f5e354]:
                - columnheader "" [ref=f5e355]:
                  - generic [ref=f5e357] [cursor=pointer]:
                    - checkbox "" [ref=f5e358]
                    - generic [ref=f5e359]: 
                - columnheader "File Name" [ref=f5e361]
                - columnheader "Description" [ref=f5e362]
                - columnheader "Size" [ref=f5e363]
                - columnheader "Type" [ref=f5e364]
                - columnheader "Date Added" [ref=f5e365]
                - columnheader "Added By" [ref=f5e366]
                - columnheader "Actions" [ref=f5e367]
            - rowgroup [ref=f5e368]:
              - row [ref=f5e370]:
                - cell "" [ref=f5e371]:
                  - generic [ref=f5e374] [cursor=pointer]:
                    - checkbox "" [ref=f5e375]
                    - generic [ref=f5e376]: 
                - cell "test.png" [ref=f5e378]
                - cell "test" [ref=f5e380]
                - cell "53.16 kB" [ref=f5e382]
                - cell "image/png" [ref=f5e384]
                - cell "2024-06-02" [ref=f5e386]
                - cell "Admin" [ref=f5e388]
                - cell [ref=f5e390]:
                  - generic [ref=f5e391]:
                    - button "" [ref=f5e392] [cursor=pointer]
                    - button "" [ref=f5e394] [cursor=pointer]
                    - button "" [ref=f5e396] [cursor=pointer]
              - row [ref=f5e399]:
                - cell "" [ref=f5e400]:
                  - generic [ref=f5e403] [cursor=pointer]:
                    - checkbox "" [ref=f5e404]
                    - generic [ref=f5e405]: 
                - cell "Charters - Actio - Semana7.xlsx" [ref=f5e407]
                - cell "holaa probandooo" [ref=f5e409]
                - cell "28.32 kB" [ref=f5e411]
                - cell "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" [ref=f5e413]
                - cell "2026-30-10" [ref=f5e415]
                - cell "Admin" [ref=f5e417]
                - cell [ref=f5e419]:
                  - generic [ref=f5e420]:
                    - button "" [ref=f5e421] [cursor=pointer]
                    - button "" [ref=f5e423] [cursor=pointer]
                    - button "" [ref=f5e425] [cursor=pointer]
    - generic [ref=f5e427]:
      - paragraph [ref=f5e428]: OrangeHRM OS 5.9
      - paragraph [ref=f5e429]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e430] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | // hooks - to avoid the duplicate code.
  2  | // 4 types
  3  | // beforeAll() - runs once before all tests
  4  | // afterAll() - runs once after all tests
  5  | // beforeEach() - runs before every test
  6  | // afterEach() - runs after every test
  7  | 
  8  | import{test,expect} from '@playwright/test'
  9  | 
  10 | test.beforeAll(async({})=>{
  11 |     console.log("Establish DB Connection for setup")
  12 | })  
  13 | 
  14 | test.afterAll(async({})=>{
  15 |     console.log("Terminate DB Connection")
  16 | })  
  17 | 
  18 | test.beforeEach(async({page})=>{
  19 |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  20 |   await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  21 |   await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  22 |   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  23 |   await page.getByRole('button', { name: 'Login' }).click();
  24 | })
> 25 | test.afterEach(async({page})=>{
     |      ^ Test timeout of 40000ms exceeded while running "afterEach" hook.
  26 |   await page.getByRole('listitem').filter({ hasText: 'manda user' }).locator('i').click();
  27 |   await page.getByRole('menuitem', { name: 'Logout' }).click();
  28 | })
  29 | test('Dashboard Test',async({page})=>{
  30 |   await expect(page.getByRole('img', { name: 'profile picture' }).nth(1)).toBeVisible();
  31 |   await expect(page.getByText('Time at Work')).toBeVisible();
  32 |   await expect(page.getByRole('banner').getByRole('img', { name: 'profile picture' })).toBeVisible();
  33 |   await expect(page.getByRole('heading')).toContainText('Dashboard');
  34 |   await expect(page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('list')).toContainText('Admin');
  35 |   await expect(page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('list')).toContainText('Recruitment');
  36 |   await expect(page.getByRole('banner')).toMatchAriaSnapshot(`- button "Upgrade"`);
  37 |   await expect(page.getByRole('button', { name: 'Assign Leave' })).toBeVisible();
  38 |   await expect(page.getByRole('button', { name: 'Leave List' })).toBeVisible();
  39 |   await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible();
  40 |   await expect(page.getByRole('button', { name: 'Apply Leave' })).toBeVisible();
  41 |   await expect(page.getByRole('button', { name: 'My Leave' })).toBeVisible();
  42 |   await expect(page.getByRole('button', { name: 'My Timesheet' })).toBeVisible();
  43 |   await expect(page.getByRole('img', { name: 'profile picture' }).nth(2)).toBeVisible();
  44 |   await page.locator('div').filter({ hasText: /^Assign LeaveLeave ListTimesheetsApply LeaveMy LeaveMy Timesheet$/ }).first().click();
  45 | })
  46 | 
  47 | test('admin user visibility test',async({page})=>{
  48 |   await page.getByRole('link', { name: 'Admin' }).click();
  49 |   await expect(page.getByText('Admin').nth(2)).toBeVisible();
  50 | })
  51 | 
  52 | test('My Info Test',async({page})=>{
  53 |   await page.getByRole('link', { name: 'My Info' }).click();
  54 |   await expect(page.getByRole('textbox', { name: 'First Name' })).toBeVisible();
  55 |   await expect(page.getByRole('textbox').nth(4)).toBeVisible();
  56 |   await expect(page.getByRole('textbox').nth(5)).toBeVisible();
  57 |   await expect(page.getByRole('img', { name: 'profile picture' }).nth(1)).toBeVisible();
  58 | })
  59 | 
  60 | // BeforeAll
  61 | // BeforeEach
  62 | // test 1
  63 | // AfterEach
  64 | 
  65 | // BeforeEach
  66 | // test 2
  67 | // AfterEach
  68 | 
  69 | // BeforeEach
  70 | // test 3
  71 | // AfterEach
  72 | // AfterAll
```