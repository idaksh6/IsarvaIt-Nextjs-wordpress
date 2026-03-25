"use client";

import { memo } from "react";
import Link from "next/link";

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
      description: "We design and build high-performance website solutions applied basically for speed, scalability, and user experience.",
    },
    {
      heading: "Custom Software",
      description: "Tailored digital solutions built to solve complex business challenges and support long-term growth.",
    },
    {
      heading: "E-commerce Solutions",
      description: "Launch powerful online stores with secure payments, optimized performance, and conversion-focused design.",
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
        backgroundRepeat: "no-repeat"
      }}
    >

      <div className="max-w-7xl mx-auto px-6 relative z-20 text-center hero-content">
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
          <div className="relative z-30 mb-20 cards:mb-20 lg:mb-10">
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

        {/* Floating Cards - Absolute Positioning (Above 1250px) */}
        <div className="-mt-40 relative h-[600px] w-full max-w-6xl mx-auto hidden cards:block">
          {/* Web Platforms Card */}
          <div className="floating-card absolute left-[-150px] top-0 w-80 glass-card p-8 min-h-[230px] rounded-[2.5rem] border border-gray-100 text-left shadow-2xl z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex-shrink-0 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner ring-1 ring-gray-100">
                🌐
              </div>
              <h3 className="text-gray-900 font-bold text-xl">
                {heroData.floatingCards && heroData.floatingCards[0] ? heroData.floatingCards[0].heading : "Web Platforms"}
              </h3>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed font-bold">
              {heroData.floatingCards && heroData.floatingCards[0] ? 
                heroData.floatingCards[0].description.replace(/<[^>]*>/g, '') : 
                "We design and build high-performance website solutions applied basically for speed, scalability, and user experience."
              }
            </p>
          </div>

          {/* Custom Software Card */}
          <div className="floating-card absolute right-[-150px] top-0 w-80 glass-card p-8 rounded-[2.5rem] border border-gray-100 text-left shadow-2xl z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex-shrink-0 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner ring-1 ring-gray-100">
                💻
              </div>
              <h3 className="text-gray-900 font-bold text-xl">
                {heroData.floatingCards && heroData.floatingCards[1] ? heroData.floatingCards[1].heading : "Custom Software"}
              </h3>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed font-bold">
              {heroData.floatingCards && heroData.floatingCards[1] ? 
                heroData.floatingCards[1].description.replace(/<[^>]*>/g, '') : 
                "Tailored digital solutions built to solve complex business challenges and support long-term growth."
              }
            </p>
          </div>

          {/* E-commerce Solutions Card (Center Bottom) */}
          <div className="floating-card absolute left-1/2 -translate-x-1/2 bottom-[150px] w-96 glass-card p-10 rounded-[3rem] border border-gray-100 text-left shadow-2xl z-20">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-[#10b981]/10 rounded-[1.5rem] flex items-center justify-center text-4xl text-[#10b981] shadow-glow ring-1 ring-[#10b981]/20">
                💰
              </div>
              <h3 className="text-gray-900 font-bold text-2xl">
                {heroData.floatingCards && heroData.floatingCards[2] ? heroData.floatingCards[2].heading : "E-commerce Solutions"}
              </h3>
            </div>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 font-bold">
              {heroData.floatingCards && heroData.floatingCards[2] ? 
                heroData.floatingCards[2].description.replace(/<[^>]*>/g, '') : 
                "Launch powerful online stores with secure payments, optimized performance, and conversion-focused design."
              }
            </p>
          </div>
        </div>

        {/* Floating Cards - Flex Row Layout (Between 1024px and 1250px) */}
        <div className="hidden lg:flex cards:hidden flex-row gap-6 w-full max-w-6xl mx-auto mb-16 px-6">
          {/* Web Platforms Card */}
          <div className="flex-1 glass-card p-6 rounded-[2rem] border border-gray-100 text-left shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-2xl shadow-inner ring-1 ring-gray-100">
                🌐
              </div>
              <h3 className="text-gray-900 font-bold text-lg">
                {heroData.floatingCards && heroData.floatingCards[0] ? heroData.floatingCards[0].heading : "Web Platforms"}
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              {heroData.floatingCards && heroData.floatingCards[0] ? 
                heroData.floatingCards[0].description.replace(/<[^>]*>/g, '') : 
                "We design and build high-performance website solutions applied basically for speed, scalability, and user experience."
              }
            </p>
          </div>

          {/* Custom Software Card */}
          <div className="flex-1 glass-card p-6 rounded-[2rem] border border-gray-100 text-left shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-2xl shadow-inner ring-1 ring-gray-100">
                💻
              </div>
              <h3 className="text-gray-900 font-bold text-lg">
                {heroData.floatingCards && heroData.floatingCards[1] ? heroData.floatingCards[1].heading : "Custom Software"}
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              {heroData.floatingCards && heroData.floatingCards[1] ? 
                heroData.floatingCards[1].description.replace(/<[^>]*>/g, '') : 
                "Tailored digital solutions built to solve complex business challenges and support long-term growth."
              }
            </p>
          </div>

          {/* E-commerce Solutions Card */}
          <div className="flex-1 glass-card p-6 rounded-[2rem] border border-gray-100 text-left shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#10b981]/10 rounded-xl flex items-center justify-center text-2xl text-[#10b981] shadow-glow ring-1 ring-[#10b981]/20">
                💰
              </div>
              <h3 className="text-gray-900 font-bold text-lg">
                {heroData.floatingCards && heroData.floatingCards[2] ? heroData.floatingCards[2].heading : "E-commerce Solutions"}
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              {heroData.floatingCards && heroData.floatingCards[2] ? 
                heroData.floatingCards[2].description.replace(/<[^>]*>/g, '') : 
                "Launch powerful online stores with secure payments, optimized performance, and conversion-focused design."
              }
            </p>
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
