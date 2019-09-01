describe('トップ画面', () => {
  it('.logo-font内の文言が"conduit"かどうか', async () => {
    await page.goto('http://localhost:8080');

    await expect(page).toMatchElement('.logo-font', { text: 'conduit' });
  });
});
