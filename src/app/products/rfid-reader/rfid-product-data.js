// Content sourced directly from https://rdltech.in/rfid-reader official layout and datasheet

export const heroContent = {
  badge: "RFID Reader",
  headline1: "UHF RFID READERS",
  headline2: "Connectivity Devices for Enterprise IoT Solutions",
  description:
    "RDL UHF RFID Readers deliver high-speed automated asset tracking and inventory identification — featuring multi-tag reading (200 tags/sec) for logistics, warehousing, and access control.",
  image: "/products/rfid-reader/RFID.jpg",
};

export const systemArchitecture = {
  title: "RFID System Architecture & Network Topology",
  subtitle: "Seamless Connectivity Across Corporate Networks, Wi-Fi Access Points, 4G LTE & Cloud Services",
  description:
    "Multi-location tracking system connecting Readers RDL901, RDL902, RDL903, RDL904, RDL905, and RDL906 across corporate wired infrastructure, wireless access points, and 4G LTE cellular uplinks to central cloud dashboards.",
  image: "/products/rfid-reader/rfid-architecture.svg",
};

export const benefitsData = {
  title: "Operational Benefits",
  description:
    "RDL RFID Readers streamline industrial production, inventory management, and asset tracking through automated data collection.",
  image: "/products/rfid-reader/rfid-benefits-conveyor.svg",
  points: [
    "Improved productivity & asset utilization.",
    "Paperless Production environment.",
    "Performance Forecasting.",
    "Production count & rejection tracking.",
    "Improve the quality and transparency of data across the supply chain.",
    "Increase the accuracy and reduce the time spent taking inventories.",
    "Reliable traceability in challenging physical environments.",
  ],
};

export const rfidTagsData = {
  title: "Supported RFID Tags",
  description: "Comprehensive tag compatibility designed for every industrial surface and environmental condition.",
  image: "/products/rfid-reader/rfid-tags-assortment.svg",
  tagsList: [
    "Paper Tag",
    "EPC Tag",
    "Inlay Tag",
    "Button Tag",
    "Anti Metal Tag",
    "Glue Tag",
    "Key Tag",
    "Glass Tag",
    "Ear Tag",
    "Ceramic Tag",
    "Disc Tag",
    "High Temperature Tag",
    "Jewellery Tag",
    "Wind Shield Tag",
  ],
};

export const sdkLogos = [
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Microsoft .NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
];

export const zigZagFeatures = [
  {
    title: "High-Speed Multi-Tag Reading & Anti-Collision",
    description:
      "Scans up to 200 counts per second with adjustable RF power (up to 30 dBm) and antenna gain (3 dBi to 12 dBi). Delivers rapid identification across high-density inventory without line-of-sight constraints.",
    image: "/products/rfid-reader/rfid-banner.svg",
    imageLeft: true,
  },
  {
    title: "All-Weather IP65 Industrial Housing & Interfaces",
    description:
      "Rugged aluminum casting with IP65-rated weatherproof protection for harsh environmental conditions. Supports RS232, RS485, Wiegand, Trigger/Relay, Ethernet TCP/IP, Wi-Fi, and 4G/LTE cellular uplinks.",
    image: "/products/cloud-plc/rdl-logo.png",
    imageLeft: false,
  },
  {
    title: "EPC Gen2 ISO18000-6C & Multi-Language SDKs",
    description:
      "Native TCP/IP, HTTP, and MQTT protocols supporting EPC Gen2 (ISO18000-6C) global RFID standards. Includes developer SDKs for .NET, Java, Python, Node.js, PHP, and Android for rapid deployment.",
    image: "/products/rfid-reader/rfid-architecture.svg",
    imageLeft: true,
  },
];

export const rfidVariants = [
  {
    title: "Wall Mount UHF Reader (0-15M)",
    image: "/products/rfid-reader/rfid-banner.svg",
    preview: [
      "Long Reading Range: 0 to 15 Meters",
      "Dimensions: 260 x 260 x 78 mm",
      "ISO18000-6C (EPC Gen2) Standard",
      "Frequency: 902-926 MHz / 865-868 MHz",
    ],
    full: [
      "Interfaces: RS232 / RS485 / Wiegand / Relay",
      "Ethernet TCP/IP, Wi-Fi, and 4G LTE options",
      "IP65 Weatherproof Industrial Aluminum Enclosure",
      "Operating Voltage: DC 9V to 24V",
    ],
    link: "/contact",
  },
  {
    title: "Industrial Mini Reader (0-3M)",
    image: "/products/rfid-reader/rfid-benefits-conveyor.svg",
    preview: [
      "Compact Scan Range: 0 to 3 Meters",
      "Dimensions: 95 x 95 x 40 mm",
      "Conveyor Belt & Robotic Arm Mounting",
      "High Read Speed: 200 tags / second",
    ],
    full: [
      "Interfaces: RS232 / RS485 / Wiegand / Relay",
      "TCP/IP & Wi-Fi Communication options",
      "Integrated Antenna & Reader Design",
      "Operating Voltage: DC 9V to 24V",
    ],
    link: "/contact",
  },
  {
    title: "Handheld Mobile RFID Reader (0-3M)",
    image: "/products/rfid-reader/rfid-banner.svg",
    preview: [
      "Handheld Scan Range: 0 to 3 Meters",
      "Ergonomic Dimensions: 166 x 79 x 31 mm",
      "Android OS + Built-in Wi-Fi",
      "High-Capacity Rechargeable Battery",
    ],
    full: [
      "Ideal for Inventory Audits & Asset Tracking",
      "Dual Barcode & RFID Reading Engine",
      "Rugged Drop-Resistant Construction",
      "Includes Android SDK for App Development",
    ],
    link: "/contact",
  },
  {
    title: "Desktop RFID Reader / Writer (0-1M)",
    image: "/products/rfid-reader/rfid-tags-assortment.svg",
    preview: [
      "Desktop Proximity Range: 0 to 1 Meter",
      "Dimensions: 84 x 59 x 34 mm",
      "USB Plug-and-Play & Serial Interface",
      "Tag Issuance & Encoding Capability",
    ],
    full: [
      "Interfaces: RS232 / RS485 / Wiegand / USB / Wi-Fi",
      "Ideal for POS & Access Control Card Issuance",
      "Low Power Consumption",
      "Supports Windows, Linux, and macOS",
    ],
    link: "/contact",
  },
];

export const orderInfo = [
  {
    title: "OEM & White Label Service",
    description:
      "Custom branding, tailored hardware configurations, and white-label manufacturing for distributors, system integrators, and OEMs.",
    image: "/products/rdl-product/oem-service.png",
  },
  {
    title: "Custom Solution Development",
    description:
      "Rapid custom engineering for antenna configurations, specialized mounting brackets, custom read range tuning, and proprietary protocols.",
    image: "/products/rdl-product/make-in-india.jpg",
  },
  {
    title: "Dynamic Network Support",
    description:
      "Multi-protocol connectivity options (TCP/IP, HTTP, MQTT) with seamless cloud and SCADA integration.",
    image: "/products/rdl-product/dynamic-support.jpg",
  },
];

export const rfidOrderTableFooterNote = "* For Customization of Antenna Gain, Frequency Tuning & Communication Interfaces Please Contact Sales Team";

export const rfidOrderTable = [
  {
    model: "RDL901A",
    range: "0 - 4 Mtr",
    type: "Wall Mount",
    dimension: "133 x 133 x 54 mm",
    interface: "RS232 / RS485 / Wiegand / Relay",
  },
  {
    model: "RDL901B",
    range: "0 - 4 Mtr",
    type: "Wall Mount",
    dimension: "133 x 133 x 54 mm",
    interface: "Ethernet (TCP/IP)",
  },
  {
    model: "RDL901C",
    range: "0 - 4 Mtr",
    type: "Wall Mount",
    dimension: "133 x 133 x 54 mm",
    interface: "Wi-Fi",
  },
  {
    model: "RDL901D",
    range: "0 - 4 Mtr",
    type: "Wall Mount",
    dimension: "133 x 133 x 54 mm",
    interface: "4G LTE Cellular",
  },
  {
    model: "RDL902A",
    range: "0 - 15 Mtr",
    type: "Wall Mount",
    dimension: "260 x 260 x 78 mm",
    interface: "RS232 / RS485 / Wiegand / Relay",
  },
  {
    model: "RDL902B",
    range: "0 - 15 Mtr",
    type: "Wall Mount",
    dimension: "260 x 260 x 78 mm",
    interface: "Ethernet (TCP/IP)",
  },
  {
    model: "RDL902C",
    range: "0 - 15 Mtr",
    type: "Wall Mount",
    dimension: "260 x 260 x 78 mm",
    interface: "Wi-Fi",
  },
  {
    model: "RDL902D",
    range: "0 - 15 Mtr",
    type: "Wall Mount",
    dimension: "260 x 260 x 78 mm",
    interface: "4G LTE Cellular",
  },
  {
    model: "RDL903A",
    range: "0 - 30 Mtr",
    type: "Wall Mount",
    dimension: "450 x 450 x 70 mm",
    interface: "RS232 / RS485 / Wiegand / Relay",
  },
  {
    model: "RDL903B",
    range: "0 - 30 Mtr",
    type: "Wall Mount",
    dimension: "450 x 450 x 70 mm",
    interface: "Ethernet (TCP/IP)",
  },
  {
    model: "RDL903C",
    range: "0 - 30 Mtr",
    type: "Wall Mount",
    dimension: "450 x 450 x 70 mm",
    interface: "Wi-Fi",
  },
  {
    model: "RDL903D",
    range: "0 - 30 Mtr",
    type: "Wall Mount",
    dimension: "450 x 450 x 70 mm",
    interface: "4G LTE Cellular",
  },
  {
    model: "RDL904A",
    range: "0 - 3 Mtr",
    type: "Industrial Reader",
    dimension: "95 x 95 x 40 mm",
    interface: "RS232 / RS485 / Wiegand / Relay",
  },
  {
    model: "RDL904B",
    range: "0 - 3 Mtr",
    type: "Industrial Reader",
    dimension: "95 x 95 x 40 mm",
    interface: "Ethernet (TCP/IP)",
  },
  {
    model: "RDL904C",
    range: "0 - 3 Mtr",
    type: "Industrial Reader",
    dimension: "95 x 95 x 40 mm",
    interface: "Wi-Fi",
  },
  {
    model: "RDL905",
    range: "0 - 3 Mtr",
    type: "Handheld Reader",
    dimension: "166 x 79 x 31 mm",
    interface: "Wi-Fi / Android OS",
  },
  {
    model: "RDL906A",
    range: "0 - 1 Mtr",
    type: "Desktop Reader",
    dimension: "84 x 59 x 34 mm",
    interface: "RS232 / RS485 / Wiegand / Relay",
  },
  {
    model: "RDL906B",
    range: "0 - 1 Mtr",
    type: "Desktop Reader",
    dimension: "84 x 59 x 34 mm",
    interface: "Wi-Fi",
  },
  {
    model: "RDL906C",
    range: "0 - 1 Mtr",
    type: "Desktop Reader",
    dimension: "84 x 59 x 34 mm",
    interface: "USB Plug-and-Play",
  },
];

export const applications = [
  "Supply Chain & Warehouse Inventory",
  "Asset Tracking & Equipment Auditing",
  "E-Parking & Barrier Gate Automation",
  "Identity Management & Access Control",
  "Toll Gate & Vehicle Windshield Tagging",
  "Library & Document Folder Tracking",
  "Patient Location & Hospital Asset Tracking",
  "Retail Inventory & Cycle Counting",
  "Conveyor & Robotic Assembly Lines",
];

export const partnershipImage = "/products/rdl-product/make-in-india.jpg";
