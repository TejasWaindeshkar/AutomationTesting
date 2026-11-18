// import{test,expect} from '@playwright/test'
const {test, expect} = require('@playwright/test')
test('My First Test',async({page})=>{
    await page.goto("https://utkarshaaacademy.com/")
    expect(await page.title()).toEqual("software Testing")
})