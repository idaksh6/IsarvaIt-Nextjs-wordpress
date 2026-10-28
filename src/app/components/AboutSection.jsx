"use client";

import { memo } from "react";
import Image from "next/image";
import { Users, Layers, Building2, TrendingUp } from "lucide-react";

const ABOUT_STATS = [
  {
    id: "experience",
    number: "15+",
    label: "Years of Experience",
    Icon: Users,
  },
  {
    id: "projects",
    number: "500+",
    label: "Projects Delivered",
    Icon: Layers,
  },
  {
    id: "clients",
    number: "300+",
    label: "Happy Clients",
    Icon: Building2,
  },
  {
    id: "satisfaction",
    number: "99%",
    label: "Client Satisfaction",
    Icon: TrendingUp,
  },
];

function AboutSection() {
  return (
    <section
      id="about-us"
      className="relative py-10 sm:py-20 lg:py-28 bg-[#F5FBF7] bg-[linear-gradient(180deg,#F8FCFA_0%,#F5FBF7_160px,#F5FBF7_100%)] overflow-hidden"
      aria-labelledby="about-us-heading"
    >
      {/* Subtle ambient background soft glow positioned below top boundary */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[460px] h-[460px] bg-emerald-100/25 rounded-full blur-[120px] pointer-events-none select-none z-0" />
      <div className="absolute top-28 right-0 w-[500px] h-[500px] bg-emerald-100/25 rounded-full blur-[130px] pointer-events-none select-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Content + Stats (Columns 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
            {/* Eyebrow Label with Solid Green Dot */}
            <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A86B]" />
              <span className="text-[#00A86B] text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
                ABOUT US
              </span>
            </div>

            {/* Main Headline */}
            <h2
              id="about-us-heading"
              className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#102A43] tracking-tight leading-[1.28] sm:leading-[1.32] lg:leading-[1.36] mb-5 sm:mb-6 text-center sm:text-left"
            >
              Building Technology
              <br />
              <span className="text-[#00A86B]">for a Brighter Tomorrow</span>
            </h2>

            {/* Body Copy */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-[15.5px] leading-relaxed mb-8 sm:mb-10 max-w-2xl font-normal text-center sm:text-left mx-auto sm:mx-0">
              <p>
                ISARVA Infotech is a technology company focused on building
                scalable software solutions and digital platforms that help
                businesses innovate, streamline operations and achieve
                sustainable growth.
              </p>
              <p>
                With a team of experienced professionals, we combine deep
                technical expertise with a client-first approach to deliver
                reliable, future-ready solutions across industries.
              </p>
            </div>

            {/* 4 Stat Cards in a Single Row / Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 w-full">
              {ABOUT_STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="group bg-white rounded-2xl border border-[#E4EDE7] p-4 sm:p-5 flex flex-col items-center sm:items-start text-center sm:text-left justify-between shadow-[0_4px_16px_rgba(16,42,67,0.03)] hover:shadow-[0_12px_28px_rgba(16,42,67,0.07)] hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 ease-out"
                >
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#EAF8F0] border border-[#d2f3e3] flex items-center justify-center text-[#00A86B] mb-3.5 group-hover:scale-105 group-hover:bg-[#dff5ea] transition-all duration-300">
                    <stat.Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Value and Label */}
                  <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-black text-[#102A43] tracking-tight mb-1 group-hover:text-[#00A86B] transition-colors text-center sm:text-left">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-[13px] text-slate-600 font-medium leading-tight text-center sm:text-left">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Office Desk with Laptop & Framing (Columns 8-12) */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-full max-w-[560px] h-[360px] sm:h-[420px] lg:h-[480px] flex items-center justify-center">
              {/* Soft ambient green backlight behind the image */}
              <div className="absolute -top-6 -right-6 w-[360px] h-[360px] bg-emerald-200/35 rounded-full blur-[90px] pointer-events-none select-none z-0" />

              {/* Vector Curved Arc and Glowing Orb matching reference design */}
              <svg
                viewBox="0 0 560 480"
                className="absolute inset-0 w-full h-full pointer-events-none select-none z-20 overflow-visible hidden sm:block"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Secondary faint outer sweep */}
                <path
                  d="M 40 20 C -10 140, -10 320, 60 460"
                  stroke="rgba(0, 168, 107, 0.2)"
                  strokeWidth="1.2"
                />
                {/* Primary green arc */}
                <path
                  d="M 90 30 C 35 150, 45 310, 115 450"
                  stroke="#00A86B"
                  strokeWidth="1.8"
                  strokeDasharray="5 5"
                  className="opacity-80"
                />
                {/* Glowing Green Orb along the upper arc matching reference */}
                <circle
                  cx="54"
                  cy="110"
                  r="18"
                  fill="#00A86B"
                  fillOpacity="0.22"
                  className="animate-pulse"
                />
                <circle cx="54" cy="110" r="7.5" fill="#00A86B" />
                <circle cx="54" cy="110" r="2.5" fill="#ffffff" />
              </svg>

              {/* Framed Image with consistent rounding */}
              <div className="relative w-full h-full rounded-2xl lg:rounded-l-[180px] lg:rounded-r-2xl overflow-hidden shadow-[0_16px_40px_rgba(16,42,67,0.06)] border border-[#E4EDE7] z-10 group bg-white">
                <img
                  src="/images/about-office-laptop-hd.jpg"
                  alt="ISARVA Infotech - Building Technology for a Brighter Tomorrow"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle soft gradient sheen on image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
