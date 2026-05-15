"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";

const PRIMARY_COLOR = "#0EA5E9"; // Sky Blue

const TABS = [
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "sales", label: "Sales Invoice", icon: "💰" },
  { id: "purchase", label: "Purchase Invoice", icon: "🛒" },
  { id: "quotation", label: "Quotation", icon: "📄" },
  { id: "payments", label: "Payments", icon: "💸" },
  { id: "proforma", label: "Proforma", icon: "📝" },
  { id: "expenses", label: "Expenses", icon: "📉" },
  { id: "parties", label: "Parties", icon: "👥" },
  { id: "products", label: "Products", icon: "📦" },
  { id: "warehouse", label: "Warehouse", icon: "🏭" },
  { id: "branch", label: "Multi-Branch", icon: "🏢" },
  { id: "financial", label: "Financial Years", icon: "📅" },
];

const TAB_CONTENT = {
  "dashboard": {
    title: "Smart Business Dashboard",
    subtitle: "Real-time AI insights for your business",
    description: "Get a bird’s-eye view of your business performance with real-time AI insights. The intelligent analytics section helps you understand your business performance with projected settlement values, AI-powered revenue insights, and recent activity tracking.",
    image: "/products/billsoft/Dashboard.jpg",
    features: [
      "Quick Actions for Invoices",
      "AI Revenue Predictions",
      "Performance Tracking",
      "Detailed Activity Logs",
      "Top-Selling Product Data",
      "Conversion Rate Analysis"
    ]
  },
  "sales": {
    title: "Professional Sales Invoices",
    subtitle: "Smooth and flexible billing workflow",
    description: "Create professional sales invoices quickly with a smooth and flexible workflow. Supports tax inclusive/exclusive pricing, GST configuration, warehouse selection, and multiple print templates for professional sharing.",
    image: "/products/billsoft/Sales-invoice.jpg",
    features: [
      "Auto-Generated Invoice Numbers",
      "Instant Customer Creation",
      "Item-wise Discounts",
      "GST & Tax Configuration",
      "Payment Adjustments",
      "Multiple Print Templates"
    ]
  },
  "purchase": {
    title: "Vendor Purchase Management",
    subtitle: "Organized records and outstanding dues",
    description: "Manage vendor purchases with the same smooth workflow used in Sales Invoices. Maintain organized purchase records, track outstanding dues, and keep inventory and accounts updated automatically.",
    image: "/products/billsoft/Purchase-invoice.jpg",
    features: [
      "Instant Vendor Creation",
      "Warehouse-wise Stock Entry",
      "Additional Charges Management",
      "Outstanding Due Tracking",
      "Automated Account Updates",
      "Vendor Document Sharing"
    ]
  },
  "quotation": {
    title: "Detailed Quotations",
    subtitle: "Convert estimations into invoices instantly",
    description: "Create detailed quotations for customers or vendors with flexible pricing. When finalized, quotations can be directly converted into Sales or Purchase Invoices without re-entering data.",
    image: "/products/billsoft/Quotation.jpg",
    features: [
      "Flexible Pricing Options",
      "One-Click Invoice Conversion",
      "Average Estimation Insights",
      "Note & Signature Inclusion",
      "Item-wise Discount Control",
      "Professional PDF Export"
    ]
  },
  "payments": {
    title: "Payment In & Payment Out",
    subtitle: "Accurate tracking of every transaction",
    description: "Track all incoming and outgoing payments accurately. Record payment dates, modes, and reference numbers while allocating dues against pending invoices for organized collection tracking.",
    image: "/products/billsoft/Payment-in.jpg", // Defaulting to one, though user provided two
    features: [
      "Payment Mode Management",
      "Due Allocation Against Invoices",
      "Receipt Generation",
      "Vendor Payout Tracking",
      "Complete Payout History",
      "Real-time Balance Updates"
    ]
  },
  "proforma": {
    title: "Proforma Invoices",
    subtitle: "Formal pre-invoices for deal confirmation",
    description: "Proforma Invoices act as formal pre-invoices shared before a sale or purchase is finalized. Once approved, they can be directly converted into Sales or Purchase Invoices, keeping the workflow connected.",
    image: "/products/billsoft/Proforma-Invoice.jpg",
    features: [
      "Pre-billing Presentation",
      "Sales & Purchase Support",
      "Workflow Connection",
      "Direct Conversion to Invoice",
      "Terms & Notes Inclusion",
      "Multiple Sharing Formats"
    ]
  },
  "expenses": {
    title: "Daily Expense Tracking",
    subtitle: "Organized spending records by category",
    description: "Manage daily business expenses with proper categorization. Track debit/credit summaries and maintain branch-wise records for easier accounting across multiple business locations.",
    image: "/products/billsoft/Manage-expense.jpg",
    features: [
      "Categorized Expense Tracking",
      "Debit & Credit Summaries",
      "Branch-wise Accounting",
      "Invoice Reference Support",
      "Multiple Expense Entries",
      "Printable Expense Reports"
    ]
  },
  "parties": {
    title: "Centralized Party Management",
    subtitle: "Complete customer and vendor profiles",
    description: "Manage both customers and vendors in one location. Store contact information, GSTIN, and multiple bank accounts while monitoring transaction history and running balances.",
    image: "/products/billsoft/Parties-Module.jpg",
    features: [
      "GSTIN & Address Management",
      "Multiple Bank Account Storage",
      "Ledger Statement Tracking",
      "Running Balance Monitoring",
      "Sales/Purchase History",
      "Custom Party Categories"
    ]
  },
  "products": {
    title: "Smart Product Catalog",
    subtitle: "Warehouse-wise inventory and pricing",
    description: "Maintain a complete product catalog with pricing, tax settings, and category management. Bulk price updates allow you to manage sales and purchase prices for multiple products at once.",
    image: "/products/billsoft/Product-management.jpg",
    features: [
      "Warehouse-wise Inventory",
      "Bulk Price Update Tool",
      "Tax & Category Mapping",
      "Item Code & HSN Management",
      "Product Activity Control",
      "Low Stock Alerts"
    ]
  },
  "warehouse": {
    title: "Warehouse & Stock Transfer",
    subtitle: "Structured approval workflow for inventory",
    description: "Manage multiple warehouses and move products while maintaining accurate records. The transfer process follows a structured approval workflow from draft to received.",
    image: "/products/billsoft/Create-stock-transfer.jpg",
    features: [
      "Multi-Warehouse Monitoring",
      "Approval Workflow (Draft-Received)",
      "Real-time Stock Movement",
      "In-Transit Tracking",
      "Inventory Rebalancing",
      "Detailed Transfer History"
    ]
  },
  "branch": {
    title: "Multi-Branch Concept",
    subtitle: "Independent workspaces under one platform",
    description: "Billsoft supports multi-branch business operations with separate workspaces. Every branch maintains its own data independently, ideal for businesses operating across multiple locations.",
    image: "/products/billsoft/Branch-Management.jpg",
    features: [
      "Separate Branch Workspaces",
      "Easy Branch Switching",
      "Independent Transactions",
      "Centralized Admin Control",
      "Branch-specific Reporting",
      "User Permission Mapping"
    ]
  },
  "financial": {
    title: "Financial Year Management",
    subtitle: "Structured accounting periods",
    description: "Organize all accounting activities into structured yearly periods. Create, activate, close, or reopen financial years while preventing overlapping dates for clean records.",
    image: "/products/billsoft/Financial-Years.jpg",
    features: [
      "Custom Accounting Periods",
      "Year-End Process Support",
      "Data Locking for Security",
      "Historical Record Access",
      "Prevention of Overlaps",
      "Easy Activation/Closing"
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

  // Scroll to top of content area when tab changes
  useEffect(() => {
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
    <div className={`relative font-sans selection:bg-sky-100 selection:text-sky-900 bg-white`}>
      {/* --- Dynamic Shifting Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute inset-0 opacity-10 transition-colors duration-500 bg-gradient-to-br ${TAB_THEMES[activeTab].gradient} blur-[120px] scale-125`} />
        <div className={`absolute top-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full opacity-[0.08] blur-[100px] ${TAB_THEMES[activeTab].bg}`} />
      </div>

      <div className="relative z-40 pt-24 lg:pt-36">
        {/* Intro Section Above Tabs */}
        <section className="pb-12 lg:pb-20">
          <div className="w-full lg:container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-600 font-black text-xs uppercase tracking-widest mb-6">
                Business Management Solution
              </span>
              <h1 className="text-4xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tighter uppercase leading-[0.9]">
                Isarva <span className="text-sky-600">BillSoft</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
                An all-in-one business management solution designed to handle billing, inventory, branches, and financial operations seamlessly. Built for real business workflows.
              </p>
              
              {/* Intro Image - Responsive Swap */}
              <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl bg-white p-2 mb-10">
                <div className="hidden lg:block relative aspect-[21/9]">
                  <Image
                    src="/products/billsoft/What_billsoft_covers.jpg"
                    alt="What BillSoft Covers"
                    fill
                    className="object-cover rounded-[2rem]"
                    unoptimized
                  />
                </div>
                <div className="lg:hidden relative aspect-square">
                  <Image
                    src="/products/billsoft/what_billsoft_covers_mobile_view.jpg"
                    alt="What BillSoft Covers Mobile"
                    fill
                    className="object-cover rounded-[2rem]"
                    unoptimized
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
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
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

                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tighter uppercase">
                          {activeContent.title}
                        </h2>

                        <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
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
                        <div className="rounded-[2rem] overflow-hidden relative" style={{ aspectRatio: '1.77 / 1' }}>
                          <Image
                            src={activeContent.image}
                            alt={activeContent.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            unoptimized
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
                          <span className="text-[13px] font-black text-gray-700 uppercase tracking-tight">{f}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </motion.div>
              </AnimatePresence>

              {/* Theme Customization Section */}
              <section className="py-16 bg-white border border-gray-100 rounded-[3rem] mb-16 overflow-hidden">
                <div className="px-8 lg:px-12 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 text-fuchsia-600 font-bold text-xs mb-6 uppercase tracking-widest">
                    Personalized Experience
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase">
                    Stunning <span className="text-fuchsia-600">Theme</span> Customization
                  </h2>
                  <p className="text-lg text-gray-500 font-medium mb-12 max-w-2xl">
                    Choose from 13 beautiful themes like Sunset Glow, Vibrant Violet, and Empire Emerald to match your business style.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["vibrant-color-3.jpg", "vibrant-color-2.jpg", "vibrant-color-1.jpg"].map((img, i) => (
                      <div key={i} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-white hover:scale-105 transition-transform duration-500">
                        <Image
                          src={`/products/billsoft/${img}`}
                          alt={`BillSoft Theme ${i + 1}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Key Features Summary Section */}
              <section className="py-16 bg-slate-900 rounded-[3rem] text-white mb-16">
                <div className="px-8 lg:px-12">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-black mb-4 uppercase tracking-tighter">Key Features & Modules</h2>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Everything you need to grow your business</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { title: "Multi-Branch & Warehouse", icon: "🏢" },
                      { title: "Role-Based Access Control", icon: "🔐" },
                      { title: "Smart Billing & Calculations", icon: "⚡" },
                      { title: "Stock Transfer Workflow", icon: "📦" },
                      { title: "Customer/Vendor Ledgers", icon: "📖" },
                      { title: "Financial Year Tracking", icon: "📅" },
                      { title: "Integrated Payments", icon: "💳" },
                      { title: "Detailed Reporting", icon: "📊" },
                      { title: "Custom Theme UI", icon: "🎨" }
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <span className="text-2xl">{feature.icon}</span>
                        <h3 className="text-[14px] font-black uppercase tracking-tight">{feature.title}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="py-16 bg-white border border-gray-100 rounded-[3rem] mb-16">
                <div className="px-8 lg:px-12">
                  <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-12 uppercase tracking-tighter text-center">Frequently Asked Questions</h2>
                  <div className="space-y-4 max-w-4xl mx-auto">
                    {[
                      { q: "What is Isarva BillSoft Application?", a: "It is a complete billing, inventory, and business management system designed for multi-branch operations." },
                      { q: "Can I manage multiple branches in one system?", a: "Yes, you can add multiple branches and switch between them anytime seamlessly." },
                      { q: "Does it support GST billing?", a: "Yes, GST is automatically applied based on your product and party configurations." },
                      { q: "Can I track customer and vendor balances?", a: "Yes, real-time ledger reports show complete transaction history and closing balances." },
                      { q: "Is stock transfer between warehouses possible?", a: "Yes, with a proper approval workflow including transit and receiving stages for full visibility." },
                      { q: "Can I customize the look of the application?", a: "Yes, you can choose from 13 different theme colors to match your brand style." },
                      { q: "Does the system track payments?", a: "Yes, both incoming (Payment In) and outgoing (Payment Out) transactions are fully managed and recorded." }
                    ].map((item, i) => (
                      <details key={i} className="group border-b border-gray-100 last:border-0 pb-4">
                        <summary className="flex justify-between items-center font-black uppercase tracking-tight text-gray-900 cursor-pointer list-none py-4">
                          <span className="pr-8">{item.q}</span>
                          <span className="text-sky-600 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <p className="text-gray-500 font-medium leading-relaxed pb-4 px-2">{item.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </section>

              {/* Explore More Products Section */}
              <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden rounded-[3rem] mb-16">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230EA5E9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>

                <div className="px-8 lg:px-12 relative z-10">
                  <div className="text-center mb-14">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="inline-block text-[10px] font-black text-sky-600 tracking-[0.28em] uppercase mb-3 bg-sky-50 px-4 py-2 rounded-full border border-sky-100">
                        MORE PRODUCTS
                      </span>
                      <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1] mb-4 uppercase tracking-tighter">
                        Explore Our More Products
                      </h2>
                      <p className="text-gray-500 max-w-[600px] mx-auto text-base leading-relaxed font-medium">
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

              {/* Final CTA */}
              <section className="py-16">
                <div className="relative rounded-[3rem] bg-gradient-to-br from-gray-900 to-black py-20 px-8 text-center text-white overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] pointer-events-none"></div>
                  <h2 className="text-4xl lg:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">Ready to scale your <br /><span className="text-sky-400">business operations?</span></h2>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-12 max-w-xl mx-auto">Get started with Isarva BillSoft today and transform how you manage your branches and inventory.</p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="press-illusion-btn-orange px-12 py-6 font-black uppercase tracking-[0.2em] text-sm"
                  >
                    Request Free Demo Now
                  </button>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem="Isarva BillSoft"
        allItems={allProducts}
      />

      {/* Image Lightbox */}
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
              className="relative w-full max-w-5xl h-auto flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 w-12 h-12 flex items-center justify-center text-white text-3xl font-light hover:rotate-90 transition-transform"
              >
                ×
              </button>
              <div className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ aspectRatio: '1.4 / 1' }}>
                <Image
                  src={selectedImage}
                  alt="Enlarged view"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
