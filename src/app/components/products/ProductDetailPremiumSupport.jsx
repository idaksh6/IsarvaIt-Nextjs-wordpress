"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  LayoutGrid,
  Users,
  Clock,
  BarChart3,
  History,
  CheckCircle2,
  FileText,
  FilePlus,
  Settings,
  Package,
  Lock,
  StickyNote,
  PlusCircle,
  ShieldCheck,
  Network,
  Gauge,
  Eye,
  TrendingUp,
  Sparkles,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import Link from "../AppLink";
import ContactFormModal from "../ContactFormModal";

const SUPPORT_PURPLE = "#9333EA";
const SUPPORT_DARK = "#4B4B4B";
const SUPPORT_GREY = "#F5F5F5";

/* ─────────────────────────────────────────────────────────────
   INDUSTRIES BUILT FOR DATA
───────────────────────────────────────────────────────────── */
const industriesBuiltFor = [
  {
    title: "Website Design Agencies",
    description: "Manage launches from A-to-Z with web design project management software, and track SSL/domain renewals so client sites never go offline.",
    icon: "🎨"
  },
  {
    title: "Digital Marketing Firms",
    description: "Manage campaign requests and recurring social media posts in one central hub with digital marketing project management software.",
    icon: "📱"
  },
  {
    title: "Website Development Companies",
    description: "Plan, develop, and deliver websites efficiently by managing project tickets, tracking progress, and organizing all assets and client feedback in one centralized platform with website development project management software.",
    icon: "🌐"
  },
  {
    title: "Managed IT Service Providers (MSPs)",
    description: "Centralize support tickets and maintain a rigorous schedule for hardware and license renewals using IT project service management software.",
    icon: "🛠️"
  },
  {
    title: "Creative Design & Branding Company",
    description: "Break down complex creative workflows and clearly track progress from brainstorming to production with creative project management software.",
    icon: "✨"
  },
  {
    title: "Internet Marketing & SEO Company",
    description: "Organize monthly deliverables like backlink reports and track time spent on every campaign for clear ROI using SEO project management software.",
    icon: "📊"
  },
  {
    title: "Software Development Company",
    description: "Streamline bug tracking, manage server backups, and maintain detailed developer activity logs with software development project management software.",
    icon: "💻"
  },
  {
    title: "Financial & Accounting Company",
    description: "Securely store sensitive client portal credentials and never miss a tax filing deadline with accounting project management software.",
    icon: "📈"
  },
  {
    title: "Full-Service Marketing Agencies",
    description: "Bridge the gap between creative teams and clients with real-time resource tracking using marketing agency project management software.",
    icon: "🤝"
  }
];

/* ─────────────────────────────────────────────────────────────
   FAQ ACCORDION COMPONENT
───────────────────────────────────────────────────────────── */
const faqData = [
  {
    question: "What is the Internal Support Software and how can it help our organization?",
    answer: "The Internal Support System (ISS) is a centralized hub designed to streamline operational workflows by integrating project, task, ticket, and client management into a single platform. It acts as a 'single source of truth,' allowing you to track everything from daily task execution and billable hours to critical service renewals like hosting and AMC. By providing granular role-based security and automated backup history, ISS ensures organizational transparency and data safety. Additionally, its powerful analytics and real-time notifications via Email and Google Chat empower your team to eliminate manual errors and optimize project efficiency.",
    icon: "🎯",
    color: "#9333EA"
  },
  {
    question: "How billable, Non billable, Internal Billable hrs calculated?",
    answer: "Calculations are managed through a centralized Daily Report System that converts daily task entries into actionable project data. At the end of each day, employees submit reports by selecting their assigned project or ticket and logging the exact hours worked. By categorizing each entry as Billable, Non-Billable, or Internal Billable, the system automatically aggregates the total time spent. This granular data allows management to track the precise hours invested per project and ticket, while also monitoring individual employee productivity and overall project profitability.",
    icon: "⏱️",
    color: "#9333EA"
  },
  {
    question: "Is there a User Permission, role based access?",
    answer: "Yes, the system includes a comprehensive Role-Based Access Control (RBAC) system. Within the Employee Management Module, administrators have full authority to decide exactly which modules each employee can access.",
    icon: "🔒",
    color: "#9333EA"
  },
  {
    question: "Are there any Reports and Analytics Provided?",
    answer: "Yes, the system provides a robust suite of both standard and analytical reports designed for total operational visibility. You can access detailed project timesheets, backup logs, and overflow reports to monitor deadlines and data safety in real-time. Our advanced analytics track employee productivity, calculating per-day billable hours and comparing them against non-billable and internal tasks. Furthermore, project consumption analytics provide high-level insights into resource allocation, ensuring every project remains profitable and strategically aligned.",
    icon: "📊",
    color: "#9333EA"
  },
  {
    question: "What is the basic flow of the Internal project Ticket?",
    answer: "The workflow starts with Admins assigning role-based permissions to users for secure access. Managers then initialize projects by setting timelines, teams, and billing departments. Once active, teams use Task Management within projects to store credentials and assets, while the standalone Ticketing System handles support requests via real-time comments and flagging. Each day ends with employees submitting Daily Reports to log their worked hours. This data feeds directly into Advanced Analytics, providing management with instant visibility into project health and employee productivity.",
    icon: "🔄",
    color: "#9333EA"
  },
  {
    question: "Does the system send reminders for upcoming renewals?",
    answer: "While automated email reminders are not currently active, the system features a Dedicated Renewal Dashboard. This high-visibility card tracks service expiry in real-time, highlighting all renewals due within the next 6 days. It also tracks overdue items, clearly showing if a renewal has lapsed (e.g., 'Expiry crossed by 2 days') to ensure no service downtime occurs.",
    icon: "🔔",
    color: "#9333EA"
  },
  {
    question: "Can we export the reports and analytics to PDF or Excel?",
    answer: "For now the system provides a built-in PDF Export feature for all standard reports. This allows managers to easily generate professional documents for project reviews, internal audits, or client meetings.",
    icon: "📄",
    color: "#9333EA"
  },
  {
    question: "How does the Ticket Management system work?",
    answer: "Create tickets, assign specialized team members, and collaborate in real-time through comments and file attachments while accurately tracking billable hours for every task. The system provides full visibility into ticket status, priority levels, and resolution timelines.",
    icon: "🎫",
    color: "#9333EA"
  },
  {
    question: "What kind of backup management features are available?",
    answer: "Securely manage file locations for projects, tickets, and internal data with flexible backup type selections and detailed coordination comments. Access a comprehensive backup history to track every version by date, ensuring old backups are always organized and ready for recovery.",
    icon: "💾",
    color: "#9333EA"
  },
  {
    question: "How does the notification system work?",
    answer: "Stay updated with automated alerts during project creation and daily report submissions for seamless team communication. Receive real-time notifications for every task submission via email and Google Chat, ensuring no milestone or update is ever missed.",
    icon: "📧",
    color: "#9333EA"
  },
  {
    question: "What makes Isarva Support Software as the best project management software for our team?",
    answer: "Unlike isolated platforms, ISS is the best all-in-one project management software because it seamlessly blends daily task tracking, client ticket resolution, and automated operational reporting into a single source of truth, removing the need for multiple expensive subscriptions.",
    icon: "🏆",
    color: "#9333EA"
  },
  {
    question: "Can Isarva Support Software handle multiple complex workflows simultaneously?",
    answer: "Absolutely. ISS is built as a scalable project management software that supports multiple project tracking and cross-departmental team collaboration and tracking. Whether you are running agile development sprints or managing standard creative client deliverables, the system adapts to your workflow.",
    icon: "⚙️",
    color: "#9333EA"
  }
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFaqItem = (faq, index) => {
    const isOpen = openIndex === index;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
        className={`group relative bg-white border-2 transition-all duration-300 overflow-hidden flex flex-col ${isOpen
          ? "border-[#9333EA] shadow-[0_8px_30px_rgba(147,51,234,0.15)]"
          : "border-gray-200 hover:border-gray-300 hover:shadow-md"
          }`}
        style={{
          borderRadius: "20px",
        }}
      >
        {/* Gradient Accent Bar */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          style={{
            background: "linear-gradient(180deg, #9333EA 0%, #7c3aed 100%)",
          }}
        />

        {/* Question Header */}
        <button
          onClick={() => toggleFaq(index)}
          className="w-full text-left px-6 py-5 flex items-start gap-4 transition-colors duration-200 flex-grow"
        >
          {/* Icon Circle */}
          <div
            className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-lg md:text-xl transition-all duration-300 ${isOpen
              ? "bg-gradient-to-br from-[#9333EA] to-[#7c3aed] shadow-lg scale-110"
              : "bg-gray-100 group-hover:bg-gray-200"
              }`}
          >
            <span className={isOpen ? "filter drop-shadow" : ""}>
              {faq.icon}
            </span>
          </div>

          {/* Question Text */}
          <div className="flex-1 pt-1">
            <h3
              className={`text-[17px] font-bold transition-colors duration-200 pr-8 ${isOpen ? "text-[#9333EA]" : "text-[#0a0a0a] group-hover:text-[#9333EA]"
                }`}
            >
              {faq.question}
            </h3>
          </div>

          {/* Toggle Icon */}
          <div className="flex-shrink-0 mt-1">
            <div
              className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen
                ? "bg-[#9333EA] rotate-180"
                : "bg-gray-100 group-hover:bg-gray-200 group-hover:rotate-180"
                }`}
            >
              <svg
                className={`w-5 h-5 transition-colors ${isOpen ? "text-white" : "text-gray-600"
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </button>

        {/* Answer Content with Animation */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pl-[24px]">
                <div className="pt-1 pb-2 border-t border-gray-100 mt-2">
                  <p className="text-[15px] text-[#555] leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
      {faqData.map((faq, index) => renderFaqItem(faq, index))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ISS FEATURE DATA
───────────────────────────────────────────────────────────── */
const supportFeatures = [
  {
    id: "project",
    label: "Project and Task Management",
    icon: "📋",
    color: "#4F46E5",
    desc: "Add projects, set deadlines, assign billing companies, and organize tasks, notes, credentials, internal docs, and assets in a well-structured manner. Scalable project management software that grows alongside your organization",
    placeholder: "PM",
    image: "/products/support/Project-&-Task-Management.jpg",
  },
  {
    id: "ticket",
    label: "Ticket Management",
    icon: "🎫",
    color: "#0EA5E9",
    desc: "Create tickets, assign specialized team members, and collaborate in real-time through comments and file attachments while accurately tracking billable hours for every task.",
    placeholder: "TM",
    image: "/products/support/Ticket-management.jpg",
  },
  {
    id: "renewal",
    label: "Renewal Management",
    icon: "🔄",
    color: "#349f48",
    desc: "Centralize and track domain, hosting, application AMC, and other essential service details for every project and client. Use a dedicated dashboard to monitor expiry dates in real-time.",
    placeholder: "RM",
    image: "/products/support/Renewal-Management.jpg",
  },
  {
    id: "backup",
    label: "Backup Management",
    icon: "💾",
    color: "#F59E0B",
    desc: "Securely manage file locations for projects, tickets, and internal data with flexible backup type selections and detailed coordination comments. Access comprehensive backup history.",
    placeholder: "BM",
    image: "/products/support/Backup-Management.jpg",
  },
  {
    id: "reports",
    label: "Reports And Analytics",
    icon: "📊",
    color: "#EF4444",
    desc: "Detailed analytics reports to track daily submissions and productivity. From active ticket analytics to billable hour comparisons, gain full visibility into company-wide performance.",
    placeholder: "RA",
    image: "/products/support/Reports-&-Analytics.jpg",
  },
  {
    id: "hours",
    label: "Worked Hours Tracking",
    icon: "⏱️",
    color: "#8B5CF6",
    desc: "Monitor total time invested in each project with advanced employee and task filters. Track actual days spent versus projected timelines to identify overflow data and optimize efficiency.",
    placeholder: "HT",
    image: "/products/support/Worked-Hours-Tracking.jpg",
  },
  {
    id: "notifications",
    label: "Email, Google Chat Notifications",
    icon: "📧",
    color: "#06B6D4",
    desc: "Stay updated with automated alerts during project creation and daily report submissions. Receive real-time notifications for every task submission via email and Google Chat.",
    placeholder: "NT",
    image: "/products/support/Email-google-notifications.jpg",
  },
  {
    id: "permissions",
    label: "Member Management with Role-based Permission",
    icon: "🔒",
    color: "#9333EA",
    desc: "Secure your system with role-based permissions. Control exactly what each user can create, view, or edit to maintain strict organizational security for each section.",
    placeholder: "MP",
    image: "/products/support/Member-management.jpg",
  },
];

/* ─────────────────────────────────────────────────────────────
   ISS FEATURE ORBIT SECTION — Production-Grade
───────────────────────────────────────────────────────────── */
function SupportFeatureSection({ onImageClick }) {
  const [activeId, setActiveId] = useState("project");
  const [mobileOpenId, setMobileOpenId] = useState("project");

  const leftFeatures = supportFeatures.slice(0, Math.ceil(supportFeatures.length / 2));
  const rightFeatures = supportFeatures.slice(Math.ceil(supportFeatures.length / 2));
  const activeFeature = supportFeatures.find((f) => f.id === activeId);

  return (
    <section className="py-12 lg:py-16 overflow-hidden bg-white relative">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-full blur-[100px] opacity-60 hidden lg:block"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[100px] opacity-60 hidden lg:block"></div>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="block text-[10px] font-black text-[#9333EA] tracking-[0.28em] capitalize mb-2.5">
            KEY FEATURES
          </span>
          <h2 className="text-[#0a0a0a] mb-6 capitalize">
            Key Features Of <span className="text-[#9333EA]">Internal Support</span> System
          </h2>
          <p className="text-[#6b7280] max-w-[520px] mx-auto text-[15px] leading-relaxed">
            Internal Support System streamlines every operational workflow — from project management to renewal tracking — delivering a highly efficient experience.
          </p>
        </div>

        {/* ── DESKTOP ORBIT (xl and above) ── */}
        <div className="hidden xl:block">
          <div className="relative h-[605px] mx-auto xl:w-[80%] lg:w-full">
            {/* Purple arc ellipse */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] rounded-full border-[1.5px] pointer-events-none z-0"
              style={{ borderColor: 'rgba(147, 51, 234, 0.42)' }}
            />

            {/* Left column */}
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 flex flex-col items-end gap-10 z-10 w-[220px]">
              {leftFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold ${activeId === feature.id
                    ? "bg-purple-50 border-purple-600 text-gray-800 shadow-[0_4px_16px_rgba(147,51,234,0.15)]"
                    : "border-purple-300 text-gray-800 hover:border-purple-500 hover:shadow-md"
                    }`}
                >
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {feature.label}
                  {activeId === feature.id && (
                    <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[7px] border-l-purple-900" />
                  )}
                </button>
              ))}
            </div>

            {/* Center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 2xl:w-[72%] lg:w-[70%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full h-full rounded-xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.15)] cursor-zoom-in"
                  onClick={() => onImageClick && onImageClick(activeFeature.image)}
                >
                  <img
                    src={activeFeature.image}
                    alt={activeFeature.label}
                    className="w-full h-full object-contain bg-white"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right column */}
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 flex flex-col items-start gap-10 z-10 w-[220px]">
              {rightFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold ${activeId === feature.id
                    ? "bg-purple-50 border-purple-600 text-gray-800 shadow-[0_4px_16px_rgba(147,51,234,0.15)]"
                    : "border-purple-300 text-gray-800 hover:border-purple-500 hover:shadow-md"
                    }`}
                >
                  {feature.label}
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {activeId === feature.id && (
                    <span className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[7px] border-r-purple-900" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mt-3 pb-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeId + "-d"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
                className="text-center text-[#6b7280] max-w-[500px] mx-auto text-sm leading-relaxed"
              >
                {activeFeature.desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* ── TABLET LAYOUT (lg to xl) ── */}
        <div className="hidden lg:block xl:hidden">
          {/* Navigation buttons on top */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {supportFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`flex items-center gap-2 py-2.5 px-5 rounded-lg font-semibold text-sm transition-all duration-200 ${activeId === feature.id
                    ? "bg-[#0EA5E9] text-white shadow-lg scale-105"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#0EA5E9] hover:shadow-md"
                    }`}
                >
                  <span className="text-base">{feature.icon}</span>
                  <span>{feature.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Center image display */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="rounded-xl overflow-hidden shadow-2xl bg-white"
              >
                <img
                  src={activeFeature.image}
                  alt={activeFeature.label}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeId + "-desc"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
                className="text-center text-[#6b7280] max-w-[600px] mx-auto text-sm leading-relaxed"
              >
                {activeFeature.desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* ── MOBILE ACCORDION ── */}
        <div className="lg:hidden border-t border-gray-200">
          {supportFeatures.map((feature) => {
            const isOpen = mobileOpenId === feature.id;
            return (
              <div key={feature.id} className="border-b border-gray-200">
                <button
                  onClick={() => setMobileOpenId(isOpen ? null : feature.id)}
                  className="group w-full flex items-center justify-between p-4 bg-transparent border-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors duration-200 shrink-0"
                      style={{
                        background: isOpen ? feature.color : "#e5e7eb",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <span
                      className={`font-bold text-sm transition-colors ${isOpen ? "text-gray-900" : "text-gray-500"
                        }`}
                    >
                      {feature.label}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 shrink-0 ${isOpen
                      ? "bg-gray-900 border-gray-900"
                      : "bg-transparent border-gray-300 group-hover:border-gray-400"
                      }`}
                  >
                    <span
                      className={`text-lg font-light leading-none block transition-transform duration-200 ${isOpen ? "text-white rotate-45" : "text-gray-400 group-hover:rotate-45"
                        }`}
                    >
                      +
                    </span>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-1 pb-5">
                        <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md mb-3">
                          <img
                            src={feature.image}
                            alt={feature.label}
                            className="w-full h-auto object-contain bg-white"
                          />
                        </div>
                        <p className="text-[#6b7280] text-[13px] leading-relaxed m-0">
                          {feature.desc}
                        </p>
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
  );
}

/* ─────────────────────────────────────────────────────────────
   ADDITIONAL SECTIONS DATA & COMPONENTS
───────────────────────────────────────────────────────────── */

const projectLifecycleData = [
  { title: "The Master View", desc: "Assign team leaders, set budget hours, define priorities, and monitor overall project health—all from a single dashboard.", icon: "🌐" },
  { title: "The “Due-Date” Radar", desc: "Never lose sight of milestones. ISS acts as a simple project tracking tool for teams to prevent deadline slippage.", icon: "🎯" },
  { title: "Work Hours Tracker", desc: "Get a clear view of total worked hours vs. estimated hours, along with how much time is remaining to complete the project.", icon: "⏳" },
  { title: "Daily Task Management", desc: "Track day-to-day activities with detailed task entries, including comments and time spent for complete visibility.", icon: "📝" },
  { title: "Kanban Simplicity", desc: "Seamlessly  move tasks from In Progress to Review to Completed with an intuitive drag-and-drop interface with agile task management software workflows that keep your developers and creatives perfectly aligned.", icon: "📋" },
  { title: "Employee Growth Insights", desc: "Visualize team performance with growth graphs based on productivity, hours contributed, and task completion trends.", icon: "📈" },
  { title: "Project Lifecycle Hub", desc: "Maintain structured Notes, track every update through Project History, and ensure nothing is missed throughout the project journey.", icon: "🔄" },
  { title: "The Vault", desc: "Securely attach internal documents, asset links, and credentials directly to the project—everything you need, just one click away.", icon: "🔒" }
];

const ticketLifecycleData = [
  { title: "Smart Tagging", desc: "Link tickets directly to specific projects so the context is always clear.", icon: "🏷️" },
  { title: "Team Huddles", desc: "Add internal comments and flag team members for quick help without the client seeing the \"behind-the-scenes\" talk.", icon: "👥" },
  { title: "Time Tracking", desc: "Every ticket tracks worked hours, so you know exactly how much effort a support request took.", icon: "⏱️" }
];

const analyticsData = [
  {
    title: "Performance Trends",
    desc: "Compare billable hours per day and see employee productivity trends.",
    icon: "📊",
    image: "/products/support/Performance-Trends.jpg",
    features: ["Daily productivity tracking", "Billable vs. non-billable metrics", "Employee efficiency heatmaps"]
  },
  {
    title: "Client Insights",
    desc: 'Use "Company-Wise Analytics" to see which clients are your biggest earners and which require the most support.',
    icon: "💼",
    image: "/products/support/Client-Insights.jpg",
    features: ["Company-specific hour breakdowns", "Service demand distribution", "Client resource intensity tracking"]
  },
  {
    title: "Hour Comparison",
    desc: "Visualize how your team’s time is spent month-over-month to plan for future hiring.",
    icon: "📅",
    image: "/products/support/Hour-Comparison.jpg",
    features: ["Month-over-month variance", "Resource allocation forecasting", "Hiring requirement analytics"]
  }
];

const automationData = [
  { title: "Instant Sync", desc: "When a daily task is added, it’s automatically pushed to your Google Chat group.", icon: "🔄" },
  { title: "CEO Alerts", desc: "The \"Main Person\" gets an automated email the moment a project is created or a daily report is submitted.", icon: "📧" },
  { title: "Accountability Bot", desc: "If a team member misses their daily report, ISS automatically notifies the CEO—ensuring everyone stays disciplined.", icon: "🤖" },
  {
    title: "Auto-Close Timer",
    desc: "Set duration when moving a project to \"Monitor\" status. System auto-closes after cooling-off period.",
    icon: "⏱️"
  }
];

const safetyData = [
  { title: "Renewal Alerts", desc: "Get dashboard alerts for AMC, Hosting, Domains, and Service renewals before they expire.", icon: "🔔" },
  { title: "Backup Logs", desc: "Track every version and location of your data backups.", icon: "💾" },
  { title: "Role-Based Access", desc: "You decide exactly what each employee can see or edit.", icon: "🔐" }
];

function ProjectLifecycleSection() {
  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      {/* Premium Aurora Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-100/40 to-transparent rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-sky-100/30 to-transparent rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-amber-50/40 to-transparent rounded-full blur-[110px] translate-y-1/3 -z-10"></div>

      {/* Refined Mesh Gradient Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.3] -z-20" style={{
        backgroundImage: `radial-gradient(#9333EA 0.5px, transparent 0.5px)`,
        backgroundSize: '30px 30px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] capitalize mb-4 bg-purple-100/50 px-4 py-2 rounded-full ring-1 ring-purple-200">
            Project & Task Lifecycle
          </span>
          <h2 className="text-[#0a0a0a] mb-6 capitalize">
            From Start to Finish—<br className="md:hidden" />
            <span className="bg-gradient-to-r from-[#9333EA] to-[#7c3aed] bg-clip-text text-transparent py-1">Everything in One Place</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mt-4 font-medium">
            From kickoff to completion, leverage advanced project management planning tools to handle multiple project tracking without the clutter. It is built from the ground up for seamless team collaboration and tracking.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line with Gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-100 via-purple-300 to-purple-100 transform md:-translate-x-1/2 rounded-full"></div>

          {projectLifecycleData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className={`relative flex items-center mb-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-1/2"></div>

              {/* Pulsing Icon Anchor */}
              <div className="absolute left-4 md:left-1/2 w-12 h-12 bg-white border-4 border-purple-50 rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 text-xl shadow-[0_0_20px_rgba(147,51,234,0.15)] ring-4 ring-white">
                <span className="relative z-10">{item.icon}</span>
                <div className="absolute inset-0 bg-purple-100 rounded-full animate-ping opacity-20"></div>
              </div>

              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                <div className="bg-white/70 backdrop-blur-xl hover:bg-white transition-all duration-500 p-8 rounded-[2rem] lg:rounded-[2.5rem] border border-purple-100/50 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(147,51,234,0.12)] group relative overflow-hidden">
                  {/* Hover Gradient Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9333EA] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-[#9333EA] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TicketLifecycleSection() {
  return (
    <section className="py-12 lg:py-16 bg-[#faf9ff] relative overflow-hidden">
      {/* Background Aurora Effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-sky-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 opacity-40"></div>

      {/* Tech Mesh Overlay */}
      <div className="absolute inset-0 opacity-[0.2]" style={{
        backgroundImage: `radial-gradient(#9333EA 0.5px, transparent 0.5px)`,
        backgroundSize: '40px 40px'
      }}></div>
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] capitalize mb-4 bg-white px-4 py-2 rounded-full shadow-sm ring-1 ring-purple-100">
            Ticket Lifecycle
          </span>
          <h2 className="text-[#0a0a0a] mb-6 capitalize">
            Turn "Help!" into <span className="text-[#9333EA]">"Handled."</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ticketLifecycleData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/40 backdrop-blur-2xl border-2 border-white rounded-[2rem] lg:rounded-[3rem] p-10 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(147,51,234,0.06)] hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background Number (Centered) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black italic text-purple-900/[0.04] select-none pointer-events-none leading-none tracking-tighter transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
                {index + 1}
              </div>

              <div className="w-24 h-24 bg-gradient-to-br from-purple-50 to-white rounded-3xl flex items-center justify-center text-4xl mb-8 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 relative z-10">
                <span className="filter drop-shadow-md">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#9333EA] transition-colors relative z-10">{item.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


const reportsDatas = [
  {
    title: "Profitability Reports",
    icon: "💰",
    dot: "#9333EA",
    gradient: "from-[#9333EA] to-[#7c3aed]",
    bgLight: "bg-purple-50/50",
    desc: "See Billable vs. Non-Billable hours by employee, project, or company.",
    image: "/products/support/Billable-Non-billable.jpg"
  },
  {
    title: "The Overflow Alert",
    icon: "⚠️",
    dot: "#F59E0B",
    gradient: "from-[#F59E0B] to-[#D97706]",
    bgLight: "bg-amber-50/50",
    desc: 'Get a "Project Estimated Overflow" report to see which projects are going over budget.',
    image: "/products/support/Project-estimated-overflow.jpg"
  },
  {
    title: "Daily Snapshots",
    icon: "📸",
    dot: "#0EA5E9",
    gradient: "from-[#0EA5E9] to-[#0284C7]",
    bgLight: "bg-sky-50/50",
    desc: "View consolidated daily reports Activity",
    image: "/products/support/Daily-Report.jpg"
  },
  {
    title: "Compliance",
    icon: "✅",
    dot: "#349f48",
    gradient: "from-[#349f48] to-[#287a37]",
    bgLight: "bg-[#f3f9f4]/50",
    desc: "Access backup tracks to ensure your internal operations are 100% healthy.",
    image: "/products/support/Backup-active-report.jpg"
  },
  {
    title: "Project Timesheet Report",
    icon: "📄",
    dot: "#EF4444",
    gradient: "from-[#EF4444] to-[#DC2626]",
    bgLight: "bg-red-50/50",
    desc: "Easily identify where tasks are running over their time limits so you can keep your deadlines under control.",
    image: "/products/support/Project-timesheet.jpg"
  },
];

function ReportsSection({ onImageClick }) {
  const [active, setActive] = useState(0);
  const d = reportsDatas[active];

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] transition-colors duration-1000 opacity-20 translate-x-1/2 -translate-y-1/2`} style={{ background: d.dot }}></div>
        <div className={`absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full blur-[150px] transition-colors duration-1000 opacity-10 -translate-x-1/2 translate-y-1/2`} style={{ background: d.dot }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section (Centered) */}
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] capitalize mb-4 bg-purple-50 px-4 py-2 rounded-full ring-1 ring-purple-100">
              The Power of Reports
            </span>
            <h2 className="text-[#0a0a0a] mb-6 capitalize">
              Total Transparency, <br className="hidden md:block" />
              <span className={`bg-gradient-to-r ${d.gradient} bg-clip-text text-transparent py-1 transition-all duration-500`}>
                Zero Manual Effort.
              </span>
            </h2>
            <p className="text-gray-500 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-6">
              Stop spending your Friday nights building spreadsheets. Our Reports Module generates everything you need in seconds:
            </p>
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-current transition-all duration-500 shadow-sm bg-white/50 backdrop-blur-sm mx-auto`} style={{ color: d.dot }}>
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-current animate-pulse"></span>
              <p className="text-sm font-medium tracking-tight brightness-75">
                A quick look at our powerful report mechanism.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Navigation Tabs (Mobile Icon Grid / Desktop List) */}
          <div className="lg:col-span-5">
            {/* Mobile: Compact Grid of Icon Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-3 mb-0">
              {reportsDatas.map((item, i) => (
                <button
                  key={item.title}
                  onClick={() => setActive(i)}
                  className={`flex flex-col items-center justify-center p-3 rounded-[1.5rem] transition-all duration-300 relative border-2 ${active === i
                    ? "bg-white shadow-xl border-purple-500/20 scale-105"
                    : "bg-gray-50/50 hover:bg-white border-transparent text-gray-400"
                    }`}
                >
                  <span className={`text-3xl mb-3 transition-transform duration-300 ${active === i ? "scale-110" : ""}`}>
                    {item.icon}
                  </span>
                  <span className={`text-[11px] font-black capitalize tracking-tight text-center leading-[1] px-2 ${active === i ? "text-gray-900" : "text-gray-400"}`}>
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Desktop: Premium List Style */}
            <div className="hidden lg:flex flex-col gap-5">
              {reportsDatas.map((item, i) => (
                <button
                  key={item.title}
                  onClick={() => setActive(i)}
                  className={`group w-full flex items-center gap-5 p-6 rounded-[2.5rem] transition-all duration-500 relative overflow-hidden min-h-[8rem] h-auto ${active === i
                    ? `bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] scale-[1.03] ring-1 ring-gray-100`
                    : `${item.bgLight} hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl hover:scale-[1.01]`
                    }`}
                >
                  {/* Active Indicator Bar */}
                  {active === i && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${item.gradient}`}
                    />
                  )}

                  <div
                    className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-3xl transition-all duration-500 transform ${active === i
                      ? "scale-110 shadow-lg"
                      : "bg-white text-gray-400 group-hover:scale-110"
                      }`}
                    style={active === i ? { background: item.dot, color: 'white' } : {}}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className={`transition-colors ${active === i ? "text-gray-900" : "text-gray-400"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm mt-1 font-medium transition-colors ${active === i ? "text-gray-500" : "text-gray-400"}`}>
                      {item.desc}
                    </p>
                  </div>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-900"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Content Card (7/12) */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className={`rounded-3xl lg:rounded-[4rem] p-6 lg:p-16 h-full flex flex-col relative overflow-hidden transition-colors duration-700 shadow-[0_100px_100px_-50px_rgba(0,0,0,0.1)] border-4 border-white ${d.bgLight}`}
              >
                {/* Card Background Patterns */}
                <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${d.gradient} opacity-[0.07] rounded-full blur-[100px] -mr-32 -mt-32`}></div>
                <div className={`absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-br ${d.gradient} opacity-[0.05] rounded-full blur-[80px] -ml-24 -mb-24`}></div>

                <div className="relative z-10 flex flex-col h-full gap-5 lg:gap-8">
                  {/* Header Side - Content (Mobile: Desc only / Desktop: Hidden) */}
                  <div className="order-2 lg:order-1 lg:hidden">
                    <div className="flex justify-between items-start">
                      <div className="space-y-4">
                        <div className={`w-20 h-2 bg-gradient-to-r ${d.gradient} rounded-full`}></div>
                        {/* Title is hidden here because it's already shown in the Mobile Icon Grid */}
                        <p className="text-gray-600 text-xl leading-relaxed max-w-xl font-medium">
                          {d.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Visual Image Preview */}
                  <div className="order-1 lg:order-2 mt-4 lg:mt-0 lg:flex-1 lg:flex lg:items-center lg:justify-center">
                    <motion.div
                      key={d.image}
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative group/img cursor-zoom-in"
                      onClick={() => onImageClick && onImageClick(d.image)}
                    >
                      {/* Browser Mockup Frame */}
                      <div className="relative bg-white rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-gray-100">
                        <div className="flex items-center gap-1.5 p-4 bg-gray-50/50 border-b border-gray-100">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                          <div className="ml-4 flex-1 h-5 bg-white rounded-md border border-gray-100"></div>
                        </div>
                        <img
                          src={d.image}
                          alt={d.title}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-[1.03]"
                        />

                        {/* Corner Zoom Indicator (Mobile only) */}
                        <div className="lg:hidden absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-lg border border-purple-50 flex items-center gap-1.5 active:scale-95 transition-transform">
                          <svg className="w-3.5 h-3.5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                          <span className="text-[10px] font-bold text-purple-700 capitalize tracking-tight">Expand</span>
                        </div>

                        {/* Fullscreen Indicator Overlay (Desktop Hover) */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 lg:group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-3xl lg:rounded-[2rem]">
                          <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl transform scale-75 group-hover/img:scale-100 transition-transform duration-500">
                            <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Overlay Glow */}
                      <div className={`absolute -inset-4 bg-gradient-to-br ${d.gradient} opacity-0 group-hover/img:opacity-[0.05] blur-2xl transition-opacity duration-500 -z-10`}></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnalyticsSection({ onImageClick }) {
  const [activeAnalysisIdx, setActiveAnalysisIdx] = useState(0);

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      {/* Modern Mesh Grid Background */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{
        backgroundImage: `radial-gradient(#9333EA 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] capitalize mb-4 bg-purple-50 px-4 py-2 rounded-full shadow-sm ring-1 ring-purple-100">
            High-Level Analytics
          </span>
          <h2 className="text-[#0a0a0a] mb-6 capitalize">
            See Your Business in <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#9333EA] to-[#7c3aed] bg-clip-text text-transparent py-1">High Definition.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium mb-8">
            While reports give you the "what," our Analytics Module gives you the "why." Turn raw data into growth strategies:
          </p>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-3xl bg-white/50 border-2 border-purple-100 shadow-sm backdrop-blur-sm">
            <span className="flex-shrink-0 w-3 h-3 rounded-full bg-[#9333EA] animate-ping"></span>
            <p className="text-[#9333EA] text-sm font-semibold tracking-tight capitalize">
              Just a glimpse of our extensive analytics reporting library. From team productivity to project health, we track it all.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Dashboard Tabs with Modern Pill Style */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {analyticsData.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveAnalysisIdx(index)}
                className={`flex items-center gap-3 px-4 md:px-10 py-5 rounded-full font-black text-sm transition-all duration-500 overflow-hidden relative shadow-lg ${activeAnalysisIdx === index
                  ? "text-white-500 scale-105"
                  : "bg-white text-gray-500 border border-gray-100 hover:border-purple-200 hover:text-[#9333EA]"
                  }`}
              >
                {activeAnalysisIdx === index && (
                  <motion.div
                    layoutId="analyticsTabBg"
                    className="absolute inset-0 bg-gradient-to-r from-[#9333EA] to-[#7c3aed] z-0"
                  />
                )}
                <span className="text-xl relative z-10">{item.icon}</span>
                <span className="relative z-10 tracking-wide">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Large Interactive Display Card */}
          <div className="bg-white/80 backdrop-blur-3xl rounded-3xl lg:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border-2 border-white relative">
            <div className="grid lg:grid-cols-5 min-h-[600px]">
              {/* Image Side - Styled like a premium device/browser */}
              <div className="lg:col-span-3 bg-gray-50/50 border-r border-gray-100 overflow-hidden relative group px-2 py-6 md:p-8 lg:p-12">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white transform transition-transform duration-700 group-hover:scale-[1.02]">
                  {/* Browser Mockup Top Bar */}
                  <div className="flex items-center gap-2 p-2 md:p-4 bg-gray-50 border-b border-gray-200">
                    <div className="flex gap-1.5 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 h-7 bg-white rounded-lg text-[9px] md:text-[10px] flex items-center px-3 text-gray-400 font-bold border border-gray-200/50 truncate">
                      analytics.isarva.com/dashboard/preview
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeAnalysisIdx}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="cursor-zoom-in"
                      onClick={() => onImageClick && onImageClick(analyticsData[activeAnalysisIdx].image)}
                    >
                      <img
                        src={analyticsData[activeAnalysisIdx].image}
                        alt={analyticsData[activeAnalysisIdx].title}
                        className="w-full h-auto object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute top-1/2 left-4 w-24 h-24 bg-purple-200/40 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-4 w-32 h-32 bg-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
              </div>

              {/* Detail Side - Premium Content Look */}
              <div className="lg:col-span-2 p-10 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-purple-50/30">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAnalysisIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-12 h-1 bg-gradient-to-r from-[#9333EA] to-transparent mb-6 rounded-full"></div>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-[1]">
                      {analyticsData[activeAnalysisIdx].title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed mb-6 md:mb-10 font-medium">
                      {analyticsData[activeAnalysisIdx].desc}
                    </p>

                    <div className="space-y-5">
                      {analyticsData[activeAnalysisIdx].features.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div className="w-6 h-6 rounded-lg bg-green-50 flex items-center justify-center text-green-600 border border-green-100 transition-colors group-hover:bg-green-500 group-hover:text-white">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </div>
                          <span className="text-gray-700 font-black text-sm tracking-tight">{item}</span>
                        </div>
                      ))}
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AutomationSection() {
  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-50 rounded-full blur-[150px] opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] capitalize mb-4 bg-white px-5 py-2 rounded-full shadow-sm ring-1 ring-purple-100">
            Automation: Your "Invisible Assistant"
          </span>
          <h2 className="text-[#0a0a0a] mb-6 capitalize">
            We Do the <span className="bg-gradient-to-r from-[#9333EA] to-[#7c3aed] bg-clip-text text-transparent py-1">Grunt Work</span><br className="md:hidden" />
            So You Don't Have To.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 relative mt-10 md:mt-24">
          {/* Animated Flow Line */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-1 bg-gradient-to-r from-transparent via-purple-200 to-transparent">
            <div className="w-full h-full animate-pulse bg-purple-400 opacity-20"></div>
          </div>

          {automationData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex-1 flex flex-col items-center text-center relative z-10 group"
            >
              <div className="bg-white p-3 rounded-[1.5rem] lg:rounded-[2.5rem] mb-8 relative shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA] to-[#7c3aed] rounded-[1.5rem] lg:rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-[1.05] -z-10"></div>
                <div className="w-28 h-28 bg-white rounded-[2rem] flex items-center justify-center text-5xl shadow-inner border border-gray-100 transition-transform duration-700 group-hover:rotate-[15deg]">
                  <span className="filter drop-shadow-sm group-hover:scale-110 transition-transform">{item.icon}</span>
                </div>
              </div>
              <h3 className="mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium px-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SafetyManagementSection() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-[#faf5ff] relative border-t-2 border-white overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="max-w-xl mx-auto text-center lg:text-left">
            <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] capitalize mb-4 bg-white px-5 py-2 rounded-full shadow-md ring-1 ring-purple-50">
              Safety & Management
            </span>
            <h2 className="text-[#0a0a0a] mb-6 capitalize">
              Secure Your Assets,<br />
              <span className="bg-gradient-to-r from-[#9333EA] to-[#7c3aed] bg-clip-text text-transparent py-1">Organize Your Clients.</span>
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed mb-6 md:mb-10 font-medium">
              Enterprise-grade security controls wrapped in an intuitive, easy-to-use interface.
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-[#9333EA] to-transparent rounded-full mx-auto lg:mx-0"></div>
          </div>
          <div className="flex flex-col gap-8 mx-auto">
            {safetyData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/70 backdrop-blur-xl p-8 rounded-[1.5rem] lg:rounded-[2.5rem] flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-[0_15px_50px_rgba(147,51,234,0.08)] border-2 border-white hover:border-[#9333EA]/20 transition-all duration-500 group hover:-translate-x-4 text-center md:text-left"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-white rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 text-[#9333EA] shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#9333EA] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Brand Logo ─────────────── */
/* ─── Brand Logo ─────────────── */
function BrandMark({ size = "md", layout = "horizontal" }) {
  const dims = layout === "vertical"
    ? size === "xs" ? "w-8 h-8" : size === "sm" ? "w-12 h-12" : "w-16 h-16"
    : size === "xs" ? "w-7 h-7" : size === "sm" ? "w-9 h-9" : "w-12 h-12 sm:w-14 sm:h-14";

  if (layout === "vertical") {
    return (
      <div className="flex flex-col items-center text-center">
        <img
          src="/Favicon.png"
          alt="Isarva Logo"
          className={`${dims} object-contain mb-1 shrink-0`}
        />
        <h2 className="leading-none">
          <span className={`block font-black text-[#349f48] ${size === "xs" ? "text-base" : size === "sm" ? "text-lg md:text-xl" : "text-3xl"} tracking-tight`}>
            AMC
          </span>
          <span className={`block font-black text-[#0b2545] ${size === "xs" ? "text-[8px]" : size === "sm" ? "text-[11px] md:text-xs" : "text-sm"} tracking-[0.15em] mt-0.5`}>
            MODULE
          </span>
        </h2>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/Favicon.png"
        alt="Isarva Logo"
        className={`${dims} object-contain shrink-0`}
      />
      <h2 className="leading-none">
        <span className={`block font-black text-[#349f48] ${size === "xs" ? "text-sm" : size === "sm" ? "text-base" : "text-xl sm:text-2xl"} tracking-tight`}>
          AMC
        </span>
        <span className={`block font-black text-[#0b2545] ${size === "xs" ? "text-[9px]" : size === "sm" ? "text-[10px]" : "text-[11px] sm:text-xs"} tracking-[0.15em] mt-0.5`}>
          MODULE
        </span>
      </h2>
    </div>
  );
}

function AmcModuleOverviewSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeMobileStep, setActiveMobileStep] = useState(1);
  const [lines, setLines] = useState([]);
  const contentRef = useRef(null);

  const select = (n) => {
    setActiveStep(n);
    setActiveMobileStep(n);
  };

  // Calculate dashed connector lines from orbital nodes to card boxes
  useEffect(() => {
    const calculate = () => {
      if (!contentRef.current) return;
      const container = contentRef.current.getBoundingClientRect();
      if (container.width === 0 || container.height === 0) return;

      const pairs = [
        { nodeId: 'amc-node-1', cardId: 'amc-card-1', color: '#349f48' },
        { nodeId: 'amc-node-2', cardId: 'amc-card-2', color: '#2563eb' },
        { nodeId: 'amc-node-3', cardId: 'amc-card-3', color: '#349f48' },
        { nodeId: 'amc-node-4', cardId: 'amc-card-4', color: '#0b2545' },
        { nodeId: 'amc-node-5', cardId: 'amc-card-5', color: '#2563eb' },
      ];

      const result = pairs.map(({ nodeId, cardId, color }) => {
        const node = document.getElementById(nodeId);
        const card = document.getElementById(cardId);
        if (!node || !card) return null;

        const n = node.getBoundingClientRect();
        const c = card.getBoundingClientRect();

        // Node center relative to container
        const nx = n.left + n.width / 2 - container.left;
        const ny = n.top + n.height / 2 - container.top;

        // Card coordinates relative to container
        const cLeft = c.left - container.left;
        const cRight = c.right - container.left;
        const cTop = c.top - container.top;
        const cBottom = c.bottom - container.top;
        const cWidth = c.width;
        const cHeight = c.height;

        let cx, cy;

        if (cardId === 'amc-card-1') {
          // Connect to the bottom edge, vertically aligned with Node 1
          cx = nx;
          cy = cBottom;
        } else if (cardId === 'amc-card-2') {
          // Connect to the bottom edge of Card 2, slightly inwards (25%) from the left to clear Card 1 completely
          cx = cLeft + cWidth * 0.25;
          cy = cBottom;
        } else if (cardId === 'amc-card-3') {
          // Connect horizontally at the same level as Node 3
          cx = cRight;
          cy = ny;
        } else if (cardId === 'amc-card-4') {
          // Connect to the top edge, horizontally centered
          cx = cLeft + cWidth * 0.5;
          cy = cTop;
        } else if (cardId === 'amc-card-5') {
          // Connect horizontally at the same level as Node 5
          cx = cLeft;
          cy = ny;
        } else {
          // Fallback nearest point
          cx = Math.max(cLeft, Math.min(nx, cRight));
          cy = Math.max(cTop, Math.min(ny, cBottom));
        }

        return { x1: nx, y1: ny, x2: cx, y2: cy, color, nodeId };
      }).filter(Boolean);

      setLines(result);
    };

    calculate();
    const timers = [
      setTimeout(calculate, 100),
      setTimeout(calculate, 300),
      setTimeout(calculate, 600),
      setTimeout(calculate, 1000)
    ];
    window.addEventListener('resize', calculate);
    window.addEventListener('scroll', calculate);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('resize', calculate);
      window.removeEventListener('scroll', calculate);
    };
  }, [activeStep, activeMobileStep]);

  const steps = [
    { num: 1, label: "Create", Icon: FilePlus, color: "bg-[#349f48]" },
    { num: 2, label: "Manage", Icon: Users, color: "bg-[#0d9488]" },
    { num: 3, label: "Tasks", Icon: Clock, color: "bg-[#349f48]" },
    { num: 4, label: "Reports", Icon: TrendingUp, color: "bg-[#0b2545]" },
    { num: 5, label: "History", Icon: BarChart3, color: "bg-[#2563eb]" },
  ];

  const sidebarFeatures = [
    {
      num: "1",
      title: "Create or Convert AMC",
      desc: "Convert from existing projects or create a new AMC from scratch with ease.",
      Icon: FilePlus,
    },
    {
      num: "2",
      title: "Complete AMC Management",
      desc: "Track timelines, assign teams, manage tasks, documents, credentials, notes and more.",
      Icon: Settings,
    },
    {
      num: "3",
      title: "Timely & Progress Tracking",
      desc: "Visual timeline with start/end dates, progress bar and countdown for AMC expiry.",
      Icon: Clock,
    },
    {
      num: "4",
      title: "Reports & Insights",
      desc: "Track billable and non-billable hours with detailed reports and analytics.",
      Icon: BarChart3,
    },
    {
      num: "5",
      title: "History & Transparency",
      desc: "Every change is logged. Full history for complete transparency and audit.",
      Icon: ShieldCheck,
    },
  ];

  const taskItems = [
    { Icon: CheckCircle2, label: "AMC Tasks", desc: "Create and manage AMC related tasks" },
    { Icon: FileText, label: "Documents", desc: "Upload internal documents (JPG, PNG, PDF, DOC, XLS)" },
    { Icon: Package, label: "Assets", desc: "Add and manage assets under AMC" },
    { Icon: Clock, label: "Worked Hours", desc: "Track daily worked hours and total hours consumed" },
    { Icon: Lock, label: "Credentials", desc: "Store and manage AMC credentials safely" },
    { Icon: PlusCircle, label: "Additional Hours", desc: "Add extra hours as per requirement" },
    { Icon: StickyNote, label: "Notes", desc: "Add notes and pin important notes" },
    { Icon: History, label: "AMC History", desc: "View complete history of changes, who changed what & when" },
    { Icon: Clock, label: "AMC Timebar", desc: "Visual progress bar showing AMC completion percentage and remaining days between contract start and end dates." },
    { Icon: LayoutGrid, label: "Flexible Manage Page", desc: "Centralized dashboard with active project counts, structured tracking table, and quick actions while preserving project history." },
    { Icon: Settings, label: "Advanced Search Filter", desc: "Filter projects by key fields such as Manager, Department, Company, and Date, with quick reset and collapsible options." },
  ];

  const historyLog = [
    { date: "20 May 2024", time: "10:30 AM", user: "John Doe", action: "Created AMC", details: "AMC-2024-001 created" },
    { date: "21 May 2024", time: "11:15 AM", user: "James Smith", action: "Updated Details", details: "AMC end date changed" },
    { date: "22 May 2024", time: "09:45 AM", user: "Emily Davis", action: "Added Task", details: 'Task "AMC Checkup" added' },
    { date: "23 May 2024", time: "02:20 PM", user: "Michael Brown", action: "Uploaded Document", details: "Maintenance Report.pdf uploaded" },
    { date: "24 May 2024", time: "11:00 AM", user: "Sarah Connors", action: "Verified Status", details: "AMC active status approved" },
    { date: "25 May 2024", time: "03:45 PM", user: "David Lee", action: "Logged Hours", details: "4.5 Billable hours logged for Task #12" },
  ];

  const bottomMetrics = [
    { title: "Centralized Management", desc: "All AMC activities in one central platform.", Icon: Network },
    { title: "Save Time & Effort", desc: "Automate workflows and improve efficiency.", Icon: Gauge },
    { title: "Better Visibility", desc: "Real-time tracking and status updates.", Icon: Eye },
    { title: "Enhanced Productivity", desc: "Streamline maintenance and optimize resources.", Icon: TrendingUp },
    { title: "Complete Control", desc: "Take control of your AMC lifecycle end-to-end.", Icon: ShieldCheck },
  ];

  const cardVisibility = (n) =>
    `${activeMobileStep === n ? "flex" : "hidden lg:flex"}`;

  const cardBase =
    "border rounded-[1.5rem] bg-white p-2 sm:p-3 shadow-sm transition-all duration-300 flex-col gap-5";

  const ringColor = (n, active) =>
    active
      ? n % 2 === 1
        ? "border-[#349f48]/30 ring-2 ring-[#349f48]/10 shadow-xl"
        : "border-blue-500/30 ring-2 ring-blue-500/10 shadow-xl"
      : "border-slate-900/5";

  const badgeColor = (n) => (n % 2 === 1 ? "bg-[#349f48]" : "bg-blue-600");

  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-gradient-to-b from-[#f3f9f4] via-white to-[#f3f9f4] relative overflow-hidden border-t border-b border-slate-900/5">
      {/* Decorative blur backgrounds */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#349f48]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* ── TOP HEADER ROW: logo + dashed title + badge ───────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-10 lg:mb-6 items-center">
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <BrandMark />
          </div>
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
            <div className="flex items-center gap-3 sm:gap-4 w-full justify-center lg:justify-start">
              <span className="hidden sm:flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#349f48]" />
                <span className="h-px w-8 sm:w-12 bg-[#349f48]" />
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight whitespace-normal">
                AMC Module <span className="text-slate-400 font-light">–</span> Complete Overview
              </h2>
              <span className="hidden sm:flex items-center gap-1.5">
                <span className="h-px w-8 sm:w-12 bg-[#349f48]" />
                <span className="w-2 h-2 rounded-full bg-[#349f48]" />
              </span>
            </div>
            <span className="inline-block bg-[#349f48] text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2 rounded-full tracking-wide shadow-sm">
              From Creation to Closure – Everything in One Place
            </span>
          </div>
        </div>

        {/* ── MAIN GRID: sidebar + content ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-5 items-start">
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:sticky lg:top-24">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-[1.75rem] font-extrabold text-slate-900 leading-tight mb-4">
                Smart Maintenance. <br className="hidden sm:block" />
                <span className="text-[#349f48]">Stronger Operations.</span>
              </h3>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                AMC Module helps you create, manage, and track Annual Maintenance Contracts with complete visibility and control.
              </p>
            </div>

            {/* Vertical timeline */}
            <div className="relative pl-6 ml-[15px] lg:ml-0 border-l-2 border-[#349f48]/20 flex flex-col gap-7">
              {sidebarFeatures.map((feat, idx) => {
                const stepNum = idx + 1;
                const isActive = activeStep === stepNum;
                return (
                  <div
                    key={idx}
                    className="relative cursor-pointer group"
                    onMouseEnter={() => select(stepNum)}
                    onClick={() => select(stepNum)}
                  >
                    <div
                      className={`absolute -left-[42px] top-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                        ? "bg-[#349f48] text-white shadow-[0_0_12px_rgba(52,159,72,0.4)] scale-110"
                        : "bg-white border-2 border-[#349f48]/30 text-[#349f48]"
                        }`}
                    >
                      <feat.Icon className="w-5 h-5" />
                    </div>
                    <h4
                      className={`text-base font-extrabold transition-colors duration-300 ${isActive ? "text-[#349f48]" : "text-slate-800"
                        }`}
                    >
                      {feat.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div ref={contentRef} className="lg:col-span-10 w-full flex flex-col gap-4 xl:gap-14 relative">
            {/* Mobile tab bar */}
            <div className="lg:hidden w-full overflow-x-auto no-scrollbar bg-slate-100/70 backdrop-blur-sm rounded-full border border-slate-200 p-1">
              <div className="flex items-center w-full space-x-1">
                {steps.map((st) => (
                  <button
                    key={st.num}
                    onClick={(e) => {
                      select(st.num);
                      const button = e.currentTarget;
                      const container = button.closest('.overflow-x-auto');
                      if (container) {
                        const containerWidth = container.clientWidth;
                        const buttonWidth = button.clientWidth;
                        const targetScroll = button.offsetLeft + buttonWidth / 2 - containerWidth / 2;
                        container.scrollTo({
                          left: targetScroll,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className={`flex-1 flex-shrink-0 flex flex-col items-center justify-center gap-1 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${activeMobileStep === st.num
                      ? `${st.color} text-white shadow-md font-bold scale-[1.03]`
                      : "text-slate-500 hover:bg-slate-200/50"
                      }`}
                  >
                    <st.Icon className="w-4 h-4" />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider">{st.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* ── OVERLAY SVG: dashed connector lines (desktop only) ── */}
            {lines.length > 0 && (
              <svg
                width="100%"
                height="100%"
                className="hidden lg:block absolute inset-0 pointer-events-none z-20"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  {['green', 'blue', 'navy'].map((name) => (
                    <marker key={name} id={`amc-dot-${name}`} markerWidth="4" markerHeight="4" refX="2" refY="2">
                      <circle cx="2" cy="2" r="2" fill={name === 'green' ? '#349f48' : name === 'blue' ? '#2563eb' : '#0b2545'} opacity="0.8" />
                    </marker>
                  ))}
                </defs>
                {lines.map((ln, i) => {
                  const markerName = ln.color === '#349f48' ? 'green' : ln.color === '#2563eb' ? 'blue' : 'navy';

                  let pathD;
                  if (ln.nodeId === 'amc-node-2') {
                    // A gentle, natural diagonal S-curve that sweeps rightwards and upwards,
                    // clearing Card 1's bottom-right corner without an exaggerated bend.
                    const cp1x = ln.x1 + (ln.x2 - ln.x1) * 0.35;
                    const cp1y = ln.y1 - (ln.y1 - ln.y2) * 0.15;
                    const cp2x = ln.x2 - (ln.x2 - ln.x1) * 0.35;
                    const cp2y = ln.y2 + (ln.y1 - ln.y2) * 0.15;
                    pathD = `M ${ln.x1} ${ln.y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${ln.x2} ${ln.y2}`;
                  } else {
                    // Default straight line connection for other nodes
                    pathD = `M ${ln.x1} ${ln.y1} L ${ln.x2} ${ln.y2}`;
                  }

                  return (
                    <path
                      key={i}
                      d={pathD}
                      fill="none"
                      stroke={ln.color}
                      strokeWidth="1.2"
                      strokeDasharray="5,4"
                      opacity="0.55"
                      markerEnd={`url(#amc-dot-${markerName})`}
                    />
                  );
                })}
              </svg>
            )}

            {/* ROW A: Card 1 + Card 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-3">
              {/* CARD 1 — CREATE AMC */}
              <div
                id="amc-card-1"
                onMouseEnter={() => setActiveStep(1)}
                className={`lg:col-span-8 ${cardBase} ${ringColor(1, activeStep === 1)} ${cardVisibility(1)}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full ${badgeColor(1)} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                    1
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-800 uppercase tracking-wider">Create AMC – 2 Ways</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-2 items-start flex-1">
                  {/* A. Convert from Project */}
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-black text-[#349f48] tracking-wider uppercase">
                      A. Convert From Project
                    </span>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-left">
                      <span className="text-[11px] font-extrabold text-slate-400 block mb-1.5 uppercase">Projects</span>
                      <div className="grid grid-cols-2 gap-1 text-[10px] font-bold text-slate-600">
                        <div className="flex items-center gap-1 text-[#349f48] bg-[#f3f9f4] p-1 rounded">
                          <span className="w-1 h-1 rounded-full bg-[#349f48]" /> Deepwave
                        </div>
                        <div className="px-1 py-1 text-slate-400">Phoenix</div>
                        <div className="px-1 py-1 text-slate-400">SwiftCore</div>
                        <div className="px-1 py-1 text-slate-400">ExcelFlow</div>
                        <div className="px-1 py-1 text-slate-400">Lumens</div>
                        <div className="px-1 py-1 text-slate-400">Solaris</div>
                      </div>
                      <div className="relative mt-3">
                        <button className="w-full bg-[#349f48] text-white text-[11px] font-bold py-1.5 rounded-lg shadow hover:bg-[#287a37] flex items-center justify-center gap-1">
                          Convert to AMC <ArrowRight className="w-3 h-3" />
                        </button>
                        {/* Cursor pointer representation */}
                        <div className="absolute -bottom-1 right-2 transform translate-x-1 translate-y-1 pointer-events-none">
                          <svg className="w-3.5 h-3.5 text-white fill-slate-900 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4.5 3v15.5l4.5-4.5 3 7 3-1.5-3.5-6.5 6-.5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="text-[10px] text-gray-500 font-bold grid grid-cols-2 gap-x-2 gap-y-0.5 mt-2 list-none">
                      <li>✓ Select Project</li>
                      <li>✓ Click Convert</li>
                      <li>✓ Auto-fill details from Project</li>
                      <li>✓ Project gets closed</li>
                      <li className="col-span-2">✓ New AMC is created</li>
                    </ul>
                  </div>

                  {/* OR divider */}
                  <div className="flex md:flex-col items-center justify-center gap-1.5 py-1">
                    <div className="h-px w-8 md:w-px md:h-8 bg-slate-200" />
                    <span className="bg-slate-200 text-slate-600 text-[8px] font-black w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                      OR
                    </span>
                    <div className="h-px w-8 md:w-px md:h-8 bg-slate-200" />
                  </div>

                  {/* B. Create New AMC */}
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-black text-[#349f48] tracking-wider uppercase">
                      B. Create New AMC
                    </span>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-left">
                      <span className="text-[11px] font-extrabold text-slate-400 block mb-1.5 uppercase">Create New AMC</span>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="min-h-[28px] py-0.5 bg-white rounded border border-slate-200 flex items-center justify-between px-1.5 text-[9px] text-slate-500 font-bold leading-tight">
                          <span>AMC Title</span>
                        </div>
                        <div className="min-h-[28px] py-0.5 bg-white rounded border border-slate-200 flex items-center justify-between px-1.5 text-[9px] text-slate-500 font-bold leading-tight">
                          <span>AMC Time</span>
                          <span className="text-slate-400 font-semibold shrink-0">12 Months ▾</span>
                        </div>
                        <div className="h-5 min-h-[28px] py-0.5 bg-white rounded border border-slate-200 flex items-center justify-between px-1.5 text-[9px] text-slate-500 font-bold leading-tight">
                          <span>Net AMC Date</span>
                          <CalendarDays className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                        </div>
                        <div className="min-h-[28px] py-0.5 bg-white rounded border border-slate-200 flex items-center justify-between px-1.5 text-[9px] text-slate-500 font-bold leading-tight">
                          <span className="break-words">Initial AMC Start Date</span>
                          <CalendarDays className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                        </div>
                        <div className="min-h-[28px] py-0.5 bg-white rounded border border-slate-200 flex items-center justify-between px-1.5 text-[9px] text-slate-500 font-bold leading-tight">
                          <span>Department</span>
                          <span className="text-slate-400 font-semibold shrink-0">▾</span>
                        </div>
                        <div className="min-h-[28px] py-0.5 bg-white rounded border border-slate-200 flex items-center justify-between px-1.5 text-[9px] text-slate-500 font-bold leading-tight">
                          <span className="break-words">Assign Team Members</span>
                          <span className="text-slate-400 font-semibold shrink-0">▾</span>
                        </div>
                        <div className="min-h-[28px] py-0.5 bg-white rounded border border-slate-200 flex items-center justify-between px-1.5 text-[9px] text-slate-500 font-bold col-span-2 leading-tight">
                          <span>Manager</span>
                          <span className="text-slate-400 font-semibold shrink-0">▾</span>
                        </div>
                      </div>
                      <button className="w-full bg-[#349f48] text-white text-[11px] font-bold py-1.5 rounded-lg mt-3 shadow hover:bg-[#287a37]">
                        Create AMC
                      </button>
                    </div>
                    <ul className="text-[10px] text-gray-500 font-bold grid grid-cols-2 gap-x-2 gap-y-0.5 mt-2 list-none">
                      <li>✓ Add AMC Details</li>
                      <li>✓ Set AMC Time</li>
                      <li>✓ Net AMC Date</li>
                      <li>✓ Initial AMC Start Date</li>
                      <li>✓ Department</li>
                      <li>✓ Assign Team &amp; Manager</li>
                      <li className="col-span-2">✓ AMC Created</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CARD 2 — MANAGE AMC */}
              <div
                id="amc-card-2"
                onMouseEnter={() => setActiveStep(2)}
                className={`lg:col-span-4 lg:self-start ${cardBase} ${ringColor(2, activeStep === 2)} ${cardVisibility(2)}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full ${badgeColor(2)} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                    2
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-800 uppercase tracking-wider">Manage AMC – At a Glance</h3>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-inner flex flex-col gap-5">
                  <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                    <div>
                      <span className="text-xs font-extrabold text-blue-600 block">AMC-2024-001</span>
                      <span className="text-[11px] text-slate-500 font-bold">IT Department</span>
                    </div>
                    <div className="flex gap-4 text-xs font-bold text-slate-600">
                      <div>
                        <span className="block text-slate-400 text-[10px] uppercase">Start Date</span>
                        <span className="text-slate-800">01 Jan 2024</span>
                      </div>
                      <div>
                        <span className="block text-slate-400 text-[10px] uppercase">End Date</span>
                        <span className="text-slate-800">31 Dec 2024</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3.5">
                    <div className="flex justify-between text-[10px] text-slate-500 font-extrabold mb-1">
                      <span>Timebar</span>
                      <span className="flex items-center gap-1 text-[#349f48]">
                        <Clock className="w-2.5 h-2.5" /> 237 Days Left
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#4fb962] to-[#349f48] h-full rounded-full w-[65%]" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-extrabold block mt-1">65% Completed</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-2 border-t border-slate-200 text-center">
                    <div className="bg-white p-1.5 rounded border border-slate-100">
                      <span className="text-[9px] text-slate-400 font-extrabold block uppercase">Total</span>
                      <span className="text-xs font-extrabold text-slate-800">365 Days</span>
                    </div>
                    <div className="bg-white p-1.5 rounded border border-slate-100">
                      <span className="text-[9px] text-slate-400 font-extrabold block uppercase">Elapsed</span>
                      <span className="text-xs font-extrabold text-slate-800">128 Days</span>
                    </div>
                    <div className="bg-white p-1.5 rounded border border-slate-100">
                      <span className="text-[9px] text-slate-400 font-extrabold block uppercase">Remaining</span>
                      <span className="text-xs font-extrabold text-slate-800">237 Days</span>
                    </div>
                    <div className="bg-white p-1.5 rounded border border-slate-100">
                      <span className="text-[9px] text-slate-400 font-extrabold block uppercase">Status</span>
                      <span className="text-xs font-extrabold text-[#349f48] flex items-center justify-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#349f48]" /> Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW B: Card 3 + (Orbit + Card 4) + Card 5 */}
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-3">

              {/* CARD 3 — TASKS & OPERATIONS */}
              <div
                id="amc-card-3"
                onMouseEnter={() => setActiveStep(3)}
                className={`lg:col-span-4 ${cardBase} ${ringColor(3, activeStep === 3)} ${cardVisibility(3)} min-h-[360px]`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full ${badgeColor(3)} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                    3
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-800 uppercase tracking-wider">Tasks &amp; Operations</h3>
                </div>

                <div className="flex flex-col gap-1 flex-1 justify-start">
                  {taskItems.map((tk, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start p-1 hover:bg-[#f3f9f4]/40 rounded-lg transition-colors">
                      <span className="w-6 h-6 rounded bg-[#f3f9f4] text-[#349f48] flex items-center justify-center shrink-0">
                        <tk.Icon className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <span className="text-xs font-black text-slate-800 block leading-tight">{tk.label}</span>
                        <span className="text-[11px] text-gray-500 leading-tight block">{tk.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* MIDDLE COLUMN — Orbit + Card 4 */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                {/* Orbital diagram (desktop only) */}
                <div className="hidden lg:block relative w-full max-w-[420px] mx-auto select-none shrink-0 lg:mt-4 xl:-mt-6">
                  <div className="w-full pb-[100%] relative">
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                      <svg className="absolute w-full h-full inset-0 z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                        <defs>
                          <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#349f48" />
                            <stop offset="35%" stopColor="#0d9488" />
                            <stop offset="70%" stopColor="#2563eb" />
                            <stop offset="100%" stopColor="#0b2545" />
                          </linearGradient>
                        </defs>
                        {/* Orbital ring only — connector dashes drawn by overlay SVG */}
                        <circle cx="50" cy="50" r="38" fill="none" stroke="url(#ring-gradient)" strokeWidth="8" opacity="0.95" />
                      </svg>

                      <div className="w-[62%] h-[62%] rounded-full bg-white shadow-2xl border-4 border-slate-50 flex flex-col items-center justify-center p-2 text-center z-10">
                        <BrandMark size="xs" layout="vertical" />
                        <div className="w-8 h-0.5 bg-[#349f48] my-1 rounded-full shrink-0" />
                        <p className="text-[7.5px] sm:text-[8px] xl:text-[9.5px] text-gray-500 font-bold leading-tight px-1 max-w-[95%] mx-auto">
                          One Platform. Complete Control. Better Maintenance &amp; Business.
                        </p>
                      </div>

                      {steps.map((st, i) => {
                        const isActive = activeStep === st.num;
                        const positions = [
                          { left: "26%", top: "21%" },   // Node 1: Top-left
                          { left: "74%", top: "21%" },   // Node 2: Top-right
                          { left: "12%", top: "50%" },   // Node 3: Left
                          { left: "50%", top: "88%" },   // Node 4: Bottom
                          { left: "88%", top: "50%" },   // Node 5: Right
                        ];
                        return (
                          <button
                            key={st.num}
                            id={`amc-node-${st.num}`}
                            onMouseEnter={() => setActiveStep(st.num)}
                            onClick={() => select(st.num)}
                            className={`absolute w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-white transition-all duration-300 z-30 -translate-x-1/2 -translate-y-1/2 ${st.color} ${isActive
                              ? "scale-125 ring-4 ring-white shadow-xl z-40"
                              : "hover:scale-110 opacity-95"
                              }`}
                            style={positions[i]}
                          >
                            <st.Icon className="w-5 h-5" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* CARD 4 — REPORTS & ANALYTICS */}
                <div
                  id="amc-card-4"
                  onMouseEnter={() => setActiveStep(4)}
                  className={`${cardBase} ${ringColor(4, activeStep === 4)} ${cardVisibility(4)} min-h-[280px]`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full ${badgeColor(4)} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                      4
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-slate-800 uppercase tracking-wider">Reports &amp; Analytics</h3>
                  </div>

                  <div className="flex flex-col gap-4 flex-1 justify-between">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#f3f9f4] border border-[#349f48]/20 rounded-xl p-3">
                        <span className="bg-[#349f48] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase flex items-center gap-1 w-fit">
                          <BarChart3 className="w-2.5 h-2.5" /> Billable
                        </span>
                        <div className="flex items-center justify-between gap-2 mt-3 mb-2 px-1">
                          <div className="flex items-end gap-1.5 h-10">
                            <div className="bg-[#76ce86] w-2 h-[40%] rounded-t" />
                            <div className="bg-[#349f48] w-2 h-[75%] rounded-t" />
                            <div className="bg-[#52b865] w-2 h-[55%] rounded-t" />
                            <div className="bg-[#349f48] w-2 h-[90%] rounded-t" />
                          </div>
                          <svg className="w-10 h-10 shrink-0 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]" viewBox="0 0 32 32">
                            <path d="M16,16 L16,2 A14,14 0 0,1 30,16 Z" fill="#2563eb" />
                            <path d="M16,16 L30,16 A14,14 0 0,1 16,30 Z" fill="#2dd4bf" />
                            <path d="M16,16 L16,30 A14,14 0 0,1 16,2 Z" fill="#349f48" />
                          </svg>
                        </div>
                        <p className="text-[10px] text-gray-500 font-bold leading-tight">Track billable hours consumed for AMC.</p>
                      </div>

                      <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
                        <span className="bg-blue-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase flex items-center gap-1 w-fit">
                          <BarChart3 className="w-2.5 h-2.5" /> Non-Billable
                        </span>
                        <div className="flex items-center justify-between gap-2 mt-3 mb-2 px-1">
                          <div className="flex items-end gap-1.5 h-10">
                            <div className="bg-blue-300 w-2 h-[30%] rounded-t" />
                            <div className="bg-blue-400 w-2 h-[50%] rounded-t" />
                            <div className="bg-blue-600 w-2 h-[80%] rounded-t" />
                            <div className="bg-blue-500 w-2 h-[60%] rounded-t" />
                          </div>
                          <svg className="w-10 h-10 shrink-0 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]" viewBox="0 0 32 32">
                            <path d="M16,16 L16,2 A14,14 0 0,1 30,16 Z" fill="#2563eb" />
                            <path d="M16,16 L30,16 A14,14 0 0,1 2,16 Z" fill="#e2e8f0" />
                            <path d="M16,16 L2,16 A14,14 0 0,1 16,2 Z" fill="#0ea5e9" />
                          </svg>
                        </div>
                        <p className="text-[10px] text-gray-500 font-bold leading-tight">Track non-billable hours &amp; internal efforts.</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-3 rounded-xl text-center shadow-md">
                      <p className="text-[9px] font-extrabold uppercase tracking-wide leading-snug">
                        Make Data-Driven Decisions With Powerful Reports &amp; Real-Time Insights
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 5 — HISTORY & TRANSPARENCY */}
              <div
                id="amc-card-5"
                onMouseEnter={() => setActiveStep(5)}
                className={`lg:col-span-4 relative ${cardBase} ${ringColor(5, activeStep === 5)} ${cardVisibility(5)} min-h-[360px]`}
              >
                {/* Decorative annotation (desktop only) */}
                <div className="hidden xl:flex absolute -top-28 right-2 items-center gap-3.5 max-w-[280px] z-20 pointer-events-none select-none">
                  <img
                    src="/products/support/amc_calendar.svg"
                    alt="AMC Calendar"
                    className="w-20 h-20 object-contain shrink-0 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                  />
                  <p className="text-[10.5px] text-slate-600 font-extrabold leading-snug">
                    Timebar visually tracks AMC timeline with exact start, end dates, progress % and days left.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full ${badgeColor(5)} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                    5
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-800 uppercase tracking-wider">History &amp; Transparency</h3>
                </div>

                <div className="flex flex-col justify-between flex-1 gap-4">
                  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-inner">
                    <div className="bg-slate-50 border-b border-slate-200 px-3 py-2">
                      <span className="text-[11px] font-bold text-slate-800">AMC History Log</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[10px] text-slate-600 border-collapse">
                        <thead>
                          <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-extrabold uppercase text-[9px] text-left">
                            <th className="px-2.5 py-3 border-r border-slate-200">Date &amp; Time</th>
                            <th className="px-2.5 py-3 border-r border-slate-200">User</th>
                            <th className="px-2.5 py-3 border-r border-slate-200">Action</th>
                            <th className="px-2.5 py-3">Details</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 font-medium">
                          {historyLog.map((log, lIdx) => (
                            <tr key={lIdx} className="hover:bg-slate-50/50">
                              <td className="px-2.5 py-4 border-r border-slate-200 text-slate-500 whitespace-nowrap">
                                <span className="block font-bold">{log.date}</span>
                                <span className="block text-[9px] text-slate-400">{log.time}</span>
                              </td>
                              <td className="px-2.5 py-4 border-r border-slate-200 text-slate-800 font-bold">{log.user}</td>
                              <td className="px-2.5 py-4 border-r border-slate-200 text-blue-600 font-bold">{log.action}</td>
                              <td className="px-2.5 py-4 text-slate-600 leading-snug">{log.details}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-3 bg-[#f3f9f4] border border-[#349f48]/20 p-3 rounded-xl">
                    <p className="text-[11px] text-[#277c36] font-extrabold leading-normal">
                      Every action is logged for complete audit and accountability.
                    </p>
                    <ShieldCheck className="w-6 h-6 text-[#349f48] shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM METRICS BANNER ─────────────────────────────────── */}
        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-[#0b1f3a] to-[#16335f] rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 lg:gap-x-10 text-center">
            {bottomMetrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="flex flex-col items-center gap-2 px-2 w-[calc(50%-12px)] sm:w-[calc(33.33%-22px)] lg:flex-1 min-w-[150px] max-w-[220px]"
              >
                <metric.Icon className="w-7 h-7 sm:w-8 sm:h-8 mb-1 text-[#4fb962]" />
                <span className="text-sm sm:text-base font-black tracking-wide leading-tight">{metric.title}</span>
                <p className="text-xs sm:text-sm text-blue-200/90 leading-relaxed max-w-[180px] mx-auto font-medium">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FOOTER LINE ────────────────────────────────────────────── */}
        <div className="mt-10 sm:mt-12 text-center flex items-center justify-center gap-3">
          <div className="h-px bg-[#349f48]/40 w-10 sm:w-16" />
          <span className="text-[11px] sm:text-xs font-black text-slate-700 uppercase tracking-widest leading-none">
            One AMC. Complete Visibility. Better Maintenance. Stronger Business.
          </span>
          <div className="h-px bg-[#349f48]/40 w-10 sm:w-16" />
        </div>
      </div>
    </section>
  );
}

export default function ProductDetailPremiumSupportStaging({
  product,
  relatedProducts,
  allProducts,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white font-sans selection:bg-purple-100 selection:text-purple-900 overflow-x-clip">
      {/* 1. Centered Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#faf5ff] via-[#fdf9ff] to-white">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat"
          }}
        ></div>

        {/* Purple Radial Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_600px_500px_at_center_45%,rgba(147,51,234,0.12)_0%,rgba(147,51,234,0.05)_50%,transparent_100%)] pointer-events-none"></div>

        {/* Additional Purple Glow Accents */}
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#9333EA] opacity-[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#a855f7] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

        {/* Floating Dots Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.4]" style={{
          backgroundImage: `radial-gradient(#9333EA 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }}></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold text-[#000000] leading-[1] mb-6">
              The Best all-in-one project management software<br />
              <span className="text-[#9333EA]">designed to unify your projects, tasks, and support tickets in one seamless platform</span>
              <span style={{ color: SUPPORT_PURPLE }}>.</span>
            </h1>
            <p className="text-base lg:text-xl text-[#444444] mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              An easy project management solution to track daily work, monitor team performance, and never miss billing or renewals again.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-6 md:mt-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-premium-orange group !px-10 !py-5"
              >
                <div className="shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <span className="relative z-10 flex items-center gap-3 font-black tracking-wider text-sm">
                  REQUEST A FREE DEMO
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById('iss-features-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative inline-flex items-center justify-center gap-3 px-10 py-5 font-black tracking-wider text-sm text-gray-700 transition-all duration-300 rounded-full bg-white border-2 border-gray-100 hover:border-purple-200 hover:text-[#9333EA] shadow-sm hover:shadow-xl"
              >
                EXPLORE FEATURES
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Full Width Dashboard Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-dashboard-wrapper !py-6 lg:!min-h-[620px]"
        >
          <div className="dashboard-animation left">
            <div
              className="scroll-img"
              style={{
                backgroundImage: `url('/products/support/support_slide_1.jpg'), url('/products/support/support_slide_2.jpg')`
              }}
            ></div>
          </div>
          <div className="dashboard-animation right">
            <div
              className="scroll-img"
              style={{
                backgroundImage: `url('/products/support/support_slide_3.jpg'), url('/products/support/support_slide_4.jpg')`
              }}
            ></div>
          </div>
          <div
            className="dashboard-main-img cursor-zoom-in group/hero"
            onClick={() => setLightboxImage("/products/support/support_dashboard_img_1.jpg")}
          >
            <div className="relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] bg-white">
              <img
                src="/products/support/support_dashboard_img_1.jpg"
                alt="Support Dashboard Preview"
                className="w-full object-contain lg:h-[668px] h-full shadow-2xl transition-transform duration-700 group-hover/hero:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover/hero:bg-black/5 transition-colors"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 1.5. Who Is ISS Built For */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#faf5ff] to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#9333EA] opacity-[0.03] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#9333EA] opacity-[0.04] rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#0a0a0a] mb-6 capitalize">
                Project Management Software Suitable for These <span className="text-[#9333EA]">Industries</span>
              </h2>
              <p className="text-[#6b7280] max-w-2xl mx-auto text-base leading-relaxed">
                Who is ISS built for? Discover how our system empowers specialized teams and scales with your business needs across every sector. Your ultimate project management software for small business and large business
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesBuiltFor.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group relative flex flex-col items-center bg-white border border-gray-100 rounded-3xl p-8 text-center hover:shadow-[0_20px_50px_rgba(147,51,234,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent rounded-3xl transition-all duration-500 z-0"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-purple-50 text-2xl rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#9333EA] group-hover:text-white transition-all duration-300 shadow-sm">
                    <span className="">{industry.icon}</span>
                  </div>
                  <h3 className="mb-3 group-hover:text-[#9333EA] transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 md:mt-20">
            {/* Desktop Flow Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 p-2 bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.12)] border border-gray-100">
                <img
                  src="/products/support/Project info graphicsnew.png"
                  alt="ISS Workflow Desktop"
                  className="w-full h-auto rounded-[2rem]"
                />
              </div>
            </motion.div>

            {/* Mobile/Responsive Flow Diagrams */}
            <div className="lg:hidden space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative p-2 bg-white rounded-3xl shadow-xl border border-gray-100"
              >
                <img
                  src="/products/support/iss_flow_pm_mobile.png"
                  alt="ISS Project Management Flow"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative p-2 bg-white rounded-3xl shadow-xl border border-gray-100"
              >
                <img
                  src="/products/support/iss_flow_ticket_mobile.png"
                  alt="ISS Ticket Management Flow"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Support Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:text-left text-center">
            {/* Left Side - Image (Sticky on Desktop) */}
            <div className="relative lg:sticky lg:top-28 lg:self-start">
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in group/img"
                onClick={() => setLightboxImage("/products/support/ticket_management.jpg")}
              >
                <img
                  src="/products/support/ticket_management.jpg"
                  alt="Support Application Dashboard"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#9333EA] opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#9333EA] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-[#000000] mb-6 capitalize">
                The Unified Pulse of Your{" "}
                <span className="text-[#9333EA]">Projects and Tickets</span>
              </h2>

              <p className="text-lg text-[#444444] mb-8 leading-relaxed">
                The Internal Support System (ISS) is a centralized application designed to manage and streamline our operational workflows, daily tasks, and project execution. It acts as the single source of truth for all project, client, and employee-related data, ensuring organizational efficiency and transparency. ISS enables us to accurately track time spent on tasks, manage client deliverables, and maintain critical data for billing and compliance.
              </p>

              {/* Key Benefits */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 lg:flex hidden bg-gradient-to-br from-[#9333EA] to-[#7c3aed] rounded-xl items-center justify-center text-2xl shadow-md">
                      📋
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#000000] mb-2">
                      Centralized Project & Task Management
                    </h3>
                    <p className="text-[#555] leading-relaxed text-sm">
                      Add projects, set deadlines, and map out timelines, credentials, internal docs, and assets in a well-structured manner using integrated project scheduling software features.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 lg:flex hidden bg-gradient-to-br from-[#9333EA] to-[#7c3aed] rounded-xl items-center justify-center text-2xl shadow-md">
                      🎫
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#000000] mb-2">
                      Integrated Ticketing System
                    </h3>
                    <p className="text-[#555] leading-relaxed text-sm">
                      Create tickets, assign specialized team members, and collaborate in real-time through comments and file attachments while accurately tracking billable hours.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 lg:flex hidden bg-gradient-to-br from-[#9333EA] to-[#7c3aed] rounded-xl items-center justify-center text-2xl shadow-md">
                      📊
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#000000] mb-2">
                      Daily Reporting & Productivity Tracking
                    </h3>
                    <p className="text-[#555] leading-relaxed text-sm">
                      Track billable, non-billable, and internal hours with daily submissions. Gain complete visibility into team productivity and project consumption.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Dynamic Sections */}
      <ProjectLifecycleSection />
      <TicketLifecycleSection />
      <ReportsSection onImageClick={setLightboxImage} />
      <AnalyticsSection onImageClick={setLightboxImage} />
      <AmcModuleOverviewSection />
      <AutomationSection />
      <SafetyManagementSection />

      {/* 3. ISS Interactive Feature Section */}
      <section id="iss-features-section">
        <SupportFeatureSection onImageClick={setLightboxImage} />
      </section>

      {/* 4. FAQ Section - Interactive Accordion */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white via-[#FAF5FF] to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9333EA] opacity-[0.03] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9333EA] opacity-[0.04] rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] capitalize mb-3 bg-[#9333EA]/10 px-4 py-2 rounded-full">
                SUPPORT
              </span>
              <h2 className="text-[#0a0a0a] mb-6 capitalize">
                Everything you need to know
              </h2>
              <p className="text-[#6b7280] max-w-[600px] mx-auto text-base leading-relaxed">
                Get instant answers to common questions about our Internal Support System platform.
                Click any question to expand and learn more.
              </p>
            </motion.div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-6xl mx-auto">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-purple-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl lg:rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(249,115,22,0.2)]"
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
                  Ready to streamline your <br className="hidden md:block" />
                  internal operations?
                </h2>

                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join hundreds of organizations optimizing their workflows with ISS.
                  Start your free trial today or schedule a personalized demo with our team.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="press-illusion-btn-white bg-white text-orange-600 !px-8 !py-4 font-bold transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-3">

                      <span>Request Demo Now</span>
                    </span>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Lightbox Popup */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center bg-white/5 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Popup Preview"
                className="max-w-full max-h-[90vh] object-contain cursor-default"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors group"
              >
                <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Explore More Products Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333EA' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] capitalize mb-3 bg-[#9333EA]/10 px-4 py-2 rounded-full">
                MORE PRODUCTS
              </span>
              <h2 className="text-[#0a0a0a] mb-6 capitalize">
                Explore Our More Products
              </h2>
              <p className="text-[#6b7280] max-w-[600px] mx-auto text-base leading-relaxed">
                Discover our comprehensive suite of software solutions designed to transform your business operations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {allProducts
              .filter(p => {
                // Exclude current product
                if (p.slug === product.slug) return false;

                // Exclude any staging, old, or hidden products
                const isHidden = p.slug.includes('staging') || p.slug.includes('-old') || p.slug === 'bill-soft';
                if (isHidden) return false;

                return true;
              })
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
                    <div className="relative rounded-3xl p-8 h-full bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                      {/* Category Badge */}
                      <div className="inline-flex items-center justify-center bg-white text-[#9333EA] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#9333EA]/30 shadow-md mb-4">
                        {prod.category}
                      </div>

                      <div className="relative flex flex-col items-center w-full">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9333EA] to-[#7c3aed] flex items-center justify-center mb-6 shadow-lg mx-auto">
                          <span className="text-3xl">{prod.icon}</span>
                        </div>

                        {/* Title */}
                        <h3 className="mb-1 min-h-[3rem] line-clamp-2">
                          {prod.title}
                        </h3>

                        {/* Tagline */}
                        <div className="mb-2 flex min-h-[3.25rem] w-full items-start justify-center">
                          {prod.tagline ? (
                            <p className="text-[#9333EA] font-semibold line-clamp-2 leading-snug">
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
                        <div className="flex items-center justify-center gap-2 text-[#9333EA] font-semibold pt-2 border-t border-gray-50 w-full">
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
            className="text-center mt-8 md:mt-12"
          >
            <Link
              href="/products"
              className="btn-premium-orange group !px-8 !py-4 mx-auto"
            >
              <div className="shimmer"></div>
              <span className="relative z-10 flex items-center gap-2">
                <span>View All Products</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem={product.title}
        allItems={allProducts}
      />
    </div>
  );
}




