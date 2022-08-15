const { chromium } = require("playwright");
const { expect } = require("expect");

(async()=> {
    const browser = await chromium.launch({headless:false, slowMo: 100})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://react-redux.realworld.io/#/login')

    // selecionar arquivos do dispositivo
    await page.setInputFiles('','')
    
    // clicar botão submit
    await page.click('input[type="submit"]')
    
    // variável pra armazenar mensagem de upload com sucesso
    const html = await page.innerHTML('p')
    expect(html).toMatch("You've upload a file.")

    await browser.close()
    }
)()