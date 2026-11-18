const {test,expect} = require('@playwright/test')
const {readCSV} = require('../utils/csvUtil')
const path = require('path')

test('Read data from csv file',async({page})=>{
    test.slow()
    const filePath = path.join(__dirname,'../testdata/users1.csv');
    const testData = await readCSV(filePath);

    for (const user of testData) {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill(user.username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        await expect(page.getByRole('heading')).toContainText('Dashboard');
        await page.locator('.oxd-userdropdown-name').click();
        await page.getByRole('menuitem', { name: 'Logout' }).click();
    }
});