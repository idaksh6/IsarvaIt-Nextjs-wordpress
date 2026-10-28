const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  const bg = await page.evaluate(() => {
    const section = document.querySelector('section[aria-labelledby="hero-heading"]');
    return Array.from(section.children).map((c, i) => ({
      index: i,
      tagName: c.tagName,
      className: c.className,
      styleBg: c.style.backgroundImage
    }));
  });
  console.log(bg);
  await browser.close();
})();
