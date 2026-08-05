export const zigZagFeatures = [
  {
    title: "Highly Reliable Connectivity",
    description:
      "Dual SIM & Auto link carrier detection and network switching features ensure uninterrupted internet access. Embedded watchdog keeps the device always online.",
    image: "/products/rdl-product/image.webp",
    imageLeft: true,
  },
  {
    title: "No Coding - Plug & Play",
    description:
      "The Plug & Play device feature eliminates the need for coding and allows you to quickly connect your device to the most popular IoT public and private platforms.",
    image: "/products/rdl-product/plug-and-play.webp",
    imageLeft: false,
  },
  {
    title: "Supporting Wide Range of Industrial Protocol",
    description:
      "Device offers multiple industrial protocols like MODBUS RTU, MODBUS TCP, JSON, MQTT, FTP and support secure communication SSL.",
    image: "/products/rdl-product/wide-range.webp",
    imageLeft: true,
  },
  {
    title: "Industrial Isolated IO",
    description:
      "Intelligent Data logger offers multiple isolated IO to monitor PLC and VFD, Motors, servo, Valves, energy meter, actuators, relays, encoder, RFID and finger print readers, industrial sensors.",
    image: "/products/rdl-product/isolated.webp",
    imageLeft: false,
  },
  {
    title: "Alarm & Automated Task",
    description:
      "Device sends emergency alerts and different escalation-level SMS to remote users in real time. It also supports automating remote assets based on a set threshold.",
    image: "/products/rdl-product/alarm-automated.png",
    imageLeft: true,
  },
  {
    title: "Easy Remote Management",
    description:
      "Easily monitor onsite device health and perform bulk configuration through remote access or remote maintenance solutions.",
    image: "/products/rdl-product/remote-management.webp",
    imageLeft: false,
  },
  {
    title: "Industrial Grade Design",
    description:
      "Product designed to withstand industrial noise and harsh environmental conditions with isolated & protected IO and EMC / EMI compliance.",
    image: "/products/rdl-product/industrial-grade.png",
    imageLeft: true,
  },
];

export const applications = [
  "Production and process monitoring",
  "Utilities monitoring",
  "Condition monitoring",
  "Environment monitoring",
  "Industrial Smart grid",
  "Leakage detection",
  "Cold storage monitoring",
  "District metering",
  "Water treatment",
  "Generator monitoring",
  "Green House",
  "Warning message in case of calamities",
  "Standard SCADA Applications",
];

export const applicationDiagrams = [
  {
    title: "Data Logger Configuration Manager",
    description:
      "Configure channels, Modbus settings, analog/digital I/O, and threshold parameters from a single web-based interface.",
    image: "/products/rdl-product/diagram-config-manager.png",
  },
  {
    title: "Cascading Remote IO Module",
    description:
      "Connect multiple RDL670 slave units over TCP/IP to a master logger for distributed sensor monitoring with 4G LTE uplink.",
    image: "/products/rdl-product/diagram-cascading-remote-io.jpg",
  },
  {
    title: "Cascading WiFi IO Module",
    description:
      "Wirelessly cascade RDL670A modules over a corporate WiFi network to the master unit for flexible plant-floor deployments.",
    image: "/products/rdl-product/diagram-cascading-wifi-io.jpg",
  },
  {
    title: "SCADA Remote IO Monitoring",
    description:
      "Integrate remote I/O modules with your SCADA workstation for centralized visualization and control.",
    image: "/products/rdl-product/diagram-scada-remote-io.jpg",
  },
  {
    title: "Energy Monitoring System",
    description:
      "Monitor energy meters across multiple locations via Modbus RTU/TCP and push consolidated data to the RMS platform.",
    image: "/products/rdl-product/diagram-energy-monitoring.jpg",
  },
  {
    title: "Compressor Monitoring System",
    description:
      "Track compressor health and process parameters with wired and wireless data connections to the cloud RMS.",
    image: "/products/rdl-product/diagram-compressor-monitoring.jpg",
  },
];

export const orderInfo = [
  {
    title: "OEM & White Label Service",
    description:
      "RDL OEM designs and builds products based on their own specification, then sells them to another company for branding and distribution. OEM minimum order quantity: 100 to 500 units.",
    image: "/products/rdl-product/oem-service.png",
  },
  {
    title: "Custom Solution Development",
    description:
      "Quick adaptability to any kind of customization — structural, functional, or look-and-feel. Seamless transformation to tailor standard products to your creative requirements.",
    image: "/products/rdl-product/custom-solution.webp",
  },
  {
    title: "Dynamic Process Support",
    description:
      "Highly flexible, competitive, and economical solutions across a wide variety of business domains — so customers get reliable, delightful business outcomes.",
    image: "/products/rdl-product/dynamic-support.jpg",
  },
];

export const dataLoggerVariants = [
  {
    id: "4g-lte",
    title: "Industrial Data Logger — 4G LTE",
    image: "/products/rdl-product/logger-4g-lte.png",
    preview: [
      "12 x Isolated Analog Input Channel 0-10V, 0-24V, 4-20mA, 16 Bit, 860SPS",
      "4x Isolated Digital Input 24V",
      "3x Isolated Digital Output / PWM 24V",
      "1x Relay (NO & C)",
      "1x Isolated RS485 for MODBUS RTU",
      "1x Isolated Ethernet 10/100Mbps MODBUS TCP",
      "1x USB-Device Interface for Configuring, Monitoring and Download",
    ],
    full: [
      "1x WiFi / 2G / 4G / LTE Wireless Communication",
      "Configure and Read Multiple Slave IDs, Selectable Input / Holding Register & Coil",
      "Configurable Data Type and Conversion Method (INT, Long INT, FLOAT, Double Float & RawHex)",
      "Industrial Grade Design — Isolated & Protected IO & EMC / EMI Compliance",
    ],
    link: "https://researchdesignlab.com/industrial-data-logger-4g-lte.html",
  },
  {
    id: "das",
    title: "Data Acquisition System",
    image: "/products/rdl-product/logger-das.jpg",
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
      "In-built industrial grade PC — 2.2GHz, 4GB RAM, 120GB SSD",
      "Datalogging and Report",
      "Industrial-grade 32 to 85 inch SAMSUNG Display",
      "12x to 48x Isolated Inbuilt 16 bit Analog input channel",
      "1x Isolated RS485 RTU & 1x Isolated Modbus TCP",
      "4x to 16x Isolated Digital Input, 1x to 4x Relay Module",
      "Custom Configurable API, SSL & AES 256 Supported",
      "Multi-channel sensor inputs with high accuracy & stable measurements",
    ],
    link: "https://researchdesignlab.com/process-parameter-monitoring-display-928.html",
  },
  {
    id: "flame-proof",
    title: "Industrial Data Logger — Flame Proof",
    image: "/products/rdl-product/logger-flame-proof.png",
    preview: [
      "12 x Isolated Analog Input Channel 0-10V, 0-24V, 4-20mA, 16 Bit, 860SPS",
      "4x Isolated Digital Input 24V",
      "3x Isolated Digital Output / PWM 24V",
      "1x Relay (NO & C)",
      "1x Isolated RS485 for MODBUS RTU",
      "1x Isolated Ethernet 10/100Mbps MODBUS TCP",
      "1x USB-Device Interface for Configuring, Monitoring and Download",
    ],
    full: [
      "1x WiFi / 2G / 4G / LTE Wireless Communication",
      "Configurable Scaling factor for Analog channels",
      "Configurable Data Transferring Protocol JSON / MQTT and FTP",
      "Support secure communication SSL, 16 GB inbuilt storage",
      "Offline CSV logging during network failure with auto sync",
      "Remote control / Activating Relay / Digital output",
      "Configurable Alarm & auto socket / server connection",
      "Cloud platforms: AWS / Azure / Google / Oracle / ThingsBoard",
      "Industrial Grade Design — Isolated & Protected IO & EMC / EMI Compliance",
    ],
    link: "https://researchdesignlab.com/flame-proof-industrial-data-logger.html",
  },
  {
    id: "ip65",
    title: "Industrial Data Logger — IP65/66",
    image: "/products/rdl-product/logger-ip65.png",
    preview: [
      "12 x Isolated Analog Input Channel 0-10V, 0-24V, 4-20mA, 16 Bit, 860SPS",
      "4x Isolated Digital Input 24V",
      "3x Isolated Digital Output / PWM 24V",
      "1x Relay (NO & C)",
      "1x Isolated RS485 for MODBUS RTU",
      "1x Isolated Ethernet 10/100Mbps MODBUS TCP",
      "1x USB-Device Interface for Configuring, Monitoring and Download",
    ],
    full: [
      "1x WiFi / 2G / 4G / LTE Wireless Communication",
      "Configure and Read Multiple Slave IDs, Selectable Input / Holding Register & Coil",
      "Configurable Data Type and Conversion Method (INT, Long INT, FLOAT, Double Float & RawHex)",
      "Industrial Grade Design — Isolated & Protected IO & EMC / EMI Compliance",
    ],
    link: "https://researchdesignlab.com/industrial-datalogger-with-ip65-66-enclosure.html",
  },
];

const CDN =
  "https://img1.wsimg.com/blobby/go/12461e14-346a-4dab-a0dd-f3b770f6c7ad/downloads";

export const downloads = [
  {
    title: "Industrial Data Logger 4G LTE Brochure",
    type: "PDF",
    href: `${CDN}/Industrial_Data_Logger_4G LTE_Brochure_Version.pdf?ver=1784791088768`,
  },
  {
    title: "Data Logger User Manual",
    type: "PDF",
    href: `${CDN}/INDUSTRIAL DATALOGGER USER MANUAL.pdf?ver=1784791088768`,
  },
  {
    title: "Creating FTP Account",
    type: "PDF",
    href: `${CDN}/CREATING FTP ACCOUNT.pdf?ver=1784791088768`,
  },
  {
    title: "JSON Parsing Guide",
    type: "PDF",
    href: `${CDN}/JSON PARSING.pdf?ver=1784791088768`,
  },
  {
    title: "MQTT Broker SSL Implementation",
    type: "PDF",
    href: `${CDN}/MQTT Broker SSL Implementation Guideline.pdf?ver=1784791088768`,
  },
  {
    title: "MQTT Linux Bringup",
    type: "PDF",
    href: `${CDN}/MQTT_Linux_Bringup_ver1.0.pdf?ver=1784791088768`,
  },
];

export const sdks = [
  {
    title: "Android MQTT Client",
    type: "ZIP",
    href: `${CDN}/ANDROID MQTT CLIENT.zip?ver=1784791088823`,
  },
  {
    title: "PHP JSON SDK",
    type: "ZIP",
    href: `${CDN}/PHP JSON SDK.zip?ver=1784791088823`,
  },
  {
    title: "PHP MQTT Client",
    type: "ZIP",
    href: `${CDN}/PHP MQTT CLIENT.zip?ver=1784791088823`,
  },
];

export const YOUTUBE_ID = "do6PU0faohI";
export const YOUTUBE_TUTORIALS =
  "https://www.youtube.com/watch?v=_MfcA8Jcmtk&list=PLcKVpQPJcBb8Jw7I6tGvvZvjo5G8g0jNW";
