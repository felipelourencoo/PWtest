const { chromium } = require("playwright");
const { expect } = require("expect");

(async()=> {

    //Config
    const browser = await chromium.launch({headless:false, slowMo: 100})
    const context = await browser.newContext()
    context.setDefaultTimeout(45000)
    const page = await context.newPage()
    page.setDefaultTimeout(45000)

    await page.goto('https://react-redux.realworld.io/#/login')
    const title = await page.title()
    expect(title).toBe('Conduit')

    await page.fill('input[type = "email"]', 'felipe.lourencoo@hotmail.com')
    await page.press('input[type = "email"]', 'Tab')                            
    await page.type('input[type = "password"]','Jetta@2012')                   
    await page.click('form >> "Sign in"', {timeout:45000}) 

    const html = await page.innerHTML('.feed-toggle')
    expect(html).toMatch('Your Feed')

    // Print da tela - Evidência
    await page.locator('text="No articles are here... yet."')
    await page.waitForTimeout(1000)
    await page.screenshot({path:'screenshots/signIn.png', fullPage: true})

    await browser.close()
    }
)()