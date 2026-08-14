// Data Acquisition System (DAS) with Display Product Data

export const heroContent = {
  badge: "DATA ACQUISITION SYSTEM WITH DISPLAY",
  headline1: "All-in-One Real-Time Monitoring",
  headline2: "DAS with Display",
  description:
    "The Data Acquisition System (DAS) with Display is an all-in-one solution designed to collect, monitor, and visualize real-time data from multiple sensors and field devices. With an integrated display and industrial-grade design, it delivers instant insights on-site while seamlessly connecting to automation and IoT platforms.",
};

export const zigZagFeatures = [
  {
    title: "Industrial Grade PC & SAMSUNG Display",
    description:
      "Integrated 32\" to 85\" SAMSUNG Display powered by a 2.2GHz Industrial PC, 4GB RAM, 120GB SSD, pre-enabled Windows 11 OEM License, and customizable 8-screen dashboard system.",
    image: "/products/rdl-product/das-display-pic2.jpg",
    imageLeft: true,
  },
  {
    title: "64 Configurable Data Logging Channels",
    description:
      "Supports up to 64 custom-configurable data channels with customizable channel labels, color-coded threshold alerts, and configurable polling intervals.",
    image: "/products/rdl-product/DAS with Display.png",
    imageLeft: false,
  },
  {
    title: "High-Precision Isolated Analog & Digital I/O",
    description:
      "12x to 48x isolated 16-bit high-precision analog input channels, 4x to 16x digital inputs, and 1x to 4x industrial relay control modules.",
    image: "/products/rdl-product/das-boiler-water.jpg",
    imageLeft: true,
  },
  {
    title: "Enterprise Security & Modbus Networking",
    description:
      "1x Isolated RS485 RTU, 1x Isolated Modbus TCP Ethernet port, custom configurable REST API integration, SSL, and AES-256 data encryption.",
    image: "/products/rdl-product/das-architecture.jpg",
    imageLeft: false,
  },
];

export const dasFeatures = [
  {
    title: "64 Configurable Channels",
    description: "64 x Custom configurable Data Channels with customizable dashboard channel labels.",
  },
  {
    title: "SAMSUNG Industrial Display",
    description: "Industrial-grade 32 to 85 inch SAMSUNG Display for clear multi-parameter visualization.",
  },
  {
    title: "In-Built Industrial PC",
    description: "Processor 2.2GHz, 4GB RAM, 120GB SSD with pre-enabled Windows 11 OEM License.",
  },
  {
    title: "Custom Dashboards & Screens",
    description: "Custom configurable up to 8 dashboard screens with color-coded threshold alerts.",
  },
  {
    title: "Safety & Video Playback",
    description: "Safety and instruction videos can be scheduled and played at designated intervals.",
  },
  {
    title: "Configurable Polling Intervals",
    description: "Custom configurable polling interval for real-time sensor data acquisition.",
  },
  {
    title: "Isolated Analog Input Channels",
    description: "12x to 48x isolated inbuilt 16-bit high-precision analog input channels.",
  },
  {
    title: "Isolated Digital Inputs & Relays",
    description: "4x to 16x isolated digital inputs and 1x to 4x industrial relay control modules.",
  },
  {
    title: "Industrial Modbus RTU & TCP",
    description: "1x Isolated RS485 RTU and 1x Isolated Modbus TCP port for seamless networking.",
  },
  {
    title: "Enterprise Security & Encryption",
    description: "Custom configurable API with full SSL and AES-256 encryption support.",
  },
  {
    title: "Multi-Channel Datalogging",
    description: "Multi-channel sensor inputs with stable measurements, datalogging, and automated reports.",
  },
  {
    title: "High Accuracy Measurements",
    description: "Delivers stable, high-precision measurement for critical industrial process parameters.",
  },
];

export const applications = [
  "Production and Process Monitoring",
  "Utilities & Energy Monitoring",
  "Machine Condition Monitoring",
  "Environmental Air Quality Monitoring",
  "Industrial Smart Grid Integration",
  "Solar PV Array & Inverter Monitoring",
  "Cold Storage & Refrigeration Logistics",
  "Water & Wastewater Treatment Facilities",
  "Industrial Generator & Backup Systems",
  "Greenhouse & Agricultural Tech",
  "Calamity & Emergency Warning Systems",
  "Boiler, Steam & Furnace Process Systems",
];

export const dasVariants = [
  {
    id: "das-std",
    title: "Data Acquisition System",
    image: "/products/rdl-product/das-web-banner.jpg",
    preview: [
      "48 x Custom configurable Data Channels",
      "Custom Configurable Dashboards & data channel Labels",
      "Custom Configurable up to 8 Dashboard Screens",
      "Safety and Instruction videos on set intervals",
      "Custom configurable polling interval",
      "Windows 11 OEM License Enabled",
      "Threshold-based color labels & data settings",
    ],
    full: [
      "32\" to 85\" SAMSUNG Industrial Display",
      "Isolated RS485 Modbus RTU & Modbus TCP Ethernet",
      "SSL & AES-256 Data Encryption",
    ],
    link: "https://researchdesignlab.com/process-parameter-monitoring-display-928.html",
  },
  {
    id: "das-test-rig",
    title: "Test Rig Data Acquisition System",
    image: "/products/rdl-product/das-display-pic2.jpg",
    preview: [
      "Models: RDL926A – RDL926F",
      "Up to 48X Isolated Analog Input Channels (16-bit)",
      "Up to 16X Isolated Digital Inputs & 4X Relays",
      "Optional 16X PT100 & K/J Temp Sensor Inputs",
      "Inbuilt 80 GB SSD Datalogger & Edge Gateway",
    ],
    full: [
      "Edge Gateway LTE / 4G / 5G / Wi-Fi",
      "Customizable Multi-Channel Process Dashboards",
    ],
    link: "https://researchdesignlab.com/process-parameter-monitoring-display-928.html",
  },
];

export const testRigModels = [
  { model: "RDL926A", analog: "12X", digital: "4X", relay: "1X", pt100: "-", kjTemp: "-" },
  { model: "RDL926B", analog: "24X", digital: "8X", relay: "2X", pt100: "-", kjTemp: "-" },
  { model: "RDL926C", analog: "36X", digital: "12X", relay: "3X", pt100: "-", kjTemp: "-" },
  { model: "RDL926D", analog: "48X", digital: "16X", relay: "4X", pt100: "-", kjTemp: "-" },
  { model: "RDL926E", analog: "24X", digital: "8X", relay: "4X", pt100: "16X", kjTemp: "-" },
  { model: "RDL926F", analog: "24X", digital: "8X", relay: "4X", pt100: "-", kjTemp: "16X" },
];

export const environmentModels = [
  { model: "RDL926G", basicSet: "1 Set (Temp, Humidity, PM2.5, PM10, Pressure, CO2)", gasSet: "-" },
  { model: "RDL926H", basicSet: "1 Set (Temp, Humidity, PM2.5, PM10, Pressure, CO2)", gasSet: "1 Set (CO, SO2, NO2, H2S, O3, NH3, Cl2)" },
];

export const solarModel = {
  model: "RDL926I",
  features: [
    "Display: Yes",
    "Edge Gateway LTE / 4G / 5G / Wi-Fi: Yes",
    "Inbuilt 80 GB SSD For Data Logging: Yes",
    "Solar Irradiance Sensor, Panel Temp. Sensor, Ambient Temp. Sensor, Humidity Sensor: 1 Set",
    "Modbus Communication for Solar Inverter / Energy Meter: 1 Set",
  ],
};

export const boilerModel = {
  model: "RDL926J",
  features: [
    "Display: Yes",
    "Edge Gateway LTE / 4G / 5G / Wi-Fi: Yes",
    "Inbuilt 80 GB SSD For Data Logging: Yes",
    "Temperature Sensor, Pressure Sensor, Water Level Sensor: 1 Set",
  ],
};

export const KNOW_MORE_URL =
  "https://researchdesignlab.com/process-parameter-monitoring-display-928.html";
