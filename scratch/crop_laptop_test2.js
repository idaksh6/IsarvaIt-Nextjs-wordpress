const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1024, height: 400 } });

  const imgBase64 = fs.readFileSync('C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/.user_uploaded/media_1793167693886.png').toString('base64');

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; background:#f0f0f0; padding:20px;">
      <canvas id="c" width="340" height="334"></canvas>
      <script>
        const img = new Image();
        img.src = 'data:image/png;base64,${imgBase64}';
        img.onload = () => {
          const c = document.getElementById('c');
          const ctx = c.getContext('2d');
          // Start from x = 684, y = 0, width = 340, height = 334
          ctx.drawImage(img, 684, 0, 340, 334, 0, 0, 340, 334);
          
          // Let's inspect what is at the left of this crop
          window.cropDone = true;
        };
      </script>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.waitForFunction(() => window.cropDone);

  const canvas = page.locator('#c');
  await canvas.screenshot({ path: 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/laptop_crop_340.png' });

  await browser.close();
  console.log('Saved laptop_crop_340.png');
})();
