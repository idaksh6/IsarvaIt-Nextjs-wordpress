const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 700 } });

  const doodleBase64 = fs.readFileSync('f:/IsarvaIt-Nextjs-wordpress/public/images/cta-doodle-left.png').toString('base64');
  const laptopBase64 = fs.readFileSync('f:/IsarvaIt-Nextjs-wordpress/public/images/cta-laptop-right.png').toString('base64');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
      <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
      </style>
    </head>
    <body class="bg-gray-100 py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Main CTA Card matching Reference Image -->
        <div class="relative bg-gradient-to-r from-[#EFFBF5] via-[#F8FCFA] to-[#E6F7ED] rounded-[36px] border border-[#DCFCE7] shadow-[0_10px_35px_rgba(0,168,107,0.06)] overflow-hidden px-6 sm:px-10 py-10 lg:py-12">
          
          <!-- Top Left Decorative Dots -->
          <div class="absolute top-7 left-8 pointer-events-none opacity-60 hidden sm:block">
            <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
              <pattern id="dot-grid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#86EFAC" />
              </pattern>
              <rect width="60" height="70" fill="url(#dot-grid)" />
            </svg>
          </div>

          <!-- Left Handwritten Doodle ("Let's Build Something Great Together") -->
          <div class="absolute left-6 bottom-10 w-44 pointer-events-none hidden xl:block select-none">
            <img src="data:image/png;base64,${doodleBase64}" alt="Let's Build Something Great Together" class="w-full h-auto" />
          </div>

          <!-- Right Side Laptop Mockup -->
          <div class="absolute -right-4 -bottom-3 w-[380px] lg:w-[420px] pointer-events-none hidden lg:block select-none">
            <img src="data:image/png;base64,${laptopBase64}" alt="ISARVA Platform Dashboard" class="w-full h-auto" />
          </div>

          <!-- Center Content Container -->
          <div class="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
            
            <!-- Badge: [ ✈ GET IN TOUCH ] -->
            <div class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/95 border border-emerald-200 text-[#00A86B] text-[11px] font-bold tracking-[0.14em] uppercase mb-4 shadow-xs">
              <svg class="w-3.5 h-3.5 text-[#00A86B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              <span>GET IN TOUCH</span>
            </div>

            <!-- Main Heading -->
            <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#102A43] tracking-tight leading-[1.15] mb-3">
              Ready To Get <span class="text-[#00A86B]">Started?</span>
            </h2>

            <!-- Subtitle 1 -->
            <p class="text-base sm:text-[17px] font-semibold text-[#1F2937] mb-2">
              Let&apos;s discuss your project and turn your ideas into reality.
            </p>

            <!-- Subtitle 2 -->
            <p class="text-xs sm:text-[13.5px] text-[#4B5563] max-w-lg mx-auto leading-relaxed mb-8">
              Whether you need a website, custom software, or a complete digital solution, our team is here to help you at every step.
            </p>

            <!-- 4 Features Horizontal Row with subtle vertical dividers -->
            <div class="w-full max-w-xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/90 mb-8 py-1">
              
              <!-- 1. Quick Response -->
              <div class="px-2 py-2 flex flex-col items-center text-center">
                <div class="w-10 h-10 rounded-full bg-[#ECFDF5] border border-emerald-100 flex items-center justify-center text-[#059669] mb-2 shadow-xs">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 class="text-[12.5px] font-bold text-[#102A43] leading-snug">Quick Response</h4>
                <p class="text-[10.5px] text-[#6B7280]">Usually within 24 hours</p>
              </div>

              <!-- 2. Expert Consultation -->
              <div class="px-2 py-2 flex flex-col items-center text-center">
                <div class="w-10 h-10 rounded-full bg-[#ECFDF5] border border-emerald-100 flex items-center justify-center text-[#059669] mb-2 shadow-xs">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 class="text-[12.5px] font-bold text-[#102A43] leading-snug">Expert Consultation</h4>
                <p class="text-[10.5px] text-[#6B7280]">Tailored to your needs</p>
              </div>

              <!-- 3. Flexible Engagement -->
              <div class="px-2 py-2 flex flex-col items-center text-center">
                <div class="w-10 h-10 rounded-full bg-[#ECFDF5] border border-emerald-100 flex items-center justify-center text-[#059669] mb-2 shadow-xs">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 class="text-[12.5px] font-bold text-[#102A43] leading-snug">Flexible Engagement</h4>
                <p class="text-[10.5px] text-[#6B7280]">Project or long-term</p>
              </div>

              <!-- 4. Confidential & Secure -->
              <div class="px-2 py-2 flex flex-col items-center text-center">
                <div class="w-10 h-10 rounded-full bg-[#ECFDF5] border border-emerald-100 flex items-center justify-center text-[#059669] mb-2 shadow-xs">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 class="text-[12.5px] font-bold text-[#102A43] leading-snug">Confidential & Secure</h4>
                <p class="text-[10.5px] text-[#6B7280]">Your ideas are safe</p>
              </div>
            </div>

            <!-- Primary Action Button matching reference exactly -->
            <a
              href="/contact"
              class="inline-flex items-center justify-center gap-2 bg-[#FF6B12] hover:bg-[#e85e0c] text-white font-bold text-sm sm:text-[15px] px-8 py-3 rounded-xl shadow-[0_6px_20px_rgba(255,107,18,0.35)] hover:shadow-[0_10px_26px_rgba(255,107,18,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
            >
              <span>Get In Touch</span>
              <span class="text-base group-hover:translate-x-1 transition-transform">→</span>
            </a>

          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.screenshot({ path: 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/cta_component_preview.png' });
  console.log('Saved cta_component_preview.png');

  // Also test mobile viewport
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/cta_component_mobile.png' });
  console.log('Saved cta_component_mobile.png');

  await browser.close();
})();
