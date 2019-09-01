describe('会員登録', () => {
  it('Signup画面でユーザー登録し、ヘッダーがログイン状態に変化しているか', async () => {
    await page.goto('http://localhost:8080/#/register');

    await page.waitForSelector('form');

    const username = 'username+01';
    const email = 'username+01@gmail.com';
    const password = 'password';

    await page.focus('form .form-group:nth-child(1) [type="text"]');
    await page.keyboard.type(username);

    await page.focus('form .form-group:nth-child(2) [type="text"]');
    await page.keyboard.type(email);

    await page.focus('form .form-group:nth-child(3) [type="password"]');
    await page.keyboard.type(password);

    await page.click('form button');

    await page.waitForSelector('.navbar .nav-item:nth-child(4)');

    await expect(page).toMatchElement('.navbar .nav-item:nth-child(4)', {
      text: username
    });
  });
});
