const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 250 });
  const page = await browser.newPage();

  try {
    await page.goto('http://localhost:8080');
  } catch (e) {
    console.error('テスト用サイトは起動していますか?');
  }

  await page.waitForSelector('.VueCarousel');

  await page.mouse.move(150, 300);
  await page.mouse.down();
  await page.mouse.move(100, 300);
  await page.mouse.up();

  setTimeout(async () => {
    await browser.close();
  }, 3000);
})();
