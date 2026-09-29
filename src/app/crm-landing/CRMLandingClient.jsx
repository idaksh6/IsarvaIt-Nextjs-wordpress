"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactFormModal from "../components/ContactFormModal";
import CRMBrochureModal from "../components/CRMBrochureModal";

const howItWorksData = [
  {
    step: "01",
    title: "Capture Leads",
    desc: "Collect and auto-organize leads from websites, WhatsApp, email, and ad campaigns seamlessly.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Track Opportunities",
    desc: "Move qualified prospects through visual Kanban stages with clear deal values and win probabilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Manage Activities",
    desc: "Coordinate follow-ups, calls, tasks, and meetings in one calendar view with automated alerts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Create Quotations",
    desc: "Generate professional, GST-compliant PDF quotes and share instantly with clients.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Build Relationships",
    desc: "Access full 360° customer history across web and mobile to retain and upsell accounts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const featuresGrid = [
  {
    id: "lead-mgmt",
    title: "Lead Capture & Scoring",
    desc: "Automatically funnel inbound leads from web forms, WhatsApp, and campaigns into a categorized pipeline.",
    tag: "Inbound Engine",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    id: "deal-pipeline",
    title: "Kanban Deal Pipeline",
    desc: "Visual drag-and-drop opportunity board to monitor stage velocity, estimated closing dates, and deal size.",
    tag: "Visual Sales",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    id: "quotations",
    title: "Instant Quotations & PDF",
    desc: "Generate polished estimates, proposals, and itemized quotations with custom tax rules in just a few clicks.",
    tag: "Fast Turnaround",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: "activity-tracker",
    title: "Activity & Task Sync",
    desc: "Never drop a ball with scheduled reminders, calendar task overviews, and team activity timeline logs.",
    tag: "Productivity",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "customer-360",
    title: "Customer 360° Profile",
    desc: "Centralized account cards with complete contact info, notes, deal history, and company hierarchy.",
    tag: "Deep Context",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "analytics-bi",
    title: "Sales Analytics & Reports",
    desc: "Real-time metrics on conversion rates, sales rep performance, win/loss reasons, and revenue forecasts.",
    tag: "Revenue BI",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
];

const tabsData = [
  {
    id: "leads",
    title: "Leads Management",
    badge: "Inbound Pipeline",
    headline: "Centralize Every Inbound Lead & Automate Distribution",
    desc: "Capture inquiries across your marketing channels. Filter leads by status, assign to dedicated sales reps, and track source origin to optimize your marketing spend.",
    bullets: [
      "Custom status stages (New, Contacted, Qualified, Lost)",
      "Instant sales rep assignment & notification alerts",
      "Source tracking across Website, Ads, Referrals, and Events",
      "Detailed lead audit trail and communication history",
    ],
    image: "/products/crm/Leads-management.jpg",
  },
  {
    id: "deals",
    title: "Deals & Pipeline",
    badge: "Kanban Control",
    headline: "Visual Stage-by-Stage Sales Progression",
    desc: "Turn opportunities into won revenue. Move deals effortlessly between stages, set milestones, track expected closing dates, and monitor probability weighting.",
    bullets: [
      "Interactive drag-and-drop Kanban view",
      "Milestone tracking and deal value breakdown",
      "Automated deal aging warnings to prevent stale pipelines",
      "Win-loss analysis with customizable reason tags",
    ],
    image: "/products/crm/Deals-management.jpg",
  },
  {
    id: "quotations",
    title: "Quotation Engine",
    badge: "1-Click PDF",
    headline: "Create Professional Quotes in Under 60 Seconds",
    desc: "Eliminate manual spreadsheet errors. Pull pre-saved product catalogs, apply item discounts, calculate taxes, and generate branded quotation PDFs ready for WhatsApp/Email sharing.",
    bullets: [
      "Itemized pricing with dynamic discount & GST calculations",
      "Branded company headers and terms & conditions templates",
      "Direct revision history and status tracking (Draft, Sent, Accepted)",
      "Instant PDF download or direct client dispatch",
    ],
    image: "/products/crm/mockups/Quoatation-1.jpg",
  },
  {
    id: "calendar",
    title: "Tasks & Activities",
    badge: "Zero Missed Follow-ups",
    headline: "Unified Calendar for Calls, Meetings & Deadlines",
    desc: "Keep your sales team disciplined. Schedule follow-ups directly from contact records, view daily agendas, and receive timely notifications for upcoming tasks.",
    bullets: [
      "Synchronized day, week, and month calendar views",
      "Task prioritization tags (Urgent, High, Normal, Low)",
      "Call notes logging with outcome summary",
      "Automated reminders for pending prospect follow-ups",
    ],
    image: "/products/crm/Calender.jpg",
  },
  {
    id: "customers",
    title: "Customer 360° Profile",
    badge: "Account Intelligence",
    headline: "Complete Relationship History in One Single Record",
    desc: "Empower every team member with full account context. Access contact details, associated company records, past quotes, and active deals in an easy-to-read dossier.",
    bullets: [
      "Multi-contact association per company account",
      "Complete timeline of interactions, emails, and quotes",
      "Custom fields tailored to your industry requirements",
      "Document and contract attachment storage",
    ],
    image: "/products/crm/Contact-Person.jpg",
  },
  {
    id: "analytics",
    title: "Reports & Analytics",
    badge: "Data-Driven Growth",
    headline: "Actionable Intelligence on Sales Velocity & Revenue",
    desc: "Make confident managerial decisions with comprehensive sales dashboards. Track pipeline health, conversion ratios, and individual sales rep performance.",
    bullets: [
      "Live conversion funnel from lead generation to deal won",
      "Sales rep target vs. actual revenue scorecards",
      "Revenue forecast reports by month and quarter",
      "Exportable CSV and PDF summary reports",
    ],
    image: "/products/crm/Analytics-Reports.jpg",
  },
];

const whyChooseData = [
  {
    title: "Industry-Specific Solutions",
    desc: "Pre-tailored CRM configurations and custom fields for IT, Manufacturing, Healthcare, Retail, and Real Estate.",
    icon: "🏢",
  },
  {
    title: "Dedicated Onboarding Support",
    desc: "Comprehensive guided setup, user training sessions, and technical support to guarantee smooth adoption.",
    icon: "🎧",
  },
  {
    title: "Customizable Modules",
    desc: "Adapt pipeline stages, quotation templates, and permissions to your company’s unique workflow.",
    icon: "⚙️",
  },
  {
    title: "Scalable Cloud Architecture",
    desc: "A reliable enterprise backbone that seamlessly scales from 5 to 5,000+ users without performance loss.",
    icon: "🚀",
  },
  {
    title: "Granular Access & Permissions",
    desc: "Strict role-based access control protecting sensitive customer records and financial quotation data.",
    icon: "🔐",
  },
  {
    title: "Quick Team Adoption",
    desc: "Designed with an intuitive, clutter-free UI so your sales reps become productive on day one.",
    icon: "✨",
  },
];

const faqData = [
  {
    q: "What is Isarva CRM and how does it help sales teams?",
    a: "Isarva CRM is an all-in-one cloud platform engineered to streamline lead management, deal tracking, quotations, and customer communications. It eliminates spreadsheets, automates repetitive follow-ups, and gives business leaders full visibility into their sales pipeline.",
  },
  {
    q: "Can I customize the sales stages and quotation templates?",
    a: "Yes. Isarva CRM offers full customization over pipeline stages, lead statuses, user permissions, and branded PDF quotation templates to match your exact business processes.",
  },
  {
    q: "Does Isarva CRM support mobile access on Android and iOS?",
    a: "Yes! Isarva CRM provides companion mobile applications for sales reps on the road, enabling them to log calls, add new leads, update deal stages, and view customer contacts anywhere.",
  },
  {
    q: "How secure is our customer and sales data?",
    a: "We implement bank-grade 256-bit SSL encryption, automated daily data backups, strict role-based permission matrices, and redundant cloud servers to ensure complete security and data confidentiality.",
  },
  {
    q: "How long does implementation and team onboarding take?",
    a: "Most businesses go live within 2 to 7 days. We provide complete initial configuration support, data import assistance from CSV/Excel, and live training sessions for your team.",
  },
  {
    q: "How can I get a customized demo or pricing quote?",
    a: "Simply click 'Book a Free Demo' or 'Download Brochure' on this page. Our CRM solution experts will schedule a personalized walkthrough tailored to your industry workflows.",
  },
];

export default function CRMLandingClient() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("leads");
  const [selectedImage, setSelectedImage] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const currentTabContent = tabsData.find((t) => t.id === activeTab) || tabsData[0];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E0F2FE] selection:text-[#008CDB]">
      <style>{`
        .crm-primary-btn-orange {
          height: 52px;
          min-height: 52px;
          max-height: 52px;
          box-sizing: border-box;
          background: #f97316;
          border: none;
          border-bottom: 4px solid #ea580c;
          box-shadow: 0 4px 14px rgba(234, 88, 12, 0.25);
          cursor: pointer;
          border-radius: 8px;
          padding: 0 28px;
          transition: all .2s ease-in-out;
          position: relative;
          color: #ffffff;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 16px;
          line-height: 1;
        }
        .crm-primary-btn-orange:hover {
          transform: translateY(2px);
          border-bottom-width: 2px;
          background: #ea580c;
          box-shadow: 0 2px 8px rgba(234, 88, 12, 0.2);
        }
        .crm-primary-btn-orange:active {
          transform: translateY(4px);
          border-bottom-width: 0px;
        }

        .crm-secondary-btn-white {
          height: 52px;
          min-height: 52px;
          max-height: 52px;
          box-sizing: border-box;
          border: 2px solid #cbd5e1;
          background: #ffffff;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05);
          cursor: pointer;
          border-radius: 8px;
          padding: 0 28px;
          transition: all .2s ease-in-out;
          position: relative;
          color: #0f172a;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 16px;
          line-height: 1;
        }
        .crm-secondary-btn-white:hover {
          border-color: #008cdb;
          color: #008cdb;
          background: #f8fafc;
          box-shadow: 0 4px 12px rgba(0, 140, 219, 0.12);
        }

        .crm-secondary-btn-banner {
          height: 52px;
          min-height: 52px;
          max-height: 52px;
          box-sizing: border-box;
          border: 2px solid rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          cursor: pointer;
          border-radius: 8px;
          padding: 0 28px;
          transition: all .2s ease-in-out;
          position: relative;
          color: #ffffff;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 16px;
          line-height: 1;
        }
        .crm-secondary-btn-banner:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: #ffffff;
        }
      `}</style>

      {/* ========================================================
          1. HERO SECTION (Website Services & AttendHR Style)
      ======================================================== */}
      <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden border-b border-gray-200 bg-gradient-to-b from-[#F0F9FF] via-[#FAFDFF] to-white">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#008cdb 0.75px, transparent 0.75px), radial-gradient(#008cdb 0.75px, #FAFDFF 0.75px)",
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0, 15px 15px",
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#008CDB]/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Pill Tag (Website Services Typography) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-sky-100/80 border border-sky-200 text-[#008CDB] font-semibold text-sm mb-8 shadow-xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008CDB] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008CDB]" />
              </span>
              ⚡ High-Velocity Sales & Customer Intelligence Platform
            </motion.div>

            {/* Main Headline (Website Services Typography) */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6 capitalize"
            >
              CRM That Runs Your{" "}
              <span className="bg-gradient-to-r from-[#008CDB] via-[#0284C7] to-[#0369A1] bg-clip-text text-transparent">
                Sales Pipeline Itself
              </span>
              .
            </motion.h1>

            {/* Subheading (Website Services Typography) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base lg:text-xl text-gray-600 leading-relaxed font-medium mb-8 max-w-2xl mx-auto"
            >
              Capture leads from web and campaigns, manage visual Kanban deals, generate instant GST-compliant PDF
              quotations, and build lasting customer relationships—all in one unified cloud system.
            </motion.p>

            {/* Dual CTAs (Pixel-Perfect Equal Height & Vertical Center Alignment) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="crm-primary-btn-orange w-full sm:w-auto"
              >
                <span>Book a Free Demo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 9"
                  className="h-2.5 w-4 shrink-0"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <button
                type="button"
                onClick={() => setIsBrochureModalOpen(true)}
                className="crm-secondary-btn-white w-full sm:w-auto"
              >
                <svg className="w-5 h-5 text-[#008CDB] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Brochure</span>
              </button>
            </motion.div>

            {/* 4-Item AttendHR-style Trust Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-gray-200"
            >
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-xs">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,140,219,0.1)] text-[#008CDB] text-lg">
                  🔒
                </span>
                <div className="text-left">
                  <span className="block text-sm font-bold text-gray-900">Bank-Grade Security</span>
                  <span className="block text-xs text-gray-500 font-semibold">256-Bit SSL</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-xs">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,140,219,0.1)] text-[#008CDB] text-lg">
                  ⚡
                </span>
                <div className="text-left">
                  <span className="block text-sm font-bold text-gray-900">Real-Time Sync</span>
                  <span className="block text-xs text-gray-500 font-semibold">Cloud Connected</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-xs">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,140,219,0.1)] text-[#008CDB] text-lg">
                  🎧
                </span>
                <div className="text-left">
                  <span className="block text-sm font-bold text-gray-900">24/7 Support</span>
                  <span className="block text-xs text-gray-500 font-semibold">Dedicated Team</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-xs">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,140,219,0.1)] text-[#008CDB] text-lg">
                  ✨
                </span>
                <div className="text-left">
                  <span className="block text-sm font-bold text-gray-900">Easy Adoption</span>
                  <span className="block text-xs text-gray-500 font-semibold">Zero Curve</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Dashboard Showcase with Live Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 lg:mt-16 relative max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl border border-[rgba(0,140,219,0.2)] bg-white p-3 shadow-[0_24px_80px_rgba(0,140,219,0.18)]">
              <div
                className="relative rounded-2xl overflow-hidden cursor-zoom-in group"
                onClick={() => setSelectedImage("/products/crm/CRM-dashboard-v3.png")}
              >
                <img
                  src="/products/crm/CRM-dashboard-v3.png"
                  alt="Isarva CRM Dashboard"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-[#008CDB]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white/95 text-[#008CDB] text-sm font-bold shadow-lg">
                    🔍 Click to Enlarge
                  </span>
                </div>
              </div>

              {/* Floating Metric Badge - Left */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 p-4 rounded-2xl bg-white border border-gray-200 shadow-xl items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">
                  📈
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-semibold">Pipeline Velocity</span>
                  <span className="block text-sm font-bold text-gray-900">+42% Deal Conversion</span>
                </div>
              </div>

              {/* Floating Metric Badge - Right */}
              <div className="hidden sm:flex absolute -top-5 -right-5 p-4 rounded-2xl bg-white border border-gray-200 shadow-xl items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#008CDB] font-bold text-xl">
                  📄
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-semibold">Instant PDF Engine</span>
                  <span className="block text-sm font-bold text-gray-900">1-Click Quotations</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          2. CORE FEATURES (Website Services Grid Typography)
      ======================================================== */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-50 border border-sky-200 text-[#008CDB] font-semibold text-sm mb-6">
              Core Capabilities
            </div>
            <h2 className="mb-6 capitalize text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Everything Your Team Needs to <span className="text-[#008CDB]">Win More Deals</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From capturing inquiries to sending final quotations, Isarva CRM automates every step of your commercial workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresGrid.map((feat) => (
              <div
                key={feat.id}
                className="group relative p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-[#008CDB] hover:bg-sky-50/20 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(0,140,219,0.1)] text-[#008CDB] group-hover:bg-[#008CDB] group-hover:text-white transition-colors duration-300 mb-4 shadow-xs">
                  {feat.icon}
                </div>

                <span className="text-xs font-bold text-[#008CDB] bg-[rgba(0,140,219,0.08)] px-3 py-1 rounded-full mb-3">
                  {feat.tag}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#008CDB] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. DEEP-DIVE TABBED PRODUCT EXPLORER (Website Services Typography)
      ======================================================== */}
      <section className="py-12 lg:py-16 bg-gray-50 relative overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-100 border border-sky-200 text-[#008CDB] font-semibold text-sm mb-6">
              All Modules
            </div>
            <h2 className="mb-6 capitalize text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              One Connected System: <span className="text-[#008CDB]">From Lead to Revenue</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Switch through modules to explore the intuitive interface and built-in automation.
            </p>
          </div>

          {/* Tab Navigation Pill Bar (Website Services Tab Button Styling) */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {tabsData.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#008CDB] to-[#0284C7] text-white shadow-[0_8px_24px_rgba(0,140,219,0.35)]"
                      : "bg-white border-2 border-gray-200 text-gray-600 hover:border-[#008CDB] hover:text-[#008CDB] hover:bg-sky-50"
                  }`}
                >
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text & Bullet Points */}
            <div className="text-center lg:text-left">
              <span className="inline-block text-xs font-bold text-[#008CDB] bg-[rgba(0,140,219,0.1)] px-3.5 py-1 rounded-full mb-3">
                {currentTabContent.badge}
              </span>
              <h3 className="mb-4 text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug">
                {currentTabContent.headline}
              </h3>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                {currentTabContent.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {currentTabContent.bullets.map((b, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-[#008CDB] transition-all duration-200"
                  >
                    <div className="w-6 h-6 rounded-lg bg-sky-100 text-[#008CDB] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="press-illusion-btn-orange bg-orange-600 text-white font-bold px-8 py-4 text-base items-center space-x-2 flex cursor-pointer"
                >
                  <span>Get Started With This</span>
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

            {/* Right: Screenshot with Click to Zoom */}
            <div className="relative">
              <div
                className="relative rounded-3xl border border-gray-200 bg-white p-2 shadow-2xl overflow-hidden cursor-zoom-in group"
                onClick={() => setSelectedImage(currentTabContent.image)}
              >
                <img
                  src={currentTabContent.image}
                  alt={currentTabContent.title}
                  className="w-full h-auto max-h-[480px] object-contain rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-[#008CDB]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white/95 text-[#008CDB] text-sm font-bold shadow-md">
                    🔍 Click to Zoom
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. HOW IT WORKS (Connected 5-Step Process Typography)
      ======================================================== */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-50 border border-sky-200 text-[#008CDB] font-semibold text-sm mb-6">
              Our Process
            </div>
            <h2 className="mb-6 capitalize text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              How <span className="text-[#008CDB]">Isarva CRM</span> Accelerates Deals
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A proven 5-stage sales cycle designed to shorten deal cycles and scale customer retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {howItWorksData.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-[#008CDB] hover:shadow-lg transition-all text-center flex flex-col items-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[#008CDB] mb-4 border border-sky-100">
                  {item.icon}
                </div>
                <span className="text-xs font-black text-[#008CDB] tracking-wider mb-1">
                  STEP {item.step}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. WHY BUSINESSES NEED ISARVA CRM (Website Services Split)
      ======================================================== */}
      <section className="py-12 lg:py-16 bg-gray-50 border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Visual Sync Mockup */}
            <div className="lg:col-span-5">
              <div
                className="relative rounded-3xl bg-white border border-gray-200 p-3 shadow-2xl overflow-hidden cursor-zoom-in group"
                onClick={() => setSelectedImage("/products/crm/mockups/sync_overview.png")}
              >
                <img
                  src="/products/crm/mockups/sync_overview.png"
                  alt="CRM Synchronization Overview"
                  className="w-full h-auto object-contain rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-[#008CDB]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white/95 text-[#008CDB] text-sm font-bold shadow-md">
                    🔍 View Full Mockup
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 6 Value Pillars (Website Services Typography) */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-100 border border-sky-200 text-[#008CDB] font-semibold text-sm mb-6">
                Why Choose Us
              </div>
              <h2 className="mb-6 capitalize text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                Engineered for <span className="text-[#008CDB]">High-Performing</span> Sales Teams
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Unlike complex, overpriced legacy software, Isarva CRM offers enterprise-grade capabilities with the simplicity your sales reps will actually enjoy using daily.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseData.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border-2 border-gray-100 hover:border-[#008CDB] hover:bg-sky-50/20 transition-all text-left"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. MOBILE APP COMPANION (Android & iOS Sync)
      ======================================================== */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-sky-50 border border-gray-200 p-8 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-100 text-[#008CDB] font-semibold text-xs mb-4">
                  Mobile Companion
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                  Run Your Sales Pipeline on the Go
                </h3>
                <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
                  Empower field reps to log client visits, update deal milestones, access customer contact history, and receive instant push notifications for new leads anywhere.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  {/* Google Play Store Badge */}
                  <div className="inline-flex min-h-[58px] items-center gap-3.5 rounded-2xl border-2 border-gray-200 bg-white px-5 py-3 shadow-xs cursor-default hover:border-gray-300">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                      alt="Google Play"
                      className="w-7 h-7"
                    />
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">GET IT ON</span>
                      <span className="text-base font-extrabold text-gray-900">Google Play</span>
                    </div>
                  </div>

                  {/* Apple App Store Badge */}
                  <div className="inline-flex min-h-[58px] items-center gap-3.5 rounded-2xl border-2 border-gray-200 bg-white px-5 py-3 shadow-xs cursor-default hover:border-gray-300">
                    <img
                      src="https://www.vectorlogo.zone/logos/apple/apple-icon.svg"
                      alt="App Store"
                      className="w-7 h-7 object-contain"
                    />
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Download on the</span>
                      <span className="text-base font-extrabold text-gray-900">App Store</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div
                  className="relative cursor-zoom-in group max-w-[420px]"
                  onClick={() => setSelectedImage("/products/crm/mockups/CRM-mobile-mockup.png")}
                >
                  <img
                    src="/products/crm/mockups/CRM-mobile-mockup.png"
                    alt="Isarva CRM Mobile App"
                    className="w-full h-auto drop-shadow-2xl transition-transform duration-300 group-hover:scale-105 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. FREQUENTLY ASKED QUESTIONS (Website Services Typography)
      ======================================================== */}
      <section className="py-12 lg:py-16 bg-gray-50 border-b border-gray-200">
        <div className="w-full max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-100 border border-sky-200 text-[#008CDB] font-semibold text-sm mb-6">
              Got Questions?
            </div>
            <h2 className="mb-6 capitalize text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Isarva CRM setup, security, and pricing.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden bg-white ${
                    isOpen
                      ? "border-[#008CDB] shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-gray-900">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#008CDB] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-base text-gray-600 leading-relaxed border-t border-gray-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. BOTTOM HIGH-IMPACT CTA BANNER (Website Services Typography)
      ======================================================== */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#008CDB] via-[#0284C7] to-[#0369A1] p-8 sm:p-12 lg:p-16 text-center text-white shadow-[0_24px_80px_rgba(0,140,219,0.35)]">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-4 py-1.5 rounded-full mb-6 backdrop-blur-xs">
                Transform Your Sales Today
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Ready to Supercharge Your Sales & Customer Experience?
              </h2>
              <p className="text-base lg:text-xl text-sky-100 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
                Join forward-thinking companies closing deals 2.5x faster with Isarva CRM. Book a free 30-minute tailored walkthrough.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="crm-primary-btn-orange w-full sm:w-auto shadow-md"
                >
                  <span>Book a Free Live Demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 9"
                    className="h-2.5 w-4 shrink-0"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="crm-secondary-btn-banner w-full sm:w-auto"
                >
                  <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download CRM Brochure</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. LIGHTBOX IMAGE ZOOM MODAL
      ======================================================== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Enlarged Preview"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-sky-300 text-sm font-bold flex items-center gap-1 bg-white/20 px-3 py-1.5 rounded-lg"
            >
              ✕ Close Preview
            </button>
          </div>
        </div>
      )}

      {/* ========================================================
          10. MODAL DIALOGS
      ======================================================== */}
      <ContactFormModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        preSelectedType="product"
        preSelectedItem="CRM Application"
      />

      <CRMBrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />
    </div>
  );
}
