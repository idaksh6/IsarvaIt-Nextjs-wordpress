"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";
import DealerManagementBrochureModal from "../../components/DealerManagementBrochureModal";

const FUCHSIA = "#D946EF";
const FUCHSIA_DARK = "#C026D3";
const PINK = "#EC4899";

export default function ProductDetailPremiumDealer({
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
    <div className="bg-white font-sans selection:bg-fuchsia-100 selection:text-fuchsia-900">
      {/* 1. Centered Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#fdf4ff] via-[#fce7f3] to-white">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat"
          }}
        ></div>

        {/* Fuchsia Radial Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_600px_500px_at_center_45%,rgba(217,70,239,0.12)_0%,rgba(217,70,239,0.05)_50%,transparent_100%)] pointer-events-none"></div>

        {/* Additional Fuchsia Glow Accents */}
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#D946EF] opacity-[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#C026D3] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold text-[#000000] leading-[1] mb-8">
              Comprehensive Platform for<br />
              <span className="text-[#D946EF]">
                Dealer Management
              </span>{" "}
              <span className="text-[#000000]">
                and Article Distribution
              </span>
              <span style={{ color: FUCHSIA }}>.</span>
            </h1>
            <p className="text-base lg:text-xl text-[#444444] mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Dealer Management and Dealer Article/Circular Software is a specialized platform designed to streamline the onboarding and management of dealers, as well as the distribution of articles and circulars. This software ensures efficient communication, secure access, and organized management of dealer-related activities and content.
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
                backgroundImage: `url('/products/dealer management software/Dealer-slide1.jpg'), url('/products/dealer management software/Dealer-slide2.jpg')`
              }}
            ></div>
          </div>
          <div className="dashboard-animation right">
            <div
              className="scroll-img"
              style={{
                backgroundImage: `url('/products/dealer management software/Dealer-slide3.jpg'), url('/products/dealer management software/Dealer-slide4.jpg')`
              }}
            ></div>
          </div>
          <div className="dashboard-main-img">
            <div className="relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] bg-white">
              <img
                src="/products/dealer management software/Dealer-Dashboard.jpg"
                alt="Dealer Management Dashboard"
                className="w-full object-contain lg:h-[668px] h-full shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Core Dealer Management Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:text-left text-center">
            {/* Left Side - Image (Sticky on Desktop) */}
            <div className="relative lg:sticky lg:top-28 lg:self-start">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/products/dealer management software/Onboarding-dealers.jpg"
                  alt="Dealer Onboarding"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#D946EF] opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#D946EF] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-[#000000] mb-6 capitalize">
                Streamline Dealer Network with{" "}
                <span className="text-[#D946EF]">Secure Content Distribution</span>
              </h2>

              <p className="text-lg text-[#444444] mb-6 leading-relaxed">
                Our Dealer Management and Dealer Article/Circular Software is a specialized platform designed to streamline the onboarding and management of dealers while ensuring efficient distribution of articles and circulars. This comprehensive solution ensures effective communication, secure access control, and organized management of all dealer-related activities and content.
              </p>

              <p className="text-lg text-[#444444] mb-6 leading-relaxed">
                Interested dealers can easily apply through the portal, with email notifications sent for new applications. Admins have full control to review applications and either approve or reject them, with automatic email updates sent to applicants. Approved dealers receive their credentials instantly, while admins can also manually onboard dealers using a predefined form for streamlined processing.
              </p>

              <p className="text-lg text-[#444444] mb-8 leading-relaxed">
                The system allows admins to upload articles that are displayed to dealers with secure, view-only PDF access (not downloadable). Articles are intelligently organized by department and sorted by year and month for easy navigation. Both dealers and admins benefit from secure login credentials, ensuring data protection, privacy, and controlled access throughout the platform.
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

      {/* 3. Dealer Management Feature Section with TABS */}
      <div id="dealer-features-section">
        <DealerFeatureSection />
      </div>

      {/* 4. CTA Section */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50 via-transparent to-pink-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-fuchsia-400 to-pink-500 rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(217,70,239,0.2)]"
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
                  dealer network?
                </h2>

                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join businesses using our platform for efficient dealer onboarding, secure content distribution, and organized network management.
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D946EF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-black text-[#D946EF] tracking-[0.28em] uppercase mb-3 bg-[#D946EF]/10 px-4 py-2 rounded-full">
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
                      <div className="mb-4 bg-[#D946EF]/10 text-[#D946EF] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#D946EF]/30 shadow-md whitespace-nowrap">
                        {prod.category}
                      </div>

                      <div className="relative flex flex-col items-center w-full">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D946EF] to-[#C026D3] flex items-center justify-center mb-6 shadow-lg mx-auto">
                          <span className="text-3xl">{prod.icon}</span>
                        </div>

                        {/* Title */}
                        <h3 className="mb-1 min-h-[3rem] line-clamp-2">
                          {prod.title}
                        </h3>

                        {/* Tagline */}
                        <div className="mb-2 flex min-h-[3.25rem] w-full items-start justify-center">
                          {prod.tagline ? (
                            <p className="text-[#D946EF] font-semibold line-clamp-2 leading-snug">
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
                        <div className="flex items-center justify-center gap-2 text-[#D946EF] font-semibold pt-2 border-t border-gray-50 w-full">
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

      <DealerManagementBrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   DEALER MANAGEMENT FEATURE DATA WITH TABS
───────────────────────────────────────────────────────────── */
const dealerFeaturesByTab = {
  features: [
    {
      id: "dealer-onboarding",
      label: "Dealer Onboarding",
      icon: "📝",
      color: "#D946EF",
      desc: "Interested dealers can apply through the portal.",
      image: "/products/dealer management software/Onboarding-dealers.jpg",
    },
    {
      id: "notifications",
      label: "Application Notifications",
      icon: "📧",
      color: "#C026D3",
      desc: "Email notifications are sent for new applications.",
      image: "/products/dealer management software/Dealer-slide1.jpg",
    },
    {
      id: "approval",
      label: "Application Review and Approval",
      icon: "✅",
      color: "#EC4899",
      desc: "Admins can review applications and either approve or reject them. The application status is emailed to the applicant, and if approved, credentials are sent to the dealer.",
      image: "/products/dealer management software/Dealer-slide2.jpg",
    },
    {
      id: "manual-onboarding",
      label: "Manual Dealer Onboarding",
      icon: "👤",
      color: "#D946EF",
      desc: "Admins can manually onboard dealers using a predefined form for basic details.",
      image: "/products/dealer management software/Add-dealer.jpg",
    },
    {
      id: "article-upload",
      label: "Article Upload and Display",
      icon: "📄",
      color: "#C026D3",
      desc: "Admins can upload articles that are displayed to dealers. PDF uploads are view-only and not downloadable for dealers.",
      image: "/products/dealer management software/Upload-article.jpg",
    },
    {
      id: "organized-articles",
      label: "Organized Article Publication",
      icon: "📚",
      color: "#EC4899",
      desc: "Articles are published by department and organized by year and month, allowing for easy access and reading.",
      image: "/products/dealer management software/Article-publication.jpg",
    },
    {
      id: "secure-login",
      label: "Secure Login",
      icon: "🔐",
      color: "#D946EF",
      desc: "Provides secure login for both dealers and admins, ensuring data protection and privacy.",
      image: "/products/dealer management software/Secure-login.jpg",
    },
  ],
  reports: [
    {
      id: "admin-dashboard",
      label: "Admin Dashboard",
      icon: "📊",
      color: "#D946EF",
      desc: "Overview of key metrics, data, and functionalities within a web application for admin.",
      image: "/products/dealer management software/Dealer-slide3.jpg",
    },
    {
      id: "add-dealer",
      label: "Add Dealer",
      icon: "➕",
      color: "#C026D3",
      desc: "The panel allows admin to add the dealers on the web application.",
      image: "/products/dealer management software/Add-dealer.jpg",
    },
    {
      id: "manage-dealer",
      label: "Manage Dealer",
      icon: "👥",
      color: "#EC4899",
      desc: "The panel allows admin to manage the dealers on the web application.",
      image: "/products/dealer management software/Dealer-slide4.jpg",
    },
    {
      id: "add-article",
      label: "Add Article",
      icon: "📝",
      color: "#D946EF",
      desc: "Admin can easily add the articles on the web application.",
      image: "/products/dealer management software/Upload-article.jpg",
    },
    {
      id: "manage-article",
      label: "Manage Article",
      icon: "📋",
      color: "#C026D3",
      desc: "Allows admin to easily manage the articles that added on the web app.",
      image: "/products/dealer management software/Article-publication.jpg",
    },
    {
      id: "dealer-dashboard",
      label: "Dealer Dashboard",
      icon: "🏠",
      color: "#EC4899",
      desc: "This is the default dashboard for the particular dealer added on the web app.",
      image: "/products/dealer management software/Dealer-Dashboard.jpg",
    },
    {
      id: "read-article-manage",
      label: "Read Article Manage",
      icon: "📖",
      color: "#D946EF",
      desc: "View the list of articles & circulars updated on the web application.",
      image: "/products/dealer management software/Read-Article.jpg",
    },
    {
      id: "department-wise",
      label: "Departmentwise Sales Year & Month",
      icon: "📅",
      color: "#C026D3",
      desc: "Allows the user to sort the document department wise.",
      image: "/products/dealer management software/Article-publication.jpg",
    },
    {
      id: "read-article",
      label: "Read Article",
      icon: "📄",
      color: "#EC4899",
      desc: "Dealers can easily read the document uploaded by the admin on this panel.",
      image: "/products/dealer management software/Read-Article.jpg",
    },
  ],
};

/* ─────────────────────────────────────────────────────────
   DEALER MANAGEMENT FEATURE SECTION WITH TABS
──────────────────────────────────────────────────────────── */
function DealerFeatureSection() {
  const [activeTab, setActiveTab] = useState("features");
  const [activeId, setActiveId] = useState("dealer-onboarding");
  const [mobileOpenId, setMobileOpenId] = useState("dealer-onboarding");

  // Reset activeId when tab changes
  useEffect(() => {
    if (activeTab === "features") {
      setActiveId("dealer-onboarding");
      setMobileOpenId("dealer-onboarding");
    } else {
      setActiveId("admin-dashboard");
      setMobileOpenId("admin-dashboard");
    }
  }, [activeTab]);

  const currentFeatures = dealerFeaturesByTab[activeTab];
  const leftFeatures = currentFeatures.slice(0, Math.ceil(currentFeatures.length / 2));
  const rightFeatures = currentFeatures.slice(Math.ceil(currentFeatures.length / 2));
  const activeFeature = currentFeatures.find((f) => f.id === activeId) || currentFeatures[0];

  return (
    <section className="py-12 lg:py-16 overflow-hidden bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="block text-[10px] font-black text-[#D946EF] tracking-[0.28em] uppercase mb-2.5">
            SOFTWARE FEATURES
          </span>
          <h2 className="text-[#0a0a0a] mb-3.5 capitalize">
            Key Features Of <span className="text-[#D946EF]">Dealer Management</span> Software
          </h2>
          <p className="text-[#6b7280] max-w-[520px] mx-auto text-[15px] leading-relaxed">
            Comprehensive dealer management features designed to streamline onboarding, content distribution, and network operations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab("features")}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === "features"
                ? "bg-gradient-to-r from-[#D946EF] to-[#C026D3] text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === "reports"
                ? "bg-gradient-to-r from-[#D946EF] to-[#C026D3] text-white shadow-md"
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
            {/* Fuchsia arc ellipse */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] rounded-full border-[1.5px] pointer-events-none z-0"
              style={{ borderColor: 'rgba(217, 70, 239, 0.42)' }}
            />

            {/* Left column */}
            <div className="absolute -left-44 top-1/2 -translate-y-1/2 flex flex-col items-end gap-10 z-10 w-[280px]">
              {leftFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold ${activeId === feature.id
                    ? "bg-gray-900 border-fuchsia-600 text-black shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "border-fuchsia-300 text-gray-800 hover:border-fuchsia-500 hover:shadow-md"
                    }`}
                >
                  <span className="text-sm leading-none">{feature.icon}</span>
                  <span className="max-w-[180px] truncate">{feature.label}</span>
                  {activeId === feature.id && (
                    <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[7px] border-l-fuchsia-900" />
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
                    className="w-full h-full object-contain bg-white"
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
                    ? "bg-gray-900 border-fuchsia-600 text-black shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "border-fuchsia-300 text-gray-800 hover:border-fuchsia-500 hover:shadow-md"
                    }`}
                >
                  <span className="max-w-[180px] truncate">{feature.label}</span>
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {activeId === feature.id && (
                    <span className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[7px] border-r-fuchsia-900" />
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
                        ? "bg-gradient-to-br from-[#D946EF] to-[#C026D3] shadow-md scale-110"
                        : "bg-gray-100"
                        }`}
                    >
                      <span className={isOpen ? "filter drop-shadow" : ""}>
                        {feature.icon}
                      </span>
                    </div>
                    <span className={`font-semibold text-sm ${isOpen ? "text-[#D946EF]" : "text-gray-800"}`}>
                      {feature.label}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-[#D946EF] rotate-180" : "bg-gray-100"
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



