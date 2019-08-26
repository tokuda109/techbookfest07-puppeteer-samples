const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();

  const defaultContext = browser.defaultBrowserContext();

  console.log(
    `デフォルトのブラウザコンテキストはシークレットモード?: ` +
    defaultContext.isIncognito()
  );

  const newContext = await browser.createIncognitoBrowserContext();

  console.log(
    `新しいブラウザコンテキストはシークレットモード?: ` +
    newContext.isIncognito()
  );

  await newContext.close();
  await browser.close();
})();
