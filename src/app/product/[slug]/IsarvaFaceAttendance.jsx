"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "../../components/AppLink";
import ContactFormModal from "../../components/ContactFormModal";
import { productsData } from "../../lib/data/products-data";

/* ─────────────────────────────────────────────────────────────
   Inline Lucide-Compatible SVG Icons
  ───────────────────────────────────────────────────────────────*/
function IconScanFace() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" /><path d="M9 9h.01" /><path d="M15 9h.01" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconShieldCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconShieldAlert() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function IconSmartphone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function IconCpu() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" />
      <path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconUserCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

function IconWifiOff() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" x2="22" y1="2" y2="22" /><path d="M12 20h.01" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" /><path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
      <path d="M19 12.859a10 10 0 0 0-2.007-1.523" /><path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
      <path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
    </svg>
  );
}

function IconActivity() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconX() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function IconExternalLink() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Product Images Data
  ───────────────────────────────────────────────────────────────*/
const APP_SCREENS = [
  {
    id: "scanner",
    title: "Biometric Scanner",
    desc: "Real-time AI facial scan HUD with active blink detection and sub-200ms latency.",
    src: "/products/face-attendence/2. Biometric Attendance Scanner - ISARVA.webp",
    highlights: [
      "Sub-200ms biological eye-blink & EAR depth verification",
      "Real-time HUD target alignment with ambient lux auto-calibration",
      "FaceNet 128-dimensional embedding vector match against local database",
    ],
  },
  {
    id: "dashboard",
    title: "Home Dashboard",
    desc: "Central kiosk view displaying active staff, sync queues, and instant punch history.",
    src: "/products/face-attendence/1. Home Dashboard - ISARVA.webp",
    highlights: [
      "Real-time counter for on-site staff headcount and pending sync logs",
      "1-Tap quick actions for direct attendance, registration, and kiosk config",
      "Live recent punch log with instant time-stamp and gate terminal ID",
    ],
  },
  {
    id: "directory",
    title: "Face Directory",
    desc: "1-Click staff biometric registration, face vector enrollments, and department filters.",
    src: "/products/face-attendence/3. Face Registration Directory - ISARVA.webp",
    highlights: [
      "1-Click employee biometric enrollment & photo capture workflow",
      "Fast department search, employee ID indexing, and status badges",
      "Secure encrypted face vectors stored locally for instant offline recognition",
    ],
  },
  {
    id: "sync",
    title: "Cloud Sync Manager",
    desc: "Offline-first sync engine with tokenized cloud bridge to attendance.isarva.in.",
    src: "/products/face-attendence/4. Cloud Sync Manager - ISARVA.webp",
    highlights: [
      "Zero punch data loss with resilient local SQLite punch queue",
      "Encrypted X-Sync-Token authenticated push to attendance.isarva.in",
      "Real-time bandwidth diagnostics and automated background retry",
    ],
  },
  {
    id: "settings",
    title: "Kiosk & AI Settings",
    desc: "Customizable punch modes, match strictness, and TFLite FaceNet quantized model controls.",
    src: "/products/face-attendence/5. Kiosk & AI Settings - ISARVA.webp",
    highlights: [
      "Configurable Single-Punch and Multiple-Punch policy rules",
      "Tunable Euclidean distance threshold (0.65 strictness calibration)",
      "Hardware-accelerated INT8 quantized FaceNet model for high battery efficiency",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   FAQ Data (Exact Content)
  ───────────────────────────────────────────────────────────────*/
const FAQ_ITEMS = [
  {
    q: "How does eye blinking recognition work?",
    a: "The app analyzes micro-motions of the eyelids and eye aspect ratio (EAR) during the face scan to verify natural biological blinking. A static photograph or pre-recorded video held up to the camera will not pass.",
  },
  {
    q: "How does the app sync with Isarva HRMS?",
    a: "Punches, working hours, and timestamps sync directly with attendance.isarva.in in real time using secure tokenized APIs (X-Sync-Token). When offline, punches are queued securely and pushed immediately upon reconnection.",
  },
  {
    q: "Can employees punch in for each other?",
    a: "No. With 99.2% accuracy on FaceNet 128-d embeddings and active anti-spoofing verification, proxy attendance and buddy punching are completely eliminated.",
  },
  {
    q: "How are shifts and leaves tracked?",
    a: "The system automatically checks the active roster assigned in Isarva HRMS. It evaluates grace times, early departures, overtime hours, and approved leaves without requiring manual spreadsheet intervention.",
  },
];

/* ─────────────────────────────────────────────────────────────
   Main Component
  ───────────────────────────────────────────────────────────────*/
export default function IsarvaFaceAttendance({ product, allProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const tabRefs = useRef([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const activeTabEl = tabRefs.current[activeScreenIndex];
    if (activeTabEl) {
      activeTabEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeScreenIndex]);

  const toggleFaq = (i) => setOpenFaqIndex((prev) => (prev === i ? null : i));

  /* Enterprise Architecture 6 Cards */
  const enterpriseCards = [
    {
      icon: <IconSmartphone />,
      title: "Any Android Device",
      desc: "Mount any standard Android mobile phone or tablet on a wall bracket at the entrance. Zero investment in proprietary biometric machines.",
      tag: "Hardware Agnostic",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: <IconEye />,
      title: "Eye-Blink AI Engine",
      desc: "High-accuracy FaceNet 128-d recognition combined with active eye-blinking detection prevents proxy attendance entirely.",
      tag: "Biometric AI",
      gradient: "from-indigo-600 to-blue-600",
    },
    {
      icon: <IconCalendar />,
      title: "Shift & Roster Sync",
      desc: "Automatic assignment of rotational shifts, overtime thresholds, and weekly off schedules synced directly from Isarva HRMS.",
      tag: "HRMS Automation",
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      icon: <IconUserCheck />,
      title: "Leave Tracking & Approvals",
      desc: "Full sync with employee leave requests. Authorized leaves automatically reflect on attendance records with zero manual cross-checking.",
      tag: "Real-Time Approvals",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: <IconWifiOff />,
      title: "Offline-First Resilience",
      desc: "Punches are recorded locally when internet is unavailable and automatically uploaded to Isarva HRMS the moment connection resumes.",
      tag: "Zero Data Loss",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: <IconActivity />,
      title: "Real-Time Web Feed",
      desc: "Operations managers view live gate check-ins, department headcounts, and punch photos directly on the Isarva Web Dashboard.",
      tag: "Live Command Center",
      gradient: "from-rose-500 to-pink-600",
    },
  ];

  const trendingSolutions = [
    "AI-Based Facial Recognition",
    <>Facial Recognition <br />Tools</>,
    "Eye Blink Liveness Detection",
    "Anti-Spoofing Attendance Software",
    "Android Biometric Face Kiosk",
    "HRMS Face Attendance Sync",
    "Automated Payroll Attendance",
    "Offline Biometric Attendance",
    "Touchless Face Attendance Machine",
    "Zero Buddy Punching Solution",
  ];

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .shimmer-title-blue {
          background: linear-gradient(90deg, #2563eb, #0284c7, #4f46e5, #2563eb);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .hero-bg-product {
          background: linear-gradient(135deg, #eff6ff 0%, #f0fdfa 35%, #f8fafc 70%, #ffffff 100%);
        }
        .hero-mesh-product {
          background-image:
            radial-gradient(circle at 20% 20%, rgba(37,99,235,0.10) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(2,132,199,0.08) 0%, transparent 50%);
        }
        .stat-card {
          background: white;
          border: 1px solid rgba(37,99,235,0.15);
          box-shadow: 0 4px 24px rgba(37,99,235,0.06);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(37,99,235,0.12);
        }
        .tab-btn {
          transition: all 0.3s;
          border: 2px solid transparent;
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          box-shadow: 0 8px 24px rgba(37,99,235,0.35);
        }
        .tab-btn:not(.active) {
          background: white;
          border-color: #e5e7eb;
          color: #4b5563;
        }
        .tab-btn:not(.active):hover {
          border-color: #2563eb;
          color: #1d4ed8;
          background: #eff6ff;
        }
        .feature-chip {
          background: white;
          border: 1px solid #e5e7eb;
          transition: all 0.2s;
        }
        .feature-chip:hover {
          border-color: #2563eb;
          background: #eff6ff;
        }
        .why-card {
          background: white;
          border: 2px solid #f3f4f6;
          transition: all 0.3s;
        }
        .why-card:hover {
          border-color: #2563eb;
          background: #eff6ff;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(37,99,235,0.12);
        }
        .hero-tag {
          background: white;
          border: 1px solid rgba(37,99,235,0.25);
          box-shadow: 0 2px 8px rgba(37,99,235,0.08);
        }
        .cta-gradient-blue {
          background: linear-gradient(135deg, #0b1b3d, #1e3a8a, #1d4ed8, #0f172a);
          background-size: 300% 300%;
          animation: gradientShift 6s ease infinite;
        }
        .ifa-faq-collapse {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s ease;
        }
        .ifa-faq-collapse.ifa-faq-open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .ifa-faq-inner {
          overflow: hidden;
          min-height: 0;
        }
        @keyframes ifaMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .ifa-marquee-track {
          display: flex;
          width: max-content;
          animation: ifaMarquee 38s linear infinite;
        }
        .ifa-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-white overflow-hidden">

        {/* ─── 1. HERO SECTION ───────────────────────────────────── */}
        <section className="hero-bg-product hero-mesh-product relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60" />
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-[80px] opacity-60 translate-x-1/4" />
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.04]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="ifa-grid"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ifa-grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-10">
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <Link
                href="/products"
                className="hover:text-blue-600 transition-colors"
              >
                Products
              </Link>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-blue-600 font-semibold">
                Isarva Face Attendance
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column: Hero Content */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-8 border border-blue-200">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
                  </span>
                  AI Facial Biometrics · Active Blink Detection
                </div>

                <h1 className="mb-6">
                  AI powered face attendance <span className="shimmer-title-blue">on any phone you own</span>
                </h1>

                <p className="text-base lg:text-xl text-gray-600 leading-relaxed font-medium mb-8 max-w-xl mx-auto lg:mx-0">
                  The AI reads a face, and will not read a photograph. Recognition runs at 99.2% accuracy on real gate conditions, so one worker cannot punch in for another and a missing card is no longer an excuse.
                </p>

                <div className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start">
                  {[
                    "Sub-200ms Recognition",
                    "Anti-Spoofing AI",
                    "Offline-First",
                    "HRMS Cloud Sync",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="hero-tag px-4 py-1.5 rounded-full text-gray-700 text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <button
                    id="ifa-hero-cta"
                    onClick={() => setIsModalOpen(true)}
                    className="press-illusion-btn-orange bg-orange-500 text-white w-full sm:w-fit font-bold px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base items-center justify-center space-x-2 flex cursor-pointer rounded-xl"
                  >
                    <span>Request a Demo</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                  <a
                    href="#anti-spoofing"
                    className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 shadow-sm"
                  >
                    Explore Anti-Spoofing
                  </a>
                </div>
              </div>

              {/* Right Column: Ultra-Sleek Smartphone Hardware Frame */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 blur-[60px] rounded-full pointer-events-none" />

                <div className="relative mx-auto w-full max-w-[270px] sm:max-w-[295px]">
                  {/* Metallic Outer Chassis */}
                  <div className="relative rounded-[38px] sm:rounded-[44px] p-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-[0_24px_80px_rgba(37,99,235,0.18)] border border-slate-700/60 ring-1 ring-white/10">
                    {/* Inner Screen Bezel */}
                    <div className="relative rounded-[30px] sm:rounded-[34px] overflow-hidden bg-slate-950 shadow-inner">
                      {/* Dynamic Island Pill */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-3 sm:h-3.5 bg-slate-900 rounded-full z-20 flex items-center justify-center pointer-events-none shadow-sm">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-slate-950 border border-slate-700/60 mr-1.5 sm:mr-2" />
                        <div className="w-5 sm:w-7 h-0.5 sm:h-1 rounded-full bg-slate-800" />
                      </div>

                      {/* Screen Image */}
                      <Image
                        src="/products/face-attendence/1. Home Dashboard - ISARVA.webp"
                        alt="Isarva Face Attendance Home Dashboard"
                        width={390}
                        height={959}
                        unoptimized
                        priority
                        className="w-full h-auto object-cover block cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
                        onClick={() => setPreviewImage("/products/face-attendence/1. Home Dashboard - ISARVA.webp")}
                      />

                      {/* Bottom Home Indicator Bar */}
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1 bg-slate-400/50 rounded-full z-20 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="stat-card rounded-2xl p-6 text-center cursor-default">
                <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-1">
                  99.2%
                </div>
                <div className="text-gray-600 text-sm font-semibold">
                  Gate Recognition Accuracy
                </div>
              </div>

              <div className="stat-card rounded-2xl p-6 text-center cursor-default">
                <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-1">
                  &lt; 0.4s
                </div>
                <div className="text-gray-600 text-sm font-semibold">
                  Eye-Blink Verification
                </div>
              </div>

              <div className="stat-card rounded-2xl p-6 text-center cursor-default">
                <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-1">
                  Real-Time
                </div>
                <div className="text-gray-600 text-sm font-semibold">
                  Isarva Cloud Sync
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. ZERO-PROXY GUARANTEE / ANTI-SPOOFING ───────────── */}
        <section id="anti-spoofing" className="py-12 lg:py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-80" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-50 rounded-full blur-[80px] opacity-60" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-sm mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Zero-Proxy Guarantee
              </div>
              <h2 className="mb-6 capitalize">
                Attendance nobody can fake
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Photographs and videos held up to the camera are rejected, which closes the loophole that catches most attendance systems out.
              </p>
            </div>

            {/* 2 Comparison Cards (Live vs Spoof) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Card 1: Live Face Verification */}
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-blue-50/50 to-white border-2 border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-600 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shrink-0">
                      LIVE FACE VERIFICATION
                    </span>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <IconShieldCheck />
                    </div>
                  </div>

                  <h3 className="mb-3">
                    Natural Micro-Blink & 3D Geometry
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    The AI continuously monitors Eye Aspect Ratio (EAR) variations, natural micro-head adjustments, and skin reflection depth.
                  </p>

                  <div className="space-y-3 pt-6 border-t border-blue-100">
                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                      <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <IconCheck />
                      </span>
                      <span>Recognizes genuine eye blinking in 300ms</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                      <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <IconCheck />
                      </span>
                      <span>128-dimensional FaceNet vector embedding match</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                      <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <IconCheck />
                      </span>
                      <span>Instant punch logged with exact second timestamp</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Spoof Attempt Rejected */}
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-rose-50/50 to-white border-2 border-rose-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-rose-600 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shrink-0">
                      SPOOF ATTEMPT REJECTED
                    </span>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                      <IconShieldAlert />
                    </div>
                  </div>

                  <h3 className="mb-3">
                    Photos, Videos & Screen Replays Blocked
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Flat 2D printouts or video loops presented to the camera lack vitality, genuine eye blinking, and depth.
                  </p>

                  <div className="space-y-3 pt-6 border-t border-rose-100">
                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                      <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                        <IconX />
                      </span>
                      <span>Rejects printed physical photographs immediately</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                      <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                        <IconX />
                      </span>
                      <span>Detects screen moiré patterns and video glare</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                      <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                        <IconX />
                      </span>
                      <span>Flags suspicious proxy attempts for supervisor audit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. INTERACTIVE APP SCREENS SHOWCASE ─────────────────── */}
        <section id="screens" className="py-12 lg:py-16 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.05),transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-semibold text-sm mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Touchless Kiosk Interface
              </div>
              <h2 className="mb-6 capitalize">
                Designed for Fast Employee Flow & Frictionless Admin Control
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore the intuitive mobile app interfaces powering Isarva Face Attendance.
              </p>
            </div>

            {/* Tab Nav - Responsive Horizontal Pill Bar with Auto-Centering */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-2 px-1 sm:flex-wrap sm:justify-center mb-8 sm:mb-12 scroll-smooth">
              {APP_SCREENS.map((sc, idx) => (
                <button
                  key={sc.id}
                  ref={(el) => (tabRefs.current[idx] = el)}
                  id={`ifa-tab-${idx}`}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer border ${
                    activeScreenIndex === idx
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-md shadow-blue-500/25 scale-105"
                      : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 shadow-sm"
                  }`}
                >
                  <span className="text-sm">📱</span>
                  <span>{sc.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              {/* Left: Active Phone Preview */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative group max-w-[270px] sm:max-w-[290px] w-full">
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/50 to-indigo-200/50 blur-[50px] rounded-full pointer-events-none" />

                  {/* Smartphone Frame */}
                  <div className="relative rounded-[38px] sm:rounded-[44px] p-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-[0_24px_80px_rgba(37,99,235,0.18)] border border-slate-700/60 ring-1 ring-white/15">
                    <div className="relative rounded-[30px] sm:rounded-[34px] overflow-hidden bg-slate-950 aspect-[9/19.5] shadow-inner">
                      {/* Dynamic Island */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-3 sm:h-3.5 bg-slate-900 rounded-full z-20 flex items-center justify-center pointer-events-none shadow-sm">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-slate-950 border border-slate-700/60 mr-1.5 sm:mr-2" />
                        <div className="w-5 sm:w-7 h-0.5 sm:h-1 rounded-full bg-slate-800" />
                      </div>

                      <Image
                        key={APP_SCREENS[activeScreenIndex].src}
                        src={APP_SCREENS[activeScreenIndex].src}
                        alt={APP_SCREENS[activeScreenIndex].title}
                        fill
                        unoptimized
                        priority
                        className="object-cover object-top cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.02]"
                        onClick={() => setPreviewImage(APP_SCREENS[activeScreenIndex].src)}
                      />

                      {/* Bottom Indicator */}
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1 bg-slate-400/50 rounded-full z-20 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Screen Details & Key Capabilities */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                    SCREEN #{activeScreenIndex + 1} OF 5
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Kiosk Ready
                  </span>
                </div>

                <h3 className="mb-4">
                  {APP_SCREENS[activeScreenIndex].title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {APP_SCREENS[activeScreenIndex].desc}
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 gap-3 mb-8">
                  {APP_SCREENS[activeScreenIndex].highlights.map((hl, hIdx) => (
                    <div
                      key={hIdx}
                      className="feature-chip flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-200"
                    >
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-100 text-blue-700">
                        <IconCheck />
                      </div>
                      <span className="text-gray-700 text-sm font-medium text-left">
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Interactive Thumbnails Selector (Hidden on mobile/responsive) */}
                <div className="hidden sm:block pt-6 border-t border-gray-200">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                    <span>Select Screen</span>
                    <span
                      className="text-xs text-blue-600 font-semibold cursor-pointer hover:underline"
                      onClick={() => setPreviewImage(APP_SCREENS[activeScreenIndex].src)}
                    >
                      🔍 Click image to enlarge
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {APP_SCREENS.map((sc, i) => (
                      <button
                        key={sc.id}
                        onClick={() => setActiveScreenIndex(i)}
                        className={`relative rounded-xl overflow-hidden aspect-[9/16] border-2 transition-all cursor-pointer bg-slate-950 ${activeScreenIndex === i
                            ? "border-blue-600 scale-105 shadow-md shadow-blue-500/25 ring-2 ring-blue-500/20"
                            : "border-gray-200 opacity-70 hover:opacity-100 hover:border-blue-400"
                          }`}
                      >
                        <Image
                          src={sc.src}
                          alt={sc.title}
                          fill
                          unoptimized
                          className="object-cover object-top"
                          sizes="80px"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. DIRECT HRMS PIPELINE ───────────────────────────── */}
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-80" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-50 rounded-full blur-[80px] opacity-60" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column: HRMS Info */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-sm mb-6">
                  Direct HRMS Pipeline
                </div>

                <h2 className="mb-6 capitalize">
                  Seamless Integration with Isarva Payroll
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Every punch at the door instantly syncs to the Isarva Attendance Web App (attendance.isarva.in), updating work hours, shift schedules, roster allocations, and leave balances in real time.
                </p>

                {/* Feature Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-blue-50 border border-blue-100 hover:border-blue-300 transition-all duration-200">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25">
                      <IconActivity />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">
                      Real-Time Online Web Sync
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-purple-50 border border-purple-100 hover:border-purple-300 transition-all duration-200">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/25">
                      <IconCalendar />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">
                      Shift & Roster Automation
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 hover:border-emerald-300 transition-all duration-200">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/25">
                      <IconUserCheck />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">
                      Leave Tracking & Approvals
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-amber-50 border border-amber-100 hover:border-amber-300 transition-all duration-200">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/25">
                      <IconWifiOff />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">
                      Offline Sync Cache
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="press-illusion-btn-orange bg-orange-500 text-white font-bold px-8 py-4 text-base items-center justify-center space-x-2 flex cursor-pointer rounded-xl"
                  >
                    <span>Request Live Demo</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Column: Live Isarva HRMS Web Portal Preview Frame */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/60 to-indigo-100/60 blur-[50px] rounded-3xl" />

                <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-white">
                  {/* Browser Header */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-gray-50">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-600 shadow-sm max-w-[220px] truncate">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 shrink-0">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <span className="truncate">attendance.isarva.in</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span className="hidden sm:inline">Live Cloud Sync</span>
                      <span className="sm:hidden">Live</span>
                    </div>
                  </div>

                  {/* Web App Image (Full View - Zero Cutoff) */}
                  <div className="relative overflow-hidden cursor-zoom-in bg-white group">
                    <Image
                      src="/products/Time and Attendence.png"
                      alt="Isarva HRMS & Attendance Web Portal Dashboard"
                      width={1920}
                      height={1080}
                      unoptimized
                      priority
                      className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.02]"
                      onClick={() => setPreviewImage("/products/Time and Attendence.png")}
                    />
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-slate-900/75 text-white text-xs font-semibold backdrop-blur-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-md">
                      <span>🔍 Click to enlarge</span>
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="p-3.5 px-5 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-gray-700 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Isarva Attendance & Payroll Portal</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Request Access</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. ENTERPRISE ARCHITECTURE ────────────────────────── */}
        <section className="py-12 lg:py-16 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-sm mb-6">
                Enterprise Architecture
              </div>
              <h2 className="mb-6 capitalize">
                Built for high-volume enterprise workforce
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From wall-mounted Android kiosks to complete roster governance across branches.
              </p>
            </div>

            {/* 6 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterpriseCards.map((card, idx) => (
                <div
                  key={idx}
                  className="why-card p-6 rounded-2xl flex flex-col items-center text-center justify-between"
                >
                  <div className="flex flex-col items-center text-center w-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${card.gradient} text-white flex items-center justify-center mb-5 shadow-lg shadow-blue-500/15`}>
                      {card.icon}
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-blue-50 text-blue-700 border border-blue-200">
                      {card.tag}
                    </span>

                    <h3 className="mb-2">
                      {card.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-0">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. TRENDING FACIAL RECOGNITION & HRMS BIOMETRIC SOLUTIONS (CAPABILITY MATRIX) ─── */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-t border-b border-gray-200/80 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Enterprise Biometric Capabilities
              </div>
              <h2 className="mb-6 capitalize">
                Trending Facial Recognition &amp; HRMS Biometric Solutions
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Explore our comprehensive suite of AI facial recognition, liveness fraud defense, and synchronized payroll attendance solutions.
              </p>
            </div>

            {/* 10-Item Capability Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {trendingSolutions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200/90 shadow-sm flex items-center"
                >
                  <h3 className="text-sm sm:text-base leading-snug mb-0">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6.5 VIDEO DEMONSTRATION ────────────────────────────── */}
        <section id="video-demo" className="pt-10 pb-10 lg:pt-14 lg:pb-12 bg-gradient-to-b from-blue-50/60 via-indigo-50/40 to-blue-50/80 border-b border-blue-200/70 relative overflow-hidden">
          {/* Ambient Mesh Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-7">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 font-semibold text-sm mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                Live Product Walkthrough
              </div>
              <h2 className="mb-4 capitalize">
                Watch Isarva Face Attendance in Action
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                See real-time biometric eye-blink detection, sub-200ms neural recognition, and automated cloud sync running on standard Android hardware.
              </p>
            </div>

            {/* Video Container Frame */}
            <div className="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 bg-white border border-blue-200/80 shadow-[0_20px_50px_rgba(37,99,235,0.10)] ring-1 ring-blue-500/5">
              {/* Top Window Bar */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 mb-2 bg-slate-50 rounded-xl border border-slate-200/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  <span className="text-xs text-gray-500 font-medium ml-2 hidden sm:inline">Isarva Biometric AI Kiosk Terminal Demo</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>1080p Full HD</span>
                </div>
              </div>

              {/* 16:9 Video Embed with Crystal-Clear HD Thumbnail */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
                {!isVideoPlaying ? (
                  <div
                    onClick={() => setIsVideoPlaying(true)}
                    className="relative w-full h-full cursor-pointer group flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="https://img.youtube.com/vi/dUy-Uu018hY/maxresdefault.jpg"
                      alt="Isarva Face Attendance Demo"
                      fill
                      unoptimized
                      priority
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30 group-hover:from-slate-950/50 transition-colors" />
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.7)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(220,38,38,0.9)] transition-all duration-300">
                        <svg className="w-7 h-7 sm:w-9 sm:h-9 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                      <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-white text-xs font-semibold backdrop-blur-md shadow-lg group-hover:bg-slate-800 transition-colors">
                        ▶ Click to Watch Walkthrough (HD)
                      </span>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/dUy-Uu018hY?autoplay=1&rel=0&modestbranding=1"
                    title="Isarva Facial Recognition & HRMS Biometric Attendance Demo"
                    className="w-full h-full absolute inset-0 border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>
            </div>


            {/* Bottom Action */}
            <div className="mt-6 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="press-illusion-btn-orange bg-orange-500 text-white font-bold px-8 py-3.5 text-sm sm:text-base items-center justify-center flex cursor-pointer rounded-xl"
              >
                Schedule Live Product Demo
              </button>
            </div>
          </div>
        </section>

        {/* ─── 7. FREQUENTLY ASKED QUESTIONS ─────────────────────── */}
        <section id="faq" className="pt-10 pb-12 lg:pt-14 lg:pb-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-sm mb-5">
                Support & FAQs
              </div>
              <h2 className="mb-4 capitalize">
                Frequently Asked Questions
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know
              </p>
            </div>

            {/* Accordion List */}
            <div className="flex flex-col gap-3.5">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div
                    key={i}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                        ? "border-blue-400 shadow-[0_12px_32px_rgba(37,99,235,0.10)] bg-white ring-2 ring-blue-500/15"
                        : "border-gray-200 shadow-sm bg-white hover:border-blue-300 hover:shadow-md"
                      }`}
                  >
                    <button
                      onClick={() => toggleFaq(i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer border-none bg-transparent select-none transition-colors"
                    >
                      <span className={`font-semibold text-base lg:text-lg leading-snug transition-colors ${isOpen ? "text-blue-600" : "text-gray-900"}`}>
                        {item.q}
                      </span>
                      <span
                        className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${isOpen
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rotate-180 shadow-md shadow-blue-500/20"
                            : "bg-gray-100 text-gray-500"
                          }`}
                      >
                        <IconChevronDown />
                      </span>
                    </button>

                    <div className={`ifa-faq-collapse ${isOpen ? "ifa-faq-open" : ""}`}>
                      <div className="ifa-faq-inner">
                        <div className="px-6 pb-6 pt-0 border-t border-blue-50">
                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base mt-4 mb-0">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 7. CTA BANNER ─────────────────────────────────────── */}
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="relative overflow-hidden rounded-3xl cta-gradient-blue text-white p-10 lg:p-16 text-center shadow-2xl">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-white mb-6 capitalize">
                  Transform your gate attendance with Isarva
                </h2>
                <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                  Mount any Android phone at the entrance, eliminate buddy punching with AI blink detection, and sync live to your Isarva HRMS dashboard.
                </p>

                <div className="flex justify-center items-center">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto press-illusion-btn-orange bg-orange-500 text-white font-bold px-8 py-4 text-base items-center justify-center space-x-2 flex cursor-pointer rounded-xl"
                  >
                    Request Callback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Image Lightbox Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-[94vw] sm:max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -top-11 sm:-top-12 right-0 text-white hover:text-slate-300 p-2 sm:p-2.5 rounded-full cursor-pointer bg-slate-800/80 border border-slate-700 shadow-md"
            >
              <IconX />
            </button>
            <Image
              src={previewImage}
              alt="App Screen Preview"
              width={1200}
              height={800}
              unoptimized
              className="w-auto h-auto max-w-full max-h-[80vh] sm:max-h-[85vh] rounded-2xl sm:rounded-3xl object-contain shadow-2xl border-2 border-slate-700"
            />
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {isModalOpen && (
        <ContactFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          preSelectedType="Product"
          preSelectedItem={product?.title || "Isarva Face Attendance"}
          allItems={allProducts || productsData}
        />
      )}
    </>
  );
}
