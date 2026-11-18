import{test,expect,firefox,webkit} from '@playwright/test'

// what is fixture in playwright?
// A fixture is a way to define and reuse setup and teardown logic for your tests.
// Fixtures can be used to create reusable test data, set up test environments, and manage resources such as databases or web servers.
// benefits of using fixtures in playwright
// 1. Reusability: Fixtures allow you to define setup and teardown logic once and reuse it across multiple tests, reducing code duplication and improving maintainability.
// 2. Modularity: Fixtures can be defined in separate files or modules, making it easier to organize and manage your test code.
// 3. Isolation: Fixtures can help ensure that tests are isolated from each other, preventing side effects and improving test reliability.
// 4. Parameterization: Fixtures can be parameterized, allowing you to run the same test with different inputs or configurations.
// 5. Resource management: Fixtures can manage resources such as databases or web servers, ensuring that they are properly set up and torn down for each test.

// built in fixtures in playwright
// 1. page: Provides a new browser page for each test, allowing you to interact with web pages and perform actions such as clicking buttons, filling forms, and navigating between pages.
// 2. context: Provides a new browser context for each test, allowing you to isolate tests from each other and manage cookies, local storage, and other browser state.
// 3. browser: Provides a new browser instance for each test, allowing you to run tests in different browsers and configurations.
// 4. request: Provides a new HTTP request context for each test, allowing you to send HTTP requests and receive responses from web servers.
// 5. browserName: Provides the name of the browser being used for the test, allowing you to write browser-specific tests or configurations.

test('Browser Fixture test',async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

test('Context Fixture test',async({context})=>{
    const page = await context.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

test('Page Fixture test',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

// creates browser context 
// creates page in the context
// navigates to the url

test('BrowserName Fixture test',async({})=>{
    const browser = await firefox.launch()  
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const browser1 = await webkit.launch()
    const context1 = await browser1.newContext()
    const page1 = await context1.newPage()
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
})

test('Request Fixture test',async({request})=>{
    const response = await request.get("https://demoqa.com/BookStore/v1/Books")
    console.log(await response.json())
    console.log(await response.status())
})