"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "./AppLink";
import { ArrowRight } from "lucide-react";

// The 3 exact showcase cards matching the reference specification
const SHOWCASE_CARDS = [
  {
    title: "Website Services",
    description:
      "High-performance websites that elevate your brand and drive real results.",
    link: "/service/website-services",
    linkText: "Explore Services",
    image: "/images/card-web-hd.jpg",
  },
  {
    title: "Custom Software",
    description:
      "Tailored software solutions to automate operations and solve complex challenges.",
    link: "/products",
    linkText: "Get Started",
    image: "/images/card-software-dev.jpg",
  },
  {
    title: "AI & ML Consulting",
    description:
      "Use the power of AI, data and automation to unlock new opportunities.",
    link: "/service/ai-ml-consulting",
    linkText: "Explore AI Solutions",
    image: "/images/card-ai-cyber.jpg",
  },
];

function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[600px] sm:min-h-[720px] lg:h-full flex flex-col justify-between pt-24 sm:pt-24 lg:pt-20 pb-6 sm:pb-10 lg:pb-12 overflow-hidden bg-[#F8FCFA]"
      aria-labelledby="hero-heading"
    >
      {/* 2. Full-Width Photographic Background */}
      {/* Clean photographic background allowing the skyline, office, and workspace to remain vibrant */}
      <div
        className="absolute inset-0 z-0 hidden sm:block"
        style={{
          backgroundImage: 'url("/images/hero-tech-office-skyline.png")',
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      {/* Mobile background with gentle ambient light */}
      <div
        className="absolute inset-0 z-0 sm:hidden"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(248, 252, 250, 0.85) 0%,
              rgba(248, 252, 250, 0.65) 50%,
              rgba(248, 252, 250, 0.85) 100%
            ),
            url("/images/hero-tech-office-skyline.png")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* 3. Main Content (Centered on mobile, left-aligned on desktop) */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-4 sm:pt-8 lg:pt-[60px]">
        <div className="relative w-full max-w-[580px] lg:max-w-[620px] text-center sm:text-left mx-auto sm:mx-0">
          {/* Organic Faded Mist Overlay - Applied only to text, seamlessly merging with the image with no shapes or corners */}
          <div
            className="absolute -top-14 -bottom-12 -left-10 sm:-left-16 -right-10 sm:-right-24 pointer-events-none -z-10 blur-xl sm:blur-2xl"
            style={{
              background: `
                radial-gradient(
                  ellipse 82% 76% at 46% 46%,
                  rgba(248, 252, 250, 0.96) 0%,
                  rgba(248, 252, 250, 0.90) 42%,
                  rgba(248, 252, 250, 0.62) 68%,
                  rgba(248, 252, 250, 0.18) 86%,
                  transparent 100%
                )
              `,
            }}
            aria-hidden="true"
          />
          {/* Eyebrow */}
          <div className="mb-3 sm:mb-3.5">
            <span className="inline-block text-[12px] sm:text-[13px] font-bold tracking-[0.16em] text-[#00A86B] uppercase font-sans">
              YOUR TECHNOLOGY PARTNER
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[56px] font-extrabold tracking-tight text-[#102A43] leading-[1.12] mb-3.5 sm:mb-4.5 font-display text-center sm:text-left"
          >
            Intelligent Digital <br />
            Solutions for a <br />
            <span className="text-[#00A86B]">Better Tomorrow.</span>
          </h1>

          {/* High-Contrast Description */}
          <p className="text-slate-700 text-[14px] sm:text-base md:text-[16px] leading-relaxed max-w-[500px] mb-5 sm:mb-7 font-medium text-center sm:text-left mx-auto sm:mx-0">
            At Isarva Infotech, we build scalable software, AI-driven solutions
            and digital platforms that help businesses innovate, streamline
            operations and achieve sustainable growth.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-5 sm:mb-7 max-w-[360px] sm:max-w-none mx-auto sm:mx-0">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#FF6B12] hover:bg-[#e85e0c] text-white font-semibold text-[14px] sm:text-[15px] px-6 sm:px-7 py-3 rounded-xl shadow-[0_4px_14px_rgba(255,107,18,0.3)] hover:shadow-[0_8px_20px_rgba(255,107,18,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              aria-label="Get Started with Isarva"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-[#00A86B] hover:text-[#008f5a] border-2 border-[#00A86B] font-semibold text-[14px] sm:text-[15px] px-5 sm:px-6 py-3 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              aria-label="Explore Our Solutions"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 3 High-Visibility Feature Indicators (Centered on mobile) */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3.5 pt-1">
            {/* Indicator 1 */}
            <div className="inline-flex items-center gap-2 bg-white/95 sm:bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E4EDE7] shadow-[0_2px_6px_rgba(16,42,67,0.04)] text-[#102A43] text-xs sm:text-[13px] font-bold">
              <span className="flex items-center justify-center w-4 h-4 text-[#00A86B]">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="5" r="3" />
                  <circle cx="5" cy="19" r="3" />
                  <circle cx="19" cy="19" r="3" />
                  <path d="M12 8v4" />
                  <path d="M7.5 16.5 10 14" />
                  <path d="m16.5 16.5-2.5-2.5" />
                </svg>
              </span>
              <span>Scalable Solutions</span>
            </div>

            {/* Indicator 2 */}
            <div className="inline-flex items-center gap-2 bg-white/95 sm:bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E4EDE7] shadow-[0_2px_6px_rgba(16,42,67,0.04)] text-[#102A43] text-xs sm:text-[13px] font-bold">
              <span className="flex items-center justify-center w-4 h-4 text-[#00A86B]">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <span>Industry Expertise</span>
            </div>

            {/* Indicator 3 */}
            <div className="inline-flex items-center gap-2 bg-white/95 sm:bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E4EDE7] shadow-[0_2px_6px_rgba(16,42,67,0.04)] text-[#102A43] text-xs sm:text-[13px] font-bold">
              <span className="flex items-center justify-center w-4 h-4 text-[#00A86B]">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-1.3 1.3" />
                  <path d="m13 7.1 2.9-2.9a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4L17 11.1" />
                  <path d="m2 13 4.3 4.3a1 1 0 0 0 1.4 0l3.3-3.3" />
                  <path d="m5 10 2.9-2.9a1 1 0 0 1 1.4 0l1.3 1.3" />
                </svg>
              </span>
              <span>Long-term Partnership</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Three Showcase Cards (max-w-7xl aligned, fully responsive) */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full mt-auto pt-6 lg:pt-8 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {SHOWCASE_CARDS.map((card, idx) => (
            <Link
              key={card.title || idx}
              href={card.link}
              className="group bg-white rounded-[16px] p-4 sm:p-5 shadow-[0_4px_16px_rgba(16,42,67,0.04)] hover:shadow-[0_12px_32px_rgba(16,42,67,0.08)] border border-[#E4EDE7] hover:border-emerald-300 flex items-center gap-3.5 sm:gap-4 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Left Thumbnail Image - Fixed standard dimensions w-24 sm:w-28 h-20 sm:h-24 */}
              <div className="relative w-24 sm:w-28 h-20 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 border border-[#E4EDE7] shadow-xs">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 96px, 112px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-col flex-grow justify-between min-w-0">
                <h3 className="text-[#102A43] font-bold text-sm sm:text-[17px] leading-snug group-hover:text-[#00A86B] transition-colors truncate">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-2 my-1 font-normal">
                  {card.description}
                </p>
                <div className="text-[#00A86B] font-bold text-xs sm:text-[13px] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(HeroSection);
