"use client";

import { useEffect, useState } from "react";
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
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
function IconChevronDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform duration-300">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

function IconMaximize() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" />
    </svg>
  );
}

function IconCheckCircle2() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[#10b981] flex-shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[#10b981] flex-shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}




function IconList() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function IconCompose() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}
function IconSparkles() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" /><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5Z" /><path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z" />
    </svg>
  );
}
function IconBot() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
    </svg>
  );
}
function IconBookOpen() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z" />
    </svg>
  );
}
function IconCpu() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="16" height="16" x="4" y="4" rx="2" /><path d="M9 9h6v6H9Z" /><path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 20v3" /><path d="M15 20v3" /><path d="M20 9h3" /><path d="M20 15h3" /><path d="M1 9h3" /><path d="M1 15h3" />
    </svg>
  );
}
function IconFilter() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
function IconRotateCw() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.72 2.78L21 8" /><path d="M21 3v5h-5" />
    </svg>
  );
}
function IconWallet() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}
function IconInbox() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}
function IconFileSpreadsheet() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M8 13h2" /><path d="M14 13h2" /><path d="M8 17h2" /><path d="M14 17h2" /><path d="M10 10H8v10h2v-3h4v3h2V10h-2v3h-4Z" />
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
export default function WhatsAppCRMSoftware() {
  useScrollReveal();
  const [previewImage, setPreviewImage] = useState(null);

  /* Icon colour-gradient lookup → Tailwind bg (via inline style for gradients) */
  const iconGradients = {
    emerald: "linear-gradient(135deg,#10b981,#059669)",
    violet: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
    amber: "linear-gradient(135deg,#f59e0b,#d97706)",
    rose: "linear-gradient(135deg,#f43f5e,#be123c)",
  };

  const hoverThemes = {
    emerald: {
      initialShadow: "shadow-[0_15px_35px_rgba(16,185,129,0.08)]",
      borderHover: "hover:border-emerald-300",
      shadowHover: "hover:shadow-[0_20px_40px_-5px_rgba(16,185,129,0.15),0_10px_15px_-5px_rgba(16,185,129,0.1)]",
      styleGrad: "linear-gradient(90deg, #10b981, #059669)"
    },
    violet: {
      initialShadow: "shadow-[0_15px_35px_rgba(139,92,246,0.08)]",
      borderHover: "hover:border-violet-300",
      shadowHover: "hover:shadow-[0_20px_40px_-5px_rgba(139,92,246,0.15),0_10px_15px_-5px_rgba(139,92,246,0.1)]",
      styleGrad: "linear-gradient(90deg, #8b5cf6, #6d28d9)"
    },
    amber: {
      initialShadow: "shadow-[0_15px_35px_rgba(245,158,11,0.08)]",
      borderHover: "hover:border-amber-300",
      shadowHover: "hover:shadow-[0_20px_40px_-5px_rgba(245,158,11,0.15),0_10px_15px_-5px_rgba(245,158,11,0.1)]",
      styleGrad: "linear-gradient(90deg, #facc15, #d97706)"
    },
    rose: {
      initialShadow: "shadow-[0_15px_35px_rgba(244,63,94,0.08)]",
      borderHover: "hover:border-rose-300",
      shadowHover: "hover:shadow-[0_20px_40px_-5px_rgba(244,63,94,0.15),0_10px_15px_-5px_rgba(244,63,94,0.1)]",
      styleGrad: "linear-gradient(90deg, #f43f5e, #be123c)"
    }
  };

  const features = [
    { icon: <IconUsers />, grad: "emerald", title: "Shared Inbox", desc: "Multiple agents, one number. Assign chats, leave internal notes, and never miss a customer reply." },
    { icon: <IconKanban />, grad: "violet", title: "Sales Pipelines", desc: "Track deals across a visual Kanban board. Connect every deal directly to the WhatsApp conversation." },
    { icon: <IconMegaphone />, grad: "amber", title: "Smart Broadcasts", desc: "Send Meta-approved templates at scale. Resume pending recipients, sync live delivery status, and stay within plan quota plus prepaid credits." },
    { icon: <IconMessageSquare />, grad: "violet", title: "Interactive Templates", desc: "Drive engagement with pre-approved templates featuring call-to-action buttons, quick replies, and product catalogs." },
    { icon: <IconTags />, grad: "amber", title: "Contact Tags & Segments", desc: "Organize by tags and opt-in status. Filter contacts by Meta delivery failures so you clean lists before the next campaign." },
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

  const inboxFeatures = [
    { icon: <IconList />, title: "Conversation list", desc: "Search, unread badges, and reply-first sorting so waiting customers rise to the top." },
    { icon: <IconMessageSquare />, title: "Message thread", desc: "Inbound and outbound bubbles with sent, delivered, read, and failed statuses synced from Meta." },
    { icon: <IconUser />, title: "Contact sidebar", desc: "Tags, notes, assignment, and deal context stay beside the chat while you reply." },
    { icon: <IconUsers />, title: "Assign & collaborate", desc: "Multiple agents on one number — assign chats, leave internal notes, hand off cleanly." },
    { icon: <IconCompose />, title: "Composer that matches Meta", desc: "Text, media, templates inside the 24h window — plus one-click AI suggest reply when you need a draft." },
  ];

  const aiFeatures = [
    { icon: <IconSparkles />, title: "Suggest reply in inbox", desc: "One tap drafts a reply from recent chat turns and matching knowledge articles." },
    { icon: <IconBot />, title: "AI auto-reply", desc: "Turn on automatic replies for WhatsApp, Instagram, Messenger, website chat, and SMS." },
    { icon: <IconBookOpen />, title: "Knowledge base", desc: "Add FAQs and product articles so answers stay on-brand and grounded in your content." },
    { icon: <IconClock />, title: "Cooldown & delay controls", desc: "Skip when an agent is assigned, set reply delay, and cool down so bots don’t spam." },
    { icon: <IconCpu />, title: "Your AI provider", desc: "Bring Gemini, Groq, or OpenAI keys — wacrm routes suggest-reply and auto-reply through your config." },
  ];

  const deliveryFeatures = [
    { icon: <IconFilter />, grad: "rose", title: "Meta Error Filters", desc: "Filter contacts by failed delivery and exact Meta codes — ecosystem health (#131049), undeliverable (#131026), experiment (#131031), and media upload (#131053)." },
    { icon: <IconShieldCheck />, grad: "emerald", title: "Opt-in Safe Sends", desc: "Broadcast to opted-in contacts only by default. Pre-send checks surface missing consent, Meta messaging limits, and plan remaining before you hit send." },
    { icon: <IconRotateCw />, grad: "violet", title: "Resume Pending", desc: "Large campaigns stay reliable. Resume or send only pending recipients, with status sync so Failed in inbox matches Failed in the broadcast report." },
    { icon: <IconWallet />, grad: "amber", title: "Plan + Quota", desc: "See remaining sends as plan leftover plus prepaid credit packs. Usage cards make it clear what you can still send this period." },
    { icon: <IconInbox />, grad: "emerald", title: "Reply-First Inbox", desc: "Conversations with a customer reply surface first, then by recency — so agents handle waiting customers before quiet threads." },
    { icon: <IconFileSpreadsheet />, grad: "violet", title: "Smarter CSV Import", desc: "Import audiences with phone normalization and account-scoped upserts so duplicate numbers don’t create duplicate contacts mid-campaign." },
  ];

  return (
    <>
      {/* ── Minimal scoped CSS — only what Tailwind cannot express ── */}
      <style>{`
        /* Scroll-reveal states */
        .wcrm-fade-up    { opacity:0; transform:translate3d(0, 20px, 0);  transition:opacity .6s ease,transform .6s ease; will-change: transform, opacity; }
        .wcrm-fade-left  { opacity:0; transform:translate3d(-20px, 0, 0); transition:opacity .6s ease,transform .6s ease; will-change: transform, opacity; }
        .wcrm-fade-right { opacity:0; transform:translate3d(20px, 0, 0);  transition:opacity .6s ease,transform .6s ease; will-change: transform, opacity; }
        .wcrm-visible    { opacity:1!important; transform:translate3d(0,0,0)!important; }
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

        /* CTA Section premium layout styles */
        .cta-kicker {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            padding: 0.4rem 0.85rem;
            border-radius: 9999px;
            border: 1px solid rgba(16, 185, 129, 0.3);
            background: rgba(16, 185, 129, 0.1);
            color: #047857;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.02em;
            margin-bottom: 1.25rem;
        }
        .cta-pulse {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #10b981;
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6);
            animation: cta-pulse 1.8s ease-out infinite;
        }
        @keyframes cta-pulse {
            0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.55); }
            70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .cta-checks {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin: 0 0 2rem;
            padding: 0;
        }
        .cta-checks li {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: #0f172a;
            font-size: 0.98rem;
            font-weight: 500;
        }
        .cta-checks svg {
            width: 18px;
            height: 18px;
            color: #10b981;
            flex-shrink: 0;
        }
        .cta-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }
        .cta-chat {
            width: 100%;
            max-width: 380px;
            border-radius: 20px;
            background: #ffffff;
            border: 1px solid rgba(15, 23, 42, 0.1);
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.1);
            overflow: hidden;
            animation: cta-float 5s ease-in-out infinite;
        }
        @keyframes cta-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .cta-chat-bar {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem 1.1rem;
            border-bottom: 1px solid rgba(15, 23, 42, 0.08);
            background: #f8fafc;
        }
        .cta-chat-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            font-weight: 700;
            font-size: 0.85rem;
            color: #0f172a;
            background: linear-gradient(135deg, #facc15, #d97706);
        }
        .cta-chat-bar strong {
            display: block;
            color: #0f172a;
            font-size: 0.95rem;
        }
        .cta-chat-bar span {
            display: block;
            color: #475569;
            font-size: 0.75rem;
        }
        .cta-bubbles {
            padding: 1.1rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            min-height: 220px;
            background: #f8fafc;
        }
        .cta-bubble {
            max-width: 90%;
            padding: 0.75rem 0.9rem;
            border-radius: 14px;
            font-size: 0.88rem;
            line-height: 1.45;
        }
        .cta-bubble.in {
            align-self: flex-start;
            background: #e2e8f0;
            color: #0f172a;
            border-bottom-left-radius: 4px;
        }
        .cta-bubble.ai {
            align-self: stretch;
            background: rgba(250, 204, 21, 0.12);
            border: 1px solid rgba(212, 175, 55, 0.45);
            color: #713f12;
        }
        .cta-ai-label {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            margin-bottom: 0.4rem;
            color: #b45309;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }
        .cta-ai-label svg {
            width: 12px;
            height: 12px;
        }
        .cta-bubble.out {
            align-self: flex-end;
            background: #10b981;
            color: #ffffff;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 0.4rem 0.75rem;
            border-radius: 9999px;
            max-width: none;
        }
        .cta-compose {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.75rem;
            margin: 0 1rem 1rem;
            padding: 0.7rem 0.85rem;
            border-radius: 12px;
            background: #ffffff;
            border: 1px solid rgba(15, 23, 42, 0.1);
            color: #94a3b8;
            font-size: 0.85rem;
        }
        .cta-spark {
            width: 34px;
            height: 34px;
            border: none;
            border-radius: 10px;
            display: grid;
            place-items: center;
            background: rgba(212, 175, 55, 0.18);
            color: #b45309;
            cursor: default;
        }
        .cta-spark svg {
            width: 16px;
            height: 16px;
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
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: content */}
              <div className="wcrm-fade-up text-center lg:text-left">
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
                  The only self-hosted CRM template you need. Shared inbox, AI suggest &amp; auto-reply, visual
                  automations, smart broadcasts with Meta delivery filters, and real-time analytics.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start
                                max-[480px]:flex-col max-[480px]:items-center">
                  <Link
                    href="/contact"
                    className="btn-premium-orange group !text-lg !px-8 !py-4 max-[480px]:w-full max-[480px]:text-center"
                  >
                    Start Free Trial
                    <div className="shimmer"></div>
                  </Link>
                  <a
                    href="#wcrm-features"
                    className="group inline-flex items-center justify-center px-8 py-4 rounded-full
                               font-semibold text-lg text-emerald-700 no-underline whitespace-nowrap
                               bg-emerald-50/60 hover:bg-emerald-50/90 border border-emerald-300/80 hover:border-emerald-500/80 transition-all duration-300 ease-in-out
                               hover:shadow-[0_10px_20px_-5px_rgba(16,185,129,0.15)] hover:-translate-y-0.5
                               max-[480px]:w-full max-[480px]:text-center"
                  >
                    Explore Features
                    <IconChevronDown />
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
                <div className="wcrm-hero-img relative group overflow-hidden rounded-xl border border-[rgba(0,0,0,0.05)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] cursor-pointer"
                     onClick={() => setPreviewImage("/whatsapp-crm/hero.jpg")}>
                  <Image
                    src="/whatsapp-crm/hero.jpg"
                    alt="WhatsApp CRM Dashboard showing shared inbox, pipeline and analytics"
                    width={640}
                    height={480}
                    priority
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                      <IconMaximize />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FEATURES SECTION
        ══════════════════════════════════════════ */}
        <section id="wcrm-features" className="relative bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* Section header */}
            <div className="wcrm-fade-up text-center max-w-[700px] mx-auto mb-10">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-6 text-[#0f172a]">
                Everything you need to scale
              </h2>
              <p className="text-xl text-[#475569] leading-[1.7] mb-0">
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
                      ${theme.initialShadow}
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
                    <p className="text-base text-[#475569] leading-[1.7] mb-0 text-center">
                      {f.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SHARED TEAM INBOX SECTION
        ══════════════════════════════════════════ */}
        <section id="wcrm-inbox" className="relative overflow-hidden bg-[#f1f5f9] py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: visual frame */}
              <div className="hidden lg:block wcrm-fade-left relative max-w-[500px] sm:max-w-[550px] lg:max-w-none mx-auto w-full">
                <div className="relative group overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] cursor-pointer"
                     onClick={() => setPreviewImage("/whatsapp-crm/inbox.png")}>
                  <Image
                    src="/whatsapp-crm/inbox.png"
                    alt="wacrm shared inbox with conversation list and message thread"
                    width={600}
                    height={450}
                    className="w-full block transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                      <IconMaximize />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: detailed list */}
              <div className="wcrm-fade-right text-center lg:text-left">
                <div className="inline-block text-sm font-semibold capitalize tracking-[0.05em] mb-4 text-[#d4af37]">
                  Shared Team Inbox
                </div>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-4 text-[#0f172a]">
                  See every WhatsApp reply in{" "}
                  <span className="wcrm-grad-text">one place</span>
                </h2>
                <p className="text-lg text-[#475569] leading-[1.7] mb-6">
                  Agents work from a three-panel inbox: conversation list, live message thread, and contact context — so nothing falls between chats.
                </p>

                {/* Mobile-only Image (Heading -> Description -> Image -> Cards layout) */}
                <div className="block lg:hidden my-8 max-w-[500px] sm:max-w-[550px] mx-auto w-full">
                  <div className="relative group overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] cursor-pointer"
                       onClick={() => setPreviewImage("/whatsapp-crm/inbox.png")}>
                    <Image
                      src="/whatsapp-crm/inbox.png"
                      alt="wacrm shared inbox with conversation list and message thread"
                      width={600}
                      height={450}
                      className="w-full block transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                      <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                        <IconMaximize />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 mt-10">
                  {inboxFeatures.map((item, i) => (
                    <div key={i} className="flex flex-col lg:flex-row gap-5 items-center text-center lg:text-left p-5 bg-white border border-slate-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-[#d4af37]/40 transition-all duration-300 w-full">
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.1)] text-[#d4af37]">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-[1.1rem] font-bold text-[#0f172a] mb-1">{item.title}</h4>
                        <p className="text-base text-[#475569] leading-[1.6] mb-0">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            AI AGENTS SECTION
        ══════════════════════════════════════════ */}
        <section id="wcrm-ai" className="relative overflow-hidden bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: content */}
              <div className="wcrm-fade-left text-center lg:text-left">
                <div className="inline-block text-sm font-semibold capitalize tracking-[0.05em] mb-4 text-[#d4af37]">
                  Built-in AI Agents
                </div>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-4 text-[#0f172a]">
                  Reply faster with{" "}
                  <span className="wcrm-grad-text">knowledge-aware AI</span>
                </h2>
                <p className="text-lg text-[#475569] leading-[1.7] mb-6">
                  wacrm uses your knowledge base with Gemini, Groq, or OpenAI — for inbox drafts and automatic first replies across channels.
                </p>

                {/* Mobile-only Image (Heading -> Description -> Image -> Cards layout) */}
                <div className="block lg:hidden my-8 max-w-[500px] sm:max-w-[550px] mx-auto w-full">
                  <div className="relative group overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] cursor-pointer"
                       onClick={() => setPreviewImage("/whatsapp-crm/ai.png")}>
                    <Image
                      src="/whatsapp-crm/ai.png"
                      alt="wacrm AI auto-reply settings and knowledge base"
                      width={600}
                      height={450}
                      className="w-full block transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                      <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                        <IconMaximize />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 mt-10">
                  {aiFeatures.map((item, i) => (
                    <div key={i} className="flex flex-col lg:flex-row gap-5 items-center text-center lg:text-left p-5 bg-white border border-slate-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-[#d4af37]/40 transition-all duration-300 w-full">
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.1)] text-[#d4af37]">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-[1.1rem] font-bold text-[#0f172a] mb-1">{item.title}</h4>
                        <p className="text-base text-[#475569] leading-[1.6] mb-0">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: visual frame */}
              <div className="hidden lg:block wcrm-fade-right relative max-w-[500px] sm:max-w-[550px] lg:max-w-none mx-auto w-full">
                <div className="relative group overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] cursor-pointer"
                     onClick={() => setPreviewImage("/whatsapp-crm/ai.png")}>
                  <Image
                    src="/whatsapp-crm/ai.png"
                    alt="wacrm AI auto-reply settings and knowledge base"
                    width={600}
                    height={450}
                    className="w-full block transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                      <IconMaximize />
                    </div>
                  </div>
                </div>
              </div>
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
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: flow image */}
              <div className="hidden lg:block wcrm-fade-left relative max-w-[500px] sm:max-w-[550px] lg:max-w-none mx-auto w-full">
                <div aria-hidden="true"
                  className="absolute pointer-events-none rounded-full opacity-50 blur-[80px] z-0
                                w-[400px] h-[400px] bg-[rgba(167,139,250,0.2)] top-[20%] -left-[20%]" />
                <div className="relative group overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] cursor-pointer"
                     onClick={() => setPreviewImage("/whatsapp-crm/flow.png")}>
                  <Image
                    src="/whatsapp-crm/flow.png"
                    alt="Visual automation flow builder with drag-and-drop nodes"
                    width={600}
                    height={450}
                    className="wcrm-float-slow w-full block transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ marginBottom: "-24px" }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                      <IconMaximize />
                    </div>
                  </div>
                </div>
              </div>

              <div className="wcrm-fade-right text-center lg:text-left">
                <div className="inline-block text-sm font-semibold capitalize tracking-[0.05em] mb-4 text-[#d4af37]">
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

                {/* Mobile-only Image (Heading -> Description -> Image -> Cards layout) */}
                <div className="block lg:hidden my-8 max-w-[500px] sm:max-w-[550px] mx-auto w-full">
                  <div className="relative group overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] cursor-pointer"
                       onClick={() => setPreviewImage("/whatsapp-crm/flow.png")}>
                    <Image
                      src="/whatsapp-crm/flow.png"
                      alt="Visual automation flow builder with drag-and-drop nodes"
                      width={600}
                      height={450}
                      className="wcrm-float-slow w-full block transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ marginBottom: "-24px" }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                      <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                        <IconMaximize />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 mt-10">
                  {automationFeatures.map((item) => (
                    <div key={item.title} className="flex flex-col lg:flex-row gap-5 items-center text-center lg:text-left p-5 bg-white border border-slate-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-[#d4af37]/40 transition-all duration-300 w-full">
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
            DELIVERY INTELLIGENCE SECTION
        ══════════════════════════════════════════ */}
        <section id="wcrm-delivery" className="relative bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* Section header */}
            <div className="wcrm-fade-up text-center max-w-[700px] mx-auto mb-10">
              <div className="inline-block text-sm font-semibold capitalize tracking-[0.05em] mb-4 text-[#d4af37]">
                New in wacrm
              </div>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-6 text-[#0f172a]">
                Delivery intelligence built for Meta
              </h2>
              <p className="text-xl text-[#475569] leading-[1.7] mb-0">
                Know why messages fail, protect number quality with opt-in, and finish large campaigns without guessing.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {deliveryFeatures.map((f, i) => {
                const theme = hoverThemes[f.grad];
                return (
                  <article
                    key={f.title}
                    aria-label={f.title}
                    className={`group wcrm-fade-up wcrm-delay-${(i % 3) + 1}
                      relative overflow-hidden flex flex-col items-center text-center
                      p-6 sm:p-8 bg-white rounded-[20px]
                      border border-black/[0.08]
                      ${theme.initialShadow}
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
                    <p className="text-base text-[#475569] leading-[1.7] mb-0 text-center">
                      {f.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            ANALYTICS SECTION
        ══════════════════════════════════════════ */}
        <section id="wcrm-analytics" className="relative bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <div className="wcrm-fade-left text-center lg:text-left">
                <div className="inline-block text-sm font-semibold capitalize tracking-[0.05em] mb-4 text-[#d4af37]">
                  Real-time Insights
                </div>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-4 text-[#0f172a]">
                  Track every metric that matters
                </h2>
                <p className="text-lg text-[#475569] leading-[1.7] mb-6">
                  Make data-driven decisions with a comprehensive real-time dashboard.
                  Monitor agent performance, response times, and campaign conversions.
                </p>

                {/* Mobile-only Image (Heading -> Description -> Image -> Metrics layout) */}
                <div className="block lg:hidden my-8 max-w-[500px] sm:max-w-[550px] mx-auto w-full">
                  <div className="relative group overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] cursor-pointer"
                       onClick={() => setPreviewImage("/whatsapp-crm/analytics.jpg")}>
                    <Image
                      src="/whatsapp-crm/analytics.jpg"
                      alt="WhatsApp CRM analytics dashboard with charts and performance metrics"
                      width={600}
                      height={450}
                      className="wcrm-float-slow w-full block transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ marginBottom: "-24px" }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                      <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                        <IconMaximize />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-10 max-[480px]:grid-cols-1">
                  {metrics.map((m, i) => (
                    <div
                      key={m.label}
                      className={`wcrm-fade-up wcrm-delay-${i + 1}
                        p-6 text-center rounded-2xl
                        bg-white/80
                        border border-[rgba(212,175,55,0.3)]
                        backdrop-blur-[12px]
                        shadow-[0_20px_40px_rgba(212,175,55,0.15)]`}
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
              <div className="hidden lg:block wcrm-fade-right relative max-w-[500px] sm:max-w-[550px] lg:max-w-none mx-auto w-full">
                <div aria-hidden="true"
                  className="absolute pointer-events-none rounded-full opacity-50 blur-[80px] z-0
                                w-[500px] h-[500px] bg-[rgba(245,158,11,0.2)] bottom-0 -right-[20%]" />
                <div className="relative group overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] cursor-pointer"
                     onClick={() => setPreviewImage("/whatsapp-crm/analytics.jpg")}>
                  <Image
                    src="/whatsapp-crm/analytics.jpg"
                    alt="WhatsApp CRM analytics dashboard with charts and performance metrics"
                    width={600}
                    height={450}
                    className="wcrm-float-slow w-full block transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ marginBottom: "-24px" }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                      <IconMaximize />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA SECTION
        ══════════════════════════════════════════ */}
        <section className="bg-[#f1f5f9] py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="wcrm-fade-up relative overflow-hidden rounded-[32px] border border-[rgba(212,175,55,0.2)] shadow-[0_25px_50px_-12px_rgba(212,175,55,0.15)] p-8 md:p-12 lg:p-16"
                 style={{ background: "radial-gradient(circle at 85% 75%, rgba(250, 204, 21, 0.22) 0%, rgba(255, 255, 255, 0) 60%), #ffffff" }}>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: cta copy */}
                <div className="cta-copy text-center lg:text-left flex flex-col items-center lg:items-start">
                  <div className="cta-kicker">
                    <span className="cta-pulse"></span>
                    Live on WhatsApp Business API
                  </div>
                  <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] font-bold mb-4 text-[#0f172a]">
                    Run sales &amp; support where your customers already reply
                  </h2>
                  <p className="text-lg text-[#475569] leading-[1.7] mb-6">
                    Shared inbox, AI drafts from your knowledge base, Meta-safe broadcasts — one CRM your team can host and own.
                  </p>
                  
                  <ul className="cta-checks mb-8 w-fit mx-auto lg:mx-0 text-left">
                    <li className="flex items-center gap-3 justify-start">
                      <IconCheck />
                      <span>Reply-first shared inbox</span>
                    </li>
                    <li className="flex items-center gap-3 justify-start">
                      <IconCheck />
                      <span>AI suggest + auto-reply</span>
                    </li>
                    <li className="flex items-center gap-3 justify-start">
                      <IconCheck />
                      <span>Delivery filters &amp; resume pending</span>
                    </li>
                  </ul>

                  <div className="cta-actions justify-center lg:justify-start">
                    <Link
                      href="/contact"
                      className="btn-premium-orange group !text-lg !px-8 !py-4 max-[480px]:w-full max-[480px]:text-center"
                    >
                      Start Free Trial
                      <div className="shimmer"></div>
                    </Link>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center px-8 py-4 rounded-full
                                 font-semibold text-lg text-emerald-600 no-underline whitespace-nowrap
                                 bg-transparent hover:bg-emerald-50/40 border border-emerald-400/80 hover:border-emerald-500 transition-all duration-300 ease-in-out
                                 max-[480px]:w-full max-[480px]:text-center"
                    >
                      Book a Demo
                      <IconChevronDown />
                    </Link>
                  </div>
                </div>

                {/* Right: cta chat preview mockup */}
                <div className="cta-preview">
                  <div className="cta-chat">
                    <div className="cta-chat-bar">
                      <div className="cta-chat-avatar">PS</div>
                      <div>
                        <strong>Priya Sharma</strong>
                        <span>Customer reply · just now</span>
                      </div>
                    </div>
                    <div className="cta-bubbles">
                      <div className="cta-bubble in">Do you have HRMS pricing for 50 seats?</div>
                      <div className="cta-bubble ai">
                        <span className="cta-ai-label"><IconSparkles /> AI draft</span>
                        <p className="text-sm m-0">Yes — for 50 seats we offer Standard and Pro. Want a 14-day trial link or a demo slot this week?</p>
                      </div>
                      <div className="cta-bubble out">Sent · Read</div>
                    </div>
                    <div className="cta-compose">
                      <span>Type a message…</span>
                      <button type="button" className="cta-spark" tabIndex={-1}>
                        <IconSparkles />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── IMAGE LIGHTBOX POPUP ── */}
        {previewImage && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 cursor-zoom-out"
            onClick={() => setPreviewImage(null)}
          >
            <div className="relative max-w-7xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={previewImage}
                alt="Preview"
                className="max-w-full max-h-[85vh] object-contain block"
              />
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
