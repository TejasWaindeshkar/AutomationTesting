# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hooks.spec.js >> admin user visibility test
- Location: tests\hooks.spec.js:47:5

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
          - generic [ref=f2e113]:
            - heading "Admin" [level=6] [ref=f2e114]
            - heading "/ User Management" [level=6] [ref=f2e115]
        - link [ref=f2e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e118] [cursor=pointer]
        - list [ref=f2e124]:
          - listitem [ref=f2e125]:
            - generic [ref=f2e126] [cursor=pointer]:
              - img "profile picture" [ref=f2e127]
              - paragraph [ref=f2e128]: manda Gupta
              - generic [ref=f2e129]: 
      - navigation "Topbar Menu" [ref=f2e131]:
        - list [ref=f2e132]:
          - listitem [ref=f2e133] [cursor=pointer]:
            - generic [ref=f2e134]:
              - text: User Management
              - generic [ref=f2e135]: 
          - listitem [ref=f2e136] [cursor=pointer]:
            - generic [ref=f2e137]:
              - text: Job
              - generic [ref=f2e138]: 
          - listitem [ref=f2e139] [cursor=pointer]:
            - generic [ref=f2e140]:
              - text: Organization
              - generic [ref=f2e141]: 
          - listitem [ref=f2e142] [cursor=pointer]:
            - generic [ref=f2e143]:
              - text: Qualifications
              - generic [ref=f2e144]: 
          - listitem [ref=f2e145] [cursor=pointer]:
            - link "Nationalities" [ref=f2e146]:
              - /url: "#"
          - listitem [ref=f2e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f2e148]:
              - /url: "#"
          - listitem [ref=f2e149] [cursor=pointer]:
            - generic [ref=f2e150]:
              - text: Configuration
              - generic [ref=f2e151]: 
          - button "" [ref=f2e153] [cursor=pointer]
  - generic [ref=f2e155]:
    - generic [ref=f2e157]:
      - generic [ref=f2e158]:
        - generic [ref=f2e159]:
          - heading "System Users" [level=5] [ref=f2e161]
          - button "" [ref=f2e164] [cursor=pointer]
        - separator [ref=f2e166]
        - generic [ref=f2e168]:
          - generic [ref=f2e170]:
            - generic [ref=f2e172]:
              - generic [ref=f2e173]: Username
              - textbox [ref=f2e176]
            - generic [ref=f2e178]:
              - generic [ref=f2e179]: User Role
              - generic [ref=f2e183] [cursor=pointer]:
                - generic [ref=f2e184]: "-- Select --"
                - generic [ref=f2e185]: 
            - generic [ref=f2e188]:
              - generic [ref=f2e189]: Employee Name
              - textbox "Type for hints..." [ref=f2e194]
            - generic [ref=f2e196]:
              - generic [ref=f2e197]: Status
              - generic [ref=f2e201] [cursor=pointer]:
                - generic [ref=f2e202]: "-- Select --"
                - generic [ref=f2e203]: 
          - separator [ref=f2e205]
          - generic [ref=f2e206]:
            - button "Reset" [ref=f2e207] [cursor=pointer]
            - button "Search" [ref=f2e208] [cursor=pointer]
      - generic [ref=f2e209]:
        - button " Add" [ref=f2e211] [cursor=pointer]:
          - generic [ref=f2e212]: 
          - text: Add
        - generic [ref=f2e213]:
          - separator [ref=f2e214]
          - generic [ref=f2e215]: (4) Records Found
        - table [ref=f2e218]:
          - rowgroup [ref=f2e219]:
            - row [ref=f2e220]:
              - columnheader "" [ref=f2e221]:
                - generic [ref=f2e223] [cursor=pointer]:
                  - checkbox "" [ref=f2e224]
                  - generic [ref=f2e225]: 
              - columnheader "Username " [ref=f2e227]:
                - text: Username
                - generic [ref=f2e228]:
                  - generic [ref=f2e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f2e230]:
                - text: User Role
                - generic [ref=f2e231]:
                  - generic [ref=f2e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f2e233]:
                - text: Employee Name
                - generic [ref=f2e234]:
                  - generic [ref=f2e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f2e236]:
                - text: Status
                - generic [ref=f2e237]:
                  - generic [ref=f2e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f2e239]
          - rowgroup [ref=f2e240]:
            - row [ref=f2e242]:
              - cell "" [ref=f2e243]:
                - generic [ref=f2e247]:
                  - checkbox "" [ref=f2e248]
                  - generic [ref=f2e249]: 
              - cell "Admin" [ref=f2e251]
              - cell "Admin" [ref=f2e253]
              - cell "manda Gupta" [ref=f2e255]
              - cell "Enabled" [ref=f2e257]
              - cell [ref=f2e259]:
                - generic [ref=f2e260]:
                  - button "" [ref=f2e261] [cursor=pointer]
                  - button "" [ref=f2e263] [cursor=pointer]
            - row [ref=f2e266]:
              - cell "" [ref=f2e267]:
                - generic [ref=f2e270] [cursor=pointer]:
                  - checkbox "" [ref=f2e271]
                  - generic [ref=f2e272]: 
              - cell "DishaKarmakar123" [ref=f2e274]
              - cell "ESS" [ref=f2e276]
              - cell "Disha Karmakar" [ref=f2e278]
              - cell "Enabled" [ref=f2e280]
              - cell [ref=f2e282]:
                - generic [ref=f2e283]:
                  - button "" [ref=f2e284] [cursor=pointer]
                  - button "" [ref=f2e286] [cursor=pointer]
            - row [ref=f2e289]:
              - cell "" [ref=f2e290]:
                - generic [ref=f2e293] [cursor=pointer]:
                  - checkbox "" [ref=f2e294]
                  - generic [ref=f2e295]: 
              - cell "qa_auto_1022215437yb_o1h" [ref=f2e297]
              - cell "Admin" [ref=f2e299]
              - cell "QA-AUTO-Admino9y Emp1022215437YB" [ref=f2e301]
              - cell "Enabled" [ref=f2e303]
              - cell [ref=f2e305]:
                - generic [ref=f2e306]:
                  - button "" [ref=f2e307] [cursor=pointer]
                  - button "" [ref=f2e309] [cursor=pointer]
            - row [ref=f2e312]:
              - cell "" [ref=f2e313]:
                - generic [ref=f2e316] [cursor=pointer]:
                  - checkbox "" [ref=f2e317]
                  - generic [ref=f2e318]: 
              - cell "tl.amiano" [ref=f2e320]
              - cell "ESS" [ref=f2e322]
              - cell "Timothy Amiano" [ref=f2e324]
              - cell "Enabled" [ref=f2e326]
              - cell [ref=f2e328]:
                - generic [ref=f2e329]:
                  - button "" [ref=f2e330] [cursor=pointer]
                  - button "" [ref=f2e332] [cursor=pointer]
    - generic [ref=f2e335]:
      - paragraph [ref=f2e336]: OrangeHRM OS 5.9
      - paragraph [ref=f2e337]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e338] [cursor=pointer]:
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