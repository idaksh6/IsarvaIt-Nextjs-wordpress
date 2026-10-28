const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);

  const cta = page.locator('#cta').first();
  await cta.scrollIntoViewIfNeeded();

  // Test variations using page.evaluate to adjust styles dynamically
  const variations = [
    {
      name: 'var1_compact_laptop_right',
      containerWidth: 'w-[380px] lg:w-[420px] xl:w-[460px]',
      imgStyle: 'h-full w-full object-cover object-[70%_center]',
      containerRight: '-right-4 lg:right-0',
      textMaxW: 'max-w-xl lg:max-w-xl'
    },
    {
      name: 'var2_laptop_pushed_right',
      containerWidth: 'w-[340px] lg:w-[380px] xl:w-[430px]',
      imgStyle: 'h-full w-full object-cover object-right',
      containerRight: 'right-0',
      textMaxW: 'max-w-xl lg:max-w-2xl'
    },
    {
      name: 'var3_balanced_zero_overlap',
      containerWidth: 'w-[320px] lg:w-[370px] xl:w-[420px]',
      imgStyle: 'h-full w-full object-cover object-[80%_center]',
      containerRight: 'right-0',
      textMaxW: 'max-w-xl'
    }
  ];

  for (const v of variations) {
    await page.evaluate(({ v }) => {
      // Find laptop container
      const laptopDiv = document.querySelector('#cta div[style*="mask-image"], #cta div[style*="maskImage"]');
      if (laptopDiv) {
        laptopDiv.className = `absolute ${v.containerRight} top-0 bottom-0 ${v.containerWidth} pointer-events-none hidden lg:block select-none overflow-hidden`;
        const img = laptopDiv.querySelector('img');
        if (img) {
          img.className = v.imgStyle;
        }
      }
      // Adjust text container
      const textContainer = document.querySelector('#cta .relative.z-10.max-w-2xl, #cta .relative.z-10.max-w-xl');
      if (textContainer) {
        textContainer.className = `relative z-10 ${v.textMaxW} mx-auto text-center flex flex-col items-center`;
      }
    }, { v });

    await page.waitForTimeout(400);
    await cta.screenshot({ path: path.join(ARTIFACTS_DIR, `${v.name}_1366.png`) });
    console.log(`Saved ${v.name}_1366.png`);

    // Also at 1280
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.waitForTimeout(300);
    await cta.screenshot({ path: path.join(ARTIFACTS_DIR, `${v.name}_1280.png`) });
    console.log(`Saved ${v.name}_1280.png`);

    // Reset viewport to 1366
    await page.setViewportSize({ width: 1366, height: 900 });
  }

  await browser.close();
  console.log('All variations tested successfully!');
})();
