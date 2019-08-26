describe('localhost:8080', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080');
  });

  it('should match a logo with a "conduit" text inside', async () => {
    await expect(page).toMatchElement('.logo-font', { text: 'conduit' });
    await expect(page).toMatchElement('.container p', { text: 'A place to share your knowledge.' });
  });
});
