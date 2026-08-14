// Content sourced for Biometric Authentication System

export const heroContent = {
  badge: "Biometric Authentication",
  headline1: "Biometric Authentication System",
  headline2: "Secure Access Control for PLC & HMI",
  description:
    "Designed to enhance the security and access control of industrial PLC and HMI systems. Integrating fingerprint authentication to ensure only authorized operators can access critical machinery.",
};

export const zigZagFeatures = [
  {
    title: "Biometric Access Control for Industrial PLCs",
    description:
      "Enhance industrial cybersecurity with fingerprint and multi-factor biometric authentication seamlessly integrated with PLC and HMI control systems.",
    image: "/products/biometric-authentication/biometric-1a.jpg",
    imageLeft: true,
  },
  {
    title: "Industrial Access & Plant Security",
    description:
      "Ensure authorized-only operator access across shop-floor machinery, automated production lines, and critical plant infrastructure.",
    image: "/products/biometric-authentication/biometric-4a.jpg",
    imageLeft: false,
  },
  {
    title: "Multi-Protocol Connectivity & Data Encryption",
    description:
      "Equipped with RS485 Modbus RTU, Modbus TCP, RS232, and USB interfaces with encrypted credential storage and real-time audit trail logging.",
    image: "/products/biometric-authentication/biometric-5a.jpg",
    imageLeft: true,
  },
  {
    title: "Application Wiring Diagram - Tower Lamp & Alarm Interlocking",
    description:
      "Direct wiring configuration connecting warning light towers, alarm buzzers, and PLC digital inputs to indicate authorized operator status.",
    image: "/products/biometric-authentication/biometric-11.jpg",
    imageLeft: false,
  },
];

export const specifications = [
  "Biometric authentication methods: Fingerprint scanning with high-speed sensor",
  "Seamless integration with existing PLC, HMI, and SCADA systems",
  "Secure storage and encryption of biometric credentials",
  "User management and tiered access control permissions",
  "Real-time monitoring and event logging with timestamp",
  "Fingerprint Enrollment: Up to 1,000 Users",
  "Memory: 16 GB Built-in Storage",
  "Communication: RS485 MODBUS RTU, MODBUS TCP, RS232, USB",
  "Power Supply: DC 24V",
  "Tested compatibility with major industrial PLCs",
];

export const applications = [
  "Automated Manufacturing Lines",
  "Energy & Utility Generation Systems",
  "Water & Wastewater Treatment Plants",
  "Transportation & Logistics Control Centers",
  "Oil, Gas & Petrochemical Refineries",
  "4M (Man, Machine, Material, Method) Implementation",
];

export const applicationDiagrams = [
  {
    title: "Application Wiring Diagram - Potential Contact Free Input to PLC",
    description:
      "Biometric switch wiring diagram connecting RDL810 fingerprint reader to PLC potential-free inputs, HMI touchscreens, and machine job switching operations.",
    image: "/products/biometric-authentication/rdl810-fb-4.jpg",
  },
  {
    title: "Application Wiring Diagram - Remote Access Log System",
    description:
      "Centralized biometric user database and remote access log system connected via Modbus TCP to corporate network workstations.",
    image: "/products/biometric-authentication/rdl810-fb-5.jpg",
  },
  {
    title: "Multi-Station Biometric Access Control System for Multiple Machines",
    description:
      "Multi-station centralized access control network managing authorized operator permissions across multiple machines, production lines, and plant zones.",
    image: "/products/biometric-authentication/rdl810-fb-6.jpg",
  },
  {
    title: "Hardware Models — RDL810A (Panel Mount) & RDL810B (DIN Rail Mount)",
    description:
      "Industrial hardware specification comparing IP65 Flush Panel Mount (RDL810A) and DIN Rail / Surface Mount (RDL810B) enclosure models.",
    image: "/products/biometric-authentication/rdl810-aa.jpg",
  },
];

export const oemSectionTitle = "OEM & ODM Services";

export const orderInfo = [
  {
    title: "OEM & White Label Service",
    description:
      "Custom branding, white-label enclosure designs, and hardware modification tailored to your industrial product lineup. Minimum order quantity: 100 to 500 units.",
    image: "/products/cloud-plc/oem-service.png",
  },
  {
    title: "Custom Solution Development",
    description:
      "Adaptable structure, custom firmware protocols, and tailored user capacity options to fulfill specific security compliance requirements.",
    image: "/products/cloud-plc/custom-solution.webp",
  },
];

export const orderTableRows = [
  {
    feature: "RS485 RTU",
    rdl810a: true,
    rdl810b: true,
  },
  {
    feature: "MODBUS TCP",
    rdl810a: true,
    rdl810b: true,
  },
  {
    feature: "RELAY",
    rdl810a: true,
    rdl810b: true,
  },
  {
    feature: "FINGERPRINT READER WITH IP65 ENCLOSURE",
    rdl810a: true,
    rdl810b: false,
  },
  {
    feature: "ENCLOSURE TYPE - PANEL MOUNT",
    rdl810a: false,
    rdl810b: true,
  },
];

export const biometricVariants = [
  {
    id: "rdl810a",
    title: "Biometric Controller — Modbus RTU : RDL810A",
    image: "/products/biometric-authentication/rdl810-aa copy.jpg",
    preview: [
      "Fingerprint enrollment capacity: 1,000 Users",
      "16 GB Internal Memory for audit trail logging",
      "1x Isolated RS485 for MODBUS RTU communication",
      "1x RS232 Configuration Port",
      "Power supply: DC 24V",
    ],
    full: [
      "Real-time event logging & encrypted user data",
      "Compatible with all major PLC & HMI models",
    ],
    link: "https://researchdesignlab.com",
  },
  {
    id: "rdl810b",
    title: "Biometric Controller — Modbus TCP : RDL810B",
    image: "/products/biometric-authentication/rdl810-b.jpg",
    preview: [
      "Fingerprint enrollment capacity: 1,000 Users",
      "16 GB Internal Memory for audit trail logging",
      "1x Ethernet 10/100Mbps MODBUS TCP port",
      "1x RS232 Configuration Port",
      "Power supply: DC 24V",
    ],
    full: [
      "Network centralized user access administration",
      "Compatible with SCADA & Cloud platforms",
    ],
    link: "https://researchdesignlab.com",
  },
];

export const downloads = [
  {
    title: "Biometric Authentication System - Datasheet (pdf)",
    type: "PDF",
    href: "https://researchdesignlab.com/datasheet/Biometric_Authentication_System_V31.pdf",
  },
];

export const sdks = [
  {
    title: "Biometric Integration Sample Codes & APIs",
    type: "ZIP",
    href: "https://github.com/researchdesignlab/Biometric-Authentication/archive/refs/heads/main.zip",
  },
];

export const YOUTUBE_ID = "do6PU0faohI";
export const YOUTUBE_TUTORIALS = "https://www.youtube.com/watch?v=do6PU0faohI";
