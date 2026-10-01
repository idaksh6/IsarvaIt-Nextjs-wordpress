"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactFormModal from "../components/ContactFormModal";
import CRMBrochureModal from "../components/CRMBrochureModal";

const howItWorksData = [
  {
    step: "01",
    title: "Capture Leads",
    subtitle: "Inbound Intake",
    desc: "Collect and auto-organize leads from websites, WhatsApp, email, and ad campaigns seamlessly.",
    tag: "🔵 Electric Sky",
    pillText: "01 • INTAKE",
    metric: "Instant Auto-Routing",
    theme: {
      cardBg: "bg-sky-50/40 hover:bg-sky-50/90",
      border: "border-sky-200/80 hover:border-sky-500",
      iconBg: "bg-gradient-to-br from-sky-400 to-[#008CDB]",
      shadow: "hover:shadow-sky-500/20",
      accent: "text-[#008CDB]",
      badge: "bg-sky-100 text-sky-700 border-sky-200",
      stepNum: "text-sky-600 bg-sky-100/70 border-sky-200",
    },
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Track Opportunities",
    subtitle: "Kanban Pipeline",
    desc: "Move qualified prospects through visual Kanban stages with clear deal values and win probabilities.",
    tag: "🟣 Royal Violet",
    pillText: "02 • PIPELINE",
    metric: "Drag & Drop Kanban",
    theme: {
      cardBg: "bg-purple-50/40 hover:bg-purple-50/90",
      border: "border-purple-200/80 hover:border-purple-500",
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
      shadow: "hover:shadow-purple-500/20",
      accent: "text-purple-600",
      badge: "bg-purple-100 text-purple-700 border-purple-200",
      stepNum: "text-purple-600 bg-purple-100/70 border-purple-200",
    },
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Manage Activities",
    subtitle: "Task Follow-ups",
    desc: "Coordinate follow-ups, calls, tasks, and meetings in one calendar view with automated alerts.",
    tag: "🟢 Emerald Green",
    pillText: "03 • EXECUTION",
    metric: "Zero Missed Calls",
    theme: {
      cardBg: "bg-emerald-50/40 hover:bg-emerald-50/90",
      border: "border-emerald-200/80 hover:border-emerald-500",
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-600",
      shadow: "hover:shadow-emerald-500/20",
      accent: "text-emerald-600",
      badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
      stepNum: "text-emerald-600 bg-emerald-100/70 border-emerald-200",
    },
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Create Quotations",
    subtitle: "1-Click Quotes",
    desc: "Generate professional, GST-compliant PDF quotes and share instantly with clients via email or WhatsApp.",
    tag: "🟠 Warm Tangerine",
    pillText: "04 • REVENUE",
    metric: "60-Second GST PDF",
    theme: {
      cardBg: "bg-orange-50/40 hover:bg-orange-50/90",
      border: "border-orange-200/80 hover:border-orange-500",
      iconBg: "bg-gradient-to-br from-orange-400 to-amber-600",
      shadow: "hover:shadow-orange-500/20",
      accent: "text-orange-600",
      badge: "bg-orange-100 text-orange-700 border-orange-200",
      stepNum: "text-orange-600 bg-orange-100/70 border-orange-200",
    },
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Build Relationships",
    subtitle: "Customer 360°",
    desc: "Access full 360° customer history across web and mobile to retain, upsell, and maximize customer LTV.",
    tag: "🔴 Rose Coral",
    pillText: "05 • RETENTION",
    metric: "Full Account Dossier",
    theme: {
      cardBg: "bg-rose-50/40 hover:bg-rose-50/90",
      border: "border-rose-200/80 hover:border-rose-500",
      iconBg: "bg-gradient-to-br from-rose-400 to-pink-600",
      shadow: "hover:shadow-rose-500/20",
      accent: "text-rose-600",
      badge: "bg-rose-100 text-rose-700 border-rose-200",
      stepNum: "text-rose-600 bg-rose-100/70 border-rose-200",
    },
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const featuresGrid = [
  {
    id: "lead-mgmt",
    title: "Lead Capture & Scoring",
    desc: "Automatically funnel inbound inquiries from web forms, WhatsApp, and campaigns into an intelligent, categorized pipeline.",
    tag: "Inbound Engine",
    theme: {
      iconBg: "bg-gradient-to-br from-sky-400 to-[#008CDB]",
      badge: "bg-sky-100 text-sky-700 border-sky-200",
      dotBg: "bg-[#008CDB]",
      borderHover: "hover:border-sky-400",
      shadowHover: "hover:shadow-sky-500/15",
    },
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    id: "deal-pipeline",
    title: "Kanban Deal Pipeline",
    desc: "Visual drag-and-drop opportunity board to monitor stage progression, expected closing dates, probability, and deal size.",
    tag: "Visual Sales",
    theme: {
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
      badge: "bg-purple-100 text-purple-700 border-purple-200",
      dotBg: "bg-purple-500",
      borderHover: "hover:border-purple-400",
      shadowHover: "hover:shadow-purple-500/15",
    },
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    id: "quotations",
    title: "Instant Quotations & PDF",
    desc: "Generate branded estimates, commercial proposals, and itemized quotations with dynamic tax rules in under 60 seconds.",
    tag: "Fast Turnaround",
    theme: {
      iconBg: "bg-gradient-to-br from-orange-400 to-amber-600",
      badge: "bg-orange-100 text-orange-700 border-orange-200",
      dotBg: "bg-orange-500",
      borderHover: "hover:border-orange-400",
      shadowHover: "hover:shadow-orange-500/15",
    },
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: "activity-tracker",
    title: "Activity & Task Sync",
    desc: "Eliminate missed follow-ups with scheduled reminders, unified calendar task views, and complete team activity logs.",
    tag: "Productivity",
    theme: {
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-600",
      badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
      dotBg: "bg-emerald-500",
      borderHover: "hover:border-emerald-400",
      shadowHover: "hover:shadow-emerald-500/15",
    },
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "customer-360",
    title: "Customer 360° Profile",
    desc: "Centralized dossier with multi-contact hierarchy, past interaction history, associated quotes, and contract files.",
    tag: "Deep Context",
    theme: {
      iconBg: "bg-gradient-to-br from-rose-400 to-pink-600",
      badge: "bg-rose-100 text-rose-700 border-rose-200",
      dotBg: "bg-rose-500",
      borderHover: "hover:border-rose-400",
      shadowHover: "hover:shadow-rose-500/15",
    },
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "analytics-bi",
    title: "Sales Analytics & Reports",
    desc: "Actionable real-time intelligence on conversion velocity, sales rep performance, win-loss reasons, and revenue targets.",
    tag: "Revenue BI",
    theme: {
      iconBg: "bg-gradient-to-br from-indigo-500 to-blue-600",
      badge: "bg-indigo-100 text-indigo-700 border-indigo-200",
      dotBg: "bg-indigo-500",
      borderHover: "hover:border-indigo-400",
      shadowHover: "hover:shadow-indigo-500/15",
    },
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
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
    image: "/products/crm/concepts/leads-3d.jpg",
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
    image: "/products/crm/concepts/deals-3d.jpg",
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
    image: "/products/crm/concepts/quotations-3d.jpg",
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
    image: "/products/crm/concepts/calendar-3d.jpg",
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
    image: "/products/crm/concepts/customer-3d.jpg",
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
    image: "/products/crm/concepts/analytics-3d.jpg",
  },
];

const whyChooseData = [
  {
    id: "industry",
    title: "Industry-Specific Configurations",
    desc: "Pre-configured pipeline stages, quotation templates, and custom data fields tailored for IT Services, Manufacturing, Healthcare, Retail, and Real Estate.",
    tag: "Vertical-Tailored",
    highlight: "Zero complex custom coding needed",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "from-sky-500/10 to-blue-500/10 text-[#008CDB]",
  },
  {
    id: "onboarding",
    title: "Dedicated White-Glove Onboarding",
    desc: "We don't leave you with a login link. Get direct data migration from Excel/CSV, personalized team walkthroughs, and responsive priority support.",
    tag: "Guided Setup",
    highlight: "Go-live within 2 to 7 business days",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600",
  },
  {
    id: "customizable",
    title: "100% Adaptable Workflows",
    desc: "Adapt deal stages, custom dropdowns, lead sources, and quotation PDF formats to mirror your unique sales hierarchy without costly developer contracts.",
    tag: "Full Flexibility",
    highlight: "Dynamic custom field builder",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    color: "from-amber-500/10 to-orange-500/10 text-amber-600",
  },
  {
    id: "scalable",
    title: "High-Availability Cloud Infrastructure",
    desc: "Built on high-speed AWS cloud architecture with 99.9% uptime SLA, automated encrypted backups, and lightning-fast page loading speeds.",
    tag: "99.9% Uptime SLA",
    highlight: "Scales from 5 to 5,000+ sales reps",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: "from-indigo-500/10 to-violet-500/10 text-indigo-600",
  },
  {
    id: "security",
    title: "Granular Role-Based Access Control",
    desc: "Control exactly who sees lead contact info, quotation discounts, or revenue reports with multi-tier managerial permissions and audit trails.",
    tag: "Bank-Grade Security",
    highlight: "256-Bit SSL encryption & logs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "from-rose-500/10 to-pink-500/10 text-rose-600",
  },
  {
    id: "adoption",
    title: "Instant Sales Rep Adoption",
    desc: "An ultra-clean, intuitive interface designed specifically for high daily usage. Zero steep learning curve so your sales team stays productive from day one.",
    tag: "High Adoption Rate",
    highlight: "98% user satisfaction rating",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-cyan-500/10 to-sky-500/10 text-[#008CDB]",
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

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
          1. HERO SECTION (2-Column AttendHR & Website Services Style)
      ======================================================== */}
      <section className="relative pt-32 lg:pt-36 pb-12 lg:pb-16 overflow-hidden border-b border-gray-200 bg-gradient-to-b from-[#F0F9FF] via-[#FAFDFF] to-white">
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
        <div className="absolute top-12 left-1/4 w-[500px] h-[300px] bg-[#008CDB]/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-20 right-10 w-[400px] h-[300px] bg-[#0284C7]/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* ── Left Column: Headline, Copy & CTAs (7 Cols) ── */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Pill Tag (Website Services Typography) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-orange-500/10 border border-sky-300/60 text-[#008CDB] font-bold text-xs sm:text-sm mb-6 shadow-2xs"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008CDB] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008CDB]" />
                </span>
                <span>⚡ High-Velocity Sales & Customer Intelligence Platform</span>
              </motion.div>

              {/* Main Headline (Website Services Typography) */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 capitalize max-w-2xl"
              >
                CRM That Runs Your{" "}
                <span className="bg-gradient-to-r from-[#008CDB] via-[#6366F1] to-[#0284C7] bg-clip-text text-transparent">
                  Sales Pipeline Itself
                </span>
                .
              </motion.h1>

              {/* Subheading (Website Services Typography) */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-normal mb-6 max-w-xl mx-auto lg:mx-0"
              >
                Capture leads from web and campaigns, manage visual Kanban deals, generate instant GST-compliant PDF
                quotations, and build lasting customer relationships—all in one unified cloud system.
              </motion.p>

              {/* Feature Chips with Vibrant Color Stages */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 justify-center lg:justify-start max-w-xl"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs sm:text-sm font-semibold shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#008CDB] shrink-0" />
                  <span>Inbound Leads</span>
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shrink-0" />
                  <span>Visual Kanban</span>
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs sm:text-sm font-semibold shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#F97316] shrink-0" />
                  <span>1-Click GST Quotes</span>
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
                  <span>Customer 360°</span>
                </span>
              </motion.div>

              {/* Dual CTAs (Pixel-Perfect Equal Height & Vertical Center Alignment) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto"
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

              {/* 3-Pillar Micro Trust Ribbon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="grid grid-cols-3 gap-2 sm:gap-3 pt-6 border-t border-gray-200/90 w-full"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white border border-gray-200 shadow-xs">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-[#008CDB] text-xs sm:text-sm font-bold">
                    🔒
                  </div>
                  <div className="leading-tight">
                    <span className="block text-[11px] sm:text-xs font-bold text-gray-900">256-Bit SSL</span>
                    <span className="block text-[9px] sm:text-[10px] text-gray-500 font-medium">Bank-Grade</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white border border-gray-200 shadow-xs">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-[#008CDB] text-xs sm:text-sm font-bold">
                    ⚡
                  </div>
                  <div className="leading-tight">
                    <span className="block text-[11px] sm:text-xs font-bold text-gray-900">Real-Time</span>
                    <span className="block text-[9px] sm:text-[10px] text-gray-500 font-medium">Cloud Sync</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white border border-gray-200 shadow-xs">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-[#008CDB] text-xs sm:text-sm font-bold">
                    🎧
                  </div>
                  <div className="leading-tight">
                    <span className="block text-[11px] sm:text-xs font-bold text-gray-900">24/7 Support</span>
                    <span className="block text-[9px] sm:text-[10px] text-gray-500 font-medium">Dedicated</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── Right Column: Clean Floating App & Device Mockup (5 Cols) ── */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative cursor-zoom-in group w-full max-w-[540px]"
                onClick={() => setSelectedImage("/products/crm/CRM-dashboard-v3.png")}
              >
                {/* Soft ambient backdrop glow */}
                <div className="absolute inset-4 bg-gradient-to-tr from-[#008CDB]/25 via-[#0284C7]/20 to-sky-200/30 blur-3xl rounded-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Floating Mockup Image */}
                <div className="relative">
                  <img
                    src="/products/crm/CRM-dashboard-v3.png"
                    alt="Isarva CRM Live Sales Dashboard"
                    className="w-full h-auto object-contain drop-shadow-[0_24px_60px_rgba(0,140,219,0.22)] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="px-4 py-2 rounded-xl bg-white/95 text-[#008CDB] text-xs font-bold shadow-lg border border-sky-100">
                      🔍 Click to Enlarge
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CORE FEATURES (Soft Modern Gradient & Gentle Hover Elevation)
      ======================================================== */}
      <section className="py-14 lg:py-20 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-orange-500/10 border border-sky-300/60 text-[#008CDB] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#008CDB] animate-pulse" />
              Core Capabilities
            </div>
            <h2 className="mb-4 capitalize text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Everything Your Team Needs to <span className="bg-gradient-to-r from-[#008CDB] via-indigo-600 to-[#0284C7] bg-clip-text text-transparent">Win More Deals</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
              From capturing inquiries to sending final quotations, Isarva CRM automates every step of your commercial workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {featuresGrid.map((feat) => (
              <div
                key={feat.id}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/80 ${feat.theme.borderHover} ${feat.theme.shadowHover} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between shadow-xs`}
              >
                <div className="flex flex-col items-center w-full">
                  {/* Centered Icon Box */}
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feat.theme.iconBg} shadow-md group-hover:scale-110 transition-transform duration-300 mb-4`}>
                    {feat.icon}
                  </div>

                  {/* Centered Tag Badge */}
                  <div className="mb-3">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${feat.theme.badge}`}>
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-gray-900 mb-2 group-hover:text-[#008CDB] transition-colors leading-snug text-center">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal text-center">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. PRODUCT MODULES SHOWCASE (Alternating Left/Right 2-Column)
      ======================================================== */}
      <section className="py-14 lg:py-20 bg-gray-50/70 relative overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center mb-14 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-orange-500/10 border border-sky-300/60 text-[#008CDB] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#008CDB] animate-pulse" />
              Complete Sales Ecosystem
            </div>
            <h2 className="mb-4 capitalize text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              One Connected System: <span className="bg-gradient-to-r from-[#008CDB] via-indigo-600 to-[#0284C7] bg-clip-text text-transparent">From Lead to Revenue</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Explore how each integrated module within Isarva CRM eliminates silos, automates repetitive administrative work, and accelerates your sales velocity.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {tabsData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center"
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-3">
                      <span className="text-xs font-bold text-[#008CDB] bg-[rgba(0,140,219,0.08)] border border-[rgba(0,140,219,0.2)] px-3 py-1 rounded-full uppercase tracking-wider">
                        {item.badge}
                      </span>
                      <span className="text-xs font-semibold text-gray-400">
                        Module 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mb-3.5 text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                      {item.headline}
                    </h3>
                    
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 font-normal max-w-xl">
                      {item.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8 w-full text-left">
                      {item.bullets.map((b, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-200/80 shadow-xs hover:border-[#008CDB] transition-all duration-200"
                        >
                          <div className="w-5 h-5 rounded-md bg-sky-100 text-[#008CDB] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                            ✓
                          </div>
                          <span className="text-gray-700 text-xs sm:text-sm font-medium leading-snug">
                            {b}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto">
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
                    </div>
                  </div>

                  {/* Screenshot Column */}
                  <div className={`lg:col-span-6 flex items-center justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative group w-full max-w-[540px]">
                      <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/20 to-blue-600/20 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
                      
                      <div
                        className="relative rounded-2xl lg:rounded-3xl border border-gray-200/90 bg-white p-2 sm:p-3 shadow-xl shadow-slate-200/60 overflow-hidden cursor-zoom-in transition-all duration-300 group-hover:shadow-2xl group-hover:border-sky-300"
                        onClick={() => setSelectedImage(item.image)}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto max-h-[440px] object-contain rounded-xl sm:rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                        
                        {/* Hover Overlay Badge */}
                        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <span className="px-4 py-2 rounded-xl bg-white/95 backdrop-blur-xs text-[#008CDB] text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2 border border-sky-100">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                            </svg>
                            Click to Zoom
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. HOW IT WORKS (Connected 5-Step Process with Vibrant Color Stages)
      ======================================================== */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 border-b border-gray-200 relative overflow-hidden">
        {/* Subtle background ambient glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-200/30 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-200/30 blur-3xl pointer-events-none rounded-full" />

        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-14 lg:mb-18">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-orange-500/10 border border-sky-300/60 text-[#008CDB] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#008CDB] animate-pulse" />
              End-to-End Sales Acceleration
            </div>
            <h2 className="mb-4 capitalize text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              How <span className="bg-gradient-to-r from-[#008CDB] via-indigo-600 to-[#0284C7] bg-clip-text text-transparent">Isarva CRM</span> Accelerates Deals
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A proven 5-stage automated sales cycle designed to shorten sales velocity, prevent lead leakage, and maximize customer lifetime value.
            </p>
          </div>

          {/* 5-Step Cards Grid with Responsive Breakpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-3.5 xl:gap-4.5 items-stretch">
            {howItWorksData.map((item, idx) => {
              const isLast = idx === howItWorksData.length - 1;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col min-w-0 ${
                    isLast ? "sm:col-span-2 sm:max-w-md sm:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 xl:col-span-1" : ""
                  }`}
                >
                  {/* Card Container */}
                  <div
                    className={`group relative flex-1 p-5 sm:p-6 lg:p-4.5 xl:p-5 2xl:p-6 rounded-2xl bg-white border border-gray-200/90 hover:${item.theme.border} hover:shadow-xl ${item.theme.shadow} hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between overflow-hidden shadow-xs h-full min-w-0`}
                  >
                    {/* Top Radiant Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 ${item.theme.iconBg}`} />

                    <div className="flex flex-col items-center w-full min-w-0">
                      {/* Centered Icon Box */}
                      <div className={`flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${item.theme.iconBg} shadow-md group-hover:scale-110 transition-transform duration-300 mb-3.5`}>
                        {item.icon}
                      </div>

                      {/* Centered Step & Subtitle Pill */}
                      <div className="flex items-center justify-center mb-3">
                        <span className={`inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11.5px] font-bold px-3 py-1 rounded-full border ${item.theme.badge} shadow-2xs whitespace-nowrap`}>
                          <span className="font-extrabold uppercase tracking-wider">STEP {item.step}</span>
                          <span className="opacity-35">•</span>
                          <span>{item.subtitle}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg lg:text-[15px] xl:text-lg font-extrabold text-gray-900 leading-snug mb-1.5 group-hover:text-[#008CDB] transition-colors text-center break-words">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs lg:text-[11.5px] xl:text-xs text-gray-600 leading-relaxed font-normal mb-4 text-center">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Micro Metric Chip */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-center w-full min-w-0">
                      <span className="text-[10.5px] sm:text-[11px] font-bold text-gray-800 flex items-center justify-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="truncate">{item.metric}</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. WHY BUSINESSES NEED ISARVA CRM (Engineered for High-Performing Teams)
      ======================================================== */}
      <section className="py-14 lg:py-20 bg-white border-b border-gray-200 relative overflow-hidden">
        {/* Background ambient accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-14 lg:mb-18">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-orange-500/10 border border-sky-300/60 text-[#008CDB] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#008CDB] animate-pulse" />
              Why Sales Leaders Choose Isarva
            </div>
            <h2 className="mb-4 capitalize text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Engineered for <span className="bg-gradient-to-r from-[#008CDB] via-indigo-600 to-[#0284C7] bg-clip-text text-transparent">High-Performing</span> Sales Teams
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Unlike complex, overpriced legacy software, Isarva CRM delivers enterprise power with intuitive simplicity your sales reps will actually love using every day.
            </p>
          </div>

          {/* 6 High-Performance Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-14">
            {whyChooseData.map((item) => (
              <div
                key={item.id}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/80 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between shadow-xs"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Centered Icon Box */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xs border border-gray-100 group-hover:scale-110 transition-transform duration-300 mb-4`}>
                    {item.icon}
                  </div>

                  {/* Centered Tag Badge */}
                  <div className="mb-3">
                    <span className="text-[11px] font-bold text-gray-600 bg-gray-100 group-hover:bg-sky-100 group-hover:text-[#008CDB] px-3 py-1 rounded-full uppercase tracking-wider transition-colors duration-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-gray-900 mb-2.5 group-hover:text-[#008CDB] transition-colors leading-snug text-center">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-5 text-center">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-2 w-full">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-black shrink-0">
                    ✓
                  </div>
                  <span className="text-xs font-semibold text-gray-700">
                    {item.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* High-Trust Metrics Bar */}
          <div className="pt-10 border-t border-gray-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/60 border border-sky-100 text-center">
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#008CDB] to-blue-600 bg-clip-text text-transparent mb-1">2–7 Days</div>
                <div className="text-xs font-bold text-gray-800 uppercase tracking-wider">Rapid Go-Live</div>
                <div className="text-[11px] text-gray-500 mt-0.5 font-normal">Guided setup & data migration</div>
              </div>
              
              <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/60 border border-sky-100 text-center">
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#008CDB] to-indigo-600 bg-clip-text text-transparent mb-1">99.9%</div>
                <div className="text-xs font-bold text-gray-800 uppercase tracking-wider">Cloud Uptime</div>
                <div className="text-[11px] text-gray-500 mt-0.5 font-normal">High-speed AWS infrastructure</div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/60 border border-sky-100 text-center">
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#008CDB] to-teal-600 bg-clip-text text-transparent mb-1">256-Bit</div>
                <div className="text-xs font-bold text-gray-800 uppercase tracking-wider">SSL Security</div>
                <div className="text-[11px] text-gray-500 mt-0.5 font-normal">Encrypted daily backups</div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/60 border border-sky-100 text-center">
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#008CDB] to-orange-600 bg-clip-text text-transparent mb-1">24/7</div>
                <div className="text-xs font-bold text-gray-800 uppercase tracking-wider">Direct Support</div>
                <div className="text-[11px] text-gray-500 mt-0.5 font-normal">Dedicated WhatsApp & phone</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. MOBILE APP COMPANION (Android & iOS Sync)
      ======================================================== */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-sky-50/80 via-white to-sky-50/80 border border-gray-200/90 p-6 sm:p-8 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-[#008CDB] font-bold text-xs mb-4">
                  Mobile Companion
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                  Run Your Sales Pipeline on the Go
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                  Empower field reps to log client visits, update deal milestones, access customer contact history, and receive instant push notifications for new leads anywhere.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
                  {/* Google Play Store Badge */}
                  <div className="inline-flex min-h-[56px] items-center gap-3.5 rounded-2xl border border-gray-200 bg-white px-5 py-2.5 shadow-2xs cursor-default hover:border-gray-300">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                      alt="Google Play"
                      className="w-6 h-6"
                    />
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">GET IT ON</span>
                      <span className="text-sm sm:text-base font-extrabold text-gray-900">Google Play</span>
                    </div>
                  </div>

                  {/* Apple App Store Badge */}
                  <div className="inline-flex min-h-[56px] items-center gap-3.5 rounded-2xl border border-gray-200 bg-white px-5 py-2.5 shadow-2xs cursor-default hover:border-gray-300">
                    <img
                      src="https://www.vectorlogo.zone/logos/apple/apple-icon.svg"
                      alt="App Store"
                      className="w-6 h-6 object-contain"
                    />
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Download on the</span>
                      <span className="text-sm sm:text-base font-extrabold text-gray-900">App Store</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div
                  className="relative cursor-zoom-in group max-w-[380px]"
                  onClick={() => setSelectedImage("/products/crm/mockups/CRM-mobile-mockup.png")}
                >
                  <img
                    src="/products/crm/mockups/CRM-mobile-mockup.png"
                    alt="Isarva CRM Mobile App"
                    className="w-full h-auto drop-shadow-xl transition-transform duration-300 group-hover:scale-105 object-contain"
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
      <section className="py-14 lg:py-20 bg-gray-50 border-b border-gray-200">
        <div className="w-full max-w-4xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-orange-500/10 border border-sky-300/60 text-[#008CDB] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#008CDB] animate-pulse" />
              Got Questions?
            </div>
            <h2 className="mb-4 capitalize text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#008CDB] via-indigo-600 to-[#0284C7] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Everything you need to know about Isarva CRM setup, security, and pricing.
            </p>
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                    isOpen
                      ? "border-[#008CDB] shadow-md shadow-sky-500/10"
                      : "border-gray-200/90 hover:border-gray-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
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
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100">
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
      <section className="py-14 lg:py-20 bg-white">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#008CDB] via-[#0284C7] to-[#0369A1] p-6 sm:p-12 lg:p-16 text-center text-white shadow-[0_24px_80px_rgba(0,140,219,0.3)]">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-4 py-1.5 rounded-full mb-6 backdrop-blur-xs">
                Transform Your Sales Today
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 sm:mb-6 leading-tight">
                Ready to Supercharge Your Sales & Customer Experience?
              </h2>
              <p className="text-sm sm:text-base lg:text-xl text-sky-100 mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
                Join forward-thinking companies closing deals 2.5x faster with Isarva CRM. Book a free 30-minute tailored walkthrough.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
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
