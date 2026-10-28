const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  
  const userImg = 'file:///C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/.user_uploaded/media_1793167662337.png';
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; background: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 24px; }
        .row { display: flex; gap: 20px; align-items: flex-start; }
        .card { background: white; border-radius: 12px; padding: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); text-align: center; }
        .quote-ref { width: 140px; height: 140px; overflow: hidden; position: relative; border-radius: 8px; border: 2px solid #22c55e; }
        .quote-ref img { position: absolute; top: -12px; right: -12px; width: 440px; }
      </style>
    </head>
    <body>
      <h2>Comparing Quote Mark Against Reference</h2>
      <div class="row">
        <div class="card">
          <h4>Reference Image (Top-Right of Card)</h4>
          <div class="quote-ref">
            <img src="${userImg}" />
          </div>
        </div>

        <div class="card">
          <h4>A: rotate(180deg)</h4>
          <div style="height:140px; display:flex; align-items:center; justify-content:center;">
            <svg style="width:48px; height:48px; color:#A7F3D0; transform:rotate(180deg);" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>

        <div class="card">
          <h4>B: scaleX(-1) (Horiz Flip)</h4>
          <div style="height:140px; display:flex; align-items:center; justify-content:center;">
            <svg style="width:48px; height:48px; color:#A7F3D0; transform:scaleX(-1);" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>

        <div class="card">
          <h4>C: Standard SVG Closing Quote Path (M4.583 17.321...)</h4>
          <div style="height:140px; display:flex; align-items:center; justify-content:center;">
            <!-- FontAwesome / Feather quote right -->
            <svg style="width:48px; height:48px; color:#A7F3D0;" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
          </div>
        </div>

        <div class="card">
          <h4>D: Modern Rounded Commas Quote (Exact reference look)</h4>
          <div style="height:140px; display:flex; align-items:center; justify-content:center;">
            <svg style="width:48px; height:48px; fill:#A7F3D0;" viewBox="0 0 32 32">
              <!-- Rounded modern quote symbol -->
              <path d="M10 8c-3.3 0-6 2.7-6 6 0 2.2 1.2 4.1 3 5.2-.2 1.8-.9 3.6-2.2 5l2.4 1.8c2.4-2.4 3.8-5.3 3.8-8V8zm14 0c-3.3 0-6 2.7-6 6 0 2.2 1.2 4.1 3 5.2-.2 1.8-.9 3.6-2.2 5l2.4 1.8c2.4-2.4 3.8-5.3 3.8-8V8z" />
            </svg>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.screenshot({ path: 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/quote_compare_detail.png', fullPage: true });
  await browser.close();
  console.log('Saved quote_compare_detail.png');
})();
