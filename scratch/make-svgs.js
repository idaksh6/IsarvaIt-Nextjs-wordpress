const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../public/products/rfid-reader");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// 1. RFID Banner SVG
const bannerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC" />
      <stop offset="50%" stop-color="#EFF6FF" />
      <stop offset="100%" stop-color="#E2E8F0" />
    </linearGradient>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284C7" />
      <stop offset="100%" stop-color="#1E40AF" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1200" height="500" rx="16" fill="url(#bgGrad)" stroke="#CBD5E1" stroke-width="2"/>
  
  <!-- Background Warehouse Lines -->
  <g opacity="0.15" stroke="#1E3A8A" stroke-width="2" fill="none">
    <path d="M 600 0 L 1200 250 L 1200 500 L 600 250 Z" />
    <path d="M 750 62.5 L 1200 300" />
    <path d="M 900 125 L 1200 350" />
    <line x1="600" y1="250" x2="600" y2="500" />
    <line x1="750" y1="312.5" x2="750" y2="500" />
    <line x1="900" y1="375" x2="900" y2="500" />
    <line x1="1050" y1="437.5" x2="1050" y2="500" />
  </g>

  <!-- Left: RFID Reader Hardware Devices -->
  <!-- Square Wall Mount Antenna Reader -->
  <g transform="translate(60, 60)" filter="url(#shadow)">
    <rect width="240" height="240" rx="20" fill="#FFFFFF" stroke="#94A3B8" stroke-width="4" />
    <rect x="20" y="20" width="200" height="200" rx="12" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="2" />
    <!-- Signal Waves -->
    <path d="M 120 100 Q 120 80 140 80" stroke="#0284C7" stroke-width="4" fill="none" stroke-linecap="round" />
    <path d="M 120 100 Q 120 60 160 60" stroke="#0284C7" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7" />
    <path d="M 120 100 Q 120 40 180 40" stroke="#0284C7" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.4" />
    <!-- Logo Badge -->
    <rect x="40" y="160" width="70" height="24" rx="4" fill="#1E293B" />
    <text x="75" y="176" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="10" text-anchor="middle">RDL TECH</text>
  </g>

  <!-- Desktop Reader -->
  <g transform="translate(320, 160)" filter="url(#shadow)">
    <rect width="130" height="190" rx="14" fill="#1E293B" stroke="#475569" stroke-width="3" />
    <rect x="12" y="12" width="106" height="166" rx="8" fill="#0F172A" />
    <circle cx="65" cy="70" r="28" fill="none" stroke="#38BDF8" stroke-width="3" />
    <path d="M 50 70 A 15 15 0 0 1 80 70" fill="none" stroke="#38BDF8" stroke-width="3" />
    <rect x="35" y="120" width="60" height="30" rx="4" fill="#334155" />
    <text x="65" y="139" fill="#94A3B8" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">RFID</text>
  </g>

  <!-- Handheld Reader -->
  <g transform="translate(200, 270)" filter="url(#shadow)">
    <rect width="90" height="160" rx="10" fill="#334155" stroke="#1E293B" stroke-width="3" />
    <rect x="10" y="15" width="70" height="90" rx="6" fill="#38BDF8" opacity="0.8" />
    <rect x="25" y="115" width="40" height="35" rx="4" fill="#EA580C" />
    <text x="45" y="137" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="12" text-anchor="middle">SCAN</text>
  </g>

  <!-- Right: Title Banner Header -->
  <g transform="translate(520, 150)">
    <text x="0" y="50" font-family="sans-serif" font-weight="900" font-size="52" fill="#1E3A8A" letter-spacing="2">UHF RFID READERS</text>
    <rect x="0" y="70" width="580" height="4" fill="url(#blueGrad)" />
    <text x="0" y="110" font-family="sans-serif" font-weight="600" font-size="24" fill="#475569">Connectivity Devices for Enterprise IoT Solutions</text>
    
    <!-- Badges -->
    <g transform="translate(0, 160)">
      <!-- CE Badge -->
      <rect x="0" y="0" width="90" height="60" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
      <text x="45" y="42" font-family="sans-serif" font-weight="900" font-size="34" fill="#1E293B" text-anchor="middle">CE</text>
      <!-- RoHS Badge -->
      <rect x="110" y="0" width="110" height="60" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
      <path d="M 165 15 L 140 45 L 190 45 Z" fill="#16A34A" opacity="0.2" />
      <text x="165" y="32" font-family="sans-serif" font-weight="900" font-size="16" fill="#16A34A" text-anchor="middle">RoHS</text>
      <text x="165" y="48" font-family="sans-serif" font-weight="bold" font-size="10" fill="#475569" text-anchor="middle">COMPLIANT</text>
    </g>
  </g>
</svg>`;

// 2. System Architecture SVG
const archSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%">
  <rect width="1000" height="600" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />
  
  <!-- Server / Corporate Cloud Block -->
  <g transform="translate(420, 30)">
    <rect width="160" height="80" rx="10" fill="#1E293B" />
    <rect x="20" y="20" width="120" height="12" rx="3" fill="#38BDF8" />
    <rect x="20" y="45" width="120" height="12" rx="3" fill="#38BDF8" />
    <circle cx="125" cy="26" r="3" fill="#4ADE80" />
    <circle cx="125" cy="51" r="3" fill="#4ADE80" />
    <text x="80" y="102" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0F172A" text-anchor="middle">CORPORATE NETWORK</text>
  </g>

  <!-- Cloud / 4G Block -->
  <g transform="translate(740, 40)">
    <path d="M 20 40 A 20 20 0 0 1 50 20 A 30 30 0 0 1 100 25 A 25 25 0 0 1 130 50 A 20 20 0 0 1 110 70 L 20 70 Z" fill="#0284C7" />
    <text x="75" y="50" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">CLOUD</text>
    <text x="75" y="95" font-family="sans-serif" font-size="12" font-weight="bold" fill="#475569" text-anchor="middle">4G / LTE Uplink</text>
  </g>

  <!-- Central Network Line -->
  <line x1="500" y1="110" x2="500" y2="230" stroke="#0284C7" stroke-width="4" />
  <line x1="200" y1="230" x2="800" y2="230" stroke="#0284C7" stroke-width="4" />

  <!-- Readers Locations -->
  <!-- Location 1: Handheld -->
  <g transform="translate(100, 320)">
    <rect width="160" height="200" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2" />
    <rect x="25" y="20" width="110" height="45" rx="6" fill="#0284C7" />
    <text x="80" y="42" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">READER 5 (RDL905)</text>
    <text x="80" y="57" font-family="sans-serif" font-size="10" fill="#E0F2FE" text-anchor="middle">Handheld Wi-Fi</text>
    <rect x="40" y="90" width="35" height="20" rx="3" fill="#1E293B" />
    <text x="57.5" y="104" fill="#FFF" font-size="10" font-family="sans-serif" text-anchor="middle">Tag 8</text>
    <rect x="85" y="90" width="35" height="20" rx="3" fill="#1E293B" />
    <text x="102.5" y="104" fill="#FFF" font-size="10" font-family="sans-serif" text-anchor="middle">Tag 9</text>
    <text x="80" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0F172A" text-anchor="middle">LOCATION 1</text>
  </g>

  <!-- Location 2: Reader 1 -->
  <g transform="translate(320, 320)">
    <rect width="160" height="200" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2" />
    <rect x="25" y="20" width="110" height="45" rx="6" fill="#1E293B" />
    <text x="80" y="42" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">READER 1 (RDL903A)</text>
    <text x="80" y="57" font-family="sans-serif" font-size="10" fill="#94A3B8" text-anchor="middle">Wired RS485</text>
    <!-- Scan Cone -->
    <polygon points="80,65 30,120 130,120" fill="#38BDF8" opacity="0.15" />
    <rect x="25" y="125" width="32" height="20" rx="3" fill="#0284C7" />
    <text x="41" y="139" fill="#FFF" font-size="10" font-family="sans-serif" text-anchor="middle">Tag 1</text>
    <rect x="64" y="125" width="32" height="20" rx="3" fill="#0284C7" />
    <text x="80" y="139" fill="#FFF" font-size="10" font-family="sans-serif" text-anchor="middle">Tag 2</text>
    <rect x="103" y="125" width="32" height="20" rx="3" fill="#0284C7" />
    <text x="119" y="139" fill="#FFF" font-size="10" font-family="sans-serif" text-anchor="middle">Tag 3</text>
    <text x="80" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0F172A" text-anchor="middle">LOCATION 2</text>
  </g>

  <!-- Location 3: Reader 2 -->
  <g transform="translate(540, 320)">
    <rect width="160" height="200" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2" />
    <rect x="25" y="20" width="110" height="45" rx="6" fill="#1E293B" />
    <text x="80" y="42" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">READER 2 (RDL903A)</text>
    <text x="80" y="57" font-family="sans-serif" font-size="10" fill="#94A3B8" text-anchor="middle">Ethernet TCP/IP</text>
    <polygon points="80,65 30,120 130,120" fill="#38BDF8" opacity="0.15" />
    <rect x="40" y="125" width="35" height="20" rx="3" fill="#0284C7" />
    <text x="57.5" y="139" fill="#FFF" font-size="10" font-family="sans-serif" text-anchor="middle">Tag 3</text>
    <rect x="85" y="125" width="35" height="20" rx="3" fill="#0284C7" />
    <text x="102.5" y="139" fill="#FFF" font-size="10" font-family="sans-serif" text-anchor="middle">Tag 4</text>
    <text x="80" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0F172A" text-anchor="middle">LOCATION 3</text>
  </g>

  <!-- Location 4: Reader 3 -->
  <g transform="translate(760, 320)">
    <rect width="160" height="200" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2" />
    <rect x="25" y="20" width="110" height="45" rx="6" fill="#1E293B" />
    <text x="80" y="42" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">READER 3 (RDL903C)</text>
    <text x="80" y="57" font-family="sans-serif" font-size="10" fill="#94A3B8" text-anchor="middle">Wi-Fi Wireless</text>
    <polygon points="80,65 30,120 130,120" fill="#38BDF8" opacity="0.15" />
    <rect x="25" y="125" width="32" height="20" rx="3" fill="#0284C7" />
    <text x="41" y="139" fill="#FFF" font-size="10" font-family="sans-serif" text-anchor="middle">Tag 5</text>
    <rect x="64" y="125" width="32" height="20" rx="3" fill="#0284C7" />
    <text x="80" y="139" fill="#FFF" font-size="10" font-family="sans-serif" text-anchor="middle">Tag 6</text>
    <rect x="103" y="125" width="32" height="20" rx="3" fill="#0284C7" />
    <text x="119" y="139" fill="#FFF" font-size="10" font-family="sans-serif" text-anchor="middle">Tag 7</text>
    <text x="80" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0F172A" text-anchor="middle">LOCATION 4</text>
  </g>

  <!-- Connectors from Network line to Readers -->
  <line x1="180" y1="230" x2="180" y2="320" stroke="#0284C7" stroke-width="2" stroke-dasharray="6,6" />
  <line x1="400" y1="230" x2="400" y2="320" stroke="#0284C7" stroke-width="3" />
  <line x1="620" y1="230" x2="620" y2="320" stroke="#0284C7" stroke-width="3" />
  <line x1="840" y1="230" x2="840" y2="320" stroke="#0284C7" stroke-width="2" stroke-dasharray="6,6" />
</svg>`;

// 3. Robotic Arm Conveyor Benefits SVG
const conveyorSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" rx="16" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
  <!-- Conveyor Track -->
  <path d="M 100 450 Q 400 200 700 450" fill="none" stroke="#475569" stroke-width="80" stroke-linecap="round" />
  <path d="M 100 450 Q 400 200 700 450" fill="none" stroke="#94A3B8" stroke-width="70" stroke-linecap="round" />
  
  <!-- Conveyor Rollers -->
  <line x1="200" y1="360" x2="210" y2="400" stroke="#334155" stroke-width="6" />
  <line x1="300" y1="290" x2="310" y2="330" stroke="#334155" stroke-width="6" />
  <line x1="400" y1="270" x2="400" y2="310" stroke="#334155" stroke-width="6" />
  <line x1="500" y1="290" x2="490" y2="330" stroke="#334155" stroke-width="6" />
  <line x1="600" y1="360" x2="590" y2="400" stroke="#334155" stroke-width="6" />

  <!-- Robotic Arm Base -->
  <rect x="80" y="320" width="100" height="180" rx="12" fill="#EAB308" stroke="#CA8A04" stroke-width="4" />
  <circle cx="130" cy="340" r="25" fill="#334155" />
  <!-- Arm Segments -->
  <path d="M 130 340 L 250 180 L 400 250" fill="none" stroke="#EAB308" stroke-width="28" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="250" cy="180" r="18" fill="#1E293B" />
  <circle cx="400" cy="250" r="15" fill="#1E293B" />
  <!-- Arm Gripper -->
  <path d="M 385 265 L 375 295 M 415 265 L 425 295" stroke="#0F172A" stroke-width="8" stroke-linecap="round" />

  <!-- Manufactured Component on Belt -->
  <rect x="360" y="280" width="80" height="60" rx="8" fill="#0284C7" stroke="#0369A1" stroke-width="3" />
  <rect x="380" y="295" width="40" height="30" rx="4" fill="#E0F2FE" />
  
  <!-- UHF RFID Reader Beam -->
  <g transform="translate(520, 320)">
    <rect x="0" y="0" width="30" height="80" rx="6" fill="#DC2626" />
    <text x="15" y="-10" font-family="sans-serif" font-size="12" font-weight="bold" fill="#DC2626" text-anchor="middle">UHF Reader</text>
    <!-- Scan Cone Light -->
    <polygon points="0,40 -120,-20 -100,80" fill="#22C55E" opacity="0.3" />
  </g>

  <!-- Data Signal -->
  <path d="M 520 340 Q 640 250 720 180" stroke="#22C55E" stroke-width="4" stroke-dasharray="8,8" fill="none" />
  <circle cx="720" cy="180" r="30" fill="#22C55E" opacity="0.2" />
  <text x="720" y="185" font-family="sans-serif" font-size="14" font-weight="bold" fill="#15803D" text-anchor="middle">RFID LIVE</text>
</svg>`;

// 4. RFID Tags Assortment SVG
const tagsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <rect width="800" height="500" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />
  
  <text x="400" y="45" font-family="sans-serif" font-size="22" font-weight="900" fill="#1E293B" text-anchor="middle">INDUSTRIAL RFID TAG TYPES</text>

  <!-- Grid of Tag Illustrations -->
  <!-- Tag 1: Wristband -->
  <g transform="translate(80, 80)">
    <rect width="140" height="160" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2" />
    <circle cx="70" cy="70" r="40" fill="none" stroke="#2563EB" stroke-width="12" />
    <rect x="50" y="50" width="40" height="40" rx="8" fill="#1D4ED8" />
    <text x="70" y="135" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Silicon Wristband</text>
  </g>

  <!-- Tag 2: Anti-Metal Tag -->
  <g transform="translate(250, 80)">
    <rect width="140" height="160" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2" />
    <rect x="25" y="40" width="90" height="50" rx="6" fill="#1E293B" stroke="#475569" stroke-width="4" />
    <circle cx="45" cy="65" r="5" fill="#94A3B8" />
    <circle cx="95" cy="65" r="5" fill="#94A3B8" />
    <text x="70" y="135" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Anti-Metal Tag</text>
  </g>

  <!-- Tag 3: Windshield Sticker -->
  <g transform="translate(420, 80)">
    <rect width="140" height="160" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2" />
    <rect x="25" y="45" width="90" height="45" rx="4" fill="#38BDF8" opacity="0.6" stroke="#0284C7" stroke-width="2" />
    <path d="M 40 67 L 100 67" stroke="#0369A1" stroke-width="3" stroke-dasharray="4,4" />
    <text x="70" y="135" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Windshield Tag</text>
  </g>

  <!-- Tag 4: Keyfob / Key Tag -->
  <g transform="translate(590, 80)">
    <rect width="140" height="160" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2" />
    <path d="M 70 35 C 40 35 40 85 70 105 C 100 85 100 35 70 35 Z" fill="#EA580C" />
    <circle cx="70" cy="50" r="6" fill="#FFFFFF" />
    <text x="70" y="135" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">ABS Keyfob Tag</text>
  </g>

  <!-- Tag 5: High Temp Tag -->
  <g transform="translate(80, 280)">
    <rect width="140" height="160" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2" />
    <rect x="30" y="45" width="80" height="50" rx="8" fill="#DC2626" />
    <text x="70" y="75" fill="#FFF" font-weight="bold" font-size="12" font-family="sans-serif" text-anchor="middle">HIGH TEMP</text>
    <text x="70" y="135" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">High Temp Tag</text>
  </g>

  <!-- Tag 6: Glass Capsule Tag -->
  <g transform="translate(250, 280)">
    <rect width="140" height="160" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2" />
    <rect x="30" y="60" width="80" height="20" rx="10" fill="#E2E8F0" stroke="#94A3B8" stroke-width="3" />
    <rect x="50" y="64" width="40" height="12" rx="4" fill="#38BDF8" />
    <text x="70" y="135" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Glass Tag</text>
  </g>

  <!-- Tag 7: Ceramic Tag -->
  <g transform="translate(420, 280)">
    <rect width="140" height="160" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2" />
    <rect x="40" y="45" width="60" height="60" rx="4" fill="#64748B" stroke="#334155" stroke-width="3" />
    <text x="70" y="135" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Ceramic Tag</text>
  </g>

  <!-- Tag 8: Paper / EPC Label Roll -->
  <g transform="translate(590, 280)">
    <rect width="140" height="160" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2" />
    <rect x="30" y="40" width="80" height="65" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
    <path d="M 40 55 L 100 55 M 40 70 L 100 70 M 40 85 L 80 85" stroke="#94A3B8" stroke-width="3" />
    <text x="70" y="135" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">EPC Paper Tag</text>
  </g>
</svg>`;

// Write SVG files
fs.writeFileSync(path.join(dir, "rfid-banner.svg"), bannerSvg);
fs.writeFileSync(path.join(dir, "rfid-architecture.svg"), archSvg);
fs.writeFileSync(path.join(dir, "rfid-benefits-conveyor.svg"), conveyorSvg);
fs.writeFileSync(path.join(dir, "rfid-tags-assortment.svg"), tagsSvg);

console.log("SUCCESS: All RFID local SVG graphics generated in public/products/rfid-reader/");
