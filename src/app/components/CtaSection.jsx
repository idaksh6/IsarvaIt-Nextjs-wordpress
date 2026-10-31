"use client";

import { useState, memo } from "react";
import { motion } from "framer-motion";
import ContactFormModal from "./ContactFormModal";
import Link from "./AppLink";

function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="cta"
        className="py-10 sm:py-20 lg:py-24 bg-white relative overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-[#EFFBF5] via-[#F8FCFA] to-[#E6F7ED] rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-[#DCFCE7] shadow-[0_12px_45px_rgba(0,168,107,0.06)] overflow-hidden px-4 sm:px-10 lg:px-14 py-7 sm:py-10 lg:py-14"
          >
            {/* Top-Left Decorative Dots (SVG) */}
            <div className="absolute top-7 left-8 pointer-events-none opacity-60 hidden sm:block select-none">
              <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
                <pattern id="cta-dot-grid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#86EFAC" />
                </pattern>
                <rect width="60" height="70" fill="url(#cta-dot-grid)" />
              </svg>
            </div>

            {/* Left Pure Vector Handwritten Doodle: "Let's Build Something Great Together" with Arrow */}
            <div className="absolute left-14 lg:left-20 xl:left-28 2xl:left-32 bottom-8 lg:bottom-10 w-36 lg:w-44 pointer-events-none hidden xl:block select-none">
              <svg viewBox="0 0 160 90" fill="none" className="w-full h-auto">
                <text x="8" y="22" transform="rotate(-9 8 22)" fill="#059669" fontFamily="cursive, sans-serif" fontWeight="700" fontSize="13.5" letterSpacing="0.2px">Let&apos;s Build</text>
                <text x="12" y="42" transform="rotate(-9 12 42)" fill="#059669" fontFamily="cursive, sans-serif" fontWeight="700" fontSize="13.5" letterSpacing="0.2px">Something Great</text>
                <text x="20" y="62" transform="rotate(-9 20 62)" fill="#059669" fontFamily="cursive, sans-serif" fontWeight="700" fontSize="13.5" letterSpacing="0.2px">Together</text>
                <path d="M 80 56 C 92 68, 116 72, 136 64" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                <path d="M 128 58 L 137 63 L 132 72" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            {/* Right Side: Generated High-Res Laptop Dashboard & Workspace Mockup */}
            <div
              className="absolute right-[-10px] lg:right-[-15px] xl:right-0 top-0 bottom-0 w-[310px] lg:w-[350px] xl:w-[410px] pointer-events-none hidden lg:block select-none overflow-hidden"
              style={{
                maskImage: "linear-gradient(to right, transparent 11%, black 20%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 11%, black 20%)",
              }}
            >
              <img
                src="/images/cta-laptop-dashboard.jpg"
                alt="ISARVA Enterprise Analytics Dashboard"
                className="h-full w-full object-cover object-right"
              />
            </div>

            {/* Center Content Container: Real HTML Text, Headings, Features, Button */}
            <div className="relative z-10 max-w-[540px] mx-auto lg:mr-auto lg:ml-12 xl:mx-auto text-center flex flex-col items-center">
              {/* Badge: [ ✈ GET IN TOUCH ] */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/95 border border-emerald-200 text-[#00A86B] text-[11px] font-bold tracking-[0.14em] uppercase mb-4 shadow-xs">
                <svg
                  className="w-3.5 h-3.5 text-[#00A86B]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                <span>GET IN TOUCH</span>
              </div>

              {/* Main Heading */}
              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#102A43] tracking-tight leading-[1.15] mb-3"
              >
                Ready To Get <span className="text-[#00A86B]">Started?</span>
              </h2>

              {/* Subtitle 1 */}
              <p className="text-base sm:text-[17px] font-semibold text-[#1F2937] mb-2">
                Let&apos;s discuss your project and turn your ideas into reality.
              </p>

              {/* Subtitle 2 */}
              <p className="text-xs sm:text-[13.5px] text-[#4B5563] max-w-lg mx-auto leading-relaxed mb-8">
                Whether you need a website, custom software, or a complete digital solution, our team is here to help you at every step.
              </p>

              {/* 4 Features Grid: Clean 2x2 cards on mobile, seamless horizontal row with dividers on desktop */}
              <div className="w-full max-w-lg mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-0 sm:divide-x divide-gray-200/90 mb-7 sm:mb-8 py-1">
                {/* 1. Quick Response */}
                <div className="p-2 sm:px-2 sm:py-2 flex flex-col items-center text-center bg-white/70 sm:bg-transparent rounded-2xl sm:rounded-none border border-emerald-100/70 sm:border-0 shadow-xs sm:shadow-none">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ECFDF5] border border-emerald-100 flex items-center justify-center text-[#059669] mb-1.5 sm:mb-2 shadow-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 className="text-[11.5px] sm:text-[12.5px] font-bold text-[#102A43] leading-snug">Fast & Reliable Response</h4>
                  <p className="text-[9.5px] sm:text-[10.5px] text-[#6B7280] leading-tight mt-0.5"> Within 24 hours</p>
                </div>

                {/* 2. Expert Consultation */}
                <div className="p-2 sm:px-2 sm:py-2 flex flex-col items-center text-center bg-white/70 sm:bg-transparent rounded-2xl sm:rounded-none border border-emerald-100/70 sm:border-0 shadow-xs sm:shadow-none">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ECFDF5] border border-emerald-100 flex items-center justify-center text-[#059669] mb-1.5 sm:mb-2 shadow-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-[11.5px] sm:text-[12.5px] font-bold text-[#102A43] leading-snug">Expert Consultation</h4>
                  <p className="text-[9.5px] sm:text-[10.5px] text-[#6B7280] leading-tight mt-0.5">Tailored to your needs</p>
                </div>

                {/* 3. Flexible Engagement */}
                <div className="p-2 sm:px-2 sm:py-2 flex flex-col items-center text-center bg-white/70 sm:bg-transparent rounded-2xl sm:rounded-none border border-emerald-100/70 sm:border-0 shadow-xs sm:shadow-none">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ECFDF5] border border-emerald-100 flex items-center justify-center text-[#059669] mb-1.5 sm:mb-2 shadow-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-[11.5px] sm:text-[12.5px] font-bold text-[#102A43] leading-snug">Flexible Engagement</h4>
                  <p className="text-[9.5px] sm:text-[10.5px] text-[#6B7280] leading-tight mt-0.5">Project or long-term</p>
                </div>

                {/* 4. Confidential & Secure */}
                <div className="p-2 sm:px-2 sm:py-2 flex flex-col items-center text-center bg-white/70 sm:bg-transparent rounded-2xl sm:rounded-none border border-emerald-100/70 sm:border-0 shadow-xs sm:shadow-none">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ECFDF5] border border-emerald-100 flex items-center justify-center text-[#059669] mb-1.5 sm:mb-2 shadow-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-[11.5px] sm:text-[12.5px] font-bold text-[#102A43] leading-snug break-words">Confidential &amp; Secure</h4>
                  <p className="text-[9.5px] sm:text-[10.5px] text-[#6B7280] leading-tight mt-0.5">Your ideas are safe</p>
                </div>
              </div>

              {/* Primary Action Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B12] hover:bg-[#e85e0c] text-white font-bold text-sm sm:text-[15px] px-8 py-3.5 rounded-xl shadow-[0_6px_20px_rgba(255,107,18,0.35)] hover:shadow-[0_10px_26px_rgba(255,107,18,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
                aria-label="Get In Touch with ISARVA"
              >
                <span>Get In Touch</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default memo(CtaSection);
