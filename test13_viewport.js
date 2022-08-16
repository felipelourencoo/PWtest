const { chromium } = require('playwright');
const { expect } = require("expect");

(async () => {
    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext({
       viewport: {width: 1600, height: 1200}
    })
    //Permissão setada no device
    await context.grantPermissions(['geolocation'])

    const page = await context.newPage()
    await page.goto('https://www.maps.ie/coordinates.html')

    await browser.close();
})()