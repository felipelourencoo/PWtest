const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 })
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html')
    
    //Determinando arquivo a ser colocado
    await page.setInputFiles('input[type="file"]', './TestFile.pdf')
    await page.waitForTimeout(1000)
    
    //Clicar no upload
    await page.click('input[type="submit"]')
    
    //Validando mensagem de upload
    const html = await page.innerHTML('p')
    expect(html).toMatch("You've uploaded a file.")
    
    await browser.close()
    }
)()