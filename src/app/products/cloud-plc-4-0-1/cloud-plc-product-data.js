// Content sourced directly from rdltech.in/cloud-plc-4-0-1

export const heroContent = {
  badge: "Cloud PLC 4.0",
  headline1: "Programmable Cloud PLC®",
  headline2: "Edge Gateway & Automation Tool",
  description:
    "The Programmable Cloud PLC® offers Unmatched adaptability, reliable connectivity and customizable solution for your industry. Cloud PLC® can be utilized as an Edge Gateway, PLC, Data Logger & Edge Processing Node.",
  description2:
    "Cloud PLC® supports a wide range of industrial protocols like Modbus, MQTT, JSON, RESTful, TCP/UDP, SNMP which makes the solution integration easier than ever for IT / Automation engineers.",
  description3:
    "Cloud PLC® comes with many different controller / processors (THEJAS32, ESP32, STM32, RPI Etc.) options. Users can select processors and build their next generation automation and IoT control system at an affordable price tag.",
  thejas32Note:
    "Cloud PLC® — First Indian Industrial PLC built on Indigenously developed Processor THEJAS32 by CDAC.",
};

// 4 key benefit tiles shown on the rdltech page
export const benefitTiles = [
  {
    icon: "🔗",
    title: "Edge Gateway",
    description: "Seamlessly connect on-site industrial equipment to cloud platforms like Microsoft Azure and AWS.",
  },
  {
    icon: "⚙️",
    title: "Automation Tool",
    description: "Build custom automation solutions for PLC, SCADA, HMI, VFDs, motors, servos, valves and actuators.",
  },
  {
    icon: "📊",
    title: "Data Logger",
    description: "Log process data locally on 16 GB inbuilt storage and sync to cloud with secure SSL communication.",
  },
  {
    icon: "🧠",
    title: "Edge Processing",
    description: "Run logic at the edge with Xtensar 32-Bit LX7 Dual Core processor for real-time industrial control.",
  },
];

export const specifications = [
  "8x Isolated Analog Input Channel 0-10V, 0-24V, 4-20mA. 16 Bit Resolution and 860SPS.",
  "2x Analog Output (AO) 0-10v.",
  "2x 0-20mA transmitter.",
  "4x Isolated Digital Input 24v.",
  "4x Isolated Digital Output / PWM 24v.",
  "2x Relay (NO & C).",
  "1x Isolated RS485 for MODBUS RTU Communication.",
  "1x Isolated RS232 communication port.",
  "1x USB-Device Interface for Configuring, Monitoring & Download.",
  "1x Wi-Fi / Bluetooth / BLE Wireless Communication.",
  "Industrial Grade Design — Isolated & Protected IO & EMC / EMI Compliance.",
  "Protocol JSON / MQTT, RESTful, TCP / UDP, SNMP & OPC — Support secure communication SSL.",
  "Real Time Clock — RTC DS3231, Accuracy: +/- 3.5ppm From -40 to +85 Degree C.",
  "16 GB inbuilt storage*. Power Supply DC 9-36V.",
  "Support most cloud platforms including Microsoft Azure & AWS etc.",
  "Open Source Development Environment.",
];

export const applications = [
  "Production and process monitoring",
  "Utilities monitoring",
  "Condition monitoring",
  "Environment monitoring",
  "Industrial Smart grid",
  "Leakage detection",
  "Generator monitoring",
  "Cold storage monitoring",
  "Warning message in case of calamities",
  "Standard SCADA Applications",
  "District Metering",
  "Water Treatment",
  "Green House",
];

// "OEM & ODM Services" — exact section heading from rdltech.in
export const oemSectionTitle = "OEM & ODM Services";

export const orderInfo = [
  {
    title: "OEM & White Label Service",
    description:
      "RDL OEM (Original Equipment Manufacturer) that designs and builds a product based on their own specification, and then sells it to another company for branding and distribution. OEM Minimum order quantity 100 to 500 no's.",
    image: "/products/cloud-plc/oem-service.png",
  },
  {
    title: "Custom Solution Development",
    description:
      "Quick adaptability to any kind of customization requirements be it structural, functional, or Look-and-feel. Seamless transformation made possible for every possible aspects to tailor the standard products to realise your creative imagination.",
    image: "/products/cloud-plc/custom-solution.webp",
  },
];

// ORDER INFORMATION TABLE — exact from rdltech.in/cloud-plc-4-0-1 screenshot
// Models: RDL826A, RDL826B, RDL826C, RDL826D
// true = available (✓), false = not available (✗)
export const orderTableRows = [
  {
    feature: "8x Isolated Analog Input Channel 0-10V, 0-24v, 4-20mA",
    rdl826a: true, rdl826b: true, rdl826c: true, rdl826d: true,
  },
  {
    feature: "2x Analog Output(AO) 0-10v",
    rdl826a: true, rdl826b: true, rdl826c: false, rdl826d: false,
  },
  {
    feature: "2x 0-20mA transmitter",
    rdl826a: true, rdl826b: true, rdl826c: true, rdl826d: true,
  },
  {
    feature: "4x Isolated Digital Input 24v",
    rdl826a: true, rdl826b: true, rdl826c: true, rdl826d: true,
  },
  {
    feature: "4x Isolated Digital Output / PWM 24v.",
    rdl826a: true, rdl826b: true, rdl826c: true, rdl826d: true,
  },
  {
    feature: "2x Relay (NO & C)",
    rdl826a: true, rdl826b: true, rdl826c: true, rdl826d: true,
  },
  {
    feature: "1x Isolated RS485 (MODBUS RTU Communication)",
    rdl826a: true, rdl826b: false, rdl826c: true, rdl826d: false,
  },
  {
    feature: "1x Isolated RS232 communication port",
    rdl826a: false, rdl826b: true, rdl826c: false, rdl826d: true,
  },
  {
    feature: "1x USB-Device Interface",
    rdl826a: true, rdl826b: true, rdl826c: true, rdl826d: true,
  },
  {
    feature: "1x WiFi / Bluetooth / BLE Wireless Communication",
    rdl826a: true, rdl826b: true, rdl826c: true, rdl826d: true,
  },
  {
    feature: "16 GB SD Card Storage*",
    rdl826a: true, rdl826b: true, rdl826c: true, rdl826d: true,
  },
];

// Exact variants from rdltech.in/cloud-plc-4-0-1 "Related Products" section
export const cloudPlcVariants = [
  {
    id: "rdl892",
    title: "Cloud PLCr — Ethernet : RDL892",
    image: "/products/cloud-plc/cloud-plc-ethernet.jpg",
    preview: [
      "12x Isolated Analog Input Channel 0-10V, 0-24v, 4-20mA. 16 Bit Resolution and 860SPS.",
      "4x Isolated Digital Input 24V.",
      "3x Isolated Digital Output / PWM 24V.",
      "1x Relay (NO & C).",
      "1x Isolated RS485 for MODBUS RTU Communication.",
      "1x Isolated Ethernet 10/100Mbps MODBUS TCP Communication.",
      "1x USB-Device Interface for Configuring, Monitoring and Download.",
    ],
    full: [
      "1x Wi-Fi & Bluetooth Wireless Communication.",
      "16 GB SD Card Storage*.",
      "Controller / Processor: Xtensa® 32-Bit LX7 Dual Core, 32 Bit, Upto 240MHz, 16 MB Flash Memory.",
    ],
    link: "https://researchdesignlab.com/cloud-plc-ethernet.html",
  },
  {
    id: "rdl893",
    title: "Cloud PLCr — LoRa : RDL893",
    image: "/products/cloud-plc/cloud-plc-lora.jpg",
    preview: [
      "12x Isolated Analog Input Channel 0-10V, 0-24v, 4-20mA. 16 Bit Resolution and 860SPS.",
      "4x Isolated Digital Input 24V.",
      "3x Isolated Digital Output / PWM 24V.",
      "1x Relay (NO & C).",
      "1x Isolated RS485 for MODBUS RTU Communication.",
      "1x LORA Communication.",
      "1x USB-Device Interface for Configuring, Monitoring and Download.",
    ],
    full: [
      "1x Wi-Fi & Bluetooth Wireless Communication.",
      "16 GB SD Card Storage*.",
      "Controller / Processor: Xtensa® 32-Bit LX7 Dual Core, 32 Bit, Upto 240MHz, 16 MB Flash Memory.",
    ],
    link: "https://researchdesignlab.com/cloud-plc-lora.html",
  },
  {
    id: "rdl894",
    title: "Cloud PLCr — 4G / LTE : RDL894",
    image: "/products/cloud-plc/cloud-plc-4g-lte.jpg",
    preview: [
      "12x Isolated Analog Input Channel 0-10V, 0-24v, 4-20mA. 16 Bit Resolution and 860SPS.",
      "4x Isolated Digital Input 24V.",
      "3x Isolated Digital Output / PWM 24V.",
      "1x Relay (NO & C).",
      "1x Isolated RS485 for MODBUS RTU Communication.",
      "1x USB-Device Interface for Configuring, Monitoring and Download.",
      "1x 4G / LTE Communication (Max 150Mbps Down Link / Max 50 Mbps Uplink).",
    ],
    full: [
      "16 GB SD Card Storage*.",
      "Controller / Processor: Qualcomm MDM9207, ARM® Cortex® A7 1.3 GHz.",
    ],
    link: "https://researchdesignlab.com/cloud-plc-4g-lte.html",
  },
  {
    id: "rdl895",
    title: "Cloud PLCr — RPI-0 : RDL895",
    image: "/products/cloud-plc/cloud-plc-rpi.jpg",
    preview: [
      "12x Isolated Analog Input Channel 0-10V, 0-24v, 4-20mA. 16 Bit Resolution and 860SPS.",
      "4x Isolated Digital Input 24V.",
      "3x Isolated Digital Output / PWM 24V.",
      "1x Relay (NO & C).",
      "1x Isolated RS485 for MODBUS RTU Communication.",
      "1x Isolated Ethernet 10/100Mbps MODBUS TCP Communication.",
      "1x USB-Device Interface for Configuring, Monitoring and Download.",
    ],
    full: [
      "1x Wi-Fi & Bluetooth Wireless Communication.",
      "16 GB SD Card Storage*.",
      "Controller / Processor: Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.8GHz. 16 MB Flash Memory.",
    ],
    link: "https://researchdesignlab.com/cloud-plc-rpi.html",
  },
];

// Images shown on the rdltech.in page in the zig-zag / gallery section
export const galleryImages = [
  { src: "/products/cloud-plc/cloud-plc-hero.jpg", alt: "Cloud PLC 4.0 Main Unit" },
  { src: "/products/cloud-plc/cloud-plc-about.png", alt: "Cloud PLC Overview" },
  { src: "/products/cloud-plc/cloud-plc-controller.png", alt: "Cloud PLC Controller Board" },
  { src: "/products/cloud-plc/cloud-plc-thejas32.jpg", alt: "Cloud PLC Thejas32 Processor" },
  { src: "/products/cloud-plc/cloud-plc-2.jpg", alt: "Cloud PLC Unit 2" },
  { src: "/products/cloud-plc/cloud-plc-3.jpg", alt: "Cloud PLC Unit 3" },
  { src: "/products/cloud-plc/cloud-plc-6.jpg", alt: "Cloud PLC Feature 1" },
  { src: "/products/cloud-plc/cloud-plc-7.jpg", alt: "Cloud PLC Feature 2" },
  { src: "/products/cloud-plc/cloud-plc-8.jpg", alt: "Cloud PLC Feature 3" },
  { src: "/products/cloud-plc/cloud-plc-9.jpg", alt: "Cloud PLC Feature 4" },
];

export const downloads = [
  {
    title: "Cloud PLC - Data Sheet (pdf)",
    type: "PDF",
    href: "https://img1.wsimg.com/blobby/go/12461e14-346a-4dab-a0dd-f3b770f6c7ad/downloads/Cloud%20PLC%20Data%20Sheet.pdf",
  },
  {
    title: "CPL Ethernet Board IO Pinmap",
    type: "PDF",
    href: "https://researchdesignlab.com/cloudplcweb/pdf/4_0/CPL_ETHERNET_BOARD_IO_Pinmap.pdf",
  },
  {
    title: "Direction to Install ESP32 Board on Arduino IDE",
    type: "PDF",
    href: "https://researchdesignlab.com/cloudplcweb/pdf/4_0/DIRECTION_TO_INSTALL_THE_ESP32_BOARD_ON_ARDUINO_IDE.pdf",
  },
  {
    title: "Driver Installation Guide",
    type: "PDF",
    href: "https://researchdesignlab.com/cloudplcweb/pdf/4_0/DRIVER_INSTALLATION.pdf",
  },
  {
    title: "Node Red User Manual with ESP32 Board",
    type: "PDF",
    href: "https://researchdesignlab.com/cloudplcweb/pdf/4_0/NodeRed_User_Manual_with_ESP32_Board.pdf",
  },
];

export const sdks = [
  {
    title: "Cloud PLC GitHub Repository — Sample Codes & APIs",
    type: "ZIP",
    href: "https://github.com/researchdesignlab/Cloud-PLC/archive/refs/heads/main.zip",
  },
];

export const YOUTUBE_ID = "do6PU0faohI";
export const YOUTUBE_TUTORIALS =
  "https://www.youtube.com/watch?v=_MfcA8Jcmtk&list=PLcKVpQPJcBb8Jw7I6tGvvZvjo5G8g0jNW";
