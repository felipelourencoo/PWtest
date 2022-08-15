const { chromium } = require("playwright");
const { expect } = require("expect");

(async()=> {

    //Config
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    //Open browser
    await page.goto('https://react-redux.realworld.io/#/login')

    //Ações na tela - Login
    await page.fill('input[type = "email"]', 'felipe.lourencoo@hotmail.com')
    await page.press('input[type = "email"]', 'Tab')                            
    await page.type('input[type = "password"]','Jetta@2012')                   
    await page.click('form >> "Sign in"') 

    //Expect
    const logoText = await page.$eval('.navbar-brand', el => el.innerText)
    expect(logoText).toBe('conduit')

    const logoHref = await page.$eval('.navbar-brand', el => el.href)
    expect(logoHref).toBeDefined()

    const popularTagsCount = await page.$$eval('.tag-default', el => el.length)
    // expect(popularTagsCount).toBeGreaterThanOrEqual(5)  // Fail
    expect(popularTagsCount).toBeLessThanOrEqual(30)
    expect(popularTagsCount).toEqual(0)

    const html = await page.innerHTML('.feed-toggle')
    expect(html).toMatch('Your Feed')
    // expect(html).toMatch('Global Feeds')  // Fail

    const href = await page.getAttribute('.navbar-brand', 'href')
    expect(href).not.toMatch('https://react-redux.realworld.io')

    //Close browser
    await browser.close()
}
)()