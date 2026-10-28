const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  const cta = page.locator('#cta').first();
  await cta.scrollIntoViewIfNeeded();

  // Test precise positions where laptop is moved right and text has zero overlap
  const tests = [
    {
      id: 'shift_right_A',
      containerWidth: 'w-[320px] lg:w-[360px] xl:w-[400px]',
      imgPos: 'object-[92%_center]',
      containerPos: 'right-0',
      textMaxW: 'max-w-lg'
    },
    {
      id: 'shift_right_B',
      containerWidth: 'w-[340px] lg:w-[380px] xl:w-[420px]',
      imgPos: 'object-right',
      containerPos: 'right-[-20px] xl:right-0',
      textMaxW: 'max-w-lg'
    },
    {
      id: 'shift_right_C',
      containerWidth: 'w-[320px] lg:w-[360px] xl:w-[410px]',
      imgPos: 'object-[96%_center]',
      containerPos: 'right-0',
      textMaxW: 'max-w-[520px]'
    }
  ];

  for (const t of tests) {
    await page.evaluate(({ t }) => {
      const laptopDiv = document.querySelector('#cta div[style*="mask-image"], #cta div[style*="maskImage"]');
      if (laptopDiv) {
        laptopDiv.className = `absolute ${t.containerPos} top-0 bottom-0 ${t.containerWidth} pointer-events-none hidden lg:block select-none overflow-hidden`;
        const img = laptopDiv.querySelector('img');
        if (img) img.className = `h-full w-full object-cover ${t.imgPos}`;
      }
      const textContainer = document.querySelector('#cta .relative.z-10.max-w-xl, #cta .relative.z-10.max-w-2xl, #cta .relative.z-10.max-w-lg');
      if (textContainer) {
        textContainer.className = `relative z-10 ${t.textMaxW} mx-auto text-center flex flex-col items-center`;
      }
    }, { t });

    await page.waitForTimeout(300);
    await cta.screenshot({ path: path.join(ARTIFACTS_DIR, `${t.id}_1366.png`) });
    console.log(`Saved ${t.id}_1366.png`);

    await page.setViewportSize({ width: 1280, height: 900 });
    await page.waitForTimeout(300);
    await cta.screenshot({ path: path.join(ARTIFACTS_DIR, `${t.id}_1280.png`) });
    console.log(`Saved ${t.id}_1280.png`);

    await page.setViewportSize({ width: 1366, height: 900 });
  }

  await browser.close();
  console.log('Done tests!');
})();
