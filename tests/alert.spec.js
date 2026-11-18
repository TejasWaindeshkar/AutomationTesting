import{test,expect} from '@playwright/test'

test('Simple Alert test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message())
        await dialog.accept()
    })
    await page.getByText("Simple Alert").click()
})

test('Confirmation Alert test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message())
       // await dialog.accept()
       await dialog.dismiss()
    })
    await page.getByText("Confirmation Alert").click()
    await page.waitForTimeout(5000)
})

test('Prompt Alert test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    page.on('dialog',async(dialog)=>{   
        console.log(dialog.message())
        await dialog.accept("Tejas")
    })
    await page.getByText("Prompt Alert").click()
    await page.waitForTimeout(5000)
})

test('Mouse Hover test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.getByText("Point Me").hover()
    expect(await page.locator("//a[text()='Mobiles']").isVisible()).toBeTruthy()
    await page.waitForTimeout(5000)
})

test('Mouse click Actions test',async({page})=>{
    await page.goto("https://demoqa.com/buttons")
    await page.getByText("Click Me", { exact: true }).click()
    await page.waitForTimeout(5000)
    await page.getByText("Double Click Me", { exact: true }).dblclick()
    await page.waitForTimeout(5000)
    await page.getByText("Right Click Me").click({button:"right"})
    await page.waitForTimeout(5000)
})

test('Drag and Drop test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const source = await page.locator("div#draggable")
    const target = await page.locator("div#droppable")
    await source.dragTo(target)
    await page.waitForTimeout(5000)
})

test('copy paste test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.locator("input#field1").press("Control+A")
    await page.locator("input#field1").press("Control+C")
    await page.locator("input#field2").press("Control+V")
    await page.waitForTimeout(5000)
})

test('Shadow DOM test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.locator("input[type='checkbox']").last().check()
    await page.waitForTimeout(5000)
    await page.getByText("Youtube").click()
    await page.waitForTimeout(5000)
})