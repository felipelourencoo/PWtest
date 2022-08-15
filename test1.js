const { chromium } = require("playwright");

(async()=> {
    //config
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    //execução
    await page.goto('https://developer.mozilla.org/pt-BR/docs/Web/JavaScript')
    await page.screenshot({path:'screenshots/evidencia.png'})
    await browser.close()
}) ()