const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1024, height: 400 } });

  const imgBase64 = fs.readFileSync('C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/.user_uploaded/media_1793167693886.png').toString('base64');

  // Let's create a canvas in page to crop the laptop (approx x: 640 to 1024, y: 0 to 334)
  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; background:#f0f0f0; padding:20px;">
      <canvas id="c" width="400" height="334"></canvas>
      <script>
        const img = new Image();
        img.src = 'data:image/png;base64,${imgBase64}';
        img.onload = () => {
          const c = document.getElementById('c');
          const ctx = c.getContext('2d');
          // crop from x=624 to 1024 (width 400), height 334
          ctx.drawImage(img, 624, 0, 400, 334, 0, 0, 400, 334);
          window.cropDone = true;
        };
      </script>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.waitForFunction(() => window.cropDone);

  const canvas = page.locator('#c');
  const outDir = 'f:/IsarvaIt-Nextjs-wordpress/public/images';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  await canvas.screenshot({ path: path.join(outDir, 'cta-laptop-preview.png') });
  await canvas.screenshot({ path: 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/laptop_crop_test.png' });

  await browser.close();
  console.log('Saved laptop crop!');
})();
