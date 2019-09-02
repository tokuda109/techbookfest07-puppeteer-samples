const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.once('domcontentloaded', () => console.log('DOMツリーの構築が完了'));
  page.once('load', () => console.log('ページ読み込みの完了'));
  page.on('request', request => {
    if (request.url().includes('api/articles')) {
      console.log(`${request.url()}にリクエスト`);
    }
  });
  page.on('console', message => {
    if (message.text().includes('test log message')) {
      console[message.type()](`${message.type()}: ${message.text()}`);
    }
  });
  page.exposeFunction('customEvent', event => {
    console.log(`${event.type}イベントが発火`)
  });

  await page.goto('http://localhost:8080');

  await page.evaluate(() => {
    console.log('test log message');
    window.customEvent({type: 'custom-event'});
  });

  setTimeout(async () => {
    await browser.close();
  }, 3000);
})();
