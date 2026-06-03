"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";
import MarineServicesBrochureModal from "../../components/MarineServicesBrochureModal";

const BLUE = "#2563EB";
const BLUE_DARK = "#1E40AF";
const CYAN = "#06B6D4";

export default function ProductDetailPremiumMarine({
  product,
  relatedProducts,
  allProducts,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Centered Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#eff6ff] via-[#ecfeff] to-white">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat"
          }}
        ></div>

        {/* Blue Radial Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_600px_500px_at_center_45%,rgba(37,99,235,0.12)_0%,rgba(37,99,235,0.05)_50%,transparent_100%)] pointer-events-none"></div>

        {/* Additional Blue Glow Accents */}
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#2563EB] opacity-[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#1E40AF] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold text-[#000000] leading-[1] mb-8">
              Comprehensive Solution for<br />
              <span className="text-[#2563EB]">
                Marine Service Operations
              </span>{" "}
              <span className="text-[#000000]">
                Management
              </span>
            </h1>
            <p className="text-base lg:text-xl text-[#444444] mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Marine Service Software, handles a variety of marine services for their clients. This application allows Marine staff to enter received enquiries, generate quotations, and upon approval, carry out the requested services. The application generates nearly 40 different types of service reports. Additionally, it includes a user management system to handle services at different locations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="press-illusion-btn-orange bg-orange-600 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 flex cursor-pointer"
              >
                <span>REQUEST DEMO</span>
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
            <div
              className="scroll-img"
              style={{
                backgroundImage: `url('/products/marnine%20service%20center/Marine-Slide1.jpg'), url('/products/marnine%20service%20center/Marine-Slide2.jpg')`
              }}
            ></div>
          </div>
          <div className="dashboard-animation right">
            <div
              className="scroll-img"
              style={{
                backgroundImage: `url('/products/marnine%20service%20center/Marine-Slide3.jpg'), url('/products/marnine%20service%20center/Marine-Slide4.jpg')`
              }}
            ></div>
          </div>
          <div className="dashboard-main-img max-w-[1550px] mx-auto">
            <div className="relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] rounded-3xl lg:mx-0 mx-4">
              <img
                src="/products/marnine%20service%20center/Dashboard.png"
                alt="Marine Service Software Dashboard"
                className="w-full h-auto block shadow-2xl scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Core Marine Service Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:text-left text-center">
            {/* Left Side - Image (Sticky on Desktop) */}
            <div className="relative lg:sticky lg:top-28 lg:self-start">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/products/marnine%20service%20center/Monitor-enquiry.jpg"
                  alt="Marine Service Monitor Enquiry"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#2563EB] opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#2563EB] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-[#000000] mb-6 capitalize">
                Complete System for{" "}
                <span className="text-[#2563EB]">Marine Operations Excellence</span>
              </h2>

              <p className="text-lg text-[#444444] mb-6 leading-relaxed">
                Our Marine Service Software is specifically designed to handle a comprehensive variety of marine services for your clients. The application empowers marine staff with the ability to efficiently enter received enquiries, generate detailed quotations, and upon customer approval, seamlessly carry out the requested services.
              </p>

              <p className="text-lg text-[#444444] mb-6 leading-relaxed">
                With the capability to generate nearly 40 different types of professional service reports, your team can document everything from routine inspections to complex maintenance operations. The system ensures all service documentation is accurate, comprehensive, and readily accessible whenever needed.
              </p>

              <p className="text-lg text-[#444444] mb-8 leading-relaxed">
                The built-in user management system enables you to efficiently handle services across different locations, assign appropriate roles and permissions, and maintain complete visibility of operations at all your marine branches. Experience streamlined enquiry management, automated quotation generation, comprehensive reporting, and location-based service tracking all in one powerful platform.
              </p>

              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="press-illusion-btn-orange bg-orange-600 text-white font-bold px-6 py-2 text-base items-center space-x-2 inline-flex cursor-pointer"
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

      {/* 3. Marine Feature Section with TABS */}
      <div id="marine-features-section">
        <MarineFeatureSection />
      </div>

      {/* 4. CTA Section */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(37,99,235,0.2)]"
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

                <h2 className="text-white mb-6 capitalize">
                  Ready to streamline your <br className="hidden md:block" />
                  marine service operations?
                </h2>

                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join marine service providers using our software for efficient enquiry management, automated reporting, and exceptional client service.
                  Download our brochure or schedule a personalized demo today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="press-illusion-btn-orange bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-3 transition-all hover:scale-105"
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
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563EB' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-black text-[#2563EB] tracking-[0.28em] uppercase mb-3 bg-[#2563EB]/10 px-4 py-2 rounded-full">
                MORE PRODUCTS
              </span>
              <h2 className="text-[#0a0a0a] mb-4 capitalize">
                Explore Our More Products
              </h2>
              <p className="text-[#6b7280] max-w-[600px] mx-auto text-base leading-relaxed">
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
                    className="block h-full"
                  >
                    <div className="relative rounded-3xl p-8 h-full bg-white border-2 border-gray-100 shadow-lg flex flex-col items-center text-center">
                      {/* Category Badge */}
                      <div className="mb-4 bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#2563EB]/30 shadow-md whitespace-nowrap">
                        {prod.category}
                      </div>

                      <div className="relative flex flex-col items-center w-full">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1E40AF] flex items-center justify-center mb-6 shadow-lg mx-auto">
                          <span className="text-3xl">{prod.icon}</span>
                        </div>

                        {/* Title */}
                        <h3 className="mb-1 min-h-[3rem] line-clamp-2">
                          {prod.title}
                        </h3>

                        {/* Tagline */}
                        <div className="mb-2 flex min-h-[3.25rem] w-full items-start justify-center">
                          {prod.tagline ? (
                            <p className="text-[#2563EB] font-semibold line-clamp-2 leading-snug">
                              {prod.tagline}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div className="mt-auto flex w-full flex-col">
                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-2 text-sm min-h-[4.75rem] line-clamp-4">
                          {prod.shortDescription}
                        </p>

                        {/* CTA Link at bottom */}
                        <div className="flex items-center justify-center gap-2 text-[#2563EB] font-semibold pt-2 border-t border-gray-50 w-full">
                          Explore Product
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
              className="press-illusion-btn-orange bg-orange-600 text-white w-fit font-bold px-8 py-4 text-base items-center space-x-2 flex cursor-pointer mx-auto"
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

      <MarineServicesBrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MARINE SERVICE FEATURE DATA WITH TABS
───────────────────────────────────────────────────────────── */
const marineFeaturesByTab = {
  features: [
    {
      id: "enquiries",
      label: "Create and Monitor Enquiries",
      icon: "📝",
      color: "#2563EB",
      desc: "Users have the ability to create new enquiries and closely monitor their status throughout the entire process. This feature ensures that each enquiry is tracked from inception to resolution, allowing users to stay updated on progress and make informed decisions based on real-time information.",
      placeholder: "ENQ",
      image: "/products/marnine%20service%20center/Monitor-enquiry.jpg",
    },
    {
      id: "quotations",
      label: "Generate Quotations",
      icon: "💰",
      color: "#1E40AF",
      desc: "The application allows users to generate detailed quotations for selected enquiries. Totals are automatically calculated based on the provided VAT and discount percentages, ensuring accuracy and consistency in pricing. This feature streamlines the quotation process, making it easier to provide timely and precise cost estimates to clients.",
      placeholder: "QUO",
      image: "/products/marnine%20service%20center/Quotation.jpg",
    },
    {
      id: "reports-gen",
      label: "Generating 50+ Reports",
      icon: "📊",
      color: "#06B6D4",
      desc: "The application is equipped to generate over 50 different types of marine services-related PDF reports. These reports cover a wide range of marine service activities and can be customized to meet various reporting needs. This functionality helps users compile and present comprehensive data in a professional format.",
      placeholder: "REP",
      image: "/products/marnine%20service%20center/marine-reports.jpg",
    },
    {
      id: "summary",
      label: "Summary Certificate and Delivery Note Report",
      icon: "📋",
      color: "#2563EB",
      desc: "Users can generate a final summary and delivery note report for enquiries. The summary report provides a concise overview of the enquiry's details and status, while the delivery note report includes information about the delivery, ensuring that all relevant documentation is complete and accurate.",
      placeholder: "SUM",
      image: "/products/marnine%20service%20center/Summary-certificate.jpg",
    },
    {
      id: "dashboard",
      label: "Interactive Dashboard",
      icon: "📈",
      color: "#1E40AF",
      desc: "The dashboard provides an interactive interface that displays the count of enquiry statuses and showcases the latest enquiries. The visual representation of data helps users quickly understand the current state of enquiries and identify any emerging trends or issues. The dashboard is designed to offer a clear and accessible view of key metrics.",
      placeholder: "DASH",
      image: "/products/marnine%20service%20center/Dashboard.png",
    },
    {
      id: "user-mgmt",
      label: "User Management",
      icon: "👥",
      color: "#06B6D4",
      desc: "The system includes robust user management capabilities, allowing for the creation of reports based on the location of marine branches. This feature ensures that reports are tailored to specific locations, providing relevant insights and data for each branch. User management also involves assigning appropriate roles and permissions to users, ensuring that access to features and data is appropriately controlled.",
      placeholder: "USR",
      image: "/products/marnine%20service%20center/User-management.jpg",
    },
  ],
  reports: [
    {
      id: "dashboard-report",
      label: "Dashboard",
      icon: "📊",
      color: "#2563EB",
      desc: "Displays the count of enquiry status and the latest enquiries.",
      placeholder: "DB",
      image: "/products/marnine%20service%20center/Dashboard.png",
    },
    {
      id: "enquiry-form",
      label: "Enquiry Form",
      icon: "📝",
      color: "#1E40AF",
      desc: "Here user can create the enquiries received and generated the enquiry report in pdf format.",
      placeholder: "EF",
      image: "/products/marnine%20service%20center/Monitor-enquiry.jpg",
    },
    {
      id: "quotation-details",
      label: "Quotation Details",
      icon: "💰",
      color: "#06B6D4",
      desc: "View where the quotation can be created.",
      placeholder: "QD",
      image: "/products/marnine%20service%20center/Quotation.jpg",
    },
    {
      id: "service-report",
      label: "Service Report",
      icon: "🔧",
      color: "#2563EB",
      desc: "Entry point to create the different kind of service reports.",
      placeholder: "SR",
      image: "/products/marnine%20service%20center/Marine-Slide1.jpg",
    },
    {
      id: "portable-service",
      label: "Portable Service Report",
      icon: "📱",
      color: "#1E40AF",
      desc: "Entry point to create different kind of portable service report.",
      placeholder: "PSR",
      image: "/products/marnine%20service%20center/Marine-Slide2.jpg",
    },
    {
      id: "fire-extinguisher",
      label: "Portable Fire Extinguisher",
      icon: "🧯",
      color: "#06B6D4",
      desc: "Under this form fire extinguisher report can be created, in similar way 50+ marine related reports can be generated.",
      placeholder: "PFE",
      image: "/products/marnine%20service%20center/Marine-Slide3.jpg",
    },
  ],
};

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
   MARINE FEATURE SECTION WITH TABS
──────────────────────────────────────────────────────────── */
function MarineFeatureSection() {
  const [activeTab, setActiveTab] = useState("features");
  const [activeId, setActiveId] = useState("enquiries");
  const [mobileOpenId, setMobileOpenId] = useState("enquiries");

  // Reset activeId when tab changes
  useEffect(() => {
    if (activeTab === "features") {
      setActiveId("enquiries");
      setMobileOpenId("enquiries");
    } else {
      setActiveId("dashboard-report");
      setMobileOpenId("dashboard-report");
    }
  }, [activeTab]);

  const currentFeatures = marineFeaturesByTab[activeTab];
  const leftFeatures = currentFeatures.slice(0, Math.ceil(currentFeatures.length / 2));
  const rightFeatures = currentFeatures.slice(Math.ceil(currentFeatures.length / 2));
  const activeFeature = currentFeatures.find((f) => f.id === activeId) || currentFeatures[0];

  return (
    <section className="py-12 lg:py-16 overflow-hidden bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="block text-[10px] font-black text-[#2563EB] tracking-[0.28em] uppercase mb-2.5">
            SOFTWARE FEATURES
          </span>
          <h2 className="text-[#0a0a0a] mb-3.5 capitalize">
            Key Features Of <span className="text-[#2563EB]">Marine Service</span> Software
          </h2>
          <p className="text-[#6b7280] max-w-[520px] mx-auto text-[15px] leading-relaxed">
            Comprehensive marine service features designed to streamline enquiry management, generate detailed reports, and deliver exceptional client service.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab("features")}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === "features"
                ? "bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === "reports"
                ? "bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Reports
            </button>
          </div>
        </div>

        {/* ── DESKTOP ORBIT (xl and above) ── */}
        <div className="hidden xl:block">
          <div className="relative h-[605px] mx-auto xl:w-[80%] lg:w-full">
            {/* Blue arc ellipse */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] rounded-full border-[1.5px] pointer-events-none z-0"
              style={{ borderColor: 'rgba(37, 99, 235, 0.42)' }}
            />

            {/* Left column */}
            <div className="absolute -left-44 top-1/2 -translate-y-1/2 flex flex-col items-end gap-10 z-10 w-[280px]">
              {leftFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold ${activeId === feature.id
                    ? "bg-gray-900 border-blue-600 text-black shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "border-blue-300 text-gray-800 hover:border-blue-500 hover:shadow-md"
                    }`}
                >
                  <span className="text-sm leading-none">{feature.icon}</span>
                  <span className="max-w-[180px] truncate">{feature.label}</span>
                  {activeId === feature.id && (
                    <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[7px] border-l-blue-900" />
                  )}
                </button>
              ))}
            </div>

            {/* Center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 2xl:w-[72%] lg:w-[70%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + "-" + activeId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full h-full rounded-xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.15)]"
                >
                  <img
                    src={activeFeature.image}
                    alt={activeFeature.label}
                    className="w-full h-auto block"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right column */}
            <div className="absolute -right-44 top-1/2 -translate-y-1/2 flex flex-col items-start gap-10 z-10 w-[280px]">
              {rightFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold ${activeId === feature.id
                    ? "bg-gray-900 border-blue-600 text-black shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "border-blue-300 text-gray-800 hover:border-blue-500 hover:shadow-md"
                    }`}
                >
                  <span className="max-w-[180px] truncate">{feature.label}</span>
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {activeId === feature.id && (
                    <span className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[7px] border-r-blue-900" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mt-3 pb-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab + "-" + activeId + "-d"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
                className="text-center text-[#6b7280] max-w-[600px] mx-auto text-sm leading-relaxed"
              >
                {activeFeature.desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* ── TABLET LAYOUT (lg to xl) ── */}
        <div className="hidden lg:block xl:hidden">
          {/* Navigation buttons on top */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {currentFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`flex items-center gap-2 py-2.5 px-5 rounded-lg font-semibold text-sm transition-all duration-200 ${activeId === feature.id
                    ? "bg-[#0EA5E9] text-white shadow-lg scale-105"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#0EA5E9] hover:shadow-md"
                    }`}
                >
                  <span className="text-base">{feature.icon}</span>
                  <span>{feature.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Center image display */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + "-" + activeId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="rounded-xl overflow-hidden shadow-2xl bg-white"
              >
                <img
                  src={activeFeature.image}
                  alt={activeFeature.label}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab + "-" + activeId + "-desc"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
                className="text-center text-[#6b7280] max-w-[600px] mx-auto text-sm leading-relaxed"
              >
                {activeFeature.desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* ── MOBILE ACCORDION ── */}
        <div className="lg:hidden border-t border-gray-200">
          {currentFeatures.map((feature) => {
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
                        ? "bg-gradient-to-br from-[#2563EB] to-[#1E40AF] shadow-md scale-110"
                        : "bg-gray-100"
                        }`}
                    >
                      <span className={isOpen ? "filter drop-shadow" : ""}>
                        {feature.icon}
                      </span>
                    </div>
                    <span className={`font-semibold text-sm ${isOpen ? "text-[#2563EB]" : "text-gray-800"}`}>
                      {feature.label}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-[#2563EB] rotate-180" : "bg-gray-100"
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



