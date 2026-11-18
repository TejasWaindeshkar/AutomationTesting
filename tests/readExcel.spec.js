import{test,expect} from '@playwright/test'
import{ readExcelData} from '../utils/excelUtils'

const LoginData = readExcelData('../testdata/Book1.xlsx','Sheet2')

for(const data of LoginData){
test(`Login test for ${data.username}`,async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        await expect(page.getByRole('heading')).toContainText('Dashboard');
        await page.locator('.oxd-userdropdown-name').click();
        await page.getByRole('menuitem', { name: 'Logout' }).click();
})
}