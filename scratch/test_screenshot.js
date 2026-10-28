const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  
  const section = await page.$('#products');
  if (section) {
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await section.screenshot({ path: 'scratch/products_section_8_cards.png' });
    console.log('Saved screenshot of products section');
  } else {
    console.log('Could not find #products section');
  }

  await browser.close();
})();
