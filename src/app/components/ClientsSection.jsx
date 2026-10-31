"use client";

import { memo } from "react";

const DEFAULT_BRANDS = [
  { name: "AWS", icon: "/icons/aws.svg" },
  { name: "Cloud", icon: "/icons/cloud.svg" },
  { name: "Google Cloud", icon: "/icons/google-cloud.svg" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: ".NET", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
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

  const displayBrands = wpBrands.length > 0
    ? [
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Cloud", icon: "/icons/cloud.svg" },
      { name: "Google Cloud", icon: "/icons/google-cloud.svg" },
      ...wpBrands.filter((b) => !["AWS", "Cloud", "Google Cloud"].includes(b.name)),
    ]
    : DEFAULT_BRANDS;

  // Repeat brands 3 times to guarantee a 100% seamless, infinite continuous loop across all resolutions
  const loopedBrands = [...displayBrands, ...displayBrands, ...displayBrands];

  return (
    <section
      id="tech-stack"
      className="py-5 sm:py-8 lg:py-10 relative overflow-hidden bg-white"
      aria-label="Technologies and Tech Stack"
    >
      {/* 1. Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-2.5 sm:mb-4">
        {/* Eyebrow badge matching overall design system */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF8F0] border border-emerald-200/80 text-[#00A86B] text-xs font-bold tracking-[0.2em] uppercase mb-2 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
          <span>OUR WORK REVOLVES AROUND</span>
        </div>

        {/* Section Heading */}
        <h3 className="text-xl sm:text-2xl lg:text-[28px] font-black text-[#102A43] tracking-tight mt-[15px] ">
          Modern Frameworks &{" "}
          <span className="text-[#00A86B]">Proven Technologies</span>
        </h3>
      </div>

      {/* 2. Infinite Continuous Marquee Container */}
      <div className="relative w-full overflow-hidden z-10 py-1 sm:py-1.5">
        {/* Left smooth gradient edge fade to pure white */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-14 sm:w-24 lg:w-32 bg-gradient-to-r from-white via-white/95 to-transparent z-20"
          aria-hidden="true"
        />

        {/* Right smooth gradient edge fade to pure white */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-14 sm:w-24 lg:w-32 bg-gradient-to-l from-white via-white/95 to-transparent z-20"
          aria-hidden="true"
        />

        {/* Continuous Smooth Scrolling Ribbon */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {loopedBrands.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="group flex items-center gap-4 px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl bg-[#F8FCFA] hover:bg-white border border-[#E4EDE7] shadow-xs hover:shadow-[0_12px_32px_rgba(16,42,67,0.08)] hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer shrink-0"
              >
                {/* Brand Logo Icon - Enriched and made significantly larger */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
                  <img
                    src={brand.icon}
                    alt={brand.name}
                    loading="eager"
                    className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Brand Name Label - Larger and bolder */}
                <span className="text-base sm:text-lg font-bold text-[#102A43] tracking-tight whitespace-nowrap group-hover:text-[#00A86B] transition-colors duration-200">
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
          padding-top: 4px;
          padding-bottom: 6px;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          width: max-content;
          will-change: transform;
          animation: continuousScroll 42s linear infinite;
          padding: 4px 0;
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
            gap: 1rem;
            animation-duration: 32s;
          }
        }
      `}</style>
    </section>
  );
}

export default memo(ClientsSection);
