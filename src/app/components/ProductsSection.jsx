"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "./AppLink";
import {
  ArrowRight,
  Check,
  Users,
  Handshake,
  Headphones,
  Receipt,
  Ship,
  Truck,
  UtensilsCrossed,
  GraduationCap,
  Boxes,
} from "lucide-react";

// Exactly 8 products matching the user's specification
const PRODUCTS = [
  {
    title: "HRMS Software",
    slug: "hrms-software",
    link: "/product/hrms-software",
    description: "Complete HR management solutions for modern workplaces.",
    features: [
      "Employee Management",
      "Payroll & Attendance",
      "Performance Tracking",
    ],
    image: "/images/products/bg-product-hrms.png",
    imagePosition: "object-cover object-right",
    Icon: Users,
    cardBorder: "border-emerald-200/90 hover:border-emerald-400",
    iconBox: "bg-emerald-100 text-emerald-700 border border-emerald-200/90",
    checkBg: "bg-emerald-600",
    accentColor: "text-emerald-700",
    btnHover: "group-hover:text-emerald-600 group-hover:border-emerald-300",
    textBackdrop: "from-[#F0FAF4] via-[#F0FAF4] via-68% to-transparent",
  },
  {
    title: "CRM Software",
    slug: "crm-software",
    link: "/product/crm-software",
    description: "Manage leads, customer relationships, and sales efficiently.",
    features: ["Lead Management", "Sales Pipeline", "Customer Insights"],
    image: "/images/products/bg-product-crm.png",
    imagePosition: "object-cover object-right",
    Icon: Handshake,
    cardBorder: "border-blue-200/90 hover:border-blue-400",
    iconBox: "bg-blue-100 text-blue-700 border border-blue-200/90",
    checkBg: "bg-blue-600",
    accentColor: "text-blue-700",
    btnHover: "group-hover:text-blue-600 group-hover:border-blue-300",
    textBackdrop: "from-[#F0F6FE] via-[#F0F6FE] via-68% to-transparent",
  },
  {
    title: "Support Software",
    slug: "support-software",
    link: "/product/support-software",
    description: "Streamline customer support and ticket management.",
    features: [
      "Multi-channel Support",
      "Ticket Management",
      "Analytics & Reports",
    ],
    image: "/images/products/bg-product-support.png",
    imagePosition: "object-cover object-right",
    Icon: Headphones,
    cardBorder: "border-purple-200/90 hover:border-purple-400",
    iconBox: "bg-purple-100 text-purple-700 border border-purple-200/90",
    checkBg: "bg-purple-600",
    accentColor: "text-purple-700",
    btnHover: "group-hover:text-purple-600 group-hover:border-purple-300",
    textBackdrop: "from-[#F6F2FD] via-[#F6F2FD] via-68% to-transparent",
  },
  {
    title: "BillSoft Software",
    slug: "bill-soft",
    link: "/product/bill-soft",
    description: "Simplify billing, invoicing, and business transactions.",
    features: [
      "Invoice Generation",
      "Payment Tracking",
      "Financial Reports",
    ],
    image: "/images/products/bg-product-billsoft.png",
    imagePosition: "object-cover object-right",
    Icon: Receipt,
    cardBorder: "border-amber-200/90 hover:border-amber-400",
    iconBox: "bg-amber-100 text-amber-700 border border-amber-200/90",
    checkBg: "bg-amber-600",
    accentColor: "text-amber-700",
    btnHover: "group-hover:text-amber-600 group-hover:border-amber-300",
    textBackdrop: "from-[#FCF6EE] via-[#FCF6EE] via-68% to-transparent",
  },
  {
    title: "Marine Service Software",
    slug: "marine-service-software",
    link: "/product/marine-service-software",
    description: "Manage marine service operations with greater visibility.",
    features: [
      "Vessel Management",
      "Service Scheduling",
      "Operations Tracking",
    ],
    image: "/images/products/bg-product-marine.png",
    imagePosition: "object-cover object-right",
    Icon: Ship,
    cardBorder: "border-sky-200/90 hover:border-sky-400",
    iconBox: "bg-sky-100 text-sky-700 border border-sky-200/90",
    checkBg: "bg-sky-600",
    accentColor: "text-sky-700",
    btnHover: "group-hover:text-sky-600 group-hover:border-sky-300",
    textBackdrop: "from-[#F0F7FD] via-[#F0F7FD] via-68% to-transparent",
  },
  {
    title: "Dispatcher Panel",
    slug: "dispatcher-panel",
    link: "/product/dispatcher-panel",
    description: "Coordinate dispatch operations and fleet management.",
    features: ["Real-time Tracking", "Route Planning", "Fleet Management"],
    image: "/images/products/bg-product-dispatcher.png",
    imagePosition: "object-cover object-right",
    Icon: Truck,
    cardBorder: "border-orange-200/90 hover:border-orange-400",
    iconBox: "bg-orange-100 text-orange-700 border border-orange-200/90",
    checkBg: "bg-orange-600",
    accentColor: "text-orange-700",
    btnHover: "group-hover:text-orange-600 group-hover:border-orange-300",
    textBackdrop: "from-[#FCF5EE] via-[#FCF5EE] via-68% to-transparent",
  },
  {
    title: "Restaurant POS Software",
    slug: "restaurant-pos",
    link: "/product/restaurant-pos",
    description: "Cloud POS, table management, KDS, and VAT billing for restaurants.",
    features: [
      "Table & Order Management",
      "Kitchen Display (KDS)",
      "Tax & VAT Billing",
    ],
    image: "/images/products/bg-product-pos.png",
    imagePosition: "object-cover object-right",
    Icon: UtensilsCrossed,
    cardBorder: "border-rose-200/90 hover:border-rose-400",
    iconBox: "bg-rose-100 text-rose-700 border border-rose-200/90",
    checkBg: "bg-rose-600",
    accentColor: "text-rose-700",
    btnHover: "group-hover:text-rose-600 group-hover:border-rose-300",
    textBackdrop: "from-[#FDF1F4] via-[#FDF1F4] via-68% to-transparent",
  },
  {
    title: "LMS Software",
    slug: "lms-software",
    link: "/product/lms-software",
    description: "Learning management system for schools, courses, and student portals.",
    features: [
      "Course Management",
      "Student Portal",
      "Assessments & Certificates",
    ],
    image: "/images/products/bg-product-lms.png",
    imagePosition: "object-cover object-right",
    Icon: GraduationCap,
    cardBorder: "border-indigo-200/90 hover:border-indigo-400",
    iconBox: "bg-indigo-100 text-indigo-700 border border-indigo-200/90",
    checkBg: "bg-indigo-600",
    accentColor: "text-indigo-700",
    btnHover: "group-hover:text-indigo-600 group-hover:border-indigo-300",
    textBackdrop: "from-[#F4F2FD] via-[#F4F2FD] via-68% to-transparent",
  },
  {
    title: "Smart Godown Software",
    slug: "godown-management-software",
    link: "/product/godown-management-software",
    description: "Manage warehouse stock, inventory tracking, and operations.",
    features: [
      "Inventory Tracking",
      "Warehouse Stock Control",
      "Order & Rental Management",
    ],
    image: "/images/products/bg-product-godown.png",
    imagePosition: "object-cover object-right",
    Icon: Boxes,
    cardBorder: "border-teal-200/90 hover:border-teal-400",
    iconBox: "bg-teal-100 text-teal-700 border border-teal-200/90",
    checkBg: "bg-teal-600",
    accentColor: "text-teal-700",
    btnHover: "group-hover:text-teal-600 group-hover:border-teal-300",
    textBackdrop: "from-[#EFF9F5] via-[#EFF9F5] via-68% to-transparent",
  },
];

function ProductsSection() {
  return (
    <section
      id="products"
      className="relative py-10 sm:py-20 lg:py-24 bg-white overflow-hidden"
      aria-labelledby="products-heading"
    >
      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Heading & Action Button Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 mb-10 sm:mb-12 text-center lg:text-left">
          <div className="max-w-3xl flex flex-col items-center lg:items-start">
            {/* Eyebrow */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#00A86B] uppercase">
                OUR PRODUCTS
              </span>
              <span className="w-8 h-[2px] bg-[#00A86B] rounded-full inline-block" />
            </div>

            {/* Main Heading */}
            <h2
              id="products-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#102A43] leading-[1.18]"
            >
              Powerful Software{" "}
              <span className="text-[#00A86B]">for Every Industry</span>
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3.5 leading-relaxed font-normal">
              Explore our business software and digital solutions designed to
              simplify operations, improve productivity, and help teams work
              smarter.
            </p>
          </div>

          {/* Prominent Header Action Button */}
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF6B12] hover:bg-[#e85e0c] text-white font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-orange-500/25 hover:-translate-y-0.5 whitespace-nowrap self-center lg:self-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3. Product Cards Grid (3 columns desktop, 2 columns tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              href={product.link}
              className={`group relative overflow-hidden rounded-3xl border ${product.cardBorder} shadow-xs hover:shadow-[0_16px_36px_rgba(16,42,67,0.12)] transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 flex flex-col justify-between p-4 sm:p-5 min-h-[250px] bg-white`}
            >
              {/* Full Card Background Image - User's exact background image */}
              <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`${product.imagePosition} group-hover:scale-105 transition-transform duration-500 ease-out`}
                  loading="eager"
                  priority
                />
              </div>

              {/* Seamless Left Pastel Tint to guarantee 100% crystal-clear text readability */}
              <div
                className={`absolute inset-y-0 left-0 w-[78%] sm:w-[74%] lg:w-[70%] pointer-events-none z-1 bg-gradient-to-r ${product.textBackdrop}`}
                aria-hidden="true"
              />

              {/* Left-Side Content Stack sitting cleanly on top */}
              <div className="relative z-10 w-[52%] sm:w-[50%] flex flex-col justify-between h-full">
                <div>
                  {/* Category Icon Badge */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center shadow-xs mb-2.5 transition-transform duration-300 group-hover:scale-105 ${product.iconBox} bg-white/95 backdrop-blur-xs`}
                  >
                    <product.Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#0F172A] font-extrabold text-[15.5px] sm:text-[16.5px] tracking-tight leading-snug mb-1 group-hover:text-[#00A86B] transition-colors">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-700 text-[11.5px] sm:text-[12px] leading-snug line-clamp-2 mb-2.5 font-medium">
                    {product.description}
                  </p>

                  {/* 3 Feature Bullets with Checkmarks */}
                  <ul className="space-y-1.5 mb-3">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-1.5 text-[11px] sm:text-[11.5px] font-bold text-slate-900 leading-tight whitespace-nowrap"
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full ${product.checkBg} text-white flex items-center justify-center shrink-0 shadow-2xs`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Product Link */}
                <div className="pt-1 mt-auto">
                  <span
                    className={`inline-flex items-center gap-1 text-[12px] sm:text-[12.5px] font-bold ${product.accentColor} group-hover:gap-1.5 transition-all`}
                  >
                    <span>Explore Product</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>

              {/* Bottom-Right Floating Circle Arrow Button */}
              <div
                className={`absolute bottom-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-600 ${product.btnHover} group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                aria-hidden="true"
              >
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ProductsSection);
