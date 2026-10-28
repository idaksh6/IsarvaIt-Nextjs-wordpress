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

  const options = [
    {
      id: 'opt1_shift_right_container',
      containerClass: 'absolute right-[-40px] xl:right-[-20px] top-0 bottom-0 w-[350px] lg:w-[400px] xl:w-[450px] pointer-events-none hidden lg:block select-none overflow-hidden',
      imgClass: 'h-full w-full object-cover object-right',
      textClass: 'relative z-10 max-w-[500px] mx-auto text-center flex flex-col items-center'
    },
    {
      id: 'opt2_shift_right_50px',
      containerClass: 'absolute right-[-50px] xl:right-[-30px] top-0 bottom-0 w-[340px] lg:w-[380px] xl:w-[430px] pointer-events-none hidden lg:block select-none overflow-hidden',
      imgClass: 'h-full w-full object-cover object-right',
      textClass: 'relative z-10 max-w-[480px] mx-auto text-center flex flex-col items-center'
    },
    {
      id: 'opt3_shift_right_balanced',
      containerClass: 'absolute right-[-25px] xl:right-0 top-0 bottom-0 w-[330px] lg:w-[370px] xl:w-[420px] pointer-events-none hidden lg:block select-none overflow-hidden',
      imgClass: 'h-full w-full object-cover object-right',
      textClass: 'relative z-10 max-w-[470px] mx-auto text-center flex flex-col items-center'
    }
  ];

  for (const opt of options) {
    await page.evaluate(({ opt }) => {
      const laptopDiv = document.querySelector('#cta div[style*="mask-image"], #cta div[style*="maskImage"]');
      if (laptopDiv) {
        laptopDiv.className = opt.containerClass;
        const img = laptopDiv.querySelector('img');
        if (img) img.className = opt.imgClass;
      }
      const textDiv = document.querySelector('#cta .relative.z-10');
      if (textDiv) textDiv.className = opt.textClass;
    }, { opt });

    await page.waitForTimeout(300);
    await cta.screenshot({ path: path.join(ARTIFACTS_DIR, `${opt.id}_1366.png`) });
    console.log(`Saved ${opt.id}_1366.png`);

    await page.setViewportSize({ width: 1280, height: 900 });
    await page.waitForTimeout(300);
    await cta.screenshot({ path: path.join(ARTIFACTS_DIR, `${opt.id}_1280.png`) });
    console.log(`Saved ${opt.id}_1280.png`);

    await page.setViewportSize({ width: 1366, height: 900 });
  }

  await browser.close();
  console.log('Finished testing options!');
})();
