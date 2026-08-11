"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Lock,
  Server,
  Globe,
  FileText,
  Key,
  Mail,
  Building2,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Award,
  TrendingUp,
  Sparkles,
  Cpu,
  ShieldAlert,
  FileCheck,
  Users,
  Settings,
  Zap
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

export default function GokarnanathBankCaseStudyClient() {
  return (
    <div className="min-h-screen bg-[#FDF8F2] text-gray-800 selection:bg-blue-200 selection:text-blue-900 overflow-hidden font-sans">

      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-teal-100/30 rounded-full blur-[100px]" />
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
              className="inline-block py-1.5 px-4 mb-6 rounded-full bg-blue-100 text-blue-900 text-sm font-semibold tracking-wide capitalize border border-blue-200"
            >
              Banking Case Study
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
            >
              Migration of Gokarnanath Bank Domain from <span className="text-blue-600">.com</span> to <span className="text-teal-600">.bank.in</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base lg:text-xl text-gray-600 mb-10 leading-relaxed font-medium"
            >
              Seamless end-to-end execution of mandatory RBI & IDRBT domain migration, DNSSEC deployment, DSC integration, and email domain transition with zero operational downtime.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm font-medium text-gray-500 mb-8 md:mb-12">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-gray-700">
                <Building2 size={16} className="text-blue-600" /> Banking & Financial Services
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-gray-700">
                <ShieldCheck size={16} className="text-teal-600" /> RBI & IDRBT Compliant
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-gray-700">
                <Lock size={16} className="text-blue-600" /> DNSSEC & SSL Encryption
              </span>
            </motion.div>

            {/* Tags */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 text-xs font-bold text-blue-800 capitalize tracking-wider mb-8">
              <span className="bg-blue-50 px-3 py-1 rounded-md">IDRBT Registration</span>
              <span className="bg-blue-50 px-3 py-1 rounded-md">RBI Domain Compliance</span>
              <span className="bg-blue-50 px-3 py-1 rounded-md">DNSSEC Validation</span>
              <span className="bg-blue-50 px-3 py-1 rounded-md">DSC & Hyper Token</span>
              <span className="bg-blue-50 px-3 py-1 rounded-md">Email Domain Migration</span>
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
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium italic">RBI & IDRBT Compliance</div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">Zero</div>
              <div className="text-gray-600 font-medium italic">Banking Service Disruption</div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">Full</div>
              <div className="text-gray-600 font-medium italic">DNSSEC Security & Email Cutover</div>
            </div>
          </motion.div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="py-10 lg:py-16 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize text-center">
              Project Overview
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 text-center">
              As per the latest Reserve Bank of India (RBI) guidelines, banks are required to migrate their public-facing domains from conventional domains such as <code className="bg-gray-100 px-2 py-0.5 rounded text-blue-700 font-mono text-sm">.com</code> to the secure <code className="bg-teal-50 px-2 py-0.5 rounded text-teal-700 font-mono text-sm">.bank.in</code> domain administered by IDRBT (Institute for Development and Research in Banking Technology). This initiative strengthens the security, authenticity, and trustworthiness of banking websites while reducing the risk of phishing and domain spoofing attacks.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
              Our team at Isarva successfully planned and executed the complete migration of Gokarnanath Bank's website and email domain from <span className="font-semibold text-gray-900">gokarnanathbank.com</span> to <span className="font-semibold text-teal-700">gokarnanath.bank.in</span>, ensuring a smooth transition with minimal disruption to banking operations.
            </p>
          </div>
        </section>

        {/* OBJECTIVES */}
        <section className="pt-10 lg:pt-16 px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="text-gray-900 mb-8 md:mb-10 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Project Objectives</h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Public Website Migration", desc: "Migrate the bank's public website from gokarnanathbank.com to gokarnanath.bank.in." },
                { title: "IDRBT Domain Registration", desc: "Complete the mandatory IDRBT domain registration and verification process." },
                { title: "Secure DNSSEC Infrastructure", desc: "Configure secure DNS infrastructure with validated DNSSEC deployment." },
                { title: "Email Domain Migration", desc: "Migrate employee email addresses from the .com domain to .bank.in seamlessly." },
                { title: "Full Regulatory Compliance", desc: "Ensure total compliance with RBI's mandatory domain migration guidelines for banks.", fullWidth: true }
              ].map((obj, idx) => (
                <div key={idx} className={`flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50 hover:bg-blue-50 transition-colors ${obj.fullWidth ? "md:col-span-2 bg-blue-100/40 border-blue-200" : ""}`}>
                  <div className="text-blue-600 flex-shrink-0 mx-auto sm:mx-0"><CheckCircle2 size={22} /></div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold text-gray-900">{obj.title}</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-6 text-center md:text-left text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Key Challenges</h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 text-center md:text-left">The domain migration involved several regulatory and complex technical requirements:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "Regulatory Approvals", desc: "Strict adherence to RBI and IDRBT domain registration procedures and documentation flows." },
                { title: "KYC Verification", desc: "Completion of mandatory Know Your Customer (KYC) verification for bank officials." },
                { title: "DSC & Hardware Setup", desc: "Procurement and configuration of Digital Signature Certificates (DSC) and USB token software." },
                { title: "Complex DNSSEC Deployment", desc: "Designing secure DNS infrastructure with cryptographic DNSSEC validation." },
                { title: "Multi-Stakeholder Coordination", desc: "Coordinating approvals between bank executives, IDRBT authorities, and technical teams." },
                { title: "Zero Downtime Guarantee", desc: "Ensuring uninterrupted access to customer banking services and email systems during cutover." }
              ].map((challenge, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-amber-600 bg-amber-50 p-2.5 rounded-xl"><AlertTriangle size={20} /></div>
                      <h4 className="text-lg font-bold text-gray-900">{challenge.title}</h4>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{challenge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STEP BY STEP SOLUTION */}
        <section className="py-10 lg:py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Methodology</span>
              <h2 className="text-gray-900 mt-3 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">The Solution: 6-Stage Migration Framework</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg mt-3">Our team managed the migration end-to-end from initial registration stage through to the final production cutover.</p>
            </div>

            <div className="space-y-8 md:space-y-12">

              {/* Stage 1 */}
              <div className="bg-[#FDF8F2] p-6 md:p-10 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 items-center text-center md:items-start md:text-left">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shrink-0 shadow-md mx-auto md:mx-0">
                    01
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2">
                      <FileCheck className="text-blue-600" /> Regulatory Guidance and Documentation
                    </h3>
                    <p className="text-gray-600 mb-4 text-base leading-relaxed">Assisted the bank throughout the IDRBT onboarding process with full compliance verification:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-gray-700">
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Guidance on complete KYC verification process</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Subscriber Registration and DSC/eSign process flow</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Required documentation & eligibility criteria</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Detailed checklists for IDRBT Domain Registrar</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="bg-[#FDF8F2] p-6 md:p-10 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 items-center text-center md:items-start md:text-left">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shrink-0 shadow-md mx-auto md:mx-0">
                    02
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2">
                      <Key className="text-blue-600" /> Digital Signature Certificate (DSC) Setup
                    </h3>
                    <p className="text-gray-600 mb-4 text-base leading-relaxed">Configured hardware and software security components for authentication:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-gray-700">
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Procured required Digital Signature Certificate (DSC)</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Configured Hyper Token for secure certificate storage</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Installed & configured Hyper Token software drivers</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Configured eMudhra software & authentication utilities</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="bg-[#FDF8F2] p-6 md:p-10 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 items-center text-center md:items-start md:text-left">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shrink-0 shadow-md mx-auto md:mx-0">
                    03
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2">
                      <Building2 className="text-blue-600" /> IDRBT Portal Configuration
                    </h3>
                    <p className="text-gray-600 mb-4 text-base leading-relaxed">Executed full administrative setup inside the IDRBT Domain Registration Portal:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-gray-700">
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Created domain registration portal account</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Configured authorized bank user details</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Uploaded KYC & supporting board resolution docs</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Uploaded DSCs & completed administrative workflow</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 4 */}
              <div className="bg-[#FDF8F2] p-6 md:p-10 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 items-center text-center md:items-start md:text-left">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shrink-0 shadow-md mx-auto md:mx-0">
                    04
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2">
                      <Server className="text-blue-600" /> DNS Infrastructure & DNSSEC Setup
                    </h3>
                    <p className="text-gray-600 mb-4 text-base leading-relaxed">Architected high-availability DNS with cryptographic signature validation:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-gray-700">
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Built dedicated primary and secondary DNS servers</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Registered nameservers with IPv4 details</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Published DNS records & SPF/DKIM/DMARC entries</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Configured and validated DNSSEC security keys</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 5 */}
              <div className="bg-[#FDF8F2] p-6 md:p-10 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 items-center text-center md:items-start md:text-left">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shrink-0 shadow-md mx-auto md:mx-0">
                    05
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2">
                      <Globe className="text-blue-600" /> Website Domain Migration & Cutover
                    </h3>
                    <p className="text-gray-600 mb-4 text-base leading-relaxed">Executed production cutover of the banking portal:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-gray-700">
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Migrated website from .com to gokarnanath.bank.in</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Updated DNS records & verified propagation</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Verified HTTPS SSL security certificates</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Completed production cutover with zero downtime</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 6 */}
              <div className="bg-[#FDF8F2] p-6 md:p-10 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 items-center text-center md:items-start md:text-left">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shrink-0 shadow-md mx-auto md:mx-0">
                    06
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2">
                      <Mail className="text-blue-600" /> Email Domain Migration
                    </h3>
                    <p className="text-gray-600 mb-4 text-base leading-relaxed">Transitioned official bank email addresses to the new secure domain:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-gray-700">
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Migrated employee email accounts to .bank.in</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Updated mail server MX records and security policies</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Verified inbound and outbound mail delivery</div>
                      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100"><CheckCircle size={16} className="text-teal-600 shrink-0" /> Maintained continuous internal & external communication</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TECHNOLOGIES & SERVICES USED */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-10 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Technologies & Services</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: "IDRBT Domain Registrar", icon: <Building2 className="text-blue-600" /> },
                { title: "RBI Domain Compliance", icon: <Award className="text-teal-600" /> },
                { title: "DNS Infrastructure", icon: <Server className="text-blue-600" /> },
                { title: "DNSSEC Deployment", icon: <ShieldCheck className="text-teal-600" /> },
                { title: "Digital Signature (DSC)", icon: <Key className="text-blue-600" /> },
                { title: "Hyper Token Hardware", icon: <Cpu className="text-teal-600" /> },
                { title: "eMudhra Software", icon: <Lock className="text-blue-600" /> },
                { title: "KYC Verification", icon: <FileCheck className="text-teal-600" /> },
                { title: "Domain Registration", icon: <Globe className="text-blue-600" /> },
                { title: "SSL / HTTPS Security", icon: <ShieldAlert className="text-teal-600" /> },
                { title: "Email Domain Migration", icon: <Mail className="text-blue-600" /> },
                { title: "24/7 Monitoring", icon: <Zap className="text-teal-600" /> }
              ].map((tech, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                    {tech.icon}
                  </div>
                  <span className="text-sm font-bold text-gray-800">{tech.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS & KEY ACHIEVEMENTS */}
        <section className="py-10 lg:py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-10 md:mb-16 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Key Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Successful Domain Cutover", desc: "Full migration from gokarnanathbank.com to gokarnanath.bank.in without disrupting active online banking." },
                { title: "Complete IDRBT Registration", desc: "Executed the entire administrative approval flow, KYC verification, and regulatory document filings." },
                { title: "DSC & Hardware Token Setup", desc: "Procured, configured, and verified Hyper Token and eMudhra software for secure banking authority signatures." },
                { title: "DNSSEC Cryptographic Security", desc: "Established robust DNS servers with active DNSSEC validation to prevent spoofing and cache poisoning." },
                { title: "Uninterrupted Email Services", desc: "Migrated all bank staff email accounts to .bank.in with zero lost emails or communication drops." },
                { title: "RBI Regulatory Compliance", desc: "Delivered a fully compliant, future-proof banking domain ready for production use." }
              ].map((achieve, i) => (
                <div key={i} className="bg-[#FDF8F2] p-6 md:p-8 rounded-3xl border border-blue-100 flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
                  <div className="w-10 h-10 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold shrink-0 mx-auto sm:mx-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{achieve.title}</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{achieve.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUSINESS BENEFITS */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-10 md:mb-16 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Business Benefits</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">Full compliance with Reserve Bank of India (RBI) mandates for secure banking domain infrastructure.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Trust & Security</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">Maximum protection against phishing, fake websites, and domain spoofing for banking customers.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Future-Ready Foundation</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">Secure, DNSSEC-enabled architecture aligned with national banking cybersecurity standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-10 lg:py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <h2 className="mb-6 text-3xl lg:text-5xl font-black text-gray-900 capitalize">Planning a Banking Domain Migration or RBI Compliance Upgrade?</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Isarva provides end-to-end guidance and technical implementation for financial institutions migrating to mandatory .bank.in domain infrastructure with IDRBT, DNSSEC, and DSC setup.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="press-illusion-btn-orange bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-orange-500/30 flex items-center gap-2">
                Consult Our Banking IT Experts <ArrowRight size={18} />
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-400 font-medium tracking-wide italic">
              www.isarvait.com • Empowering Secure Financial Digital Infrastructure
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
