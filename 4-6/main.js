const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.home-page .home-global .article-preview:nth-child(2) .preview-link');
    await page.click('.home-page .home-global .article-preview:nth-child(2) .preview-link');

    await page.waitForSelector('#app .article-page .banner');

    const $el = await page.$('#app .article-page .banner h1');

    console.log(`ページの見出しは「${await (await $el.getProperty('textContent')).jsonValue()}」です。`);
  } catch (e) {
    console.error('テスト用サイトは起動していますか?', e);
  }

  await browser.close();
})();
