describe('トップ画面', () => {
  it('ヘッダーのナビリンクがログイン前の状態かどうか', async () => {
    await page.goto('http://localhost:8080');
    const navItems = await page.$$('#app > nav > div > ul > li');
    await expect(navItems.length).toBe(3);
    await expect(navItems[0]).toMatchElement('a', { text: 'Home' });
    await expect(navItems[1]).toMatchElement('a', { text: 'Sign in' });
    await expect(navItems[2]).toMatchElement('a', { text: 'Sign up' });
  });
});
