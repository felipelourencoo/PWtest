const { chromium } = require("playwright");

(async()=> {
    //Config
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    //Open browser
    await page.goto('https://react-redux.realworld.io/#/login')

    //HTML attribute - Class
    const signIn = await page.$('.btn')

    //CSS Selector
    const signIn2 = await page.$('css-button')
    const signIn3 = await page.$('button')

    //XPATH Selector
    const signIn4 = await page.$('xpath=//button[@type= "submit"]')
    const signIn5 = await page.$('//button[@type= "submit"]')
    const signIn6 = await page.$('//*[@id="main"]/div/div/div/div/div/form/fieldset/button')

    //Text Content
    const signIn7 = await page.$('text="Sign in"')
    const signIn8 = await page.$('text=Sign in')
    const signIn9 = await page.$("'Sign in'")
    const signIn10 = await page.$('"Sign in"')

    //Using Element Handle
    const form1 = await page.$('css=form')
    const signIn11 = await page.$("'Sign in'")

    const form2 = await page.$("form >> 'Sign in'")
    await form1.click()

    const input = await page.$$('.form-control')
    await input[0].click()
    await input[1].click()

    //Close browser
    await browser.close()
}) ()