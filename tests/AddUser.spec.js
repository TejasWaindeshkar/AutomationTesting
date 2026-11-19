const {test,expect} = require('../fixtures/customfixtures');

test.describe('OramgeHRM Test cases',()=>{
    test.beforeEach(async ({loginPage})=>{
        await loginPage.navigate("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
test('create new user test @regression',async({loginPage,adminPage,page})=>{
    await loginPage.login('Admin','admin123')
    await adminPage.openAdminPage()
    await adminPage.clickAddUser()
    const newuser = {
        role:'Admin',
        employeeName: 'Rohith  Raja',
        username: `ravi_test_${Date.now()}`,
        status: 'Enabled',
        password: 'Test@123'
    }
    await adminPage.adduser(newuser)
    await page.waitForTimeout(5000)
})
})