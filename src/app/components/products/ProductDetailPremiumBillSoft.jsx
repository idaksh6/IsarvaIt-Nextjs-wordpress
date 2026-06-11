"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "../AppLink";
// import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";

const PRIMARY_COLOR = "#0EA5E9"; // Sky Blue

const GLOBAL_BTN_ARROW = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
      clipRule="evenodd"
    />
  </svg>
);

const GLOBAL_BTN_ORANGE = "press-illusion-btn-orange text-white w-fit font-bold px-8 py-3 text-base flex cursor-pointer";
const GLOBAL_BTN_GREEN = "press-illusion-btn-green text-white w-fit font-bold px-8 py-3 text-base flex cursor-pointer";

function ThemeSlider({ onImageClick }) {
  const themes = [
    { name: "Empire Emerald", img: "Vibrant-color-3.jpg", color: "from-emerald-500/20 to-teal-500/20" },
    { name: "Sunset Glow", img: "Vibrant-color-2.jpg", color: "from-orange-500/20 to-rose-500/20" },
    { name: "Vibrant Violet", img: "Vibrant-color-1.jpg", color: "from-violet-500/20 to-fuchsia-500/20" },
    { name: "Yellow-Dashboard", img: "Yellow-Dashboard.jpg", color: "from-yellow-500/20 to-yellow-500/20" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % themes.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + themes.length) % themes.length;
    goToSlide(prevIndex);
  };

  // Auto-play timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTransitioning, currentIndex]);

  // Reset timer on manual navigation
  const handleManualNavigation = (callback) => {
    if (timerRef.current) clearInterval(timerRef.current);
    callback();
    timerRef.current = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);
  };

  return (
    <div className="relative w-full">
      {/* Slider Container - Fixed height to prevent layout shift */}
      <div className="relative w-full rounded-[1rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white bg-white">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">

          {/* Current Slide */}
          <div className="relative w-full h-full cursor-zoom-in" onClick={() => onImageClick(`/products/billsoft/${themes[currentIndex].img}`)}>
            <img
              src={`/products/billsoft/${themes[currentIndex].img}`}
              alt={themes[currentIndex].name}
              className="w-full h-full object-cover"
              loading="eager"
            />



            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* Popup Indicator */}
            <div className="absolute top-6 right-6 z-50 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-2xl border border-white/30 text-white flex items-center justify-center shadow-2xl">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Slide indicator dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {themes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleManualNavigation(() => goToSlide(idx))}
                className={`transition-all duration-300 rounded-full ${idx === currentIndex
                  ? "w-8 h-1.5 bg-white shadow-lg"
                  : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={() => handleManualNavigation(prevSlide)}
          disabled={isTransitioning}
          className={`w-10 h-10 rounded-full bg-white border border-gray-100 text-gray-900 flex items-center justify-center transition-all duration-300 shadow-xl
            ${isTransitioning
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-sky-600 hover:text-white hover:shadow-sky-500/30'
            }`}
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {themes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleManualNavigation(() => goToSlide(idx))}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex
                ? "w-8 bg-sky-600 shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                : "w-1.5 bg-gray-200 hover:bg-gray-300"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === currentIndex ? "true" : "false"}
            />
          ))}
        </div>

        <button
          onClick={() => handleManualNavigation(nextSlide)}
          disabled={isTransitioning}
          className={`w-10 h-10 rounded-full bg-white border border-gray-100 text-gray-900 flex items-center justify-center transition-all duration-300 shadow-xl
            ${isTransitioning
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-sky-600 hover:text-white hover:shadow-sky-500/30'
            }`}
          aria-label="Next slide"
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
    layoutType: "classic",
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
    layoutType: "split",
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
    layoutType: "split",
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
    layoutType: "classic",
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
    layoutType: "classic",
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
    layoutType: "split",
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
    layoutType: "split",
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
    layoutType: "classic",
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
    layoutType: "split",
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
    layoutType: "split",
    title: "Warehouse & Stock Transfer",
    subtitle: "Structured approval workflow for inventory",
    description: "Manage multiple warehouses and monitor stock availability across each location. The Stock Transfer module helps move products between warehouses while maintaining accurate inventory records through a structured approval workflow (Draft, Pending, Approved, In Transit, Received) ensuring complete visibility of stock movement.",
    image: "/products/billsoft/Create-stock-transfer.jpg",
    images: [
      { src: "/products/billsoft/Create-stock-transfer.jpg", label: "Stock Transfer" },
      { src: "/products/billsoft/Warehouse-management.jpg", label: "Warehouse Management" }
    ],
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
    layoutType: "classic",
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
    layoutType: "classic",
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
  "dashboard": { bg: "bg-sky-600", gradient: "from-[#0EA5E9] to-[#0284C7]", shadow: "shadow-sky-500/20", text: "text-sky-600", lightBg: "bg-sky-100", hoverBorder: "hover:border-sky-200", accent: "sky" },
  "sales": { bg: "bg-emerald-600", gradient: "from-[#10B981] to-[#059669]", shadow: "shadow-emerald-500/20", text: "text-emerald-600", lightBg: "bg-emerald-100", hoverBorder: "hover:border-emerald-200", accent: "emerald" },
  "purchase": { bg: "bg-rose-600", gradient: "from-[#E11D48] to-[#BE123C]", shadow: "shadow-rose-500/20", text: "text-rose-600", lightBg: "bg-rose-100", hoverBorder: "hover:border-rose-200", accent: "rose" },
  "quotation": { bg: "bg-violet-600", gradient: "from-[#7C3AED] to-[#6D28D9]", shadow: "shadow-violet-500/20", text: "text-violet-600", lightBg: "bg-violet-100", hoverBorder: "hover:border-violet-200", accent: "violet" },
  "payments": { bg: "bg-amber-500", gradient: "from-[#F59E0B] to-[#D97706]", shadow: "shadow-amber-500/20", text: "text-amber-600", lightBg: "bg-amber-100", hoverBorder: "hover:border-amber-200", accent: "amber" },
  "proforma": { bg: "bg-blue-600", gradient: "from-[#2563EB] to-[#1E40AF]", shadow: "shadow-blue-500/20", text: "text-blue-600", lightBg: "bg-blue-100", hoverBorder: "hover:border-blue-200", accent: "blue" },
  "expenses": { bg: "bg-lime-600", gradient: "from-[#84CC16] to-[#65A30D]", shadow: "shadow-lime-500/20", text: "text-lime-600", lightBg: "bg-lime-100", hoverBorder: "hover:border-lime-200", accent: "lime" },
  "parties": { bg: "bg-indigo-600", gradient: "from-[#4F46E5] to-[#3730A3]", shadow: "shadow-indigo-500/20", text: "text-indigo-600", lightBg: "bg-indigo-100", hoverBorder: "hover:border-indigo-200", accent: "indigo" },
  "products": { bg: "bg-teal-600", gradient: "from-[#0D9488] to-[#0F766E]", shadow: "shadow-teal-500/20", text: "text-teal-600", lightBg: "bg-teal-100", hoverBorder: "hover:border-teal-200", accent: "teal" },
  "warehouse": { bg: "bg-orange-600", gradient: "from-[#EA580C] to-[#C2410C]", shadow: "shadow-orange-500/20", text: "text-orange-600", lightBg: "bg-orange-100", hoverBorder: "hover:border-orange-200", accent: "orange" },
  "branch": { bg: "bg-fuchsia-600", gradient: "from-[#C026D3] to-[#86198F]", shadow: "shadow-fuchsia-500/20", text: "text-fuchsia-600", lightBg: "bg-fuchsia-100", hoverBorder: "hover:border-fuchsia-200", accent: "fuchsia" },
  "financial": { bg: "bg-cyan-600", gradient: "from-[#0891B2] to-[#164E63]", shadow: "shadow-cyan-500/20", text: "text-cyan-600", lightBg: "bg-cyan-100", hoverBorder: "hover:border-cyan-200", accent: "cyan" },
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
  const [activeInnerTab, setActiveInnerTab] = useState(0);
  // Banner tab state for 3D card image switching
  const [bannerIdx, setBannerIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const bannerImages = [
    {
      desktop: "/products/billsoft/Yellow-Dashboard.jpg",
      mobile: "/products/billsoft/Yellow-Dashboard.jpg"
    },
    {
      desktop: "/products/billsoft/billsoft-invoice-workflow-1.png",
      mobile: "/products/billsoft/billsoft-invoice-workflow-mobile-1.png"
    }
  ];
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
    setActiveInnerTab(0);
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
    <>
      <style>{`
        .wp-aurora-gradient {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #fdfcff 100%);
        }
        .wp-blue-text-gradient {
          background: linear-gradient(90deg, #0ea5e9, #2563eb, #7c3aed, #0ea5e9);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }
        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        .wp-float1 { animation: float 6s ease-in-out infinite; }
        .wp-float2 { animation: float2 8s ease-in-out infinite; }
        .image-card {
          border: 4px solid white;
          box-shadow: 0 24px 50px -12px rgba(14, 165, 233, 0.15);
          border-radius: 24px;
          overflow: hidden;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 32px rgba(14, 165, 233, 0.08);
        }
        .aurora-mesh {
          background-image:
            radial-gradient(at 10% 20%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(124, 58, 237, 0.1) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(37, 99, 235, 0.05) 0px, transparent 50%);
        }
        .hero-grid {
          background-image: radial-gradient(#e0f2fe 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .image-3d-wrapper {
          perspective: 2000px;
        }
        .image-3d-card {
          transform: rotateY(-15deg) rotateX(10deg);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .image-3d-card:hover {
          transform: rotateY(-5deg) rotateX(5deg) scale(1.02);
        }
        .decorative-blob {
          filter: blur(80px);
          opacity: 0.4;
          animation: float 10s ease-in-out infinite alternate;
        }
        .shimmer-title {
          background: linear-gradient(90deg, #0ea5e9, #2563eb, #0284c7, #0ea5e9);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shine 3s linear infinite;
        }
        .sidebar-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .sidebar-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .sidebar-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.25);
          border-radius: 9999px;
        }
        .sidebar-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.45);
        }
      `}</style>
      <div className={`relative font-sans selection:bg-sky-100 selection:text-sky-900 bg-[#FDF8F2]`}>
        {/* Background Decor */}
        <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-emerald-100/40 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-green-100/30 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-40 pt-0">
          {/* Intro Section Above Tabs */}
          <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden" style={{ backgroundColor: 'rgb(253, 248, 242)' }}>
            <div className="absolute inset-0 aurora-mesh pointer-events-none" />
            <div className="absolute inset-0 hero-grid opacity-[0.2] pointer-events-none" />


            <div className="max-w-7xl mx-auto px-6 sm:px-6 relative z-10 w-full">


              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <div className="text-center lg:text-left">
                  <div className="relative inline-flex items-center justify-center lg:gap-3 gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-50/50 to-blue-50/50 border border-sky-100/50 mb-8 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse shrink-0" />
                    <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent font-black text-xs capitalize tracking-[0.2em] text-center leading-tight">Business Management Solution</span>
                  </div>

                  <div className="relative">
                    <h1 className="mb-6">
                      <span className="shimmer-title inline-block py-2">
                        Isarva BillSoft
                      </span>{" "}
                      <br />
                      Built for <br />

                      <span className="text-[clamp(1.5rem,4vw,3.5rem)] bg-gradient-to-r from-[#6f3ce3] via-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent font-bold">
                        Billing & Multi-Branch Growth
                      </span>
                    </h1>
                  </div>

                  <div className="text-base lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-medium border-0 lg:border-l-2 border-sky-200 pl-0 lg:pl-8 space-y-4">
                    <p>Isarva BillSoft is an <span className="text-blue-600 font-bold">all-in-one business management solution</span> designed to handle billing, inventory, branches, and financial operations seamlessly.</p>
                    <p>It’s built not just for stock tracking—but for <span className="text-[#6f3ce3] font-bold">real business workflows</span> including sales, purchases, approvals, and multi-branch operations.</p>
                  </div>

                  <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className={`${GLOBAL_BTN_ORANGE} mt-2`}
                    >
                      <span>Request Free Demo</span>
                      {GLOBAL_BTN_ARROW}
                    </button>
                  </div>

                  <div className="mt-16 hidden lg:grid grid-cols-3 gap-4 sm:gap-8 justify-center lg:justify-start">
                    <div className="group p-4 sm:p-5 rounded-[24px] bg-white border border-sky-50 shadow-sm hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-300 relative truncate">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-sky-50/50 rounded-bl-3xl -z-10 transition-transform group-hover:scale-110" />
                      <span className="block text-2xl sm:text-3xl font-black bg-gradient-to-br from-sky-600 to-blue-600 bg-clip-text text-transparent mb-1">100%</span>
                      <span className="block text-[10px] font-extrabold text-slate-400 capitalize tracking-widest">GST Ready</span>
                    </div>
                    <div className="group p-4 sm:p-5 rounded-[24px] bg-white border border-sky-50 shadow-sm hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-300 relative truncate">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-sky-50/50 rounded-bl-3xl -z-10 transition-transform group-hover:scale-110" />
                      <span className="block text-2xl sm:text-3xl font-black bg-gradient-to-br from-sky-600 to-blue-600 bg-clip-text text-transparent mb-1">&lt; 1s</span>
                      <span className="block text-[10px] font-extrabold text-slate-400 capitalize tracking-widest">Billing Speed</span>
                    </div>
                    <div className="group p-4 sm:p-5 rounded-[24px] bg-white border border-sky-50 shadow-sm hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-300 relative truncate">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-sky-50/50 rounded-bl-3xl -z-10 transition-transform group-hover:scale-110" />
                      <span className="block text-2xl sm:text-3xl font-black bg-gradient-to-br from-sky-600 to-blue-600 bg-clip-text text-transparent mb-1">Multi</span>
                      <span className="block text-[10px] font-extrabold text-slate-400 capitalize tracking-widest">Branch Sync</span>
                    </div>
                  </div>
                </div>

                <div className="relative  image-3d-wrapper">
                  {/* Tab Buttons for Banner Switch */}
                  <div className="flex justify-center gap-2 mb-8">
                    {[{ idx: 0, label: "Mockup" }, { idx: 1, label: "Sales" }].map(({ idx, label }) => (
                      <button
                        key={idx}
                        onClick={() => setBannerIdx(idx)}
                        className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-black capitalize tracking-[0.15em] transition-all duration-300 border
        ${bannerIdx === idx
                            ? "bg-sky-600 text-white border-sky-600 shadow-lg shadow-sky-500/30"
                            : "bg-white text-sky-500 border-sky-200 hover:border-sky-400 hover:text-sky-600"
                          }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${bannerIdx === idx ? "bg-white" : "bg-sky-400"}`} />
                        {label}
                      </button>
                    ))}
                  </div>
                  <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] w-full px-4 sm:px-0">
                    <div className={`absolute top-0 right-0 lg:right-0 w-full h-[100%] p-6 z-10 flex items-center justify-center transition-all duration-500 hover:scale-[1.02] overflow-hidden
  ${bannerIdx === 0
                        ? "image-card border-4 sm:border-8 border-white shadow-2xl bg-white"
                        : "border border-sky-100 bg-white/80 backdrop-blur-sm shadow-[0_0_30px_6px_rgba(14,165,233,0.4)] rounded-2xl"
                      }`}>

                      {/* Decorative Dot Pattern inside the box */}
                      {bannerIdx === 1 && (
                        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0ea5e9 2.5px, transparent 2.5px)', backgroundSize: '30px 30px', opacity: 0.15 }}></div>
                      )}

                      <picture className="w-full h-full block relative z-10">
                        <source media="(max-width: 639px)" srcSet={bannerImages[bannerIdx].mobile} />
                        <img
                          src={bannerImages[bannerIdx].desktop}
                          alt="Isarva BillSoft Banner"
                          className={`w-full h-full transition-all duration-500 relative z-10 ${bannerIdx === 0 ? "object-cover" : "object-contain"}`}
                        />
                      </picture>
                      {bannerIdx === 0 && <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/10 to-transparent" />}
                    </div>

                    {/* Floating Sales Invoice Dashboard */}
                    {bannerIdx === 0 && (
                      <div className="hidden lg:block absolute bottom-2 left-4 lg:-bottom-6 lg:-left-6 w-[55%] lg:w-[250px] h-[50%] lg:h-[280px] image-card wp-float2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-2 sm:border-4 border-white transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 bg-white z-20">
                        <img src="/products/billsoft/Banner-child-image.jpg" alt="Sales Invoice Dashboard" className="w-full h-full object-cover" />
                      </div>
                    )}

                    {/* Floating Tech Tag */}
                    {bannerIdx === 0 && (
                      <div className="absolute top-1/2 -right-8 glass-panel px-6 py-4 rounded-3xl z-30 shadow-2xl hidden xl:flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold italic shadow-lg">₹</div>
                        <div>
                          <div className="text-gray-900 text-xs font-black capitalize tracking-widest">GST Ready</div>
                          <div className="text-sky-600 font-bold">Billing System</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tab System */}
          <div className="lg:hidden sticky top-[102px] z-[60] bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm w-full overflow-hidden mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 overflow-x-auto no-scrollbar w-full snap-x scroll-pl-4 sm:scroll-pl-6">
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
                      className={`px-5 py-2.5 rounded-full font-bold text-[12px] capitalize tracking-wider 
                      transition-all duration-300 relative border border-transparent
                      ${isActive
                          ? "text-white border-transparent"
                          : "text-gray-400 hover:text-sky-700 hover:border-sky-200 hover:bg-sky-50"
                        }`}
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

          <div ref={contentTopRef} className="wp-aurora-gradient w-full px-6 pt-4 lg:pt-8 pb-12 lg:pb-16">
            <div className="lg:container mx-auto">
              <div className="flex flex-col lg:flex-row gap-0 lg:gap-12">
                {/* Desktop Sidebar */}
                <aside className="lg:w-[22rem] flex-shrink-0">
                  <div className="lg:sticky lg:top-32 space-y-4">
                    <div className="hidden lg:flex flex-col bg-white/60 backdrop-blur-3xl border border-white/50 p-3 shadow-[0_20px_50px_rgba(14,165,233,0.15)] rounded-[2.5rem]">
                      <div
                        className="flex flex-col space-y-1 overflow-y-auto pr-1 sidebar-scrollbar"
                        style={{
                          maxHeight: 'calc(100vh - 11rem)',
                          scrollbarWidth: 'thin',
                          scrollbarColor: 'rgba(0,0,0,0.12) transparent',
                        }}
                      >
                        {TABS.map((tab) => {
                          const isActive = activeTab === tab.id;
                          const theme = TAB_THEMES[tab.id];
                          return (
                            <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={`group relative flex items-center gap-4 px-6 py-3 rounded-[2rem] font-bold text-sm capitalize tracking-widest transition-all duration-500 overflow-hidden ${isActive
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
                              {isActive && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="relative z-10 w-2 h-2 bg-white rounded-full"
                                />
                              )}
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
                      {/* Render Content Based on Layout Type */}
                      {(!activeContent.layoutType || activeContent.layoutType === "classic") && (
                        <section className="pt-4 pb-12">
                          <div className="flex flex-col gap-6 mb-6 lg:mb-12 text-center lg:text-left">
                            <div className="max-w-none">
                              <motion.div
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[12px] font-black capitalize tracking-[0.2em] mb-6 ${TAB_THEMES[activeTab].lightBg} ${TAB_THEMES[activeTab].text} border-white/50 shadow-sm`}
                              >
                                <span className="relative flex h-2 w-2">
                                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${TAB_THEMES[activeTab].bg}`}></span>
                                  <span className={`relative inline-flex rounded-full h-2 w-2 ${TAB_THEMES[activeTab].bg}`}></span>
                                </span>
                                {TABS.find(t => t.id === activeTab)?.label} MODULE
                              </motion.div>

                              <h2 className="mb-6 capitalize">
                                {activeContent.title}
                              </h2>

                              <p className="text-gray-600 text-base lg:text-lg">
                                {activeContent.description}
                              </p>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                              <button
                                onClick={() => setIsModalOpen(true)}
                                className={`${GLOBAL_BTN_ORANGE} mx-auto lg:mx-0`}
                              >
                                <span>Request Free Demo</span>
                                {GLOBAL_BTN_ARROW}
                              </button>
                              <Link
                                href="/contact"
                                prefetch={false}
                                className={`${GLOBAL_BTN_GREEN} mx-auto lg:mx-0`}
                              >
                                <span>Contact Sales</span>
                                {GLOBAL_BTN_ARROW}
                              </Link>
                            </div>
                          </div>

                          {/* Module Image Visual */}
                          <div className="relative mb-10 lg:mb-16">
                            {activeContent.images && (
                              <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {activeContent.images.map((imgObj, idx) => (
                                  <button
                                    key={idx}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveInnerTab(idx);
                                    }}
                                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeInnerTab === idx ? TAB_THEMES[activeTab].bg + ' text-white shadow-md scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:scale-105'}`}
                                  >
                                    {imgObj.label}
                                  </button>
                                ))}
                              </div>
                            )}
                            <div className="relative z-10 p-2 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl cursor-pointer group overflow-hidden" onClick={() => setSelectedImage(activeContent.images ? activeContent.images[activeInnerTab].src : activeContent.image)}>
                              <div className="rounded-[2rem] overflow-hidden relative aspect-[16/9] bg-gray-50">
                                <img
                                  key={activeContent.images ? activeContent.images[activeInnerTab].src : activeContent.image}
                                  src={activeContent.images ? activeContent.images[activeInnerTab].src : activeContent.image}
                                  alt={activeContent.title}
                                  className="w-full h-full object-contain transition-opacity duration-300"
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
                                <span className="text-[14px] font-extrabold text-gray-700 capitalize tracking-tight">{f}</span>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}

                      {activeContent.layoutType === "split" && (
                        <section className="pt-4 pb-12">
                          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 lg:mb-12">
                            <div className="xl:col-span-5 flex flex-col gap-6 text-center xl:text-left">
                              <motion.div
                                className={`inline-flex self-center xl:self-start items-center gap-2 px-4 py-2 rounded-full border text-[12px] font-black capitalize tracking-[0.2em] ${TAB_THEMES[activeTab].lightBg} ${TAB_THEMES[activeTab].text} border-white/50 shadow-sm`}
                              >
                                <span className="relative flex h-2 w-2">
                                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${TAB_THEMES[activeTab].bg}`}></span>
                                  <span className={`relative inline-flex rounded-full h-2 w-2 ${TAB_THEMES[activeTab].bg}`}></span>
                                </span>
                                {TABS.find(t => t.id === activeTab)?.label}
                              </motion.div>

                              <h2 className="text-gray-900 text-3xl lg:text-4xl font-black leading-tight tracking-tighter capitalize">
                                {activeContent.title}
                              </h2>

                              <p className="text-gray-600 text-base lg:text-lg">
                                {activeContent.description}
                              </p>

                              <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-4 mt-4">
                                <button
                                  onClick={() => setIsModalOpen(true)}
                                  className={`${GLOBAL_BTN_ORANGE} mx-auto xl:mx-0`}
                                >
                                  <span>Request Free Demo</span>
                                  {GLOBAL_BTN_ARROW}
                                </button>
                              </div>
                            </div>

                            <div className="xl:col-span-7 relative">
                              {activeContent.images && (
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                  {activeContent.images.map((imgObj, idx) => (
                                    <button
                                      key={idx}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveInnerTab(idx);
                                      }}
                                      className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeInnerTab === idx ? TAB_THEMES[activeTab].bg + ' text-white shadow-md scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:scale-105'}`}
                                    >
                                      {imgObj.label}
                                    </button>
                                  ))}
                                </div>
                              )}
                              <div className="relative z-10 p-2 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl cursor-pointer group overflow-hidden" onClick={() => setSelectedImage(activeContent.images ? activeContent.images[activeInnerTab].src : activeContent.image)}>
                                <div className="rounded-[2rem] overflow-hidden relative aspect-[16/9] bg-gray-50">
                                  <img
                                    key={activeContent.images ? activeContent.images[activeInnerTab].src : activeContent.image}
                                    src={activeContent.images ? activeContent.images[activeInnerTab].src : activeContent.image}
                                    alt={activeContent.title}
                                    className="w-full h-full object-contain transition-opacity duration-300"
                                  />
                                </div>
                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 backdrop-blur-[1px]">
                                  <div className={`bg-white/90 backdrop-blur-sm ${TAB_THEMES[activeTab].text} p-4 rounded-full shadow-2xl`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {activeContent.features.map((f, i) => (
                              <div key={i} className={`flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${TAB_THEMES[activeTab].hoverBorder}`}>
                                <div className={`w-8 h-8 rounded-full ${TAB_THEMES[activeTab].lightBg} flex items-center justify-center ${TAB_THEMES[activeTab].text} flex-shrink-0`}>
                                  <span className="text-[10px] font-black">✓</span>
                                </div>
                                <span className="text-[13px] font-extrabold text-gray-700 capitalize tracking-tight text-left leading-snug">{f}</span>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}


                    </motion.div>
                  </AnimatePresence>



                  {/* What BillSoft Covers Section */}
                  {activeTab === "dashboard" && (
                    <section className="py-12 lg:py-16">
                      <div className="container mx-auto ">
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
                  )}

                  {/* Final CTA Section */}
                  <section className="py-12 lg:py-16 bg-white relative overflow-hidden border border-gray-100 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)]">


                    <div className="relative z-10 px-8 lg:px-16 text-center max-w-4xl mx-auto">
                      <span className="inline-block px-4 py-2 rounded-full bg-sky-50 text-sky-600 font-black text-xs capitalize tracking-widest mb-6">
                        Ready to Scale?
                      </span>
                      <h2 className="text-gray-900 mb-8 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">
                        Build Your <span className="text-sky-600">Business</span> Future.
                      </h2>
                      <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
                        Join hundreds of businesses transforming their operations with Isarva BillSoft. Start your digital journey today.
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className={`${GLOBAL_BTN_ORANGE} mx-auto`}
                        >
                          <span>Request Free Demo</span>
                          {GLOBAL_BTN_ARROW}
                        </button>
                      </div>
                    </div>
                  </section>

                </main>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Repeated Sections */}
        <div className="w-full max-w-7xl mx-auto px-6 py-12 lg:py-16">
          {/* Theme Customization Section */}
          <section className="py-12 lg:py-16 bg-white border border-gray-100 rounded-[3rem]  overflow-hidden">
            <div className="px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center text-center lg:text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 text-fuchsia-600 font-bold text-xs mb-6 capitalize tracking-widest">
                  Personalized Experience
                </div>
                <h2 className="mb-6 capitalize">
                  Stunning <span className="text-fuchsia-600">Theme</span> Customization
                </h2>
                <p className="text-lg text-gray-500 font-medium mb-0 max-w-xl mx-auto lg:mx-0">
                  Your business software shouldn't feel rigid or uninspiring. With Isarva BillSoft, you have the power to transform your daily workspace into a visually stunning environment that aligns perfectly with your company's branding and aesthetic preferences.Choose beautiful themes like Sunset Glow, Vibrant Violet, and Empire Emerald to match your business style.
                </p>
              </div>

              <div className="relative group w-full">
                <ThemeSlider onImageClick={setSelectedImage} />
              </div>
            </div>
          </section>


        </div>

        <BillsoftUniqueFeatures />
        <BillsoftFeatureSection />

        {/* FAQ Section */}
        <section className="py-12 lg:py-16  wp-aurora-gradient">
          <div className="w-full max-w-7xl px-6 rounded-[3rem] mx-auto" >
            <h2 className="text-gray-900 mb-6 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {[
                { q: "What is Isarva BillSoft Application?", a: "It is a complete billing, inventory, and business management system designed for multi-branch operations." },
                { q: "Can I manage multiple branches in one system?", a: "Yes, you can add multiple branches and switch between them anytime." },
                { q: "Does it support GST billing?", a: "Yes, GST is automatically applied based on product configuration." },
                { q: "Can I track customer and vendor balances?", a: "Yes, ledger reports show complete transaction history and closing balances." },
                { q: "Is stock transfer between warehouses possible?", a: "Yes, with a proper approval workflow including transit and receiving stages." },
                { q: "Can I customize the look of the application?", a: "Yes, you can choose different theme colors." },
                { q: "Does the system track payments?", a: "Yes, both incoming and outgoing payments through Payment In and Payment Out are fully managed and recorded." },
                { q: "What are the main modules available in Isarva BillSoft?", a: "The main modules include Sales Invoice, Purchase Invoice, Payment In, and Payment Out. , Proforma Invoice , Quotations" },
                { q: "Can the application be customized? ", a: "Yes. Based on customer-specific requirements, the Isarva BillSoft application is fully customizable. " },
                { q: " Does Isarva Billsoft provide Mult-Warehouse Concept.", a: "Yes. Multi- Warehouse Concept is supported in the application" }
              ].map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="group bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgba(14,165,233,0.12)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.2)] transition-all duration-500 overflow-hidden cursor-pointer"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <div className="flex justify-between items-center font-bold text-gray-900 list-none px-6 lg:px-8 py-4 lg:py-5 select-none min-h-[96px]">
                      <span className="pr-4 lg:pr-8 text-base lg:text-lg">{item.q}</span>
                      <div className={`w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 transition-all duration-500 shrink-0 ${isOpen ? 'rotate-45 bg-sky-600 text-white' : 'group-hover:scale-110'}`}>
                        <span className="text-2xl leading-none">+</span>
                      </div>
                    </div>
                    <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="px-6 lg:px-8 pb-5 lg:pb-6 pt-0">
                          <p className="text-gray-500 font-medium leading-relaxed text-[15px]">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block text-[10px] font-black text-sky-600 tracking-[0.28em] capitalize mb-3 bg-sky-50 px-4 py-2 rounded-full border border-sky-100">
                  MORE PRODUCTS
                </span>
                <h2 className="text-gray-900 mb-4 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">
                  Explore Our More Products
                </h2>
                <p className="text-gray-500 max-w-[600px] mx-auto text-base leading-relaxed">
                  Discover our comprehensive suite of software solutions designed to transform your business operations.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
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
                      className="flex h-full self-stretch"
                    >
                      <div className="relative rounded-3xl p-8 w-full flex flex-col flex-1 bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 items-center text-center group overflow-visible">
                        {/* Category Badge */}
                        <div className="h-7 flex items-center justify-center shrink-0 mb-4">
                          <span className="inline-flex items-center justify-center bg-white text-sky-600 text-xs font-bold px-3 py-1 rounded-full border-2 border-sky-200 shadow-md">
                            {prod.category}
                          </span>
                        </div>

                        <div className="relative w-full flex flex-col flex-1 min-h-0 items-center">
                          {/* Icon */}
                          <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                            <span className="text-3xl">{prod.icon}</span>
                          </div>

                          {/* Title */}
                          <div className="mb-2 w-full h-16 flex items-center justify-center shrink-0">
                            <h3 className="capitalize line-clamp-2">
                              {prod.title}
                            </h3>
                          </div>

                          {/* Tagline */}
                          <div className="mb-2 flex h-[3.25rem] w-full items-center justify-center shrink-0">
                            {prod.tagline ? (
                              <p className="text-sky-600 font-bold text-sm capitalize tracking-wide line-clamp-2 leading-snug">
                                {prod.tagline}
                              </p>
                            ) : (
                              <span className="sr-only">No tagline</span>
                            )}
                          </div>

                          {/* Description */}
                          <p className="flex-1 text-gray-500 leading-relaxed mb-6 text-sm font-medium min-h-[4.75rem] line-clamp-4 w-full">
                            {prod.shortDescription}
                          </p>

                          {/* CTA Link at bottom */}
                          <div className="mt-auto shrink-0 flex items-center justify-center gap-2 text-sky-600 font-black text-xs capitalize tracking-widest pt-4 border-t border-gray-50 group-hover:gap-3 transition-all w-full">
                            Explore Product
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>

            {/* View All Products CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link
                href="/products"
                prefetch={false}
                className={`${GLOBAL_BTN_ORANGE} mx-auto`}
              >
                <span>View All Products</span>
                {GLOBAL_BTN_ARROW}
              </Link>
            </motion.div>
          </div>
        </section>

        <ContactFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          preSelectedType="Product"
          preSelectedItem="BillSoft Application"
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
                  <h3 className="capitalize tracking-widest">{activeContent.title}</h3>
                  <p className="text-white/60 font-medium mt-1 capitalize text-sm tracking-widest">{activeContent.subtitle}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
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
    image: "/products/billsoft/ledger-statement-1.jpg",

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

const uniqueFeaturesData = [
  {
    title: "AI Neural Intelligence Dashboard",
    description: "Predicts projected settlement values based on current monthly trends and historical transaction patterns.",
    points: [
      "Monthly settlement forecasting",
      "Revenue growth prediction",
      "Deep Revenue Analytics (MoM)",
      "Smart analytics widgets",
    ],
    color: "from-sky-400 to-blue-600",
    icon: "🧠"
  },
  {
    title: "Smart Service Module",
    description: "Efficiently create and manage custom service entries with professional quotation generation.",
    points: [
      "Manual item & service creation",
      "Custom subject banners",
      "Service quotation preparation",
      "Easy document sharing",
    ],
    color: "from-teal-400 to-emerald-500",
    icon: "⚙️"
  },
  {
    title: "Dynamic Invoice Templates",
    description: "Multiple professionally designed Invoice Templates tailored for different presentation styles.",
    points: [
      "Clean corporate structures",
      "Modern billing formats",
      "Compact & detailed views",
      "Branding consistency",
    ],
    color: "from-orange-400 to-rose-500",
    icon: "📄"
  },
  {
    title: "Theme Personalization",
    description: "13 modern UI themes to personalize the overall appearance based on your branding preferences.",
    points: [
      "Professionally crafted palettes",
      "Custom dashboard layouts",
      "Menu styling enhancements",
      "Engaging UX on all devices",
    ],
    color: "from-purple-400 to-fuchsia-500",
    icon: "🎨"
  },
  {
    title: "Multi-Branch Management",
    description: "Powerful Multi-Branch Architecture for businesses operating across multiple locations.",
    points: [
      "Separate branch-level data",
      "Smooth branch switching",
      "Independent tracking",
      "Centralized administration",
    ],
    color: "from-blue-400 to-indigo-500",
    icon: "🏢"
  },
  {
    title: "Flexible Signature Management",
    description: "Dual signature support for enhanced convenience and professionalism across documents.",
    points: [
      "Draw signatures manually",
      "Upload digital images",
      "Apply across invoices",
      "Secure management",
    ],
    color: "from-amber-400 to-orange-500",
    icon: "✍️"
  },
  {
    title: "Mobile Office Experience",
    description: "Seamless usability across all devices, enabling you to operate your business anytime, anywhere.",
    points: [
      "Adaptive responsive layouts",
      "Touch-friendly controls",
      "Collapsible smart navigation",
      "Optimized dashboard view",
    ],
    color: "from-pink-400 to-rose-500",
    icon: "📱"
  },
  {
    title: "Advanced Business Intelligence",
    description: "Detailed operational and financial insights through interactive visual reports.",
    points: [
      "Revenue trend monitoring",
      "Branch performance comparison",
      "Settlement & summaries",
      "Data-driven insights",
    ],
    color: "from-indigo-400 to-violet-600",
    icon: "📈"
  }
];

function BillsoftUniqueFeatures() {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden bg-white">
      {/* Vibrant Gradient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-50 via-white to-blue-50/50"></div>

      {/* Decorative colored blobs to add vibrancy */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-sky-300/30 mix-blend-multiply filter blur-[100px]"></div>
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-fuchsia-300/30 mix-blend-multiply filter blur-[100px]"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-emerald-300/30 mix-blend-multiply filter blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 relative z-10 w-full">
        <div className="text-center mb-10">
          <span className="block text-[14px] font-black text-sky-600 tracking-[0.28em] capitalize mb-2.5">
            Exclusive Capabilities
          </span>
          <h2 className="text-gray-900 mb-3.5 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">
            Unique Features Of <span className="text-sky-600">BillSoft</span> Software
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our powerful business features and intelligent capabilities that are rarely available in conventional billing software platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {uniqueFeaturesData.map((feat, i) => (
            <div key={i} className="group relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-white hover:border-blue-100 hover:-translate-y-2 overflow-hidden flex flex-col items-center text-center h-full">
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${feat.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

              <div className={`w-14 h-14 shrink-0 rounded-2xl mb-5 flex items-center justify-center text-3xl shadow-xl shadow-blue-900/10 bg-gradient-to-br ${feat.color} text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                {feat.icon}
              </div>

              <div className="w-full flex flex-col">
                <div className="mb-2 w-full h-14 flex items-center justify-center shrink-0 px-1">
                  <h3 className="line-clamp-2">{feat.title}</h3>
                </div>

                <p className="text-gray-500 text-sm mb-4 leading-snug font-medium h-[3.75rem] line-clamp-3 w-full shrink-0">
                  {feat.description}
                </p>

                <ul className="space-y-2.5 w-full">
                  {feat.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-medium text-left">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${feat.color} flex items-center justify-center flex-shrink-0 mt-0.5 text-white shadow-sm`}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BillsoftFeatureSection() {
  const [activeId, setActiveId] = useState("branch");
  const [mobileOpenId, setMobileOpenId] = useState("branch");

  const leftFeatures = billsoftFeatures.slice(0, 5);
  const rightFeatures = billsoftFeatures.slice(5);
  const activeFeature = billsoftFeatures.find((f) => f.id === activeId);

  return (
    <section className="py-12 lg:py-16 overflow-hidden bg-gray-50/50">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-6 ">
          <span className="block text-[14px] font-black text-sky-600 tracking-[0.28em] capitalize mb-2.5">
            KEY FEATURES
          </span>
          <h2 className="text-gray-900 mb-3.5 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">
            Key Features Of <span className="text-sky-600">BillSoft</span> Software
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                className="font-sans font-medium text-center text-gray-500 max-w-[600px] mx-auto text-sm leading-relaxed"
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
                         <p className="font-sans font-medium text-gray-500 text-sm leading-relaxed">
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
