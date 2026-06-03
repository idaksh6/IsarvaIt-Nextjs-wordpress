"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  Clock,
  ShieldCheck,
  Users,
  LayoutDashboard,
  ArrowRight,
  Server,
  Zap,
  Activity,
  Briefcase,
  AlertTriangle,
  CheckCircle,
  FileText
} from "lucide-react";
import Link from "../../components/AppLink";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function SupportSystemCaseStudyClient() {
  return (
    <div className="min-h-screen bg-[#FDF8F2] text-gray-800 selection:bg-emerald-200 selection:text-emerald-900 overflow-hidden font-sans">

      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-emerald-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-green-100/30 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-16 px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block py-1.5 px-4 mb-6 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wide uppercase border border-emerald-200"
            >
              Case Study
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
            >
              Transforming a Web Design Company with <span className="text-emerald-600">Isarva Support System</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base lg:text-xl text-gray-600 mb-10 leading-relaxed font-medium"
            >
              How Isarva Support System Transformed a Web Design Company from Manual Chaos to a Structured, Data-Driven Workflow
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm font-medium text-gray-500 mb-8 md:mb-12">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Briefcase size={16} className="text-emerald-500" /> Website Designing Company
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Server size={16} className="text-emerald-500" /> Cloud Server Deployment
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Clock size={16} className="text-emerald-500" /> 8+ Months Duration
              </span>
            </motion.div>

            {/* Tags from Prompt */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-8">
              <span className="bg-emerald-50 px-3 py-1 rounded-md">Project Management</span>

              <span className="bg-emerald-50 px-3 py-1 rounded-md">Ticket Management</span>

              <span className="bg-emerald-50 px-3 py-1 rounded-md">Powerful Reports and Analytics</span>

              <span className="bg-emerald-50 px-3 py-1 rounded-md">User Management</span>

              <span className="bg-emerald-50 px-3 py-1 rounded-md">Backup Management</span>
            </motion.div>
          </motion.div>

          {/* Highlight Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mt-8"
          >
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">8+ Months</div>
              <div className="text-gray-600 font-medium">Error-Free Operations</div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">0 Errors</div>
              <div className="text-gray-600 font-medium">In Billed Hr Calculations</div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">1 Hub</div>
              <div className="text-gray-600 font-medium">Integrated (Project, Ticket)</div>
            </div>
          </motion.div>
        </section>

        {/* EXECUTIVE SUMMARY */}
        <section className="py-10 lg:py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl text-gray-900 mb-6 flex items-center justify-center md:justify-start gap-3 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">
              <Activity className="text-emerald-500" /> Executive Summary
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center md:text-left">
              A busy Web Design Company was struggling with "organized chaos." With dozens of websites under construction and hundreds of existing clients, they were losing track of billable hours, missing renewal dates, and struggling to keep team members focused on the right tasks.
            </p>
          </div>
        </section>

        {/* CLIENT PROFILE */}
        <section className="py-10 lg:py-16 px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="text-gray-900 mb-8 md:mb-10 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Client Profile</h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8">
                <div>
                  <p className="text-xs md:text-sm text-emerald-600 font-bold mb-1 uppercase tracking-wider">Industry</p>
                  <p className="font-medium text-gray-900 text-base md:text-lg">Website Designing Company</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-emerald-600 font-bold mb-1 uppercase tracking-wider">Workforce Type</p>
                  <p className="font-medium text-gray-900 text-base md:text-lg">Website Development, Maintenance Company</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-emerald-600 font-bold mb-1 uppercase tracking-wider">Employee Count</p>
                  <p className="font-medium text-gray-900 text-base md:text-lg">Mid-Sized, dynamic workforce with month-on-month fluctuation</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-emerald-600 font-bold mb-1 uppercase tracking-wider">Previous System</p>
                  <p className="font-medium text-gray-900 text-base md:text-lg">Microsoft Excel sheets, emails, and manual tracking</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-emerald-600 font-bold mb-1 uppercase tracking-wider">Project Volume</p>
                  <p className="font-medium text-gray-900 text-base md:text-lg">Multiple ongoing projects with continuous client Company requests</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-emerald-600 font-bold mb-1 uppercase tracking-wider">Team Structure</p>
                  <p className="font-medium text-gray-900 text-base md:text-lg">Designers, Developers, Company Executives, Management</p>
                </div>
                <div className="md:col-span-2 bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100/50 mt-4 md:mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <p className="text-xs md:text-sm text-emerald-600 font-bold mb-1 uppercase tracking-wider">Solution Deployed</p>
                      <p className="font-medium text-gray-900 text-base md:text-lg">Isarva Support System — centralized web-based platform accessible from everywhere</p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-emerald-600 font-bold mb-1 uppercase tracking-wider">Go-Live Duration</p>
                      <p className="font-medium text-gray-900 text-base md:text-lg">Over 8 months in active production use</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS CHALLENGES */}
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-6 text-center md:text-left text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Business Challenges</h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 text-center md:text-left">Before implementing the Isarva Support System, the Company relied on manual entries and disconnected tools, which created operational inefficiencies:</p>
            <ul className="space-y-4">
              {[
                "Project data was maintained in multiple spreadsheets, leading to duplication and errors",
                "No centralized system to track project status or team performance",
                "Renewal dates (Hosting/Domains) were manually tracked, increasing risk of misses with alert systems",
                "Client Company requests were scattered across emails and calls were clients data were mismatching",
                "No clear visibility on billable vs non-billable work in the company",
                "Sensitive client data lacked proper access control"
              ].map((challenge, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700 bg-[#FDF8F2] p-4 rounded-xl border border-gray-100 md:bg-transparent md:p-0 md:border-none md:rounded-none">
                  <div className="mt-0.5 flex-shrink-0 text-red-500"><AlertTriangle size={18} /></div>
                  <p className="text-sm md:text-base">{challenge}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CHALLENGES VS SOLUTIONS */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-gray-900 mb-4 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Challenges vs. Isarva Solutions</h2>
            </div>

            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Header Row */}
              <div className="hidden md:grid grid-cols-2 bg-gray-50 border-b border-gray-100 p-6">
                <div className="font-bold text-gray-900 uppercase tracking-wider text-[20px] flex items-center gap-2">
                  <AlertTriangle size={18} className="text-red-500" /> Business Challenge
                </div>
                <div className="font-bold text-emerald-700 uppercase tracking-wider text-[20px] flex items-center gap-2 md:pl-12">
                  <CheckCircle size={18} className="text-emerald-500" /> Isarva Support Solution
                </div>
              </div>

              {/* Data Rows */}
              <div className="divide-y divide-gray-100">
                {[
                  { c: "Manual spreadsheets & scattered data", s: "Centralized Support System platform" },
                  { c: "No Real-Time Tracking", s: "Live Project Dashboards" },
                  { c: "Missed Renewals", s: "Automated Renewal Alerts" },
                  { c: "Unstructured Company Handling", s: "Integrated Ticketing System" },
                  { c: "Lack of productivity Insights", s: "Powerful Analytics and Reporting Module" },
                  { c: "No Role-Based Security", s: "Controlled user-level access" }
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-6 hover:bg-emerald-50/30 transition-colors group relative">
                    {/* Arrow for Desktop */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full items-center justify-center text-gray-300 group-hover:text-emerald-500 group-hover:border-emerald-200 transition-all shadow-sm z-10">
                      <ArrowRight size={20} />
                    </div>

                    <div className="md:pr-12 mb-4 md:mb-0 flex flex-col justify-center">
                      <div className="md:hidden flex items-center gap-2 text-red-500 font-bold text-[10px] uppercase tracking-wider mb-2">
                        <AlertTriangle size={14} /> Challenge
                      </div>
                      <p className="text-gray-700 font-medium text-base md:text-lg">{item.c}</p>
                    </div>

                    <div className="md:pl-12 flex flex-col justify-center">
                      <div className="md:hidden flex items-center gap-2 text-emerald-600 font-bold text-[10px] uppercase tracking-wider mb-2 mt-2 pt-4 border-t border-gray-100">
                        <CheckCircle size={14} /> Isarva Solution
                      </div>
                      <p className="text-gray-900 font-bold text-base md:text-lg text-emerald-700">{item.s}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION OVERVIEW & CORE MODULES */}
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 lg:mb-16 max-w-4xl mx-auto">
              <h2 className="mb-6 capitalize">Solution Overview — Isarva Support</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-3 text-center">
                To address these challenges, Isarva implemented the Support System — a unified platform combining project management, Ticket handling, and operational tracking.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
                A key component was the Support Application, which streamlined post-launch activities like client issue tracking, renewals, and service management.
              </p>
            </div>

            <h3 className="md:text-2xl text-center mb-8 md:mb-10 text-emerald-700">Core Modules Deployed</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "Project Management", desc: "Structured task tracking from start to completion with full history", icon: <LayoutDashboard /> },
                { title: "Company Ticketing", desc: "Centralized issue tracking", icon: <Zap /> },
                { title: "Renewal Alerts", desc: "Automated reminders for hosting & Domain etc", icon: <Clock /> },
                { title: "Role Based Access", desc: "Secure, permission-based system usage.", icon: <ShieldCheck /> },
                { title: "Analytics Dashboard", desc: "Real-time insights into productivity and Powerful Reports.", icon: <TrendingUp /> },
                { title: "Daily Reporting", desc: "Accurate tracking of employee activities.", icon: <Activity /> },
                { title: "Document Management", desc: "Secure storage of credentials & files", icon: <FileText /> },
                { title: "Backup Management", desc: "To track the Backup Locations and maintain History", icon: <Server /> },
                { title: "Advanced Reports and Analytics", desc: "Turns business data into clear, easy-to-read charts that help you make better decisions faster", icon: <TrendingUp /> }
              ].map((mod, i) => (
                <div key={i} className="bg-[#FDF8F2] p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-50 hover:shadow-lg transition-all md:hover:-translate-y-1 flex flex-col items-center text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                    {mod.icon}
                  </div>
                  <h3 className="md:text-xl mb-2 md:mb-3">{mod.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 md:mt-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-6 md:p-10 text-white shadow-xl text-center md:text-left">
              <h3 className="md:text-2xl mb-3 md:mb-4">Project History and Worked Hour Track</h3>
              <p className="text-emerald-50 text-sm md:text-base leading-relaxed ">
                The system includes a dedicated History section that records all changes made to project details, including who made the change and when it was made. This ensures complete transparency and accountability, allowing teams to track who worked on what, monitor contributions, and compare estimated versus actual time spent on each project.
              </p>
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION APPROACH */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-6 md:mb-8 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Implementation Approach</h2>
            <p className="text-base md:text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">Isarva followed a structured implementation methodology to ensure the solution precisely matched the client's operational reality:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
              {[
                { title: "Requirement Mapping", text: "Studied existing manual processes and identified gaps" },
                { title: "System Setup", text: "Configured Support System modules to match project and ticket lifecycle " },
                { title: "Data Migration", text: "Shifted spreadsheets and records into a centralized system" },
                { title: "Role Configuration", text: "Defined access levels for security and clarity" },
                { title: "Training & Change Management", text: "Ensured team adoption through guided training" },
                { title: "Phased Deployment", text: "Introduced the system gradually to avoid disruption" }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start p-5 md:p-6 bg-white rounded-2xl shadow-sm border border-emerald-50 hover:shadow-md transition-all h-full">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base mt-0.5 md:mt-0">{idx + 1}</div>
                  <div>
                    <h4 className="mb-1 md:text-base">{step.title}</h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-10 md:mb-12 text-center max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">When we first introduced the Internal Support System, the Company moved all their "messy" spreadsheets into one central hub. Instead of searching through emails, the team now had a Master View where every project, ticket enquiry details, passwords was stored safely in one place.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="md:text-2xl mb-3 md:mb-4 text-emerald-700">Strengthening Security with Role-Based Access</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">One of the biggest wins was User-Level Security. Previously, every employee could see everything. We fixed this by setting up specific "Page Rights":</p>
                <ul className="list-disc pl-5 md:pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                  <li><strong>Need-to-Know Access:</strong> Designers only see their assigned design tasks; developers only see their assigned technical tickets and projects</li>
                  <li><strong>Management Control:</strong> Only the Company Head can access high-level billing data with admin access</li>
                </ul>
                <p className="text-sm md:text-base text-gray-700 mt-4 font-medium">This ensured better focus and protected sensitive client information.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="md:text-2xl mb-3 md:mb-4 text-emerald-700">Streamlining Project and Ticket LifeCycle</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">We simplified how your team moves work from a "rough idea" or "client issue" to a successful finish:</p>
                <ul className="list-disc pl-5 md:pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                  <li><strong>The Progress Tracker:</strong> A simple drag-and-drop system to move tasks and tickets from "In Progress" to "Completed" instantly.</li>
                  <li><strong>The Due-Date Radar:</strong> Countdown-based alerts for deadlines and support response times to keep your team proactive.</li>
                  <li><strong>Private Team Collaboration:</strong> Add internal comments and flag team members on tickets for quick help without the client seeing the "behind-the-scenes" talk.</li>
                  <li><strong>Effort Tracking:</strong> Every ticket automatically tracks worked hours, so you know exactly how much time and effort each support request actually took.</li>
                </ul>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="md:text-2xl mb-3 md:mb-4 text-emerald-700">Solving the "Company" Headache & Renewals</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">Post-launch Company became structured and efficient:</p>
                <ul className="list-disc pl-5 md:pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                  <li><strong>Smart Ticket Tagging:</strong> Each issue is linked to its project with full history visibility</li>
                  <li><strong>Automatic Renewal Alerts:</strong> Timely notifications for Hosting and Domain renewals</li>
                </ul>
                <p className="text-sm md:text-base text-gray-700 mt-4 font-medium">This eliminated service disruptions and improved response time.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="md:text-2xl mb-3 md:mb-4 text-emerald-700">Powerful Analytics: Real Data</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">The Company moved from guesswork to data-driven decisions:</p>
                <ul className="list-disc pl-5 md:pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                  <li><strong>Billable vs Non-Billable Tracking:</strong> Clear visibility of productive hours</li>
                  <li><strong>Monthly Comparisons:</strong> Analyze client-wise effort trends</li>
                  <li><strong>Overflow Reports:</strong> Identify projects exceeding estimated timelines</li>
                </ul>
                <p className="text-sm md:text-base text-gray-700 mt-4 font-medium">And many more powerful reports and high level analytics were provided.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow md:col-span-2">
                <h3 className="md:text-2xl mb-3 md:mb-4 text-emerald-700">Leadership through Automation</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">Automation helped maintain discipline without manual follow-ups:</p>
                <ul className="list-disc pl-5 md:pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                  <li><strong>The Accountability Bot:</strong> Alerts management if daily reports are not submitted</li>
                  <li><strong>The 1-Year Dashboard:</strong> Visual trends to Company strategic decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS & IMPACT */}
        <section className="py-10 lg:py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-10 md:mb-16 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Results & Business Impact</h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div className="bg-[#FDF8F2] p-6 md:p-10 rounded-3xl border border-emerald-100 relative overflow-hidden h-full text-center md:text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-[80px]" />
                <h3 className="md:text-2xl mb-6 md:mb-8 relative z-10">Impact Snapshot</h3>

                <div className="space-y-4 md:space-y-6 relative z-10">
                  <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">100%</div>
                    <div className="text-sm md:text-base text-gray-800 font-medium">Tracking of Hrs, Project Data</div>
                  </div>
                  <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">3× Faster</div>
                    <div className="text-sm md:text-base text-gray-800 font-medium">Project and Support Coordination</div>
                  </div>
                  <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">Anywhere Access</div>
                    <div className="text-sm md:text-base text-gray-800 font-medium">Allows access from any location with no device restriction</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                {[
                  { title: "Zero Operational Errors", desc: "Since go-live, the website designing company has experienced zero errors in project tracking, Ticket handling, renewal, user and client management. Previously, manual spreadsheets and email-based coordination led to missed updates and inconsistencies. With the Support System, all activities are system-driven, ensuring accuracy and reliability across operations." },
                  { title: "Reduced Coordination Effort", desc: "Daily follow-ups, status checks, and manual tracking have been significantly reduced. Project updates, task progress, and Company tickets are now visible in real time, eliminating the need for constant internal communication and freeing up team bandwidth for execution." },
                  { title: "Centralized Company Tracking", desc: "All client requests are now managed through a structured ticketing system. Each issue is linked to its respective project with complete history tracking. There are no lost requests, no dependency on individual emails, and no confusion in ownership." }
                ].map((res, i) => (
                  <div key={i} className="flex gap-4 bg-[#FDF8F2] p-4 rounded-xl md:bg-transparent md:p-0">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="text-emerald-500" size={20} />
                    </div>
                    <div>
                      <h4 className="md:text-xl mb-2">{res.title}</h4>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{res.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Zero Missed Renewals Notification", desc: "Hosting, domain etc renewals are fully automated with alert-based notifications in the dashboard. The website company no longer depends on manual tracking or calendar reminders, eliminating the risk of client website downtime due to missed renewals." },
                { title: "Improved Project Visibility & Control", desc: "Management now has complete visibility into project progress, team workload, and timelines through a centralized platform. Any delays or risks are identified early, enabling proactive decision-making instead of reactive problem-solving." },
                { title: "Data-Driven Productivity Insights", desc: "The analytics module provides clear insights into billable vs non-billable hours, project effort distribution, and team performance. This allows the Company to optimize resource allocation and improve overall profitability." },
                { title: "Automated Accountability & Reporting", desc: "Daily activity tracking and automated reminders ensure consistent reporting across the team. Management no longer needs to manually follow up, as the system enforces discipline through structured workflows." },
                { title: "Secure Data Management", desc: "All project data, client credentials, documents, and communication history are stored securely in one system. There is no risk of data loss, duplication, or unauthorized access, as role-based permissions control visibility." },
                { title: "Anywhere, Anytime Access", desc: "Being a web-based system, the Support System allows teams and management to access project data, Company tickets, and reports from any location. This ensures continuity of operations without dependency on local files or specific systems." }
              ].map((res, i) => (
                <div key={i} className="bg-[#FDF8F2] p-6 md:p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center md:items-start md:text-left">
                  <h4 className="md:text-xl text-emerald-700 mb-2 md:mb-3">{res.title}</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{res.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-gray-100 relative">
              <div className="absolute -top-2 -left-2 md:-top-6 md:-left-6 text-emerald-200">
                <svg width="60" height="60" className="md:w-[80px] md:h-[80px]" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic relative z-10 mb-6 md:mb-8 mt-2 md:mt-0">
                “Isarva’s Internal Support System has completely changed how we operate. What used to be handled through multiple spreadsheets, emails, and constant follow-ups is now managed in a single platform. Tracking projects, managing Company requests, and monitoring employee work hours, renewals have become seamless. Over the past several months, we have not faced a single operational error, and our team is now more focused on delivery rather than coordination.”
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-lg md:text-xl flex-shrink-0">
                  M
                </div>
                <div>
                  <h5 className="md:text-base">Management Team</h5>
                  <p className="text-xs md:text-sm text-gray-500">Website Designing Company</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & CTA SECTION */}
        <section className="py-10 lg:py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-gray-900 mb-4 md:mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">About Isarva Support Application</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed max-w-4xl mx-auto">
                Isarva Support Application is a scalable, centralized platform designed to manage project execution, client Company tickets, and operational workflows for service-driven businesses such as web design and digital agencies and more industries like software development company, digital marketing firm, full service marketing company and many more.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                The system is built to handle multiple ongoing projects, continuous client interactions, and recurring service requirements while remaining simple to use and easy to adopt across teams with minimal training.
              </p>
            </div>

            <h3 className="md:text-2xl text-center mb-6 md:mb-8">Key Capabilities Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-4 mb-10 md:mb-16 bg-[#FDF8F2] md:bg-transparent p-6 rounded-2xl md:p-0 md:rounded-none">
              {[
                "Centralized project and task management in a single unified system",
                "Structured ticketing system with complete issue history tracking",
                "Real-time issue tracking with clear ownership and status visibility",
                "Automated alerts for hosting, domain etc",
                "Notes-based communication system within projects, allowing teams to add updates, highlight important information, and ensure critical points are never missed",
                "Role-based access control to ensure data security and focused workflows",
                "Daily activity tracking for accurate work logging and accountability",
                "Real-time dashboards for project status, workload, and performance insights",
                "Secure document, assets and credential management within projects",
                "Automated reminders and notifications for pending actions",
                "Centralized data storage eliminating dependency on emails and spreadsheets",
                "Web-based access enabling teams to work from anywhere"
              ].map((capability, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="mt-0.5 md:mt-1 text-emerald-500 flex-shrink-0"><CheckCircle size={16} className="md:w-[18px] md:h-[18px]" /></div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{capability}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 rounded-3xl p-6 md:p-10 text-center">
              <p className="text-base md:text-lg font-medium text-emerald-900 mb-6 md:mb-8 max-w-3xl mx-auto">
                Isarva works closely with every client to understand their specific workflows and delivers a tailored configuration — not a one-size-fits-all product — so that teams can start working efficiently from day one with minimal effort.
              </p>

              <h2 className="text-xl md:text-2xl text-gray-900 mb-6 md:mb-8 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Explore Isarva Support Product — Enquire Now</h2>

              <Link href="/contact" className="press-illusion-btn-orange bg-orange-600 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-full transition-all shadow-lg hover:shadow-orange-500/30 mb-6 md:mb-8 text-sm md:text-base flex items-center justify-center gap-2 w-fit mx-auto">
                Enquire Now <ArrowRight size={18} />
              </Link>

              <p className="text-xs md:text-sm text-gray-500 font-medium leading-relaxed">Contact Isarva today for a free consultation and personalised product demonstration.<br />www.isarvait.com • Trusted Company Solutions for Every Industry</p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
