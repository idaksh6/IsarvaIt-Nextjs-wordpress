"use client";

import { memo } from "react";
import { Trophy, Code2, Clock, Headset } from "lucide-react";

const WHY_CHOOSE_ITEMS = [
  {
    id: "proven-expertise",
    title: "Proven Expertise",
    description: "15+ years of experience in delivering successful projects.",
    Icon: Trophy,
  },
  {
    id: "cutting-edge-tech",
    title: "Cutting-Edge Tech",
    description: "Latest technologies for scalable and future-ready solutions.",
    Icon: Code2,
  },
  {
    id: "on-time-delivery",
    title: "On-Time Delivery",
    description: "Committed to timelines and transparent communication.",
    Icon: Clock,
  },
  {
    id: "dedicated-support",
    title: "Dedicated Support",
    description: "Ongoing support to ensure your long-term success.",
    Icon: Headset,
  },
];

function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="relative py-10 sm:py-20 lg:py-24 bg-[#F5FBF7] bg-[linear-gradient(180deg,#F8FCFA_0%,#F5FBF7_160px,#F5FBF7_100%)] overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      {/* 1. Subtle High-Tech Accents behind content */}
      <div className="absolute top-0 right-0 w-[550px] lg:w-[700px] h-full pointer-events-none select-none overflow-hidden z-0 opacity-40">
        <svg
          viewBox="0 0 700 600"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M320 0L700 0L700 320L540 420L360 220L320 0Z"
            fill="rgba(0, 168, 107, 0.04)"
          />
          <path
            d="M360 20L470 20L550 85L660 85"
            stroke="#00A86B"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            className="opacity-50"
          />
          <circle cx="470" cy="20" r="4" fill="#00A86B" />
          <circle cx="550" cy="85" r="3.5" fill="#00A86B" />
          <circle
            cx="660"
            cy="85"
            r="5"
            stroke="#00A86B"
            strokeWidth="2"
            fill="#EAF8F0"
          />
        </svg>
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header (Centered on mobile, left-aligned on sm+) */}
        <div className="max-w-3xl mb-[30px] sm:mb-[30px] flex flex-col items-center sm:items-start text-center sm:text-left mx-auto sm:mx-0">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-emerald-200/80 text-[#00A86B] text-xs font-bold tracking-[0.16em] uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
            <span>WHY CHOOSE US</span>
          </div>

          {/* Main Heading: 2 distinct lines on tablet & desktop matching image */}
          <h2
            id="why-choose-us-heading"
            className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#102A43] tracking-tight leading-[1.28] sm:leading-[1.32] lg:leading-[1.36] mb-4 text-center sm:text-left"
          >
            Your Trusted
            <br className="hidden sm:inline" />
            {" "}
            <span className="text-[#00A86B]">Technology Partner</span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed font-normal max-w-2xl text-center sm:text-left mx-auto sm:mx-0">
            We combine deep technical expertise with a client-first approach to
            deliver solutions that create real business value.
          </p>
        </div>

        {/* 3. 4-Column Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl border border-[#E4EDE7] p-7 sm:p-7 flex flex-col items-center sm:items-start text-center sm:text-left justify-start shadow-[0_4px_16px_rgba(16,42,67,0.03)] hover:shadow-[0_16px_32px_rgba(16,42,67,0.08)] hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              {/* Circular Icon Badge */}
              <div className="w-14 h-14 rounded-full bg-[#EAF8F0] border border-[#d2f3e3] flex items-center justify-center mb-5 text-[#00A86B] group-hover:scale-105 group-hover:bg-[#dff5ea] transition-all duration-300">
                <item.Icon className="w-6 h-6 stroke-[2.2]" />
              </div>

              {/* Card Title */}
              <h3 className="text-lg sm:text-[19px] font-bold text-[#102A43] mb-2.5 tracking-tight group-hover:text-[#00A86B] transition-colors duration-200 text-center sm:text-left">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-slate-600 text-sm sm:text-[14px] leading-relaxed font-normal text-center sm:text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(WhyChooseUsSection);
