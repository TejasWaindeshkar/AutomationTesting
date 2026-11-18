// hooks - to avoid the duplicate code.
// 4 types
// beforeAll() - runs once before all tests
// afterAll() - runs once after all tests
// beforeEach() - runs before every test
// afterEach() - runs after every test

import{test,expect} from '@playwright/test'

test.beforeAll(async({})=>{
    console.log("Establish DB Connection for setup")
})  

test.afterAll(async({})=>{
    console.log("Terminate DB Connection")
})  

test.beforeEach(async({page})=>{
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
})
test.afterEach(async({page})=>{
  await page.getByRole('listitem').filter({ hasText: 'manda user' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
})
test('Dashboard Test',async({page})=>{
  await expect(page.getByRole('img', { name: 'profile picture' }).nth(1)).toBeVisible();
  await expect(page.getByText('Time at Work')).toBeVisible();
  await expect(page.getByRole('banner').getByRole('img', { name: 'profile picture' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await expect(page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('list')).toContainText('Admin');
  await expect(page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('list')).toContainText('Recruitment');
  await expect(page.getByRole('banner')).toMatchAriaSnapshot(`- button "Upgrade"`);
  await expect(page.getByRole('button', { name: 'Assign Leave' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Leave List' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Apply Leave' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'My Leave' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'My Timesheet' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'profile picture' }).nth(2)).toBeVisible();
  await page.locator('div').filter({ hasText: /^Assign LeaveLeave ListTimesheetsApply LeaveMy LeaveMy Timesheet$/ }).first().click();
})

test('admin user visibility test',async({page})=>{
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByText('Admin').nth(2)).toBeVisible();
})

test('My Info Test',async({page})=>{
  await page.getByRole('link', { name: 'My Info' }).click();
  await expect(page.getByRole('textbox', { name: 'First Name' })).toBeVisible();
  await expect(page.getByRole('textbox').nth(4)).toBeVisible();
  await expect(page.getByRole('textbox').nth(5)).toBeVisible();
  await expect(page.getByRole('img', { name: 'profile picture' }).nth(1)).toBeVisible();
})

// BeforeAll
// BeforeEach
// test 1
// AfterEach

// BeforeEach
// test 2
// AfterEach

// BeforeEach
// test 3
// AfterEach
// AfterAll