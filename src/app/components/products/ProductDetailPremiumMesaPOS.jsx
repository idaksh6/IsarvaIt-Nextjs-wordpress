"use client";

import { useEffect, useRef, useState } from "react";
import Link from "../AppLink";
import ContactFormModal from "../ContactFormModal";

const IMG = "/products/mesa-pos";

const FAQS = [
  {
    q: "What is Restaurant POS Software?",
    a: "Restaurant POS Software is a restaurant management system for Saudi outlets — live floor plan, kitchen tickets, counter billing, inventory, online delivery orders, and ZATCA-minded VAT receipts in one place.",
  },
  {
    q: "Does it support ZATCA VAT invoicing?",
    a: "Yes. Receipts show 15% VAT clearly, and the billing flow is built for Saudi tax requirements with clear status for finance and bilingual guest-facing totals.",
  },
  {
    q: "Can I manage tables by dining area?",
    a: "Yes. Create custom areas such as Main Hall, Family, Outdoor, and VIP. Tables show live free, occupied, or billing status so hosts seat guests without walking the floor.",
  },
  {
    q: "Does it integrate with HungerStation and Jahez?",
    a: "Yes. Online and delivery orders from HungerStation, Jahez, Keeta, and other channels land on one Kanban board so you can accept, prep, and dispatch without re-typing orders.",
  },
  {
    q: "Is the interface available in Arabic and English?",
    a: "Yes. Every screen supports Arabic and English so your team and guests stay aligned across dine-in, takeaway, and delivery.",
  },
  {
    q: "Can I run multiple restaurant branches?",
    a: "Yes. Each branch keeps its own floor layout, menu, and reports under one account, so owners can track sales across outlets from a single system.",
  },
  {
    q: "What happens if Wi‑Fi drops during service?",
    a: "Offline mode queues orders when connectivity drops and syncs automatically when you reconnect — so service keeps moving on busy nights.",
  },
  {
    q: "Who is it designed for?",
    a: "Owners, floor managers, cashiers, waiters, and kitchen teams each get the screens their role needs — from cafés and QSR to fine dine, cloud kitchens, and multi-branch chains.",
  },
];

const SMART_NAV = [
  { id: "smart-floor", label: "Floor plan" },
  { id: "smart-billing", label: "Billing" },
  { id: "smart-inventory", label: "Inventory" },
  { id: "smart-reports", label: "Reports" },
  { id: "smart-online", label: "Online orders" },
];

const WHY_ITEMS = [
  {
    badge: "Floor view",
    badgeClass: "bg-[#e6f4ef] text-[#0f4d3f]",
    iconClass: "bg-gradient-to-br from-[#2aa35f] to-[#1f6b5c]",
    accent: "#1f6b5c",
    title: "See your dining room on one screen",
    desc: "Color-coded tables by area — Main Hall, Family, Outdoor, VIP — show free, occupied, or billing status so hosts seat guests without walking the floor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.45rem] h-[1.45rem]">
        <rect x="3" y="5" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="5" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="3" y="14" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="14" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    badge: "Fast service",
    badgeClass: "bg-[#fff7ed] text-[#c2410c]",
    iconClass: "bg-gradient-to-br from-[#f59e0b] to-[#d97706]",
    accent: "#d97706",
    title: "Faster orders, fewer mistakes",
    desc: "Open a table, add guest count, pick menu items, and fire to kitchen in a few taps — even when the dining room is full.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.45rem] h-[1.45rem]">
        <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    badge: "ZATCA ready",
    badgeClass: "bg-[#ecfdf3] text-[#15803d]",
    iconClass: "bg-gradient-to-br from-[#22c55e] to-[#15803d]",
    accent: "#15803d",
    title: "Built for Saudi restaurants",
    desc: "Arabic and English screens, 15% VAT on receipts, and ZATCA-minded invoicing so compliance does not slow down dinner service.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.45rem] h-[1.45rem]">
        <path d="M7 4h10l3 4v12H4V4h3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="m9 17 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const SMART_BLOCKS = [
  {
    id: "smart-floor",
    reverse: false,
    badge: "01 · Floor plan",
    badgeClass: "bg-[#1f6b5c] text-[#ecfdf5]",
    mediaAccent: "#1f6b5c",
    imageFit: "cover",
    imagePosition: "object-[center_42%]",
    title: "Live floor plan — know which tables are free, dining, or ready to pay",
    desc: "Step 1 of every dine-in service: open the floor view. Tables are grouped by dining area with color status — green free, amber occupied, rose billing — so hosts and managers never guess what is happening on the floor.",
    chips: [
      { label: "Free", className: "bg-[#dcfce7] text-[#166534]" },
      { label: "Occupied", className: "bg-[#ffedd5] text-[#c2410c]" },
      { label: "Billing", className: "bg-[#ffe4e6] text-[#be123c]" },
    ],
    points: [
      "Custom areas: Main Hall, Family, Outdoor, VIP — match your real layout",
      "Live status updates as guests are seated, served, and billed",
      "Tables lock while in use so two staff never open the same check",
    ],
    image: `${IMG}/feature-floor-tables.png`,
    alt: "Tablet showing restaurant floor plan with tables grouped by dining area",
  },
  {
    id: "smart-billing",
    reverse: true,
    badge: "02 · Billing",
    badgeClass: "bg-[#1d4ed8] text-[#eff6ff]",
    mediaAccent: "#1d4ed8",
    imageFit: "cover",
    title: "Counter billing — split checks, print receipts, VAT included",
    desc: "When guests are ready to leave, cashiers settle from the same order screen: full menu, split by guest or item, print the receipt, and show 15% VAT clearly on every total — ready for Saudi tax requirements.",
    chips: [
      { label: "Split bills", className: "bg-[#e6f4ef] text-[#0f4d3f]" },
      { label: "VAT 15%", className: "bg-[#e6f4ef] text-[#0f4d3f]" },
      { label: "Print receipt", className: "bg-[#e6f4ef] text-[#0f4d3f]" },
      { label: "QR menu", className: "bg-[#e6f4ef] text-[#0f4d3f]" },
    ],
    points: [
      "Order screen with categories, modifiers, and table actions",
      "Split bills by guest, item, or custom amount",
      "Printed receipt matches the on-screen total — no manual recalculation",
    ],
    image: `${IMG}/smart-billing-counter.jpg`,
    alt: "Restaurant POS counter with billing screen, receipt printer, and QR menu stand",
  },
  {
    id: "smart-inventory",
    reverse: false,
    badge: "03 · Inventory",
    badgeClass: "bg-[#c2410c] text-[#fff7ed]",
    mediaAccent: "#c2410c",
    imageFit: "cover",
    title: "Inventory — catch low stock before service runs out",
    desc: "Kitchen and back-office staff see ingredient levels in real time. Low and critical alerts flag items before you run out mid-shift — and vendor records help you reorder before the weekend rush.",
    chips: [
      { label: "In stock", className: "bg-[#dcfce7] text-[#166534]" },
      { label: "Low", className: "bg-[#ffedd5] text-[#c2410c]" },
      { label: "Critical", className: "bg-[#ffe4e6] text-[#be123c]" },
    ],
    points: [
      "Live count for every ingredient",
      "Alerts when stock drops below minimum",
      "Filter by category, outlet, or vendor",
    ],
    image: `${IMG}/smart-inventory-counter.jpg`,
    alt: "Restaurant POS counter with Stock Master inventory screen",
  },
  {
    id: "smart-reports",
    reverse: true,
    badge: "04 · Reports",
    badgeClass: "bg-[#15803d] text-[#ecfdf5]",
    mediaAccent: "#15803d",
    imageFit: "cover",
    title: "Sales reports — today’s numbers before you close the shift",
    desc: "Owners and managers see the same figures cashiers collected: daily sales, table covers, top-selling dishes, and hourly trends — ready for finance at day close.",
    chips: [
      { label: "Day sales", className: "bg-[#e6f4ef] text-[#0f4d3f]" },
      { label: "Covers", className: "bg-[#e6f4ef] text-[#0f4d3f]" },
      { label: "Top items", className: "bg-[#e6f4ef] text-[#0f4d3f]" },
    ],
    points: [
      "Sales and table turnover at a glance",
      "Hourly chart for the current shift",
      "Day-close ready for finance",
    ],
    image: `${IMG}/smart-reports.png`,
    alt: "Sales report dashboard with charts and shift totals",
  },
  {
    id: "smart-online",
    reverse: false,
    badge: "05 · Online orders",
    badgeClass: "bg-[#6d28d9] text-[#f5f3ff]",
    mediaAccent: "#6d28d9",
    imageFit: "cover",
    title: "Online & delivery orders — HungerStation, Jahez, Keeta in one board",
    desc: "Delivery and app orders land on a single Kanban: New → Kitchen → Ready → Out. Accept or reject channel orders in one tap — no re-typing into your restaurant POS.",
    chips: [
      { label: "New", className: "bg-[#ede9fe] text-[#6d28d9]" },
      { label: "Kitchen", className: "bg-[#ffedd5] text-[#c2410c]" },
      { label: "Ready", className: "bg-[#dcfce7] text-[#166534]" },
      { label: "Out", className: "bg-[#e6f4ef] text-[#0f4d3f]" },
    ],
    channels: [
      { label: "HungerStation", className: "bg-[#ffedd5] text-[#c2410c]" },
      { label: "Jahez", className: "bg-[#dcfce7] text-[#15803d]" },
      { label: "Keeta", className: "bg-[#fce7f3] text-[#be185d]" },
      { label: "The Chefz", className: "bg-[#ede9fe] text-[#6d28d9]" },
      { label: "Mrsool", className: "bg-[#dbeafe] text-[#1d4ed8]" },
    ],
    points: [
      "Accept or reject HungerStation, Jahez, Keeta, and other channel orders",
      "Track prep, pickup, and courier handoff on one screen",
      "Prepaid delivery totals sync to billing automatically",
    ],
    image: `${IMG}/smart-online-orders.jpg`,
    alt: "Tablet showing online delivery orders on a Kanban board",
  },
];

const EXTRAS = [
  {
    badge: "Kitchen",
    badgeClass: "bg-[#c2410c] text-[#fff7ed]",
    iconClass: "bg-gradient-to-br from-[#f59e0b] to-[#d97706]",
    title: "Kitchen display tickets",
    desc: "KOT tickets show table number, items, and fire time — kitchen stays calm at peak.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.35rem] h-[1.35rem]">
        <path d="M4 14h16M6 18h12M8 10h8l-1-4H9l-1 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    badge: "Payments",
    badgeClass: "bg-[#1d4ed8] text-[#eff6ff]",
    iconClass: "bg-gradient-to-br from-[#3b82f6] to-[#2563eb]",
    title: "Quick checkout",
    desc: "Collect payment and split bills from the floor — fewer steps at the counter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.35rem] h-[1.35rem]">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18M7 15h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    badge: "Branches",
    badgeClass: "bg-[#6d28d9] text-[#f5f3ff]",
    iconClass: "bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9]",
    title: "Multi-branch management",
    desc: "Each branch keeps its own floor layout, menu, and reports under one account.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.35rem] h-[1.35rem]">
        <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    badge: "ZATCA",
    badgeClass: "bg-[#15803d] text-[#ecfdf5]",
    iconClass: "bg-gradient-to-br from-[#22c55e] to-[#15803d]",
    title: "ZATCA VAT invoicing",
    desc: "Structured invoice flow with clear receipt status for Saudi tax compliance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.35rem] h-[1.35rem]">
        <path d="M7 4h10l3 4v12H4V4h3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    badge: "Roles",
    badgeClass: "bg-[#1f6b5c] text-[#ecfdf5]",
    iconClass: "bg-gradient-to-br from-[#64748b] to-[#475569]",
    title: "Staff roles & access",
    desc: "Cashiers, kitchen, and managers only see the screens their job requires.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.35rem] h-[1.35rem]">
        <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 19c.8-3 3.2-4.5 5.5-4.5S13.7 16 14.5 19M16.5 11.5h5M19 9v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    badge: "Offline",
    badgeClass: "bg-[#1f6b5c] text-[#ecfdf5]",
    iconClass: "bg-gradient-to-br from-[#06b6d4] to-[#0891b2]",
    title: "Offline mode",
    desc: "Orders queue when Wi‑Fi drops and sync automatically when you reconnect.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.35rem] h-[1.35rem]">
        <path d="M4 12a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7.5 12a4.5 4.5 0 0 1 9 0M12 16v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const HOW_STEPS = [
  {
    badge: "Step 1",
    badgeClass: "bg-[#e6f4ef] text-[#0f4d3f]",
    iconClass: "bg-gradient-to-br from-[#2aa35f] to-[#1f6b5c]",
    accent: "#1f6b5c",
    title: "Map your floor & dining areas",
    desc: "Create table layouts by zone — hosts know exactly where to seat each party.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.45rem] h-[1.45rem]">
        <rect x="3" y="5" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="5" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="3" y="14" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="14" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    badge: "Step 2",
    badgeClass: "bg-[#eff6ff] text-[#1d4ed8]",
    iconClass: "bg-gradient-to-br from-[#3b82f6] to-[#2563eb]",
    accent: "#2563eb",
    title: "Open the table & take the order",
    desc: "Add guest count, pick dishes from the menu, and send to kitchen from the floor view.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.45rem] h-[1.45rem]">
        <path d="M8 6h8M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 4h12a2 2 0 0 1 2 2v12l-3-2-3 2-3-2-3 2-3-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    badge: "Step 3",
    badgeClass: "bg-[#fff7ed] text-[#c2410c]",
    iconClass: "bg-gradient-to-br from-[#f59e0b] to-[#d97706]",
    accent: "#d97706",
    title: "Serve & update table status",
    desc: "Mark tables occupied or billing so hosts and cashiers always know what is next.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.45rem] h-[1.45rem]">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    badge: "Step 4",
    badgeClass: "bg-[#ecfdf3] text-[#15803d]",
    iconClass: "bg-gradient-to-br from-[#22c55e] to-[#15803d]",
    accent: "#15803d",
    title: "Settle the bill & free the table",
    desc: "Print the VAT receipt, close the check, and turn the table green for the next guests.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.45rem] h-[1.45rem]">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18M7 15h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="m9 12 1.5 1.5L13 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const WHO_CARDS = [
  {
    badge: "Owners",
    badgeClass: "bg-[#e6f4ef] text-[#0f4d3f]",
    iconClass: "bg-gradient-to-br from-[#2aa35f] to-[#1f6b5c]",
    accent: "#1f6b5c",
    title: "Restaurant owners",
    desc: "Track sales across branches, control staff access, and grow without adding more software.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.45rem] h-[1.45rem]">
        <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    badge: "Managers",
    badgeClass: "bg-[#eff6ff] text-[#1d4ed8]",
    iconClass: "bg-gradient-to-br from-[#3b82f6] to-[#2563eb]",
    accent: "#2563eb",
    title: "Floor managers",
    desc: "Monitor live table status by area and keep peak-hour seating under control.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.45rem] h-[1.45rem]">
        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 20c1.2-3.2 3.8-5 7-5s5.8 1.8 7 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    badge: "Front of house",
    badgeClass: "bg-[#fff7ed] text-[#c2410c]",
    iconClass: "bg-gradient-to-br from-[#f59e0b] to-[#d97706]",
    accent: "#d97706",
    title: "Cashiers & waiters",
    desc: "Simple order screens and clear bill totals — fewer errors when the line is long.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.45rem] h-[1.45rem]">
        <path d="M4 14h16M6 18h4M14 18h4M8 10h8l-1-4H9l-1 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    badge: "Kitchen",
    badgeClass: "bg-[#ecfdf3] text-[#15803d]",
    iconClass: "bg-gradient-to-br from-[#22c55e] to-[#15803d]",
    accent: "#15803d",
    title: "Kitchen teams",
    desc: "Readable KOT tickets with table and item details — calm pass even when full.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-[1.45rem] h-[1.45rem]">
        <path d="M4 14h16M6 18h12M8 10h8l-1-4H9l-1 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const OUTLETS = [
  { label: "Food courts & canteens", file: "outlet-food-court.jpg", alt: "Food court and canteen restaurant format" },
  { label: "Café", file: "outlet-cafe.jpg", alt: "Café and coffee shop POS system" },
  { label: "Fine dine", file: "outlet-fine-dine.jpg", alt: "Fine dining restaurant table service POS" },
  { label: "Bar & brewery", file: "outlet-bar.jpg", alt: "Bar and brewery restaurant POS billing" },
  { label: "Pizzeria", file: "outlet-pizza.jpg", alt: "Pizzeria restaurant order and kitchen POS" },
  { label: "QSR", file: "outlet-qsr.jpg", alt: "Quick service restaurant QSR counter POS" },
  { label: "Desserts", file: "outlet-desserts.jpg", alt: "Dessert shop and sweets outlet POS" },
  { label: "Large chains", file: "outlet-chains.jpg", alt: "Large restaurant chain multi-branch management" },
  { label: "Bakery", file: "outlet-bakery.jpg", alt: "Bakery shop inventory and billing POS" },
  { label: "Cloud kitchens", file: "outlet-cloud-kitchen.jpg", alt: "Cloud kitchen delivery order management POS" },
];

const ZATCA_POINTS = [
  {
    title: "Clear receipts for guests",
    desc: "Line items, VAT, and totals your cashier can explain in seconds at the counter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M7 4h10l3 4v12H4V4h3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "ZATCA invoice workflow",
    desc: "Settings and submission status built for Saudi VAT phases as you grow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="18" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Cleaner month-end close",
    desc: "Day-close totals from the till match what finance expects — less rework.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M5 19V5h9l5 5v9H5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 5v5h5M9 13h6M9 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function Reveal({ children, className = "", style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-550 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"
      } ${className}`}
      style={{ transitionDuration: "0.55s", ...style }}
    >
      {children}
    </div>
  );
}

function SectionHead({ eyebrow, title, children, compact = false, titleId }) {
  return (
    <div className={`max-w-[44rem] mx-auto text-center ${compact ? "mb-6" : "mb-10"}`}>
      <p className="m-0 mb-2 text-[0.78rem] font-bold tracking-[0.1em] uppercase text-[#1f6b5c]">
        {eyebrow}
      </p>
      {compact ? (
        <h3 id={titleId} className="m-0 text-[clamp(1.35rem,2.2vw,1.65rem)] font-bold tracking-tight text-[#12201c]">
          {title}
        </h3>
      ) : (
        <h2 id={titleId} className="m-0 text-[clamp(1.8rem,3.2vw,2.45rem)] font-bold tracking-tight leading-[1.2] text-[#12201c]">
          {title}
        </h2>
      )}
      {children && (
        <p className={`m-0 mx-auto text-[#5f7169] ${compact ? "mt-2 text-base" : "mt-3.5 text-[1.05rem]"}`}>
          {children}
        </p>
      )}
    </div>
  );
}

function SmartMedia({ block }) {
  const accent = block.mediaAccent || "#1f6b5c";
  const fitClass =
    block.imageFit === "contain"
      ? "object-contain p-2 sm:p-3"
      : `object-cover ${block.imagePosition || "object-center"}`;

  return (
    <figure className="relative m-0 group">
      <div
        className="pointer-events-none absolute -inset-2 sm:-inset-3 rounded-[28px] opacity-80"
        style={{
          background: `radial-gradient(120% 90% at 80% 10%, ${accent}22, transparent 55%), linear-gradient(145deg, #ffffffcc 0%, #eef4f1 55%, ${accent}14 100%)`,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-1 left-6 right-6 h-8 rounded-full blur-xl opacity-45"
        style={{ background: accent }}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[22px] border border-white/90 bg-[#0b1f1a] shadow-[0_22px_50px_rgba(18,32,28,0.14)] ring-1 ring-[rgba(15,42,31,0.06)] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_28px_60px_rgba(18,32,28,0.18)]">
        <div
          className="absolute inset-x-0 top-0 z-[1] h-1"
          style={{ background: `linear-gradient(90deg, ${accent}, ${accent}88)` }}
          aria-hidden="true"
        />
        <div className="relative aspect-[5/4] sm:aspect-[4/3]">
          <img
            src={block.image}
            alt={block.alt}
            width={1024}
            height={768}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full ${fitClass} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
          />
        </div>
      </div>
    </figure>
  );
}

export default function ProductDetailPremiumMesaPOS({ product, relatedProducts = [], allProducts = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSmart, setActiveSmart] = useState("smart-floor");
  const [openFaq, setOpenFaq] = useState(null);
  const scrollingToRef = useRef(null);

  useEffect(() => {
    const sections = SMART_NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        if (scrollingToRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSmart(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.2, 0.45] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const scrollToSmartSection = (id, tabEl) => {
    const el = document.getElementById(id);
    if (!el) return;

    setActiveSmart(id);
    scrollingToRef.current = id;

    if (tabEl?.scrollIntoView) {
      tabEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    const headerOffset = isMobile ? 168 : 176;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

    window.setTimeout(() => {
      if (scrollingToRef.current === id) scrollingToRef.current = null;
    }, 900);
  };

  return (
    <>
      <style>{`
        @keyframes mesaHeroZoom {
          from { transform: scale(1.02); }
          to { transform: scale(1.08); }
        }
        .mesa-hero-photo {
          object-position: 82% center;
          transform-origin: 82% center;
          animation: mesaHeroZoom 18s ease-in-out infinite alternate;
        }
        @media (max-width: 960px) {
          .mesa-hero-photo { object-position: 88% center; }
        }
        @media (max-width: 760px) {
          .mesa-hero-photo { object-position: 92% 30%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .mesa-hero-photo { animation: none !important; }
        }
      `}</style>

      <div
        className="bg-[#f4f7f5] text-[#12201c] font-sans"
        style={{
          backgroundImage:
            "radial-gradient(900px 420px at 100% -10%, rgba(31,107,92,0.12), transparent 55%), radial-gradient(700px 360px at 0% 20%, rgba(22,122,67,0.08), transparent 50%), linear-gradient(180deg, #f4f7f5 0%, #e8eee9 100%)",
        }}
      >
        {/* Hero */}
        <section className="relative min-h-[min(88vh,820px)] flex items-center overflow-hidden text-white" aria-labelledby="mesa-hero-title">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img
              className="mesa-hero-photo w-full h-full object-cover"
              src={`${IMG}/hero-clean.png`}
              alt="Waiter using restaurant POS tablet with live floor plan and table status on screen"
              width={1600}
              height={900}
            />
            <div
              className="absolute inset-0 z-[1] max-[760px]:bg-[linear-gradient(180deg,rgba(8,28,22,0.55)_0%,rgba(11,61,46,0.72)_42%,rgba(8,28,22,0.88)_100%)]"
              style={{
                background:
                  "linear-gradient(100deg, rgba(8,28,22,0.94) 0%, rgba(11,61,46,0.88) 28%, rgba(11,61,46,0.45) 46%, rgba(11,61,46,0.12) 58%, transparent 72%)",
              }}
            />
          </div>

          <div className="relative z-[2] w-full max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-12 lg:pb-16">
            <div className="max-w-[32rem] mx-auto md:mx-0 text-center md:text-left">
              <p className="m-0 mb-3.5 font-display text-[clamp(2rem,5.5vw,3.35rem)] font-bold tracking-tight leading-[1.05] max-w-[14ch] mx-auto md:mx-0 drop-shadow-[0_8px_28px_rgba(0,0,0,0.28)]">
                Restaurant POS Software
              </p>
              <h1
                id="mesa-hero-title"
                className="m-0 text-white text-[clamp(1.45rem,3vw,2rem)] font-semibold leading-[1.28] tracking-tight max-w-[18ch] mx-auto md:mx-0 drop-shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
              >
                Restaurant POS software that runs your floor — from seating guests to printing the bill
              </h1>
              <p className="mt-4 mb-0 text-[1.08rem] leading-[1.55] opacity-95 max-w-[32rem] mx-auto md:mx-0">
                One system for Saudi restaurants: see every table by area, send orders to the kitchen,
                accept HungerStation and Jahez deliveries, track stock, and print VAT-ready receipts —
                without switching between five different apps.
              </p>
              <div className="flex flex-wrap gap-4 mt-6 items-end justify-center md:justify-start">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="press-illusion-btn-orange bg-orange-500 text-white w-fit font-bold !px-8 !py-3 text-base items-center space-x-2 inline-flex cursor-pointer"
                >
                  <span>Book a demo</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
                <a
                  href="#smart-pos"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("smart-pos");
                    if (!el) return;
                    const top = el.getBoundingClientRect().top + window.pageYOffset - 96;
                    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
                  }}
                  className="press-illusion-btn-white bg-white text-gray-800 w-fit font-bold !px-8 !py-3 text-base items-center inline-flex no-underline cursor-pointer"
                >
                  See how it works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section
          id="why"
          className="py-12 lg:py-16"
          aria-labelledby="why-title"
        >
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <SectionHead eyebrow="Why restaurants choose this POS" title="Less chaos on the floor — more control for your team">
                On a busy night, your staff need one clear picture: which tables are free, which orders
                are in the kitchen, and which checks are ready to pay. Owners and managers set up areas,
                menus, and roles once — then everyone works from the same live data.
              </SectionHead>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY_ITEMS.map((item, index) => {
                const isOrphanOnTablet =
                  WHY_ITEMS.length % 2 === 1 && index === WHY_ITEMS.length - 1;
                return (
                  <Reveal
                    key={item.title}
                    className={
                      isOrphanOnTablet
                        ? "md:max-lg:col-span-2 md:max-lg:flex md:max-lg:justify-center"
                        : undefined
                    }
                  >
                    <article
                      className={`relative flex flex-col items-center text-center p-6 rounded-[20px] bg-white border border-[rgba(15,42,31,0.07)] shadow-[0_12px_32px_rgba(18,32,28,0.06)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(18,32,28,0.1)] transition-all duration-200 h-full ${
                        isOrphanOnTablet
                          ? "md:max-lg:w-full md:max-lg:max-w-[calc(50%-0.625rem)]"
                          : ""
                      }`}
                      style={{ borderTop: `4px solid ${item.accent}` }}
                    >
                      <span className={`w-11 h-11 rounded-[14px] grid place-items-center mb-3.5 text-white ${item.iconClass}`}>
                        {item.icon}
                      </span>
                      <span className={`inline-flex mb-2 px-2.5 py-1 rounded-full text-[0.68rem] font-extrabold tracking-wider uppercase ${item.badgeClass}`}>
                        {item.badge}
                      </span>
                      <h3 className="m-0 mb-2 text-[1.2rem] font-bold tracking-tight text-[#12201c]">{item.title}</h3>
                      <p className="m-0 text-[#5f7169] text-[0.96rem] leading-normal">{item.desc}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Smart POS features */}
        <section
          id="smart-pos"
          className="relative py-12 lg:py-16"
          style={{
            backgroundImage:
              "radial-gradient(1100px 520px at 12% -8%, rgba(42,163,95,0.14), transparent 52%), radial-gradient(900px 480px at 88% 12%, rgba(31,107,92,0.12), transparent 50%), radial-gradient(760px 420px at 50% 105%, rgba(22,122,67,0.1), transparent 55%), linear-gradient(180deg, #e8f2ed 0%, #dfece6 42%, #e9f1ec 100%)",
          }}
          aria-labelledby="smart-pos-title"
        >
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(31,107,92,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(31,107,92,0.045) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "linear-gradient(180deg, rgba(0,0,0,0.4), transparent 94%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-[1] max-w-7xl mx-auto px-6">
            <Reveal>
              <SectionHead eyebrow="Restaurant POS features" title="One connected system — floor, kitchen, billing, stock, and reports">
                Each module below is part of the same service flow: seat a guest on the floor plan,
                send the order to kitchen, settle at the counter, check stock, and review sales at
                close. No duplicate entry between screens.
              </SectionHead>
            </Reveal>
          </div>

          {/* Sticky module tabs — full-width bar on mobile; centered pill on desktop */}
          <div className="sticky top-[88px] sm:top-[102px] z-[60] mb-8 lg:mb-10 w-full bg-white/95 backdrop-blur-md border-y border-gray-100 shadow-sm lg:bg-transparent lg:backdrop-blur-none lg:border-0 lg:shadow-none">
            <div
              className="max-w-7xl mx-auto px-4 sm:px-6 py-2 lg:py-0 overflow-x-auto no-scrollbar w-full lg:flex lg:justify-center"
              style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
            >
              <nav
                className="flex items-center justify-start lg:justify-center gap-1 lg:gap-1.5 whitespace-nowrap min-w-min mx-auto lg:mx-0 lg:flex-wrap lg:bg-white lg:border lg:border-[#d5ddd8] lg:shadow-[0_10px_28px_rgba(18,32,28,0.08)] lg:rounded-full lg:p-1.5"
                aria-label="POS modules"
              >
                {SMART_NAV.map((item) => {
                  const isActive = activeSmart === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={(e) => scrollToSmartSection(item.id, e.currentTarget)}
                      className={`relative shrink-0 px-4 sm:px-5 py-2.5 rounded-full font-bold text-[12px] sm:text-[0.88rem] tracking-wider transition-all duration-300 border cursor-pointer ${
                        isActive
                          ? "text-white border-transparent bg-gradient-to-r from-[#1f6b5c] to-[#167a43] shadow-[0_4px_14px_rgba(31,107,92,0.3)]"
                          : "text-gray-500 border-transparent hover:text-[#0f4d3f] hover:bg-[#e6f4ef] hover:border-[#cfe0d8]"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className="relative z-[1] max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-12 lg:gap-14">
              {SMART_BLOCKS.map((block) => (
                <Reveal key={block.id}>
                  <article
                    id={block.id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center scroll-mt-[9.5rem] sm:scroll-mt-[10.5rem] ${
                      block.reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[0.72rem] font-extrabold tracking-wider uppercase ${block.badgeClass}`}>
                        {block.badge}
                      </span>
                      <h3 className="mt-2.5 mb-0 text-[clamp(1.35rem,2.4vw,1.75rem)] font-bold tracking-tight leading-[1.22] text-[#0f4d3f]">
                        {block.title}
                      </h3>
                      <p className="mt-3 mb-0 text-[#5f7169] text-base leading-[1.55] max-w-[34rem]">{block.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                        {block.chips.map((chip) => (
                          <span key={chip.label} className={`px-2.5 py-1 rounded-full text-[0.75rem] font-bold ${chip.className}`}>
                            {chip.label}
                          </span>
                        ))}
                      </div>
                      {block.channels && (
                        <div className="flex flex-wrap gap-2 mt-2.5 justify-center lg:justify-start">
                          {block.channels.map((ch) => (
                            <span key={ch.label} className={`px-2.5 py-1 rounded-full text-[0.68rem] font-extrabold ${ch.className}`}>
                              {ch.label}
                            </span>
                          ))}
                        </div>
                      )}
                      <ul className="mt-4 mb-0 p-0 list-none grid gap-2 w-full max-w-[34rem] text-left">
                        {block.points.map((point) => (
                          <li key={point} className="relative pl-5 text-[0.94rem] font-semibold text-[#2a3b35]">
                            <span className="absolute left-0 top-0 text-[0.82rem] font-extrabold text-[#167a43]">✓</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <SmartMedia block={block} />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Included · Omni · ZATCA — mint band so it separates from white How it works */}
        <section className="py-12 lg:py-16 bg-[#eef4f1]" aria-labelledby="extras-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <Reveal>
              <SectionHead
                compact
                titleId="extras-title"
                eyebrow="Included with every plan"
                title="Included in every plan — no extra modules to buy"
              >
                Kitchen tickets, payments, multi-branch setup, ZATCA invoicing, staff roles, and
                offline sync are built in — so your floor, kitchen, and back office stay connected.
              </SectionHead>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.15rem]">
                {EXTRAS.map((extra) => (
                  <article
                    key={extra.title}
                    className="flex flex-col items-center text-center p-5 rounded-[18px] bg-white border border-[rgba(31,107,92,0.1)] shadow-[0_10px_28px_rgba(18,32,28,0.06)] hover:-translate-y-1 hover:border-[rgba(31,107,92,0.2)] hover:shadow-[0_16px_36px_rgba(18,32,28,0.1)] transition-all duration-200"
                  >
                    <span className={`w-[2.65rem] h-[2.65rem] rounded-[14px] grid place-items-center mb-3 text-white ${extra.iconClass}`}>
                      {extra.icon}
                    </span>
                    <span className={`inline-flex mb-2 px-3 py-1 rounded-full text-[0.72rem] font-extrabold tracking-wider uppercase ${extra.badgeClass}`}>
                      {extra.badge}
                    </span>
                    <h4 className="m-0 text-[1.05rem] font-bold text-[#12201c]">{extra.title}</h4>
                    <p className="mt-1.5 mb-0 text-[0.9rem] leading-snug text-[#5f7169]">{extra.desc}</p>
                  </article>
                ))}
              </div>
            </Reveal>

            <Reveal
              className="mt-8 flex flex-col md:flex-row flex-wrap items-center justify-between gap-5 p-6 rounded-[20px] text-[#f3fbf7] border border-white/10 shadow-[0_18px_40px_rgba(11,61,46,0.28)] text-center md:text-left"
              style={{
                background:
                  "linear-gradient(125deg, rgba(255,255,255,0.12), transparent 42%), linear-gradient(135deg, #0a3629 0%, #1f6b5c 50%, #16804a 100%)",
              }}
            >
              <div className="w-full md:w-auto">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[0.72rem] font-extrabold tracking-wider uppercase bg-white/18 text-[#ecfdf5] border border-white/25">
                  Omni-channel · Bilingual
                </span>
                <p className="mt-2 mb-0 text-base leading-normal opacity-94 max-w-[32rem] mx-auto md:mx-0">
                  Dine-in, takeaway, delivery, and online — with Arabic and English on every screen,
                  so your whole team and your guests stay aligned.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                {["HungerStation", "Jahez", "Keeta", "Dine-in", "Takeaway", "Delivery", "Online"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-[0.75rem] font-bold bg-white/14 border border-white/22 text-[#ecfdf5]">
                    {tag}
                  </span>
                ))}
                <span className="px-3 py-1.5 rounded-full text-[0.75rem] font-extrabold bg-[rgba(183,228,212,0.25)] border border-white/22 text-[#ecfdf5]">
                  EN · عربي
                </span>
              </div>
            </Reveal>

            <div id="zatca" className="mt-12 scroll-mt-[10.5rem] lg:scroll-mt-[7.5rem] w-full" aria-labelledby="zatca-title">
              <Reveal className="w-full">
                <div
                  className="box-border w-full max-w-full grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch p-4 sm:p-6 lg:p-9 rounded-[20px] sm:rounded-[24px] text-[#f3fbf7] border border-white/10 shadow-[0_20px_48px_rgba(11,61,46,0.3)] overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(600px 320px at 100% 0%, rgba(42,163,95,0.22), transparent 55%), linear-gradient(135deg, #0a3629 0%, #1f6b5c 52%, #167a43 100%)",
                  }}
                >
                  <div className="min-w-0 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <span className="inline-flex items-center gap-1.5 mb-3.5 px-3 py-1.5 rounded-full text-[0.72rem] font-extrabold tracking-wider uppercase text-[#ecfdf5] bg-white/14 border border-[rgba(183,228,212,0.35)]">
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#7ee0b4]" aria-hidden="true">
                        <path d="M12 3 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Compliance · ZATCA
                    </span>
                    <h2 id="zatca-title" className="m-0 text-white text-[clamp(1.45rem,4vw,2.25rem)] font-bold tracking-tight leading-[1.2]">
                      ZATCA-ready billing that connects to your counter
                    </h2>
                    <p className="mt-3.5 mb-0 opacity-92 max-w-[34rem] text-[0.95rem] sm:text-[1.02rem] leading-[1.55]">
                      Billing from the POS links directly to Saudi invoicing rules: 15% VAT on every
                      receipt, clear status for finance, and Arabic and English guest-facing totals —
                      so front-of-house and back-office stay on the same numbers.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-5 justify-center lg:justify-start w-full">
                      {["VAT 15%", "Phase-minded", "EN · عربي", "Clear receipt status"].map((chip) => (
                        <span key={chip} className="px-2.5 py-1 rounded-full text-[0.74rem] font-bold text-[#ecfdf5] bg-white/12 border border-white/18">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="m-0 p-0 list-none grid gap-3 min-w-0 w-full">
                    {ZATCA_POINTS.map((point) => (
                      <li
                        key={point.title}
                        className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/10 border border-white/16 backdrop-blur-sm hover:bg-white/14 transition-all min-w-0 text-center sm:text-left"
                      >
                        <span className="shrink-0 w-10 h-10 rounded-xl grid place-items-center bg-[rgba(126,224,180,0.18)] border border-[rgba(126,224,180,0.3)] text-[#b7e4d4]">
                          {point.icon}
                        </span>
                        <div className="min-w-0 w-full sm:flex-1">
                          <strong className="block font-display text-[0.95rem] sm:text-[1.05rem] font-bold mb-1 text-white leading-snug">
                            {point.title}
                          </strong>
                          <span className="block text-[0.85rem] sm:text-[0.9rem] leading-snug opacity-88">
                            {point.desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-12 lg:py-16 bg-white" aria-labelledby="how-title">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <SectionHead eyebrow="How it works" title="Your daily service flow in four simple steps">
                This is the same path your team runs every shift — from the floor plan you saw above
                to the printed receipt at the counter. Setup once, then repeat every service.
              </SectionHead>
            </Reveal>

            <ol className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.15rem]">
              {HOW_STEPS.map((step) => (
                <Reveal key={step.title}>
                  <li
                    className="relative flex flex-col items-center text-center p-6 rounded-[20px] bg-[#f8fbf9] border border-[rgba(15,42,31,0.07)] shadow-[0_12px_32px_rgba(18,32,28,0.06)] overflow-hidden hover:-translate-y-1 transition-all h-full"
                    style={{ borderTop: `4px solid ${step.accent}` }}
                  >
                    <span className={`w-11 h-11 rounded-[14px] grid place-items-center mb-3.5 text-white ${step.iconClass}`}>
                      {step.icon}
                    </span>
                    <span className={`inline-flex mb-2 px-2.5 py-1 rounded-full text-[0.68rem] font-extrabold tracking-wider uppercase ${step.badgeClass}`}>
                      {step.badge}
                    </span>
                    <h3 className="m-0 text-[1.08rem] font-bold tracking-tight text-[#12201c]">{step.title}</h3>
                    <p className="mt-2 mb-0 text-[#5f7169] text-[0.92rem] leading-normal">{step.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Who */}
        <section
          id="who"
          className="py-12 lg:py-16"
          aria-labelledby="who-title"
        >
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <SectionHead eyebrow="Who it’s for" title="Every role on your team gets the right screen">
                The four steps above touch different people — owners track results, managers run the
                floor, waiters take orders, and kitchen fires dishes. Each role sees only what they need.
              </SectionHead>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.15rem]">
              {WHO_CARDS.map((card) => (
                <Reveal key={card.title}>
                  <article
                    className="relative flex flex-col items-center text-center p-6 rounded-[20px] bg-white border border-[rgba(15,42,31,0.07)] shadow-[0_12px_32px_rgba(18,32,28,0.06)] overflow-hidden hover:-translate-y-1 transition-all h-full"
                    style={{ borderTop: `4px solid ${card.accent}` }}
                  >
                    <span className={`w-11 h-11 rounded-[14px] grid place-items-center mb-3.5 text-white ${card.iconClass}`}>
                      {card.icon}
                    </span>
                    <span className={`inline-flex mb-2 px-2.5 py-1 rounded-full text-[0.68rem] font-extrabold tracking-wider uppercase ${card.badgeClass}`}>
                      {card.badge}
                    </span>
                    <h3 className="m-0 text-[1.08rem] font-bold tracking-tight text-[#12201c]">{card.title}</h3>
                    <p className="mt-2 mb-0 text-[#5f7169] text-[0.92rem] leading-normal">{card.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Outlets */}
        <section id="outlets" className="py-12 lg:py-16 bg-white" aria-labelledby="outlets-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <Reveal>
              <SectionHead eyebrow="Outlet types" title="Built for every type of food business">
                Whether you run a single café counter or a multi-branch chain, the same restaurant
                management system adapts to your format — floor plan, counter billing, or delivery-only
                kitchen.
              </SectionHead>
            </Reveal>

            <ul className="m-0 p-0 list-none grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 w-full items-stretch">
              {OUTLETS.map((outlet) => (
                <Reveal key={outlet.label} className="min-w-0 h-full">
                  <li className="h-full flex flex-col items-center justify-start gap-2.5 px-2.5 sm:px-3 py-4 text-center rounded-[20px] bg-[#f8fbf9] border border-[rgba(15,42,31,0.07)] shadow-[0_10px_28px_rgba(18,32,28,0.05)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(18,32,28,0.1)] hover:border-[rgba(31,107,92,0.18)] transition-all group">
                    <span className="w-[4.25rem] h-[4.25rem] shrink-0 rounded-full grid place-items-center overflow-hidden bg-[#eef4f1] border-[3px] border-white shadow-[0_0_0_1px_rgba(15,42,31,0.08),0_8px_18px_rgba(18,32,28,0.12)]">
                      <img
                        src={`${IMG}/outlets/${outlet.file}`}
                        alt={outlet.alt}
                        width={192}
                        height={192}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </span>
                    <span className="font-display text-[0.9rem] sm:text-[0.98rem] font-bold tracking-tight leading-snug text-[#12201c] px-0.5 w-full">
                      {outlet.label}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="py-12 lg:py-16"
          aria-labelledby="faq-title"
        >
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <SectionHead eyebrow="FAQ" title="Frequently asked questions">
                Clear answers about floor management, ZATCA billing, delivery channels, and multi-branch setup.
              </SectionHead>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {FAQS.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <Reveal key={item.q}>
                    <div
                      className={`group bg-white rounded-[1.25rem] border shadow-[0_10px_28px_rgba(18,32,28,0.06)] transition-all duration-300 overflow-hidden cursor-pointer h-full ${
                        isOpen
                          ? "border-[rgba(31,107,92,0.28)] shadow-[0_16px_36px_rgba(31,107,92,0.14)]"
                          : "border-[rgba(15,42,31,0.07)] hover:border-[rgba(31,107,92,0.18)] hover:shadow-[0_14px_32px_rgba(18,32,28,0.1)]"
                      }`}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                    >
                      <div className="flex justify-between items-center px-5 lg:px-6 py-4 lg:py-5 min-h-[88px] select-none">
                        <h3 className={`pr-4 text-base lg:text-[1.05rem] font-bold leading-snug m-0 transition-colors ${isOpen ? "text-[#0f4d3f]" : "text-[#12201c]"}`}>
                          {item.q}
                        </h3>
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isOpen
                              ? "rotate-45 bg-gradient-to-br from-[#2aa35f] to-[#167a43] text-white"
                              : "bg-[#e6f4ef] text-[#1f6b5c] group-hover:scale-110"
                          }`}
                        >
                          <span className="text-xl leading-none font-bold">+</span>
                        </div>
                      </div>
                      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="overflow-hidden">
                          <div className="px-5 lg:px-6 pb-5 pt-0">
                            <p className="m-0 text-[#5f7169] font-medium leading-relaxed text-[15px] border-t border-[rgba(31,107,92,0.1)] pt-4">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="press-illusion-btn-orange bg-orange-500 text-white w-fit font-bold px-8 py-4 text-base items-center space-x-2 inline-flex cursor-pointer mx-auto"
              >
                <span>Still have questions? Book a demo</span>
              </button>
            </Reveal>
          </div>
        </section>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="py-14 lg:py-16 bg-gradient-to-b from-emerald-50 via-teal-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-10">
                <h2 className="mb-4 capitalize">Related Products</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Explore other solutions that might interest you
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((related) => (
                  <Link key={related.slug} href={`/product/${related.slug}`} prefetch={false} className="group">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${related.color || "from-emerald-500 to-teal-600"} opacity-90 group-hover:opacity-100 transition-opacity`} />
                      <div className="relative p-8 h-full flex flex-col">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg mb-6 border border-white/30 text-4xl">
                          {related.icon}
                        </div>
                        <h3 className="text-white mb-4">{related.title}</h3>
                        <p className="text-white/90 leading-relaxed mb-6 flex-grow">{related.shortDescription}</p>
                        <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                          <span>Learn More</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem={product?.title || "Restaurant POS Software"}
        allItems={allProducts}
      />
    </>
  );
}
