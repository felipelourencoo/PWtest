const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();
  // Go to https://todomvc.com/
  await page.goto('https://todomvc.com/');
  // Click text=Blog
  await page.click('text=Blog');
  // assert.equal(page.url(), 'https://medium.com/@tastejs');
  // Click :nth-match(:text("Follow"), 4)
  await page.click(':nth-match(:text("Follow"), 4)');
  // Click [data-testid="close-button"]
  await page.click('[data-testid="close-button"]');
  // Click text=See all (9)
  await page.click('text=See all (9)');
  // Click [data-testid="close-button"]
  await page.click('[data-testid="close-button"]');
  // Click .co.df
  await page.click('.co.df');

  // assert.equal(page.url(), 'https://medium.com/');
  // ---------------------
  await context.close();
  await browser.close();
})();