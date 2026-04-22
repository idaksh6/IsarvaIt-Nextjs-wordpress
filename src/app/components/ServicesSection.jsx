"use client";

import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

// Server-side safe HTML entity decoder
function decodeHTMLEntities(text) {
  if (!text) return "";
  return text
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

function ServicesSection({ data }) {
  const services = data?.services || [];
  const heading = data?.heading || "";
  const description = data?.description || "";
  const stripData = data?.stripData || "";
  const buttonText = data?.buttonText || "";
  const buttonLink = data?.buttonLink || "";

  return (
    <section
      className="relative py-10 lg:py-16 overflow-hidden bg-gradient-to-b from-[#d4f4dd] via-[#defae4] to-[#f2fff5]"
      style={{
        contain: "layout style paint",
      }}
    >
      {/* Premium Background Layers - Optimized */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
        style={{ transform: "translateZ(0)" }}
      >
        {/* 1. Large Subtle Technical Mesh */}
        <div className="absolute inset-0 bg-mesh-green opacity-40"></div>

        {/* 2. Brand Auras (Glows) - Reduced blur for performance */}
        <div className="services-glow-left"></div>
        <div className="services-glow-right"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/30 blur-[80px] rounded-full"></div>

        {/* 3. The "Shaky" High-Fidelity Noise Texture */}
        <div className="hero-noise-overlay opacity-[0.15]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="services-heading text-center mb-16 lg:mb-20">

          {heading && (
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              {decodeHTMLEntities(heading)}
            </h2>
          )}
          {description && (
            <div
              className="text-lg lg:text-xl text-gray-700 max-w-3xl mb-6 mx-auto prose prose-slate"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          {stripData && (
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-md text-emerald-800 font-semibold text-sm  border border-white/60 shadow-lg">
              <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
              {decodeHTMLEntities(stripData)}
            </div>
          )}
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              className="service-card group relative rounded-3xl p-8 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl bg-white/90 border border-white/60 shadow-lg md:bg-white/40 md:backdrop-blur-md md:shadow-[0_8px_32px_0_rgba(0,255,136,0.15)]"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {/* Glass Effect Inner Glow - Desktop only */}
              <div className="absolute inset-0 rounded-3xl bg-white group-hover:opacity-70 transition-opacity duration-300 hidden md:block"></div>

              {/* Content */}
              <div className="relative flex flex-col md:items-start items-center md:text-left text-center">
                {/* Icon/Image and Title side by side */}
                <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center gap-4 mb-6">
                  {/* Icon/Image - Display featured image or fallback to icon */}
                  <div className="service-icon w-16 h-16 flex-shrink-0 rounded-2xl border border-emerald-300 md:from-emerald-400/60 md:to-green-500/60 md:backdrop-blur-sm md:border-white/50 flex items-center justify-center group-hover:from-emerald-500/70 group-hover:to-green-600/70 transition-all duration-300 shadow-lg overflow-hidden">
                    {service.featuredImage ? (
                      <img
                        src={service.featuredImage}
                        alt={`${service.title} icon`}
                        className="w-full h-full object-contain rounded-xl"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to emoji if image fails to load
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <span
                      className={`text-4xl ${service.featuredImage ? "hidden" : "block"}`}
                      style={{ display: service.featuredImage ? "none" : "flex" }}
                    >
                      {service.icon || "🔧"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                    {decodeHTMLEntities(service.title)}
                  </h3>
                </div>

                {/* Description */}
                <div
                  className="text-gray-700 leading-relaxed prose prose-slate max-w-none mb-4"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />

                {/* Technology Used - Handle both HTML and array formats */}
                {service.technology_used && (
                  <div className="space-y-2.5">
                    {typeof service.technology_used === "string" ? (
                      <div
                        className="prose prose-slate max-w-none [&>ul]:list-none [&>ul]:space-y-2.5 [&>ul>li]:flex [&>ul>li]:items-center [&>ul>li]:gap-2 [&>ul>li]:text-sm [&>ul>li]:text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: service.technology_used.replace(
                            /<li>/g,
                            '<li><svg class="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>',
                          ),
                        }}
                      />
                    ) : Array.isArray(service.technology_used) ? (
                      <ul className="space-y-2.5">
                        {service.technology_used.map((tech, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <svg
                              className="w-4 h-4 text-emerald-600 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                )}

                {/* Fallback to features for default services */}
                {!service.technology_used &&
                  service.features &&
                  service.features.length > 0 && (
                    <ul className="space-y-2.5">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 text-emerald-600 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {buttonText && buttonLink && (
          <div className="text-center mt-16 lg:mt-20">
            <p className="text-gray-700 mb-6 text-lg font-medium">
              Can't find what you're looking for?
            </p>

            <Link
              href={buttonLink}
              target={data?.buttonTarget || ""}
              className="press-illusion-btn bg-orange-500 text-white font-bold px-6 py-2 text-base w-fit mx-auto items-center space-x-2  inline-flex"
            >
              <span>{decodeHTMLEntities(buttonText)}</span>
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
        )}
      </div>
    </section>
  );
}

// Memoize component to prevent unnecessary re-renders
export default memo(ServicesSection, (prevProps, nextProps) => {
  return JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data);
});
