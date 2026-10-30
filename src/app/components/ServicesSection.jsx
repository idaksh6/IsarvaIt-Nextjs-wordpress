"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "./AppLink";
import {
  Globe,
  Code2,
  Bot,
  Wrench,
  Megaphone,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// Curated services: Website Development + requested added services
const SERVICES = [
  {
    id: 1,
    title: "Website Development",
    slug: "website-development",
    link: "/service/website-services",
    description:
      "Custom web applications built with modern technologies for optimal performance, responsiveness, and scalability.",
    features: [
      "Next.js & React Frameworks",
      "PHP & Laravel Development",
      "Custom Enterprise Architecture",
    ],
    image: "/images/service-web-development.jpg",
    Icon: Globe,
    badgeBg: "bg-blue-50",
    badgeBorder: "border-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "WordPress Development",
    slug: "wordpress-development",
    link: "/service/wordpress-development",
    description:
      "Bespoke WordPress theme creation, custom plugins, and enterprise CMS development built for speed and security.",
    features: [
      "Custom Themes & Plugins",
      "WooCommerce Integration",
      "Speed & Security Hardening",
    ],
    image: "/Services/Wordpress-development/Banner-img.jpg",
    Icon: Code2,
    badgeBg: "bg-indigo-50",
    badgeBorder: "border-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    id: 3,
    title: "AI & ML Consulting",
    slug: "ai-ml-consulting",
    link: "/service/ai-ml-consulting",
    description:
      "Cutting-edge artificial intelligence and machine learning solutions to empower automation and business intelligence.",
    features: [
      "AI Strategy & Use Case Audit",
      "Custom ML Model Development",
      "Predictive Analytics & NLP",
    ],
    image: "/Services/Ai consulting/Home-img.jpg",
    Icon: Bot,
    badgeBg: "bg-purple-50",
    badgeBorder: "border-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    title: "Website Maintenance (AMC)",
    slug: "website-maintenance-amc",
    link: "/service/website-maintenance-amc",
    description:
      "Ongoing support and comprehensive annual maintenance to keep your applications secure, fast, and always online.",
    features: [
      "Security Audits & Patch Updates",
      "24/7 Uptime & Speed Monitoring",
      "Priority Bug Fixes & Backups",
    ],
    image: "/images/service-maintenance-support.jpg",
    Icon: Wrench,
    badgeBg: "bg-amber-50",
    badgeBorder: "border-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 5,
    title: "Digital Marketing",
    slug: "digital-marketing",
    link: "/service/digital-marketing",
    description:
      "Results-driven digital marketing strategies that boost online visibility, qualified leads, and measurable ROI.",
    features: [
      "Search Engine Optimization (SEO)",
      "Targeted PPC & Google Ads",
      "Social Media & Content Strategy",
    ],
    image: "/Services/Digital-marketing/Banner-img.jpg",
    Icon: Megaphone,
    badgeBg: "bg-rose-50",
    badgeBorder: "border-rose-100",
    iconColor: "text-rose-600",
  },
  {
    id: 6,
    title: "ERP Services",
    slug: "erp-services",
    link: "/service/erp-services",
    description:
      "Transformative enterprise resource planning solutions tailored to streamline operations, finance, and productivity.",
    features: [
      "Custom ERP Implementation",
      "Finance & Accounts Management",
      "Seamless Workflow Integration",
    ],
    image: "/Services/ERP-services/Banner-img.jpg",
    Icon: Building2,
    badgeBg: "bg-emerald-50",
    badgeBorder: "border-emerald-100",
    iconColor: "text-emerald-600",
  },
];

function ServicesSection({ data }) {
  return (
    <section
      id="services"
      className="relative py-10 sm:py-20 lg:py-24 bg-[#F5FBF7] bg-[linear-gradient(180deg,#F8FCFA_0%,#F5FBF7_160px,#F5FBF7_100%)] overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* 2. Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-emerald-200 text-[#00A86B] text-xs font-bold tracking-[0.15em] uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
            <span>WHAT WE OFFER</span>
          </div>

          {/* Main Heading */}
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#102A43] tracking-tight leading-[1.2] mb-3.5"
          >
            Digital Solutions{" "}
            <span className="text-[#00A86B]">Built for Your Growth</span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            From idea to implementation, we provide end-to-end digital solutions
            to help your business build, scale, and succeed in the modern world.
          </p>
        </div>

        {/* 3. Services Grid (6 cards: 3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={service.link}
              className="group relative bg-white rounded-2xl border border-[#E4EDE7] shadow-sm hover:shadow-[0_16px_36px_rgba(16,42,67,0.08)] hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1.5 p-5 sm:p-6 flex flex-row items-stretch justify-between gap-4 overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              {/* Left Column: Content */}
              <div className="flex-1 flex flex-col justify-between min-w-0 pr-1">
                <div>
                  {/* Icon + Title Header */}
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div
                      className={`w-11 h-11 rounded-full ${service.badgeBg} border ${service.badgeBorder} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105`}
                    >
                      <service.Icon className={`w-5 h-5 ${service.iconColor}`} />
                    </div>
                    <h3 className="text-[#102A43] font-bold text-base sm:text-[17px] leading-snug group-hover:text-[#00A86B] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-3.5 line-clamp-2 font-normal">
                    {service.description}
                  </p>

                  {/* Feature Bullets with Green Checkmarks */}
                  <ul className="space-y-1.5 mb-4">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-slate-700 text-xs sm:text-[12.5px] font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 fill-emerald-50" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-1 mt-auto">
                  <span className="text-[#00A86B] font-bold text-xs sm:text-[13px] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

              {/* Right Column: Rounded Vertical Image Container */}
              <div className="relative w-[115px] sm:w-[130px] md:w-[125px] lg:w-[135px] xl:w-[145px] self-stretch rounded-2xl overflow-hidden shrink-0 bg-slate-100 shadow-inner">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 120px, 150px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Floating White Circular Arrow Button at bottom-right */}
                <div className="absolute bottom-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200/90 flex items-center justify-center text-slate-700 group-hover:border-emerald-500 group-hover:bg-[#00A86B] group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 4. Bottom Action CTA */}
        <div className="mt-12 sm:mt-14 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            <span>Explore More Services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default memo(ServicesSection);
