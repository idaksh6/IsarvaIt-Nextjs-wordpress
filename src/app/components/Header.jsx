"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const servicesData = [
  { label: "Website Services", href: "/services/website-services", icon: "🌐" },
  { label: "Cloud Services", href: "/services/cloud-services", icon: "☁️" },
  { label: "Odoo Apps Support", href: "/services/odoo-apps-support", icon: "📦" },
  { label: "AI & ML Consulting", href: "/services/ai-ml-consulting", icon: "🤖" },
  { label: "Staffing Services", href: "/services/staffing-services", icon: "👥" },
  { label: "Consulting Services", href: "/services/consulting-services", icon: "💼" },
  { label: "ERP Services", href: "/services/erp-services", icon: "🏢" },
  { label: "Offshore Development", href: "/services/offshore-development", icon: "🌍" },
  { label: "Training", href: "/services/training", icon: "📚" },
  { label: "WordPress Development", href: "/services/wordpress-development", icon: "📝" },
  { label: "Statamic Development", href: "/services/statamic-development", icon: "✨" },
  { label: "GPS Tracking", href: "/services/gps-tracking", icon: "📍" },
  { label: "WordPress Training", href: "/services/wordpress-training", icon: "🎓" },
  { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📱" },
];

const industriesData = [
  { label: "Banking & Financial Services", href: "/industries/banking-financial-services", icon: "🏦" },
  { label: "Education", href: "/industries/education", icon: "🎓" },
  { label: "Insurance", href: "/industries/insurance", icon: "🛡️" },
  { label: "Healthcare & Life Sciences", href: "/industries/healthcare-life-sciences", icon: "🏥" },
  { label: "Manufacturing", href: "/industries/manufacturing", icon: "🏭" },
  { label: "Media & Entertainment", href: "/industries/media-entertainment", icon: "🎬" },
  { label: "BPO Services – ITES", href: "/industries/bpo-services-ites", icon: "💼" },
];

const productsData = [
  { label: "HRMS Software", href: "/products/hrms-software", icon: "👥" },
  { label: "WMS Software", href: "/products/wms-software", icon: "📦" },
  { label: "WooCommerce Development", href: "/products/woocommerce-development", icon: "🛒" },
  { label: "Petro Care", href: "/products/petro-care", icon: "⛽" },
  { label: "Retail Billing Software", href: "/products/retail-billing-software", icon: "🏪" },
  { label: "Retail Billing Multi Branch", href: "/products/retail-billing-multi-branch", icon: "🏬" },
  { label: "Document Management System", href: "/products/document-management-system", icon: "📄" },
  { label: "Time Attendance System", href: "/products/time-attendance-system", icon: "⏰" },
  { label: "Ticket Management Software", href: "/products/ticket-management-software", icon: "🎫" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-gray-100"
          : "bg-transparent py-5"
      }`}
      style={{ willChange: scrolled ? "auto" : "transform" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" prefetch={true} className="flex items-center">
          <Image
            src="/isarva-logo.png"
            alt="Isarva Logo"
            width={120}
            height={40}
            priority
            className="w-auto h-auto object-contain drop-shadow-sm"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={true}
              className="text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600"
            >
              {link.label}
            </Link>
          ))}

          {/* Services Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              href="/services"
              prefetch={true}
              className="text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600 flex items-center gap-1"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[800px]">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
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
                        prefetch={true}
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-start gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-all duration-200"
                      >
                        <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-200">
                          {service.icon}
                        </span>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors text-sm">
                            {service.label}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/services"
                      prefetch={true}
                      onClick={() => setIsServicesOpen(false)}
                      className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all duration-200"
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
              prefetch={true}
              className="text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600 flex items-center gap-1"
            >
              Industries
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isIndustriesOpen ? "rotate-180" : ""
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
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
                        prefetch={true}
                        onClick={() => setIsIndustriesOpen(false)}
                        className="group flex items-start gap-3 p-4 rounded-xl hover:bg-blue-50 transition-all duration-200"
                      >
                        <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-200">
                          {industry.icon}
                        </span>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                            {industry.label}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/industries"
                      prefetch={true}
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

          {/* Products Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <Link
              href="/products"
              prefetch={true}
              className="text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600 flex items-center gap-1"
            >
              Products
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isProductsOpen ? "rotate-180" : ""
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[800px]">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
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
                        prefetch={true}
                        onClick={() => setIsProductsOpen(false)}
                        className="group flex items-start gap-3 p-4 rounded-xl hover:bg-violet-50 transition-all duration-200"
                      >
                        <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-200">
                          {product.icon}
                        </span>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors text-sm">
                            {product.label}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/products"
                      prefetch={true}
                      onClick={() => setIsProductsOpen(false)}
                      className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:gap-3 transition-all duration-200"
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
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group self-end"
          aria-label="Open mobile menu"
        >
          <div className="w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:bg-green-500"></div>
          <div className="w-6 h-0.5 bg-gray-800 rounded-full mt-1.5 transition-all duration-300 group-hover:bg-green-500"></div>
          <div className="w-6 h-0.5 bg-gray-800 rounded-full mt-1.5 transition-all duration-300 group-hover:bg-green-500"></div>
        </button>

        {/* CTA Button - Hidden on Mobile */}
        <Link
          href="/contact"
          prefetch={true}
          className="press-illusion-btn bg-green-400 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 hidden md:flex"
        >
          <span>Support</span>
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
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 max-w-[100vw] w-full bg-white h-[100vh] shadow-2xl transform transition-transform duration-300 ease-out translate-x-0 overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 p-6">
              <div className="flex items-center justify-end">
                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="p-6 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  prefetch={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-2xl text-gray-700 hover:bg-green-50 hover:text-green-700 active:bg-green-100 transition-all duration-200 group"
                >
                  <div className="flex-1">
                    <span className="font-semibold text-base">
                      {link.label}
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors duration-200"
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
              ))}

              {/* Services Accordion in Mobile */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full p-4 text-gray-700 hover:bg-green-50 transition-all duration-200"
                >
                  <span className="font-semibold text-base">Services</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180" : ""
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
                </button>

                {isMobileServicesOpen && (
                  <div className="bg-gray-50 p-3 space-y-1">
                    <Link
                      href="/services"
                      prefetch={true}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-3 rounded-xl text-emerald-600 hover:bg-white transition-all duration-200 font-semibold text-sm"
                    >
                      View All Services →
                    </Link>
                    {servicesData.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        prefetch={true}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-white transition-all duration-200"
                      >
                        <span className="text-lg">{service.icon}</span>
                        <span className="text-sm">{service.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries Accordion in Mobile */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                  className="flex items-center justify-between w-full p-4 text-gray-700 hover:bg-blue-50 transition-all duration-200"
                >
                  <span className="font-semibold text-base">Industries</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      isMobileIndustriesOpen ? "rotate-180" : ""
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
                </button>

                {isMobileIndustriesOpen && (
                  <div className="bg-gray-50 p-3 space-y-1">
                    <Link
                      href="/industries"
                      prefetch={true}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-3 rounded-xl text-blue-600 hover:bg-white transition-all duration-200 font-semibold text-sm"
                    >
                      View All Industries →
                    </Link>
                    {industriesData.map((industry) => (
                      <Link
                        key={industry.href}
                        href={industry.href}
                        prefetch={true}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-white transition-all duration-200"
                      >
                        <span className="text-lg">{industry.icon}</span>
                        <span className="text-sm">{industry.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Products Accordion in Mobile */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="flex items-center justify-between w-full p-4 text-gray-700 hover:bg-violet-50 transition-all duration-200"
                >
                  <span className="font-semibold text-base">Products</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      isMobileProductsOpen ? "rotate-180" : ""
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
                </button>

                {isMobileProductsOpen && (
                  <div className="bg-gray-50 p-3 space-y-1">
                    <Link
                      href="/products"
                      prefetch={true}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-3 rounded-xl text-violet-600 hover:bg-white transition-all duration-200 font-semibold text-sm"
                    >
                      View All Products →
                    </Link>
                    {productsData.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        prefetch={true}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-white transition-all duration-200"
                      >
                        <span className="text-lg">{product.icon}</span>
                        <span className="text-sm">{product.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CTA Section */}
            <div className="p-6 border-t border-gray-100">
              <Link
                href="/contact"
                prefetch={true}
                onClick={() => setIsMobileMenuOpen(false)}
                className="press-illusion-btn bg-green-400 text-black w-fit font-bold px-6 py-2 text-sm items-center space-x-2 inline-flex"
              >
                <span>Get Pricing & Demo</span>
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
          </div>
        </div>
      )}
    </header>
  );
}
