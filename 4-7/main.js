const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto('http://localhost:8080/#/register');
  } catch (e) {
    console.error('テスト用サイトは起動していますか?');
  }

  await page.waitForSelector('.auth-page .container form');

  await page.focus('.auth-page .container form .form-group:nth-child(1) [type="text"]');
  await page.keyboard.type('Username', { delay: 100 });

  await page.focus('.auth-page .container form .form-group:nth-child(2) [type="text"]');
  await page.keyboard.type('email@sample.com', { delay: 100 });

  await page.focus('.auth-page .container form .form-group:nth-child(3) [type="password"]');
  await page.keyboard.type('password', { delay: 100 });

  setTimeout(async () => {
    await browser.close();
  }, 3000);
})();
