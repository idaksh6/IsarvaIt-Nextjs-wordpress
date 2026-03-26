"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";

const ISS_PRIMARY = "#10b981";
const ISS_DARK = "#059669";
const ISS_LIGHT = "#d1fae5";

export default function ProductDetailPremiumISS({
  product,
  relatedProducts,
  allProducts,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coreFeatures = [
    "Centralized Project & Task Management",
    "Integrated Ticketing System",
    "Daily Reporting & Productivity Tracking",
    "Renewal, Backup & Client Management",
    "Unified Operational Dashboard"
  ];

  const keyFeatures = [
    {
      title: "Project and Task Management",
      description: "Add projects set deadline, billing company and organize the task, notes, credentials, internal docs and assets in well mannered way",
      icon: "📋"
    },
    {
      title: "Ticket Management",
      description: "Create tickets, assign specialized team members, and collaborate in real-time through comments and file attachments while accurately tracking billable hours for every task.",
      icon: "🎫"
    },
    {
      title: "Renewal Management",
      description: "Centralize and track domain, hosting, application AMC, and other essential service details for every project and client. Use a dedicated dashboard to monitor expiry dates in real-time, ensuring zero downtime and timely renewals for all service commitments.",
      icon: "🔄"
    },
    {
      title: "Backup Management",
      description: "Securely manage file locations for projects, tickets, and internal data with flexible backup type selections and detailed coordination comments. Access a comprehensive backup history to track every version by date, ensuring old backups are always organized and ready for recovery.",
      icon: "💾"
    },
    {
      title: "Reports And Analytics",
      description: "Detailed and analytics reports to track daily submissions and productivity. From active ticket analytics to billable hour comparisons, gain full visibility into company-wide performance and more.",
      icon: "📊"
    },
    {
      title: "Worked Hours Tracking",
      description: "Monitor total time invested in each project with advanced employee and task filters to ensure precise resource management. Track actual days spent versus projected timelines to identify overflow data and optimize project efficiency.",
      icon: "⏱️"
    },
    {
      title: "Email, Google Chat Notifications",
      description: "Stay updated with automated alerts during project creation and daily report submissions for seamless team communication. Receive real-time notifications for every task submission via email and Google Chat, ensuring no milestone or update is ever missed.",
      icon: "📧"
    },
    {
      title: "Member Management with Role based permission",
      description: "Secure your system with role-based permissions. Control exactly what each user can create, view, or edit to maintain strict organizational security for each section.",
      icon: "👥"
    }
  ];

  const faqs = [
    {
      question: "What is the Internal Support Software and how can it help our organization?",
      answer: "The Internal Support System (ISS) is a centralized hub designed to streamline operational workflows by integrating project, task, ticket, and client management into a single platform. It acts as a \"single source of truth,\" allowing you to track everything from daily task execution and billable hours to critical service renewals like hosting and AMC. By providing granular role-based security and automated backup history, ISS ensures organizational transparency and data safety. Additionally, its powerful analytics and real-time notifications via Email and Google Chat empower your team to eliminate manual errors and optimize project efficiency."
    },
    {
      question: "How billable, Non billable, Internal Billable hrs calculated?",
      answer: "Calculations are managed through a centralized Daily Report System that converts daily task entries into actionable project data. At the end of each day, employees submit reports by selecting their assigned project or ticket and logging the exact hours worked. By categorizing each entry as Billable, Non-Billable, or Internal Billable, the system automatically aggregates the total time spent. This granular data allows management to track the precise hours invested per project and ticket, while also monitoring individual employee productivity and overall project profitability."
    },
    {
      question: "Is there a User Permission, role based access?",
      answer: "Yes, the system includes a comprehensive Role-Based Access Control (RBAC) system. Within the Employee Management Module, administrators have full authority to decide exactly which modules each employee can access."
    },
    {
      question: "Are there any Reports and Analytics Provided?",
      answer: "Yes, the system provides a robust suite of both standard and analytical reports designed for total operational visibility. You can access detailed project timesheets, backup logs, and overflow reports to monitor deadlines and data safety in real-time. Our advanced analytics track employee productivity, calculating per-day billable hours and comparing them against non-billable and internal tasks. Furthermore, project consumption analytics provide high-level insights into resource allocation, ensuring every project remains profitable and strategically aligned."
    },
    {
      question: "What is the basic flow of the Internal project Ticket?",
      answer: "The workflow starts with Admins assigning role-based permissions to users for secure access. Managers then initialize projects by setting timelines, teams, and billing departments. Once active, teams use Task Management within projects to store credentials and assets, while the standalone Ticketing System handles support requests via real-time comments and flagging. Each day ends with employees submitting Daily Reports to log their worked hours. This data feeds directly into Advanced Analytics, providing management with instant visibility into project health and employee productivity."
    },
    {
      question: "Does the system send reminders for upcoming renewals?",
      answer: "While automated email reminders are not currently active, the system features a Dedicated Renewal Dashboard. This high-visibility card tracks service expiry in real-time, highlighting all renewals due within the next 6 days. It also tracks overdue items, clearly showing if a renewal has lapsed (e.g., \"Expiry crossed by 2 days\") to ensure no service downtime occurs."
    },
    {
      question: "Can we export the reports and analytics to PDF or Excel?",
      answer: "For Now the system provides a built-in PDF Export feature for all standard reports. This allows managers to easily generate professional documents for project reviews, internal audits, or client meetings."
    }
  ];

  return (
    <div className="bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Hero Section */}
      <section className="relative pt-40 lg:pb-32 pb-10 overflow-hidden bg-gradient-to-b from-[#d1fae5] via-[#ecfdf5] to-white">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat"
          }}
        ></div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_600px_500px_at_center_45%,rgba(16,185,129,0.12)_0%,rgba(16,185,129,0.05)_50%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#10b981] opacity-[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#059669] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[32px] md:text-[50px] font-extrabold text-[#000000] leading-tight mb-8">
              Streamline Your Workflow.<br />
              <span className="text-[#10b981]">
                Simplify Your Support
              </span>
              <span style={{ color: ISS_PRIMARY }}>.</span>
            </h1>
            <p className="text-base text-[#444444] mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline projects, tickets, and clients in one synchronized hub. From initial tracking to renewal management, keep every task and support request on schedule.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="press-illusion-btn bg-[#10b981] hover:bg-[#059669] text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 flex cursor-pointer rounded-lg transition-all"
              >
                <span>DOWNLOAD BROCHURE</span>
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

        {/* Dashboard Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="container mx-auto px-6 mt-16 relative z-10"
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="aspect-video flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-6xl mb-4">🖥️</div>
                  <p className="text-lg font-semibold">Dashboard Preview</p>
                  <p className="text-sm">Image will be added here</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Workflow Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#000000] mb-6">
              The Unified Pulse of Your{" "}
              <span className="text-[#10b981]">Projects and Tickets</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-[#444444] leading-relaxed mb-6">
                The Internal Support System (ISS) is a centralized application designed to manage and streamline our operational workflows, daily tasks, and project execution. It acts as the single source of truth for all project, client, and employee-related data, ensuring organizational efficiency and transparency.
              </p>
              <p className="text-lg text-[#444444] leading-relaxed">
                ISS enables us to accurately track time spent on tasks, manage client deliverables, and maintain critical data for billing and compliance.
              </p>
            </div>
          </div>

          {/* Core Features */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-[#000000]">Core Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-200"
                >
                  <div className="w-2 h-2 bg-[#10b981] rounded-full flex-shrink-0"></div>
                  <span className="text-[#059669] font-semibold">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#000000] mb-4">
              Key Features
            </h2>
            <p className="text-lg text-[#444444] max-w-3xl mx-auto">
              Powerful tools designed to streamline your workflow and boost productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#000000] mb-4">{feature.title}</h3>
                <p className="text-[#444444] leading-relaxed">{feature.description}</p>
                
                {/* Image Placeholder */}
                <div className="mt-6 rounded-xl overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
                  <p className="text-gray-400 text-sm">Feature Image</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#000000] mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-lg text-[#444444] max-w-3xl mx-auto">
              Frequently asked questions about the Internal Support System
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg border border-emerald-100"
              >
                <h3 className="text-xl font-bold text-[#000000] mb-4 flex items-start gap-3">
                  <span className="text-[#10b981] text-2xl">Q:</span>
                  {faq.question}
                </h3>
                <div className="pl-8">
                  <p className="text-[#444444] leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#10b981] to-[#059669] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get started with Internal Support System today and experience seamless project and ticket management.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-[#10b981] font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Request a Demo
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName="Internal Support System"
      />

      {/* Sticky CTA */}
      {isScrolled && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#10b981] text-white px-6 py-3 rounded-full shadow-2xl hover:bg-[#059669] transition-all flex items-center gap-2 font-bold"
          >
            <span>Get Started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </div>
  );
}
