"use client";

import { memo } from "react";

const DEFAULT_BRANDS = [
  { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: ".NET", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
  { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "Sitecore", icon: "https://cdn.simpleicons.org/sitecore/EA3D2F" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Statamic", icon: "https://cdn.simpleicons.org/statamic/FF269E" },
  { name: "Fastify", icon: "https://cdn.simpleicons.org/fastify/000000" },
];

function ClientsSection({ data }) {
  const techStackImages = data?.images || [];
  const wpBrands = techStackImages
    .map((image) => ({
      name: image.title || image.alt,
      icon: image.url,
    }))
    .filter((b) => b.icon);

  const displayBrands = wpBrands.length > 0 ? wpBrands : DEFAULT_BRANDS;

  // Repeat brands 3 times to guarantee a 100% seamless, infinite continuous loop across all resolutions
  const loopedBrands = [...displayBrands, ...displayBrands, ...displayBrands];

  return (
    <section
      id="tech-stack"
      className="py-8 sm:py-14 lg:py-20 relative overflow-hidden bg-white"
      aria-label="Technologies and Tech Stack"
    >
      {/* 1. Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-11">
        {/* Eyebrow badge matching overall design system */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF8F0] border border-emerald-200/80 text-[#00A86B] text-xs font-bold tracking-[0.2em] uppercase mb-3 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
          <span>OUR WORK REVOLVES AROUND</span>
        </div>

        {/* Section Heading */}
        <h3 className="text-xl sm:text-2xl lg:text-[28px] font-black text-[#102A43] tracking-tight">
          Modern Frameworks &{" "}
          <span className="text-[#00A86B]">Proven Technologies</span>
        </h3>
      </div>

      {/* 2. Infinite Continuous Marquee Container */}
      <div className="relative w-full overflow-hidden z-10 py-3 sm:py-4">
        {/* Left smooth gradient edge fade to pure white */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 lg:w-56 bg-gradient-to-r from-white via-white/95 to-transparent z-20"
          aria-hidden="true"
        />

        {/* Right smooth gradient edge fade to pure white */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 lg:w-56 bg-gradient-to-l from-white via-white/95 to-transparent z-20"
          aria-hidden="true"
        />

        {/* Continuous Smooth Scrolling Ribbon */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {loopedBrands.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="group flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-[#F8FCFA] hover:bg-white border border-[#E4EDE7] shadow-xs hover:shadow-[0_10px_28px_rgba(16,42,67,0.08)] hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer shrink-0"
              >
                {/* Brand Logo Icon */}
                <div className="w-7 h-7 flex items-center justify-center shrink-0">
                  <img
                    src={brand.icon}
                    alt={brand.name}
                    loading="lazy"
                    className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Brand Name Label */}
                <span className="text-sm font-bold text-[#102A43] tracking-tight whitespace-nowrap group-hover:text-[#00A86B] transition-colors duration-200">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded High-Performance Keyframe Animation */}
      <style jsx>{`
        .marquee-wrapper {
          display: flex;
          overflow: hidden;
          user-select: none;
          padding-top: 10px;
          padding-bottom: 12px;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          width: max-content;
          will-change: transform;
          animation: continuousScroll 38s linear infinite;
          padding: 6px 0;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes continuousScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }

        @media (max-width: 640px) {
          .marquee-track {
            gap: 0.875rem;
            animation-duration: 28s;
          }
        }
      `}</style>
    </section>
  );
}

export default memo(ClientsSection);
