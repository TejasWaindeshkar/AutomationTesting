import{test,expect} from '@playwright/test'

test('static table test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const table = await page.locator("table[name='BookTable']")
    await expect(table).toBeVisible();
    const rows = await table.locator("tbody tr")
    await expect(rows).toHaveCount(7)

    const price = await rows.locator("td:nth-child(4)")
    console.log(await price.allTextContents());
    const BookName = await rows.locator("td:nth-child(1)")
    console.log(await BookName.allTextContents())
    const author = await rows.locator("td:nth-child(2)")
    console.log(await author.allTextContents())
    const subject = await rows.locator("td:nth-child(3)")
    console.log(await subject.allTextContents())
    const FirstSubject = await subject.nth(0).textContent()
    console.log(FirstSubject)
    const FirstAuthor = await author.nth(0).textContent()
    console.log(FirstAuthor)
    const FirstBookName = await BookName.nth(0).textContent()
    console.log(FirstBookName)
    const FirstPrice = await price.nth(0).textContent()
    console.log(FirstPrice)
    expect(FirstBookName).toEqual('Learn Selenium')
    expect(FirstPrice).toEqual('300')
    expect(FirstAuthor).toEqual('Amit')
    expect(FirstSubject).toEqual('Selenium')
})

test('Dynamic Table test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const table = await page.locator("table[id='taskTable']")
    await expect(table).toBeVisible();

    const chromeRow = await table.locator(" tr",{hasText: "Chrome"})
    console.log(await chromeRow.count())

     const firefoxRow = await table.locator(" tr",{hasText: "Firefox"})
    console.log(await firefoxRow.count())

    const chromeCpuLoad = await chromeRow.locator("td",{hasText:"%"}).textContent() 
    console.log(await chromeCpuLoad)

    const chromeNetworkSpeed = await chromeRow.locator("td",{hasText:"Mbps"}).textContent()
    console.log(await chromeNetworkSpeed)

    const firefoxDiskSpace = await firefoxRow.locator("td",{hasText:"MB/s"}).textContent()
    console.log(await firefoxDiskSpace)

    const firefoxMemorySize = await firefoxRow.locator("td",{hasText:/\d+\s*MB$/}).textContent()
    console.log(await firefoxMemorySize)
   
    const chromecpu = await page.locator("strong.chrome-cpu").textContent()
    console.log(await chromecpu)

    const firefoxMemory = await page.locator("strong.firefox-memory").textContent()
    console.log(firefoxMemory)

    const chromeNetwork = await page.locator("strong.chrome-network").textContent()
    console.log(chromeNetwork)
     
    const firefoxDisk = await page.locator("strong.firefox-disk").textContent()
    console.log(firefoxDisk)

    expect(chromecpu).toEqual(chromeCpuLoad)
    expect(firefoxMemory).toEqual(firefoxMemorySize)
    expect(chromeNetwork).toEqual(chromeNetworkSpeed)
    expect(firefoxDisk).toEqual(firefoxDiskSpace)
})

test('Pagination Table test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const table = await page.locator("table[id='productTable']")
    await expect(table).toBeVisible();

    const tableButton = await page.locator("#pagination a")
    const pageCount = await tableButton.count()
    console.log("Total Pages: "+pageCount);

    const allproducts = [];
    const searchProduct = "Action Camera";
    let productFound = false;
    for(let pageNum = 1; pageNum <= pageCount; pageNum++){
        console.log("----Reading Page -----" +pageNum)
        const activeBtn = page.locator("#pagination a[class='active']")
        await expect(activeBtn).toHaveText(`${pageNum}`);
        const rows = await table.locator("tbody tr")
        const rowcount = await rows.count()
        console.log("Rows on page " +pageNum+ "row count for" +rowcount)

        for(let i = 0; i<rowcount;i++){
            const idColumn = await rows.nth(i).locator("td").nth(0).textContent()
            const Name = await rows.nth(i).locator("td").nth(1).textContent()
            if(Name.includes(searchProduct)){
                productFound = true
               const productPrice = await rows.nth(i).locator("td").nth(2).textContent()
               console.log(await productPrice)
            }
            const price = await rows.nth(i).locator("td").nth(2).textContent()
            const select = await rows.nth(i).locator("td").nth(3).locator("input")
            await select.check();

            const product = {
                id : idColumn.trim(),
                Product : Name.trim(),
                price : price.trim() 
            };
            allproducts.push(product)
          
        }
        if(pageNum < pageCount){
            const nextBtn = page.locator("#pagination a",{hasText: `${pageNum + 1}`})
            await nextBtn.click()
        }
          console.log(allproducts)
    }
})