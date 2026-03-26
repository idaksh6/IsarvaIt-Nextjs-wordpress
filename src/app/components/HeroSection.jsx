"use client";

import { memo } from "react";
import Link from "next/link";
import { Lightbulb, Settings, BarChart3, ChevronRight } from "lucide-react";

// Helper function to strip HTML tags from WYSIWYG content
// Moved outside component to avoid recreation on every render
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
}

// Fallback content used when WordPress is not configured
const DEFAULT_HERO_DATA = {
  stripTag: "🚀 Scalable IT Solutions for Global Enterprises",
  heading:
    'We Build <span style="background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Digital Solutions</span> That Drive Growth',
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

  return (
    <section
      className="relative flex flex-col items-center pt-36 pb-0 overflow-hidden"
      style={{
        backgroundImage: "url('/bg1 new.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-20 text-center hero-content w-full">
        {heroData.stripTag && (
          <div className="inline-flex mb-8">
            <span className="badge">{stripHtml(heroData.stripTag)}</span>
          </div>
        )}
        {heroData.heading && (
          <h1
            className="lg:text-[70px] text-[40px] hero_heading font-bold leading-tight text-gray-900 mb-10 tracking-tighter max-w-6xl mx-auto"
            dangerouslySetInnerHTML={{ __html: heroData.heading }}
          />
        )}

        {/* Subtext */}
        {heroData.description && (
          <div
            className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto mb-16 font-medium leading-relaxed prose prose-slate"
            dangerouslySetInnerHTML={{ __html: heroData.description }}
          />
        )}
        {heroData.hasButton && (
          <div className="relative z-30 mb-8 lg:mb-12">
            <Link
              href={heroData.buttonLink}
              className="press-illusion-btn bg-green-400 text-white w-fit  font-bold px-6 py-2 text-base mx-auto items-center space-x-2 gap-2 inline-flex"
            >
              Get In Touch
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

        {/* Floating Cards - Overlapping Layout */}
        <div className="relative w-full max-w-[1024px] mx-auto  flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 mt-12 lg:flex hidden pb-20 px-4">
          {/* Card 1 - Left */}
          <div className="w-full lg:w-[320px] bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-10 lg:translate-x-4 transition-all duration-300  hover:-translate-y-2 flex flex-col items-center flex-1 lg:flex-none h-full min-h-[380px]">
            <div className="w-20 h-20 bg-[#89c0fe] rounded-full flex items-center justify-center text-white mb-6">
              <Lightbulb size={36} strokeWidth={2} />
            </div>
            <h3 className="text-gray-900 font-bold text-xl mb-4 text-center w-full">
              {heroData.floatingCards && heroData.floatingCards[0]
                ? heroData.floatingCards[0].heading
                : "Website Service"}
            </h3>
            <p className="text-gray-700 text-[13px] leading-relaxed text-center font-bold mb-8 flex-grow w-full">
              {heroData.floatingCards && heroData.floatingCards[0]
                ? heroData.floatingCards[0].description.replace(/<[^>]*>/g, "")
                : "We design and build high-performance website solutions applied basically for speed, scalability, and user experience."}
            </p>
            <Link
              href="/services/website-services"
              className="inline-flex items-center justify-center gap-1 text-black font-semibold text-[13px] border border-green-400 rounded-full px-5 py-2 transition-colors hover:bg-green-400 hover:text-white w-fit mt-auto whitespace-nowrap"
            >
              Learn More <ChevronRight size={14} />
            </Link>
          </div>

          {/* Card 2 - Center (Elevated & Overlapping) */}
          <div className="w-full lg:w-[360px] bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgb(0,0,0,0.15)] z-30 transform lg:rotate-3 lg:-translate-y-0 transition-all duration-500 hover:rotate-0 hover:-translate-y-2 hover:z-40 flex flex-col items-center mx-[-10px] lg:mx-0 flex-1 lg:flex-none relative h-full min-h-[420px]">
            <div className="w-24 h-24 bg-[#7bd29b] rounded-full flex items-center justify-center text-white mb-6 shadow-[0_8px_20px_rgba(123,210,155,0.3)]">
              <Settings size={44} strokeWidth={2} />
            </div>
            <h3 className="text-gray-900 font-bold text-[22px] mb-4 text-center w-full">
              {heroData.floatingCards && heroData.floatingCards[1]
                ? heroData.floatingCards[1].heading
                : "Custom Software"}
            </h3>
            <p className="text-gray-700 text-[14px] leading-relaxed text-center font-bold mb-8 flex-grow w-full">
              {heroData.floatingCards && heroData.floatingCards[1]
                ? heroData.floatingCards[1].description.replace(/<[^>]*>/g, "")
                : "Tailored digital solutions built to solve complex business challenges and support long-term growth."}
            </p>
            <Link
              href="products/woocommerce-development"
              className="inline-flex items-center justify-center gap-1 text-black font-semibold text-[13px] border border-green-400 rounded-full px-5 py-2 transition-colors hover:bg-green-400 hover:text-white w-fit mt-auto whitespace-nowrap"
            >
              Learn More <ChevronRight size={16} />
            </Link>
          </div>

          {/* Card 3 - Right */}
          <div className="w-full lg:w-[320px] bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-20 lg:-translate-x-4 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center flex-1 lg:flex-none h-full min-h-[380px]">
            <div className="w-20 h-20 bg-[#a37eea] rounded-full flex items-center justify-center text-white mb-6">
              <BarChart3 size={36} strokeWidth={2} />
            </div>
            <h3 className="text-gray-900 font-bold text-xl mb-4 text-center w-full">
              {heroData.floatingCards && heroData.floatingCards[2]
                ? heroData.floatingCards[2].heading
                : "E-commerce Solutions"}
            </h3>
            <p className="text-gray-700 text-[13px] leading-relaxed text-center font-bold mb-8 flex-grow w-full">
              {heroData.floatingCards && heroData.floatingCards[2]
                ? heroData.floatingCards[2].description.replace(/<[^>]*>/g, "")
                : "Launch powerful online stores with secure payments, optimized performance, and conversion-focused design."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1 text-black font-semibold text-[13px] border border-green-400 rounded-full px-5 py-2 transition-colors hover:bg-green-400 hover:text-white w-fit mt-auto whitespace-nowrap"
            >
              Learn More <ChevronRight size={14} />
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
