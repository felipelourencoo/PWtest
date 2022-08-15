const { chromium } = require("playwright");

(async()=> {
    const browser = await chromium.launch()

    const userContext = await browser.newContext()
    // const adminContext = await browser.newContext()

    const pageOne = await userContext.newPage()
    // const pageTwo = await context.newPage()

    await pageOne.goto('https://react-redux.realworld.io/#/login')

    const [newPage] = await Promise.all([
        userContext.waitForEvent('page'),
        pageOne.click('a[target="_blank"]') // Open a new tab
    ])

    console.log(await pageOne.title())
    console.log(await newPage.title())

    await browser.close()
    }
)()