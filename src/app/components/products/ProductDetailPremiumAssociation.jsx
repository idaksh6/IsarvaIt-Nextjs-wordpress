"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "../AppLink";
import ContactFormModal from "../../components/ContactFormModal";

const PRIMARY_COLOR = "#d946ef"; // Fuchsia
const SECONDARY_COLOR = "#c026d3";
const ORANGE_ACCENT = "#ea580c";

const FEATURES_DATA = [
  {
    title: "Member Creation & Approval",
    desc: "Easily create user entries with customized membership expiry limits and workflow queues for administrative approval verification.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    title: "Webcam & Photo Upload",
    desc: "Fully supports dynamic live camera streaming capture and webcam integration to instantly attach high-res member photos to profiles.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Direct Print ID Card Format",
    desc: "Generate and download standardized membership ID badges directly from the portal interface in high-clarity JPEG format with secure QR verification codes scanned on-site.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Admin Dashboard",
    desc: "Unified charts, approval counts, upcoming expiry pipelines, library statistics, and financial tracking metrics overview in one interface.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Dynamic Rights Management",
    desc: "Set up granular user categories, custom control boards, and specific page/module reading or editing rights across different admin tiers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Subscription Plans Setup",
    desc: "Configure dynamic plan tiers, periodic cycles, discount levels, and customized membership fee schedules for automated billing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Digital Library Tracker",
    desc: "Track book inventory, log active checked-out items, and automatically map which user currently holds specific library items.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Certificate & Donation Master",
    desc: "Issue professional verification certificates and receive donation collections, complete with automated receipt generation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Manual Admin Overrides",
    desc: "Allows absolute moderator override powers to toggle membership states, update validity fields, or edit payment notes manually.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Member Profile Management",
    desc: "Secure self-service workspace profiles where members can edit contact info, check subscription status, and download receipts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Direct Fast Renewal Option",
    desc: "Direct renewal forms for expired or expiring members with immediate secured online billing processing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17" />
      </svg>
    ),
  },
  {
    title: "Android & iOS Member App",
    desc: "Dedicated mobile applications for members to quickly renew subscriptions, manage digital ID profiles, and show secure verified member QR codes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM9 7h6M9 11h6m-6 4h3" />
      </svg>
    ),
  },
];

const REPORTS_DATA = [
  {
    name: "Membership Payments Report",
    desc: "Logs comprehensive records of all online and offline payment history, showing gateway IDs and invoice logs.",
    icon: (
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
    )
  },
  {
    name: "Upcoming Membership Report",
    desc: "A proactive view highlighting list reports of members nearing renewal deadlines within the next 30 to 60 days.",
    icon: (
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
    )
  },
  {
    name: "Suspended Membership Reports",
    desc: "Tracks and details profiles where validity and expiration thresholds have elapsed for more than 6 months.",
    icon: (
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
    )
  },
  {
    name: "Expired Membership Report",
    desc: "Identifies members whose account validity limits have recently expired within the previous 6-month cycle.",
    icon: (
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    )
  },
  {
    name: "Donation Report",
    desc: "Detailed collection metrics of association donation contributions, tracking specific gift initiatives.",
    icon: (
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    )
  },
  {
    name: "Issued Book Reports",
    desc: "Full breakdown of active library books currently checked out, highlighting due dates and responsible members.",
    icon: (
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
    )
  },
  {
    name: "Returned Book Reports",
    desc: "Archived metrics detailing library book return history, logs, late fees, and general item return processing updates.",
    icon: (
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
    )
  },
  {
    name: "Books Count Report",
    desc: "Inventory audits mapping total category catalogs, active distributions, shelf units, and total counts.",
    icon: (
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h16"></path></svg>
    )
  },
  {
    name: "Renewed Members Report",
    desc: "A list compiling all successfully processed subscription renewals and active member directories.",
    icon: (
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    )
  },
  {
    name: "All Members List Report",
    desc: "Exportable complete directory mapping all registration states, fields, and full contact details.",
    icon: (
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
    )
  }
];

export default function ProductDetailPremiumAssociation({ product, relatedProducts, allProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("features");

  // Simulated Dashboard State
  const [activeCount, setActiveCount] = useState(1248);
  const [pendingCount, setPendingCount] = useState(3);
  const [approvedList, setApprovedList] = useState([]);
  const [pendingList, setPendingList] = useState([
    { id: 1, name: "Arjun Sharma", email: "arjun@example.com", type: "Premium Member", date: "Today" },
    { id: 2, name: "Sarah Jenkins", email: "sarah.j@example.com", type: "Standard Member", date: "Yesterday" },
    { id: 3, name: "Michael Chang", email: "m.chang@example.com", type: "Executive Member", date: "2 days ago" },
  ]);

  // ID Card Customizer State
  const [idName, setIdName] = useState("Jane Doe");
  const [idType, setIdType] = useState("Premium Member");
  const [idOrg, setIdOrg] = useState("Isarva Tech Association");
  const [idPhoto, setIdPhoto] = useState("");
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isCameraShutter, setIsCameraShutter] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);

  // Success Notification banner
  const [notification, setNotification] = useState("");

  const triggerNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 4000);
  };

  const handleApproveMember = (id, name) => {
    setApprovedList((prev) => [...prev, id]);
    setActiveCount((c) => c + 1);
    setPendingCount((c) => Math.max(0, c - 1));
    triggerNotification(`Approved membership for ${name} successfully!`);
  };

  const handleRejectMember = (id, name) => {
    setPendingList((prev) => prev.filter((m) => m.id !== id));
    setPendingCount((c) => Math.max(0, c - 1));
    triggerNotification(`Rejected/Archived request for ${name}.`);
  };

  const handleCapturePhoto = () => {
    setIsCameraShutter(true);
    setTimeout(() => {
      setIsCameraShutter(false);
      setIsCameraActive(false);
      // Simulated professional headshot
      setIdPhoto("https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop");
      triggerNotification("Webcam photo captured successfully!");
    }, 450);
  };

  const handleSimulateExport = (reportName, format) => {
    triggerNotification(`Preparing export for ${reportName} in ${format} format...`);
    setTimeout(() => {
      triggerNotification(`Downloaded ${reportName}.${format.toLowerCase()} successfully!`);
    }, 1500);
  };

  return (
    <div className="bg-white font-sans selection:bg-fuchsia-100 selection:text-fuchsia-900">
      <style>{`
        @keyframes pulse-border {
          0% { border-color: rgba(217, 70, 239, 0.4); box-shadow: 0 0 0 0 rgba(217, 70, 239, 0.1); }
          50% { border-color: rgba(217, 70, 239, 1); box-shadow: 0 0 0 8px rgba(217, 70, 239, 0.05); }
          100% { border-color: rgba(217, 70, 239, 0.4); box-shadow: 0 0 0 0 rgba(217, 70, 239, 0); }
        }
        .animate-pulse-border {
          animation: pulse-border 2s infinite ease-in-out;
        }
      `}</style>

      {/* Dynamic Success Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-28 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-2xl bg-slate-900 text-white shadow-2xl border border-white/10 flex items-center gap-3 backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-500 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide">{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#fdf4ff] via-[#fce7f3] to-white">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat"
          }}
        ></div>

        {/* Fuchsia Radial Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_600px_500px_at_center_45%,rgba(217,70,239,0.12)_0%,rgba(217,70,239,0.05)_50%,transparent_100%)] pointer-events-none"></div>

        {/* Additional Fuchsia Glow Accents */}
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#D946EF] opacity-[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#C026D3] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold text-[#000000] leading-[1] mb-8">
              Modern Software for<br />
              <span className="text-[#D946EF]">
                Bar Association & Lawyers Membership
              </span>
              <span style={{ color: PRIMARY_COLOR }}>.</span>
            </h1>
            <p className="text-base lg:text-xl text-[#444444] mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Streamline member onboarding, automate renewals, manage directory profiles, track resources, and monitor organization health with our end-to-end admin ecosystem.
            </p>

            {/* Target Audience Banner */}
            <div className="max-w-4xl mx-auto mb-8 p-4 md:py-6 md:px-6 rounded-[20px] md:rounded-full bg-fuchsia-50/40 border border-dashed border-fuchsia-300/80 flex items-center justify-center gap-3 text-left backdrop-blur-sm shadow-[0_4px_20px_rgba(217,70,239,0.02)] animate-pulse-border">
              <svg className="w-5 h-5 text-fuchsia-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[#444444] text-xs sm:text-sm md:text-[15px] leading-relaxed font-medium">
                Perfect for <span className="text-[#D946EF] font-bold">State, District & City Bar Associations</span>, and <span className="text-[#D946EF] font-bold">Other Professional Member Organizations</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="press-illusion-btn-orange bg-orange-600 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 flex cursor-pointer"
              >
                <span>REQUEST DEMO</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 9"
                  className="h-2 w-4"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Full Width Dashboard Animation with Wings */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-dashboard-wrapper"
          >
            <div className="dashboard-animation left">
              <div
                className="scroll-img"
                style={{
                  backgroundImage: `url('/products/membership-management/member-network.jpg'), url('/products/membership-management/membership-approval.jpg')`
                }}
              ></div>
            </div>
            <div className="dashboard-animation right">
              <div
                className="scroll-img"
                style={{
                  backgroundImage: `url('/products/membership-management/webcam.jpg'), url('/products/membership-management/dynamic-rights.jpg')`
                }}
              ></div>
            </div>
            <div className="dashboard-main-img">
              <div className="relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] bg-white">
                <img
                  src="/products/membership-management/front-dashboard.jpg"
                  alt="Membership Management Dashboard"
                  className="w-full object-contain lg:h-[668px] h-full shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MOCKUP SYSTEM / LIVE DEMO INTERACTION ── */}


      {/* ── SPLIT DETAILS SECTION ── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:text-left text-center">
            {/* Left Side - Image (Sticky on Desktop) */}
            <div className="relative lg:sticky lg:top-28 lg:self-start">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 p-2">
                <img
                  src="/products/membership-management/membership_dashboard.png"
                  alt="Onboarding and Management Panel"
                  className="w-full h-auto object-cover rounded-2xl block"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#D946EF] opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#D946EF] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-[#000000] mb-6 capitalize">
                Optimize Member Networks with <br />
                <span className="text-[#D946EF]">Secure Digital Ecosystems</span>
              </h2>

              <p className="text-lg text-[#444444] mb-6 leading-relaxed">
                Our Association Membership Management software is a modern system designed to simplify operations for administrative teams and association members. It ensures data protection, structured compliance approvals, and robust digital integration.
              </p>

              <p className="text-lg text-[#444444] mb-8 leading-relaxed">
                Admins gain granular control over member verification workflows, automated renewal notifications, custom subscription groups, and detailed financial tracking, ensuring the association operates flawlessly and scales effortlessly.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="press-illusion-btn-orange bg-orange-600 text-white font-bold px-6 py-2 text-base items-center space-x-2 inline-flex cursor-pointer"
              >
                <span>Request Demo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 9"
                  className="h-2 w-4"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* ── CORE DETAILS TAB SWITCHER ── */}
      <section className="py-12 lg:py-16 overflow-hidden bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="block text-[10px] font-black text-[#D946EF] tracking-[0.28em] capitalize mb-2.5">
              SOFTWARE MODULES
            </span>
            <h2 className="text-[#0a0a0a] mb-3.5 capitalize">
              Key Modules of <span className="text-[#D946EF]">Membership Management</span>
            </h2>
            <p className="text-[#6b7280] max-w-[520px] mx-auto text-[15px] leading-relaxed">
              Explore the full suite of specialized tools built to manage records, tracking, transactions, and direct reporting.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg border border-gray-200">
              <button
                onClick={() => setActiveTab("features")}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === "features"
                  ? "bg-gradient-to-r from-[#D946EF] to-[#C026D3] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab("reports")}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === "reports"
                  ? "bg-gradient-to-r from-[#D946EF] to-[#C026D3] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                Reports
              </button>
            </div>
          </div>

          {/* Panel content */}
          <AnimatePresence mode="wait">
            {activeTab === "features" ? (
              <motion.div
                key="features-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-6"
              >
                {FEATURES_DATA.map((feat, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-gray-100 hover:border-fuchsia-200/60 p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_50px_rgba(217,70,239,0.06)] hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-fuchsia-50 text-fuchsia-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors duration-300">
                        {feat.icon}
                      </div>
                      <h3 className="tracking-tight mb-3 capitalize leading-tight group-hover:text-fuchsia-600 transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-[#6b7280] leading-relaxed text-sm w-full">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="reports-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-6"
              >
                {REPORTS_DATA.map((rep, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border-l-4 border-l-fuchsia-500 border border-gray-100 hover:border-fuchsia-200/60 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-slate-50 text-slate-500 group-hover:bg-fuchsia-50 group-hover:text-fuchsia-600 rounded-xl flex items-center justify-center mb-6 transition-all">
                        {rep.icon}
                      </div>
                      <h3 className="tracking-tight mb-2 capitalize leading-tight group-hover:text-fuchsia-600 transition-colors">
                        {rep.name}
                      </h3>
                      <p className="text-[#6b7280] leading-relaxed text-sm w-full">{rep.desc}</p>
                    </div>
                    <div className="flex gap-2 mt-6 border-t border-slate-100 pt-4 justify-center w-full">
                      <button
                        // onClick={() => handleSimulateExport(rep.name, "PDF")}
                        className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 text-[10px] font-bold capitalize tracking-wider transition-colors flex items-center gap-1 cursor-default"
                      >
                        PDF Export
                      </button>
                      <button
                        // onClick={() => handleSimulateExport(rep.name, "Excel")}
                        className="px-3 py-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 border border-green-100 text-[10px] font-bold capitalize tracking-wider transition-colors flex items-center gap-1 cursor-default"
                      >
                        Excel Export
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── MOCK PRINT PREVIEW MODAL ── */}
      <AnimatePresence>
        {showPrintModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-100 text-center"
            >
              <h3 className="text-slate-900 text-2xl font-black mb-2">Print Configuration</h3>
              <p className="text-slate-400 text-xs font-semibold mb-6">STANDARD BADGE PRINTER OUTPUT PREVIEW</p>

              {/* Actual badge preview block */}
              <div className="bg-slate-100 p-6 rounded-2xl inline-block border border-slate-200 mb-6 text-left w-full max-w-sm mx-auto">
                <div className="bg-white text-slate-800 p-6 rounded-xl border-2 border-slate-900 shadow-md">
                  <div className="border-b-2 border-slate-900 pb-3 mb-4 text-center">
                    <span className="text-[8px] font-black tracking-widest text-slate-500 capitalize">OFFICIAL ID BADGE</span>
                    <h4 className="text-sm font-black capitalize tracking-wider mt-0.5">{idOrg}</h4>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-slate-100 border-2 border-slate-900 rounded-lg flex items-center justify-center font-bold text-slate-400">
                      {idPhoto ? <img src={idPhoto} className="w-full h-full object-cover rounded-lg" /> : "PHOTO"}
                    </div>
                    <div>
                      <h5 className="font-black text-sm capitalize">{idName}</h5>
                      <span className="inline-block bg-slate-900 text-white text-[9px] font-black capitalize px-2.5 py-0.5 rounded mt-1 tracking-wide">
                        {idType}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-dashed border-slate-300 flex justify-between items-center">
                    <span className="text-[7px] font-mono text-slate-500">REF: MEMBER-88271</span>
                    <span className="text-[7px] font-bold text-slate-500">VALID: 12 MONTHS</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowPrintModal(false);
                    triggerNotification("Document sent to system printer spooler.");
                  }}
                  className="flex-1 py-4 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs capitalize tracking-wider rounded-xl shadow-lg transition-colors"
                >
                  Send to Printer
                </button>
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="flex-1 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 font-black text-xs capitalize tracking-wider rounded-xl transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>





      {/* 4. CTA Section */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50 via-transparent to-pink-50"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-fuchsia-400 to-pink-500 rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(217,70,239,0.2)]"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block text-xs font-black text-white/90 tracking-[0.25em] capitalize mb-4 bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm">
                  GET STARTED TODAY
                </span>

                <h2 className="text-white mb-6 capitalize">
                  Ready to elevate your Association?
                </h2>

                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join hundreds of organization networks using Isarva platforms for efficient onboarding, library tracking, and payment processing portals.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white hover:bg-orange-600 text-orange-600 hover:text-white px-8 py-4 rounded-lg font-bold text-base flex items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(234,88,12,0.2)] hover:shadow-[0_20px_40px_rgba(234,88,12,0.45)] border-2 border-transparent hover:border-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Request Demo</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Explore More Products Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D946EF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-black text-[#D946EF] tracking-[0.28em] capitalize mb-3 bg-[#D946EF]/10 px-4 py-2 rounded-full">
                MORE PRODUCTS
              </span>
              <h2 className="text-[#0a0a0a] mb-4 capitalize">
                Explore Our More Products
              </h2>
              <p className="text-[#6b7280] max-w-[600px] mx-auto text-base leading-relaxed">
                Discover our comprehensive suite of software solutions designed to transform your business operations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {allProducts
              .filter(p => p.slug !== product.slug && !p.slug.includes("staging") && !p.slug.includes("-old") && p.slug !== "bill-soft")
              .slice(0, 3)
              .map((prod, index) => (
                <motion.div
                  key={prod.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link
                    href={`/product/${prod.slug}`}
                    className="block h-full"
                  >
                    <div className="relative rounded-3xl p-8 h-full bg-white border-2 border-gray-100 shadow-lg flex flex-col items-center text-center">
                      {/* Category Badge */}
                      <div className="mb-4 bg-[#D946EF]/10 text-[#D946EF] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#D946EF]/30 shadow-md whitespace-nowrap">
                        {prod.category}
                      </div>

                      <div className="relative flex flex-col items-center w-full">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D946EF] to-[#C026D3] flex items-center justify-center mb-6 shadow-lg mx-auto">
                          <span className="text-3xl">{prod.icon}</span>
                        </div>

                        {/* Title */}
                        <h3 className="mb-1 min-h-[3rem] line-clamp-2">
                          {prod.title}
                        </h3>

                        {/* Tagline */}
                        <div className="mb-2 flex min-h-[3.25rem] w-full items-start justify-center">
                          {prod.tagline ? (
                            <p className="text-[#D946EF] font-semibold line-clamp-2 leading-snug">
                              {prod.tagline}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div className="mt-auto flex w-full flex-col">
                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-2 text-sm min-h-[4.75rem] line-clamp-4">
                          {prod.shortDescription}
                        </p>

                        {/* CTA Link at bottom */}
                        <div className="flex items-center justify-center gap-2 text-[#D946EF] font-semibold pt-2 border-t border-gray-50 w-full">
                          Explore Product
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>

          {/* View All Products CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/products"
              className="press-illusion-btn-orange bg-orange-600 text-white w-fit font-bold px-8 py-4 text-base items-center space-x-2 flex cursor-pointer mx-auto"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>



      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem="Lawyer Legal Association Software"
        allItems={allProducts}
      />

    </div>
  );
}
