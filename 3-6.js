const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://localhost:8080');

  console.log(`ページのタイトルは「${await page.title()}」です。`);

  setTimeout(async () => {
    await browser.close();
  }, 3000);
})();
