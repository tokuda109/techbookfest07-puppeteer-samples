const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:8080');
  await page.waitForSelector('title');

  console.log(`ページのタイトルは「${await page.title()}」です。`);

  await browser.close();
})();
