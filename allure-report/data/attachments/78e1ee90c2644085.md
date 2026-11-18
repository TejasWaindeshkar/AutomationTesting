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
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f2e114]
        - link [ref=f2e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e117] [cursor=pointer]
        - list [ref=f2e123]:
          - listitem [ref=f2e124]:
            - generic [ref=f2e125] [cursor=pointer]:
              - img "profile picture" [ref=f2e126]
              - paragraph [ref=f2e127]: manda Gupta
              - generic [ref=f2e128]: 
      - navigation "Topbar Menu" [ref=f2e130]:
        - list [ref=f2e131]:
          - button "" [ref=f2e133] [cursor=pointer]
  - generic [ref=f2e135]:
    - generic [ref=f2e139]:
      - generic [ref=f2e140]:
        - generic [ref=f2e141]:
          - heading "manda Gupta" [level=6] [ref=f2e143]
          - img "profile picture" [ref=f2e146] [cursor=pointer]
        - tablist [ref=f2e147]:
          - tab [ref=f2e148]:
            - link "Personal Details" [ref=f2e149] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/7
          - tab [ref=f2e150]:
            - link "Contact Details" [ref=f2e151] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/7
          - tab [ref=f2e152]:
            - link "Emergency Contacts" [ref=f2e153] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/7
          - tab [ref=f2e154]:
            - link "Dependents" [ref=f2e155] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/7
          - tab [ref=f2e156]:
            - link "Immigration" [ref=f2e157] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/7
          - tab [ref=f2e158]:
            - link "Job" [ref=f2e159] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/7
          - tab [ref=f2e160]:
            - link "Salary" [ref=f2e161] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/7
          - tab [ref=f2e162]:
            - link "Report-to" [ref=f2e163] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/7
          - tab [ref=f2e164]:
            - link "Qualifications" [ref=f2e165] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/7
          - tab [ref=f2e166]:
            - link "Memberships" [ref=f2e167] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/7
      - generic [ref=f2e168]:
        - generic [ref=f2e169]:
          - heading "Personal Details" [level=6] [ref=f2e170]
          - separator [ref=f2e171]
          - generic [ref=f2e172]:
            - generic [ref=f2e176]:
              - generic [ref=f2e177]: Employee Full Name*
              - generic [ref=f2e179]:
                - textbox "First Name" [ref=f2e182]: manda
                - textbox "Middle Name" [ref=f2e185]
                - textbox "Last Name" [ref=f2e188]: Gupta
            - separator [ref=f2e189]
            - generic [ref=f2e190]:
              - generic [ref=f2e191]:
                - generic [ref=f2e193]:
                  - generic [ref=f2e194]: Employee Id
                  - textbox [ref=f2e197]: mho4190758
                - generic [ref=f2e199]:
                  - generic [ref=f2e200]: Other Id
                  - textbox [ref=f2e203]: "4957589"
              - generic [ref=f2e204]:
                - generic [ref=f2e206]:
                  - generic [ref=f2e207]: Driver's License Number
                  - textbox [ref=f2e210]: "56788"
                - generic [ref=f2e212]:
                  - generic [ref=f2e213]: License Expiry Date
                  - generic [ref=f2e217]:
                    - textbox "yyyy-dd-mm" [ref=f2e218]: 1990-15-01
                    - generic [ref=f2e219] [cursor=pointer]: 
            - separator [ref=f2e220]
            - generic [ref=f2e221]:
              - generic [ref=f2e222]:
                - generic [ref=f2e224]:
                  - generic [ref=f2e225]: Nationality
                  - generic [ref=f2e229] [cursor=pointer]:
                    - generic [ref=f2e230]: Indian
                    - generic [ref=f2e231]: 
                - generic [ref=f2e234]:
                  - generic [ref=f2e235]: Marital Status
                  - generic [ref=f2e239] [cursor=pointer]:
                    - generic [ref=f2e240]: Single
                    - generic [ref=f2e241]: 
              - generic [ref=f2e243]:
                - generic [ref=f2e245]:
                  - generic [ref=f2e246]: Date of Birth
                  - generic [ref=f2e250]:
                    - textbox "yyyy-dd-mm" [ref=f2e251]: 2023-21-10
                    - generic [ref=f2e252] [cursor=pointer]: 
                - generic [ref=f2e254]:
                  - generic [ref=f2e255]: Gender
                  - generic [ref=f2e257]:
                    - generic [ref=f2e261] [cursor=pointer]:
                      - radio "Male" [checked] [ref=f2e262]
                      - text: Male
                    - generic [ref=f2e267] [cursor=pointer]:
                      - radio "Female" [ref=f2e268]
                      - text: Female
            - separator [ref=f2e270]
            - generic [ref=f2e271]:
              - paragraph [ref=f2e272]: "* Required"
              - button "Save" [ref=f2e273] [cursor=pointer]
        - generic [ref=f2e274]:
          - separator [ref=f2e275]
          - generic [ref=f2e276]:
            - heading "Custom Fields" [level=6] [ref=f2e277]
            - separator [ref=f2e278]
            - generic [ref=f2e279]:
              - generic [ref=f2e281]:
                - generic [ref=f2e283]:
                  - generic [ref=f2e284]: Blood Type
                  - generic [ref=f2e288] [cursor=pointer]:
                    - generic [ref=f2e289]: A+
                    - generic [ref=f2e290]: 
                - generic [ref=f2e293]:
                  - generic [ref=f2e294]: Test_Field
                  - textbox [ref=f2e297]: "445"
              - separator [ref=f2e298]
              - button "Save" [ref=f2e300] [cursor=pointer]
        - generic [ref=f2e301]:
          - separator [ref=f2e302]
          - generic [ref=f2e304]:
            - heading "Attachments" [level=6] [ref=f2e305]
            - button " Add" [ref=f2e306] [cursor=pointer]:
              - generic [ref=f2e307]: 
              - text: Add
          - generic [ref=f2e308]:
            - separator [ref=f2e309]
            - generic [ref=f2e310]: (1) Record Found
          - table [ref=f2e313]:
            - rowgroup [ref=f2e314]:
              - row [ref=f2e315]:
                - columnheader "" [ref=f2e316]:
                  - generic [ref=f2e318] [cursor=pointer]:
                    - checkbox "" [ref=f2e319]
                    - generic [ref=f2e320]: 
                - columnheader "File Name" [ref=f2e322]
                - columnheader "Description" [ref=f2e323]
                - columnheader "Size" [ref=f2e324]
                - columnheader "Type" [ref=f2e325]
                - columnheader "Date Added" [ref=f2e326]
                - columnheader "Added By" [ref=f2e327]
                - columnheader "Actions" [ref=f2e328]
            - rowgroup [ref=f2e329]:
              - row [ref=f2e331]:
                - cell "" [ref=f2e332]:
                  - generic [ref=f2e335] [cursor=pointer]:
                    - checkbox "" [ref=f2e336]
                    - generic [ref=f2e337]: 
                - cell "test.png" [ref=f2e339]
                - cell "test" [ref=f2e341]
                - cell "53.16 kB" [ref=f2e343]
                - cell "image/png" [ref=f2e345]
                - cell "2024-06-02" [ref=f2e347]
                - cell "Admin" [ref=f2e349]
                - cell [ref=f2e351]:
                  - generic [ref=f2e352]:
                    - button "" [ref=f2e353] [cursor=pointer]
                    - button "" [ref=f2e355] [cursor=pointer]
                    - button "" [ref=f2e357] [cursor=pointer]
    - generic [ref=f2e359]:
      - paragraph [ref=f2e360]: OrangeHRM OS 5.9
      - paragraph [ref=f2e361]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e362] [cursor=pointer]:
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