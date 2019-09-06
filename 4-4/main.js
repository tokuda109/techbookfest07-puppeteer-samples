const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:8080');

  // 画面上部の「A place to share your knowledge.」部分の要素を取得
  const selector1 = '#app > div > div.banner > div > p';
  const el1 = await page.$(selector1);

  // フィードの1番目のアイテムの「Hello World」部分の要素を取得
  const selector2 = '.home-global .article-preview h1';
  await page.waitForSelector(selector2);
  const el2list = await page.$$(selector2);
  const el2 = el2list[0];

  console.log(`文言1: ${await (await el1.getProperty('textContent')).jsonValue()}`);
  console.log(`文言2: ${await (await el2.getProperty('textContent')).jsonValue()}`);

  await browser.close();
})();
