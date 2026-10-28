const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  
  const viewports = [
    { name: 'mobile_375', width: 375, height: 812 },
    { name: 'tablet_768', width: 768, height: 1024 },
    { name: 'laptop_1024', width: 1024, height: 800 }
  ];

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    // Check for horizontal overflow (document.documentElement.scrollWidth > window.innerWidth)
    const overflowInfo = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const winWidth = window.innerWidth;
      const overflowingElements = [];
      if (docWidth > winWidth) {
        document.querySelectorAll('*').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.right > winWidth + 2) {
            overflowingElements.push({
              tag: el.tagName,
              id: el.id,
              class: el.className ? el.className.toString().slice(0, 80) : '',
              right: rect.right,
              width: rect.width
            });
          }
        });
      }
      return { docWidth, winWidth, hasOverflow: docWidth > winWidth, overflowingElements: overflowingElements.slice(0, 10) };
    });

    console.log(`Viewport ${vp.name}:`, overflowInfo.hasOverflow ? `OVERFLOW! docWidth=${overflowInfo.docWidth} > winWidth=${overflowInfo.winWidth}` : 'Clean, zero overflow!');
    if (overflowInfo.hasOverflow) {
      console.log('Overflowing elements sample:', JSON.stringify(overflowInfo.overflowingElements, null, 2));
    }

    // Capture full-page screenshot
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, `responsive_${vp.name}.png`), fullPage: false });
    await page.close();
  }

  await browser.close();
  console.log('Responsiveness audit done!');
})();
