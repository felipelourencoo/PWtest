const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]', 'felipe.lourencoo@hotmail.com')
    await page.press('input[type = "email"]', 'Tab')                            
    await page.type('input[type = "password"]','Jetta@2012')                   
    await page.click('form >> "Sign in"')
    

    const html = await page.innerHTML('.feed-toggle')
    expect(html).toMatch('Your Feed')

    await page.pdf({ path:'mypage.pdf' })

    await browser.close()
})()