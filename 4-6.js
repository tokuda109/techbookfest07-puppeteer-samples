const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://localhost:8080/#/register');

  await page.waitForSelector('form');

  await page.focus('form .form-group:nth-child(1) [type="text"]');
  await page.keyboard.type('Username', { delay: 100 });

  await page.focus('form .form-group:nth-child(2) [type="text"]');
  await page.keyboard.type('email@sample.com', { delay: 100 });

  await page.focus('form .form-group:nth-child(3) [type="password"]');
  await page.keyboard.type('password', { delay: 100 });

  setTimeout(async () => {
    await browser.close();
  }, 3000);
})();
