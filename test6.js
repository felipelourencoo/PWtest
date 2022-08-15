const { chromium } = require("playwright");
const { expect } = require("expect");

(async()=> {

    //Config
    const browser = await chromium.launch({headless:false, slowMo: 100})
    const context = await browser.newContext()
    const page = await context.newPage()

    //Open browser
    await page.goto('https://react-redux.realworld.io/#/login')
    const title = await page.title()
    expect(title).toBe('Conduit')

    //Login
    await page.fill('input[type = "email"]', 'felipe.lourencoo@hotmail.com')
    await page.press('input[type = "email"]', 'Tab')                            
    await page.type('input[type = "password"]','Jetta@2012')                   
    await page.click('form >> "Sign in"') 
    await page.waitForTimeout(2000)
    
    await page.click('.ion-compose') 
    const url = await page.url()    
    expect(url).toContain('editor')
    await page.waitForTimeout(2000)

    //Volta pagina 
    await page.goBack()
    await page.waitForTimeout(2000)

    //Atualiza
    await page.reload

    //Close browser
    await browser.close()
}
)()