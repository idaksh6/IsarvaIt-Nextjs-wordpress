const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  const rect = await page.evaluate(() => {
    const s = document.querySelector('section[aria-labelledby="hero-heading"]');
    return s.getBoundingClientRect();
  });
  console.log('section rect at 1920:', rect);
  await browser.close();
})();
