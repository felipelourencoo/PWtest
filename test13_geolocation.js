const { chromium } = require('playwright');
const { expect } = require("expect");

(async () => {
    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext({
        geolocation: {longitude:48, latitude: 2},
        permissions: ['geolocation']
    })
    //Permissão setada no device
    await context.grantPermissions(['geolocation'])

    const page = await context.newPage()
    await page.goto('https://www.maps.ie/coordinates.html')
    await page.click('#find-loc')
    //await browser.close();
})()