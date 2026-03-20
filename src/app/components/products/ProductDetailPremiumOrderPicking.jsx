"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";

const LIME = "#84CC16";
const LIME_DARK = "#65A30D";
const GREEN = "#22C55E";

export default function ProductDetailPremiumOrderPicking({
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
    <div className="bg-white font-sans selection:bg-lime-100 selection:text-lime-900">
      {/* 1. Centered Hero Section */}
      <section className="relative pt-40 lg:pb-32 pb-10 overflow-hidden bg-gradient-to-b from-[#f7fee7] via-[#ecfccb] to-white">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat"
          }}
        ></div>

        {/* Lime Radial Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_600px_500px_at_center_45%,rgba(132,204,22,0.12)_0%,rgba(132,204,22,0.05)_50%,transparent_100%)] pointer-events-none"></div>

        {/* Additional Lime Glow Accents */}
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#84CC16] opacity-[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#65A30D] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[32px] md:text-[50px] font-extrabold text-[#000000] leading-tight mb-8">
              Streamline Your Warehouse<br />
              <span className="text-[#84CC16]">
                Order Picking and Packing
              </span>{" "}
              <span className="text-[#000000]">
                Management Tool
              </span>
              <span style={{ color: LIME }}>.</span>
            </h1>
            <p className="text-base text-[#444444] mb-8 max-w-3xl mx-auto leading-relaxed">
              Picking & Packing Management, operates a Shopify website where customers order their products. They faced challenges in tracking the total orders packed and those remaining to be packed by the shipping date. To address this issue, we developed a picking and packing tool using PHP, the Laravel Framework, JavaScript, and Tailwind. This tool fetches order details via the Shopify API and manages the various order statuses. Upon shipment, the tool also updates the order status in the client's Shopify portal, streamlining the picking and packing process for hampers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="press-illusion-btn bg-lime-400 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 flex cursor-pointer"
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
                alt="Order Picking and Packing Dashboard"
                className="w-full object-contain lg:h-[668px] h-full shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Core Order Picking Section */}
      <section className="lg:py-32 py-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:text-left text-center">
            {/* Left Side - Image (Sticky on Desktop) */}
            <div className="relative lg:sticky lg:top-28 lg:self-start">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/dashboard.webp"
                  alt="Order Picking Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#84CC16] opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#84CC16] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-4xl md:text-[50px] font-extrabold text-[#000000] mb-6 leading-tight">
                Seamless Integration with{" "}
                <span className="text-[#84CC16]">Shopify for Warehouse Excellence</span>
              </h2>

              <p className="text-lg text-[#444444] mb-6 leading-relaxed">
                Our Order Picking and Packing Management Tool was specifically developed to solve the critical challenges faced by businesses operating Shopify websites. If you've ever struggled to track the total orders packed versus those remaining to be packed by shipping deadlines, this tool is your complete solution.
              </p>

              <p className="text-lg text-[#444444] mb-6 leading-relaxed">
                Built with PHP, the Laravel Framework, JavaScript, and Tailwind CSS, our tool leverages the Shopify API to automatically fetch order details directly from your Shopify store. It provides comprehensive management of various order statuses throughout the entire picking and packing workflow, ensuring nothing falls through the cracks.
              </p>

              <p className="text-lg text-[#444444] mb-8 leading-relaxed">
                Upon shipment, the tool automatically updates the order status back to your Shopify portal, creating a seamless bidirectional integration. This streamlines the entire picking and packing process for hampers and all product types, reducing manual data entry, eliminating errors, and providing real-time visibility into your warehouse operations from order receipt to final shipment.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="press-illusion-btn bg-lime-400 text-white font-bold px-6 py-2 text-base items-center space-x-2 inline-flex cursor-pointer"
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

      {/* 3. Order Picking Feature Section with TABS */}
      <div id="order-picking-features-section">
        <OrderPickingFeatureSection />
      </div>

      {/* 4. CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50 via-transparent to-green-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-lime-400 to-green-500 rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(132,204,22,0.2)]"
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
                  Ready to optimize your <br className="hidden md:block" />
                  warehouse operations?
                </h2>

                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join Shopify merchants using our tool for streamlined picking and packing, reduced errors, and on-time shipments.
                  Download our brochure or schedule a personalized demo today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative bg-white text-lime-600 px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
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
                    className="group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-lime-600 transition-all duration-300 hover:scale-105 flex items-center gap-3"
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2384CC16' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-black text-[#84CC16] tracking-[0.28em] uppercase mb-3 bg-[#84CC16]/10 px-4 py-2 rounded-full">
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
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#84CC16] to-[#65A30D] flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0">
                          <span className="text-3xl">{prod.icon}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {prod.title}
                        </h3>

                        {/* Tagline */}
                        {prod.tagline && (
                          <p className="text-[#84CC16] font-semibold mb-3">
                            {prod.tagline}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                          {prod.shortDescription}
                        </p>

                        {/* CTA Link */}
                        <div className="flex items-center justify-center md:justify-start gap-2 text-[#84CC16] font-semibold">
                          Explore Product
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute -top-11 -right-2 bg-[#84CC16]/10 text-[#84CC16] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#84CC16]/30 shadow-md">
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#84CC16] to-[#65A30D] text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
   ORDER PICKING FEATURE DATA WITH TABS
───────────────────────────────────────────────────────────── */
const orderPickingFeaturesByTab = {
  features: [
    {
      id: "shopify-api",
      label: "Shopify API Integration",
      icon: "🛍️",
      color: "#84CC16",
      desc: "The tool integrates with the Shopify API to fetch orders directly from the client's Shopify website. This feature allows the system to import all processed orders from Shopify into the tool, ensuring that the client can manage their orders seamlessly within a single interface.",
      image: "/dashboard.webp",
    },
    {
      id: "ticking-queues",
      label: "Handling Ticking Queues",
      icon: "✅",
      color: "#65A30D",
      desc: "Within the tool, users can manually update the product packages for each order. This includes adjusting the number of products packed and the remaining items to be packed for a selected order. This feature ensures that packaging details are accurately recorded and tracked.",
      image: "/dashboard.webp",
    },
    {
      id: "order-management",
      label: "Order Management",
      icon: "📦",
      color: "#22C55E",
      desc: "Users can manually manage the status of each order through various stages, such as 'Not Started,' 'Progress,' 'On Hold,' 'Ready to Ship' and 'Shipped.' This feature allows for detailed tracking and management of orders, ensuring that every step of the order fulfillment process is monitored and updated as necessary.",
      image: "/dashboard.webp",
    },
    {
      id: "fulfilling",
      label: "Fulfilling through Shopify API",
      icon: "🚚",
      color: "#84CC16",
      desc: "When an order's status is pushed to 'Shipped,' the order status will automatically be changed to 'Fulfilled' in Shopify. This is accomplished by triggering the Shopify API, ensuring that the order status is consistently updated across both the Shopify website and this tool. This feature helps maintain accurate order status records and improves customer communication regarding their order progress.",
      image: "/dashboard.webp",
    },
    {
      id: "calendar",
      label: "Calendar view",
      icon: "📅",
      color: "#65A30D",
      desc: "Users can view the total number of products and their status in a calendar view based on their shipping dates. This feature provides a visual representation of the shipping schedule, helping users to easily track and manage upcoming shipments and deadlines.",
      image: "/dashboard.webp",
    },
    {
      id: "hampers",
      label: "Hampers",
      icon: "🎁",
      color: "#22C55E",
      desc: "The tool displays the total number of hampers ordered by customers. This feature helps in managing and tracking bulk orders or special packages, ensuring that all customer orders for hampers are accurately recorded and fulfilled.",
      image: "/dashboard.webp",
    },
  ],
  reports: [
    {
      id: "login",
      label: "Login",
      icon: "🔐",
      color: "#84CC16",
      desc: "Login page for picking and packing tool.",
      image: "/dashboard.webp",
    },
    {
      id: "dashboard-report",
      label: "Dashboard",
      icon: "📊",
      color: "#65A30D",
      desc: "The dashboard displays the order count based on their status and also highlights the orders scheduled for shipping on the current date.",
      image: "/dashboard.webp",
    },
    {
      id: "edit-order",
      label: "Edit The Order",
      icon: "✏️",
      color: "#22C55E",
      desc: "Overview of all the orders irrespective of their status.",
      image: "/dashboard.webp",
    },
    {
      id: "order-overviews",
      label: "Order Overviews",
      icon: "📋",
      color: "#84CC16",
      desc: "Edit the order view to manually update the packed quantity and the remaining quantity to be packed for a particular order.",
      image: "/dashboard.webp",
    },
    {
      id: "total-quantity",
      label: "Total Order Quantity",
      icon: "📈",
      color: "#65A30D",
      desc: "The Hampers page displays the total order quantity for each specific hamper.",
      image: "/dashboard.webp",
    },
    {
      id: "calendar-view",
      label: "Calendar View",
      icon: "📅",
      color: "#22C55E",
      desc: "The calendar view displays the total count of hampers to be shipped, with color coding used to identify their status.",
      image: "/dashboard.webp",
    },
    {
      id: "order-display",
      label: "Order Display",
      icon: "📦",
      color: "#84CC16",
      desc: "The view displays the orders based on their selected shipping dates.",
      image: "/dashboard.webp",
    },
  ],
};

/* ─────────────────────────────────────────────────────────
   ORDER PICKING FEATURE SECTION WITH TABS
──────────────────────────────────────────────────────────── */
function OrderPickingFeatureSection() {
  const [activeTab, setActiveTab] = useState("features");
  const [activeId, setActiveId] = useState("shopify-api");
  const [mobileOpenId, setMobileOpenId] = useState("shopify-api");

  // Reset activeId when tab changes
  useEffect(() => {
    if (activeTab === "features") {
      setActiveId("shopify-api");
      setMobileOpenId("shopify-api");
    } else {
      setActiveId("login");
      setMobileOpenId("login");
    }
  }, [activeTab]);

  const currentFeatures = orderPickingFeaturesByTab[activeTab];
  const leftFeatures = currentFeatures.slice(0, Math.ceil(currentFeatures.length / 2));
  const rightFeatures = currentFeatures.slice(Math.ceil(currentFeatures.length / 2));
  const activeFeature = currentFeatures.find((f) => f.id === activeId) || currentFeatures[0];

  return (
    <section className="py-20 overflow-hidden bg-[#F7F7F7]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="block text-[10px] font-black text-[#84CC16] tracking-[0.28em] uppercase mb-2.5">
            SOFTWARE FEATURES
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-[#0a0a0a] leading-tight mb-3.5">
            Key Features Of <span className="text-[#84CC16]">Order Picking & Packing</span> Tool
          </h2>
          <p className="text-[#6b7280] max-w-[520px] mx-auto text-[15px] leading-relaxed">
            Comprehensive warehouse management features designed to streamline Shopify order fulfillment from picking to shipping.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab("features")}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === "features"
                  ? "bg-gradient-to-r from-[#84CC16] to-[#65A30D] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === "reports"
                  ? "bg-gradient-to-r from-[#84CC16] to-[#65A30D] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Reports
            </button>
          </div>
        </div>

        {/* ── DESKTOP ORBIT ── */}
        <div className="hidden lg:block">
          <div className="relative h-[605px] mx-auto xl:w-[80%] lg:w-full">
            {/* Lime arc ellipse */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] rounded-full border-[1.5px] pointer-events-none z-0"
              style={{ borderColor: 'rgba(132, 204, 22, 0.42)' }}
            />

            {/* Left column */}
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 flex flex-col items-end gap-10 z-10 w-[280px]">
              {leftFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold ${activeId === feature.id
                    ? "bg-gray-900 border-lime-600 text-black shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "border-lime-300 text-gray-800 hover:border-lime-500 hover:shadow-md"
                    }`}
                >
                  <span className="text-sm leading-none">{feature.icon}</span>
                  <span className="max-w-[180px] truncate">{feature.label}</span>
                  {activeId === feature.id && (
                    <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[7px] border-l-lime-900" />
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
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 flex flex-col items-start gap-10 z-10 w-[280px]">
              {rightFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold ${activeId === feature.id
                    ? "bg-gray-900 border-lime-600 text-black shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "border-lime-300 text-gray-800 hover:border-lime-500 hover:shadow-md"
                    }`}
                >
                  <span className="max-w-[180px] truncate">{feature.label}</span>
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {activeId === feature.id && (
                    <span className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[7px] border-r-lime-900" />
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
                        ? "bg-gradient-to-br from-[#84CC16] to-[#65A30D] shadow-md scale-110"
                        : "bg-gray-100"
                        }`}
                    >
                      <span className={isOpen ? "filter drop-shadow" : ""}>
                        {feature.icon}
                      </span>
                    </div>
                    <span className={`font-semibold text-sm ${isOpen ? "text-[#84CC16]" : "text-gray-800"}`}>
                      {feature.label}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-[#84CC16] rotate-180" : "bg-gray-100"
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
