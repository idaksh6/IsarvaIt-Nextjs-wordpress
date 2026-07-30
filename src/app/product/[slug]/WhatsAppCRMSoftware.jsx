"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "../../components/AppLink";
import ContactFormModal from "../../components/ContactFormModal";

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
      <path d="m6 9 6 6 6-6" />
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
  // Disabled to check if animations are the issue
}

/* ─────────────────────────────────────────────────────────────
   Main Page Component
 ───────────────────────────────────────────────────────────────*/
export default function WhatsAppCRMSoftware() {
  useScrollReveal();
  const [previewImage, setPreviewImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    { icon: <IconUsers />, grad: "emerald", title: "Contact records", desc: "Name, phone, company, email, and tags. Import lists with CSV tooling built for broadcast audiences." },
    { icon: <IconShieldCheck />, grad: "violet", title: "Opt-in & list health", desc: "Track marketing consent so campaigns go to people who said yes — and clean lists before the next send." },
    { icon: <IconKanban />, grad: "amber", title: "Sales pipelines", desc: "Kanban stages for deals. Open a deal from the inbox contact sidebar without leaving the chat." }
  ];

  const automationFeatures = [
    { icon: <IconNetwork />, title: "Visual flows", desc: "Drag-and-drop steps: send messages, branch on replies, collect fields, call webhooks." },
    { icon: <IconSparkles />, title: "AI suggest reply", desc: "One tap drafts an answer from recent chat turns and your knowledge articles." },
    { icon: <IconBot />, title: "AI auto-reply", desc: "Optional first replies with delay and cooldown so the bot does not spam. Skip when an agent is assigned." },
    { icon: <IconUserPlus />, title: "Human handoff", desc: "Route qualified leads or complex questions to a person in the inbox." }
  ];

  const reportFeatures = [
    { icon: <IconBarChart />, title: "Broadcast campaigns", desc: "Per-campaign delivered, read, replied, and billable counts — export CSV or PDF." },
    { icon: <IconUsers />, title: "Template sends to contacts", desc: "Which contacts got which template, with status filters for sent, failed, and more." },
    { icon: <IconWallet />, title: "Messaging spend & team stats", desc: "Category spend from Meta, plus agent performance, lead funnel, and call summaries." }
  ];

  const inboxFeatures = [
    { icon: <IconList />, title: "Conversation list", desc: "Search chats, spot unread, and prioritise people who just replied." },
    { icon: <IconMessageSquare />, title: "Message thread", desc: "See sent, delivered, read, and failed statuses synced from Meta." },
    { icon: <IconUser />, title: "Contact sidebar", desc: "Tags, notes, assignment, and deals stay beside the chat while you reply." },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
        </svg>
      ), 
      title: "Composer", 
      desc: "Text, images, documents, and templates — following WhatsApp’s 24-hour window rules." 
    }
  ];

  const aiFeatures = [
    { icon: <IconSparkles />, title: "Suggest reply in inbox", desc: "One tap drafts a reply from recent chat turns and matching knowledge articles." },
    { icon: <IconBot />, title: "AI auto-reply", desc: "Turn on automatic replies for WhatsApp, Instagram, Messenger, website chat, and SMS." },
    { icon: <IconBookOpen />, title: "Knowledge base", desc: "Add FAQs and product articles so answers stay on-brand and grounded in your content." },
    { icon: <IconClock />, title: "Cooldown & delay controls", desc: "Skip when an agent is assigned, set reply delay, and cool down so bots don’t spam." },
    { icon: <IconCpu />, title: "Your AI provider", desc: "Bring Gemini, Groq, or OpenAI keys — wacrm routes suggest-reply and auto-reply through your config." },
  ];

  const deliveryFeatures = [
    { icon: <IconMessageSquare />, grad: "violet", title: "Message templates", desc: "Create and sync templates in Settings. Use them in the inbox or in a campaign once Meta marks them approved." },
    { icon: <IconMegaphone />, grad: "amber", title: "Broadcast campaigns", desc: "Pick a template, choose an audience (tags, CSV, filters), personalise variables, then send or schedule." },
    { icon: <IconTrendingUp />, grad: "emerald", title: "Delivery follow-through", desc: "See delivered, read, replied, and failed counts. Resume pending recipients and filter contacts by delivery issues before the next run." }
  ];

  return (
    <>
      {/* ── Minimal scoped CSS — only what Tailwind cannot express ── */}
      <style>{`
        /* Scroll-reveal states */
        .wcrm-fade-up    { opacity: 1 !important; transform: none !important; transition: none !important; }
        .wcrm-fade-left  { opacity: 1 !important; transform: none !important; transition: none !important; }
        .wcrm-fade-right { opacity: 1 !important; transform: none !important; transition: none !important; }
        .wcrm-visible    { opacity: 1 !important; transform: none !important; transition: none !important; }
        .wcrm-delay-1    { transition-delay: 0s !important; }
        .wcrm-delay-2    { transition-delay: 0s !important; }
        .wcrm-delay-3    { transition-delay: 0s !important; }
        .wcrm-delay-4    { transition-delay: 0s !important; }

        /* Keyframe animations */
        .wcrm-hero-wrapper {
          animation: none !important;
        }
        .wcrm-hero-img {
          transform: none !important;
          transition: none !important;
        }
        .wcrm-hero-img:hover {
          transform: none !important;
        }
        .wcrm-float-slow {
          animation: none !important;
        }

        /* Glass image style */
        .glass-image {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        /* Text gradient (webkit requires -webkit-text-fill-color which Tailwind omits) */
        .wcrm-grad-text {
          background: linear-gradient(135deg, #facc15, #d97706);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .wcrm-grad-text-emerald {
          background: linear-gradient(135deg, #34d399, #059669);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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
                  WhatsApp Business Cloud API
                </div>

                <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-extrabold tracking-[-0.02em] mb-6 text-[#0f172a]">
                  Your team’s <span className="wcrm-grad-text">WhatsApp CRM</span> — inbox, contacts, and campaigns in one place
                </h1>

                <p className="text-lg text-[#475569] leading-[1.7] mb-6">
                  IsarvaCRM (built on wacrm) connects your WhatsApp Business number so agents can reply together, track deals, send approved templates, and see what was delivered — without juggling personal phones.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start
                                max-[480px]:flex-col max-[480px]:items-center">
                  <a
                    href="#wcrm-how-it-works"
                    className="btn-premium-orange group !text-lg !px-8 !py-4 max-[480px]:w-full max-[480px]:text-center cursor-pointer no-underline flex items-center justify-center"
                  >
                    See how it works
                    <div className="shimmer"></div>
                  </a>
                  <a
                    href="#wcrm-inbox"
                    className="group inline-flex items-center justify-center px-8 py-4 rounded-full
                               font-semibold text-lg text-emerald-700 no-underline whitespace-nowrap
                               bg-emerald-50/60 hover:bg-emerald-50/90 border border-emerald-300/80 hover:border-emerald-500/80 transition-all duration-300 ease-in-out
                               hover:shadow-[0_10px_20px_-5px_rgba(16,185,129,0.15)] hover:-translate-y-0.5
                               max-[480px]:w-full max-[480px]:text-center"
                  >
                    Explore the inbox
                    <IconChevronDown />
                  </a>
                </div>

                {/* Hero features list */}
                <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-[0.9rem] font-medium text-[#475569]">
                    <span className="text-[#d4af37] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                      </svg>
                    </span>
                    Shared team inbox
                  </div>
                  <div className="flex items-center gap-2 text-[0.9rem] font-medium text-[#475569]">
                    <span className="text-[#d4af37] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m3 11 18-5v12L3 14v-3z" />
                        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                      </svg>
                    </span>
                    Template broadcasts
                  </div>
                  <div className="flex items-center gap-2 text-[0.9rem] font-medium text-[#475569]">
                    <span className="text-[#d4af37] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 5v11" /><path d="M12 5v5" /><path d="M18 5v8" /><rect width="4" height="18" x="2" y="3" rx="1" /><rect width="4" height="12" x="10" y="3" rx="1" /><rect width="4" height="14" x="18" y="3" rx="1" />
                      </svg>
                    </span>
                    Pipelines & deals
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
                <div className="wcrm-hero-img relative group overflow-hidden rounded-xl border border-[rgba(0,0,0,0.05)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]">
                  <Image
                    src="/whatsapp-crm/hero.jpg"
                    alt="WhatsApp CRM Dashboard showing shared inbox, pipeline and analytics"
                    width={640}
                    height={480}
                    priority
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            HOW IT WORKS SECTION
        ══════════════════════════════════════════ */}
        <section id="wcrm-how-it-works" className="relative bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* Section heading — centered */}
            <div className="wcrm-fade-up text-center max-w-[700px] mx-auto mb-10">
              <div className="inline-block text-sm font-semibold capitalize tracking-[0.05em] mb-3 text-[#d4af37]">
                How it works
              </div>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-6 text-[#0f172a]">
                From WhatsApp number to <span className="wcrm-grad-text-emerald">daily work in four steps</span>
              </h2>
              <p className="text-xl text-[#475569] leading-[1.7] mb-0">
                You connect Meta once. After that, customers message your business number and your team works inside IsarvaCRM.
              </p>
            </div>

            {/* Steps grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: "1", title: "Connect WhatsApp", desc: "In Settings, add your WhatsApp Business Account credentials and webhook so Meta can deliver messages to the CRM." },
                { num: "2", title: "Customers message you", desc: "When someone writes to your business number, the chat appears in the shared Inbox for your team." },
                { num: "3", title: "Reply as a team", desc: "Agents assign conversations, send text or media inside Meta's customer-care window, or use approved templates." },
                { num: "4", title: "Grow with campaigns & CRM", desc: "Broadcast templates to opted-in contacts, move deals in pipelines, and review delivery in Reports." }
              ].map((step, i) => (
                <div key={step.num} className="flex flex-col items-center text-center p-6 bg-white border-2 border-emerald-500/20 shadow-[0_8px_30px_rgba(16,185,129,0.08)] rounded-2xl">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-bold text-sm mb-4 border border-emerald-100">
                    {step.num}
                  </div>
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="text-base text-[#475569] leading-relaxed mb-0">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FEATURES SECTION
        ══════════════════════════════════════════ */}
        <section id="wcrm-features" className="relative bg-[#f8fafc] py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* Section header */}
            <div className="wcrm-fade-up text-center max-w-[700px] mx-auto mb-10">
              <div className="inline-block text-sm font-semibold capitalize tracking-[0.05em] mb-3 text-[#d4af37]">
                Contacts & pipelines
              </div>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-6 text-[#0f172a]">
                Turn chats into <span className="wcrm-grad-text">contacts and deals</span>
              </h2>
              <p className="text-xl text-[#475569] leading-[1.7] mb-0">
                Every WhatsApp number can become a CRM contact. Link deals so sales and support share the same history.
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
                      transition-all duration-300
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
                    <h3 className="mb-2">
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
        <section id="wcrm-inbox" className="relative overflow-hidden bg-white py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

            {/* Section heading — centered */}
            <div className="wcrm-fade-up text-center mb-10">
              <div className="inline-block text-sm font-semibold capitalize tracking-[0.05em] mb-1.5 text-[#d4af37]">
                Shared Inbox
              </div>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-2 text-[#0f172a]">
                Every WhatsApp reply in <span className="wcrm-grad-text">one workspace</span>
              </h2>
              <p className="text-xl text-[#475569] leading-[1.7] max-w-2xl mx-auto mb-0">
                Three panels: who is waiting, the live thread, and contact context — so nothing gets lost between chats.
              </p>
            </div>

            {/* Showcase Image with Browser Mockup Frame */}
            <div className="max-w-7xl mx-auto w-full wcrm-fade-up mb-12">
              <div className="relative group overflow-hidden rounded-2xl border border-slate-900/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] bg-[#0f172a] aspect-[1536/1072]">
                
                {/* Browser Header / Chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-[#f1f5f9] border-b border-slate-900/10">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>

                <Image
                  src="/whatsapp-crm/inbox.png"
                  alt="wacrm shared inbox with conversation list and message thread"
                  width={1200}
                  height={900}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>

            {/* Bottom 4-column cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
              {inboxFeatures.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center justify-center gap-2 p-5 bg-white border-2 border-[#d4af37]/35 hover:border-[#d4af37]/75 rounded-xl shadow-[0_8px_30px_rgba(212,175,55,0.08)] hover:shadow-[0_12px_36px_rgba(212,175,55,0.16)] transition-all duration-300">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.1)] text-[#d4af37] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-2">{item.title}</h3>
                    <p className="text-base text-[#475569] leading-[1.6] mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════
            AUTOMATIONS SECTION
        ══════════════════════════════════════════ */}
        <section
          id="wcrm-automations"
          className="relative overflow-hidden bg-[#f8fafc] py-8 lg:py-12"
        >
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1.18fr_1fr] gap-8 items-center">

              {/* Left: Image (Natural aspect-ratio container with border/shadow closely wrapping it) */}
              <div className="wcrm-fade-left relative group overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0_20px_40px_-8px_rgba(0,0,0,0.25)] w-full self-center">
                <Image
                  src="/whatsapp-crm/flow.png"
                  alt="Visual automation flow builder with drag-and-drop nodes"
                  width={680}
                  height={500}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>

              {/* Right: Heading + 2-col cards grid */}
              <div className="wcrm-fade-right flex flex-col gap-5">

                {/* Heading */}
                <div>
                  <div className="inline-block text-sm font-semibold capitalize tracking-[0.05em] mb-1.5 text-emerald-600">
                    Automations &amp; AI
                  </div>
                  <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-2 text-[#0f172a]">
                    <span className="wcrm-grad-text-emerald">Automate the repeat work</span> — keep humans for the hard parts
                  </h2>
                  <p className="text-base text-[#475569] leading-[1.7] mb-0">
                    Build chat flows visually, or let AI draft replies from your knowledge base. Hand off to an agent when a person is needed.
                  </p>
                </div>

                {/* Cards grid (1 per row on mobile, 2 per row on sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch flex-1">
                  {automationFeatures.map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center justify-center gap-2 p-4 bg-white border-2 border-emerald-500/20 hover:border-emerald-500/55 rounded-xl shadow-[0_8px_30px_rgba(16,185,129,0.06)] hover:shadow-[0_12px_36px_rgba(16,185,129,0.14)] transition-all duration-300">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="mb-2">{item.title}</h3>
                        <p className="text-base text-[#475569] leading-[1.6] mb-0">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

            </div>
          </div>

          {/* Showcase Image below the 2-column grid */}
          <div className="mt-12 max-w-7xl mx-auto w-full wcrm-fade-up">
            <div className="relative group overflow-hidden rounded-2xl border border-slate-900/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] bg-[#0f172a] aspect-[1536/1072]">
              
              {/* Browser Header / Chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#f1f5f9] border-b border-slate-900/10">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              <Image
                src="/whatsapp-crm/ai.png"
                alt="AI auto-reply and knowledge base settings"
                width={1200}
                height={900}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
              />
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
                Templates &amp; Broadcasts
              </div>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-6 text-[#0f172a]">
                Reach many contacts with <span className="wcrm-grad-text">Meta-approved messages</span>
              </h2>
              <p className="text-xl text-[#475569] leading-[1.7] mb-0">
                Outside the 24-hour window you must use templates Meta has approved. Broadcasts send those templates at scale and track delivery.
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
                      transition-all duration-300
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
                    <h3 className="mb-2">
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
        <section id="wcrm-analytics" className="relative bg-[#f8fafc] py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <div className="wcrm-fade-left text-center lg:text-left">
                <div className="inline-block text-sm font-semibold capitalize tracking-[0.05em] mb-4 text-[#d4af37]">
                  Reports
                </div>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold mb-4 text-[#0f172a]">
                  See what was <span className="wcrm-grad-text">sent, read, and replied</span>
                </h2>
                <p className="text-xl text-[#475569] leading-[1.7] mb-6">
                  Reports use your real CRM and Meta delivery data for the date range you pick — not vanity demo numbers.
                </p>

                {/* Mobile-only Image (Heading -> Description -> Image -> Reports list layout) */}
                <div className="block lg:hidden my-8 max-w-[500px] sm:max-w-[550px] mx-auto w-full">
                  <div className="relative group overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] aspect-square">
                    <Image
                      src="/whatsapp-crm/analytics.jpg"
                      alt="WhatsApp CRM analytics dashboard with charts and performance metrics"
                      width={600}
                      height={450}
                      className="wcrm-float-slow w-full block transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                  {reportFeatures.map((m, i) => (
                    <div
                      key={i}
                      className={`wcrm-fade-up wcrm-delay-${i + 1} flex flex-col items-center text-center p-5 rounded-2xl bg-white/80 border border-[rgba(212,175,55,0.25)] backdrop-blur-[12px] shadow-[0_15px_30px_rgba(212,175,55,0.06)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.12)] hover:border-[rgba(212,175,55,0.45)] transition-all duration-300 ${
                        i === 2 ? "md:col-span-2" : ""
                      }`}
                    >
                      <div aria-hidden="true"
                        className="inline-flex items-center justify-center
                                      w-12 h-12 rounded-xl mb-4
                                      bg-[rgba(212,175,55,0.12)] text-[#d4af37] border border-[rgba(212,175,55,0.25)] shadow-sm">
                        {m.icon}
                      </div>
                      <div>
                        <h3 className="mb-2">
                          {m.title}
                        </h3>
                        <p className="text-base text-[#475569] leading-relaxed mb-0">
                          {m.desc}
                        </p>
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
                <div className="relative group overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] aspect-square">
                  <Image
                    src="/whatsapp-crm/analytics.jpg"
                    alt="WhatsApp CRM analytics dashboard with charts and performance metrics"
                    width={600}
                    height={450}
                    className="wcrm-float-slow w-full block transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA SECTION
        ══════════════════════════════════════════ */}
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="wcrm-fade-up relative overflow-hidden rounded-[32px] border border-[rgba(212,175,55,0.2)] shadow-[0_25px_50px_-12px_rgba(212,175,55,0.15)] p-8 md:p-12 lg:p-16"
              style={{ background: "radial-gradient(circle at 85% 75%, rgba(250, 204, 21, 0.22) 0%, rgba(255, 255, 255, 0) 60%), #ffffff" }}>

              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
                {/* Left: cta copy */}
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 text-xs font-semibold tracking-wide mb-5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                    Ready when your WABA is connected
                  </div>
                  <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] font-bold mb-4 text-[#0f172a]">
                    Get started in <span className="wcrm-grad-text-emerald">your own workspace</span>
                  </h2>
                  <p className="text-lg text-[#475569] leading-[1.7] mb-6">
                    No fake trial button — open the app and complete these steps so messaging works end to end.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
                    {[
                      { num: "1", title: "Settings → WhatsApp", desc: "Save Phone Number ID, WABA ID, access token, and webhook verify token. Register the number so Meta can deliver events." },
                      { num: "2", title: "Settings → Templates", desc: "Sync or create templates and wait for Meta approval before broadcasting." },
                      { num: "3", title: "Inbox", desc: "Send a test message from a phone on your allowlist, then reply from IsarvaCRM and confirm it arrives on WhatsApp." },
                      { num: "4", title: "Broadcasts & Reports", desc: "Run a small campaign, then check delivery and contact-level sends in Reports." }
                    ].map((step) => (
                      <div key={step.num} className="flex flex-col items-center text-center p-4 bg-white border-2 border-emerald-500/20 shadow-[0_8px_30px_rgba(16,185,129,0.08)] hover:border-emerald-500/50 hover:shadow-[0_12px_36px_rgba(16,185,129,0.16)] transition-all duration-300 rounded-xl">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-bold text-sm mb-3 border border-emerald-100">
                          {step.num}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0f172a] text-[0.95rem] mb-0.5">{step.title}</h4>
                          <p className="text-sm text-[#475569] leading-relaxed mb-0">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="btn-premium-orange group !text-lg !px-8 !py-4 max-[480px]:w-full max-[480px]:text-center cursor-pointer"
                    >
                      Review the flow
                      <div className="shimmer"></div>
                    </button>
                    <Link
                      href="#wcrm-inbox"
                      className="group inline-flex items-center justify-center px-8 py-4 rounded-full
                                 font-semibold text-lg text-emerald-600 no-underline whitespace-nowrap
                                 bg-transparent hover:bg-emerald-50/40 border border-emerald-400/80 hover:border-emerald-500 transition-all duration-300 ease-in-out
                                 max-[480px]:w-full max-[480px]:text-center"
                    >
                      See the inbox
                      <IconChevronDown />
                    </Link>
                  </div>
                </div>

                {/* Right: cta chat preview mockup */}
                <div className="w-full max-w-[380px] mx-auto">
                  <div className="w-full rounded-2xl bg-white border border-slate-900/10 shadow-[0_18px_40px_rgba(15,23,42,0.1)] overflow-hidden">
                    <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-900/10 bg-slate-50">
                      <div className="w-10 h-10 rounded-full grid place-items-center font-bold text-[0.85rem] text-[#0f172a] bg-gradient-to-br from-yellow-400 to-amber-600">PS</div>
                      <div>
                        <strong className="block text-[#0f172a] text-[0.95rem]">Priya Sharma</strong>
                        <span className="block text-[#475569] text-[0.75rem]">Customer reply · just now</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col gap-4 min-h-[220px] bg-slate-50">
                      <div className="max-w-[90%] p-4 rounded-2xl text-[0.88rem] leading-snug self-start bg-slate-200 text-[#0f172a] rounded-bl-none">Do you have HRMS pricing for 50 seats?</div>
                      <div className="max-w-[90%] p-5 rounded-2xl text-[0.88rem] leading-snug self-stretch bg-amber-500/10 border border-amber-500/40 text-amber-900">
                        <span className="inline-flex items-center gap-1.5 mb-2.5 text-amber-700 text-[0.72rem] font-bold capitalize tracking-wider"><IconSparkles /> AI draft</span>
                        <p className="text-sm m-0">Yes — for 50 seats we offer Standard and Pro. Want a 14-day trial link or a demo slot this week?</p>
                      </div>
                      <div className="self-end bg-emerald-500 text-white text-[0.75rem] font-semibold px-4 py-2 rounded-full max-w-none">Sent · Read</div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mx-5 my-5 p-4 rounded-xl bg-white border border-slate-950/10 text-slate-400 text-[0.85rem]">
                      <span>Type a message…</span>
                      <button type="button" className="w-[34px] h-[34px] border-none rounded-lg grid place-items-center bg-amber-500/20 text-amber-800 cursor-default" tabIndex={-1}>
                        <IconSparkles />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem="WhatsApp CRM Software"
      />
    </>
  );
}
