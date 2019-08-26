const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.once('domcontentloaded', () => console.log('DOMツリーの構築が完了'));
  page.once('load', () => console.log('ページ読み込みの完了'));

  try {
    await page.goto('http://localhost:8080');
  } catch (e) {
    console.error('テスト用サイトは起動していますか?');
  }

  await browser.close();
})();
