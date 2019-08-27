const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('title');

    console.log(`ページのタイトルは「${await page.title()}」です。`);
  } catch (e) {
    console.error('テスト用サイトは起動していますか?');
  }

  await browser.close();
})();