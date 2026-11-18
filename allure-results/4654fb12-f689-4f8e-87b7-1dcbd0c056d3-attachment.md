# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegen.spec.js >> Debug test
- Location: tests\codegen.spec.js:7:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('link')
Expected substring: "Dashboard"
Error: strict mode violation: getByRole('link') resolved to 15 elements:
    1) <a class="oxd-brand" data-v-16e446b0="" data-v-5b6b3cf3="" href="https://www.orangehrm.com/">…</a> aka getByRole('link', { name: 'client brand banner' })
    2) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/admin/viewAdminModule">…</a> aka getByRole('link', { name: 'Admin' })
    3) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/pim/viewPimModule">…</a> aka getByRole('link', { name: 'PIM' })
    4) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/leave/viewLeaveModule">…</a> aka getByRole('link', { name: 'Leave' })
    5) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/time/viewTimeModule">…</a> aka getByRole('link', { name: 'Time' })
    6) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/recruitment/viewRecruitmentModule">…</a> aka getByRole('link', { name: 'Recruitment' })
    7) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/pim/viewMyDetails">…</a> aka getByRole('link', { name: 'My Info' })
    8) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/performance/viewPerformanceModule">…</a> aka getByRole('link', { name: 'Performance' })
    9) <a data-v-6475d26d="" class="oxd-main-menu-item active" href="/web/index.php/dashboard/index">…</a> aka getByRole('link', { name: 'Dashboard' })
    10) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/directory/viewDirectory">…</a> aka getByRole('link', { name: 'Directory' })
    ...

Call log:
  - Expect "toContainText" getByRole('link') with timeout 5000ms
  - waiting for getByRole('link')

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
              - paragraph [ref=f1e127]: manda Gupta
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
      - generic [ref=f1e148]:
        - generic [ref=f1e150]:
          - generic [ref=f1e151]: 
          - paragraph [ref=f1e152]: My Actions
        - separator [ref=f1e153]
        - generic [ref=f1e155]:
          - generic [ref=f1e156]:
            - button [ref=f1e157] [cursor=pointer]
            - paragraph [ref=f1e163] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=f1e164]:
            - button [ref=f1e165] [cursor=pointer]
            - paragraph [ref=f1e174] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=f1e176]:
        - generic [ref=f1e178]:
          - generic [ref=f1e179]: 
          - paragraph [ref=f1e180]: Quick Launch
        - separator [ref=f1e181]
      - generic [ref=f1e185]:
        - generic [ref=f1e187]:
          - generic [ref=f1e188]: 
          - paragraph [ref=f1e189]: Buzz Latest Posts
        - separator [ref=f1e190]
      - generic [ref=f1e194]:
        - generic [ref=f1e195]:
          - paragraph [ref=f1e200]: Employees on Leave Today
          - generic [ref=f1e201] [cursor=pointer]: 
        - separator [ref=f1e202]
      - generic [ref=f1e206]:
        - generic [ref=f1e208]:
          - generic [ref=f1e209]: 
          - paragraph [ref=f1e210]: Employee Distribution by Sub Unit
        - separator [ref=f1e211]
      - generic [ref=f1e215]:
        - generic [ref=f1e217]:
          - generic [ref=f1e218]: 
          - paragraph [ref=f1e219]: Employee Distribution by Location
        - separator [ref=f1e220]
    - generic [ref=f1e223]:
      - paragraph [ref=f1e224]: OrangeHRM OS 5.9
      - paragraph [ref=f1e225]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e226] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | // playwright inspector 
  2  | // trace viewer
  3  | // code gen
  4  | 
  5  | import { test, expect } from '@playwright/test';
  6  | 
  7  | test('Debug test', async ({ page }) => {
  8  |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  9  |  // await page.pause();
  10 |   await page.getByRole('textbox', { name: 'Username' }).click();
  11 |   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  12 |   await page.getByRole('textbox', { name: 'Password' }).click();
  13 |   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  14 |   await page.getByRole('button', { name: 'Login' }).click();
  15 |   await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
> 16 |   await expect(page.getByRole('link')).toContainText('Dashboard');
     |                                        ^ Error: expect(locator).toContainText(expected) failed
  17 | });
  18 | 
  19 | 
  20 | test('codegen test', async ({ page }) => {
  21 |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  22 |   await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  23 |   await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  24 |   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  25 |   await page.getByRole('button', { name: 'Login' }).click();
  26 |   await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  27 |   await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
  28 |   await expect(page.locator('#app')).toContainText('Time at Work');
  29 |   await expect(page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('list')).toContainText('Admin');
  30 |   await expect(page.getByRole('banner')).toMatchAriaSnapshot(`
  31 |     - list:
  32 |       - listitem:
  33 |         - img "profile picture"
  34 |         - paragraph: UVLDaJrMaS user
  35 |         - text: 
  36 |     `);
  37 | });
```