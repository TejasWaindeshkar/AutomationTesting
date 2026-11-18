import{test,expect}from '@playwright/test'
import logindata from '../testdata/user.json'
import users from '../testdata/users.json'

test('read data from json file',async({page})=>{
    await page.goto(logindata.url)
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('Dashboard');
})

users.forEach(user =>{
test(`read data from multiple users json ${user.username}`,async({page})=>{
    await page.goto(logindata.url)
     await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(user.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('Dashboard');
})
})