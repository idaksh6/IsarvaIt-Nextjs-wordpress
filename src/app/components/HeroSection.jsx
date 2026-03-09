"use client";

import { useRef, memo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
};

function HeroSection({ data }) {
  const container = useRef(null);

  // Use fallback data when WordPress is not configured
  const heroData = data || DEFAULT_HERO_DATA;

  useGSAP(
    () => {
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });

      gsap.from(".floating-card", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        stagger: 0.2,
        ease: "elastic.out(1, 0.75)",
      });

      // Floating animation
      gsap.to(".floating-card", {
        y: "+=15",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          repeat: -1,
          yoyo: true,
        },
      });

      // Animate the new SVG architecture
      gsap.from(".hero-architecture-img", {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        delay: 0.8,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-[100vh] flex flex-col items-center pt-32 pb-0 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none translate-z-0">
        {/* 1. Base Grid Layer (Softer Checkboxes) */}
        <div className="absolute inset-0 bg-checkbox-grid opacity-[0.35] mask-hero-fade"></div>
        <div className="absolute inset-0 bg-dots opacity-[0.20] mask-hero-fade"></div>

        {/* 2. Glass Depth Blur (The "Screenblur" effect) */}
        <div className="absolute inset-0 backdrop-blur-[1px] opacity-30"></div>

        {/* 3. The "Brand Aura" / Glow Mask (Bron Shaddy Musk) */}
        <div className="top-glow"></div>

        {/* 4. Bottom Transition Shadow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/95 z-[2]"></div>

        {/* 5. The "Shaky" Screen Texture (High Fidelity Noise) */}
        <div className="hero-noise-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 text-center hero-content">
        {heroData.stripTag && (
          <div className="inline-flex mb-12">
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
            className="text-gray-600 text-lg md:text-2xl max-w-4xl mx-auto mb-16 font-medium leading-relaxed prose prose-slate"
            dangerouslySetInnerHTML={{ __html: heroData.description }}
          />
        )}
        {heroData.hasButton && (
          <div className="relative z-30 mb-20">
            <Link
              href={heroData.buttonLink}
              className="press-illusion-btn bg-green-400 text-black w-fit  font-bold px-6 py-2 text-base mx-auto items-center space-x-2 gap-2 inline-flex"
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
        {/* Floating Cards Mockup */}
        <div className="-mt-40 relative h-[600px] w-full max-w-6xl mx-auto hidden lg:block">
          {/* Web Platforms Card */}
          <div className="floating-card absolute left-[-150px] top-0 w-80 glass-card p-8 rounded-[2.5rem] border border-gray-100 text-left shadow-2xl z-10">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner ring-1 ring-gray-100">
              🌐
            </div>
            <h3 className="text-gray-900 font-bold text-xl mb-4 flex items-center justify-between">
              Web Platforms{" "}
            </h3>
            <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
              We design and build high-performance website solutions applied
              basically for speed, scalability, and user experience.
            </p>
          </div>

          {/* Custom Software Card */}
          <div className="floating-card absolute right-[-150px] top-0 w-80 glass-card p-8 rounded-[2.5rem] border border-gray-100 text-left shadow-2xl z-10">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner ring-1 ring-gray-100">
              💻
            </div>
            <h3 className="text-gray-900 font-bold text-xl mb-4 flex items-center justify-between">
              Custom Software{" "}
            </h3>
            <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
              Tailored digital solutions built to solve complex business
              challenges and support long-term growth.
            </p>
          </div>

          {/* E-commerce Solutions Card (Center Bottom) */}
          <div className="floating-card absolute left-1/2 -translate-x-1/2 bottom-[150px] w-96 glass-card p-10 rounded-[3rem] border border-gray-100 text-left shadow-2xl z-20">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-[#10b981]/10 rounded-[1.5rem] flex items-center justify-center text-4xl text-[#10b981] shadow-glow ring-1 ring-[#10b981]/20">
                💰
              </div>
              <h3 className="text-gray-900 font-bold text-2xl">
                E-commerce Solutions
              </h3>
            </div>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 font-bold">
              Launch powerful online stores with secure payments, optimized
              performance, and conversion-focused design.
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
