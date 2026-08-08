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
  "Production and process monitoring",
  "Utilities monitoring",
  "Condition monitoring",
  "Environment monitoring",
  "Industrial Smart grid",
  "Solar grid",
  "Cold storage monitoring",
  "Water treatment",
  "Generator monitoring",
  "Green House",
  "Warning message in case of calamities",
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
