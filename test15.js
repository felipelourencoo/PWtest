const { chromium } = require("playwright");
const expect = require("expect");

(async()=> {
    const browser = await chromium.launch({ headless: false})
    const context = await browser.newContext({
        viewport: { width: 1600, height: 1200 }
    })
    const page = await context.newPage()
    await page.viewportSize({width: 1600, height: 1200 })
    await page.goto('https://todomvc.com/examples/react/#/')

    // Comando pra abrir o inspector
    // => npx playwright codegen todomvc.com

    // Recorder para o Playwright
    // Headless Recorder
}
)()