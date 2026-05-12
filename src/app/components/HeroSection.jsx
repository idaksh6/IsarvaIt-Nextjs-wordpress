"use client";

import { memo } from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronRight } from "lucide-react";

// Helper function to strip HTML tags from WYSIWYG content
// Moved outside component to avoid recreation on every render
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
}

// Fallback content used when WordPress is not configured
const DEFAULT_HERO_DATA = {
  stripTag: "🚀 Your Trusted Partner for Scalable IT & AI Solutions",
  heading:
    'Your Trusted Partner<br />for Scalable <span style="color: #2bc735;">IT & AI Business Solution</span>',
  description:
    "<p>Your trusted technology partner for end-to-end digital transformation. From custom software to enterprise platforms — we help businesses innovate, scale, and succeed.</p>",
  backgroundImage: null,
  hasButton: true,
  buttonText: "Start Your Project →",
  buttonLink: "/contact",
  buttonTarget: "_self",
  floatingCards: [
    {
      heading: "Web Platforms",
      description:
        "We design and build high-performance website solutions applied basically for speed, scalability, and user experience.",
    },
    {
      heading: "Custom Software",
      description:
        "Tailored digital solutions built to solve complex business challenges and support long-term growth.",
    },
    {
      heading: "E-commerce Solutions",
      description:
        "Launch powerful online stores with secure payments, optimized performance, and conversion-focused design.",
    },
  ],
};

function HeroSection({ data }) {
  // Use fallback data when WordPress is not configured
  const heroData = data || DEFAULT_HERO_DATA;

  // High-priority brand override for IT & AI strategic update
  const displayHeading = 'Your Trusted Partner<br />for Scalable <span style="color: #2bc735;">IT & AI Business Solution</span>';

  return (
    <section
      className="relative flex flex-col items-center pt-36 pb-0 overflow-hidden"
      aria-labelledby="hero-heading"
      style={{
        backgroundImage: "url('/bg1 new.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Load Lordicon Script for Animated GIF-type Icons */}
      <Script
        src="https://cdn.lordicon.com/lordicon.js"
        strategy="lazyOnload"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-20 text-center hero-content w-full">
        {heroData.stripTag && (
          <div className="inline-flex mb-8">
            <span className="badge">{stripHtml(heroData.stripTag)}</span>
          </div>
        )}
        {heroData.heading && (
          <h1
            id="hero-heading"
            className="text-[clamp(2.25rem,5vw,3.75rem)] hero_heading font-bold leading-[1] text-gray-900 mb-10 tracking-tighter max-w-6xl mx-auto"
            dangerouslySetInnerHTML={{ __html: displayHeading }}
          />
        )}

        {/* Subtext */}
        {heroData.description && (
          <div
            className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto mb-10 lg:mb-16 font-medium leading-relaxed prose prose-slate"
            dangerouslySetInnerHTML={{ __html: heroData.description }}
          />
        )}

        {/* Floating Cards - Overlapping Layout */}
        <div className="relative w-full max-w-[1024px] mx-auto  flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 mt-12 lg:flex hidden pb-20 px-4">
          {/* Card 1 - Left */}
          <div className="w-full lg:w-[320px] bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-10 lg:translate-x-4 transition-all duration-300  hover:-translate-y-2 flex flex-col items-center flex-1 lg:flex-none h-full min-h-[380px]">
            <div className="w-20 h-20 bg-[#89c0fe] rounded-full flex items-center justify-center text-white mb-6">
              <lord-icon
                src="https://cdn.lordicon.com/qhgmphtg.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "48px", height: "48px" }}
              ></lord-icon>
            </div>
            <h3 className="text-gray-900 font-bold text-xl mb-4 text-center w-full">
              {heroData.floatingCards && heroData.floatingCards[0]
                ? heroData.floatingCards[0].heading
                : "Website Services"}
            </h3>
            <p className="text-gray-700 text-[13px] leading-relaxed text-center font-bold mb-8 flex-grow w-full">
              {heroData.floatingCards && heroData.floatingCards[0]
                ? heroData.floatingCards[0].description.replace(/<[^>]*>/g, "")
                : "We design and build high-performance website solutions applied basically for speed, scalability, and user experience."}
            </p>
            <Link
              href="/service/website-services"
              className="inline-flex items-center justify-center gap-1 text-black font-semibold text-[13px] border border-orange-500 rounded-full px-5 py-2 transition-colors hover:bg-orange-500 hover:text-white w-fit mt-auto whitespace-nowrap"
              aria-label={`Learn more about ${heroData.floatingCards && heroData.floatingCards[0] ? heroData.floatingCards[0].heading : "Website Services"}`}
            >
              Explore {heroData.floatingCards && heroData.floatingCards[0] ? heroData.floatingCards[0].heading : "Web Services"} <ChevronRight size={14} />
            </Link>
          </div>

          {/* Card 2 - Center (Elevated & Overlapping) */}
          <div className="w-full lg:w-[360px] bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgb(0,0,0,0.15)] z-30 transform lg:rotate-3 lg:-translate-y-0 transition-all duration-500 hover:rotate-0 hover:-translate-y-2 hover:z-40 flex flex-col items-center mx-[-10px] lg:mx-0 flex-1 lg:flex-none relative h-full min-h-[420px]">
            <div className="w-24 h-24 bg-[#7bd29b] rounded-full flex items-center justify-center text-white mb-6 shadow-[0_8px_20px_rgba(123,210,155,0.3)]">
              <lord-icon
                src="https://cdn.lordicon.com/unukghxb.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "56px", height: "56px" }}
              ></lord-icon>
            </div>
            <h3 className="text-gray-900 font-bold text-[22px] mb-4 text-center w-full">
              {heroData.floatingCards && heroData.floatingCards[1]
                ? heroData.floatingCards[1].heading
                : "AI & ML Consulting"}
            </h3>
            <p className="text-gray-700 text-[14px] leading-relaxed text-center font-bold mb-8 flex-grow w-full">
              {heroData.floatingCards && heroData.floatingCards[1]
                ? heroData.floatingCards[1].description.replace(/<[^>]*>/g, "")
                : "We design and build scalable AI solutions optimized for speed, intelligence, and a superior user experience."}
            </p>
            <Link
              href="/service/ai-ml-consulting"
              className="inline-flex items-center justify-center gap-1 text-black font-semibold text-[13px] border border-orange-500 rounded-full px-5 py-2 transition-colors hover:bg-orange-500 hover:text-white w-fit mt-auto whitespace-nowrap"
              aria-label={`Learn more about ${heroData.floatingCards && heroData.floatingCards[1] ? heroData.floatingCards[1].heading : "AI & ML Consulting"}`}
            >
              Explore {heroData.floatingCards && heroData.floatingCards[1] ? heroData.floatingCards[1].heading : "AI Solutions"}   <ChevronRight size={16} />
            </Link>
          </div>

          {/* Card 3 - Right */}
          <div className="w-full lg:w-[320px] bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-20 lg:-translate-x-4 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center flex-1 lg:flex-none h-full min-h-[380px]">
            <div className="w-20 h-20 bg-[#a37eea] rounded-full flex items-center justify-center text-white mb-6">
              <lord-icon
                src="https://cdn.lordicon.com/cllunfud.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "48px", height: "48px" }}
              ></lord-icon>
            </div>
            <h3 className="text-gray-900 font-bold text-xl mb-4 text-center w-full">
              {heroData.floatingCards && heroData.floatingCards[2]
                ? heroData.floatingCards[2].heading
                : "Custom Software"}
            </h3>
            <p className="text-gray-700 text-[13px] leading-relaxed text-center font-bold mb-8 flex-grow w-full">
              {heroData.floatingCards && heroData.floatingCards[2]
                ? heroData.floatingCards[2].description.replace(/<[^>]*>/g, "")
                : "Tailored digital solutions built to solve complex business challenges and support long-term growth."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1 text-black font-semibold text-[13px] border border-orange-500 rounded-full px-5 py-2 transition-colors hover:bg-orange-500 hover:text-white w-fit mt-auto whitespace-nowrap"
              aria-label={`Learn more about ${heroData.floatingCards && heroData.floatingCards[2] ? heroData.floatingCards[2].heading : "Custom Software"}`}
            >
              Get Started Today <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Memoize component to prevent unnecessary re-renders
// Only re-render if data prop changes
export default memo(HeroSection, (prevProps, nextProps) => {
  // Custom comparison: only re-render if data actually changed
  return JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data);
});

