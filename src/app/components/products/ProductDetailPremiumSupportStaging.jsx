"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";

const SUPPORT_PURPLE = "#9333EA";
const SUPPORT_DARK = "#4B4B4B";
const SUPPORT_GREY = "#F5F5F5";

/* ─────────────────────────────────────────────────────────────
   INDUSTRIES BUILT FOR DATA
───────────────────────────────────────────────────────────── */
const industriesBuiltFor = [
  {
    title: "Software Development",
    description: "Streamline bug tracking and manage server backups while keeping a tight log on developer productivity.",
    icon: "💻"
  },
  {
    title: "Financial & Accounting",
    description: "Securely store sensitive client portal credentials and never miss a tax filing deadline.",
    icon: "📈"
  },
  {
    title: "Website Design Agencies",
    description: "Manage launches from A-to-Z and track SSL/Domain renewals so client sites never go offline.",
    icon: "🎨"
  },
  {
    title: "Construction & Real Estate",
    description: "Track site work, manage tasks across teams, and monitor project progress easily. Keep records, deadlines, and client updates organized from start to finish.",
    icon: "🏗️"
  },
  {
    title: "Internet Marketing & SEO",
    description: "Organize monthly deliverables like backlink reports and track time spent on every campaign for clear ROI.",
    icon: "📊"
  },
  {
    title: "Managed IT Service Providers",
    description: "Centralize support tickets and maintain a rigorous schedule for hardware and license renewals.",
    icon: "🛠️"
  },
  {
    title: "Creative Design & Branding",
    description: 'Break down complex creative workflows and see exactly where "brainstorming" ends and "production" begins.',
    icon: "✨"
  },
  {
    title: "Digital Marketing Firms",
    description: "Manage campaign requests and recurring social media posts in one central hub.",
    icon: "📱"
  },
  {
    title: "Full-Service Marketing Agencies",
    description: "Bridge the gap between creative teams and clients with real-time resource tracking.",
    icon: "🎯"
  },
  {
    title: "Consulting & Professional Services",
    description: "Professionalize your billable hours and maintain perfect documentation for every client engagement.",
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
  }
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftColumnFaqs = faqData.slice(0, 5);
  const rightColumnFaqs = faqData.slice(5, 10);

  const renderFaqItem = (faq, index) => {
    const isOpen = openIndex === index;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
        className={`group relative bg-white border-2 transition-all duration-300 overflow-hidden ${isOpen
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
          className="w-full text-left px-6 py-5 flex items-start gap-4 transition-colors duration-200"
        >
          {/* Icon Circle */}
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${isOpen
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
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Left Column - First 5 FAQs */}
      <div className="space-y-4">
        {leftColumnFaqs.map((faq, index) => renderFaqItem(faq, index))}
      </div>

      {/* Right Column - Last 5 FAQs */}
      <div className="space-y-4">
        {rightColumnFaqs.map((faq, index) => renderFaqItem(faq, index + 5))}
      </div>
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
    desc: "Add projects, set deadlines, assign billing companies, and organize tasks, notes, credentials, internal docs, and assets in a well-structured manner.",
    placeholder: "PM",
    image: "/products/support/project_task_management.jpg",
  },
  {
    id: "ticket",
    label: "Ticket Management",
    icon: "🎫",
    color: "#0EA5E9",
    desc: "Create tickets, assign specialized team members, and collaborate in real-time through comments and file attachments while accurately tracking billable hours for every task.",
    placeholder: "TM",
    image: "/products/support/ticket_management.jpg",
  },
  {
    id: "renewal",
    label: "Renewal Management",
    icon: "🔄",
    color: "#10B981",
    desc: "Centralize and track domain, hosting, application AMC, and other essential service details for every project and client. Use a dedicated dashboard to monitor expiry dates in real-time.",
    placeholder: "RM",
    image: "/products/support/renewal_management.jpg",
  },
  {
    id: "backup",
    label: "Backup Management",
    icon: "💾",
    color: "#F59E0B",
    desc: "Securely manage file locations for projects, tickets, and internal data with flexible backup type selections and detailed coordination comments. Access comprehensive backup history.",
    placeholder: "BM",
    image: "/products/support/backup_management.jpg",
  },
  {
    id: "reports",
    label: "Reports And Analytics",
    icon: "📊",
    color: "#EF4444",
    desc: "Detailed analytics reports to track daily submissions and productivity. From active ticket analytics to billable hour comparisons, gain full visibility into company-wide performance.",
    placeholder: "RA",
    image: "/products/support/reports_analytics.jpg",
  },
  {
    id: "hours",
    label: "Worked Hours Tracking",
    icon: "⏱️",
    color: "#8B5CF6",
    desc: "Monitor total time invested in each project with advanced employee and task filters. Track actual days spent versus projected timelines to identify overflow data and optimize efficiency.",
    placeholder: "HT",
    image: "/products/support/worked_hours_tracking.jpg",
  },
  {
    id: "notifications",
    label: "Email, Google Chat Notifications",
    icon: "📧",
    color: "#06B6D4",
    desc: "Stay updated with automated alerts during project creation and daily report submissions. Receive real-time notifications for every task submission via email and Google Chat.",
    placeholder: "NT",
    image: "/products/support/email_google_notifications.jpg",
  },
  {
    id: "permissions",
    label: "Member Management with Role-based Permission",
    icon: "🔒",
    color: "#9333EA",
    desc: "Secure your system with role-based permissions. Control exactly what each user can create, view, or edit to maintain strict organizational security for each section.",
    placeholder: "MP",
    image: "/products/support/member_management.jpg",
  },
];

/* ─────────────────────────────────────────────────────────────
   ISS FEATURE ORBIT SECTION — Production-Grade
───────────────────────────────────────────────────────────── */
function SupportFeatureSection() {
  const [activeId, setActiveId] = useState("project");
  const [mobileOpenId, setMobileOpenId] = useState("project");

  const leftFeatures = supportFeatures.slice(0, Math.ceil(supportFeatures.length / 2));
  const rightFeatures = supportFeatures.slice(Math.ceil(supportFeatures.length / 2));
  const activeFeature = supportFeatures.find((f) => f.id === activeId);

  return (
    <section className="py-20 overflow-hidden bg-[#F7F7F7]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="block text-[10px] font-black text-[#9333EA] tracking-[0.28em] uppercase mb-2.5">
            KEY FEATURES
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-[#0a0a0a] leading-tight mb-3.5">
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
                  className={`relative border-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2 py-2.5 px-6 pr-6.5 text-[14px] font-bold whitespace-nowrap ${activeId === feature.id
                    ? "bg-white border-[#9333EA] text-gray-900 shadow-[0_10px_25px_rgba(147,51,234,0.1)]"
                    : "bg-white border-gray-100 text-gray-400 hover:border-gray-300 hover:text-gray-600"
                    }`}
                >
                  <span className="text-base leading-none">{feature.icon}</span>
                  {feature.label}
                  {activeId === feature.id && (
                    <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[8px] border-l-[#9333EA]" />
                  )}
                </button>
              ))}
            </div>

            {/* Center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 2xl:w-[78%] lg:w-[76%]">
              {/* Image Glow Background */}
              <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full scale-75 animate-pulse pointer-events-none"></div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full h-full rounded-xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.18)]"
                >
                  <img
                    src={activeFeature.image}
                    alt={activeFeature.label}
                    className="w-full h-full object-contain bg-white"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
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
                  className={`relative border-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2 py-2.5 px-6 pr-6.5 text-[14px] font-bold whitespace-nowrap ${activeId === feature.id
                    ? "bg-white border-[#9333EA] text-gray-900 shadow-[0_10px_25px_rgba(147,51,234,0.1)]"
                    : "bg-white border-gray-100 text-gray-400 hover:border-gray-300 hover:text-gray-600"
                    }`}
                >
                  {feature.label}
                  <span className="text-base leading-none">{feature.icon}</span>
                  {activeId === feature.id && (
                    <span className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[8px] border-r-[#9333EA]" />
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
                  className={`flex items-center gap-2 py-2.5 px-5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    activeId === feature.id
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
  { title: "The “Due-Date” Radar", desc: "More than just a deadline—see exactly how many days are left or how many you’ve slipped, helping you stay on track and take action early.", icon: "🎯" },
  { title: "Work Hours Tracker", desc: "Get a clear view of total worked hours vs. estimated hours, along with how much time is remaining to complete the project.", icon: "⏳" },
  { title: "Daily Task Management", desc: "Track day-to-day activities with detailed task entries, including comments and time spent for complete visibility.", icon: "📝" },
  { title: "Kanban Simplicity", desc: "Seamlessly move tasks from In Progress to Review to Completed with an intuitive drag-and-drop interface.", icon: "📋" },
  { title: "Employee Growth Insights", desc: "Visualize team performance with growth graphs based on productivity, hours contributed, and task completion trends.", icon: "📈" },
  { title: "Project Lifecycle Hub", desc: "Maintain structured Notes, track every update through Project History, and ensure nothing is missed throughout the project journey.", icon: "🔄" },
  { title: "The Vault", desc: "Securely attach internal documents, asset links, and credentials directly to the project—everything you need, just one click away.", icon: "🔒" }
];

const ticketLifecycleData = [
  { title: "Smart Tagging", desc: "Link tickets directly to specific projects so the context is always clear.", icon: "🏷️" },
  { title: "Team Huddles", desc: "Add internal comments and flag team members for quick help without the client seeing the \"behind-the-scenes\" talk.", icon: "👥" },
  { title: "Time Tracking", desc: "Every ticket tracks worked hours, so you know exactly how much effort a support request took.", icon: "⏱️" }
];

const reportsData = [
  { title: "Profitability Reports", desc: "See Billable vs. Non-Billable hours by employee, project, or company.", icon: "💰" },
  { title: "The Overflow Alert", desc: "Get a \"Project Estimated Overflow\" report to see which projects are going over budget.", icon: "⚠️" },
  { title: "Daily Snapshots", desc: "View consolidated daily reports and company-wide billing sheets.", icon: "📸" },
  { title: "Compliance", desc: "Access backup and renewal logs to ensure your internal operations are 100% healthy.", icon: "✅" },
  { title: "PDF Export", desc: "Download and share reports instantly.", icon: "📄" }
];

const analyticsData = [
  { 
    title: "Performance Trends", 
    desc: "Compare billable hours per day and see employee productivity trends.", 
    icon: "📊", 
    image: "/products/support/reports_analytics.jpg" 
  },
  { 
    title: "Client Insights", 
    desc: 'Use "Company-Wise Analytics" to see which clients are your biggest earners and which require the most support.', 
    icon: "💼", 
    image: "/products/support/worked_hours_tracking.jpg" 
  },
  { 
    title: "Hour Comparison", 
    desc: "Visualize how your team’s time is spent month-over-month to plan for future hiring.", 
    icon: "📅", 
    image: "/products/support/project_task_management.jpg" 
  }
];

const automationData = [
  { title: "Instant Sync", desc: "When a daily task is added, it’s automatically pushed to your Google Chat group.", icon: "🔄" },
  { title: "CEO Alerts", desc: "The \"Main Person\" gets an automated email the moment a project is created or a daily report is submitted.", icon: "📧" },
  { title: "Accountability Bot", desc: "If a team member misses their daily report, ISS automatically notifies the CEO—ensuring everyone stays disciplined.", icon: "🤖" }
];

const safetyData = [
  { title: "Renewal Alerts", desc: "Get dashboard alerts for AMC, Hosting, Domains, and Service renewals before they expire.", icon: "🔔" },
  { title: "Backup Logs", desc: "Track every version and location of your data backups.", icon: "💾" },
  { title: "Role-Based Access", desc: "You decide exactly what each employee can see or edit.", icon: "🔐" }
];

function ProjectLifecycleSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] uppercase mb-4 bg-[#9333EA]/10 px-4 py-2 rounded-full">Project & Task Lifecycle</span>
          <h2 className="text-[clamp(32px,4vw,44px)] font-extrabold text-[#0a0a0a] leading-tight">
            From Start to Finish—<br className="md:hidden" /><span className="text-[#9333EA]">Everything in One Place</span>
          </h2>
        </div>
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-purple-100 transform md:-translate-x-1/2 rounded-full"></div>
          
          {projectLifecycleData.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className={`relative flex items-center mb-12 md:mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-1/2"></div>
              <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-white border-4 border-purple-100 rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 text-xl shadow-lg shadow-purple-500/20">
                {item.icon}
              </div>
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                <div className="bg-white hover:bg-purple-50 transition-colors p-8 rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(147,51,234,0.1)] group">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#9333EA] transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
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
    <section className="py-24 bg-[#faf5ff] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-60 rounded-full blur-[100px]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] uppercase mb-4 bg-white px-4 py-2 rounded-full shadow-sm">Ticket Lifecycle</span>
          <h2 className="text-[clamp(32px,4vw,44px)] font-extrabold text-[#0a0a0a] leading-tight">
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
              className="bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-[0_15px_60px_rgba(147,51,234,0.08)] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full flex items-center justify-center text-4xl mb-8 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReportsSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] uppercase mb-4 bg-purple-50 px-4 py-2 rounded-full">The Power of Reports</span>
          <h2 className="text-[clamp(32px,4vw,44px)] font-extrabold text-[#0a0a0a] leading-tight mb-6">
            Total Transparency, <br/><span className="text-[#9333EA]">Zero Manual Effort.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Stop spending your Friday nights building spreadsheets. Our Reports Module generates everything you need in seconds:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {reportsData.map((item, index) => {
            const spans = [
              "md:col-span-8", 
              "md:col-span-4", 
              "md:col-span-4", 
              "md:col-span-4", 
              "md:col-span-4"
            ];
            const spanClass = spans[index] || "md:col-span-4";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${spanClass} bg-gray-50 hover:bg-white border border-gray-100 hover:border-purple-200 rounded-3xl p-8 shadow-sm hover:shadow-[0_20px_50px_rgba(147,51,234,0.1)] transition-all duration-300 group`}
              >
                <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.05)] group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

function AnalyticsSection() {
  const [activeAnalysisIdx, setActiveAnalysisIdx] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-tr from-purple-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] uppercase mb-4 bg-white px-4 py-2 rounded-full shadow-sm">High-Level Analytics</span>
          <h2 className="text-[clamp(32px,4vw,44px)] font-extrabold text-[#0a0a0a] leading-tight mb-4">
            See Your Business in <br className="hidden md:block" /> <span className="text-[#9333EA]">High Definition.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            While reports give you the "what," our Analytics Module gives you the "why." Turn raw data into growth strategies:
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Dashboard Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {analyticsData.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveAnalysisIdx(index)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeAnalysisIdx === index 
                    ? "bg-[#9333EA] text-white shadow-xl shadow-purple-500/30 -translate-y-1" 
                    : "bg-white text-gray-600 border border-gray-100 hover:border-purple-200"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {item.title}
              </button>
            ))}
          </div>

          {/* Active Feature Display */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-gray-100">
            <div className="grid lg:grid-cols-5 min-h-[500px]">
              {/* Image Side (3/5 of width) */}
              <div className="lg:col-span-3 bg-gray-50 border-r border-gray-100 overflow-hidden relative group">
                {/* Browser Mockup Top Bar */}
                <div className="flex items-center gap-1.5 p-4 bg-white border-b border-gray-100 sticky top-0 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  <div className="ml-4 flex-1 h-6 bg-gray-50 rounded-lg text-[10px] flex items-center px-3 text-gray-400 font-medium overflow-hidden whitespace-nowrap">
                    isarva.com/support/analytics/{analyticsData[activeAnalysisIdx].title.toLowerCase().replace(/ /g, '-')}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAnalysisIdx}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full p-6 flex items-start justify-center"
                  >
                    <img 
                      src={analyticsData[activeAnalysisIdx].image} 
                      alt={analyticsData[activeAnalysisIdx].title}
                      className="w-full h-auto max-h-full rounded-xl shadow-2xl object-contain ring-1 ring-gray-200"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Detail Side (2/5 of width) */}
              <div className="lg:col-span-2 p-12 flex flex-col justify-center bg-white relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAnalysisIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-widest uppercase mb-4 px-3 py-1 bg-purple-50 rounded-md">
                      Module Deep Dive
                    </span>
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                      {analyticsData[activeAnalysisIdx].title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {analyticsData[activeAnalysisIdx].desc}
                    </p>

                    <div className="space-y-4 mb-10">
                      {[
                        "Real-time data synchronization",
                        "Custom report builders",
                        "Historical trend analysis"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-[#9333EA] text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-purple-500/20 hover:bg-purple-700 transition-all">
                      Request Module Demo
                    </button>
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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] uppercase mb-4 bg-[#9333EA]/10 px-4 py-2 rounded-full">Automation: Your "Invisible Assistant"</span>
          <h2 className="text-[clamp(32px,4vw,44px)] font-extrabold text-[#0a0a0a] leading-tight">
            We Do the <span className="text-[#9333EA]">Grunt Work</span><br className="md:hidden" /> So You Don't Have To.
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 relative mt-20">
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-purple-100 via-purple-300 to-purple-100"></div>
          
          {automationData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex-1 flex flex-col items-center text-center relative z-10"
            >
              <div className="bg-white p-2 rounded-full mb-6 relative group">
                <div className="absolute inset-0 bg-[#9333EA] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
                <div className="w-24 h-24 bg-purple-50 border-4 border-white rounded-full flex items-center justify-center text-4xl shadow-[0_10px_30px_rgba(147,51,234,0.15)] relative z-10 transition-transform">
                  <span className="group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SafetyManagementSection() {
  return (
    <section className="py-24 bg-[#faf5ff] relative border-t-2 border-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] uppercase mb-4 bg-white px-4 py-2 rounded-full shadow-sm">Safety & Management</span>
            <h2 className="text-[clamp(32px,4vw,44px)] font-extrabold text-[#0a0a0a] leading-tight mb-6">
              Secure Your Assets,<br/><span className="text-[#9333EA]">Organize Your Clients.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">Enterprise-grade security controls wrapped in an intuitive, easy-to-use interface.</p>
            <div className="inline-block bg-[#9333EA] hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-purple-500/30 transition-all hover:-translate-y-1 cursor-pointer">
              Explore Safety Controls
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            {safetyData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-3xl flex items-center gap-6 shadow-[0_10px_40px_rgba(147,51,234,0.05)] border border-purple-50/50 hover:border-purple-200 transition-colors"
              >
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 text-[#9333EA]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white font-sans selection:bg-purple-100 selection:text-purple-900">
      {/* 1. Centered Hero Section */}
      <section className="relative pt-40 lg:pb-32 pb-10 overflow-hidden bg-gradient-to-b from-[#faf5ff] via-[#fdf9ff] to-white">
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
            <h1 className="text-[32px] md:text-[50px] font-extrabold text-[#000000] leading-tight mb-8">
              Stop Switching Tools—<br />
              <span className="text-[#9333EA]">Manage Projects, Tasks & Tickets Together</span>
              <span style={{ color: SUPPORT_PURPLE }}>.</span>
            </h1>
            <p className="text-base text-[#444444] mb-8 max-w-3xl mx-auto leading-relaxed">
              One simple platform to manage projects, track daily work, monitor team performance, and never miss billing, reports, or renewals again.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="press-illusion-btn-purple bg-purple-500 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 flex cursor-pointer"
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
        </div>

        {/* Full Width Dashboard Animation */}
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
          <div className="dashboard-main-img">
            <div className="relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] bg-white">
              <img
                src="/products/support/support_dashboard_img_1.jpg"
                alt="Support Dashboard Preview"
                className="w-full object-contain lg:h-[668px] h-full shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 1.5. Who Is ISS Built For */}
      <section className="py-24 bg-gradient-to-br from-[#faf5ff] to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#9333EA] opacity-[0.03] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#9333EA] opacity-[0.04] rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[clamp(32px,4vw,44px)] font-extrabold text-[#0a0a0a] leading-tight mb-4">
                Tailored for the Way Your <span className="text-[#9333EA]">Industry</span> Works.
              </h2>
              <p className="text-[#6b7280] max-w-2xl mx-auto text-base leading-relaxed">
                Who is ISS built for? Discover how our system empowers specialized teams and scales with your business needs across every sector.
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
                className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-[0_20px_50px_rgba(147,51,234,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent rounded-3xl transition-all duration-500 z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-purple-50 text-2xl rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#9333EA] group-hover:text-white transition-all duration-300 shadow-sm">
                    <span className="group-hover:filter group-hover:brightness-0 group-hover:invert">{industry.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#9333EA] transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Core Support Section */}
      <section className="lg:py-32 py-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:text-left text-center">
            {/* Left Side - Image (Sticky on Desktop) */}
            <div className="relative lg:sticky lg:top-28 lg:self-start">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/products/support/ticket_management.jpg"
                  alt="Support Application Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#9333EA] opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#9333EA] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-4xl md:text-[50px] font-extrabold text-[#000000] mb-6 leading-tight">
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
                      Add projects, set deadlines, assign billing companies, and organize tasks, notes, credentials, internal docs, and assets in a well-structured manner.
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
      <ReportsSection />
      <AnalyticsSection />
      <AutomationSection />
      <SafetyManagementSection />

      {/* 3. ISS Interactive Feature Section */}
      <section id="iss-features-section">
        <SupportFeatureSection />
      </section>

      {/* 4. FAQ Section - Interactive Accordion */}
      <section className="py-24 bg-gradient-to-b from-white via-[#FAF5FF] to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9333EA] opacity-[0.03] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9333EA] opacity-[0.04] rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] uppercase mb-3 bg-[#9333EA]/10 px-4 py-2 rounded-full">
                SUPPORT
              </span>
              <h2 className="text-[clamp(32px,4.5vw,48px)] font-extrabold text-[#0a0a0a] leading-tight mb-4">
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
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-purple-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-purple-500 to-purple-600 rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(147,51,234,0.2)]"
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
                <span className="inline-block text-xs font-black text-white/90 tracking-[0.25em] uppercase mb-4 bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm">
                  GET STARTED TODAY
                </span>

                <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold text-white leading-tight mb-6">
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
                    className="group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105 flex items-center gap-3"
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
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333EA' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-black text-[#9333EA] tracking-[0.28em] uppercase mb-3 bg-[#9333EA]/10 px-4 py-2 rounded-full">
                MORE PRODUCTS
              </span>
              <h2 className="text-[clamp(32px,4.5vw,48px)] font-extrabold text-[#0a0a0a] leading-tight mb-4">
                Explore Our More Products
              </h2>
              <p className="text-[#6b7280] max-w-[600px] mx-auto text-base leading-relaxed">
                Discover our comprehensive suite of software solutions designed to transform your business operations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts
              .filter(p => p.slug !== product.slug)
              .slice(0, 3)
              .map((prod, index) => (
                <motion.div
                  key={prod.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/products/${prod.slug}`}
                    className="block"
                  >
                    <div className="relative rounded-3xl p-8 h-full bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <div className="relative text-center md:text-left">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9333EA] to-[#7c3aed] flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0">
                          <span className="text-3xl">{prod.icon}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {prod.title}
                        </h3>

                        {/* Tagline */}
                        {prod.tagline && (
                          <p className="text-[#9333EA] font-semibold mb-3">
                            {prod.tagline}
                          </p>
                        )}

                        {/* Description */}

                        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                          {prod.shortDescription}
                        </p>

                        {/* CTA Link */}
                        <div className="flex items-center justify-center md:justify-start gap-2 text-[#9333EA] font-semibold">
                          Explore Product
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute -top-11 -right-2 bg-[#9333EA]/10 text-[#9333EA] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#9333EA]/30 shadow-md">
                          {prod.category}
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#9333EA] to-[#7c3aed] text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
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
