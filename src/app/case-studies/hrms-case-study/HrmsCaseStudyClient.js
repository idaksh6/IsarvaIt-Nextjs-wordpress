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
  Activity,
  Briefcase,
  AlertTriangle,
  CheckCircle,
  FileText,
  Building,
  Calculator,
  FileCheck,
  Settings,
  Banknote,
  DownloadCloud
} from "lucide-react";
import Link from "next/link";

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

export default function HrmsCaseStudyClient() {
  return (
    <div className="min-h-screen bg-[#FDF8F2] text-gray-800 selection:bg-blue-200 selection:text-blue-900 overflow-hidden font-sans">

      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-indigo-100/30 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block py-1.5 px-4 mb-6 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wide uppercase border border-blue-200"
            >
              Case Study
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
            >
              Transforming Construction Workforce Management with <span className="text-blue-600">Isarva HRMS</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed"
            >
              How Isarva HRMS Replaced Manual Excel Processes with an Automated, Error-Free HR & Payroll System
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm font-medium text-gray-500 mb-8 md:mb-12">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Building size={16} className="text-blue-500" /> Construction Industry
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Server size={16} className="text-blue-500" /> Cloud Server Deployment
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Clock size={16} className="text-blue-500" /> 8+ Months Duration
              </span>
            </motion.div>

            {/* Tags */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 text-xs font-bold text-blue-700 uppercase tracking-wider mb-8">
              <span className="bg-blue-50 px-3 py-1 rounded-md">Attendance Management</span>
              <span className="bg-blue-50 px-3 py-1 rounded-md">Payroll Automation</span>
              <span className="bg-blue-50 px-3 py-1 rounded-md">OT & Incentives</span>
              <span className="bg-blue-50 px-3 py-1 rounded-md">EPF/ESIC Compliance</span>
              <span className="bg-blue-50 px-3 py-1 rounded-md">Bank Upload Integration</span>
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
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">8+ Months</div>
              <div className="text-gray-600 font-medium">Error-Free Operations</div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">0 Errors</div>
              <div className="text-gray-600 font-medium">In Payroll Calculations</div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">3 Portals</div>
              <div className="text-gray-600 font-medium">Integrated (EPF, ESIC, Bank)</div>
            </div>
          </motion.div>
        </section>

        {/* EXECUTIVE SUMMARY */}
        <section className="py-10 lg:py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl text-gray-900 mb-6 flex items-center justify-center md:justify-start gap-3 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
              <Activity className="text-blue-500" /> Executive Summary
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 text-center md:text-left">
              A prominent mid-sized construction company operating across multiple project sites faced mounting challenges in managing its workforce manually. With a fluctuating, contract-based labour pool, complex overtime (OT) policies, incentive structures, and statutory compliance obligations, the company's HR team was investing enormous time in error-prone spreadsheet work every month.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center md:text-left">
              Isarva identified these pain points and delivered a purpose-built, cloud-deployed HRMS solution that fully automated attendance tracking, payroll computation, OT and incentive processing, EPF/ESIC compliance, and bank salary upload — all within a single, intuitive platform. After more than eight months of live operation, the company reports zero calculation errors, significantly reduced HR effort, and complete payroll accuracy.
            </p>
          </div>
        </section>

        {/* CLIENT PROFILE */}
        <section className="py-10 lg:py-16 px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="text-gray-900 mb-8 md:mb-10 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Client Profile</h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8">
                <div>
                  <p className="text-xs md:text-sm text-blue-600 font-bold mb-1 uppercase tracking-wider">Industry</p>
                  <p className="font-medium text-gray-900 text-base md:text-lg">Construction — Civil, Structural & Infrastructure</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-blue-600 font-bold mb-1 uppercase tracking-wider">Workforce Type</p>
                  <p className="font-medium text-gray-900 text-base md:text-lg">Contract labourers, site supervisors, permanent staff</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-blue-600 font-bold mb-1 uppercase tracking-wider">Employee Count</p>
                  <p className="font-medium text-gray-900 text-base md:text-lg">Large, dynamic workforce with monthly fluctuation</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-blue-600 font-bold mb-1 uppercase tracking-wider">Previous System</p>
                  <p className="font-medium text-gray-900 text-base md:text-lg">Microsoft Excel spreadsheets managed manually</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-blue-600 font-bold mb-1 uppercase tracking-wider">Banking Partner</p>
                  <p className="font-medium text-gray-900 text-base md:text-lg">Canara Bank — bulk salary macro-enabled sheets</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-blue-600 font-bold mb-1 uppercase tracking-wider">Statutory Obligations</p>
                  <p className="font-medium text-gray-900 text-base md:text-lg">EPF (Provident Fund) and ESIC</p>
                </div>
                <div className="md:col-span-2 bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50 mt-4 md:mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <p className="text-xs md:text-sm text-blue-600 font-bold mb-1 uppercase tracking-wider">Solution Deployed</p>
                      <p className="font-medium text-gray-900 text-base md:text-lg">Isarva HRMS Software — cloud server deployed</p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-blue-600 font-bold mb-1 uppercase tracking-wider">Go-Live Duration</p>
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
            <h2 className="text-gray-900 mb-6 text-center md:text-left text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Business Challenges</h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 text-center md:text-left">Before engaging Isarva, the company's HR and payroll operations were entirely manual. The following challenges were identified:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Irregular & Contract Workforce", desc: "Traditional HRMS platforms couldn't handle 'in-out' attendance patterns of contract workers who skip months, requiring error-prone manual reconciliations." },
                { title: "Complex OT Tracking", desc: "OT hours had to be tracked separately from regular shifts, computed at special rates, and paid independently across dozens of employees." },
                { title: "Attendance-Based Incentives", desc: "Incentives calculated purely on present days. Manual spreadsheet computation posed a massive risk of error and inconsistency." },
                { title: "Holiday Working (Comp-Off vs OT)", desc: "Employees had the choice between Comp-Off or OT pay for holiday work. No structured mechanism existed to capture preferences or track balances." },
                { title: "Segregated Payment Runs", desc: "Salary, OT, and Incentives had to be computed independently, disbursed separately, and reflected as distinct bank entries." },
                { title: "Statutory Uploads (EPF/ESIC)", desc: "Generating exact ECR format files manually for EPF and ESIC was extremely time-consuming and carried high risks of portal rejection." },
                { title: "Manual Bank Uploads", desc: "Laborious manual entry of employee bank data into Canara Bank's macro sheet three times a month (Salary, OT, Incentives)." }
              ].map((challenge, idx) => (
                <div key={idx} className="bg-[#FDF8F2] p-6 rounded-2xl border border-gray-100 md:bg-white md:shadow-sm md:hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-red-500 bg-red-50 p-2 rounded-full"><AlertTriangle size={18} /></div>
                    <h4 className="font-bold text-gray-900">{challenge.title}</h4>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed pl-12">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGES VS SOLUTIONS */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-gray-900 mb-4 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Challenges vs. Isarva Solutions</h2>
            </div>

            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Header Row */}
              <div className="hidden md:grid grid-cols-2 bg-gray-50 border-b border-gray-100 p-6">
                <div className="font-bold text-gray-900 uppercase tracking-wider text-[20px] flex items-center gap-2">
                  <AlertTriangle size={18} className="text-red-500" /> Business Challenge
                </div>
                <div className="font-bold text-blue-700 uppercase tracking-wider text-[20px] flex items-center gap-2 md:pl-12">
                  <CheckCircle size={18} className="text-blue-500" /> Isarva HRMS Solution
                </div>
              </div>

              {/* Data Rows */}
              <div className="divide-y divide-gray-100">
                {[
                  { c: "Contract-basis workers absent for full months, return next month", s: "Flexible attendance engine handles any attendance pattern; preserves historical records seamlessly" },
                  { c: "OT hours tracked separately from regular hours and paid apart", s: "Dedicated OT module captures daily OT hours, computes pay, generates standalone OT payment register" },
                  { c: "Incentives calculated on actual present days — varies each month", s: "Automated incentive engine reads attendance, computes via slabs, generates separate payout report" },
                  { c: "Holiday work: employee choice between Comp-Off or OT pay", s: "Holiday module captures preference, auto-updates leave balance or feeds OT register automatically" },
                  { c: "Three separate payment types must never be combined", s: "Three independent payment runs (Salary, OT, Incentives) each with its own register and bank file" },
                  { c: "Manual EPF & ESIC file preparation, error-prone", s: "One-click generation of EPF ECR and ESIC contribution files in exact portal-ready formats" },
                  { c: "Canara Bank macro-enabled bulk upload sheet filled manually", s: "Automated macro populates bank-readable bulk files for all three payment runs" }
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-8 hover:bg-blue-50/30 transition-colors group relative">
                    {/* Arrow for Desktop */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full items-center justify-center text-gray-300 group-hover:text-blue-500 group-hover:border-blue-200 transition-all shadow-sm z-10">
                      <ArrowRight size={20} />
                    </div>

                    <div className="md:pr-12 mb-4 md:mb-0 flex flex-col justify-center">
                      <div className="md:hidden flex items-center gap-2 text-red-500 font-bold text-[10px] uppercase tracking-wider mb-2">
                        <AlertTriangle size={14} /> Challenge
                      </div>
                      <p className="text-gray-700 font-medium text-base md:text-lg">{item.c}</p>
                    </div>

                    <div className="md:pl-12 flex flex-col justify-center">
                      <div className="md:hidden flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-wider mb-2 mt-2 pt-4 border-t border-gray-100">
                        <CheckCircle size={14} /> Isarva Solution
                      </div>
                      <p className="text-gray-900 font-bold text-base md:text-lg text-blue-700">{item.s}</p>
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
            <div className="text-center mb-10 md:mb-16 max-w-4xl mx-auto">
              <h2 className="text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Solution Overview — Isarva HRMS</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Isarva HRMS is a comprehensive, enterprise-grade Human Resource Management System purpose-built to handle the complexity of diverse workforce structures. For this construction company, Isarva delivered a fully tailored configuration deployed on a dedicated cloud server — ensuring data security, high availability, and remote accessibility across all project sites.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-10 text-blue-700">Core Modules Deployed</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "Employee Master Management", desc: "Centralised repository for all records, bank details, and statutory numbers. Handles contract-based and permanent staff.", icon: <Users /> },
                { title: "Flexible Attendance", desc: "Daily attendance capture with support for irregular patterns and absent months without data corruption.", icon: <Clock /> },
                { title: "Holiday & Comp-Off Engine", desc: "Captures employee choice (Comp-Off or OT) for holiday work and updates balances or OT registers automatically.", icon: <Briefcase /> },
                { title: "OT Computation Module", desc: "Tracks OT hours separately, applies multiplier rates, and generates an independent OT payment register.", icon: <Clock /> },
                { title: "Attendance Incentive Engine", desc: "Monthly incentives computed automatically based on present days using customisable slab configurations.", icon: <TrendingUp /> },
                { title: "Payroll Processing Engine", desc: "Processes standard monthly salary, deductions, PF, ESIC, and generates payslips independent of OT/Incentive runs.", icon: <Calculator /> },
                { title: "EPF & ESIC Compliance", desc: "Auto-generates ECR files for EPF and ESIC in exact portal-ready formats with zero manual intervention.", icon: <FileCheck /> },
                { title: "Bank Bulk Upload Integration", desc: "Custom macro automates population of Canara Bank's bulk payment sheet for salary, OT, and incentives separately.", icon: <Banknote /> },
                { title: "Reports & MIS Dashboard", desc: "Comprehensive reporting including attendance, salary registers, leave balances, and headcount analytics.", icon: <Activity /> },
                { title: "Audit Trail & Data Security", desc: "Every transaction is logged with timestamp. Data securely stored with Admin/HR-only access control.", icon: <ShieldCheck /> },
                { title: "Scalable Architecture", desc: "Architected to handle large employee counts and high data volumes without performance degradation.", icon: <Server /> },
                { title: "Anywhere Access", desc: "Cloud deployment allows managers to securely log in and perform operations from any office, site, or mobile device.", icon: <DownloadCloud /> }
              ].map((mod, i) => (
                <div key={i} className="bg-[#FDF8F2] p-6 md:p-8 rounded-2xl shadow-sm border border-blue-50 hover:shadow-lg transition-all md:hover:-translate-y-1 flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 mx-auto md:mx-0">
                    {mod.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{mod.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HR LETTER GENERATION */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-6 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">HR Letter Generation</h2>
            <p className="text-base md:text-lg text-gray-600 mb-10 md:mb-16 text-center max-w-4xl mx-auto">
              Managing employee lifecycle documentation is critical. Isarva HRMS includes a built-in HR Letter Generation module to produce professionally formatted, company-branded letters instantly, eliminating manual drafting and copy-paste errors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="bg-white p-6 md:p-5 lg:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">1. Offer Letter</h3>
                <p className="text-sm md:text-base text-gray-600 mb-6">Generated instantly when a candidate is selected, using a configurable template with company letterhead, logo, and authorised signature.</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Auto-populated from candidate master</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> CTC and salary breakup included</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Probation terms auto-inserted</li>
                </ul>
              </div>
              <div className="bg-white p-6 md:p-5 lg:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">2. Joining / Appointment Letter</h3>
                <p className="text-sm md:text-base text-gray-600 mb-6">Confirms employment on joining day, detailing designation, reporting manager, location, and contract duration for site workers.</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Confirmed designation & location</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Contract period & renewal clause</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Bulk generation for mass mobilisation</li>
                </ul>
              </div>
              <div className="bg-white p-6 md:p-5 lg:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">3. Experience Letter</h3>
                <p className="text-sm md:text-base text-gray-600 mb-6">Instantly generated on exit, detailing joining date, last working date, and a standard testimony of conduct.</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Auto tenure calculation</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Configurable conduct testimony</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Bulk generation on project exit</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 md:p-8 rounded-2xl flex flex-wrap justify-between gap-4 text-sm font-medium text-blue-900 border border-blue-100">
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-500" /> Company letterhead & logo</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-500" /> Logged with issue timestamp</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-500" /> Linked to employee record</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-500" /> Archived for future retrieval</span>
            </div>
          </div>
        </section>

        {/* EMPLOYEE-WISE SALARY CONFIGURATION */}
        <section className="py-10 lg:py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-6 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Employee-Wise Salary Configuration</h2>
            <p className="text-base md:text-lg text-gray-600 mb-10 md:mb-16 text-center max-w-4xl mx-auto">
              In construction, the workforce spans daily-wage workers, skilled tradesmen, supervisors, and senior management. Isarva HRMS provides complete control to enable or disable individual earnings and statutory deductions per employee without affecting others.
            </p>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Earnings */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-emerald-50 border-b border-emerald-100 p-6 text-center">
                  <h3 className="text-xl font-bold text-emerald-800">Configurable Earnings</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { n: "Basic Salary", d: "Mandatory foundation used for PF and calculations." },
                    { n: "House Rent (HRA)", d: "Disabled for site-workers with company accommodation." },
                    { n: "Conveyance", d: "Disabled for workers using company transport." },
                    { n: "Special Allowance", d: "Flexible gap component, enabled per grade/individual." },
                    { n: "Medical Allowance", d: "Disabled for workers covered under ESIC." },
                    { n: "Skill / Trade", d: "For certified tradesmen (welders, electricians)." },
                    { n: "Site / Project", d: "Toggled based on current remote deployment." },
                    { n: "Overtime (OT)", d: "Enabled per employee, processed independently." },
                    { n: "Incentive Pay", d: "Attendance-based, individual or grade slab." }
                  ].map((e, i) => (
                    <div key={i} className="p-4 md:p-5 hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-900 mb-1">{e.n}</h4>
                      <p className="text-sm text-gray-600">{e.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deductions */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden h-fit">
                <div className="bg-red-50 border-b border-red-100 p-6 text-center">
                  <h3 className="text-xl font-bold text-red-800">Configurable Statutory Deductions</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { n: "Provident Fund (EPF)", d: "Enable based on wage ceiling; configurable employer rates." },
                    { n: "ESIC", d: "Auto-disabled if gross salary exceeds statutory limit." },
                    { n: "Professional Tax (PT)", d: "Enabled by state of employment with configurable slabs." },
                    { n: "TDS (Tax Deducted)", d: "Enabled selectively for permanent/senior staff." },
                    { n: "Labour Welfare (LWF)", d: "State-specific deduction enabled by deployment location." },
                    { n: "Gratuity Provision", d: "Auto-enabled for employees crossing qualifying tenure." },
                    { n: "Loan Recovery", d: "Specific deduction for employees with active salary advances." }
                  ].map((e, i) => (
                    <div key={i} className="p-4 md:p-5 hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-gray-900 mb-1">{e.n}</h4>
                      <p className="text-sm text-gray-600">{e.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-gray-700 font-medium mt-10 md:mt-12 bg-blue-50 p-6 rounded-2xl">
              This flexibility ensures a newly joined daily-wage worker gets only Basic + ESIC, while a senior engineer receives full components (HRA, Conveyance, PF, PT, TDS)—all managed in the exact same system!
            </p>
          </div>
        </section>

        {/* REPORTS & EXPORTS */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-6 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Reports & Export Options</h2>
            <p className="text-base md:text-lg text-gray-600 mb-10 md:mb-16 text-center max-w-4xl mx-auto">
              A comprehensive reporting suite for all stakeholders—HR, Finance, Management, and Compliance teams. Available in PDF, Excel, CSV, and Macro formats.
            </p>

            <div className="flex flex-wrap gap-6 md:gap-8 mb-6 md:mb-12">

              {/* Attendance & Leave */}
              <div className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="text-blue-500 mb-4 mx-auto md:mx-0">
                  <FileText size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Attendance & Leave
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Daily & Monthly Attendance</li>
                  <li>• Late Arrival & Early Departure</li>
                  <li>• Leave Balance & Comp-Off Ledger</li>
                  <li>• Absenteeism Flagging</li>
                </ul>
              </div>

              {/* Payroll & Compensation */}
              <div className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="text-blue-500 mb-4 mx-auto md:mx-0">
                  <Calculator size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Payroll & Compensation
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Salary, OT & Incentive Registers</li>
                  <li>• Payslips (Bulk PDF)</li>
                  <li>• Department Cost & Month Comparison</li>
                  <li>• CTC & Arrear Reports</li>
                </ul>
              </div>

              {/* Statutory Compliance */}
              <div className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="text-blue-500 mb-4 mx-auto md:mx-0">
                  <FileCheck size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Statutory Compliance
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• EPF/ESIC Monthly Contribution</li>
                  <li>• EPF ECR File (Upload Ready)</li>
                  <li>• ESIC Contribution File (Upload Ready)</li>
                  <li>• PT, TDS (Form 16), LWF Summaries</li>
                </ul>
              </div>

              {/* Employee & HR Reports */}
              <div className="w-full md:w-[calc(50%-16px)] lg:w-[calc(50%-16px)] bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                <Users className="text-blue-500 w-8 h-8 flex-shrink-0" />

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Employee & HR Reports
                  </h3>

                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Employee Master</li>
                    <li>• New Joiners</li>
                    <li>• Contract Expiry Tracking</li>
                    <li>• Headcount Reports</li>


                  </ul>
                </div>
              </div>

              {/* Bank & Disbursement */}
              <div className="w-full md:w-[calc(50%-16px)] lg:w-[calc(50%-16px)] bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                <Banknote className="text-blue-500 w-8 h-8 flex-shrink-0" />

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Bank & Disbursement
                  </h3>

                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Canara Bank Salary/OT/Incentive Bulk Upload Macro files</li>
                    <li>• Payment Summaries</li>
                    <li>• Transfer Confirmations</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* IMPLEMENTATION APPROACH */}
        <section className="py-10 lg:py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-6 md:mb-8 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Implementation Approach</h2>
            <p className="text-base md:text-lg text-gray-600 mb-10 md:mb-16 text-center max-w-3xl mx-auto">Isarva followed a structured implementation methodology to ensure the solution precisely matched the client's operational reality:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: "Discovery & Mapping", text: "Workshops to document pay rules, OT, incentives, and statutory obligations." },
                { title: "Custom Configuration", text: "Configured structures, calendars, slabs, and Canara Bank logic without hardcoding." },
                { title: "Data Migration", text: "Migrated master data, attendance history, and leave balances from Excel safely." },
                { title: "Macro Development", text: "Developed and parallel-tested the Canara Bank integration." },
                { title: "EPF & ESIC Testing", text: "Validated output files directly against actual government portal specifications." },
                { title: "Training", text: "Comprehensive team training covering all modules and compliance generation." },
                { title: "Parallel Run", text: "One full month of parallel manual + HRMS operation to resolve any discrepancies." },
                { title: "Post-Go-Live Support", text: "Dedicated monitoring and support during the critical first three months." }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col p-5 md:p-6 bg-[#FDF8F2] rounded-2xl shadow-sm border border-blue-50 hover:shadow-md transition-all h-full">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">{idx + 1}</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{step.title}</h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS & IMPACT */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-10 md:mb-16 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Results & Business Impact</h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div className="bg-white p-6 md:p-10 rounded-3xl border border-blue-100 relative overflow-hidden h-full shadow-lg text-center md:text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px]" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 relative z-10">Impact Snapshot</h3>

                <div className="space-y-4 md:space-y-6 relative z-10">
                  <div className="bg-blue-50 p-5 md:p-6 rounded-2xl shadow-sm border border-blue-100/50">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">Zero</div>
                    <div className="text-sm md:text-base text-gray-800 font-medium">Errors in Operation</div>
                  </div>
                  <div className="bg-blue-50 p-5 md:p-6 rounded-2xl shadow-sm border border-blue-100/50">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-sm md:text-base text-gray-800 font-medium">Payroll Accuracy Achieved</div>
                  </div>
                  <div className="bg-blue-50 p-5 md:p-6 rounded-2xl shadow-sm border border-blue-100/50">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">3× Faster</div>
                    <div className="text-sm md:text-base text-gray-800 font-medium">Monthly Payroll Cycle</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                {[
                  { title: "Zero Calculation Errors", desc: "Since go-live, zero payroll or OT/incentive errors have occurred, eliminating the need for frequent manual recalculations." },
                  { title: "Dramatically Reduced Processing Time", desc: "Monthly operations that consumed multiple working days are now completed in hours, freeing the HR team." },
                  { title: "Seamless Three-Track Payments", desc: "Salary, OT, and incentives process cleanly as independent runs with separate bank files as per policy." },
                  { title: "Direct Portal Uploads", desc: "EPF/ESIC files upload directly to government portals in one step. No formatting errors or portal rejections." }
                ].map((res, i) => (
                  <div key={i} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm md:bg-transparent md:p-0 md:shadow-none">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="text-blue-500" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{res.title}</h4>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{res.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Automated Bank Disbursement", desc: "Canara Bank integration eliminates manual data entry into bulk sheets, autogenerating exact formats." },
                { title: "Accurate Compensatory Leave", desc: "Holiday working choices (Comp-Off or OT) captured at source without ambiguity or manual reconciliation." },
                { title: "Secure, Centralised Data", desc: "No risk of Excel file loss or unauthorized modifications. Admin-only control over secure cloud records." },
                { title: "Anywhere, Anytime Access", desc: "HR can process operations from any location, office, or remote site without local file dependencies." }
              ].map((res, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center md:items-start md:text-left">
                  <h4 className="text-lg md:text-xl font-bold text-blue-700 mb-2 md:mb-3">{res.title}</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{res.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="bg-[#FDF8F2] rounded-3xl p-8 md:p-14 shadow-lg border border-blue-100 relative">
              <div className="absolute -top-2 -left-2 md:-top-6 md:-left-5 text-blue-200">
                <svg width="60" height="60" className="md:w-[80px] md:h-[80px]" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic relative z-10 mb-6 md:mb-8 mt-2 md:mt-0">
                “Isarva HRMS has completely transformed the way we manage our workforce. What used to take our HR team days of manual work — cross-checking attendance, calculating OT, computing incentives, preparing bank files, and generating EPF/ESIC statements — is now done automatically and accurately in a matter of hours. We have been using this system for over eight months and have not encountered a single calculation error. Our staff spend their time on people management now, not spreadsheets.”
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg md:text-xl flex-shrink-0">
                  H
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm md:text-base">HR & Finance Management</h5>
                  <p className="text-xs md:text-sm text-gray-500">Leading Construction Company</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / ABOUT ISARVA HRMS */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-gray-900 mb-4 md:mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Explore Isarva HRMS Products</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed max-w-4xl mx-auto">
                Isarva offers two powerful HRMS platforms designed for different organisational needs. Whether you are a construction company managing a contract workforce or a corporate organisation looking for a fully featured HR suite, we have the right solution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-t-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Isarva HRMS</h3>
                <p className="text-blue-600 font-medium mb-6">Construction & Field Workforce Edition</p>
                <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">Best suited for construction, manufacturing, and contract workforce.</p>
                <ul className="space-y-4 text-sm text-gray-700 mb-8">
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Contract & daily-wage management</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Flexible irregular field attendance</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Independent OT & incentive engines</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" /> Bank macro & EPF/ESIC portal-ready</li>
                </ul>
                <div className="flex justify-center">
                  <Link href="/contact" className="press-illusion-btn-orange bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md inline-flex items-center justify-center">
                    Enquire Field HRMS
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-t-indigo-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-4 rounded-bl-xl">Enterprise</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Isarva Corporate HRMS</h3>
                <p className="text-indigo-600 font-medium mb-6">Enterprise Corporate Edition</p>
                <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">Best suited for corporate offices, IT, services, and large enterprises.</p>
                <ul className="space-y-4 text-sm text-gray-700 mb-8">
                  <li className="flex gap-2"><CheckCircle2 className="text-indigo-500 w-5 h-5 flex-shrink-0" /> Permanent employee hierarchy</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-indigo-500 w-5 h-5 flex-shrink-0" /> Employee & Manager Self Service (ESS)</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-indigo-500 w-5 h-5 flex-shrink-0" /> Recruitment & Performance Appraisals</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-indigo-500 w-5 h-5 flex-shrink-0" /> Advanced MIS & multi-state compliance</li>
                </ul>
                <div className="flex justify-center">
                  <Link href="/contact" className="press-illusion-btn-orange bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md inline-flex items-center justify-center">
                    Enquire Corporate HRMS
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-3xl p-6 md:p-10 text-center border border-blue-100/50">
              <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-blue-900 mb-6">
                <span>✔ Trusted Company</span>
                <span className="hidden sm:inline text-blue-300">•</span>
                <span>✔ Proven Deployments</span>
                <span className="hidden sm:inline text-blue-300">•</span>
                <span>✔ Zero Error Track Record</span>
                <span className="hidden sm:inline text-blue-300">•</span>
                <span>✔ Dedicated Support</span>
              </div>
              <p className="text-sm md:text-base text-blue-800 mb-6 max-w-2xl mx-auto">
                Contact Isarva today for a free consultation and personalised product demonstration.
              </p>
              <p className="text-xs md:text-sm text-gray-500 font-medium">www.isarvait.com • Trusted HRMS Solutions for Every Industry</p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
