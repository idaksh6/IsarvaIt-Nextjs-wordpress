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
  
  const section = await page.$('#services');
  if (section) {
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await section.screenshot({ path: 'public/images/services_section_desktop_verified.png' });
    console.log('Saved public/images/services_section_desktop_verified.png');
  }

  const mobilePage = await browser.newPage({
    viewport: { width: 390, height: 844 }
  });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  const mobileSection = await mobilePage.$('#services');
  if (mobileSection) {
    await mobileSection.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(1000);
    await mobileSection.screenshot({ path: 'public/images/services_section_mobile_verified.png' });
    console.log('Saved public/images/services_section_mobile_verified.png');
  }

  await browser.close();
})();
