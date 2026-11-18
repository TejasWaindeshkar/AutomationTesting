// import{test,expect} from '@playwright/test'
// import { LoginPage } from '../pages/LoginPage'
// import { DashboardPage } from '../pages/DashboardPage'
// import { AdminPage } from '../pages/AdminPage';
const {test,expect} = require('../fixtures/customfixtures');

test.describe('OramgeHRM Test cases',()=>{

    // let loginpage;
    // let dashboardpage;
    // let adminpage;

    test.beforeEach(async ({loginPage})=>{
        // loginpage = new LoginPage(page);
        // dashboardpage = new DashboardPage(page);
        // adminpage = new AdminPage(page)
        await loginPage.navigate("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

test('valid login test',{tag: ['@smoke','@sanity','@regression']},async({loginPage,dashboardPage,page})=>{
    expect(await loginPage.verifyPageLoaded()).toBe(true)
    await loginPage.login('Admin','admin123')
    await dashboardPage.isDashboardPageHeadingVisible()
    await expect(page).toHaveURL(/dashboard\/index/)
    expect(await dashboardPage.verifyPageLoaded()).toBe(true)
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
    await dashboardPage.Logout()
})

test('invalid login test @sanity',async({loginPage,page})=>{
    await loginPage.login('Admin','admin1234')
    await expect(loginPage.inavalidCredMessage).toBeVisible()
    await expect(page).not.toHaveURL(/dashboard\/index/)
    await expect(page).toHaveURL(/auth\/login/)
})
test('Forgot Password test @sanity',async({loginPage,page})=>{
    await loginPage.forgotPassword()
    await expect(page).toHaveURL(/auth\/requestPasswordResetCode/)
})
test('create new user test @regression',async({loginPage,adminPage,page})=>{
    await loginPage.login('Admin','admin123')
    await adminPage.openAdminPage()
    await adminPage.clickAddUser()
    const newuser = {
        role:'Admin',
        employeeName: 'Ravi M B',
        username: `ravi_test_${Date.now()}`,
        status: 'Enabled',
        password: 'Test@123'
    }
    await adminPage.adduser(newuser)
    await page.waitForTimeout(5000)
})
})