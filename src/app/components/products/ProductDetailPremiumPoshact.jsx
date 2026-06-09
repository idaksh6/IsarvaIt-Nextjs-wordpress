"use client";

import { useState, useCallback } from "react";
import Link from "../AppLink";
import ContactFormModal from "../ContactFormModal";
import PoshactHero from "./poshact/PoshactHero";
import PoshactModuleExplorer from "./poshact/PoshactModuleExplorer";
import {
  Clock,
  UserX,
  FileX,
  Scale,
  Users,
  FileText,
  Building2,
  ArrowRight,
  Check,
} from "lucide-react";
import "./poshact/poshact.css";

export default function ProductDetailPremiumPoshact({ product, allProducts = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jumpModuleId, setJumpModuleId] = useState(null);

  const openContact = useCallback(() => setIsModalOpen(true), []);

  const jumpToModule = useCallback((moduleId) => {
    setJumpModuleId(moduleId);
    document.getElementById("modules")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="poshact-page bg-white text-slate-700 antialiased">
      <PoshactHero onJumpToModule={jumpToModule} onRequestDemo={openContact} />

      <PoshactModuleExplorer jumpModuleId={jumpModuleId} />

      {/* Problem */}
      <section className="py-12 lg:py-16 poshact-section-bg bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
            <p className="text-xs font-bold capitalize tracking-widest text-indigo-600 mb-3">The Problem</p>
            <h2 className="text-gray-900 mb-4 capitalize">Spreadsheets can&apos;t run a POSH program</h2>
            <p className="text-gray-600 text-base lg:text-lg">
              Manual work misses legal deadlines, puts case privacy at risk, and fails inspections. One app replaces many separate tools.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {[
              { icon: Clock, title: "Missed SLAs", desc: "90-day inquiry and 60-day management windows slip without automated tracking.", color: "bg-red-50 text-red-500" },
              { icon: UserX, title: "Private data at risk", desc: "Section 16 needs role-based access — not shared folders and email threads.", color: "bg-amber-50 text-amber-600" },
              { icon: FileX, title: "Annual report scramble", desc: "Section 22 reports assembled manually from scattered records every year.", color: "bg-blue-50 text-blue-600" },
              { icon: Scale, title: "Missing inquiry steps", desc: "IC members need clear steps for Sections 9–12 and POSH Rules.", color: "bg-purple-50 text-purple-600" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl glass-card p-5 sm:p-6 text-center hover:border-indigo-200 hover:shadow-lg transition">
                <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mb-4 mx-auto`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal deadlines */}
      <section id="compliance" className="py-12 lg:py-16 poshact-section-bg section-compliance">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
            <p className="text-xs font-bold capitalize tracking-widest text-indigo-600 mb-3">Legal Deadlines</p>
            <h2 className="text-gray-900 mb-4 capitalize">Deadline tracking built in</h2>
            <p className="text-gray-600 text-base lg:text-lg">
              Every critical deadline from the POSH Act and Rules — tracked automatically across modules.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ["File complaint after incident", "3 + 3 months"],
              ["Complete inquiry", "90 days"],
              ["IC report to employer", "10 days"],
              ["Management implements recommendation", "60 days"],
              ["Appeal window", "90 days"],
              ["Notice before hearing (min.)", "7 working days"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-indigo-100/80 glass-card p-4 sm:p-5 flex justify-between items-center gap-4">
                <span className="text-sm text-gray-700">{label}</span>
                <span className="font-bold text-indigo-700 shrink-0 text-sm sm:text-base">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section id="deployment" className="py-12 lg:py-16 poshact-section-bg section-deployment bg-white relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
            <p className="text-xs font-bold capitalize tracking-widest text-indigo-600 mb-3">How It Works</p>
            <h2 className="text-gray-900 mb-4 capitalize">With HRMS or on its own</h2>
            <p className="text-gray-600 text-base lg:text-lg">
              Same product for HRMS customers and POSH-only buyers — switch modes in Settings without changing other apps.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="rounded-3xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 rounded-full bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 capitalize">Recommended</div>
              <p className="text-xs font-bold capitalize tracking-wider text-indigo-600 mb-2">For HRMS clients</p>
              <h3 className="text-gray-900 mb-3">HRMS mode (Payroll linked)</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {["Employee sync from Payroll", "Single login via HRMS", "One login for IC members", "Read-only employee directory"].map((t) => (
                  <li key={t} className="flex gap-2">
                    <Check className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-200/80 glass-card p-6 sm:p-8 shadow-sm">
              <p className="text-xs font-bold capitalize tracking-wider text-gray-500 mb-2">POSH-only buyers</p>
              <h3 className="text-gray-900 mb-3">Standalone mode</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {["Native POSH login", "Local employee directory", "Add and manage all employees", "Ready to demo quickly"].map((t) => (
                  <li key={t} className="flex gap-2">
                    <Check className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal coverage */}
      <section className="py-12 lg:py-16 poshact-section-bg section-legal">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
            <p className="text-xs font-bold capitalize tracking-widest text-indigo-700 mb-3">Legal Coverage</p>
            <h2 className="text-slate-900 mb-4 capitalize">Law and your modules</h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              POSH Act rules grouped by process — each one links to the module your team uses.
            </p>
          </div>
          <div className="legal-grid">
            <div className="legal-group legal-group--setup">
              <div className="legal-group-head">
                <h3 className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5 opacity-90" />
                  Committee &amp; Intake
                </h3>
                <p className="text-sm opacity-90 mt-1">Form the IC and receive complaints</p>
              </div>
              <div className="legal-group-body flex-1">
                {[
                  ["Section 4", "Set up Internal Committee", "IC Setup"],
                  ["Section 6", "Display policy at workplace", "Policy"],
                  ["Section 9", "Complaint filing & IC review", "New Complaint · IC Operate · QR Intake"],
                ].map(([sec, req, mod]) => (
                  <div key={sec} className="legal-item">
                    <span className="inline-block text-[11px] font-bold capitalize tracking-wide px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 mb-2">{sec}</span>
                    <p className="font-semibold text-slate-900 text-sm mb-2">{req}</p>
                    <span className="text-xs font-semibold text-slate-500">{mod}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="legal-group legal-group--inquiry">
              <div className="legal-group-head">
                <h3 className="text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 opacity-90" />
                  Inquiry Process
                </h3>
                <p className="text-sm opacity-90 mt-1">From agreement to final report</p>
              </div>
              <div className="legal-group-body flex-1">
                {[
                  ["Section 10", "Settle by agreement", "IC Operate — Step 2"],
                  ["Section 11", "90-day inquiry & report", "IC Operate — Steps 5–7"],
                  ["Section 12", "Temporary relief & appeal", "IC Operate — Steps 3 & 9"],
                ].map(([sec, req, mod]) => (
                  <div key={sec} className="legal-item">
                    <span className="inline-block text-[11px] font-bold capitalize tracking-wide px-2 py-0.5 rounded bg-violet-50 text-violet-700 mb-2">{sec}</span>
                    <p className="font-semibold text-slate-900 text-sm mb-2">{req}</p>
                    <span className="text-xs font-semibold text-slate-500">{mod}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="legal-group legal-group--obligations">
              <div className="legal-group-head">
                <h3 className="text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 opacity-90" />
                  Employer Duties
                </h3>
                <p className="text-sm opacity-90 mt-1">Privacy, duties & reporting</p>
              </div>
              <div className="legal-group-body flex-1">
                {[
                  ["Section 16", "Keep cases private", "Role-based access + reports"],
                  ["Section 19", "14 employer duties", "Compliance"],
                  ["Section 22", "Annual report filing", "Annual Report"],
                ].map(([sec, req, mod]) => (
                  <div key={sec} className="legal-item">
                    <span className="inline-block text-[11px] font-bold capitalize tracking-wide px-2 py-0.5 rounded bg-cyan-50 text-cyan-800 mb-2">{sec}</span>
                    <p className="font-semibold text-slate-900 text-sm mb-2">{req}</p>
                    <span className="text-xs font-semibold text-slate-500">{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Go-live */}
      <section id="go-live" className="py-12 lg:py-16 poshact-section-bg section-golive">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 lg:items-center">
            <div className="flex flex-col items-center text-center max-w-xl mx-auto lg:items-start lg:text-left lg:mx-0 lg:max-w-none mb-10 lg:mb-0">
              <p className="text-xs font-bold capitalize tracking-widest text-indigo-600 mb-3">Implementation</p>
              <h2 className="text-gray-900 mb-4 capitalize">Go live in 7 steps</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Administrators follow a built-in checklist — from organisation settings to IC training — so nothing is missed before your first complaint.
              </p>
              <button
                type="button"
                onClick={openContact}
                className="press-illusion-btn-orange inline-flex items-center gap-2 px-6 py-3 text-sm font-bold mx-auto lg:mx-0"
              >
                Talk to us about rollout <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <ol className="space-y-3 w-full max-w-xl mx-auto lg:max-w-none">
              {[
                ["Settings", "profile & setup mode (HRMS or standalone)"],
                ["IC Setup", "members, quota, roles"],
                ["Policy", "publish workplace POSH policy"],
                ["Employee sign-off", "portal access & policy confirmation"],
                ["QR posters", "public intake URL displayed"],
                ["Compliance", "Section 19 duties & prevention log"],
                ["User Guide", "IC training articles built in"],
              ].map(([title, desc], i) => (
                <li key={title} className="flex gap-4 rounded-xl bg-white border border-indigo-100 p-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700 pt-1">
                    <strong className="text-gray-900">{title}</strong> — {desc}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-12 lg:py-16 poshact-section-bg section-cta">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 relative text-center">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 lg:mb-10">
            {[
              ["16", "Modules"],
              ["S.4–22", "Act coverage"],
              ["7", "Go-live steps"],
            ].map(([n, l]) => (
              <div key={l} className="cta-stat">
                <strong>{n}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
          <p className="text-xs font-bold capitalize tracking-widest text-indigo-300 mb-4">Get started</p>
          <h2 className="text-white mb-5 capitalize">
            Build a safer workplace
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              starting today.
            </span>
          </h2>
          <p className="text-indigo-100/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Use POSH Compliance with your HRMS or as a standalone product — from IC setup to annual reporting.
          </p>
          <div className="inline-flex flex-col items-stretch mx-auto min-[480px]:flex-row min-[480px]:items-center gap-4 mb-8">
            <button
              type="button"
              onClick={openContact}
              className="cta-btn-highlight press-illusion-btn-orange inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold w-full min-[480px]:w-auto shrink-0"
            >
              Request Free Demo <span aria-hidden="true">→</span>
            </button>
            <Link
              href="/contact"
              prefetch={false}
              className="cta-btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-lg w-full min-[480px]:w-auto shrink-0"
            >
              Contact Sales <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-indigo-100/75">
            {["Live module walkthrough", "HRMS + standalone", "7-step go-live guide"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem={product?.title || "POSHact"}
        allItems={allProducts}
      />
    </div>
  );
}
