const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 600 } });

  const imgBase64 = fs.readFileSync('C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/.user_uploaded/media_1793167693886.png').toString('base64');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; background: #e5e7eb; padding: 40px; font-family: sans-serif; }
        .card {
          width: 1000px;
          height: 334px;
          border-radius: 32px;
          background: linear-gradient(90deg, #F0FAF4 0%, #F8FCFA 50%, #E8F8F0 100%);
          border: 1px solid #DCFCE7;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .laptop-crop {
          position: absolute;
          right: 0;
          top: 0;
          height: 334px;
          width: 320px;
        }
        canvas { position: absolute; right: 0; top: 0; }
      </style>
    </head>
    <body>
      <h3>Card with Seamless Laptop Blend</h3>
      <div class="card">
        <canvas id="c" width="320" height="334"></canvas>
      </div>

      <script>
        const img = new Image();
        img.src = 'data:image/png;base64,${imgBase64}';
        img.onload = () => {
          const c = document.getElementById('c');
          const ctx = c.getContext('2d');
          
          // Draw image cropped from x=704 to 1024 (width 320)
          ctx.drawImage(img, 704, 0, 320, 334, 0, 0, 320, 334);
          
          // Apply a smooth fade gradient on the leftmost 40 pixels so any leftover text edge vanishes
          ctx.globalCompositeOperation = 'destination-out';
          const grad = ctx.createLinearGradient(0, 0, 45, 0);
          grad.addColorStop(0, 'rgba(0,0,0,1)'); // fully erase left edge
          grad.addColorStop(1, 'rgba(0,0,0,0)'); // keep rest
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, 45, 334);
          
          window.blendDone = true;
        };
      </script>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.waitForFunction(() => window.blendDone);

  await page.screenshot({ path: 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/laptop_blend_test.png' });

  // Save the cropped canvas as a transparent PNG asset for our site
  const canvas = page.locator('#c');
  const buf = await canvas.screenshot({ omitBackground: true });
  fs.writeFileSync('f:/IsarvaIt-Nextjs-wordpress/public/images/cta-laptop-dashboard.png', buf);
  console.log('Saved cta-laptop-dashboard.png!');

  await browser.close();
})();
