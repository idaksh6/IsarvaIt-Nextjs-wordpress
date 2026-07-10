"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "../AppLink";
import ContactFormModal from "../../components/ContactFormModal";

/* ── Design Tokens ─────────────────────────────────────────── */
const CLR = {
  purple: "#A855F7",
  purpleDark: "#7C3AED",
  purpleDeep: "#6D28D9",
  purpleLight: "#F3E8FF",
  purpleMid: "#E9D5FF",
  slate: "#1E293B",
  slateLight: "#334155",
  body: "#475569",
  muted: "#94A3B8",
  white: "#FFFFFF",
  surface: "#F8F7FF",
  surfaceAlt: "#F8FAFC",
};

/* ── Feature Data ──────────────────────────────────────────── */
const features = [
  { id: "custom-theme", label: "Custom Theme Development", icon: "🎨", desc: "Create unique, brand-aligned WooCommerce themes from scratch. Fully responsive designs that provide exceptional shopping experiences across all devices.", image: "/products/woocommerce/feature-custom-theme.png", highlight: "Brand-Aligned Design" },
  { id: "product-management", label: "Product Management", icon: "📦", desc: "Effortlessly manage your product catalog with bulk uploads, variations, attributes, and categories. Organize your inventory for optimal customer experience.", image: "/products/woocommerce/feature-product-management.png", highlight: "Smart Catalog Tools" },
  { id: "payment", label: "Payment Gateway Integration", icon: "💳", desc: "Seamless integration with multiple payment gateways including PayPal, Stripe, Square, and custom payment solutions for global transactions.", image: "/products/woocommerce/feature-payment-gateway.png", highlight: "Secure Transactions" },
  { id: "coupon-management", label: "Coupon & Discount Management", icon: "🎟️", desc: "Create and manage promotional campaigns with flexible coupon codes, discount rules, and special offers to boost sales and customer loyalty.", image: "/products/woocommerce/feature-coupon-management.png", highlight: "Boost Conversions" },
  { id: "user-management", label: "User Management & Roles", icon: "👥", desc: "Manage customer accounts, user roles, and permissions. Create custom user experiences with role-based access control and customer groups.", image: "/products/woocommerce/feature-user-management.png", highlight: "Role-Based Access" },
  { id: "page-builder", label: "Custom Page Builder", icon: "📄", desc: "Design stunning product pages, landing pages, and promotional content with drag-and-drop page builders and custom templates.", image: "/products/woocommerce/feature-page-builder.png", highlight: "Drag & Drop Design" },
  { id: "coupon-dashboard", label: "Coupon Analytics", icon: "📈", desc: "Track coupon performance, redemption rates, and campaign effectiveness. Analyze discount strategies to maximize ROI on promotional activities.", image: "/products/woocommerce/Coupon-dashboard.jpg", highlight: "Data-Driven Insights" },
];

/* ── Feature Tab Button ────────────────────────────────────── */
function FeatureTab({ feature, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-bold transition-all duration-300 border-2 group"
      style={{
        background: isActive ? CLR.purple : CLR.white,
        borderColor: isActive ? CLR.purple : "#E2E8F0",
        color: isActive ? CLR.white : CLR.slateLight,
        boxShadow: isActive ? "0 8px 24px rgba(168,85,247,0.20)" : "0 2px 8px rgba(0,0,0,0.04)",
        transform: isActive ? "translateY(-2px)" : "none",
      }}
    >
      <span className="text-lg leading-none">{feature.icon}</span>
      <span className="leading-tight">{feature.label}</span>
    </button>
  );
}

/* ── Features Section ──────────────────────────────────────── */
function FeaturesSection() {
  const [activeId, setActiveId] = useState("custom-theme");
  const activeFeature = features.find((f) => f.id === activeId);
  const activeIndex = features.findIndex((f) => f.id === activeId);
  const isImageLeft = activeIndex % 2 === 0;

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden" style={{ background: CLR.surface }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl" style={{ background: CLR.purpleLight, opacity: 0.6 }} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl" style={{ background: CLR.purpleMid, opacity: 0.4 }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: CLR.purpleLight, opacity: 0.2 }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 wcs-fade-up">
          <SectionLabel>Key features</SectionLabel>
          <h2 className="mb-4" style={{ color: CLR.slate }}>
            Key Features of Our <span style={{ color: CLR.purple }}>WooCommerce</span> Development
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional WooCommerce development services that transform your online store into a powerful sales engine.
          </p>
        </div>

        {/* ── Tab Navigation (Desktop & Tablet) ── */}
        <div className="hidden sm:flex flex-wrap gap-3 justify-center mb-12">
          {features.map((f) => (
            <FeatureTab key={f.id} feature={f} isActive={activeId === f.id} onClick={() => setActiveId(f.id)} />
          ))}
        </div>

        {/* ── Feature Display Panel (Desktop & Tablet) ── */}
        <div className="hidden sm:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-3xl overflow-hidden border-2"
              style={{
                borderColor: CLR.purple + "22",
                background: CLR.white,
                boxShadow: "0 24px 80px rgba(168,85,247,0.12), 0 8px 32px rgba(0,0,0,0.06)",
              }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 min-h-[520px]`}>
                {/* Image Panel */}
                <div
                  className={`relative overflow-hidden lg:col-span-8 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
                  style={{
                    background: `linear-gradient(135deg, ${CLR.purpleLight} 0%, ${CLR.purpleMid} 100%)`,
                  }}
                >
                  {/* Decorative circles */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full" style={{ background: "rgba(168,85,247,0.12)" }} />
                  <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full" style={{ background: "rgba(109,40,217,0.08)" }} />

                  <motion.img
                    key={activeId + "-img"}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45 }}
                    src={activeFeature.image}
                    alt={activeFeature.label}
                    className="relative z-10 w-full h-full object-contain p-2 lg:p-3 rounded-2xl"
                    style={{ maxHeight: "520px" }}
                  />

                  {/* Feature badge overlay */}
                  <div className="absolute top-5 left-5 z-20">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm"
                      style={{ background: "rgba(168,85,247,0.85)", color: CLR.white }}
                    >
                      <span>{activeFeature.icon}</span>
                      <span>{activeFeature.highlight}</span>
                    </span>
                  </div>
                </div>

                {/* Content Panel */}
                <div
                  className={`flex flex-col justify-center p-8 lg:p-12 lg:col-span-4 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}
                >
                  {/* Feature number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${CLR.purple}, ${CLR.purpleDeep})`, boxShadow: "0 8px 24px rgba(168,85,247,0.35)" }}
                    >
                      <span>{activeFeature.icon}</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: CLR.purple }}>
                        Feature {String(activeIndex + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-extrabold leading-tight" style={{ color: CLR.slate }}>
                        {activeFeature.label}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base lg:text-lg leading-relaxed mb-8" style={{ color: CLR.body }}>
                    {activeFeature.desc}
                  </p>

                  {/* Progress dots */}
                  <div className="flex items-center gap-2">
                    {features.map((f, i) => (
                      <button
                        key={f.id}
                        onClick={() => setActiveId(f.id)}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: activeId === f.id ? "28px" : "8px",
                          height: "8px",
                          background: activeId === f.id ? CLR.purple : CLR.purpleMid,
                        }}
                        aria-label={`Go to feature: ${f.label}`}
                      />
                    ))}
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex items-center gap-3 mt-6">
                    <button
                      onClick={() => {
                        const prevIndex = (activeIndex - 1 + features.length) % features.length;
                        setActiveId(features[prevIndex].id);
                      }}
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 hover:-translate-x-0.5"
                      style={{ borderColor: CLR.purple + "44", color: CLR.purple }}
                      aria-label="Previous feature"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                      onClick={() => {
                        const nextIndex = (activeIndex + 1) % features.length;
                        setActiveId(features[nextIndex].id);
                      }}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:translate-x-0.5 shadow-md"
                      style={{ background: CLR.purple, color: CLR.white, boxShadow: "0 4px 16px rgba(168,85,247,0.35)" }}
                      aria-label="Next feature"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <span className="text-sm font-semibold ml-1" style={{ color: CLR.muted }}>
                      {activeIndex + 1} / {features.length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Mobile Accordion ── */}
        <div className="sm:hidden space-y-3">
          {features.map((f, index) => {
            const isOpen = activeId === f.id;
            return (
              <motion.div
                key={f.id}
                initial={false}
                className="rounded-2xl overflow-hidden border-2 transition-all duration-300"
                style={{
                  borderColor: isOpen ? CLR.purple : "#E2E8F0",
                  boxShadow: isOpen ? "0 8px 32px rgba(168,85,247,0.15)" : "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveId(isOpen ? null : f.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors"
                  style={{ background: isOpen ? CLR.purpleLight : CLR.white }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-all"
                    style={{
                      background: isOpen ? `linear-gradient(135deg, ${CLR.purple}, ${CLR.purpleDeep})` : "#F1F5F9",
                      boxShadow: isOpen ? "0 4px 16px rgba(168,85,247,0.30)" : "none",
                    }}
                  >
                    <span>{f.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold tracking-widest uppercase mb-0.5" style={{ color: isOpen ? CLR.purple : CLR.muted }}>
                      Feature {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="font-bold text-sm leading-snug" style={{ color: isOpen ? CLR.purpleDeep : CLR.slate }}>
                      {f.label}
                    </div>
                  </div>
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                    style={{
                      background: isOpen ? CLR.purple : "#F1F5F9",
                      transform: isOpen ? "rotate(180deg)" : "none",
                    }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke={isOpen ? CLR.white : "#64748B"} strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white">
                        {/* Feature image */}
                        <div className="relative" style={{ background: `linear-gradient(135deg, ${CLR.purpleLight}, ${CLR.purpleMid})` }}>
                          <div className="absolute top-3 left-3 z-10">
                            <span
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold"
                              style={{ background: "rgba(168,85,247,0.85)", color: CLR.white }}
                            >
                              <span>{f.icon}</span>
                              <span>{f.highlight}</span>
                            </span>
                          </div>
                          <img
                            src={f.image}
                            alt={f.label}
                            className="w-full h-52 object-contain p-4 rounded-xl"
                          />
                        </div>
                        {/* Description */}
                        <div className="px-5 py-4">
                          <p className="text-sm leading-relaxed" style={{ color: CLR.body }}>{f.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Services Data ─────────────────────────────────────────── */
const services = [
  {
    id: "store-setup",
    title: "WooCommerce Store Setup",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: "Launch your online store with a fully configured WooCommerce setup tailored to your business needs, including theme customization and essential settings."
  },
  {
    id: "order-management",
    title: "Order Management",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    description: "Efficient order processing system to manage customer orders, track statuses, and streamline your sales workflow."
  },
  {
    id: "product-upload",
    title: "Product Upload & Categorization",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    description: "Get your product catalog organized with bulk uploads, custom attributes, and logical category structuring for a smooth shopping experience."
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway Integration",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    description: "Seamless integration with trusted payment gateways like PayPal, Stripe, and local providers to ensure secure transactions."
  },
  {
    id: "shipping-api",
    title: "Shipping API Integration",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0zm0-7v5H5V10h11l5-5V10z" />
      </svg>
    ),
    description: "Automated shipping rate calculations and real-time tracking with leading carriers via integrated shipping APIs."
  },
  {
    id: "plugin-install",
    title: "Plugin Installation & Configuration",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: "Extend your store's capabilities with the right plugins, carefully selected, installed, and configured to match your goals."
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization for WooCommerce",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    description: "Boost your product visibility with on-page SEO, keyword targeting, and schema markup specifically optimized for WooCommerce."
  },
  {
    id: "mobile-design",
    title: "Mobile-Responsive Design",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    description: "Ensure a smooth and engaging shopping experience on all devices with a responsive design that adapts to screens of all sizes."
  },
  {
    id: "maintenance",
    title: "Ongoing Maintenance & Support",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: "Stay worry-free with regular updates, security checks, and expert support to keep your WooCommerce store running smoothly."
  },
];

/* ── FAQ Data ──────────────────────────────────────────────── */
const faqs = [
  { question: "Does WooCommerce offer inventory tracking capabilities?", answer: "Yes, WooCommerce comes with built-in inventory management. You can track stock levels, set low stock notifications, manage backorders, and hide out-of-stock items automatically." },
  { question: "Can I manage orders and customer details within WooCommerce?", answer: "Absolutely! WooCommerce provides a comprehensive order management system where you can view, process, and track all customer orders. You can also manage customer information, view purchase history, and handle refunds and exchanges directly from the dashboard." },
  { question: "Does WooCommerce support product variations like size and color?", answer: "Yes, WooCommerce has robust support for product variations. You can create variable products with multiple attributes like size, color, material, etc. Each variation can have its own price, stock level, and SKU." },
  { question: "Does WooCommerce support coupon codes and discounts?", answer: "Yes, WooCommerce includes a powerful coupon system. You can create percentage discounts, fixed cart discounts, fixed product discounts, and set usage restrictions like minimum purchase amounts, specific products, or user roles." },
  { question: "Can I integrate multiple payment gateways with WooCommerce?", answer: "Absolutely! WooCommerce supports integration with numerous payment gateways including PayPal, Stripe, Square, Authorize.net, and many more. You can offer multiple payment options to your customers simultaneously." },
  { question: "Can I manage multiple product categories and filters in WooCommerce?", answer: "Yes, WooCommerce allows you to create unlimited product categories and subcategories. You can also add custom attributes and filters to help customers easily find products based on specific criteria like price range, brand, size, color, and more." },
  { question: "Can WooCommerce handle digital products as well as physical goods?", answer: "Yes, WooCommerce fully supports both digital and physical products. For digital products, you can enable automatic download links sent to customers after purchase, set download limits, and expiration dates. Physical products can be managed with shipping options and inventory tracking." },
  { question: "Is WooCommerce scalable for growing businesses?", answer: "Absolutely! WooCommerce is highly scalable and can grow with your business. Whether you start with a handful of products or expand to thousands of SKUs with high traffic volumes, WooCommerce can be optimised with caching, CDN integration, and cloud hosting to handle the load efficiently without compromising performance." },
];

/* ── Scroll Reveal Hook ────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wcs-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".wcs-fade-up,.wcs-fade-left,.wcs-fade-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Section Label ─────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <span
      className="inline-block text-[11px] font-extrabold tracking-[0.26em]  mb-4 px-4 py-1.5 rounded-full"
      style={{ color: CLR.purple, background: CLR.purpleLight }}
    >
      {children}
    </span>
  );
}



/* ── FAQ Item Component ────────────────────────────────────── */
function FAQItem({ faq, globalIndex, openIndex, setOpenIndex }) {
  const isOpen = openIndex === globalIndex;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (globalIndex % 5) * 0.05 }}
      className="rounded-[20px] overflow-hidden border-2 transition-all duration-300 flex flex-col"
      style={{
        borderColor: isOpen ? CLR.purple + "55" : "#E2E8F0",
        boxShadow: isOpen ? "0 4px 24px rgba(168,85,247,0.10)" : "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left transition-colors flex-grow min-h-[96px]"
        style={{ background: isOpen ? CLR.purpleLight : CLR.white }}
      >
        <div className="flex items-center gap-4 flex-grow">
          {/* Number badge instead of ❓ */}
          <div
            className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-sm font-extrabold transition-all"
            style={{
              background: isOpen ? CLR.purple : CLR.purpleLight,
              color: isOpen ? CLR.white : CLR.purpleDeep,
            }}
          >
            {globalIndex + 1}
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-[17px] leading-snug" style={{ color: isOpen ? CLR.purpleDeep : CLR.slate }}>
              {faq.question}
            </h3>
          </div>
        </div>
        <div
          className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center transition-all"
          style={{
            background: isOpen ? CLR.purple : "#F1F5F9",
            transform: isOpen ? "rotate(180deg)" : "none",
          }}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke={isOpen ? CLR.white : "#64748B"} strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 pl-[76px]">
              <p className="text-[15px] leading-relaxed" style={{ color: CLR.body }}>{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── FAQ Section ───────────────────────────────────────────── */
function FAQSection({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(null);

  // Split FAQs into two columns
  const col1 = faqs.filter((_, i) => i % 2 === 0);
  const col2 = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden" style={{ background: CLR.surface }}>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: CLR.purpleLight, opacity: 0.5 }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: CLR.purpleMid, opacity: 0.3 }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 wcs-fade-up">
          <SectionLabel>Faq</SectionLabel>
          <h2 className="mb-4" style={{ color: CLR.slate }}>Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find answers to common questions about WooCommerce development and our services</p>
        </div>

        {/* 2-column FAQ grid */}
        <div className="columns-1 lg:columns-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="break-inside-avoid mb-4">
              <FAQItem faq={faq} globalIndex={index} openIndex={openIndex} setOpenIndex={setOpenIndex} />
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-12">
          <p className="mb-5 text-sm" style={{ color: CLR.body }}>Still have questions? We&apos;re here to help!</p>
          <button
            onClick={onOpenModal}
            className="btn-premium-orange group !px-8 !py-4 mx-auto"
          >
            <div className="shimmer"></div>
            <span className="relative z-10 flex items-center gap-2">
              <span>Request Quote</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Main Export ───────────────────────────────────────────── */
export default function ProductDetailPremiumWooCommerce({ product, relatedProducts, allProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useScrollReveal();

  return (
    <>
      <style>{`
        .wcs-fade-up    { opacity:0; transform:translateY(28px);  transition:opacity .7s ease,transform .7s ease; }
        .wcs-fade-left  { opacity:0; transform:translateX(-32px); transition:opacity .7s ease,transform .7s ease; }
        .wcs-fade-right { opacity:0; transform:translateX(32px);  transition:opacity .7s ease,transform .7s ease; }
        .wcs-visible    { opacity:1!important; transform:translate(0)!important; }

        .wcs-svc-card { transition:transform .22s ease,box-shadow .22s ease; }
        .wcs-svc-card:hover { transform:translateY(-4px); }
      `}</style>

      <div className="overflow-x-hidden" style={{ color: CLR.slate }}>

        {/* ══ HERO ═══════════════════════════════════════════════ */}
        <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden" style={{ background: "linear-gradient(160deg,#FAF5FF 0%,#F3E8FF 40%,#F8F7FF 80%,#FFFFFF 100%)" }}>
          <div className="absolute top-16 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: CLR.purple, opacity: 0.06 }} />
          <div className="absolute top-32 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: CLR.purpleDark, opacity: 0.05 }} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left — Content */}
              <div className="wcs-fade-left text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6" style={{ background: CLR.purpleLight, color: CLR.purpleDeep }}>
                  <span>🛒</span><span>WooCommerce Experts</span>
                </div>

                <h1 className="mb-6 text-center lg:text-left" style={{ color: CLR.slate }}>
                  Build Your Dream{" "}
                  <span className="whitespace-nowrap" style={{ color: CLR.purple }}>E-Commerce</span>{" "}
                  Store with WooCommerce
                </h1>

                <p className="text-base lg:text-xl text-gray-600 leading-relaxed font-medium mb-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                  Professional WooCommerce development services for scalable online stores. We create feature-rich e-commerce platforms with seamless payment integration, inventory management, and mobile optimization that drive sales.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start">
                  {[["28%+", "Global Market Share"], ["100+", "Stores Built"], ["99.9%", "Uptime SLA"]].map(([val, lbl]) => (
                    <div key={lbl} className="text-center lg:text-left">
                      <div className="text-2xl font-extrabold" style={{ color: CLR.purple }}>{val}</div>
                      <div className="text-xs font-semibold mt-0.5" style={{ color: CLR.muted }}>{lbl}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full max-w-md sm:max-w-none">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-premium-orange group !px-8 !py-4 h-[56px] flex items-center justify-center w-full sm:w-auto"
                  >
                    <div className="shimmer"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Request Demo</span>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 h-[56px] rounded-full font-bold text-base border-2 transition-all hover:-translate-y-0.5 no-underline w-full sm:w-auto" style={{ color: CLR.purpleDeep, borderColor: CLR.purple + "66", background: CLR.white }}>
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Right — Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="wcs-fade-right relative"
              >
                <div className="absolute inset-0 rounded-3xl blur-3xl pointer-events-none" style={{ background: "linear-gradient(135deg,rgba(168,85,247,0.16),rgba(109,40,217,0.1))", transform: "scale(0.95) translateY(12px)" }} />
                <img
                  src="/products/woocommerce/woocommerce-hero-staging.png"
                  alt="WooCommerce E-Commerce Platform"
                  className="relative z-10 w-full h-auto rounded-3xl"
                  style={{ boxShadow: "0 32px 80px rgba(168,85,247,0.18), 0 16px 40px rgba(0,0,0,0.09)" }}
                />
              </motion.div>

            </div>
          </div>
        </section>

        {/* ══ CORE INFO ══════════════════════════════════════════ */}
        <section className="py-12 lg:py-16" style={{ background: CLR.white }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="wcs-fade-left relative order-2 lg:order-1">
                <div className="rounded-3xl overflow-hidden" style={{ boxShadow: "0 32px 80px rgba(168,85,247,0.15)" }}>
                  <img src="/products/woocommerce/woocommerce-core-staging.png" alt="WooCommerce Business Dashboard" className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-3xl pointer-events-none" style={{ background: CLR.purple, opacity: 0.1 }} />
                <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full blur-3xl pointer-events-none" style={{ background: CLR.purpleDark, opacity: 0.08 }} />
                <div className="absolute bottom-6 left-6 hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl" style={{ background: CLR.white }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{ background: CLR.purpleLight }}>🛒</div>
                  <div>
                    <div className="font-extrabold text-sm" style={{ color: CLR.slate }}>28%+ Market Share</div>
                    <div className="text-xs" style={{ color: CLR.muted }}>World&apos;s #1 E-Commerce Platform</div>
                  </div>
                </div>
              </div>
              <div className="wcs-fade-right text-center lg:text-left flex flex-col items-center lg:items-start order-1 lg:order-2">
                <SectionLabel>Why woocommerce</SectionLabel>
                <h2 className="mb-6 text-center lg:text-left" style={{ color: CLR.slate }}>
                  Power Your Online Business with <span style={{ color: CLR.purple }}>WooCommerce</span>
                </h2>
                <div className="space-y-5 text-center lg:text-left">
                  {[
                    "WooCommerce is the world's most popular open-source e-commerce platform, powering over 28% of all online stores. Our custom development services transform your WordPress site into a powerful, scalable online store that grows with your business.",
                    "We specialize in creating fully customized WooCommerce solutions that go beyond standard templates. From custom payment gateways and shipping integrations to advanced product configurations and multi-vendor marketplaces, we build exactly what your business needs to succeed online.",
                    "Our development approach focuses on performance, security, and user experience. We optimize every aspect of your store for speed, implement robust security measures, and create intuitive shopping experiences that convert visitors into customers.",
                  ].map((text, i) => (
                    <p key={i} className="text-base leading-relaxed" style={{ color: CLR.body }}>{text}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-start">
                  {["WordPress", "WooCommerce", "PHP", "JavaScript", "MySQL"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-full text-xs font-semibold border" style={{ borderColor: CLR.purple + "44", color: CLR.purpleDeep, background: CLR.purpleLight }}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ FEATURES ══════════════════════════════════════════ */}
        <FeaturesSection />

        {/* ══ WHAT WE OFFER ════════════════════════════════════ */}
        <section className="py-12 lg:py-16" style={{ background: CLR.white }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10 wcs-fade-up">
              <SectionLabel>Our services</SectionLabel>
              <h2 className="mb-4" style={{ color: CLR.slate }}>
                What We Offer with <span style={{ color: CLR.purple }}>WooCommerce</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                End-to-end WooCommerce solutions tailored to your business goals and industry requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, i) => (
                <motion.div key={svc.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }} className="wcs-svc-card rounded-2xl p-6 border-2 text-center" style={{ background: CLR.white, borderColor: "#F1F0FF", boxShadow: "0 2px 16px rgba(168,85,247,0.06)" }}>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm mx-auto" style={{ background: `linear-gradient(135deg,${CLR.purple},${CLR.purpleDeep})` }}>
                      <span>{svc.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 leading-snug" style={{ color: CLR.slate }}>{svc.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: CLR.body }}>{svc.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ════════════════════════════════════════════════ */}
        <FAQSection onOpenModal={() => setIsModalOpen(true)} />

        {/* ══ CTA ═══════════════════════════════════════════════ */}
        <section className="py-12 lg:py-16 relative overflow-hidden" style={{ background: CLR.surfaceAlt }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative rounded-[32px] overflow-hidden text-center px-8 md:px-16 py-14 md:py-20 border border-slate-100 bg-white"
              style={{ boxShadow: "0 30px 90px rgba(168, 85, 247, 0.16), 0 12px 30px rgba(168, 85, 247, 0.08)" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243,232,255,0.4)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(168,85,247,0.08)" }} />
              <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(236,72,153,0.05)" }} />
              <div className="relative z-10">
                <span className="inline-block text-xs font-extrabold tracking-[0.25em] mb-5 px-5 py-2 rounded-full" style={{ background: "rgba(168,85,247,0.08)", color: "#7C3AED" }}>Get started today</span>
                <h2 className="text-slate-800 mb-5 font-black">
                  Ready to launch your<br className="hidden md:block" /> <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">online store?</span>
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                  Join thousands of successful online businesses powered by WooCommerce. Start your e-commerce journey today with our expert development team.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-premium-orange group !px-8 !py-4 h-[56px] flex items-center justify-center w-full sm:w-auto"
                  >
                    <div className="shimmer"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Request Demo</span>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 h-[56px] rounded-full font-bold text-base bg-white border-2 border-slate-100 text-slate-700 hover:border-purple-200 hover:text-purple-600 shadow-sm hover:shadow-md transition-all duration-350 hover:-translate-y-0.5 w-full sm:w-auto no-underline">
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ RELATED PRODUCTS ══════════════════════════════════ */}
        {allProducts && (
          <section className="py-12 lg:py-16" style={{ background: CLR.white }}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12 wcs-fade-up">
                <SectionLabel>More products</SectionLabel>
                <h2 className="mb-4" style={{ color: CLR.slate }}>Explore Our More Products</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover our comprehensive suite of software solutions designed to transform your business operations.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {allProducts
                  .filter((p) => !p.slug.includes("staging") && !p.slug.includes("-old") && p.slug !== "bill-soft" && p.slug !== product?.slug)
                  .slice(0, 3)
                  .map((prod, i) => (
                    <motion.div key={prod.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}>
                      <Link href={`/product/${prod.slug}`} className="block h-full no-underline group">
                        <div className="relative rounded-3xl p-7 h-full flex flex-col items-center text-center border-2 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1" style={{ background: CLR.white, borderColor: "#F1F0FF" }}>
                          <div className="mb-5 text-xs font-bold px-3 py-1 rounded-full border" style={{ background: CLR.purpleLight, color: CLR.purpleDeep, borderColor: CLR.purple + "44" }}>{prod.category}</div>
                          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-md" style={{ background: `linear-gradient(135deg,${CLR.purple},${CLR.purpleDeep})` }}>{prod.icon}</div>
                          <h3 className="font-bold mb-1 leading-snug" style={{ color: CLR.slate }}>{prod.title}</h3>
                          {prod.tagline && <p className="text-sm font-semibold mb-3" style={{ color: CLR.purple }}>{prod.tagline}</p>}
                          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: CLR.body }}>{prod.shortDescription}</p>
                          <div className="flex items-center gap-1.5 font-semibold text-sm mt-auto pt-3 border-t w-full justify-center" style={{ borderColor: "#F1F0FF", color: CLR.purple }}>
                            Explore Product
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
              </div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-12">
                <Link href="/products" className="btn-premium-orange group !px-8 !py-4 mx-auto no-underline inline-block">
                  <div className="shimmer"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    <span>View All Products</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        <ContactFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          preSelectedType="Product"
          preSelectedItem={product?.title}
          allItems={allProducts}
        />
      </div>
    </>
  );
}
