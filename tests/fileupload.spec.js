import{test,expect} from '@playwright/test'

test('file upload test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.setInputFiles("#singleFileInput", "C:\\Users\\GR0002TU\\Downloads\\JavaScript_Conditional_Statements_Notes.pdf")
    await page.getByText('Upload Single File').click()
    await page.waitForTimeout(5000)
    expect(await page.locator('#singleFileStatus')).toContainText(" JavaScript_Conditional_Statements_Notes.pdf")

    await page.setInputFiles('#multipleFilesInput', ['C:\\Users\\GR0002TU\\Downloads\\JavaScript_Conditional_Statements_Notes.pdf','C:\\Users\\GR0002TU\\Downloads\\primitive_data_types.pdf'])
    await page.getByText('Upload Multiple Files').click()
    await page.waitForTimeout(5000)
    expect(await page.locator('#multipleFilesStatus')).toContainText(" JavaScript_Conditional_Statements_Notes.pdf")
    expect(await page.locator('#multipleFilesStatus')).toContainText(" primitive_data_types.pdf")
})

test('file download test',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html')
    await page.locator('textarea#inputText').fill('This is a sample text for file download test.')
    await page.getByText('Generate and Download PDF File').click()
    const download = page.waitForEvent('download');
    await page.locator('a#pdfDownloadLink').click()
    const checkdownload = await download;
    await checkdownload.saveAs('C:\\Users\\GR0002TU\\Downloads\\sample.pdf')    
    })