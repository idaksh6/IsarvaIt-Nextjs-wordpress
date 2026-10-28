const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  const sections = [
    { name: 'hero', selector: 'header, section:first-of-type' },
    { name: 'about', selector: '#about-us' },
    { name: 'why_choose', selector: '#why-choose-us, section:has-text("Why Choose")' },
    { name: 'products', selector: '#products, section:has-text("Innovative Digital Products")' },
    { name: 'services', selector: '#services, section:has-text("Transformative Software Services")' },
    { name: 'testimonials', selector: 'section:has-text("What Our Clients Say")' },
    { name: 'blog', selector: '#blog, section:has-text("Insights & Articles")' },
    { name: 'cta', selector: '#cta' },
    { name: 'footer', selector: 'footer' }
  ];

  for (const s of sections) {
    try {
      const el = page.locator(s.selector).first();
      if (await el.count() > 0) {
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        await el.screenshot({ path: path.join(ARTIFACTS_DIR, `mobile_375_${s.name}.png`) });
        console.log(`Saved mobile_375_${s.name}.png`);
      }
    } catch (e) {
      console.error(`Error on ${s.name}:`, e.message);
    }
  }

  // Also test tablet 768 on key sections: CTA, Testimonials, About, Hero
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(500);

  for (const s of ['cta', 'about', 'testimonials']) {
    try {
      const el = page.locator(sections.find(x => x.name === s).selector).first();
      if (await el.count() > 0) {
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        await el.screenshot({ path: path.join(ARTIFACTS_DIR, `tablet_768_${s}.png`) });
        console.log(`Saved tablet_768_${s}.png`);
      }
    } catch (e) {
      console.error(`Error on tablet ${s}:`, e.message);
    }
  }

  await browser.close();
  console.log('Done captures!');
})();
