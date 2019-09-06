const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 250 });
  const page = await browser.newPage();

  await page.goto('http://localhost:8080');

  await page.waitForSelector('.article-preview:nth-child(1) .ion-heart');

  const el2 = await page.$('.article-preview:nth-child(1) .ion-heart');

  const rect = await el2.boundingBox();

  await page.mouse.move(rect.x, rect.y);

  setTimeout(async () => {
    await browser.close();
  }, 3000);
})();
