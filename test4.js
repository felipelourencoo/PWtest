const { chromium } = require("playwright");

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

    //Aguardar
    await page.waitForTimeout(3000)

    //Extraindo atributos do Javascript
    const logoText = await page.$eval('.navbar-brand', el => el.innerText)
    console.log('logoText: ' + logoText)

    const logoHref = await page.$eval('.navbar-brand', el => el.href)
    console.log('logoHref: ' + logoHref)

    const popularTagsCount = await page.$$eval('.tag-default', el => el.length)
    console.log('popularTagsCount: ' + popularTagsCount)

    //Extraindo atributos do Playwright
    const content = await page.textContent('.navbar-brand')
    console.log('logoText: ' + content)

    const text = await page.innerText('.navbar-brand')
    console.log('text: ' + text)

    const html = await page.innerHTML('.feed-toggle')
    console.log('html: ' + html)

    const href = await page.getAttribute('.navbar-brand', 'href')
    console.log('href: ' + href)

    //Close browser
    await browser.close()
    }
)()