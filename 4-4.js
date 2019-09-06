const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:8080');

  // 画面上部の「A place to share your knowledge.」部分の要素を取得
  const selector1 = '#app > div > div.banner > div > p';
  await page.waitForSelector(selector1);
  const el1 = await page.$(selector1);

  // ヘッダーのリンクリストの1番目のリンクの「Home」部分の要素を取得
  const selector2 = '#app > nav > div > ul > li:nth-child(1)';
  await page.waitForSelector(selector2);
  const el2list = await page.$$(selector2);
  const el2 = el2list[0];

  console.log(`文言1: ${await (await el1.getProperty('textContent')).jsonValue()}`);
  console.log(`文言2: ${(await (await el2.getProperty('textContent')).jsonValue()).trim()}`);

  await browser.close();
})();
