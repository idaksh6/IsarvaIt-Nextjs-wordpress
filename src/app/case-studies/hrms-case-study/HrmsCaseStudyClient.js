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
  FileText,
  Building,
  CreditCard
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
    <div className="min-h-screen bg-[#FDF8F2] text-gray-800 selection:bg-emerald-200 selection:text-emerald-900 overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-emerald-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-green-100/30 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-7xl mx-auto">
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
              Transforming Construction Workforce Management with <span className="text-emerald-600">Isarva HRMS</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed"
            >
              How Isarva HRMS Replaced Manual Excel Processes with an Automated, Error-Free HR & Payroll System.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500 mb-12">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Building size={16} className="text-emerald-500" /> Construction Industry
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Server size={16} className="text-emerald-500" /> Cloud Server Deployment
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Clock size={16} className="text-emerald-500" /> 8+ Months Duration
              </span>
            </motion.div>
          </motion.div>

          {/* Highlight Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-emerald-600 mb-2">8+ Months</div>
              <div className="text-gray-600 font-medium">Error-Free Operations</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-emerald-600 mb-2">0 Errors</div>
              <div className="text-gray-600 font-medium">In Payroll Calculations</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-emerald-600 mb-2">3 Portals</div>
              <div className="text-gray-600 font-medium">Integrated (EPF, ESIC, Bank)</div>
            </div>
          </motion.div>
        </section>

        {/* EXECUTIVE SUMMARY */}
        <section className="py-16 px-6 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Activity className="text-emerald-500" /> Executive Summary
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              A prominent mid-sized construction company operating across multiple project sites faced mounting challenges in managing its workforce manually. With a fluctuating, contract-based labour pool, complex overtime (OT) policies, incentive structures, and statutory compliance obligations, the company's HR team was investing enormous time in error-prone spreadsheet work every month.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Isarva identified these pain points and delivered a purpose-built, cloud-deployed HRMS solution that fully automated attendance tracking, payroll computation, OT and incentive processing, EPF/ESIC compliance, and bank salary upload — all within a single, intuitive platform. After more than eight months of live operation, the company reports zero calculation errors, significantly reduced HR effort, and complete payroll accuracy.
            </p>
          </div>
        </section>

        {/* CLIENT PROFILE */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Client Profile</h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="p-8">
                <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-6">Before Isarva</h3>
                <ul className="space-y-6">
                  <li>
                    <p className="text-sm text-gray-500 mb-1">Industry & Type</p>
                    <p className="font-medium text-gray-900">Construction — Civil, Structural & Infrastructure</p>
                  </li>
                  <li>
                    <p className="text-sm text-gray-500 mb-1">Previous System</p>
                    <p className="font-medium text-gray-900">Microsoft Excel spreadsheets managed manually</p>
                  </li>
                  <li>
                    <p className="text-sm text-gray-500 mb-1">Workforce Type</p>
                    <p className="font-medium text-gray-900">Contract-based labourers, site supervisors, permanent staff (Large, dynamic workforce)</p>
                  </li>
                  <li>
                    <p className="text-sm text-gray-500 mb-1">Statutory Obligations</p>
                    <p className="font-medium text-gray-900">EPF & ESIC</p>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-emerald-50/50">
                <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-6">Solution Deployed</h3>
                <ul className="space-y-6">
                  <li>
                    <p className="text-sm text-gray-500 mb-1">Platform</p>
                    <p className="font-medium text-gray-900">Isarva HRMS Software (Cloud Server Deployed)</p>
                  </li>
                  <li>
                    <p className="text-sm text-gray-500 mb-1">Banking Partner</p>
                    <p className="font-medium text-gray-900">Canara Bank — automated bulk salary upload</p>
                  </li>
                  <li>
                    <p className="text-sm text-gray-500 mb-1">Go-Live Duration</p>
                    <p className="font-medium text-gray-900">Over 8 months in active production use</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CHALLENGES VS SOLUTIONS */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Challenges vs. Isarva Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Before engaging Isarva, operations were manual and error-prone. Here is how we automated their workflows.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { c: "Contract workers absent for full months, return next month", s: "Flexible attendance engine handles any pattern, preserving history" },
                { c: "OT hours tracked separately from regular hours and paid apart", s: "Dedicated OT module captures OT, generates standalone OT register" },
                { c: "Incentives calculated on actual present days — varies monthly", s: "Automated engine reads attendance, computes via configured slabs" },
                { c: "Holiday work: employee choice between Comp-Off or OT", s: "Module captures preference, auto-updates leave balance or OT register" },
                { c: "Salary, OT, & Incentives must never be combined", s: "Three independent payment runs with dedicated registers & bank files" },
                { c: "Manual EPF & ESIC file preparation, error-prone", s: "One-click generation of ECR/contribution files, portal-ready" },
                { c: "Canara Bank macro-enabled sheet filled manually", s: "Automated macro populates bank-readable files for all three runs" },
                { c: "No audit trail, no backup, risk of data loss", s: "Cloud server deployment ensures security, audit trails, and backups" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 p-6 bg-[#FDF8F2] rounded-2xl border border-gray-100">
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-red-500 font-medium mb-2">
                      <AlertTriangle size={18} /> Challenge
                    </div>
                    <p className="text-gray-700">{item.c}</p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center text-gray-300">
                    <ArrowRight size={24} />
                  </div>
                  <div className="flex-1 text-center sm:text-left bg-white p-4 rounded-xl shadow-sm border border-emerald-100/50">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-600 font-medium mb-2">
                      <CheckCircle size={18} /> Isarva Solution
                    </div>
                    <p className="text-gray-900 font-medium">{item.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE MODULES */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Core Modules Deployed</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Employee Master & Configuration", desc: "Centralized repository supporting both contract and permanent staff. Employee-wise salary component toggling.", icon: <Users /> },
                { title: "Flexible Attendance Tracking", desc: "Handles irregular workforce patterns seamlessly without data corruption.", icon: <Clock /> },
                { title: "Payroll & OT Processing", desc: "Processes standard monthly salary and separate OT registers efficiently with complete independence.", icon: <CreditCard /> },
                { title: "Incentive Engine", desc: "Automated calculations based on present days using highly customizable slab configurations.", icon: <TrendingUp /> },
                { title: "EPF & ESIC Compliance", desc: "Auto-generates portal-ready ECR files for EPF and ESIC with zero manual intervention.", icon: <ShieldCheck /> },
                { title: "Bank Upload Automation", desc: "Custom Canara Bank macro generates separate bulk-upload sheets for Salary, OT, and Incentives.", icon: <Server /> }
              ].map((mod, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                    {mod.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{mod.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-8 md:p-12 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Automated HR Letter Generation</h3>
              <p className="text-emerald-50 text-lg leading-relaxed max-w-3xl">
                Managing employee lifecycle documentation is critical. Isarva HRMS enables the company to produce professionally formatted, company-branded letters (Offer, Joining/Appointment, and Experience) directly from the system—eliminating manual drafting and copy-paste errors for high-turnover construction roles.
              </p>
            </div>
          </div>
        </section>

        {/* RESULTS & IMPACT */}
        <section className="py-24 px-6 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Results & Business Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  { title: "Zero Calculation Errors", desc: "No payroll, OT, or incentive calculation errors since go-live, completely replacing error-prone manual spreadsheets." },
                  { title: "3× Faster Payroll Cycle", desc: "Processing that previously consumed days of HR/finance effort is now completed in a fraction of the time." },
                  { title: "Direct Portal Uploads", desc: "EPF and ESIC files are generated in exact formats. No manual entry, no formatting errors, and zero risk of rejection." },
                  { title: "Automated Bank Disbursement", desc: "Canara Bank macro integration populates bank-ready files automatically for all three payment types." }
                ].map((res, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-emerald-500" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{res.title}</h4>
                      <p className="text-gray-600">{res.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-[#FDF8F2] p-8 rounded-3xl border border-emerald-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-[80px]" />
                <h3 className="text-2xl font-bold text-gray-900 mb-8 relative z-10">Impact Snapshot</h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
                    <div className="text-gray-800 font-medium">Payroll Accuracy Achieved</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">Secure Data</div>
                    <div className="text-gray-800 font-medium">Centralized & Role-Based Access</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">Anywhere Access</div>
                    <div className="text-gray-800 font-medium">100% Cloud-Based Operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-24 px-6 bg-[#FDF8F2]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-gray-100 relative">
              <div className="absolute -top-6 -left-6 text-emerald-200">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic relative z-10 mb-8">
                "Isarva HRMS has completely transformed the way we manage our workforce. What used to take our HR team days of manual work — cross-checking attendance, calculating OT, computing incentives, preparing bank files, and generating EPF/ESIC statements — is now done automatically and accurately in a matter of hours. We have been using this system for over eight months and have not encountered a single calculation error."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">
                  H
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">HR & Finance Management</h5>
                  <p className="text-gray-500">Leading Construction Company</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore Isarva HRMS Solutions</h2>
            <p className="text-lg text-gray-600 mb-10">
              Whether you are a construction company managing a contract workforce or a corporate organization looking for a fully featured HR suite with self-service portals, Isarva has the right solution for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2">
                Enquire Now <ArrowRight size={18} />
              </Link>
            </div>
            <p className="mt-8 text-gray-500 font-medium">www.isarvait.com • Trusted HRMS Solutions for Every Industry</p>
          </div>
        </section>

      </main>
    </div>
  );
}
