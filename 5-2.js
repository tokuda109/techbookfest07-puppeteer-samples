describe('トップ画面から詳細画面に遷移', () => {
  it('フィードの一番目のアイテムの詳細ページに正しく遷移できたか', async () => {
    await page.goto('http://localhost:8080');

    // アイテム自体を取得
    await page.waitForSelector('.article-preview:nth-child(1) .preview-link');
    const preview = await page.$('.article-preview:nth-child(1)');

    const title = await preview.$('h1');

    // 遷移後の詳細画面のタイトルと比較するためにタイトルを取得
    const titleStr = await (await title.getProperty('textContent')).jsonValue();

    await page.click('.article-preview:nth-child(1) .preview-link');
    await page.waitForSelector('#app .article-page .banner');

    await expect(page).toMatchElement('#app .article-page .banner h1', {
      text: titleStr
    });
  });
});
