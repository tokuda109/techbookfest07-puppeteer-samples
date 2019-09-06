const puppeteer = require('puppeteer');

jest.setTimeout(30 * 1000);

describe('記事投稿画面', () => {
  it('ログインして、記事投稿画面から記事投稿できるか', async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // ↓↓↓  作成したユーザーの情報  ↓↓↓
    const username = '';
    const email = '';
    const password = '';

    const postTitle = 'Test';
    const postSummary = 'Test summary';
    const postBody = 'Test body';
    const postTags = 'test';

    await page.goto('http://localhost:8080/#/login');
    await page.waitForSelector('form');

    await page.focus('form .form-group:nth-child(1) [type="text"]');
    await page.keyboard.type(email, { delay: 50 });

    await page.focus('form .form-group:nth-child(2) [type="password"]');
    await page.keyboard.type(password, { delay: 50 });

    await page.click('form button');

    await page.waitForSelector('.navbar .nav-item:nth-child(4)');
    await expect(page).toMatchElement('.navbar .nav-item:nth-child(4)', {
      text: username
    });

    await page.click('.navbar .nav-item:nth-child(2) a');
    await page.waitForSelector('form');

    await page.focus('form .form-group:nth-child(1) [type="text"]');
    await page.keyboard.type(postTitle, { delay: 50 });

    await page.focus('form .form-group:nth-child(2) [type="text"]');
    await page.keyboard.type(postSummary, { delay: 50 });

    await page.focus('form .form-group:nth-child(3) textarea');
    await page.keyboard.type(postBody, { delay: 50 });

    await page.focus('form .form-group:nth-child(4) [type="text"]');
    await page.keyboard.type(postTags, { delay: 50 });

    await page.click('form [type="submit"]');

    await page.waitForSelector('#app > div > div.banner > div > h1');

    await expect(page).toMatchElement('#app > div > div.banner > div > h1', {
      text: postTitle
    });
    await expect(page).toMatchElement('#app > div > div.container.page > div.row.article-content > div > div > p', {
      text: postBody
    });

    await setTimeout(async () => {
      await browser.close();
    }, 3000);
  });
});
