const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1000, height: 600 } });
  
  const imgBase64 = fs.readFileSync('C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/.user_uploaded/media_1793167662337.png').toString('base64');
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; background: #f8fafc; padding: 24px; font-family: sans-serif; display: flex; gap: 24px; align-items: flex-start; }
        .box { background: white; border-radius: 12px; padding: 16px; border: 1px solid #e2e8f0; text-align: center; width: 140px; }
        .crop { width: 100px; height: 100px; overflow: hidden; position: relative; margin: 0 auto; }
        .crop img { position: absolute; top: -38px; right: -28px; width: 450px; }
      </style>
    </head>
    <body>
      <div class="box" style="border-color: #22c55e;">
        <h4>Reference</h4>
        <div class="crop">
          <img src="data:image/png;base64,${imgBase64}" />
        </div>
      </div>

      <div class="box">
        <h4>Option 1 (Closing Path)</h4>
        <div style="height:100px; display:flex; align-items:center; justify-content:center;">
          <svg style="width:34px; height:34px; color:#A7F3D0;" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
        </div>
      </div>

      <div class="box">
        <h4>Option 2 (Lucide / Feather Quote 180)</h4>
        <div style="height:100px; display:flex; align-items:center; justify-content:center;">
          <svg style="width:34px; height:34px; color:#A7F3D0; transform: rotate(180deg);" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>

      <div class="box">
        <h4>Option 3 (Refined Commas Path)</h4>
        <div style="height:100px; display:flex; align-items:center; justify-content:center;">
          <svg style="width:32px; height:32px; fill:#9EE2B8;" viewBox="0 0 24 24">
            <path d="M7.17 6.17A4.2 4.2 0 0 0 3 10.37c0 1.96 1.18 3.48 2.8 3.93-.32 1.62-1.3 3.12-2.8 4.2l1.6 1.5c2.6-1.8 4.4-4.5 4.4-7.8 0-.58-.06-1.14-.17-1.68a4.17 4.17 0 0 0-1.66-4.35zm11 0A4.2 4.2 0 0 0 14 10.37c0 1.96 1.18 3.48 2.8 3.93-.32 1.62-1.3 3.12-2.8 4.2l1.6 1.5c2.6-1.8 4.4-4.5 4.4-7.8 0-.58-.06-1.14-.17-1.68a4.17 4.17 0 0 0-1.66-4.35z" />
          </svg>
        </div>
      </div>

      <div class="box">
        <h4>Option 4 (Smooth Organic Comma)</h4>
        <div style="height:100px; display:flex; align-items:center; justify-content:center;">
          <svg style="width:32px; height:32px; fill:#9EE2B8;" viewBox="0 0 24 24">
            <path d="M4.5 7C6.433 7 8 8.567 8 10.5c0 1.488-.93 2.756-2.247 3.262-.48 1.488-1.573 2.895-3.053 3.938l-1.2-1.4c1.6-1.1 2.3-2.3 2.4-3.5A3.49 3.49 0 0 1 1 10.5C1 8.567 2.567 7 4.5 7zm11 0c1.933 0 3.5 1.567 3.5 3.5 0 1.488-.93 2.756-2.247 3.262-.48 1.488-1.573 2.895-3.053 3.938l-1.2-1.4c1.6-1.1 2.3-2.3 2.4-3.5A3.49 3.49 0 0 1 12 10.5c0-1.933 1.567-3.5 3.5-3.5z" />
          </svg>
        </div>
      </div>
    </body>
    </html>
  `;
  
  await page.setContent(html);
  await page.screenshot({ path: 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/quote_compare_options.png' });
  await browser.close();
  console.log('Saved quote_compare_options.png');
})();
