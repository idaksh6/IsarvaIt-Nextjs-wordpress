"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";

const WOOCOMMERCE_PURPLE = "#A855F7";
const WOOCOMMERCE_DARK = "#4B4B4B";
const WOOCOMMERCE_GREY = "#F5F5F5";

export default function ProductDetailPremiumWooCommerce({
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

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("openContactModal", handleOpenModal);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("openContactModal", handleOpenModal);
    };
  }, []);

  return (
    <div className="bg-white font-sans selection:bg-purple-100 selection:text-purple-900">
      {/* 1. Centered Hero Section */}
      <section className="relative pt-40 lg:pb-32 pb-10 overflow-hidden bg-gradient-to-b from-[#faf5ff] via-[#fdf7ff] to-white">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat"
          }}
        ></div>

        {/* Purple Radial Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_600px_500px_at_center_45%,rgba(168,85,247,0.12)_0%,rgba(168,85,247,0.05)_50%,transparent_100%)] pointer-events-none"></div>

        {/* Additional Purple Glow Accents */}
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#A855F7] opacity-[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#9333ea] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold text-[#000000] leading-[1] mb-8">
              Build Your Dream<br />
              <span className="text-[#A855F7]">
                E-Commerce Store
              </span>{" "}
              <span className="text-[#000000]">
                with WooCommerce
              </span>
              <span style={{ color: WOOCOMMERCE_PURPLE }}>.</span>
            </h1>
            <p className="text-base text-[#444444] mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional WooCommerce development services for scalable online stores. We create feature-rich e-commerce platforms with seamless payment integration, inventory management, and mobile optimization that drive sales and enhance customer experience.
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
                backgroundImage: `url('/products/woocommerce/Woo-commerce-slide-1.jpg'), url('/products/woocommerce/Woo-commerce-slide-2.jpg')`
              }}
            ></div>
          </div>
          <div className="dashboard-animation right">
            <div 
              className="scroll-img"
              style={{
                backgroundImage: `url('/products/woocommerce/Woo-commerce-slide-3.jpg'), url('/products/woocommerce/Woo-commerce-slide-4.jpg')`
              }}
            ></div>
          </div>
          <div className="dashboard-main-img">
            <div className="relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] bg-white">
              <img
                src="/products/woocommerce/Woo-commerce-dashboard.jpg"
                alt="WooCommerce Store Preview"
                className="w-full object-contain lg:h-[668px] h-full shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Core WooCommerce Section */}
      <section className="lg:py-32 py-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:text-left text-center">
            {/* Left Side - Image (Sticky on Desktop) */}
            <div className="relative lg:sticky lg:top-28 lg:self-start">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/products/woocommerce/Add-products.jpg"
                  alt="WooCommerce Product Management"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#A855F7] opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#A855F7] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-[#000000] mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                Power Your Online Business with{" "}
                <span className="text-[#A855F7]">WooCommerce</span>
              </h2>

              <p className="text-lg text-[#444444] mb-6 leading-relaxed">
                WooCommerce is the world's most popular open-source e-commerce platform, powering over 28% of all online stores. Our custom development services transform your WordPress site into a powerful, scalable online store that grows with your business.
              </p>

              <p className="text-lg text-[#444444] mb-8 leading-relaxed">
                We specialize in creating fully customized WooCommerce solutions that go beyond standard templates. From custom payment gateways and shipping integrations to advanced product configurations and multi-vendor marketplaces, we build exactly what your business needs to succeed online.
              </p>

              <p className="text-lg text-[#444444] mb-8 leading-relaxed">
                Our development approach focuses on performance, security, and user experience. We optimize every aspect of your store for speed, implement robust security measures, and create intuitive shopping experiences that convert visitors into customers. Whether you're launching a new store or scaling an existing one, we deliver solutions that drive real business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WooCommerce Interactive Feature Section */}
      <div id="woocommerce-features-section">
        <WooCommerceFeatureSection />
      </div>

      {/* 4. What We Offer Section */}
      <section className="lg:py-32 py-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-black text-[#A855F7] tracking-[0.28em] uppercase mb-3 bg-[#A855F7]/10 px-4 py-2 rounded-full">
                OUR SERVICES
              </span>
              <h2 className="text-[#0a0a0a] mb-4 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                What we offer with <span className="text-[#A855F7]">WooCommerce</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {wooCommerceServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#A855F7]/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#A855F7] to-[#9333ea] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#A855F7] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <WooCommerceFAQSection />

      {/* 6. CTA Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-pink-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-purple-400 to-pink-500 rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(168,85,247,0.2)]"
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

                <h2 className="text-white mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                  Ready to launch your <br className="hidden md:block" />
                  online store?
                </h2>

                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join thousands of successful online businesses powered by WooCommerce.
                  Start your e-commerce journey today with our expert development team.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="press-illusion-btn-orange bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-3 transition-all hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5 scroll-smooth"
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A855F7' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-black text-[#A855F7] tracking-[0.28em] uppercase mb-3 bg-[#A855F7]/10 px-4 py-2 rounded-full">
                MORE PRODUCTS
              </span>
              <h2 className="text-[#0a0a0a] mb-4 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                Explore Our More Products
              </h2>
              <p className="text-[#6b7280] max-w-[600px] mx-auto text-base leading-relaxed">
                Discover our comprehensive suite of software solutions designed to transform your business operations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                >
                  <Link
                    href={`/product/${prod.slug}`}
                    className="block h-full"
                  >
                    <div className="relative rounded-3xl p-8 h-full bg-white border-2 border-gray-100 shadow-lg flex flex-col">
                      <div className="relative text-center md:text-left flex-grow">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A855F7] to-[#9333ea] flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0">
                          <span className="text-3xl">{prod.icon}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {prod.title}
                        </h3>

                        {/* Tagline */}
                        {prod.tagline && (
                          <p className="text-[#A855F7] font-semibold mb-3">
                            {prod.tagline}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                          {prod.shortDescription}
                        </p>

                        {/* Category Badge */}
                        <div className="absolute -top-11 -right-2 bg-white text-[#A855F7] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#A855F7]/30 shadow-md">
                          {prod.category}
                        </div>
                      </div>

                      {/* CTA Link at bottom */}
                      <div className="flex items-center justify-center md:justify-start gap-2 text-[#A855F7] font-semibold mt-auto pt-4 border-t border-gray-50">
                        Explore Product
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
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
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   WooCommerce FEATURE DATA
───────────────────────────────────────────────────────────── */
const wooCommerceFeatures = [
  {
    id: "custom-theme",
    label: "Custom Theme Development",
    icon: "🎨",
    color: "#A855F7",
    desc: "Create unique, brand-aligned WooCommerce themes from scratch. Fully responsive designs that provide exceptional shopping experiences across all devices.",
    placeholder: "CT",
    image: "/products/woocommerce/Custom-theme-development.jpg",
  },
  {
    id: "product-management",
    label: "Product Management",
    icon: "📦",
    color: "#9333ea",
    desc: "Effortlessly manage your product catalog with bulk uploads, variations, attributes, and categories. Organize your inventory for optimal customer experience.",
    placeholder: "PM",
    image: "/products/woocommerce/Add-products.jpg",
  },
  {
    id: "payment",
    label: "Payment Gateway Integration",
    icon: "💳",
    color: "#7c3aed",
    desc: "Seamless integration with multiple payment gateways including PayPal, Stripe, Square, and custom payment solutions for global transactions.",
    placeholder: "PG",
    image: "/products/woocommerce/Payment-gateway-integration.jpg",
  },
  {
    id: "coupon-management",
    label: "Coupon & Discount Management",
    icon: "🎟️",
    color: "#6d28d9",
    desc: "Create and manage promotional campaigns with flexible coupon codes, discount rules, and special offers to boost sales and customer loyalty.",
    placeholder: "CM",
    image: "/products/woocommerce/Coupon-management.jpg",
  },
  {
    id: "user-management",
    label: "User Management & Roles",
    icon: "👥",
    color: "#5b21b6",
    desc: "Manage customer accounts, user roles, and permissions. Create custom user experiences with role-based access control and customer groups.",
    placeholder: "UM",
    image: "/products/woocommerce/User-Management.jpg",
  },
  {
    id: "page-builder",
    label: "Custom Page Builder",
    icon: "📄",
    color: "#c084fc",
    desc: "Design stunning product pages, landing pages, and promotional content with drag-and-drop page builders and custom templates.",
    placeholder: "PB",
    image: "/products/woocommerce/Add-page.jpg",
  },
  {
    id: "coupon-dashboard",
    label: "Coupon Analytics",
    icon: "📈",
    color: "#e9d5ff",
    desc: "Track coupon performance, redemption rates, and campaign effectiveness. Analyze discount strategies to maximize ROI on promotional activities.",
    placeholder: "CA",
    image: "/products/woocommerce/Coupon-dashboard.jpg",
  },
];

/* ─────────────────────────────────────────────────────────────
   WooCommerce SERVICES DATA
───────────────────────────────────────────────────────────── */
const wooCommerceServices = [
  {
    id: "store-setup",
    title: "WooCommerce Store Setup",
    icon: "🛒",
    description: "Launch your online store with a fully configured WooCommerce setup tailored to your business needs, including theme customization and essential settings."
  },
  {
    id: "order-management",
    title: "Order Management",
    icon: "📋",
    description: "Efficient order processing system to manage customer orders, track statuses, and streamline your sales workflow."
  },
  {
    id: "product-upload",
    title: "Product Upload & Categorization",
    icon: "📦",
    description: "Get your product catalog organized with bulk uploads, custom attributes, and logical category structuring for a smooth shopping experience."
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway Integration",
    icon: "💳",
    description: "Seamless integration with trusted payment gateways like PayPal, Stripe, and local providers to ensure secure transactions."
  },
  {
    id: "shipping-api",
    title: "Shipping API Integration",
    icon: "🚚",
    description: "Automated shipping rate calculations and real-time tracking with leading carriers via integrated shipping APIs."
  },
  {
    id: "plugin-install",
    title: "Plugin Installation & Configuration",
    icon: "🔌",
    description: "Extend your store's capabilities with the right plugins, carefully selected, installed, and configured to match your goals."
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization for WooCommerce",
    icon: "🔍",
    description: "Boost your product visibility with on-page SEO, keyword targeting, and schema markup specifically optimized for WooCommerce."
  },
  {
    id: "mobile-design",
    title: "Mobile-Responsive Design",
    icon: "📱",
    description: "Ensure a smooth and engaging shopping experience on all devices with a responsive design that adapts to screens of all sizes."
  },
  {
    id: "maintenance",
    title: "Ongoing Maintenance & Support",
    icon: "🛠️",
    description: "Stay worry-free with regular updates, security checks, and expert support to keep your WooCommerce store running smoothly."
  }
];

/* ─────────────────────────────────────────────────────────────
   WooCommerce FAQ DATA
───────────────────────────────────────────────────────────── */
const wooCommerceFAQs = [
  {
    question: "Does WooCommerce offer inventory tracking capabilities?",
    answer: "Yes, WooCommerce comes with built-in inventory management. You can track stock levels, set low stock notifications, manage backorders, and hide out-of-stock items automatically."
  },
  {
    question: "Can I manage orders and customer details within WooCommerce?",
    answer: "Absolutely! WooCommerce provides a comprehensive order management system where you can view, process, and track all customer orders. You can also manage customer information, view purchase history, and handle refunds and exchanges directly from the dashboard."
  },
  {
    question: "Does WooCommerce support product variations like size and color?",
    answer: "Yes, WooCommerce has robust support for product variations. You can create variable products with multiple attributes like size, color, material, etc. Each variation can have its own price, stock level, and SKU."
  },
  {
    question: "Does WooCommerce support coupon codes and discounts?",
    answer: "Yes, WooCommerce includes a powerful coupon system. You can create percentage discounts, fixed cart discounts, fixed product discounts, and set usage restrictions like minimum purchase amounts, specific products, or user roles."
  },
  {
    question: "Can I integrate multiple payment gateways with WooCommerce?",
    answer: "Absolutely! WooCommerce supports integration with numerous payment gateways including PayPal, Stripe, Square, Authorize.net, and many more. You can offer multiple payment options to your customers simultaneously."
  },
  {
    question: "Can I manage multiple product categories and filters in WooCommerce?",
    answer: "Yes, WooCommerce allows you to create unlimited product categories and subcategories. You can also add custom attributes and filters to help customers easily find products based on specific criteria like price range, brand, size, color, and more."
  },
  {
    question: "Can WooCommerce handle digital products as well as physical goods?",
    answer: "Yes, WooCommerce fully supports both digital and physical products. For digital products, you can enable automatic download links sent to customers after purchase, set download limits, and expiration dates. Physical products can be managed with shipping options and inventory tracking."
  }
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
   WooCommerce FEATURE ORBIT SECTION
──────────────────────────────────────────────────────────── */
function WooCommerceFeatureSection() {
  const [activeId, setActiveId] = useState("custom-theme");
  const [mobileOpenId, setMobileOpenId] = useState("custom-theme");

  const leftFeatures = wooCommerceFeatures.slice(0, Math.ceil(wooCommerceFeatures.length / 2));
  const rightFeatures = wooCommerceFeatures.slice(Math.ceil(wooCommerceFeatures.length / 2));
  const activeFeature = wooCommerceFeatures.find((f) => f.id === activeId);

  return (
    <section className="py-20 overflow-hidden bg-[#F7F7F7]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="block text-[10px] font-black text-[#A855F7] tracking-[0.28em] uppercase mb-2.5">
            KEY FEATURES
          </span>
          <h2 className="text-[#0a0a0a] mb-3.5 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
            Key Features Of Our <span className="text-[#A855F7]">WooCommerce</span> Development
          </h2>
          <p className="text-[#6b7280] max-w-[520px] mx-auto text-[15px] leading-relaxed">
            Professional WooCommerce development services that transform your online store into a powerful sales engine with custom features and seamless integrations.
          </p>
        </div>

        {/* ── DESKTOP ORBIT (xl and above) ── */}
        <div className="hidden xl:block">
          <div className="relative h-[605px] mx-auto xl:w-[80%] lg:w-full">
            {/* Purple arc ellipse */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] rounded-full border-[1.5px] pointer-events-none z-0"
              style={{ borderColor: 'rgba(168, 85, 247, 0.42)' }}
            />

            {/* Left column */}
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 flex flex-col items-end gap-10 z-10 w-[220px]">
              {leftFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold whitespace-nowrap ${activeId === feature.id
                    ? "bg-gray-900 border-purple-600 text-black shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "border-purple-300 text-gray-800 hover:border-purple-500 hover:shadow-md"
                    }`}
                >
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {feature.label}
                  {activeId === feature.id && (
                    <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[7px] border-l-purple-900" />
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
                    ? "bg-gray-900 border-purple-600 text-black shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "border-purple-300 text-gray-800 hover:border-purple-500 hover:shadow-md"
                    }`}
                >
                  {feature.label}
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {activeId === feature.id && (
                    <span className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[7px] border-r-purple-900" />
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

        {/* ── TABLET LAYOUT (lg to xl) ── */}
        <div className="hidden lg:block xl:hidden">
          {/* Navigation buttons on top */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {wooCommerceFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`flex items-center gap-2 py-2.5 px-5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    activeId === feature.id
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
                key={activeId}
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
                key={activeId + "-desc"}
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
          {wooCommerceFeatures.map((feature) => {
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
                        ? "bg-gradient-to-br from-[#A855F7] to-[#9333ea] shadow-md scale-110"
                        : "bg-gray-100"
                        }`}
                    >
                      <span className={isOpen ? "filter drop-shadow" : ""}>
                        {feature.icon}
                      </span>
                    </div>
                    <span className={`font-semibold text-sm ${isOpen ? "text-[#A855F7]" : "text-gray-800"}`}>
                      {feature.label}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-[#A855F7] rotate-180" : "bg-gray-100"
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

/* ─────────────────────────────────────────────────────────
   WooCommerce FAQ SECTION
──────────────────────────────────────────────────────────── */
function WooCommerceFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A855F7] opacity-[0.03] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9333ea] opacity-[0.03] rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-black text-[#A855F7] tracking-[0.28em] uppercase mb-3 bg-[#A855F7]/10 px-4 py-2 rounded-full">
              FAQ
            </span>
            <h2 className="text-[#0a0a0a] mb-4 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6b7280] max-w-[600px] mx-auto text-base leading-relaxed">
              Find answers to common questions about WooCommerce development and our services
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {wooCommerceFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="bg-white rounded-2xl shadow-md border-2 border-gray-100 overflow-hidden hover:border-[#A855F7]/30 transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? "bg-gradient-to-br from-[#A855F7] to-[#9333ea] shadow-md"
                        : "bg-gray-100"
                    }`}>
                      <span className={`text-xl ${openIndex === index ? "text-white" : "text-gray-600"}`}>
                        ❓
                      </span>
                    </div>
                    <span className={`font-bold text-lg pr-4 transition-colors ${
                      openIndex === index ? "text-[#A855F7]" : "text-gray-900"
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#A855F7] rotate-180"
                      : "bg-gray-100"
                  }`}>
                    <svg
                      className={`w-5 h-5 transition-colors ${openIndex === index ? "text-white" : "text-gray-600"}`}
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
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="pl-14 pr-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom of FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button
            onClick={() => {
              const event = new CustomEvent('openContactModal');
              window.dispatchEvent(event);
            }}
            className="press-illusion-btn-orange bg-orange-600 text-white font-bold px-8 py-4 text-base items-center space-x-2 inline-flex cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Request Quote</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}




