"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "./AppLink";
import {
  ArrowRight,
  Users,
  Handshake,
  Headphones,
  Receipt,
  Ship,
  Truck,
  UtensilsCrossed,
  GraduationCap,
} from "lucide-react";

// Exactly 8 products matching the user's requirement
const PRODUCTS = [
  {
    title: "HRMS Software",
    slug: "hrms-software",
    link: "/product/hrms-software",
    description: "Complete HR management solutions for modern workplaces.",
    image: "/images/product-hrms-software-v3.jpg",
    Icon: Users,
    badgeBg: "bg-emerald-50",
    badgeBorder: "border-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "CRM Software",
    slug: "crm-software",
    link: "/product/crm-software",
    description: "Manage leads, customer relationships, and sales efficiently.",
    image: "/images/product-crm-software-v3.jpg",
    Icon: Handshake,
    badgeBg: "bg-blue-50",
    badgeBorder: "border-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Support Software",
    slug: "support-software",
    link: "/product/support-software",
    description: "Streamline customer support and ticket management.",
    image: "/images/product-support-software-v3.jpg",
    Icon: Headphones,
    badgeBg: "bg-purple-50",
    badgeBorder: "border-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "BillSoft Software",
    slug: "bill-soft",
    link: "/product/bill-soft",
    description: "Simplify billing, invoicing, and business transactions.",
    image: "/images/product-bill-soft-v3.jpg",
    Icon: Receipt,
    badgeBg: "bg-amber-50",
    badgeBorder: "border-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Marine Service Software",
    slug: "marine-service-software",
    link: "/product/marine-service-software",
    description: "Manage marine service operations with greater visibility.",
    image: "/images/product-marine-service-software.jpg",
    Icon: Ship,
    badgeBg: "bg-sky-50",
    badgeBorder: "border-sky-100",
    iconColor: "text-sky-600",
  },
  {
    title: "Dispatcher Panel",
    slug: "dispatcher-panel",
    link: "/product/dispatcher-panel",
    description: "Coordinate dispatch operations and fleet management.",
    image: "/images/product-dispatcher-panel.jpg",
    Icon: Truck,
    badgeBg: "bg-orange-50",
    badgeBorder: "border-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Restaurant POS Software",
    slug: "restaurant-pos",
    link: "/product/restaurant-pos",
    description: "Cloud POS, table management, KDS, and VAT billing for restaurants.",
    image: "/images/product-restaurant-pos.jpg",
    Icon: UtensilsCrossed,
    badgeBg: "bg-rose-50",
    badgeBorder: "border-rose-100",
    iconColor: "text-rose-600",
  },
  {
    title: "LMS Software",
    slug: "lms-software",
    link: "/product/lms-software",
    description: "Learning management system for schools, courses, and student portals.",
    image: "/images/product-lms-software.jpg",
    Icon: GraduationCap,
    badgeBg: "bg-indigo-50",
    badgeBorder: "border-indigo-100",
    iconColor: "text-indigo-600",
  },
];

function ProductsSection() {
  return (
    <section
      id="products"
      className="relative py-10 sm:py-20 lg:py-24 bg-white overflow-hidden"
      aria-labelledby="products-heading"
    >
      {/* 2. Main Content Container */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
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

        {/* 3. Product Cards Grid (4 columns desktop = 2 rows of 4, 2 columns tablet, 1 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              href={product.link}
              className="group bg-white rounded-2xl border border-[#E4EDE7] shadow-sm hover:shadow-[0_12px_28px_rgba(16,42,67,0.08)] hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              {/* Product Card Top Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Product Card Body with Overlapping Floating Badge */}
              <div className="relative px-5 pt-7 pb-5 flex flex-col flex-grow">
                {/* Floating Icon Badge overlapping image bottom-left */}
                <div
                  className={`absolute -top-5 left-5 w-11 h-11 rounded-full ${product.badgeBg} border ${product.badgeBorder} shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                >
                  <product.Icon className={`w-5 h-5 ${product.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-slate-900 font-bold text-[16.5px] leading-snug group-hover:text-[#059669] transition-colors mb-1.5">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-2 mb-4 font-normal flex-grow">
                  {product.description}
                </p>

                {/* Action Row */}
                <div className="flex items-center justify-between pt-2 mt-auto">
                  <span className="text-[#059669] font-bold text-xs sm:text-[13px] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    <span>Explore Product</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>

                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 group-hover:border-emerald-600 group-hover:bg-emerald-50 group-hover:text-[#059669] transition-all duration-300 shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ProductsSection);
