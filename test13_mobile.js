const { chromium, devices } = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: false})

    //Definindo o Device
    const iPhone11Pro = devices["iPhone 11 Pro"];
    const context = await browser.newContext({
        ...iPhone11Pro
    })
    const page = await context.newPage()

    await page.goto('https://www.google.com/')
    await browser.close();
})()