"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";

const VIOLET = "#8B5CF6";
const VIOLET_DARK = "#7C3AED";
const PURPLE = "#A855F7";

export default function ProductDetailPremiumMobile({
  product,
  relatedProducts,
  allProducts,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white font-sans selection:bg-violet-100 selection:text-violet-900">
      {/* 1. Centered Hero Section */}
      <section className="relative pt-40 lg:pb-32 pb-10 overflow-hidden bg-gradient-to-b from-[#f5f3ff] via-[#faf5ff] to-white">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat"
          }}
        ></div>

        {/* Violet Radial Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_600px_500px_at_center_45%,rgba(139,92,246,0.12)_0%,rgba(139,92,246,0.05)_50%,transparent_100%)] pointer-events-none"></div>

        {/* Additional Violet Glow Accents */}
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#8B5CF6] opacity-[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#7C3AED] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[32px] md:text-[50px] font-extrabold text-[#000000] leading-tight mb-8">
              Complete Management Solution<br />
              <span className="text-[#8B5CF6]">
                Mobile Service Center
              </span>{" "}
              <span className="text-[#000000]">
                Software
              </span>
              <span style={{ color: VIOLET }}>.</span>
            </h1>
            <p className="text-base text-[#444444] mb-8 max-w-3xl mx-auto leading-relaxed">
              This software basically designed for mobile repair agencies to manage their customer mobile repair work (job sheets) easily and effectively. Here software admin or technician will create job sheet for users mobile repair works. Job sheet consists of customer information, customer mobile defect description and job sheet status.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="press-illusion-btn bg-violet-400 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 flex cursor-pointer"
              >
                <span>DOWNLOAD BROCHURE</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 9"
                  className="h-2 w-4"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Full Width Dashboard Animation with Wings */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-dashboard-wrapper"
        >
          <div className="dashboard-animation left">
            <div className="scroll-img"></div>
          </div>
          <div className="dashboard-animation right">
            <div className="scroll-img"></div>
          </div>
          <div className="dashboard-main-img">
            <div className="relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] bg-white">
              <img
                src="/dashboard.webp"
                alt="Mobile Service Center Dashboard"
                className="w-full object-contain lg:h-[668px] h-full shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Core Mobile Service Section */}
      <section className="lg:py-32 py-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:text-left text-center">
            {/* Left Side - Image (Sticky on Desktop) */}
            <div className="relative lg:sticky lg:top-28 lg:self-start">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/dashboard.webp"
                  alt="Mobile Service Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#8B5CF6] opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#8B5CF6] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-4xl md:text-[50px] font-extrabold text-[#000000] mb-6 leading-tight">
                Streamline Your{" "}
                <span className="text-[#8B5CF6]">Mobile Repair Operations</span>
              </h2>

              <p className="text-lg text-[#444444] mb-6 leading-relaxed">
                Our Mobile Service Center software is specifically designed for mobile repair agencies to manage customer mobile repair work through comprehensive job sheets easily and effectively. Whether you're running a small repair shop or a multi-branch service center, our platform provides all the tools you need.
              </p>

              <p className="text-lg text-[#444444] mb-6 leading-relaxed">
                Admins and technicians can quickly create detailed job sheets for users' mobile repair works, capturing essential customer information, detailed defect descriptions, and real-time job sheet status. The system enables seamless management of opened, queued, and delivered orders, ensuring nothing falls through the cracks.
              </p>

              <p className="text-lg text-[#444444] mb-8 leading-relaxed">
                With instant job order printing, SMS notification capabilities to keep customers informed, and support for managing multiple branches, our software scales with your business. Experience the efficiency of having all your repair operations, inventory, and customer communications in one powerful, easy-to-use system.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="press-illusion-btn bg-violet-400 text-white font-bold px-6 py-2 text-base items-center space-x-2 inline-flex cursor-pointer"
              >
                <span>Download Brochure</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 9"
                  className="h-2 w-4"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mobile Service Feature Section */}
      <div id="mobile-features-section">
        <MobileFeatureSection />
      </div>

      {/* 4. CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-transparent to-purple-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-violet-400 to-purple-500 rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(139,92,246,0.2)]"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block text-xs font-black text-white/90 tracking-[0.25em] uppercase mb-4 bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm">
                  GET STARTED TODAY
                </span>

                <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold text-white leading-tight mb-6">
                  Ready to transform your <br className="hidden md:block" />
                  repair service operations?
                </h2>

                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join mobile service centers using our software for streamlined job management, improved customer satisfaction, and increased efficiency.
                  Download our brochure or schedule a personalized demo today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative bg-white text-violet-600 px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                  >
                    <span>Download Brochure</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-violet-600 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Request Demo</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore More Products Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-black text-[#8B5CF6] tracking-[0.28em] uppercase mb-3 bg-[#8B5CF6]/10 px-4 py-2 rounded-full">
                MORE PRODUCTS
              </span>
              <h2 className="text-[clamp(32px,4.5vw,48px)] font-extrabold text-[#0a0a0a] leading-tight mb-4">
                Explore Our More Products
              </h2>
              <p className="text-[#6b7280] max-w-[600px] mx-auto text-base leading-relaxed">
                Discover our comprehensive suite of software solutions designed to transform your business operations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts
              .filter(p => p.slug !== product.slug)
              .slice(0, 3)
              .map((prod, index) => (
                <motion.div
                  key={prod.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/products/${prod.slug}`}
                    className="block"
                  >
                    <div className="relative rounded-3xl p-8 h-full bg-white border-2 border-gray-100 shadow-lg">
                      <div className="relative text-center md:text-left">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0">
                          <span className="text-3xl">{prod.icon}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {prod.title}
                        </h3>

                        {/* Tagline */}
                        {prod.tagline && (
                          <p className="text-[#8B5CF6] font-semibold mb-3">
                            {prod.tagline}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                          {prod.shortDescription}
                        </p>

                        {/* CTA Link */}
                        <div className="flex items-center justify-center md:justify-start gap-2 text-[#8B5CF6] font-semibold">
                          Explore Product
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute -top-11 -right-2 bg-[#8B5CF6]/10 text-[#8B5CF6] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#8B5CF6]/30 shadow-md">
                          {prod.category}
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem={product.title}
        allItems={allProducts}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOBILE SERVICE FEATURE DATA
───────────────────────────────────────────────────────────── */
const mobileFeatures = [
  {
    id: "service-entry",
    label: "Service Entry",
    icon: "📝",
    color: "#8B5CF6",
    desc: "Enables to quickly create the customer job orders.",
    placeholder: "SE",
    image: "/dashboard.webp",
  },
  {
    id: "job-order",
    label: "Job Order Management",
    icon: "📋",
    color: "#7C3AED",
    desc: "View & manage the Opened, Queued & Delivered Orders.",
    placeholder: "JO",
    image: "/dashboard.webp",
  },
  {
    id: "job-management",
    label: "Job Management",
    icon: "🔧",
    color: "#A855F7",
    desc: "Allows the managing various job sheets.",
    placeholder: "JM",
    image: "/dashboard.webp",
  },
  {
    id: "print",
    label: "Print Job Orders",
    icon: "🖨️",
    color: "#8B5CF6",
    desc: "Enables to instantly print the created job orders.",
    placeholder: "PR",
    image: "/dashboard.webp",
  },
  {
    id: "branches",
    label: "Manage Multiple Branches",
    icon: "🏢",
    color: "#7C3AED",
    desc: "Allows to manage the multiple branches of the service centres.",
    placeholder: "MB",
    image: "/dashboard.webp",
  },
  {
    id: "sms",
    label: "SMS Notifications",
    icon: "💬",
    color: "#A855F7",
    desc: "Have functionality send an instant SMS Notification to customers.",
    placeholder: "SMS",
    image: "/dashboard.webp",
  },
];

/* ─────────────────────────────────────────────────────────────
   PLACEHOLDER IMAGE COMPONENT
───────────────────────────────────────────────────────────── */
function FeaturePlaceholder({ feature }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center rounded-2xl overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${feature.color}10 0%, ${feature.color}20 100%)`,
      }}
    >
      <img
        src={feature.image}
        alt={feature.label}
        className="w-full h-full object-contain"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   MOBILE SERVICE FEATURE ORBIT SECTION
──────────────────────────────────────────────────────────── */
function MobileFeatureSection() {
  const [activeId, setActiveId] = useState("service-entry");
  const [mobileOpenId, setMobileOpenId] = useState("service-entry");

  const leftFeatures = mobileFeatures.slice(0, 3);
  const rightFeatures = mobileFeatures.slice(3);
  const activeFeature = mobileFeatures.find((f) => f.id === activeId) || mobileFeatures[0];

  return (
    <section className="py-20 overflow-hidden bg-[#F7F7F7]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="block text-[10px] font-black text-[#8B5CF6] tracking-[0.28em] uppercase mb-2.5">
            SOFTWARE FEATURES
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-[#0a0a0a] leading-tight mb-3.5">
            Key Features Of <span className="text-[#8B5CF6]">Mobile Service Center</span> Software
          </h2>
          <p className="text-[#6b7280] max-w-[520px] mx-auto text-[15px] leading-relaxed">
            Comprehensive repair management features designed to streamline job tracking, improve customer service, and maximize service center efficiency.
          </p>
        </div>

        {/* ── DESKTOP ORBIT ── */}
        <div className="hidden lg:block">
          <div className="relative h-[605px] mx-auto xl:w-[80%] lg:w-full">
            {/* Violet arc ellipse */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] rounded-full border-[1.5px] pointer-events-none z-0"
              style={{ borderColor: 'rgba(139, 92, 246, 0.42)' }}
            />

            {/* Left column */}
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 flex flex-col items-end gap-10 z-10 w-[220px]">
              {leftFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold whitespace-nowrap ${activeId === feature.id
                    ? "bg-gray-900 border-violet-600 text-black shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "border-violet-300 text-gray-800 hover:border-violet-500 hover:shadow-md"
                    }`}
                >
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {feature.label}
                  {activeId === feature.id && (
                    <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[7px] border-l-violet-900" />
                  )}
                </button>
              ))}
            </div>

            {/* Center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 2xl:w-[72%] lg:w-[70%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full h-full rounded-xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.15)]"
                >
                  <img
                    src={activeFeature.image}
                    alt={activeFeature.label}
                    className="w-full h-full object-contain bg-white"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right column */}
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 flex flex-col items-start gap-10 z-10 w-[220px]">
              {rightFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold whitespace-nowrap ${activeId === feature.id
                    ? "bg-gray-900 border-violet-600 text-black shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "border-violet-300 text-gray-800 hover:border-violet-500 hover:shadow-md"
                    }`}
                >
                  {feature.label}
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {activeId === feature.id && (
                    <span className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[7px] border-r-violet-900" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mt-3 pb-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeId + "-d"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
                className="text-center text-[#6b7280] max-w-[500px] mx-auto text-sm leading-relaxed"
              >
                {activeFeature.desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* ── MOBILE ACCORDION ── */}
        <div className="lg:hidden border-t border-gray-200">
          {mobileFeatures.map((feature) => {
            const isOpen = mobileOpenId === feature.id;
            return (
              <div key={feature.id} className="border-b border-gray-200">
                <button
                  onClick={() => setMobileOpenId(isOpen ? null : feature.id)}
                  className="group w-full flex items-center justify-between p-4 bg-transparent border-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-200 ${isOpen
                        ? "bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] shadow-md scale-110"
                        : "bg-gray-100"
                        }`}
                    >
                      <span className={isOpen ? "filter drop-shadow" : ""}>
                        {feature.icon}
                      </span>
                    </div>
                    <span className={`font-semibold text-sm ${isOpen ? "text-[#8B5CF6]" : "text-gray-800"}`}>
                      {feature.label}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-[#8B5CF6] rotate-180" : "bg-gray-100"
                      }`}
                  >
                    <svg
                      className={`w-4 h-4 ${isOpen ? "text-white" : "text-gray-600"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
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
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-3">
                          <img
                            src={feature.image}
                            alt={feature.label}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
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
