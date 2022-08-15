const { chromium } = require("playwright");

(async()=> {

    //Config
    const browser = await chromium.launch({headless:false, slowMo: 300})
    const context = await browser.newContext()
    const page = await context.newPage()

    //Open browser
    await page.goto('https://react-redux.realworld.io/#/login')

    //Ações na tela - Login
    await page.fill('input[type = "email"]', 'felipe.lourencoo@hotmail.com')    //escrever no campo
    await page.press('input[type = "email"]', 'Tab')                            //click do teclado
    await page.type('input[type = "password"]','Jetta@2012')                    //digitação
    //await page.click('form >> "Sign in"', {position{x: 0, y: 0}, button: {'left'}, modifiers: ['Shift'], force: true, timeout: 45000}) //opções de seletores
    await page.dblclick('form >> "Sign in"')                                  //duplo click
    await page.focus('form >> "Sign in"')                                       //foco no objeto selecionado
    
    //Close browser
    await browser.close()
    }
)()