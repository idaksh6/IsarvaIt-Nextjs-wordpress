"use client";

import { useState, useEffect, useRef } from "react";
import Link from "../AppLink";
import ContactFormModal from "../ContactFormModal";
import {
  Eye,
  ShieldCheck,
  Cpu,
  Layers,
  Activity,
  Sparkles,
  Clock,
  Lock,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Sliders,
  Video,
  AlertTriangle,
  Search,
  Zap,
  BarChart3,
  Factory,
  Truck,
  Building2,
  Users,
  Flame,
  Radio,
  Scan,
  Maximize2,
  BellRing,
  RefreshCw,
  HardHat,
  Camera,
  Server,
  FileCheck,
  Check
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   1. Animated HUD Simulation Modes
   ───────────────────────────────────────────────────────── */
const HUD_MODES = [
  {
    id: "ppe",
    name: "Industrial Safety & PPE",
    icon: HardHat,
    accent: "from-cyan-500 to-blue-600",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    fps: "59.8 FPS",
    latency: "11.4 ms",
    resolution: "3840x2160 (4K RTSP)",
    detections: [
      { label: "Safety Helmet", conf: "99.4%", status: "safe", box: "top-[18%] left-[28%] w-[24%] h-[20%]" },
      { label: "Hi-Vis Vest", conf: "98.7%", status: "safe", box: "top-[38%] left-[24%] w-[32%] h-[36%]" },
      { label: "Steel-Toe Boots", conf: "96.2%", status: "safe", box: "top-[74%] left-[30%] w-[22%] h-[18%]" },
      { label: "Exclusion Zone", conf: "0.00s Breach", status: "alert", box: "top-[55%] right-[8%] w-[28%] h-[35%]" },
    ],
    statusMessage: "Active Site: Plant Bay #4 • All PPE Compliant • 1 Caution Zone Monitored",
    telemetry: {
      personsTracked: 14,
      violationsToday: 0,
      complianceScore: "99.8%",
      activeSensors: "8 IP Cameras"
    }
  },
  {
    id: "qc",
    name: "Manufacturing QC & Defect",
    icon: Factory,
    accent: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    fps: "120.0 FPS",
    latency: "8.2 ms",
    resolution: "Conveyor Line A-03",
    detections: [
      { label: "Bearing Assembly", conf: "Pass (±0.02mm)", status: "safe", box: "top-[25%] left-[22%] w-[28%] h-[40%]" },
      { label: "Surface Anomaly", conf: "0.14mm Scratch", status: "alert", box: "top-[38%] right-[22%] w-[24%] h-[24%]" },
      { label: "QR / Serial OCR", conf: "SN: ISV-884920", status: "safe", box: "top-[68%] left-[38%] w-[26%] h-[16%]" },
    ],
    statusMessage: "Conveyor Speed: 1.4 m/s • 140 parts/min • Defect Rate: 0.03% (Target <0.1%)",
    telemetry: {
      personsTracked: 1420,
      violationsToday: 4,
      complianceScore: "99.97%",
      activeSensors: "High-Speed GigE"
    }
  },
  {
    id: "perimeter",
    name: "Perimeter & Threat Radar",
    icon: ShieldCheck,
    accent: "from-rose-500 to-amber-600",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    fps: "30.0 FPS (IR Night)",
    latency: "14.1 ms",
    resolution: "Thermal + Optical PTZ",
    detections: [
      { label: "Fence Line Tripwire", conf: "Armed", status: "safe", box: "top-[15%] left-[10%] w-[80%] h-[12%]" },
      { label: "Unidentified Object", conf: "Loitering 42s", status: "alert", box: "top-[32%] left-[45%] w-[22%] h-[42%]" },
      { label: "Vehicle Telemetry", conf: "DL-01-AB-9921", status: "safe", box: "top-[58%] right-[12%] w-[30%] h-[28%]" },
    ],
    statusMessage: "Perimeter Sector 08 • Virtual Tripwire Intact • Auto-PTZ Tracking Engaged",
    telemetry: {
      personsTracked: 3,
      violationsToday: 1,
      complianceScore: "100%",
      activeSensors: "Thermal + IR Dome"
    }
  },
  {
    id: "retail",
    name: "Retail Footfall & Heatmaps",
    icon: BarChart3,
    accent: "from-purple-500 to-indigo-600",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    fps: "30.0 FPS",
    latency: "12.0 ms",
    resolution: "Ceiling Fisheye Array",
    detections: [
      { label: "Hot Zone: Display #1", conf: "Dwell 4m 18s", status: "safe", box: "top-[20%] left-[15%] w-[32%] h-[35%]" },
      { label: "Checkout Queue", conf: "3 persons (1m 10s wait)", status: "safe", box: "top-[28%] right-[18%] w-[28%] h-[40%]" },
      { label: "Aisle Density", conf: "Optimal (42%)", status: "safe", box: "top-[65%] left-[30%] w-[40%] h-[24%]" },
    ],
    statusMessage: "Live Occupancy: 86 / 150 (57%) • Peak Hours: 17:00 - 19:30 • No Bottlenecks",
    telemetry: {
      personsTracked: 482,
      violationsToday: 0,
      complianceScore: "98.4%",
      activeSensors: "Wide Angle Cam"
    }
  }
];

/* ─────────────────────────────────────────────────────────
   2. Core Vision AI Modules Data
   ───────────────────────────────────────────────────────── */
const NETHRA_MODULES = [
  {
    id: "module-ppe",
    title: "Autonomous Workplace Safety & PPE Guard",
    tagline: "Zero-Fatality Industrial Vision Engine",
    icon: HardHat,
    color: "from-cyan-500 to-blue-600",
    borderGlow: "group-hover:border-cyan-500/50",
    highlight: "<12ms Edge Alert",
    description:
      "Detect non-compliance the split second it happens. Isarva Nethra autonomously monitors plant floors, construction zones, and logistics hubs for helmets, high-visibility vests, protective eyewear, harnesses, and unauthorized danger zone intrusions.",
    capabilities: [
      "Real-time Safety Helmet & Visor Detection",
      "High-Visibility Vest & Body Harness Verification",
      "Hazardous Machinery Exclusion Zone Tripwires",
      "Worker Slip, Trip & Fall (Man-Down) Emergency Triggers",
      "Instant Siren / PA Broadcast / WhatsApp Supervisor Alerts",
      "Automated Daily HSE Compliance Audit Reports"
    ],
    idealFor: "Manufacturing plants, steel mills, logistics warehouses, oil & gas terminals, construction sites"
  },
  {
    id: "module-qc",
    title: "High-Speed Manufacturing QC & Defect Vision",
    tagline: "Sub-Millimeter Anomaly & Assembly Inspection",
    icon: Factory,
    color: "from-emerald-500 to-teal-600",
    borderGlow: "group-hover:border-emerald-500/50",
    highlight: "120+ FPS GigE Support",
    description:
      "Eliminate human visual fatigue on fast assembly lines. Nethra's neural surface inspection scans parts on active conveyors, catching microscopic cracks, dimensional misalignments, missing components, and labeling errors in milliseconds.",
    capabilities: [
      "Micro-Scratch, Dent & Surface Anomaly Recognition",
      "Assembly Verification & Missing Component Check",
      "Barcode, DataMatrix & OCR Serial Number Validation",
      "Packaging Seal, Cap & Liquid Level Inspection",
      "Pneumatic Defect Rejection Signal via Modbus/PLC",
      "Real-time OEE & Defect Pareto Analytics Dashboard"
    ],
    idealFor: "Automotive assembly, FMCG packaging, electronics SMT, pharmaceuticals, metal fabrication"
  },
  {
    id: "module-perimeter",
    title: "Intelligent Perimeter & Critical Threat Radar",
    tagline: "AI-Augmented Physical Security & Intrusion Prevention",
    icon: ShieldCheck,
    color: "from-rose-500 to-red-600",
    borderGlow: "group-hover:border-rose-500/50",
    highlight: "Zero False Positives",
    description:
      "Upgrade dumb CCTV into proactive tripwire defenses. Filter out animals, swaying branches, and weather shadows with 99.6% classification accuracy, tracking suspects across multi-camera handoffs day and night.",
    capabilities: [
      "Virtual Multi-Zone Tripwire & Fence Breach Detection",
      "Suspicious Loitering & Directional Vector Tracking",
      "Unattended Baggage & Object Left-Behind Alerts",
      "PTZ Auto-Slew & Track Target across Camera Network",
      "Thermal & Low-Light Night Vision Image Enhancement",
      "Two-Way Audio Deterrence & Strobe Light Activation"
    ],
    idealFor: "Corporate campuses, data centers, substations, warehouses, gated facilities, airports"
  },
  {
    id: "module-footfall",
    title: "Commercial Footfall & Spatial Heatmaps",
    tagline: "Transform Physical Spaces into Conversion Funnels",
    icon: BarChart3,
    color: "from-purple-500 to-indigo-600",
    borderGlow: "group-hover:border-purple-500/50",
    highlight: "99.2% Accuracy",
    description:
      "Understand how visitors move, browse, and interact. Nethra extracts privacy-safe spatial telemetry — dwell times, aisle traffic density, checkout queue bottlenecks, and peak flow patterns — without storing biometric faces.",
    capabilities: [
      "Bi-Directional People Counting & Entry/Exit Auditing",
      "Dwell Time & Product Interaction Heatmaps",
      "Real-time Checkout Queue Length & Wait Time Warnings",
      "Multi-Floor Occupancy & Capacity Limiter",
      "Store Layout Optimization & A/B Merchandise Testing",
      "Point-of-Sale (POS) Conversion Rate Correlation"
    ],
    idealFor: "Retail stores, shopping malls, supermarkets, museums, transit hubs, experience centers"
  },
  {
    id: "module-anpr",
    title: "ANPR & Vehicle Fleet Intelligence",
    tagline: "Automated Boom Barrier & Gate Dispatch Telemetry",
    icon: Truck,
    color: "from-amber-500 to-orange-600",
    borderGlow: "group-hover:border-amber-500/50",
    highlight: "High-Speed OCR",
    description:
      "Accelerate yard management and parking automation. Read license plates in all weather conditions, log vehicle turnaround time, automate barrier opening for authorized fleets, and flag blacklisted plates instantly.",
    capabilities: [
      "High-Accuracy License Plate Recognition (Standard & Commercial)",
      "Vehicle Make, Model & Color Classification",
      "Automated Boom Barrier Relay & RFID Handshake",
      "Loading Bay Turnaround Time & Dwell Telemetry",
      "Overstay & Illegal Parking Real-Time Alerts",
      "Integration with Weighbridge & Dispatcher Panels"
    ],
    idealFor: "Logistics parks, factory loading docks, toll plazas, parking lots, residential townships"
  },
  {
    id: "module-biometrics",
    title: "Facial Intelligence & Touchless Access",
    tagline: "Enterprise Biometric Recognition with DPDP Privacy",
    icon: Users,
    color: "from-blue-500 to-cyan-600",
    borderGlow: "group-hover:border-blue-500/50",
    highlight: "DPDP / GDPR Compliant",
    description:
      "Modernize staff attendance and visitor security. Nethra verifies authorized personnel on the move without stopping, handles mask/glasses variations, and synchronizes real-time logs directly with Isarva HRMS.",
    capabilities: [
      "Walk-Through Multi-Face Authentication (0.2s Match)",
      "Liveness Detection & Anti-Spoofing (Photo/Screen Rejection)",
      "VIP Guest Welcome & Blacklisted Person Alerts",
      "Mask, Beard & Eyewear Tolerant Deep Feature Matching",
      "Native Synchronized Punch with Isarva HRMS & Attendance",
      "Encrypted In-Memory Tokenization (No Raw Photos Kept)"
    ],
    idealFor: "Corporate HQs, hospitals, educational institutions, government facilities, secure labs"
  }
];

/* ─────────────────────────────────────────────────────────
   3. Launch Roadmap Data
   ───────────────────────────────────────────────────────── */
const ROADMAP_STEPS = [
  {
    phase: "Phase 01",
    status: "Completed",
    badge: "Done",
    badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    title: "Neural Engine & Edge Core",
    items: [
      "TensorRT edge acceleration runtime (<15ms inference)",
      "Universal RTSP / ONVIF camera video ingestion pipeline",
      "Synthetic & real-world training datasets for PPE & QC",
      "Local edge appliance hardware qualification (Jetson / x86)"
    ]
  },
  {
    phase: "Phase 02",
    status: "Active Testing",
    badge: "In Progress",
    badgeClass: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    title: "Industrial Alpha Pilots",
    items: [
      "Live deployment in 3 manufacturing plants & 2 warehouses",
      "High-speed conveyor defect scanning validation (120 FPS)",
      "Modbus & PLC hardware relay triggers for safety line halts",
      "WhatsApp & Telegram instant video snippet alert bots"
    ]
  },
  {
    phase: "Phase 03",
    status: "Upcoming",
    badge: "Q3 2026",
    badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    title: "Public Beta & Cloud Fleet Hub",
    items: [
      "Multi-site centralized cloud fleet management portal",
      "Self-service model fine-tuning & custom class training",
      "Pre-packaged plug-and-play Nethra Edge Box appliance",
      "Public Developer REST & WebSocket API SDK launch"
    ]
  },
  {
    phase: "Phase 04",
    status: "Vision",
    badge: "Q4 2026",
    badgeClass: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    title: "Autonomous Enterprise Vision Ecosystem",
    items: [
      "Generative Vision AI for natural language video querying",
      "Cross-site federated learning for continuous model self-tuning",
      "Turnkey marketplace of 50+ domain-specific vision plugins",
      "Global compliance certification (ISO 27001, SOC2, DPDP)"
    ]
  }
];

/* ─────────────────────────────────────────────────────────
   4. FAQs
   ───────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is Isarva Nethra?",
    a: "Isarva Nethra is our next-generation enterprise Computer Vision and Video Intelligence platform. It connects to your existing IP cameras, CCTV streams, and industrial sensors to perform real-time, AI-driven safety monitoring (PPE detection), manufacturing quality inspection, perimeter defense, and footfall analytics — with lightning-fast edge processing."
  },
  {
    q: "Do I need to replace my existing CCTV or IP cameras?",
    a: "No! Isarva Nethra is 100% camera-agnostic. It works seamlessly with any standard IP camera, RTSP stream, ONVIF-compatible camera, DVR/NVR, or high-speed industrial GigE camera already installed across your facilities."
  },
  {
    q: "Does Isarva Nethra require high internet bandwidth or cloud streaming?",
    a: "No. Isarva Nethra is engineered as an Edge-First architecture. Video frames are processed locally inside your facility on a dedicated compact Nethra Edge appliance or local server. Only compressed metadata, event logs, and alert snapshots are synchronized to the cloud — ensuring zero latency, maximum privacy, and virtually zero bandwidth usage."
  },
  {
    q: "How does Isarva Nethra protect privacy and comply with data protection laws?",
    a: "Isarva Nethra is designed from the ground up for DPDP (Digital Personal Data Protection Act) and GDPR compliance. Video streams are analyzed in volatile RAM and discarded immediately. Biometrics are tokenized as mathematical feature vectors, and anonymization masks can be automatically applied to non-relevant bystanders."
  },
  {
    q: "How quickly can alerts be triggered to our team when a hazard or breach occurs?",
    a: "Alerts are evaluated in under 15 milliseconds on the edge. Notifications can be dispatched instantaneously via WhatsApp, SMS, push notifications, email, on-premise sirens/beacons, or automated relay halts sent to industrial PLCs and SCADA systems."
  },
  {
    q: "When will Isarva Nethra be publicly released and how can I get early access?",
    a: "We are currently conducting private industrial pilots. The Public Beta is scheduled for release in Q3 2026. You can submit your application on this page to join our VIP Early Access program, schedule an advance architecture briefing, and receive priority pilot pricing."
  }
];

/* ─────────────────────────────────────────────────────────
   5. Main Component
   ───────────────────────────────────────────────────────── */
export default function ProductDetailPremiumNethra({ product, relatedProducts = [], allProducts = [] }) {
  const [selectedHudMode, setSelectedHudMode] = useState(HUD_MODES[0]);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItemName, setModalItemName] = useState("Isarva Nethra Early Beta Access");

  // ROI Calculator state
  const [cameraCount, setCameraCount] = useState(16);
  const [shiftsCount, setShiftsCount] = useState(2);

  // VIP Form State
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistOrg, setWaitlistOrg] = useState("");
  const [waitlistModule, setWaitlistModule] = useState("Industrial Safety & PPE");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 128,
    hours: 14,
    minutes: 36,
    seconds: 48
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 128);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = Math.max(0, targetDate - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const openContactModal = (item = "Isarva Nethra Early Beta Access") => {
    setModalItemName(item);
    setIsModalOpen(true);
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (waitlistEmail.trim()) {
      setWaitlistSubmitted(true);
      setTimeout(() => {
        openContactModal(`Isarva Nethra VIP Access: ${waitlistOrg || 'Enterprise'} (${waitlistModule})`);
      }, 800);
    }
  };

  // ROI calculations
  const hoursSavedPerMonth = Math.round(cameraCount * shiftsCount * 14.5);
  const estimatedCostSaving = (hoursSavedPerMonth * 450).toLocaleString("en-IN");
  const incidentReductionPct = 94;

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* ─────────────────────────────────────────────────────────
          Background Grid & Ambient Lighting
          ───────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }} 
        />
        {/* Luminous Glow orbs */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-cyan-600/20 via-blue-600/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[35%] -left-40 w-[500px] h-[500px] bg-violet-600/10 blur-[130px] rounded-full" />
        <div className="absolute top-[65%] -right-40 w-[500px] h-[500px] bg-emerald-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10">

        {/* ─────────────────────────────────────────────────────────
            1. HERO SECTION (Carefully balanced text width & measure)
            ───────────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Coming Soon & Status Pill */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-950/50">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-300 uppercase">
                  Coming Soon • Private Beta Launch Q3 2026
                </span>
              </div>
            </div>

            {/* Main Headline (Clean typography, balanced width) */}
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                See Everything. <br />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  Automate Intelligently.
                </span>
              </h1>
              
              {/* Product Subtitle with optimal reading measure (max-w-2xl) */}
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10">
                <strong className="text-white font-semibold">Isarva Nethra</strong> is the next-generation AI Computer Vision &amp; Real-Time Video Intelligence platform. Transform standard CCTV feeds into autonomous safety, sub-millimeter QC, and perimeter defense on the edge.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button
                  onClick={() => openContactModal("Isarva Nethra - Priority Beta Access")}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Request Priority Beta Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#interactive-hud"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-semibold text-base backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Explore Interactive HUD</span>
                </a>
              </div>

              {/* Countdown Ticker Box */}
              <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl mb-16">
                <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>Countdown to Public Beta Release</span>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/50">
                    Target: Sep 2026
                  </span>
                </div>
                
                <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="block text-2xl sm:text-4xl font-extrabold font-mono text-white">
                      {String(timeLeft.days).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider">Days</span>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="block text-2xl sm:text-4xl font-extrabold font-mono text-white">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider">Hours</span>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="block text-2xl sm:text-4xl font-extrabold font-mono text-white">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider">Mins</span>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="block text-2xl sm:text-4xl font-extrabold font-mono text-cyan-400 animate-pulse">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider">Secs</span>
                  </div>
                </div>
              </div>

            </div>

            {/* ─────────────────────────────────────────────────────────
                Interactive Vision AI HUD Preview (Live Simulation)
                ───────────────────────────────────────────────────────── */}
            <div id="interactive-hud" className="max-w-5xl mx-auto">
              
              {/* HUD Header Bar */}
              <div className="rounded-t-2xl bg-slate-900 border border-slate-800 p-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="h-4 w-px bg-slate-700" />
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <Camera className="w-3.5 h-3.5 text-cyan-400" />
                    <span>ISARVA NETHRA VISION ENGINE v2.6.4</span>
                  </div>
                </div>

                {/* Mode Selector Tabs */}
                <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
                  {HUD_MODES.map((mode) => {
                    const IconComp = mode.icon;
                    const isActive = selectedHudMode.id === mode.id;
                    return (
                      <button
                        key={mode.id}
                        onClick={() => setSelectedHudMode(mode)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                          isActive
                            ? "bg-slate-800 text-cyan-300 shadow-sm border border-cyan-500/30"
                            : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                        }`}
                      >
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{mode.name.split(" ")[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Viewport Screen */}
              <div className="relative aspect-video w-full bg-[#050811] border-x border-b border-slate-800 rounded-b-2xl overflow-hidden shadow-2xl">
                
                {/* Visual Viewfinder Reticle & Grid Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                  
                  {/* Center Crosshair */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-cyan-400/40" />
                    <div className="absolute top-0 left-1/2 w-px h-full bg-cyan-400/40" />
                    <div className="absolute inset-2 border border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '12s' }} />
                  </div>

                  {/* Corner brackets */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400/80" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400/80" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400/80" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400/80" />
                </div>

                {/* Dynamic AI Bounding Boxes */}
                {selectedHudMode.detections.map((det, idx) => {
                  const isAlert = det.status === "alert";
                  return (
                    <div
                      key={idx}
                      className={`absolute ${det.box} border-2 rounded-md transition-all duration-500 animate-pulse ${
                        isAlert
                          ? "border-rose-500 bg-rose-500/10 shadow-lg shadow-rose-500/20"
                          : "border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20"
                      }`}
                    >
                      {/* Detection Tag */}
                      <div
                        className={`absolute -top-6 left-0 px-2 py-0.5 rounded text-[10px] font-mono font-bold whitespace-nowrap flex items-center gap-1 ${
                          isAlert ? "bg-rose-600 text-white" : "bg-cyan-500 text-slate-950"
                        }`}
                      >
                        <span>{det.label}</span>
                        <span className="opacity-90 font-normal">[{det.conf}]</span>
                      </div>
                    </div>
                  );
                })}

                {/* Top HUD Telemetry Overlay */}
                <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
                    <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span>LIVE STREAM: <strong className="text-white">{selectedHudMode.resolution}</strong></span>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
                    <span>FPS: <strong className="text-cyan-400">{selectedHudMode.fps}</strong></span>
                    <span className="text-slate-700">|</span>
                    <span>LATENCY: <strong className="text-emerald-400">{selectedHudMode.latency}</strong></span>
                  </div>
                </div>

                {/* Bottom HUD Status Strip */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Activity className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="font-mono text-slate-200">{selectedHudMode.statusMessage}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
                      <span>Objects Tracked: <strong className="text-white">{selectedHudMode.telemetry.personsTracked}</strong></span>
                      <span>Accuracy: <strong className="text-emerald-400">{selectedHudMode.telemetry.complianceScore}</strong></span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            2. EXECUTIVE HIGHLIGHTS / SPECS STRIP
            ───────────────────────────────────────────────────────── */}
        <section className="border-y border-slate-800/80 bg-slate-950/50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono mb-1">&lt;15ms</span>
                <span className="text-xs sm:text-sm font-medium text-slate-300">Edge Inference Latency</span>
                <p className="text-xs text-slate-400 mt-1 max-w-[200px] mx-auto">Sub-second threat response directly on local appliance</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mb-1">99.7%</span>
                <span className="text-xs sm:text-sm font-medium text-slate-300">Detection Accuracy</span>
                <p className="text-xs text-slate-400 mt-1 max-w-[200px] mx-auto">Trained on millions of industrial &amp; safety datasets</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold text-violet-400 font-mono mb-1">100%</span>
                <span className="text-xs sm:text-sm font-medium text-slate-300">Camera Agnostic</span>
                <p className="text-xs text-slate-400 mt-1 max-w-[200px] mx-auto">Works with all existing IP, CCTV, ONVIF &amp; RTSP streams</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono mb-1">0 GB</span>
                <span className="text-xs sm:text-sm font-medium text-slate-300">Cloud Bandwidth Strain</span>
                <p className="text-xs text-slate-400 mt-1 max-w-[200px] mx-auto">Zero continuous cloud video upload required</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            3. CORE VISION AI MODULES (Rich Cards, Clean Text Width)
            ───────────────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Heading with controlled measure */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>End-to-End Visual Intelligence</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Six Specialized AI Engines. <br className="hidden sm:inline" />
                One Unified Intelligence Hub.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Isarva Nethra unifies high-performance computer vision modules into a single, modular dashboard — designed for industrial safety, automated factory floors, logistics, and retail spaces.
              </p>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {NETHRA_MODULES.map((module) => {
                const IconComp = module.icon;
                return (
                  <div
                    key={module.id}
                    className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 hover:-translate-y-1 backdrop-blur-sm"
                  >
                    <div>
                      {/* Top Icon & Tag */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white shadow-lg`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                          {module.highlight}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                        {module.tagline}
                      </p>

                      {/* Description (controlled measure) */}
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {module.description}
                      </p>

                      {/* Bullet Capabilities */}
                      <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800">
                        {module.capabilities.slice(0, 4).map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Ideal For */}
                    <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-400">
                      <strong className="text-slate-300 font-medium">Ideal For: </strong>
                      <span>{module.idealFor}</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            4. ARCHITECTURE & PRIVACY-FIRST ADVANTAGE
            ───────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/70 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Descriptive text with high readability */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Edge-Native Architecture</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  Zero Cloud Lag. <br />
                  Total Data Sovereignty.
                </h2>
                
                <div className="space-y-4 text-base text-slate-300 leading-relaxed">
                  <p>
                    Traditional cloud-based video analytics require streaming heavy 4K camera feeds to remote data centers — resulting in staggering bandwidth bills, internet dependency, and unacceptable latency for safety-critical hazards.
                  </p>
                  <p>
                    <strong className="text-white font-semibold">Isarva Nethra executes on-premise at the edge.</strong> High-speed neural networks process frames directly on compact edge appliances. Streams never leave your local network without your explicit authorization.
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span>&lt;15ms Trigger</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">Direct PLC/Relay machine stop signals without internet delays.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                      <Lock className="w-4 h-4 text-emerald-400" />
                      <span>DPDP &amp; GDPR Ready</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">In-memory frame processing with automatic facial anonymization.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                      <Server className="w-4 h-4 text-violet-400" />
                      <span>Offline Survivability</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">Guaranteed 24/7 autonomous monitoring even during complete ISP outages.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                      <RefreshCw className="w-4 h-4 text-amber-400" />
                      <span>OTA Model Updates</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">Seamlessly deploy custom new detection classes from centralized hub.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Pipeline Architecture Diagram */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center justify-between">
                  <span>SYSTEM PIPELINE FLOW</span>
                  <span className="text-[10px] text-cyan-400 font-mono">END-TO-END &lt;15MS</span>
                </h3>

                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Step 1 */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/60 flex items-center justify-center flex-shrink-0">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-white font-bold block text-sm">1. Existing Camera Streams</span>
                      <span className="text-slate-400 text-[11px]">RTSP / ONVIF / GigE Vision / IP CCTV / Thermal Cameras</span>
                    </div>
                  </div>

                  <div className="flex justify-center text-slate-600">
                    <div className="w-0.5 h-4 bg-slate-700" />
                  </div>

                  {/* Step 2 */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/40 flex items-center gap-4 shadow-lg shadow-cyan-500/5">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500 text-slate-950 flex items-center justify-center flex-shrink-0 font-bold">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-300 font-bold text-sm">2. Nethra Edge Neural Engine</span>
                        <span className="text-[10px] bg-cyan-950 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-800">TensorRT</span>
                      </div>
                      <span className="text-slate-300 text-[11px]">YOLOv10 / ResNet / Custom Anomaly Detectors • &lt;15ms</span>
                    </div>
                  </div>

                  <div className="flex justify-center text-slate-600">
                    <div className="w-0.5 h-4 bg-slate-700" />
                  </div>

                  {/* Step 3 */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center justify-center flex-shrink-0">
                      <BellRing className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-white font-bold block text-sm">3. Instant Multi-Channel Alerts</span>
                      <span className="text-slate-400 text-[11px]">WhatsApp Bot, Push Siren, PLC Tripwire, Isarva HRMS / ERP Sync</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            5. INTERACTIVE ROI & AUDIT HOURS CALCULATOR
            ───────────────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4 border border-slate-700">
                <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                <span>Interactive Impact Estimation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Calculate Your Facility&apos;s Projected ROI
              </h2>
              <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Estimate manual audit hours saved, incident prevention rates, and operational savings by automating vision telemetry.
              </p>
            </div>

            {/* Calculator Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-8 border-b border-slate-800">
                
                {/* Camera count slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-200">Number of Cameras / Streams</label>
                    <span className="font-mono text-cyan-400 font-bold text-lg">{cameraCount} Cameras</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="120"
                    step="4"
                    value={cameraCount}
                    onChange={(e) => setCameraCount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                    <span>4 (Small Bay)</span>
                    <span>60 (Plant Floor)</span>
                    <span>120+ (Enterprise)</span>
                  </div>
                </div>

                {/* Shift Selector */}
                <div>
                  <label className="text-sm font-semibold text-slate-200 block mb-2">Daily Operational Shifts</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setShiftsCount(s)}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          shiftsCount === s
                            ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                            : "bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        {s} {s === 1 ? "Shift" : "Shifts"}
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    {shiftsCount === 3 ? "24/7 Continuous Operation" : `${shiftsCount * 8} Hours / Day`}
                  </span>
                </div>

              </div>

              {/* Outputs Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-center">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Monthly Audit Hours Saved
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                    {hoursSavedPerMonth.toLocaleString()} hrs
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Est. Annual Savings
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                    ₹{estimatedCostSaving}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Hazard Alert Time
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-violet-400 font-mono">
                    &lt; 2 Secs
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => openContactModal(`Isarva Nethra ROI Review (${cameraCount} Cams, ${shiftsCount} Shifts)`)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 cursor-pointer"
                >
                  <span>Request Custom Site Audit &amp; Hardware Spec Sheet</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            6. LAUNCH ROADMAP & MILESTONES
            ───────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/60 border-y border-slate-800">
          <div className="max-w-5xl mx-auto">
            
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4 border border-slate-700">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Development Timeline</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Release Roadmap to General Availability
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Follow our milestone progression from edge hardware qualification to global public beta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ROADMAP_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono font-bold text-slate-400">{step.phase}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${step.badgeClass}`}>
                        {step.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-4">{step.title}</h3>

                    <ul className="space-y-2 text-xs text-slate-300">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-cyan-400 mt-0.5">•</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            7. VIP EARLY ACCESS WAITLIST SIGNUP FORM
            ───────────────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>VIP Priority Queue</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  Be Among the First to Deploy Isarva Nethra
                </h2>

                <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-xl">
                  Early beta partners receive dedicated solution architects, zero hardware integration fees, and locked-in lifetime early adopter pricing.
                </p>

                {waitlistSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-white mb-1">You&apos;re on the VIP Priority List!</h3>
                    <p className="text-sm text-emerald-200">
                      Our engineering lead will reach out to schedule an advance architecture walkthrough.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={waitlistEmail}
                          onChange={(e) => setWaitlistEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Company / Facility Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Apex Manufacturing"
                          value={waitlistOrg}
                          onChange={(e) => setWaitlistOrg(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Primary Target Vision Use Case
                      </label>
                      <select
                        value={waitlistModule}
                        onChange={(e) => setWaitlistModule(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="Industrial Safety & PPE">Industrial Safety &amp; PPE Compliance</option>
                        <option value="Manufacturing QC & Defect">Manufacturing QC &amp; Conveyor Defect Inspection</option>
                        <option value="Perimeter & Threat Radar">Perimeter Security &amp; Intrusion Defense</option>
                        <option value="Retail Footfall & Heatmaps">Retail Footfall &amp; Heatmaps</option>
                        <option value="ANPR & Vehicle Fleet">ANPR &amp; Vehicle Gate Logistics</option>
                        <option value="Custom Vision Model">Custom Model Training / Edge Pipeline</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 mt-6"
                    >
                      <Sparkles className="w-5 h-5" />
                      <span>Join VIP Beta Waitlist</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[11px] text-center text-slate-400 pt-2">
                      🔒 DPDP &amp; GDPR compliant. No spam. Unsubscribe anytime.
                    </p>
                  </form>
                )}

              </div>

            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            8. FREQUENTLY ASKED QUESTIONS (Accordion)
            ───────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/40 border-t border-slate-800">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4 border border-slate-700">
                <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Common Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
                Everything you need to know about Isarva Nethra, camera compatibility, and early access.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-cyan-500/50 bg-slate-900/90 shadow-lg shadow-cyan-950/40"
                        : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-white text-base sm:text-lg leading-snug">
                        {faq.q}
                      </span>
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isOpen ? "bg-cyan-500 text-slate-950 rotate-90" : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-slate-300 leading-relaxed text-sm sm:text-base border-t border-slate-800/80 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            9. FINAL HIGH-IMPACT CALL TO ACTION
            ───────────────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-cyan-500/10">
              <Eye className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Empower Your Facility With <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Autonomous Vision AI
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
              Connect your existing cameras to sub-second safety alerts, automatic conveyor defect rejection, and perimeter tripwires. Reserve your spot in our private Q3 2026 Beta.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openContactModal("Isarva Nethra - Priority Pilot Reservation")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/25 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5" />
                <span>Reserve Pilot Spot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Talk with Solutions Architect</span>
              </Link>
            </div>

          </div>
        </section>

      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem={modalItemName}
      />

    </div>
  );
}
