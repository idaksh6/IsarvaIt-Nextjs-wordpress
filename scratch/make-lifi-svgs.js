const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../public/products/r-lifi");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// 1. R-LiFi Hero Banner SVG
const bannerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="50%" stop-color="#1E293B" />
      <stop offset="100%" stop-color="#0284C7" />
    </linearGradient>
    <radialGradient id="lightCone" cx="50%" cy="0%" r="90%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#0284C7" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1200" height="500" rx="16" fill="url(#bgGrad)" stroke="#38BDF8" stroke-width="2"/>
  
  <!-- Optical Light Beams -->
  <polygon points="600,0 200,500 1000,500" fill="url(#lightCone)" />
  <line x1="600" y1="0" x2="350" y2="500" stroke="#E0F2FE" stroke-width="2" stroke-dasharray="8,8" opacity="0.6" />
  <line x1="600" y1="0" x2="600" y2="500" stroke="#E0F2FE" stroke-width="3" opacity="0.8" />
  <line x1="600" y1="0" x2="850" y2="500" stroke="#E0F2FE" stroke-width="2" stroke-dasharray="8,8" opacity="0.6" />

  <!-- Transmitter Lamp Module -->
  <g transform="translate(540, 10)">
    <rect width="120" height="40" rx="8" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2" />
    <circle cx="35" cy="20" r="10" fill="#38BDF8" />
    <circle cx="60" cy="20" r="10" fill="#38BDF8" />
    <circle cx="85" cy="20" r="10" fill="#38BDF8" />
  </g>

  <!-- Left: Data Packets Floating along light beam -->
  <g transform="translate(250, 220)">
    <rect width="110" height="40" rx="8" fill="#0284C7" stroke="#38BDF8" stroke-width="2" />
    <text x="55" y="25" font-family="sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF" text-anchor="middle">100 Mbps</text>
  </g>

  <!-- Right: Data Packet Receiver -->
  <g transform="translate(800, 260)">
    <rect width="120" height="40" rx="8" fill="#0369A1" stroke="#38BDF8" stroke-width="2" />
    <text x="60" y="25" font-family="sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF" text-anchor="middle">RF-FREE DATA</text>
  </g>

  <!-- Title Text Banner -->
  <g transform="translate(80, 160)">
    <text x="0" y="50" font-family="sans-serif" font-weight="900" font-size="52" fill="#FFFFFF" letter-spacing="2">R-LiFi 3.0</text>
    <text x="0" y="90" font-family="sans-serif" font-weight="700" font-size="24" fill="#38BDF8">Visible Light Communication Technology</text>
    <text x="0" y="130" font-family="sans-serif" font-weight="500" font-size="16" fill="#94A3B8">Ultra-Secure Wireless Data Transmission via Light</text>
  </g>
</svg>`;

// 2. R-LiFi Architecture SVG
const archSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <rect width="1000" height="600" rx="16" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
  <text x="500" y="45" font-family="sans-serif" font-size="22" font-weight="900" fill="#0F172A" text-anchor="middle">R-LiFi OPTICAL TRANSMISSION ARCHITECTURE</text>

  <!-- Ethernet / PC Input -->
  <g transform="translate(80, 140)">
    <rect width="180" height="120" rx="12" fill="#1E293B" />
    <rect x="20" y="20" width="140" height="60" rx="6" fill="#38BDF8" opacity="0.3" />
    <text x="90" y="55" font-family="sans-serif" font-weight="bold" font-size="14" fill="#FFFFFF" text-anchor="middle">Data Source / PC</text>
    <text x="90" y="105" font-family="sans-serif" font-weight="bold" font-size="12" fill="#94A3B8" text-anchor="middle">Ethernet / RS485 / USB</text>
  </g>

  <!-- Arrow to Transmitter -->
  <path d="M 260 200 L 360 200" stroke="#0284C7" stroke-width="4" stroke-dasharray="6,6" />

  <!-- LiFi Transmitter Unit -->
  <g transform="translate(360, 140)">
    <rect width="200" height="120" rx="12" fill="#0284C7" />
    <text x="100" y="50" font-family="sans-serif" font-weight="bold" font-size="16" fill="#FFFFFF" text-anchor="middle">LiFi Transmitter</text>
    <text x="100" y="75" font-family="sans-serif" font-size="12" fill="#E0F2FE" text-anchor="middle">LED Modulator Driver</text>
    <circle cx="100" cy="100" r="10" fill="#38BDF8" />
  </g>

  <!-- Optical Beam Spectrum -->
  <polygon points="560,200 740,120 740,280" fill="#38BDF8" opacity="0.25" />
  <line x1="560" y1="200" x2="740" y2="200" stroke="#0284C7" stroke-width="4" stroke-dasharray="4,4" />

  <!-- LiFi Receiver Unit -->
  <g transform="translate(740, 140)">
    <rect width="180" height="120" rx="12" fill="#0369A1" />
    <text x="90" y="50" font-family="sans-serif" font-weight="bold" font-size="16" fill="#FFFFFF" text-anchor="middle">LiFi Receiver</text>
    <text x="90" y="75" font-family="sans-serif" font-size="12" fill="#E0F2FE" text-anchor="middle">Photodiode Demodulator</text>
  </g>

  <!-- Output Device Block -->
  <g transform="translate(740, 380)">
    <rect width="180" height="120" rx="12" fill="#0F172A" />
    <text x="90" y="55" font-family="sans-serif" font-weight="bold" font-size="14" fill="#FFFFFF" text-anchor="middle">Secure Destination</text>
    <text x="90" y="80" font-family="sans-serif" font-size="12" fill="#38BDF8" text-anchor="middle">Audio / Data Output</text>
  </g>

  <line x1="830" y1="260" x2="830" y2="380" stroke="#0284C7" stroke-width="4" />
</svg>`;

// 3. R-LiFi Benefits SVG
const benefitsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <rect width="800" height="500" rx="16" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2" />
  <circle cx="400" cy="250" r="180" fill="#E0F2FE" opacity="0.5" />
  
  <g transform="translate(400, 250)">
    <!-- Light Cone Shield -->
    <polygon points="0,-160 -140,120 140,120" fill="#0284C7" opacity="0.2" />
    <!-- Shield Icon -->
    <path d="M -40,-40 L 40,-40 L 40,20 C 40,60 0,90 0,90 C 0,90 -40,60 -40,20 Z" fill="#0284C7" stroke="#0369A1" stroke-width="4" />
    <path d="M -15,0 L 0,15 L 20,-15" stroke="#FFFFFF" stroke-width="6" fill="none" stroke-linecap="round" />
  </g>

  <text x="400" y="420" font-family="sans-serif" font-size="20" font-weight="900" fill="#0F172A" text-anchor="middle">RF-FREE & ELECTROMAGNETIC IMMUNE</text>
  <text x="400" y="450" font-family="sans-serif" font-size="14" font-weight="600" fill="#64748B" text-anchor="middle">Physical Security - Light Cannot Penetrate Walls</text>
</svg>`;

fs.writeFileSync(path.join(dir, "r-lifi-banner.svg"), bannerSvg);
fs.writeFileSync(path.join(dir, "r-lifi-architecture.svg"), archSvg);
fs.writeFileSync(path.join(dir, "r-lifi-benefits.svg"), benefitsSvg);

console.log("SUCCESS: All R-LiFi local SVG graphics generated in public/products/r-lifi/");
