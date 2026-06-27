"use client";

import { useState, useEffect } from "react";
import Link from "./AppLink";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const aboutColumns = {
  col1: [
    { label: "About Us", href: "/about", icon: "ℹ️" },
    { label: "Quality Policy", href: "/quality-policy", icon: "📜" },
    { label: "Case Studies", href: "/case-studies", icon: "📊" },
    { label: "Testimonials", href: "/testimonial", icon: "💬" },
    { label: "Blog", href: "/blog", icon: "✍️" },
  ],
  col2: [
    { label: "Partners", href: "/partners", icon: "🤝" },
    { label: "White Label", href: "/white-label-agency-partnerships", icon: "🏷️" },
    { label: "Reference", href: "/referral-program", icon: "🔗" },
    { label: "Training", href: "/training-programs", icon: "🎓" },
    { label: "Career", href: "/careers", icon: "💼" },
  ]
};

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      ...aboutColumns.col1,
      ...aboutColumns.col2
    ]
  },
];

const servicesData = [
  { label: "Website Services", href: "/service/website-services", icon: "🌐" },
  { label: "WordPress Development", href: "/service/wordpress-development", icon: "📝" },
  { label: "AI & ML Consulting", href: "/service/ai-ml-consulting", icon: "🤖" },
  { label: "Website Maintenance AMC", href: "/service/website-maintenance-amc", icon: "🛠️" },
  { label: "Cloud Services", href: "/service/cloud", icon: "☁️" },
  { label: "Staffing Services", href: "/service/staffing", icon: "👥" },
  { label: "Digital Marketing", href: "/service/digital-marketing", icon: "📱" },
  { label: "Statamic Development", href: "/service/statamic-development", icon: "✨" },
  { label: "Consulting Services", href: "/service/consulting-services", icon: "💼" },
  { label: "ERP Services", href: "/service/erp-services", icon: "🏢" },
  { label: "Offshore Development", href: "/service/offshore-development", icon: "🌍" },
  { label: "Training", href: "/service/training", icon: "📚" },
  { label: "GPS Tracking", href: "/service/gps-tracking", icon: "📍" },
  { label: "WordPress Training", href: "/service/wordpress-training", icon: "🎓" },
  { label: "Odoo Apps Support", href: "/service/odoo-apps-support-and-maintenance", icon: "📦" },

];

const industriesData = [
  { label: "Banking & Financial Services", href: "/industry/banking-and-financial-services", icon: "🏦" },
  { label: "Healthcare & Life Sciences", href: "/industry/health-care-life-sciences", icon: "🏥" },
  { label: "Insurance", href: "/industry/insurance", icon: "🛡️" },
  { label: "Manufacturing", href: "/industry/manufacturing", icon: "🏭" },
  { label: "Education", href: "/industry/education", icon: "🎓" },
  { label: "Media & Entertainment", href: "/industry/media-entertainment", icon: "🎬" },
  { label: "BPO Services – ITES", href: "/industry/bpo-services-ites", icon: "💼" },
];

const productsData = [
  { label: "HRMS Software", href: "/product/hrms-software", icon: "👥" },
  { label: "CRM Software", href: "/product/crm-application", icon: "👔" },
  { label: "Support Software", href: "/product/support-application", icon: "🎧" },
  { label: "BillSoft Software", href: "/product/bill-soft", icon: "🧾" },
  { label: "Marine Service Software", href: "/product/marine-service-software", icon: "🏬" },
  { label: "Dispatcher Panel", href: "/product/dispatcher-panel", icon: "⛽" },
  { label: "WooCommerce Development", href: "/product/woocommerce-development", icon: "🛒" },
  { label: "Document Management System", href: "/product/document-management-system", icon: "📄" },
  { label: "Retail Billing Software", href: "/product/retail-billing-software", icon: "🚚" },
  { label: "Dealer Management and Dealer Article Software", href: "/product/dealer-management-and-dealer-article-software", icon: "🤝" },
  { label: "Lawyer Legal Association Software", href: "/product/lawyer-legal-association-software", icon: "⚖️" },
  { label: "POSH Compliance Software", href: "/product/posh-compliance-software", icon: "🛡️" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-gray-100"
        : "bg-transparent py-5"
        }`}
      style={{ willChange: scrolled ? "auto" : "transform" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-[64px] w-[165px]"> {/* Added sizes for Next.js Image optimization */}
            <Image src="/isarva New Logo.png" alt="Isarva Logo" fill sizes="165px" className="object-contain drop-shadow-sm" priority />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden nav:flex items-center gap-7">
          {navLinks.map((link) => (
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.label === "About Us" && setIsAboutOpen(true)}
                onMouseLeave={() => link.label === "About Us" && setIsAboutOpen(false)}
              >
                <Link
                  href={link.href}
                  className="group text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600 flex items-center gap-1"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-all duration-200 text-gray-600 group-hover:text-emerald-600 ${(link.label === "About Us" && isAboutOpen) ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {/* About Us Mega Menu */}
                {link.label === "About Us" && isAboutOpen && (
                  <div className="absolute top-full left-[-330px] pt-4 w-[860px]">
                    <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 flex gap-8">
                      {/* Left: Featured Content with Image */}
                      <Link
                        href="/about"
                        className="w-[280px] bg-gradient-to-br from-emerald-50 to-lime-50 rounded-3xl p-6 relative overflow-hidden group/featured cursor-pointer hover:shadow-lg transition-all duration-300"
                        onClick={() => setIsAboutOpen(false)}
                      >
                        <div className="absolute inset-0 opacity-10 group-hover/featured:scale-110 transition-transform duration-700">
                          <Image src="/agency_office_studio_premium_1773850105446.png" fill sizes="280px" className="object-cover" alt="Isarva team collaboration workspace" loading="lazy" />
                        </div>
                        <div className="relative z-10 flex flex-col h-full">
                          <h3 className="mb-4">About Isarva</h3>
                          <p className="text-gray-600 text-base mb-6 font-medium leading-relaxed">At Isarva Infotech, we are more than an IT consulting firm - we are a strategic technology partner. Company plays a pivotal role in enabling organizations to achieve their digital transformation goals.</p>
                          <div className="mt-auto text-emerald-600 font-bold text-lg flex items-center gap-2 group/link">
                            Read More <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                          </div>
                        </div>
                      </Link>

                      {/* Right: Nav Links split into 2 columns */}
                      <div className="flex-1 flex gap-6">
                        {/* Column 1: Company */}
                        <div className="flex-1 space-y-2">
                          <div className="mb-4">
                            <h3 className="mb-1">Company</h3>
                          </div>
                          {aboutColumns.col1.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setIsAboutOpen(false)}
                              className="group flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-200"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-white group-hover:bg-[#10b981] flex items-center justify-center transition-colors shadow-sm">
                                  <span className="text-base group-hover:scale-110 transition-transform">
                                    {child.icon}
                                  </span>
                                </div>
                                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors capitalize tracking-tight text-xs md:text-sm">
                                  {child.label}
                                </span>
                              </div>
                              <svg className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </Link>
                          ))}
                        </div>

                        {/* Column 2: Grow With Us */}
                        <div className="flex-1 space-y-2">
                          <div className="mb-4">
                            <h3 className="mb-1">Grow With Us</h3>
                          </div>
                          {aboutColumns.col2.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setIsAboutOpen(false)}
                              className="group flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-200"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-white group-hover:bg-[#10b981] flex items-center justify-center transition-colors shadow-sm">
                                  <span className="text-base group-hover:scale-110 transition-transform">
                                    {child.icon}
                                  </span>
                                </div>
                                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors capitalize tracking-tight text-xs md:text-sm">
                                  {child.label}
                                </span>
                              </div>
                              <svg className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600"
              >
                {link.label}
              </Link>
            )
          ))}

          {/* Products Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <Link
              href="/products"
              className="group text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600 flex items-center gap-1"
            >
              Products
              <svg
                className={`w-4 h-4 transition-all duration-200 text-gray-600 group-hover:text-emerald-600 ${isProductsOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {/* Products Mega Menu Dropdown */}
            {isProductsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[920px]">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8">
                  <div className="mb-6">
                    <h3 className="mb-2">
                      Our Products
                    </h3>
                    <p className="text-gray-600">
                      Innovative software solutions for your business
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {productsData.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        onClick={() => {
                          setIsProductsOpen(false);
                          if (window.dataLayer) {
                            window.dataLayer.push({
                              event: 'product_click',
                              'product-name': product.label
                            });
                          }
                        }}
                        className="product-click-trigger group flex items-center gap-3 p-4 rounded-xl hover:bg-violet-50 transition-all duration-200"
                        data-product-name={product.label}
                      >
                        <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-200">
                          {product.icon}
                        </span>
                        <div>
                          <h4 className="group-hover:text-violet-600 transition-colors text-sm">
                            {product.label}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/products"
                      onClick={() => setIsProductsOpen(false)}
                      className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-200"
                    >
                      View All Products
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Services Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              href="/services"
              className="group text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600 flex items-center gap-1"
            >
              Services
              <svg
                className={`w-4 h-4 transition-all duration-200 text-gray-600 group-hover:text-emerald-600 ${isServicesOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {/* Mega Menu Dropdown */}
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[920px]">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8">
                  <div className="mb-6">
                    <h3 className="mb-2">
                      Our Services
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive solutions for your business needs
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {servicesData.map((service, idx) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-center gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-all duration-200"
                      >
                        <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-200">
                          {service.icon}
                        </span>
                        <div>
                          <h4 className="group-hover:text-emerald-600 transition-colors text-sm">
                            {service.label}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-200"
                    >
                      View All Services
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setIsIndustriesOpen(true)}
            onMouseLeave={() => setIsIndustriesOpen(false)}
          >
            <Link
              href="/industries"
              className="group text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600 flex items-center gap-1"
            >
              Industries
              <svg
                className={`w-4 h-4 transition-all duration-200 text-gray-600 group-hover:text-emerald-600 ${isIndustriesOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {/* Industries Mega Menu Dropdown */}
            {isIndustriesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8">
                  <div className="mb-6">
                    <h3 className="mb-2">
                      Industries We Serve
                    </h3>
                    <p className="text-gray-600">
                      Specialized solutions for your industry
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {industriesData.map((industry) => (
                      <Link
                        key={industry.href}
                        href={industry.href}
                        onClick={() => setIsIndustriesOpen(false)}
                        className="group flex items-center gap-3 p-4 rounded-xl hover:bg-blue-50 transition-all duration-200"
                      >
                        <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-200">
                          {industry.icon}
                        </span>
                        <div>
                          <h4 className="group-hover:text-blue-600 transition-colors text-sm">
                            {industry.label}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/industries"
                      onClick={() => setIsIndustriesOpen(false)}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-200"
                    >
                      View All Industries
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Support Link */}
          <Link
            href="https://support.isarva.in/form"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600"
          >
            Support
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="nav:hidden relative w-8 h-8 flex flex-col justify-center items-center group self-end"
          aria-label="Open mobile menu"
        >
          <div className="w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:bg-green-500"></div>
          <div className="w-6 h-0.5 bg-gray-800 rounded-full mt-1.5 transition-all duration-300 group-hover:bg-green-500"></div>
          <div className="w-6 h-0.5 bg-gray-800 rounded-full mt-1.5 transition-all duration-300 group-hover:bg-green-500"></div>
        </button>

        {/* CTA Button - Hidden on Mobile */}
        <Link
          href="/contact"
          className="press-illusion-btn-orange text-white w-fit font-bold px-8 py-3 text-base items-center space-x-2 !hidden nav:!flex transition-all duration-300"
        >
          <span>Contact Us</span>
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
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9998] nav:hidden backdrop-blur-sm bg-black/30"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 max-w-[85vw] w-full bg-white h-[100vh] shadow-2xl z-[9999] nav:hidden overflow-y-auto"
            >
              {/* Premium Header with Gradient */}
              <div className="relative bg-gradient-to-br from-[#22C55E] via-[#16a34a] to-[#15803d] p-6 overflow-hidden">
                {/* Decorative Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
                  }}
                ></div>

                <div className="relative flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-white mb-1 capitalize">Menu</h2>
                    <p className="text-white/80 text-sm">Explore our solutions</p>
                  </div>

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-11 h-11 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Navigation Links with Staggered Animation */}
              <div className="p-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.children ? (
                      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm mb-2">
                        <button
                          onClick={() => {
                            const nextState = !isMobileAboutOpen;
                            setIsMobileAboutOpen(nextState);
                            if (nextState) {
                              setIsMobileProductsOpen(false);
                              setIsMobileServicesOpen(false);
                              setIsMobileIndustriesOpen(false);
                            }
                          }}
                          className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                              <span className="text-lg">ℹ️</span>
                            </div>
                            <span className="font-bold text-base">{link.label}</span>
                          </div>
                          <motion.svg
                            animate={{ rotate: isMobileAboutOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </motion.svg>
                        </button>
                        <AnimatePresence>
                          {isMobileAboutOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-gray-50/50"
                            >
                              <div className="p-3 space-y-2">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200"
                                  >
                                    <span className="text-sm font-semibold text-gray-700">
                                      {child.label}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center gap-3 p-4 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 border border-transparent hover:border-green-200 active:bg-green-100 transition-all duration-300"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-400 group-hover:to-emerald-500 rounded-xl flex items-center justify-center transition-all duration-300">
                          <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                            {index === 0 ? "🏠" : index === 1 ? "ℹ️" : "📝"}
                          </span>
                        </div>
                        <div className="flex-1">
                          <span className="font-bold text-gray-800 group-hover:text-green-700 text-base transition-colors duration-300">
                            {link.label}
                          </span>
                        </div>
                        <svg
                          className="w-5 h-5 text-gray-300 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* Products Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="border-2 border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm"
                >
                  <button
                    onClick={() => {
                      const nextState = !isMobileProductsOpen;
                      setIsMobileProductsOpen(nextState);
                      if (nextState) {
                        setIsMobileAboutOpen(false);
                        setIsMobileServicesOpen(false);
                        setIsMobileIndustriesOpen(false);
                      }
                    }}
                    className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl flex items-center justify-center">
                        <span className="text-lg">📦</span>
                      </div>
                      <span className="font-bold text-base">Products</span>
                    </div>
                    <motion.svg
                      animate={{ rotate: isMobileProductsOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {isMobileProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-gradient-to-b from-gray-50 to-white p-3 space-y-1 max-h-[300px] overflow-y-auto">
                          <Link
                            href="/products"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2 p-3 rounded-xl text-emerald-600 hover:bg-white bg-emerald-50 border border-emerald-200 transition-all duration-200 font-bold text-sm mb-2"
                          >
                            <span>View All Products</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          {productsData.map((product, idx) => (
                            <motion.div
                              key={product.href}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.03 }}
                            >
                              <Link
                                href={product.href}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  if (window.dataLayer) {
                                    window.dataLayer.push({
                                      event: 'product_click',
                                      'product-name': product.label
                                    });
                                  }
                                }}
                                className="product-click-trigger flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-white hover:shadow-sm transition-all duration-200"
                                data-product-name={product.label}
                              >
                                <span className="text-xl">{product.icon}</span>
                                <span className="text-sm font-medium">{product.label}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Services Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.05 }}
                  className="border-2 border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm"
                >
                  <button
                    onClick={() => {
                      const nextState = !isMobileServicesOpen;
                      setIsMobileServicesOpen(nextState);
                      if (nextState) {
                        setIsMobileAboutOpen(false);
                        setIsMobileProductsOpen(false);
                        setIsMobileIndustriesOpen(false);
                      }
                    }}
                    className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                        <span className="text-lg">🛠️</span>
                      </div>
                      <span className="font-bold text-base">Services</span>
                    </div>
                    <motion.svg
                      animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-gradient-to-b from-gray-50 to-white p-3 space-y-1 max-h-[300px] overflow-y-auto">
                          <Link
                            href="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2 p-3 rounded-xl text-orange-600 hover:bg-white bg-orange-50 border border-orange-200 transition-all duration-200 font-bold text-sm mb-2"
                          >
                            <span>View All Services</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          {servicesData.map((service, idx) => (
                            <motion.div
                              key={service.href}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.03 }}
                            >
                              <Link
                                href={service.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-white hover:shadow-sm transition-all duration-200"
                              >
                                <span className="text-xl">{service.icon}</span>
                                <span className="text-sm font-medium">{service.label}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Industries Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.05 }}
                  className="border-2 border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm"
                >
                  <button
                    onClick={() => {
                      const nextState = !isMobileIndustriesOpen;
                      setIsMobileIndustriesOpen(nextState);
                      if (nextState) {
                        setIsMobileAboutOpen(false);
                        setIsMobileProductsOpen(false);
                        setIsMobileServicesOpen(false);
                      }
                    }}
                    className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                        <span className="text-lg">🏭</span>
                      </div>
                      <span className="font-bold text-base">Industries</span>
                    </div>
                    <motion.svg
                      animate={{ rotate: isMobileIndustriesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {isMobileIndustriesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-gradient-to-b from-gray-50 to-white p-3 space-y-1">
                          <Link
                            href="/industries"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2 p-3 rounded-xl text-emerald-600 hover:bg-white bg-emerald-50 border border-emerald-200 transition-all duration-200 font-bold text-sm mb-2"
                          >
                            <span>View All Industries</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          {industriesData.map((industry, idx) => (
                            <motion.div
                              key={industry.href}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.03 }}
                            >
                              <Link
                                href={industry.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-white hover:shadow-sm transition-all duration-200"
                              >
                                <span className="text-xl">{industry.icon}</span>
                                <span className="text-sm font-medium">{industry.label}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Support Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 4) * 0.05 }}
                >
                  <Link
                    href="https://support.isarva.in/form"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center gap-3 p-4 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 border border-transparent hover:border-emerald-200 active:bg-emerald-100 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 group-hover:from-emerald-400 group-hover:to-teal-500 rounded-xl flex items-center justify-center transition-all duration-300">
                      <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                        🎧
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 group-hover:text-emerald-700 text-base transition-colors duration-300">
                        Support
                      </span>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>

              </div>

              {/* Premium CTA Section */}
              <div className="p-4 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="press-illusion-btn-orange bg-orange-600 justify-center text-white w-fit text-center mx-auto font-bold px-6 py-2 text-base items-center space-x-2 flex nav:hidden"
                  >
                    <span>Contact Us</span>
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
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
