"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "../../components/AppLink";

/* ─────────────────────────────────────────────────────────────
   Inline SVG icons (Lucide-compatible, no runtime dependency)
───────────────────────────────────────────────────────────────*/
function IconUsers() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconKanban() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 5v11" /><path d="M12 5v5" /><path d="M18 5v8" /><rect width="4" height="18" x="2" y="3" rx="1" /><rect width="4" height="12" x="10" y="3" rx="1" /><rect width="4" height="14" x="18" y="3" rx="1" />
    </svg>
  );
}
function IconMegaphone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}
function IconMessageSquare() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function IconTags() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z" /><path d="M6 9.01V9" /><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
    </svg>
  );
}
function IconLayoutDashboard() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}
function IconNetwork() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="16" y="16" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="9" y="2" width="6" height="6" rx="1" /><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" /><path d="M12 12V8" />
    </svg>
  );
}
function IconGitFork() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" /><path d="M12 12v3" />
    </svg>
  );
}
function IconDatabase() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}
function IconZap() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconUserPlus() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  );
}
function IconBarChart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" x2="18" y1="20" y2="10" /><line x1="12" x2="12" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="14" /><line x1="2" x2="22" y1="20" y2="20" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function IconTrendingUp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
function IconMousePointerClick() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 9 5 12 1.8-5.2L21 14Z" /><path d="M7.2 2.2 8 5.1" /><path d="m5.1 8-2.9-.8" /><path d="M14 4.1 12 6" /><path d="m6 12-1.9 2" />
    </svg>
  );
}
function IconCheckCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
function IconShieldCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Scroll-reveal hook
   Adds the CSS class "wcrm-visible" which is defined in the
   minimal <style> block below.
───────────────────────────────────────────────────────────────*/
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wcrm-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.12 }
    );
    document
      .querySelectorAll(".wcrm-fade-up, .wcrm-fade-left, .wcrm-fade-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────────────────────
   Main Page Component
───────────────────────────────────────────────────────────────*/
export default function WhatsAppCRMIntegration() {
  useScrollReveal();

  /* Icon colour-gradient lookup → Tailwind bg (via inline style for gradients) */
  const iconGradients = {
    emerald: "linear-gradient(135deg,#10b981,#059669)",
    violet: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
    amber: "linear-gradient(135deg,#f59e0b,#d97706)",
  };

  const hoverThemes = {
    emerald: {
      borderHover: "hover:border-emerald-300",
      shadowHover: "hover:shadow-[0_20px_40px_-5px_rgba(16,185,129,0.15),0_10px_15px_-5px_rgba(16,185,129,0.1)]",
      styleGrad: "linear-gradient(90deg, #10b981, #059669)"
    },
    violet: {
      borderHover: "hover:border-violet-300",
      shadowHover: "hover:shadow-[0_20px_40px_-5px_rgba(139,92,246,0.15),0_10px_15px_-5px_rgba(139,92,246,0.1)]",
      styleGrad: "linear-gradient(90deg, #8b5cf6, #6d28d9)"
    },
    amber: {
      borderHover: "hover:border-amber-300",
      shadowHover: "hover:shadow-[0_20px_40px_-5px_rgba(245,158,11,0.15),0_10px_15px_-5px_rgba(245,158,11,0.1)]",
      styleGrad: "linear-gradient(90deg, #facc15, #d97706)"
    }
  };

  const features = [
    { icon: <IconUsers />, grad: "emerald", title: "Shared Inbox", desc: "Multiple agents, one number. Assign chats, leave internal notes, and never miss a customer reply." },
    { icon: <IconKanban />, grad: "violet", title: "Sales Pipelines", desc: "Track deals across a visual Kanban board. Connect every deal directly to the WhatsApp conversation." },
    { icon: <IconMegaphone />, grad: "amber", title: "Smart Broadcasts", desc: "Send bulk campaigns using Meta-approved marketing templates. Track delivery, read, and reply rates." },
    { icon: <IconMessageSquare />, grad: "violet", title: "Interactive Templates", desc: "Drive engagement with pre-approved templates featuring call-to-action buttons, quick replies, and product catalogs." },
    { icon: <IconTags />, grad: "amber", title: "Contact Tags & Segments", desc: "Organize your audience effortlessly. Apply tags automatically from flows to segment users for targeted broadcasts." },
    { icon: <IconLayoutDashboard />, grad: "emerald", title: "Unified Dashboard", desc: "Your team's central hub. Get a real-time overview of agent performance, sales pipeline value, and campaign success." },
  ];

  const automationFeatures = [
    { icon: <IconNetwork />, title: "Visual Node Editor", desc: "Map out conversation trees with an easy drag-and-drop interface." },
    { icon: <IconGitFork />, title: "Smart Branching", desc: "Direct users down different paths based on their replies or tags." },
    { icon: <IconDatabase />, title: "Data Collection", desc: "Prompt users for information and save it directly to custom CRM fields." },
    { icon: <IconZap />, title: "External Integrations", desc: "Trigger webhooks and fetch data from your APIs mid-conversation." },
    { icon: <IconUserPlus />, title: "Human Handoff", desc: "Automatically route qualified leads or complex queries to human agents." },
  ];

  const metrics = [
    { icon: <IconBarChart />, value: "2.4k+", label: "Daily Conversations" },
    { icon: <IconClock />, value: "< 5m", label: "Avg. Response Time" },
    { icon: <IconTrendingUp />, value: "94%", label: "Broadcast Read Rate" },
    { icon: <IconMousePointerClick />, value: "3.2x", label: "CTWA Ad ROI" },
  ];

  return (
    <>
      {/* ── Minimal scoped CSS — only what Tailwind cannot express ── */}
      <style>{`
        /* Scroll-reveal states */
        .wcrm-fade-up    { opacity:0; transform:translateY(30px);  transition:opacity .8s ease,transform .8s ease; }
        .wcrm-fade-left  { opacity:0; transform:translateX(-40px); transition:opacity .8s ease,transform .8s ease; }
        .wcrm-fade-right { opacity:0; transform:translateX(40px);  transition:opacity .8s ease,transform .8s ease; }
        .wcrm-visible    { opacity:1!important; transform:translate(0)!important; }
        .wcrm-delay-1 { transition-delay:.1s; }
        .wcrm-delay-2 { transition-delay:.2s; }
        .wcrm-delay-3 { transition-delay:.3s; }
        .wcrm-delay-4 { transition-delay:.4s; }



        /* Keyframe animations */
        @keyframes wcrmFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-20px); }
        }
        @keyframes wcrmFloatSlow {
          0%   { transform: translateY(0);    }
          100% { transform: translateY(-15px); }
        }
        .wcrm-hero-wrapper {
          animation: wcrmFloat 6s ease-in-out infinite;
        }
        .wcrm-hero-img {
          transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
          transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .wcrm-hero-img:hover {
          transform: perspective(1000px) rotateY(0) rotateX(0);
        }
        .wcrm-float-slow { animation:wcrmFloatSlow 8s ease-in-out infinite alternate; }

        /* Text gradient (webkit requires -webkit-text-fill-color which Tailwind omits) */
        .wcrm-grad-text {
          background:linear-gradient(135deg,#facc15,#d97706);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
        }
      `}</style>

      {/* ════════════════════════════════════════════════════════
          PAGE WRAPPER
      ════════════════════════════════════════════════════════ */}
      <div className="overflow-x-hidden bg-[#f8fafc] text-[#0f172a] leading-relaxed font-[var(--font-inter),Inter,system-ui,sans-serif]">

        {/* ══════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[#f8fafc]  pt-32 lg:pt-40 pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left: content */}
              <div className="wcrm-fade-up">
                {/* Badge */}
                <div className="inline-block px-4 py-2 mb-6 rounded-full text-sm font-semibold
                                bg-[rgba(212,175,55,0.1)] text-[#d4af37]
                                border border-[rgba(212,175,55,0.2)]">
                  WhatsApp Business API Ready
                </div>

                <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-extrabold tracking-[-0.02em] mb-6 text-[#0f172a]">
                  Turn WhatsApp into your ultimate{" "}
                  <span className="wcrm-grad-text">Sales Engine</span>
                </h1>

                <p className="text-lg text-[#475569] leading-[1.7] mb-6">
                  The only self-hosted CRM template you need. Shared inbox, visual
                  automations, broadcasts, and real-time analytics designed for
                  modern teams.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start
                                max-[480px]:flex-col max-[480px]:items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full
                               font-semibold text-lg text-white no-underline whitespace-nowrap
                               bg-emerald-500 transition-all duration-300 ease-in-out
                               shadow-[0_4px_14px_rgba(16,185,129,0.39)]
                               hover:bg-emerald-600 hover:-translate-y-0.5
                               hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)]
                               max-[480px]:w-full max-[480px]:text-center"
                  >
                    Start Free Trial
                  </Link>
                  <a
                    href="#wcrm-features"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full
                               font-semibold text-lg text-[#0f172a] no-underline whitespace-nowrap
                               bg-transparent border border-[rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out
                               hover:bg-black/5 hover:border-black/20 hover:-translate-y-0.5
                               max-[480px]:w-full max-[480px]:text-center"
                  >
                    Explore Features
                  </a>
                </div>

                {/* Trust stats */}
                <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-[0.9rem] font-medium text-[#475569]">
                    <span className="text-[#d4af37] flex-shrink-0"><IconCheckCircle /></span>
                    Official Meta Partner
                  </div>
                  <div className="flex items-center gap-2 text-[0.9rem] font-medium text-[#475569]">
                    <span className="text-[#d4af37] flex-shrink-0"><IconShieldCheck /></span>
                    End-to-End Encrypted
                  </div>
                </div>
              </div>

              {/* Right: hero image */}
              <div className="wcrm-fade-up wcrm-delay-1 relative wcrm-hero-wrapper max-w-[500px] sm:max-w-[550px] lg:max-w-none mx-auto w-full">
                {/* Glow blobs */}
                <div aria-hidden="true"
                  className="absolute pointer-events-none rounded-full opacity-50 blur-[80px] z-0
                                w-[400px] h-[400px] bg-[rgba(212,175,55,0.3)] -top-[10%] -right-[10%]" />
                <div aria-hidden="true"
                  className="absolute pointer-events-none rounded-full opacity-50 blur-[80px] z-0
                                w-[300px] h-[300px] bg-[rgba(59,130,246,0.25)] -bottom-[10%] -left-[10%]" />
                <Image
                  src="/whatsapp-crm/hero.png"
                  alt="WhatsApp CRM Dashboard showing shared inbox, pipeline and analytics"
                  width={640}
                  height={480}
                  priority
                  className="wcrm-hero-img w-full h-auto rounded-xl
                             border border-[rgba(0,0,0,0.05)]
                             shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FEATURES SECTION
        ══════════════════════════════════════════ */}
        <section id="wcrm-features" className="relative bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">

            {/* Section header */}
            <div className="wcrm-fade-up text-center max-w-[700px] mx-auto mb-20 md:mb-12 lg:mb-20">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-4 text-[#0f172a]">
                Everything you need to scale
              </h2>
              <p className="text-lg text-[#475569] leading-[1.7] mb-0">
                Powerful tools built directly on top of the WhatsApp Business Cloud API.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => {
                const theme = hoverThemes[f.grad];
                return (
                  <article
                    key={f.title}
                    aria-label={f.title}
                    className={`group wcrm-fade-up wcrm-delay-${(i % 3) + 1}
                      relative overflow-hidden flex flex-col items-center text-center
                      p-6 sm:p-8 bg-white rounded-[20px]
                      border border-black/[0.08]
                      shadow-[0_12px_32px_rgba(0,0,0,0.08)]
                      transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
                      hover:-translate-y-2
                      ${theme.borderHover}
                      ${theme.shadowHover}`}
                  >
                    {/* Top Accent Line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      style={{ background: theme.styleGrad }}
                    />

                    {/* Icon */}
                    <div
                      aria-hidden="true"
                      className="w-[60px] h-[60px] rounded-2xl flex items-center
                                 justify-content-center mx-auto mb-6 flex-shrink-0
                                 shadow-[0_8px_16px_rgba(0,0,0,0.05)]
                                 transition-transform duration-300 ease-in-out text-white
                                 flex items-center justify-center
                                 group-hover:scale-110"
                      style={{ background: iconGradients[f.grad] }}
                    >
                    {f.icon}
                  </div>
                  <h3 className="text-[clamp(1.15rem,2vw,1.5rem)] font-semibold mb-3 text-[#0f172a]">
                    {f.title}
                  </h3>
                  <p className="text-lg text-[#475569] leading-[1.7] mb-0 text-center">
                    {f.desc}
                  </p>
                </article>
              );
            })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            AUTOMATIONS SECTION
        ══════════════════════════════════════════ */}
        <section
          id="wcrm-automations"
          className="relative overflow-hidden bg-[#f1f5f9] py-12 lg:py-16"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left: flow image */}
              <div className="wcrm-fade-left relative max-w-[500px] sm:max-w-[550px] lg:max-w-none mx-auto w-full">
                <div aria-hidden="true"
                  className="absolute pointer-events-none rounded-full opacity-50 blur-[80px] z-0
                                w-[400px] h-[400px] bg-[rgba(167,139,250,0.2)] top-[20%] -left-[20%]" />
                <Image
                  src="/whatsapp-crm/flow.png"
                  alt="Visual automation flow builder with drag-and-drop nodes"
                  width={600}
                  height={450}
                  className="wcrm-float-slow w-full block rounded-2xl
                             border border-[rgba(0,0,0,0.05)]
                             shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]"
                />
              </div>

              {/* Right: content */}
              <div className="wcrm-fade-right">
                <div className="inline-block text-base font-semibold uppercase tracking-[0.05em] mb-4 text-[#d4af37]">
                  Advanced Automation Flows
                </div>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-4 text-[#0f172a]">
                  Put your support &amp; sales on{" "}
                  <span className="wcrm-grad-text">autopilot</span>
                </h2>
                <p className="text-lg text-[#475569] leading-[1.7] mb-6">
                  Design complex, multi-step customer journeys using our intuitive visual
                  flow builder. From simple auto-replies to advanced lead qualification engines.
                </p>

                <div className="flex flex-col gap-6 mt-10">
                  {automationFeatures.map((item) => (
                    <div key={item.title} className="flex gap-5 items-start">
                      <div
                        aria-hidden="true"
                        className="flex items-center justify-center flex-shrink-0
                                   w-12 h-12 rounded-xl
                                   bg-[rgba(212,175,55,0.1)] text-[#d4af37]"
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-[1.1rem] font-bold text-[#0f172a] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-base text-[#475569] leading-[1.6] mb-0">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            ANALYTICS SECTION
        ══════════════════════════════════════════ */}
        <section id="wcrm-analytics" className="relative bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left: metrics — order-first on desktop via reverse layout */}
              <div className="wcrm-fade-left lg:order-first">
                <div className="inline-block text-base font-semibold uppercase tracking-[0.05em] mb-4 text-[#d4af37]">
                  Real-time Insights
                </div>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-4 text-[#0f172a]">
                  Track every metric that matters
                </h2>
                <p className="text-lg text-[#475569] leading-[1.7] mb-6">
                  Make data-driven decisions with a comprehensive real-time dashboard.
                  Monitor agent performance, response times, and campaign conversions.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-10 max-[480px]:grid-cols-1">
                  {metrics.map((m, i) => (
                    <div
                      key={m.label}
                      className={`wcrm-fade-up wcrm-delay-${i + 1}
                        p-6 text-center rounded-2xl
                        bg-white/80
                        border border-[rgba(0,0,0,0.05)]
                        backdrop-blur-[12px]
                        shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]
                        transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
                        hover:-translate-y-2 hover:scale-105
                        hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]
                        hover:border-[rgba(212,175,55,0.3)]`}
                    >
                      <div aria-hidden="true"
                        className="inline-flex items-center justify-center
                                      w-12 h-12 rounded-full mb-4
                                      bg-[rgba(212,175,55,0.15)] text-[#d4af37]">
                        {m.icon}
                      </div>
                      <div className="text-[2rem] font-extrabold leading-[1.2] mb-1 text-[#0f172a]">
                        {m.value}
                      </div>
                      <div className="text-[0.9rem] font-medium text-[#475569]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: analytics image */}
              <div className="wcrm-fade-right relative lg:order-last max-w-[500px] sm:max-w-[550px] lg:max-w-none mx-auto w-full">
                <div aria-hidden="true"
                  className="absolute pointer-events-none rounded-full opacity-50 blur-[80px] z-0
                                w-[500px] h-[500px] bg-[rgba(245,158,11,0.2)] bottom-0 -right-[20%]" />
                <Image
                  src="/whatsapp-crm/analytics.png"
                  alt="WhatsApp CRM analytics dashboard with charts and performance metrics"
                  width={600}
                  height={450}
                  className="wcrm-float-slow w-full block rounded-2xl
                             border border-[rgba(0,0,0,0.05)]
                             shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA SECTION
        ══════════════════════════════════════════ */}
        <section className="bg-[#f1f5f9] py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="wcrm-fade-up relative overflow-hidden flex flex-col lg:flex-row
                            justify-between items-center gap-8 text-left
                            p-[3rem] md:p-[4rem] lg:p-[6rem]
                            rounded-[32px] bg-white
                            border border-[rgba(212,175,55,0.2)]
                            shadow-[0_25px_50px_-12px_rgba(212,175,55,0.15)]
                            lg:text-left max-[992px]:text-center">

              {/* Content */}
              <div className="relative z-[2] max-w-[600px]">
                <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-extrabold mb-6 text-[#0f172a]">
                  Ready to transform your customer experience?
                </h2>
                <p className="text-xl text-[#475569] mb-10">
                  Join modern teams scaling their sales and support on WhatsApp.
                </p>
                <div className="flex flex-wrap gap-6 justify-start
                                max-[992px]:justify-center
                                max-[480px]:flex-col max-[480px]:items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full
                               font-semibold text-lg text-white no-underline whitespace-nowrap
                               bg-emerald-500 transition-all duration-300 ease-in-out
                               shadow-[0_4px_14px_rgba(16,185,129,0.39)]
                               hover:bg-emerald-600 hover:-translate-y-0.5
                               hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)]
                               max-[480px]:w-full max-[480px]:text-center"
                  >
                    Get Started Now
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full
                               font-semibold text-lg text-[#0f172a] no-underline whitespace-nowrap
                               bg-transparent border border-[rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out
                               hover:bg-black/5 hover:border-black/20 hover:-translate-y-0.5
                               max-[480px]:w-full max-[480px]:text-center"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>

              {/* Decorative blobs (hidden on mobile) */}
              <div aria-hidden="true"
                className="hidden md:block absolute pointer-events-none rounded-full opacity-50 blur-[80px] z-[1]
                              w-[400px] h-[400px] bg-[#facc15] -top-[100px] -right-[100px]" />
              <div aria-hidden="true"
                className="hidden md:block absolute pointer-events-none rounded-full opacity-50 blur-[80px] z-[1]
                              w-[300px] h-[300px] bg-[#d97706] -bottom-[100px] right-[200px]" />
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
