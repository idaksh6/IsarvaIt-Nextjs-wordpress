const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 800, height: 600 } });
  
  const imgBase64 = fs.readFileSync('C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/.user_uploaded/media_1793167662337.png').toString('base64');
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; background: #fff; padding: 20px; font-family: sans-serif; }
        .crop-container { width: 200px; height: 200px; overflow: hidden; position: relative; border: 2px solid red; }
        .crop-container img { position: absolute; top: -30px; right: -20px; width: 500px; }
      </style>
    </head>
    <body>
      <h3>Zoomed-in reference quote:</h3>
      <div class="crop-container">
        <img src="data:image/png;base64,${imgBase64}" />
      </div>
    </body>
    </html>
  `;
  
  await page.setContent(html);
  await page.screenshot({ path: 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/ref_quote_zoom.png' });
  await browser.close();
  console.log('Saved ref_quote_zoom.png');
})();
