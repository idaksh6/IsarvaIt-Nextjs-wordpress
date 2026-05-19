"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";

const PRIMARY_COLOR = "#0EA5E9"; // Sky Blue

function ThemeSlider({ onImageClick }) {
  const themes = [
    { name: "Empire Emerald", img: "Vibrant-color-3.jpg", color: "from-emerald-500/20 to-teal-500/20" },
    { name: "Sunset Glow", img: "Vibrant-color-2.jpg", color: "from-orange-500/20 to-rose-500/20" },
    { name: "Vibrant Violet", img: "Vibrant-color-1.jpg", color: "from-violet-500/20 to-fuchsia-500/20" },
  ];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev === 0 ? themes.length - 1 : prev - 1));
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === themes.length - 1 ? 0 : prev + 1));
  };

  // Auto Slide Effect
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const variants = {
    initial: (direction) => ({
      opacity: 0,
      scale: 0.9,
      x: direction > 0 ? 150 : -150,
      filter: "blur(8px)",
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (direction) => ({
      opacity: 0,
      scale: 1.05,
      x: direction > 0 ? -150 : 150,
      filter: "blur(8px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <div className="relative w-full group/slider">
      {/* Image Container */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[1rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white bg-white">
        {/* Background Morphing Gradient */}
        <motion.div
          animate={{
            background: `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.05) 100%)`,
          }}
          className={`absolute inset-0 z-10 pointer-events-none transition-all duration-1000 bg-gradient-to-br ${themes[current].color}`}
        />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full relative cursor-zoom-in"
            onClick={() => onImageClick(`/products/billsoft/${themes[current].img}`)}
          >
            <img
              src={`/products/billsoft/${themes[current].img}`}
              alt={themes[current].name}
              className="w-full h-full object-cover"
            />
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* Popup Indicator Icon */}
            <div className="absolute top-6 right-6 z-50 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-2xl border border-white/30 text-white flex items-center justify-center shadow-2xl">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Refined Navigation - Below Image */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="w-10 h-10 rounded-full bg-white border border-gray-100 text-gray-900 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all duration-300 shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {themes.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-sky-600 shadow-[0_0_15px_rgba(14,165,233,0.5)]" : "w-1.5 bg-gray-200"}`}
            />
          ))}
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="w-10 h-10 rounded-full bg-white border border-gray-100 text-gray-900 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all duration-300 shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

const TABS = [
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "sales", label: "Sales Invoice", icon: "💰" },
  { id: "purchase", label: "Purchase Invoice", icon: "🛒" },
  { id: "quotation", label: "Quotation", icon: "📄" },
  { id: "payments", label: "Payment In & Pay Out", icon: "💸" },
  { id: "proforma", label: "Proforma Invoices", icon: "📝" },
  { id: "expenses", label: "Expenses", icon: "📉" },
  { id: "parties", label: "Parties", icon: "👥" },
  { id: "products", label: "Products", icon: "📦" },
  { id: "warehouse", label: "Warehouse & Stock Transfer", icon: "🏭" },
  { id: "branch", label: "Multi Branch Concept", icon: "🏢" },
  { id: "financial", label: "Financial Years", icon: "📅" },
];

const TAB_CONTENT = {
  "dashboard": {
    title: "Smart Business Dashboard",
    subtitle: "Real-time AI insights for your business",
    description: "Get a bird’s-eye view of your business performance with real-time AI insights. The intelligent analytics section helps you understand your business performance with projected settlement values, AI-powered revenue insights, yearly revenue overview graphs, recent activity tracking, and top-selling product analysis. Key business statistics such as total revenue, active users, conversion rates, and average response time are also displayed clearly so you can monitor business growth at a glance.",
    image: "/products/billsoft/Dashboard.jpg",
    features: [
      "Quick Actions for Invoices",
      "Neural Intelligence Revenue Predictions",
      "Real-time AI Performance Tracking",
      "Detailed Activity Logs",
      "Top-Selling Product Analysis",
      "Conversion Rate Insights"
    ]
  },
  "sales": {
    title: "Professional Sales Invoices",
    subtitle: "Smooth and flexible billing workflow",
    description: "Create professional sales invoices quickly with a smooth and flexible workflow. Sales numbers are automatically generated, and you can select existing customers or create new customers instantly while creating the invoice. Products can be selected from your catalog or added on the spot. The system supports tax inclusive and exclusive pricing, GST configuration, warehouse selection, discounts before or after tax, item-wise discounts, additional charges, and payment adjustments.",
    image: "/products/billsoft/Sales-invoice.jpg",
    features: [
      "Auto-Generated Sales Numbers",
      "Instant Customer & Product Creation",
      "GST & Tax Configuration",
      "Item-wise & Overall Discounts",
      "Payment Adjustments & Notes",
      "Multiple Print Templates"
    ]
  },
  "purchase": {
    title: "Vendor Purchase Management",
    subtitle: "Organized records and outstanding dues",
    description: "Manage vendor purchases with the same smooth workflow used in Sales Invoices. Create purchase bills by selecting existing vendors or adding new vendors instantly during invoice creation. Add products, taxes, warehouse details, discounts, additional charges, payment details, notes, and signatures with full flexibility. The system helps you maintain organized purchase records, outstanding dues, and payment tracking while keeping inventory and accounts updated automatically.",
    image: "/products/billsoft/Purchase-invoice.jpg",
    features: [
      "Instant Vendor Creation",
      "Warehouse-wise Stock Entry",
      "Outstanding Due Tracking",
      "Automated Inventory Updates",
      "Additional Charges Management",
      "Professional Print Formats"
    ]
  },
  "quotation": {
    title: "Detailed Quotations",
    subtitle: "Convert estimations into invoices instantly",
    description: "Create detailed quotations for customers, vendors, or suppliers with flexible pricing and discount options. Quotations can be generated using existing party details or by creating new entries instantly. Add products, additional charges, item-wise discounts, overall discounts before or after tax, and include notes and signatures for professional presentation. When finalized, quotations can be directly converted into Sales Invoices or Purchase Invoices without re-entering data.",
    image: "/products/billsoft/Quotation.jpg",
    features: [
      "Flexible Pricing & Discounts",
      "One-Click Invoice Conversion",
      "Estimated Value Insights",
      "Note & Signature Inclusion",
      "Item-wise Discount Control",
      "Average Estimation Performance"
    ]
  },
  "payments": {
    title: "Payment In & Payment Out",
    subtitle: "Accurate tracking of every transaction",
    description: "Track all incoming and outgoing payments accurately with dedicated modules. Payment In helps manage customer payment collections with due allocation against pending invoices, while Payment Out ensures accurate vendor payout tracking and complete history management. Receipts can be created by selecting customers, allocating outstanding dues, and recording payment details for organized collection tracking.",
    image: "/products/billsoft/Payment-in.jpg",
    features: [
      "Due Allocation Against Invoices",
      "Payment Mode & Reference Tracking",
      "Customer Receipt Generation",
      "Vendor Payout Management",
      "Complete Payout History",
      "Organized Collection Insights"
    ]
  },
  "proforma": {
    title: "Proforma Invoices",
    subtitle: "Formal pre-invoices for deal confirmation",
    description: "Proforma Invoices act as formal pre-invoices shared before a sale or purchase is finalized. They help businesses present estimated billing details professionally before confirming the transaction. You can create Proforma Invoices for both sales and purchases by selecting customers or vendors, adding products, taxes, discounts, and signatures. Once approved, they can be directly converted into Sales or Purchase Invoices.",
    image: "/products/billsoft/Proforma-Invoice.jpg",
    features: [
      "Pre-billing Presentation",
      "Sales & Purchase Support",
      "Direct Conversion to Invoice",
      "Terms & Notes Inclusion",
      "Professional Sharing Templates",
      "Connected Workflow Integration"
    ]
  },
  "expenses": {
    title: "Daily Expense Tracking",
    subtitle: "Organized spending records by category",
    description: "Manage daily business expenses with proper categorization and tracking. Record details such as expense type, category, invoice references, payment mode, and additional notes. The manage page provides a clear summary of total debit/credit amounts and expense tracking by date range. Expenses are maintained branch-wise, making it easier to manage accounts for multiple business locations.",
    image: "/products/billsoft/Manage-expense.jpg",
    features: [
      "Categorized Expense Tracking",
      "Debit & Credit Summaries",
      "Branch-wise Accounting",
      "Multi-expense Entry Support",
      "Printable Expense Reports",
      "Date-range Spending Analysis"
    ]
  },
  "parties": {
    title: "Centralized Party Management",
    subtitle: "Complete customer and vendor profiles",
    description: "Manage both customers and vendors in one centralized location. Store complete business relationship details including contact information, GSTIN, addresses, opening balances, and multiple bank accounts. You can monitor transaction history, running balances, and generate detailed reports whenever needed including ledger statements from opening to closing balance.",
    image: "/products/billsoft/Parties-module.jpg",
    features: [
      "GSTIN & Address Management",
      "Multiple Bank Account Storage",
      "Ledger Statement Tracking",
      "Running Balance Monitoring",
      "Sales/Purchase History",
      "Custom Fields & Categories"
    ]
  },
  "products": {
    title: "Smart Product Catalog",
    subtitle: "Warehouse-wise inventory and pricing",
    description: "Maintain a complete product catalog with pricing, tax settings, and category management. Products can be managed warehouse-wise to understand stock availability across storage locations. Bulk price update functionality allows you to update sales and purchase prices for multiple products at once, making price management much faster and easier. Products can also be activated or deactivated as needed.",
    image: "/products/billsoft/Product-management.jpg",
    features: [
      "Warehouse-wise Inventory",
      "Bulk Price Update Tool",
      "Tax & Category Mapping",
      "Activation/Deactivation Control",
      "Item Code & Pricing Management",
      "Catalog-wide Stock Insights"
    ]
  },
  "warehouse": {
    title: "Warehouse & Stock Transfer",
    subtitle: "Structured approval workflow for inventory",
    description: "Manage multiple warehouses and monitor stock availability across each location. The Stock Transfer module helps move products between warehouses while maintaining accurate inventory records through a structured approval workflow (Draft, Pending, Approved, In Transit, Received) ensuring complete visibility of stock movement.",
    image: "/products/billsoft/Create-stock-transfer.jpg",
    features: [
      "Multi-Warehouse Monitoring",
      "Approval Workflow (Draft-Received)",
      "Real-time Stock Movement",
      "In-Transit Tracking",
      "Inventory Visibility at All Stages",
      "Accurate Stage Quantities"
    ]
  },
  "branch": {
    title: "Multi-Branch Concept",
    subtitle: "Independent workspaces under one platform",
    description: "Billsoft supports multi-branch business operations with separate workspaces for each branch. Every branch can maintain its own data, transactions, and records independently within the same system. Users can switch branches after login, while activities like sales, purchases, and reports remain limited to the selected branch, making it ideal for businesses operating across multiple locations.",
    image: "/products/billsoft/Branch-Management.jpg",
    features: [
      "Separate Branch Workspaces",
      "Easy Branch Switching",
      "Independent Transactions",
      "Branch-specific Reporting",
      "Centralized Admin Control",
      "Unified Multi-location Management"
    ]
  },
  "financial": {
    title: "Financial Year Management",
    subtitle: "Structured accounting periods",
    description: "Organize all accounting activities into structured yearly periods such as April to March. You can create, activate, close, or reopen financial years whenever required. The system prevents overlapping financial year dates, helping maintain clean and accurate accounting records during year-end processes and historical data audits.",
    image: "/products/billsoft/Financial-Years.jpg",
    features: [
      "Custom Accounting Periods",
      "Year-End Process Support",
      "Data Locking for Security",
      "Prevention of Overlaps",
      "Historical Record Access",
      "Clean Accounting Records"
    ]
  },
};

const TAB_THEMES = {
  "dashboard": { bg: "bg-sky-600", gradient: "from-[#0EA5E9] to-[#0284C7]", shadow: "shadow-sky-500/20", text: "text-sky-600", lightBg: "bg-sky-50", hoverBorder: "hover:border-sky-200", accent: "sky" },
  "sales": { bg: "bg-emerald-600", gradient: "from-[#10B981] to-[#059669]", shadow: "shadow-emerald-500/20", text: "text-emerald-600", lightBg: "bg-emerald-50", hoverBorder: "hover:border-emerald-200", accent: "emerald" },
  "purchase": { bg: "bg-rose-600", gradient: "from-[#E11D48] to-[#BE123C]", shadow: "shadow-rose-500/20", text: "text-rose-600", lightBg: "bg-rose-50", hoverBorder: "hover:border-rose-200", accent: "rose" },
  "quotation": { bg: "bg-violet-600", gradient: "from-[#7C3AED] to-[#6D28D9]", shadow: "shadow-violet-500/20", text: "text-violet-600", lightBg: "bg-violet-50", hoverBorder: "hover:border-violet-200", accent: "violet" },
  "payments": { bg: "bg-amber-500", gradient: "from-[#F59E0B] to-[#D97706]", shadow: "shadow-amber-500/20", text: "text-amber-600", lightBg: "bg-amber-50", hoverBorder: "hover:border-amber-200", accent: "amber" },
  "proforma": { bg: "bg-blue-600", gradient: "from-[#2563EB] to-[#1E40AF]", shadow: "shadow-blue-500/20", text: "text-blue-600", lightBg: "bg-blue-50", hoverBorder: "hover:border-blue-200", accent: "blue" },
  "expenses": { bg: "bg-slate-600", gradient: "from-[#475569] to-[#1E293B]", shadow: "shadow-slate-500/20", text: "text-slate-600", lightBg: "bg-slate-50", hoverBorder: "hover:border-slate-200", accent: "slate" },
  "parties": { bg: "bg-indigo-600", gradient: "from-[#4F46E5] to-[#3730A3]", shadow: "shadow-indigo-500/20", text: "text-indigo-600", lightBg: "bg-indigo-50", hoverBorder: "hover:border-indigo-200", accent: "indigo" },
  "products": { bg: "bg-teal-600", gradient: "from-[#0D9488] to-[#0F766E]", shadow: "shadow-teal-500/20", text: "text-teal-600", lightBg: "bg-teal-50", hoverBorder: "hover:border-teal-200", accent: "teal" },
  "warehouse": { bg: "bg-orange-600", gradient: "from-[#EA580C] to-[#C2410C]", shadow: "shadow-orange-500/20", text: "text-orange-600", lightBg: "bg-orange-50", hoverBorder: "hover:border-orange-200", accent: "orange" },
  "branch": { bg: "bg-fuchsia-600", gradient: "from-[#C026D3] to-[#86198F]", shadow: "shadow-fuchsia-500/20", text: "text-fuchsia-600", lightBg: "bg-fuchsia-50", hoverBorder: "hover:border-fuchsia-200", accent: "fuchsia" },
  "financial": { bg: "bg-cyan-600", gradient: "from-[#0891B2] to-[#164E63]", shadow: "shadow-cyan-500/20", text: "text-cyan-600", lightBg: "bg-cyan-50", hoverBorder: "hover:border-cyan-200", accent: "cyan" },
};

export default function ProductDetailPremiumBillSoft({
  product,
  relatedProducts,
  allProducts,
}) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const contentTopRef = useRef(null);
  const isFirstMount = useRef(true);

  // Scroll to top of content area when tab changes (but not on initial load)
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (contentTopRef.current) {
      const offset = 160; // Space for sticky header (102px) + tabs (~58px)
      const elementPosition = contentTopRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeContent = TAB_CONTENT[activeTab] || TAB_CONTENT["dashboard"];

  return (
    <div className={`relative font-sans selection:bg-sky-100 selection:text-sky-900 bg-[#FDF8F2]`}>
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-emerald-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-green-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-40 pt-36 lg:pt-52">
        {/* Intro Section Above Tabs */}
        <section className="pb-12 lg:pb-20">
          <div className="w-full lg:container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-600 font-black text-xs uppercase tracking-widest mb-6">
                Business Management Solution
              </span>
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tighter uppercase leading-[0.9]">
                Isarva <span className="text-sky-600">BillSoft</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-4xl mx-auto">
                Isarva BillSoft is an all-in-one business management solution designed to handle billing, inventory, branches, and financial operations seamlessly. It’s built not just for stock tracking—but for real business workflows including sales, purchases, approvals, and multi-branch operations.
              </p>

              {/* Intro Image - Mockup */}
              <div className="relative overflow-hidden   p-2 mb-10">
                <div className="relative w-full overflow-hidden">
                  <img
                    src="/products/billsoft/Billsoft-mockup.png"
                    alt="Isarva BillSoft Mockup"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tab System */}
        <div className="lg:hidden sticky top-[102px] z-[60] bg-white border-b border-gray-100 shadow-sm w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-2 overflow-x-auto no-scrollbar w-full">
            <div className="flex items-center space-x-1 whitespace-nowrap">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                const theme = TAB_THEMES[tab.id];
                return (
                  <button
                    key={tab.id}
                    onClick={(e) => {
                      setActiveTab(tab.id);
                      e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                    }}
                    className={`px-5 py-2.5 rounded-full font-bold text-[12px] uppercase tracking-wider transition-all duration-300 relative ${isActive ? "text-white" : "text-gray-400"}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabMobile"
                        className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} z-0 rounded-full`}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div ref={contentTopRef} className="w-full lg:container mx-auto px-6 pt-10 lg:pt-0 pb-12 lg:pb-32">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-12">
            {/* Desktop Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-32 space-y-4">
                <div className="hidden lg:flex flex-col bg-white/60 backdrop-blur-3xl border border-white/50 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-[2.5rem]">
                  <div className="flex flex-col space-y-1">
                    {TABS.map((tab) => {
                      const isActive = activeTab === tab.id;
                      const theme = TAB_THEMES[tab.id];
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`group relative flex items-center gap-4 px-6 py-4 rounded-[1.8rem] font-bold text-xs uppercase tracking-widest transition-all duration-500 overflow-hidden ${isActive
                            ? "text-white shadow-lg"
                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-50/50"
                            }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeTabDesktop"
                              className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} z-0`}
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          <div className={`relative z-10 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? "bg-white/20" : theme.lightBg + " " + theme.text}`}>
                            <span className="text-base">{tab.icon}</span>
                          </div>
                          <span className="relative z-10 flex-1 text-left">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <section className="pt-4 pb-12">
                    <div className="flex flex-col gap-6 mb-12">
                      <div className="max-w-none">
                        <motion.div
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[12px] font-black uppercase tracking-[0.2em] mb-6 ${TAB_THEMES[activeTab].lightBg} ${TAB_THEMES[activeTab].text} border-white/50 shadow-sm`}
                        >
                          <span className="relative flex h-2 w-2">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${TAB_THEMES[activeTab].bg}`}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${TAB_THEMES[activeTab].bg}`}></span>
                          </span>
                          {TABS.find(t => t.id === activeTab)?.label} MODULE
                        </motion.div>

                        <h2 className="text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                          {activeContent.title}
                        </h2>

                        <p className="text-base text-gray-500 font-medium leading-relaxed">
                          {activeContent.description}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="press-illusion-btn-orange px-8 py-4 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3"
                        >
                          Request Free Demo
                        </button>
                        <Link
                          href="/contact"
                          className="px-8 py-4 bg-white border border-gray-200 rounded-xl font-black uppercase tracking-widest text-xs text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center"
                        >
                          Contact Sales
                        </Link>
                      </div>
                    </div>

                    {/* Module Image Visual */}
                    <div className="relative mb-16">
                      <div className="relative z-10 p-2 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl cursor-pointer group overflow-hidden" onClick={() => setSelectedImage(activeContent.image)}>
                        <div className="rounded-[2rem] overflow-hidden relative">
                          <img
                            src={activeContent.image}
                            alt={activeContent.title}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 backdrop-blur-[1px]">
                          <div className={`bg-white/90 backdrop-blur-sm ${TAB_THEMES[activeTab].text} p-4 rounded-full shadow-2xl`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeContent.features.map((f, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-4 p-5 rounded-[24px] bg-white border border-gray-100 ${TAB_THEMES[activeTab].hoverBorder} transition-all group shadow-sm hover:shadow-md`}
                        >
                          <div className={`w-8 h-8 rounded-full ${TAB_THEMES[activeTab].lightBg} flex items-center justify-center ${TAB_THEMES[activeTab].text} flex-shrink-0 shadow-inner`}>
                            <span className="text-[10px] font-black">✓</span>
                          </div>
                          <span className="text-[14px] font-black text-gray-700 uppercase tracking-tight">{f}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </motion.div>
              </AnimatePresence>



              {/* What BillSoft Covers Section */}
              <section className="pb-8 lg:pb-16">
                <div className="container mx-auto px-6">
                  <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl bg-white p-2 ">
                    <div className="hidden lg:block relative w-full overflow-hidden rounded-[2rem]">
                      <img
                        src="/products/billsoft/what_billsoft_covers.png"
                        alt="What BillSoft Covers"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="lg:hidden relative w-full overflow-hidden rounded-[2rem]">
                      <img
                        src="/products/billsoft/what_billsoft_covers_mobile_view.png"
                        alt="What BillSoft Covers"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Theme Customization Section */}
              <section className="py-16 bg-white border border-gray-100 rounded-[3rem] mb-16 overflow-hidden">
                <div className="px-8 lg:px-12 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 text-fuchsia-600 font-bold text-xs mb-6 uppercase tracking-widest">
                    Personalized Experience
                  </div>
                  <h2 className="text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                    Stunning <span className="text-fuchsia-600">Theme</span> Customization
                  </h2>
                  <p className="text-lg text-gray-500 font-medium mb-12 max-w-2xl">
                    Choose from 13 beautiful themes like Sunset Glow, Vibrant Violet, and Empire Emerald to match your business style.
                  </p>

                  <div className="relative  group">
                    <ThemeSlider onImageClick={setSelectedImage} />
                  </div>
                </div>
              </section>



              {/* FAQ Section */}
              <section className="py-16 bg-white border border-gray-100 rounded-[3rem] mb-16">
                <div className="px-8 lg:px-12">
                  <h2 className="text-gray-900 mb-12 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Frequently Asked Questions</h2>
                  <div className="space-y-4 ">
                    {[
                      { q: "What is Isarva BillSoft Application?", a: "It is a complete billing, inventory, and business management system designed for multi-branch operations." },
                      { q: "Can I manage multiple branches in one system?", a: "Yes, you can add multiple branches and switch between them anytime." },
                      { q: "Does it support GST billing?", a: "Yes, GST is automatically applied based on product configuration." },
                      { q: "Can I track customer and vendor balances?", a: "Yes, ledger reports show complete transaction history and closing balances." },
                      { q: "Is stock transfer between warehouses possible?", a: "Yes, with a proper approval workflow including transit and receiving stages." },
                      { q: "Can I customize the look of the application?", a: "Yes, you can choose from 13 different theme colors." },
                      { q: "Does the system track payments?", a: "Yes, both incoming and outgoing payments through Payment In and Payment Out are fully managed and recorded." },
                      { q: "What are the main modules available in Isarva BillSoft?", a: "The main modules include Sales Invoice, Purchase Invoice, Payment In, and Payment Out. , Proforma Invoice , Quotations" }
                    ].map((item, i) => (
                      <details
                        key={i}
                        className="group bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.08)] transition-all duration-500 overflow-hidden"
                      >
                        <summary className="flex justify-between items-center font-bold text-gray-900 cursor-pointer list-none p-8 select-none">
                          <span className="pr-8 text-lg">{item.q}</span>
                          <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 transition-all duration-500 group-open:rotate-45 group-open:bg-sky-600 group-open:text-white group-hover:scale-110">
                            <span className="text-2xl leading-none">+</span>
                          </div>
                        </summary>
                        <div className="px-8 pb-8">
                          <div className="h-px w-full bg-gray-50 mb-6" />
                          <p className="text-gray-500 font-medium leading-relaxed text-[15px]">
                            {item.a}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </section>

              {/* Final CTA Section */}
              <section className="py-24 bg-white relative overflow-hidden border border-gray-100 rounded-[3rem]  ">
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[100px]" />
                  <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 px-8 lg:px-16 text-center max-w-4xl mx-auto">
                  <span className="inline-block px-4 py-2 rounded-full bg-sky-50 text-sky-600 font-black text-xs uppercase tracking-widest mb-6">
                    Ready to Scale?
                  </span>
                  <h2 className="text-gray-900 mb-8 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                    Build Your <span className="text-sky-600">Business</span> Future.
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
                    Join hundreds of businesses transforming their operations with Isarva BillSoft. Start your digital journey today.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="press-illusion-btn-orange w-auto px-12 py-6 font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 mx-auto"
                    >
                      Request Free Demo
                    </button>
                  </div>
                </div>
              </section>

            </main>
          </div>
        </div>
      </div>

      <BillsoftFeatureSection />


      {/* Related Products Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="w-full lg:container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[10px] font-black text-sky-600 tracking-[0.28em] uppercase mb-3 bg-sky-50 px-4 py-2 rounded-full border border-sky-100">
                MORE PRODUCTS
              </span>
              <h2 className="text-gray-900 mb-4 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                Explore Our More Products
              </h2>
              <p className="text-gray-500 max-w-[600px] mx-auto text-base leading-relaxed font-bold">
                Discover our comprehensive suite of software solutions designed to transform your business operations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {allProducts
              .filter(p => p.slug !== product.slug && !p.slug.includes("staging") && !p.slug.includes("-old") && p.slug !== "bill-soft")
              .slice(0, 3)
              .map((prod, index) => (
                <motion.div
                  key={prod.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link
                    href={`/product/${prod.slug}`}
                    className="block h-full"
                  >
                    <div className="relative rounded-3xl p-8 h-full bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group">
                      <div className="relative text-center md:text-left flex-grow">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                          <span className="text-3xl">{prod.icon}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-black text-gray-900 mb-3 uppercase tracking-tight">
                          {prod.title}
                        </h3>

                        {/* Tagline */}
                        {prod.tagline && (
                          <p className="text-sky-600 font-bold text-sm mb-3 uppercase tracking-wide">
                            {prod.tagline}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-gray-500 leading-relaxed mb-6 text-sm font-medium">
                          {prod.shortDescription}
                        </p>

                        {/* Category Badge */}
                        <div className="absolute -top-11 -right-2 bg-white text-sky-600 text-[10px] font-black px-3 py-1 rounded-full border border-sky-100 shadow-md uppercase tracking-wider">
                          {prod.category}
                        </div>
                      </div>

                      {/* CTA Link at bottom */}
                      <div className="flex items-center justify-center md:justify-start gap-2 text-sky-600 font-black text-xs uppercase tracking-widest mt-auto pt-4 border-t border-gray-50 group-hover:gap-3 transition-all">
                        Explore Product
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem="Isarva BillSoft"
        allItems={allProducts}
      />

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-auto flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 md:-right-12 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:rotate-90 z-[1001]"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="w-full h-auto object-contain max-h-[85vh]"
                />
              </div>

              <div className="mt-6 text-white text-center">
                <h3 className="text-2xl font-black uppercase tracking-widest">{activeContent.title}</h3>
                <p className="text-white/60 font-medium mt-1 uppercase text-sm tracking-widest">{activeContent.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const billsoftFeatures = [
  {
    id: "branch",
    label: "Multi-branch & Warehouse",
    icon: "🏢",
    color: "#0EA5E9",
    desc: "Manage multiple business locations and warehouses with separate stock and transaction tracking from a single system.",
    image: "/products/billsoft/Branch-Management.jpg",
  },
  {
    id: "permissions",
    label: "User Access Control",
    icon: "🔒",
    color: "#10B981",
    desc: "Control user permissions securely by assigning access based on employee roles and responsibilities.",
    image: "/products/billsoft/Permissions.jpg",
  },
  {
    id: "billing",
    label: "Smart Billing",
    icon: "💰",
    color: "#F43F5E",
    desc: "Generate invoices faster with automatic tax, discount, total, and balance calculations.",
    image: "/products/billsoft/Create-Sales.jpg",
  },
  {
    id: "transfer",
    label: "Stock Transfers",
    icon: "🏭",
    color: "#8B5CF6",
    desc: "Transfer inventory between warehouses using a structured approval and tracking process.",
    image: "/products/billsoft/Create-stock-transfer.jpg",
  },
  {
    id: "ledger",
    label: "Ledger Tracking",
    icon: "📊",
    color: "#F59E0B",
    desc: "Monitor complete payment history, balances, and transaction activities for every customer and vendor.",
    image: "/products/billsoft/Legder-statement.jpg",
  },
  {
    id: "sales-purchase",
    label: "Sales & Purchases",
    icon: "🛒",
    color: "#3B82F6",
    desc: "Manage billing, purchases, receipts, and payouts together in one connected workflow.",
    image: "/products/billsoft/Purchase-invoice.jpg",
  },
  {
    id: "expenses",
    label: "Expense Tracking",
    icon: "📉",
    color: "#64748B",
    desc: "Organize accounts by financial year and keep track of all business expenses with proper records.",
    image: "/products/billsoft/Manage-expense.jpg",
  },
  {
    id: "themes",
    label: "Custom Themes",
    icon: "🎨",
    color: "#6366F1",
    desc: "Personalize the application appearance with theme options that match your business style.",
    image: "/products/billsoft/Vibrant-color-3.jpg",
  },
  {
    id: "direct-creation",
    label: "Direct Creation",
    icon: "➕",
    color: "#14B8A6",
    desc: "Create new customers, vendors, products, or warehouses instantly while generating invoices.",
    image: "/products/billsoft/Add-Products.jpg",
  },
  {
    id: "reporting",
    label: "Detailed Reporting",
    icon: "📄",
    color: "#F97316",
    desc: "Access powerful reports including ledger statements, item-wise summaries, and transaction analysis.",
    image: "/products/billsoft/Item-wise-report.jpg",
  },
];

function BillsoftFeatureSection() {
  const [activeId, setActiveId] = useState("branch");
  const [mobileOpenId, setMobileOpenId] = useState("branch");

  const leftFeatures = billsoftFeatures.slice(0, 5);
  const rightFeatures = billsoftFeatures.slice(5);
  const activeFeature = billsoftFeatures.find((f) => f.id === activeId);

  return (
    <section className="py-20 overflow-hidden bg-gray-50/50">
      <div className="w-full lg:container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="block text-[14px] font-black text-sky-600 tracking-[0.28em] uppercase mb-2.5">
            KEY FEATURES
          </span>
          <h2 className="text-gray-900 mb-3.5 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
            Key Features Of <span className="text-sky-600">BillSoft</span> Software
          </h2>
          <p className="text-[#6b7280] max-w-[520px] mx-auto text-[15px] leading-relaxed">
            Comprehensive business management from sales to multi-branch operations.
          </p>
        </div>

        {/* ── DESKTOP ORBIT ── */}
        <div className="hidden xl:block">
          <div className="relative h-[720px] mx-auto xl:w-[85%] lg:w-full">
            {/* Sky arc ellipse */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] rounded-full border-[1.5px] pointer-events-none z-0"
              style={{ borderColor: 'rgba(14, 165, 233, 0.3)' }}
            />

            {/* Left column */}
            <div className="absolute -left-28 top-1/2 -translate-y-1/2 flex flex-col items-end gap-6 z-10 w-[240px]">
              {leftFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-5 text-[14px] font-semibold whitespace-nowrap ${activeId === feature.id
                    ? "bg-sky-50 border-sky-600 text-gray-800 shadow-[0_4px_16px_rgba(14,165,233,0.15)]"
                    : "border-sky-200 text-gray-800 hover:border-sky-500 hover:shadow-md"
                    }`}
                >
                  <span className="text-base leading-none">{feature.icon}</span>
                  {feature.label}
                  {activeId === feature.id && (
                    <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[7px] border-l-sky-600" />
                  )}
                </button>
              ))}
            </div>

            {/* Center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[65%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full aspect-[1.4/1] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.15)] bg-white p-4"
                >
                  <img
                    src={activeFeature.image}
                    alt={activeFeature.label}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right column */}
            <div className="absolute -right-28 top-1/2 -translate-y-1/2 flex flex-col items-start gap-6 z-10 w-[240px]">
              {rightFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-5 text-[14px] font-semibold whitespace-nowrap ${activeId === feature.id
                    ? "bg-sky-50 border-sky-600 text-gray-800 shadow-[0_4px_16px_rgba(14,165,233,0.15)]"
                    : "border-sky-200 text-gray-800 hover:border-sky-500 hover:shadow-md"
                    }`}
                >
                  {feature.label}
                  <span className="text-base leading-none">{feature.icon}</span>
                  {activeId === feature.id && (
                    <span className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[7px] border-r-sky-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 pb-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeId + "-d"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-center text-[#6b7280] max-w-[600px] mx-auto text-sm leading-relaxed"
              >
                {activeFeature.desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* ── MOBILE ACCORDION ── */}
        <div className="xl:hidden border-t border-gray-200">
          {billsoftFeatures.map((feature) => {
            const isOpen = mobileOpenId === feature.id;
            return (
              <div key={feature.id} className="border-b border-gray-200">
                <button
                  onClick={() => setMobileOpenId(isOpen ? null : feature.id)}
                  className="w-full flex items-center justify-between p-4 bg-transparent"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{feature.icon}</span>
                    <span className={`font-bold text-sm transition-colors ${isOpen ? "text-gray-900" : "text-gray-500"}`}>
                      {feature.label}
                    </span>
                  </div>
                  <span className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-45 text-sky-600" : "text-gray-300"}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pb-6">
                        <div className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-lg mb-4">
                          <img
                            src={feature.image}
                            alt={feature.label}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <p className="text-[#6b7280] text-sm leading-relaxed">
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
