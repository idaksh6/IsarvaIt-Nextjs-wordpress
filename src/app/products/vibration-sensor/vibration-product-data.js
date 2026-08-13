// Content sourced directly from https://rdltech.in/vibration-sensor layout and official technical specifications

export const heroContent = {
  badge: "Vibration Sensor",
  headline1: "3-Axis Industrial Vibration & Temperature Sensor",
  headline2: "Predictive Condition Monitoring",
  description:
    "RDL Industrial 3-Axis Vibration Sensors continuously monitor acceleration, velocity, and surface temperature — detecting early bearing wear to eliminate costly machine downtime.",
  image: "/products/vibration-sensor/vibration-hero.png",
};

export const systemArchitecture = {
  title: "Vibration Sensor Architecture & Predictive Maintenance Topology",
  subtitle: "Real-Time Sensor Telemetry to PLCs, SCADA, Edge Gateways & Cloud Dashboards",
  description:
    "Direct sensor telemetry monitoring overall RMS velocity, peak acceleration, FFT spectral analysis, and surface temperature across Modbus RS485, Ethernet TCP/IP, Wi-Fi, and 4G LTE networks.",
  image: "/products/vibration-sensor/vibration-s3.jpg",
};

export const benefitsData = {
  title: "Operational Benefits",
  description:
    "RDL Industrial Vibration Sensors provide continuous, round-the-clock machine health diagnostics to prevent catastrophic equipment failure.",
  image: "/products/vibration-sensor/vibration-s2.jpg",
  points: [
    "Predictive Maintenance: Detects early bearing faults weeks before breakdown.",
    "3-Axis Simultaneous Measurement: RMS Velocity, Acceleration & Peak Displacement.",
    "Built-in Surface Temperature Sensor (-40°C to +125°C).",
    "Eliminates Unplanned Production Downtime & Expensive Repair Costs.",
    "Direct Modbus RTU / RS485, Wi-Fi, 4G LTE & MQTT Cloud Integration.",
    "IP67 Weatherproof Stainless Steel & Aluminum Industrial Enclosure.",
    "ISO 10816 Vibration Severity Standard Compliance.",
  ],
};

export const zigZagFeatures = [
  {
    title: "3-Axis Acceleration & Velocity Diagnostic Scanning",
    description:
      "Measures vibration RMS and Peak acceleration across X, Y, Z axes simultaneously. Provides continuous ISO 10816 machine vibration severity classification for rotating machinery.",
    image: "/products/vibration-sensor/vibration-hero.png",
    imageLeft: true,
  },
  {
    title: "Integrated High-Precision Surface Temperature Sensor",
    description:
      "Monitors surface temperature (-40°C to +125°C) right at the bearing housing to detect thermal friction, lubrication loss, and electrical overheating in real time.",
    image: "/products/vibration-sensor/vibration-s2.jpg",
    imageLeft: false,
  },
  {
    title: "Modbus RTU, Wi-Fi, 4G LTE & MQTT Cloud Telemetry",
    description:
      "Native Modbus RTU RS485 interface for PLC and SCADA integration, with optional Wi-Fi or 4G LTE cellular uplinks for automated cloud alerts and SMS notifications.",
    image: "/products/vibration-sensor/vibration-s3.jpg",
    imageLeft: true,
  },
];

export const sensorVariants = [
  {
    title: "Modbus RS485 Wired Vibration Sensor (RDL-VS101A)",
    image: "/products/vibration-sensor/vibration-hero.png",
    preview: [
      "Industrial RS485 Modbus RTU Slave Probe",
      "3-Axis RMS & Peak Acceleration / Velocity",
      "Temperature Range: -40°C to +125°C",
      "IP67 Stainless Steel Body with Screw Mount",
    ],
    full: [
      "Operating Voltage: DC 9V to 24V",
      "Frequency Response: 10 Hz to 10 kHz",
      "ISO 10816 Machinery Vibration Compliance",
      "Ideal for Direct PLC & Data Logger Connection",
    ],
    link: "/contact",
  },
  {
    title: "Wireless Wi-Fi Vibration Sensor Node (RDL-VS101C)",
    image: "/products/vibration-sensor/vibration-s2.jpg",
    preview: [
      "Standalone Wi-Fi 802.11 b/g/n Sensor Node",
      "MQTT & HTTP Cloud Data Telemetry",
      "Configurable Sampling Rate & Alarm Thresholds",
      "Battery / 12V DC Dual Power Supply Options",
    ],
    full: [
      "Real-time Automated Email & Webhook Alerts",
      "Onboard Data Logging Memory for Offline Buffering",
      "IP67 Weatherproof Industrial Enclosure",
      "Includes Cloud Dashboard & Mobile App Access",
    ],
    link: "/contact",
  },
  {
    title: "4G LTE Cellular Remote Vibration Transmitter (RDL-VS101D)",
    image: "/products/vibration-sensor/vibration-s3.jpg",
    preview: [
      "4G LTE Cellular Remote Transmitter",
      "Ideal for Remote Pumping Stations & Wind Turbines",
      "Automated Emergency SMS & Call Alerts",
      "Wide Input Voltage: DC 9V to 36V",
    ],
    full: [
      "Integrated Antenna & SIM Slot",
      "Supports Central Cloud Management Dashboard",
      "High Reliability Watchdog Circuit",
      "Operating Temperature: -40°C to +85°C",
    ],
    link: "/contact",
  },
  {
    title: "BLE Handheld Portable Vibration Probe (RDL-VS102)",
    image: "/products/vibration-sensor/vibration-hero.png",
    preview: [
      "Bluetooth BLE Wireless Handheld Audit Probe",
      "Connects to Mobile Tablet / Android App",
      "Magnetic Mount Probe for Fast Machine Sweeps",
      "Rechargeable Li-Ion Battery Power",
    ],
    full: [
      "Generates On-site Health Audit Reports",
      "FFT Frequency Spectrum & Waveform Display",
      "Store up to 10,000 Asset Scan Measurements",
      "Rugged Protective Rubber Boot",
    ],
    link: "/contact",
  },
];

export const orderInfo = [
  {
    title: "OEM & Custom Sensor Branding",
    description:
      "Custom sensor enclosures, tailored thread mounting options, custom cable lengths, and white-label manufacturing for OEMs and system integrators.",
    image: "/products/rdl-product/oem-service.png",
  },
  {
    title: "Custom Calibration & Range Tuning",
    description:
      "Specialized G-range selection (±2g, ±4g, ±8g, ±16g), high-frequency sampling tuning, and custom Modbus register mapping.",
    image: "/products/rdl-product/make-in-india.jpg",
  },
  {
    title: "Cloud & SCADA Software Integration",
    description:
      "Turnkey condition monitoring software, REST APIs, MQTT brokers, and SCADA dashboard integration support.",
    image: "/products/rdl-product/dynamic-support.jpg",
  },
];

export const sensorOrderTableFooterNote = "* For Customization of G-Range (±2g to ±16g), Sampling Frequency & Custom Enclosure Mounting Please Contact Sales Team";

export const sensorOrderTable = [
  {
    model: "RDL-VS101A",
    range: "3-Axis (±16g)",
    type: "Wired RS485 Probe",
    interface: "Modbus RTU RS485",
    temperature: "-40°C to +125°C",
    protection: "IP67 Stainless Steel",
  },
  {
    model: "RDL-VS101B",
    range: "3-Axis (±16g)",
    type: "Ethernet Sensor Node",
    interface: "Ethernet (TCP/IP) / MQTT",
    temperature: "-40°C to +125°C",
    protection: "IP67 Industrial Enclosure",
  },
  {
    model: "RDL-VS101C",
    range: "3-Axis (±16g)",
    type: "Wi-Fi Wireless Node",
    interface: "Wi-Fi 802.11 b/g/n",
    temperature: "-40°C to +125°C",
    protection: "IP67 Weatherproof",
  },
  {
    model: "RDL-VS101D",
    range: "3-Axis (±16g)",
    type: "4G LTE Cellular Node",
    interface: "4G LTE Cellular / SMS",
    temperature: "-40°C to +125°C",
    protection: "IP67 Weatherproof",
  },
  {
    model: "RDL-VS102",
    range: "3-Axis (±16g)",
    type: "BLE Handheld Probe",
    interface: "Bluetooth 5.0 BLE",
    temperature: "-20°C to +85°C",
    protection: "Handheld Rubber Boot",
  },
];

export const applications = [
  "Electric Motors & Drives Maintenance",
  "Industrial Water & Chemical Pumps",
  "Heavy Gearboxes & Transmission Systems",
  "HVAC Exhaust Fans & Blowers",
  "CNC Spindles & Machining Centers",
  "Air Compressors & Turbines",
  "Conveyor Rollers & Mining Equipment",
  "Wind Turbines & Power Generation",
  "Oil & Gas Pipeline Pump Stations",
];
