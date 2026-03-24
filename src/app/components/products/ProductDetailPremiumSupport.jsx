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

export default function ProductDetailPremiumSupport({
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

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[32px] md:text-[50px] font-extrabold text-[#000000] leading-tight mb-8">
              Streamline Your <span className="text-[#9333EA]">Workflow</span>. <br />
              Simplify Your <span className="text-[#9333EA]">Support</span>
              <span style={{ color: SUPPORT_PURPLE }}>.</span>
            </h1>
            <p className="text-base text-[#444444] mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline projects, tickets, and clients in one synchronized hub. From initial tracking to renewal management, keep every task and support request on schedule.
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
                backgroundImage: `url('/products/support/support slider image 1.png'), url('/products/support/support slider image 2.png')`
              }}
            ></div>
          </div>
          <div className="dashboard-animation right">
            <div 
              className="scroll-img"
              style={{
                backgroundImage: `url('/products/support/support slider image 2.png'), url('/products/support/support slider image 3.png')`
              }}
            ></div>
          </div>
          <div className="dashboard-main-img">
            <div className="relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] bg-white">
              <img
                src="/products/support/Support-dashboard-img.jpg"
                alt="Support Dashboard Preview"
                className="w-full object-contain lg:h-[668px] h-full shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Core Support Section */}
      <section className="lg:py-32 py-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:text-left text-center">
            {/* Left Side - Image (Sticky on Desktop) */}
            <div className="relative lg:sticky lg:top-28 lg:self-start">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/products/support/Ticket Management.png"
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

      {/* 3. ISS Interactive Feature Section */}
      <div id="iss-features-section">
        <SupportFeatureSection />
      </div>

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
      <section className="py-20 bg-white relative overflow-hidden">
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
                    className="group relative bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                  >
                    <span>Start Free Trial</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>

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
    image: "/products/support/Project and Task Management.png",
  },
  {
    id: "ticket",
    label: "Ticket Management",
    icon: "🎫",
    color: "#0EA5E9",
    desc: "Create tickets, assign specialized team members, and collaborate in real-time through comments and file attachments while accurately tracking billable hours for every task.",
    placeholder: "TM",
    image: "/products/support/Ticket Management.png",
  },
  {
    id: "renewal",
    label: "Renewal Management",
    icon: "🔄",
    color: "#10B981",
    desc: "Centralize and track domain, hosting, application AMC, and other essential service details for every project and client. Use a dedicated dashboard to monitor expiry dates in real-time.",
    placeholder: "RM",
    image: "/products/support/renewal Management.png",
  },
  {
    id: "backup",
    label: "Backup Management",
    icon: "💾",
    color: "#F59E0B",
    desc: "Securely manage file locations for projects, tickets, and internal data with flexible backup type selections and detailed coordination comments. Access comprehensive backup history.",
    placeholder: "BM",
    image: "/products/support/Backup Management.png",
  },
  {
    id: "reports",
    label: "Reports And Analytics",
    icon: "📊",
    color: "#EF4444",
    desc: "Detailed analytics reports to track daily submissions and productivity. From active ticket analytics to billable hour comparisons, gain full visibility into company-wide performance.",
    placeholder: "RA",
    image: "/products/support/Report and analytics.png",
  },
  {
    id: "hours",
    label: "Worked Hours Tracking",
    icon: "⏱️",
    color: "#8B5CF6",
    desc: "Monitor total time invested in each project with advanced employee and task filters. Track actual days spent versus projected timelines to identify overflow data and optimize efficiency.",
    placeholder: "HT",
    image: "/products/support/worked Hours tracking.png",
  },
  {
    id: "notifications",
    label: "Email, Google Chat Notifications",
    icon: "📧",
    color: "#06B6D4",
    desc: "Stay updated with automated alerts during project creation and daily report submissions. Receive real-time notifications for every task submission via email and Google Chat.",
    placeholder: "NT",
    image: "/products/support/Email Google chat Notifications .png",
  },
  {
    id: "permissions",
    label: "Member Management with Role-based Permission",
    icon: "🔒",
    color: "#9333EA",
    desc: "Secure your system with role-based permissions. Control exactly what each user can create, view, or edit to maintain strict organizational security for each section.",
    placeholder: "MP",
    image: "/products/support/Member Management with role based.png",
  },
];

/* ─────────────────────────────────────────────────────────────
   ISS FEATURE ORBIT SECTION — Production-Grade
───────────────────────────────────────────────────────────── */
function SupportFeatureSection() {
  const [activeId, setActiveId] = useState("project");
  const [mobileOpenId, setMobileOpenId] = useState("project");

  const leftFeatures = supportFeatures.slice(0, 4);
  const rightFeatures = supportFeatures.slice(4);
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

        {/* ── DESKTOP ORBIT ── */}
        <div className="hidden lg:block">
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
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold whitespace-nowrap ${activeId === feature.id
                    ? "bg-gray-900 border-purple-600 text-black shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
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
                  className="w-full h-full rounded-xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.15)]"
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
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold whitespace-nowrap ${activeId === feature.id
                    ? "bg-gray-900 border-purple-600 text-black shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
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
