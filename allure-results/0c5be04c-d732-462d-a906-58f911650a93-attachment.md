# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hooks.spec.js >> Dashboard Test
- Location: tests\hooks.spec.js:29:5

# Error details

```
Test timeout of 40000ms exceeded while running "afterEach" hook.
```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary [ref=f1e4]:
      - navigation "Sidepanel" [ref=f1e5]:
        - generic [ref=f1e6]:
          - link [ref=f1e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e9]
          - text: 
        - generic [ref=f1e10]:
          - generic [ref=f1e11]:
            - generic [ref=f1e12]:
              - textbox "Search" [ref=f1e15]
              - button "" [ref=f1e16] [cursor=pointer]
            - separator [ref=f1e18]
          - list [ref=f1e19]:
            - listitem [ref=f1e20]:
              - link "Admin" [ref=f1e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f1e25]:
              - link "PIM" [ref=f1e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f1e41]:
              - link "Leave" [ref=f1e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f1e46]:
              - link "Time" [ref=f1e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f1e54]:
              - link "Recruitment" [ref=f1e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f1e62]:
              - link "My Info" [ref=f1e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f1e70]:
              - link "Performance" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f1e80]:
              - link "Dashboard" [ref=f1e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f1e85]:
              - link "Directory" [ref=f1e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f1e90]:
              - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f1e96]:
              - link "Claim" [ref=f1e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f1e105]:
              - link "Buzz" [ref=f1e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e110]:
      - generic [ref=f1e111]:
        - generic [ref=f1e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f1e114]
        - link [ref=f1e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e117] [cursor=pointer]
        - list [ref=f1e123]:
          - listitem [ref=f1e124]:
            - generic [ref=f1e125] [cursor=pointer]:
              - img "profile picture" [ref=f1e126]
              - paragraph [ref=f1e127]: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa Gupta
              - generic [ref=f1e128]: 
      - navigation "Topbar Menu" [ref=f1e130]:
        - list [ref=f1e131]:
          - button "" [ref=f1e133] [cursor=pointer]
  - generic [ref=f1e135]:
    - generic [ref=f1e137]:
      - generic [ref=f1e139]:
        - generic [ref=f1e141]:
          - generic [ref=f1e142]: 
          - paragraph [ref=f1e143]: Time at Work
        - separator [ref=f1e144]
        - generic [ref=f1e146]:
          - generic [ref=f1e147]:
            - img "profile picture" [ref=f1e149]
            - generic [ref=f1e150]:
              - paragraph [ref=f1e151]: Punched Out
              - paragraph [ref=f1e152]: "Punched Out: Today at 07:38 AM (GMT -7)"
          - generic [ref=f1e153]:
            - generic [ref=f1e154]: 0h 1m Today
            - button "" [ref=f1e155] [cursor=pointer]
          - separator [ref=f1e157]
          - generic [ref=f1e158]:
            - generic [ref=f1e159]:
              - paragraph [ref=f1e160]: This Week
              - paragraph [ref=f1e161]: Oct 26 - Nov 01
            - generic [ref=f1e162]:
              - generic [ref=f1e163]: 
              - paragraph [ref=f1e164]: 0h 1m
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: My Actions
        - separator [ref=f1e173]
        - generic [ref=f1e175]:
          - generic [ref=f1e176]:
            - button [ref=f1e177] [cursor=pointer]
            - paragraph [ref=f1e193] [cursor=pointer]: (1) Timesheet to Approve
          - generic [ref=f1e194]:
            - button [ref=f1e195] [cursor=pointer]
            - paragraph [ref=f1e201] [cursor=pointer]: (1) Pending Self Review
      - generic [ref=f1e203]:
        - generic [ref=f1e205]:
          - generic [ref=f1e206]: 
          - paragraph [ref=f1e207]: Quick Launch
        - separator [ref=f1e208]
        - generic [ref=f1e210]:
          - generic [ref=f1e211]:
            - button "Assign Leave" [ref=f1e212] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e215]:
              - paragraph [ref=f1e216]: Assign Leave
          - generic [ref=f1e217]:
            - button "Leave List" [ref=f1e218] [cursor=pointer]
            - generic "Leave List" [ref=f1e225]:
              - paragraph [ref=f1e226]: Leave List
          - generic [ref=f1e227]:
            - button "Timesheets" [ref=f1e228] [cursor=pointer]
            - generic "Timesheets" [ref=f1e234]:
              - paragraph [ref=f1e235]: Timesheets
          - generic [ref=f1e236]:
            - button "Apply Leave" [ref=f1e237] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e240]:
              - paragraph [ref=f1e241]: Apply Leave
          - generic [ref=f1e242]:
            - button "My Leave" [ref=f1e243] [cursor=pointer]
            - generic "My Leave" [ref=f1e248]:
              - paragraph [ref=f1e249]: My Leave
          - generic [ref=f1e250]:
            - button "My Timesheet" [ref=f1e251] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e254]:
              - paragraph [ref=f1e255]: My Timesheet
      - generic [ref=f1e257]:
        - generic [ref=f1e259]:
          - generic [ref=f1e260]: 
          - paragraph [ref=f1e261]: Buzz Latest Posts
        - separator [ref=f1e262]
        - generic [ref=f1e264]:
          - generic [ref=f1e265]:
            - generic [ref=f1e266] [cursor=pointer]:
              - img "profile picture" [ref=f1e268]
              - generic [ref=f1e269]:
                - paragraph [ref=f1e270]: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa Gupta
                - paragraph [ref=f1e271]: 2026-30-10 08:47 PM
            - separator [ref=f1e272]
            - paragraph [ref=f1e273]: <head> <meta charset="UTF-8"> <title>El nuevo título de mi página</title> </head>
          - generic [ref=f1e274]:
            - generic [ref=f1e275] [cursor=pointer]:
              - img "profile picture" [ref=f1e277]
              - generic [ref=f1e278]:
                - paragraph [ref=f1e279]: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa Gupta
                - paragraph [ref=f1e280]: 2026-30-10 08:46 PM
            - separator [ref=f1e281]
            - paragraph [ref=f1e282]: <head> <meta charset="UTF-8"> <title>El nuevo título de mi página</title> </head>
          - generic [ref=f1e283]:
            - generic [ref=f1e284] [cursor=pointer]:
              - img "profile picture" [ref=f1e286]
              - generic [ref=f1e287]:
                - paragraph [ref=f1e288]: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa Gupta
                - paragraph [ref=f1e289]: 2026-30-10 08:34 PM
            - separator [ref=f1e290]
            - paragraph [ref=f1e291]: 54265/-*/-+dfhbgin
            - iframe [ref=f1e293]:
              - generic [ref=f2e1]:
                - generic "YouTube Video Player" [ref=f2e3]
                - generic [ref=f2e5]:
                  - generic:
                    - generic:
                      - generic [ref=f2e6] [cursor=pointer]
                      - button "Play video" [ref=f2e10] [cursor=pointer]
                      - button "Hide player controls" [ref=f2e12] [cursor=pointer]
                      - generic [ref=f2e21]:
                        - generic [ref=f2e22]:
                          - link "25/5 Pomodoro Timer ★︎ Focus on Studying and Working Effectively with Lofi Mix ★︎ Focus Station" [ref=f2e23] [cursor=pointer]:
                            - /url: https://www.youtube.com/watch?v=QV2kIqBimUQ
                          - link "Focus Station" [ref=f2e24] [cursor=pointer]:
                            - /url: /channel/UC8lsQp2_MWebp6mdAPOJa9w
                        - generic [ref=f2e26]:
                          - button [ref=f2e27] [cursor=pointer]
                          - generic [ref=f2e29]:
                            - generic: Focus Station
                            - generic: 61.5K subscribers
          - generic [ref=f1e294]:
            - generic [ref=f1e295] [cursor=pointer]:
              - img "profile picture" [ref=f1e297]
              - generic [ref=f1e298]:
                - paragraph [ref=f1e299]: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa Gupta
                - paragraph [ref=f1e300]: 2026-30-10 08:33 PM
            - separator [ref=f1e301]
            - paragraph [ref=f1e302]: 11234*-/-*+545fudbd
            - iframe [ref=f1e304]:
              - generic [ref=f3e1]:
                - generic "YouTube Video Player" [ref=f3e3]
                - generic [ref=f3e5]:
                  - generic:
                    - generic:
                      - generic [ref=f3e6] [cursor=pointer]
                      - button "Play video" [ref=f3e10] [cursor=pointer]
                      - button "Hide player controls" [ref=f3e12] [cursor=pointer]
                      - generic [ref=f3e21]:
                        - generic [ref=f3e22]:
                          - link "25/5 Pomodoro Timer ★︎ Focus on Studying and Working Effectively with Lofi Mix ★︎ Focus Station" [ref=f3e23] [cursor=pointer]:
                            - /url: https://www.youtube.com/watch?v=QV2kIqBimUQ
                          - link "Focus Station" [ref=f3e24] [cursor=pointer]:
                            - /url: /channel/UC8lsQp2_MWebp6mdAPOJa9w
                        - generic [ref=f3e26]:
                          - button [ref=f3e27] [cursor=pointer]
                          - generic [ref=f3e29]:
                            - generic: Focus Station
                            - generic: 61.5K subscribers
          - generic [ref=f1e305]:
            - generic [ref=f1e306] [cursor=pointer]:
              - img "profile picture" [ref=f1e308]
              - generic [ref=f1e309]:
                - paragraph [ref=f1e310]: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa Gupta
                - paragraph [ref=f1e311]: 2026-30-10 08:33 PM
            - separator [ref=f1e312]
            - paragraph [ref=f1e313]: jkndged/**--+122232
            - iframe [ref=f1e315]:
              - generic [ref=f4e1]:
                - generic "YouTube Video Player" [ref=f4e3]
                - generic [ref=f4e5]:
                  - generic:
                    - generic:
                      - generic [ref=f4e6] [cursor=pointer]
                      - button "Play video" [ref=f4e10] [cursor=pointer]
                      - button "Hide player controls" [ref=f4e12] [cursor=pointer]
                      - generic [ref=f4e21]:
                        - generic [ref=f4e22]:
                          - link "25/5 Pomodoro Timer ★︎ Focus on Studying and Working Effectively with Lofi Mix ★︎ Focus Station" [ref=f4e23] [cursor=pointer]:
                            - /url: https://www.youtube.com/watch?v=QV2kIqBimUQ
                          - link "Focus Station" [ref=f4e24] [cursor=pointer]:
                            - /url: /channel/UC8lsQp2_MWebp6mdAPOJa9w
                        - generic [ref=f4e26]:
                          - button [ref=f4e27] [cursor=pointer]
                          - generic [ref=f4e29]:
                            - generic: Focus Station
                            - generic: 61.5K subscribers
      - generic [ref=f1e317]:
        - generic [ref=f1e318]:
          - paragraph [ref=f1e323]: Employees on Leave Today
          - generic [ref=f1e324] [cursor=pointer]: 
        - separator [ref=f1e325]
        - generic [ref=f1e327]:
          - img "No Content" [ref=f1e328]
          - paragraph [ref=f1e329]: No Employees are on Leave Today
      - generic [ref=f1e331]:
        - generic [ref=f1e333]:
          - generic [ref=f1e334]: 
          - paragraph [ref=f1e335]: Employee Distribution by Sub Unit
        - separator [ref=f1e336]
        - list [ref=f1e341]:
          - listitem [ref=f1e342] [cursor=pointer]:
            - generic "Administration" [ref=f1e344]
          - listitem [ref=f1e345] [cursor=pointer]:
            - generic "Engineering" [ref=f1e347]
          - listitem [ref=f1e348] [cursor=pointer]:
            - generic "Human Resources" [ref=f1e350]
          - listitem [ref=f1e351] [cursor=pointer]:
            - generic "Client Services" [ref=f1e353]
          - listitem [ref=f1e354] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e356]
      - generic [ref=f1e358]:
        - generic [ref=f1e360]:
          - generic [ref=f1e361]: 
          - paragraph [ref=f1e362]: Employee Distribution by Location
        - separator [ref=f1e363]
        - list [ref=f1e368]:
          - listitem [ref=f1e369] [cursor=pointer]:
            - generic "Texas R&D" [ref=f1e371]
          - listitem [ref=f1e372] [cursor=pointer]:
            - generic "New York Sales Office" [ref=f1e374]
          - listitem [ref=f1e375] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e377]
    - generic [ref=f1e378]:
      - paragraph [ref=f1e379]: OrangeHRM OS 5.9
      - paragraph [ref=f1e380]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e381] [cursor=pointer]:
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