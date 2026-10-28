"use client";
// Fixed: Removed momentumRef references

import { useRef, memo, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "./AppLink";
import { motion, useMotionValue } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const defaultTestimonials = [
  {
    id: 11,
    name: "Mr. Jayakar Shettigar",
    role: "Founder & CEO",
    company: "Gurucharan Industries",
    initials: "JS",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    rating: 5,
    text: "The transformation of our digital presence is remarkable. Our new website now matches the precision of the machinery we build. We’ve seen a direct increase in high-quality international inquiries and a much more professional response from global clients.",
  },
  {
    id: 9,
    name: "Prajwal Shetty",
    role: "Secretory",
    company: "Vidvath Education Foundation",
    initials: "PS",
    gradient: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
    rating: 5,
    text: "The redesign has completely transformed our digital presence. We’ve seen a significant increase in online admissions and talent test registrations.",
  },
  {
    id: 1,
    name: "Jagdish Bhat",
    role: "CEO",
    company: "FTR",
    initials: "JB",
    gradient: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
    rating: 5,
    text: "Outstanding experience from start to finish. Exceptional professionalism, attention to detail, and delivered a clean, intuitive design that exceeded our expectations.",
  },
  {
    id: 2,
    name: "David Richards",
    role: "Director",
    company: "Glue Creative Prod. Solutions, UK",
    initials: "DR",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    rating: 5,
    text: "Working with Isarva for over a decade. A valued and trusted partner who consistently goes above and beyond to deliver exceptional results.",
  },
  {
    id: 3,
    name: "Mohithpal Kunder",
    role: "Global Head Bus. Dev",
    company: "Atlaspoint Tech Pvt Ltd",
    initials: "MK",
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 100%)",
    rating: 5,
    text: "Fantastic job bringing our vision to life. They combined creativity with functionality, delivering results that exceeded expectations.",
  },
  {
    id: 4,
    name: "Jitin",
    role: "Owner",
    company: "Highlands Estates",
    initials: "JT",
    gradient: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)",
    rating: 5,
    text: "Exceptional experience from start to finish. Incredibly professional and creative team. The website is visually appealing, user-friendly, and fast.",
  },
  {
    id: 5,
    name: "Chandrabhushan Pandey",
    role: "Director",
    company: "Tentoro Technologies",
    initials: "CP",
    gradient: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
    rating: 5,
    text: "Excellent work on our pitch deck. Quick understanding of requirements and delivered a professional, visually impressive presentation.",
  },
  {
    id: 6,
    name: "George Thomas",
    role: "Owner",
    company: "Beth Lifestyle Private Limited",
    initials: "GT",
    gradient: "linear-gradient(135deg, #164e63 0%, #06b6d4 100%)",
    rating: 5,
    text: "Seamless and insightful experience. They translated our premium brand identity into a sleek, high-performing website with excellent attention to detail.",
  },
  {
    id: 7,
    name: "Dev Prakash",
    role: "Owner",
    company: "Meraki Beach Resort",
    initials: "DP",
    gradient: "linear-gradient(135deg, #9a3412 0%, #f97316 100%)",
    rating: 5,
    text: "Absolute pleasure working with the team. They understood our vision and created a beautiful, functional website that perfectly captures our brand.",
  },
  {
    id: 8,
    name: "Charulata",
    role: "Owner",
    company: "Charus Cuisines",
    initials: "CH",
    gradient: "linear-gradient(135deg, #581c87 0%, #a855f7 100%)",
    rating: 5,
    text: "Captured the essence of our brand perfectly. Clean, inviting website that beautifully showcases our offerings and makes ordering effortless.",
  },
];

function TestimonialsSection({ data }) {
  const sectionRef = useRef(null);
  const testimonials = data?.testimonials || defaultTestimonials;
  const loopedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];
  const sectionTitle = data?.title || "What Our Clients Say";
  const sectionSub =
    data?.subtitle || "Trusted by industry leaders across the globe";

  // ── GSAP scroll-driven ───────────────────────────────────────────────────────
  useGSAP(
    () => {
      // Header entrance
      gsap.from(".ts-label, .ts-title, .ts-sub", {
        scrollTrigger: { trigger: ".ts-header", start: "top 88%" },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Wrapper fade in
      gsap.from(".testimonial-marquee-wrapper", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-8 sm:py-16 lg:py-20 overflow-hidden"
      style={{
        background: "#fff",
      }}
    >
      {/* ── Soft decorative warm blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: "-8%",
            left: "-5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-5%",
            right: "-5%",
            width: 450,
            height: 450,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* ── Section Header ── */}
      <div className="ts-header relative z-10 text-center mb-16 px-6">
        <div className="ts-label inline-flex items-center gap-2 mb-4">
          <span
            style={{
              display: "block",
              height: 1,
              width: 32,
              background: "linear-gradient(90deg,transparent,#00A86B)",
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#00A86B",
              textTransform: "uppercase",
            }}
          >
            Client Testimonials
          </span>
          <span
            style={{
              display: "block",
              height: 1,
              width: 32,
              background: "linear-gradient(90deg,#00A86B,transparent)",
            }}
          />
        </div>

        <h2
          className="ts-title mb-5 text-3xl lg:text-[44px] font-black leading-[1.2] tracking-tight text-[#102A43]"
        >
          {sectionTitle}
        </h2>

        <p className="ts-sub text-slate-600 text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed">
          {sectionSub}
        </p>
      </div>

      {/* ── Row wrapper with edge fades ── */}
      <div className="relative z-10">
        {/* Left fade - clean white to transparent */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 140,
            zIndex: 20,
            pointerEvents: "none",
            background: "linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.85) 40%, transparent 100%)",
          }}
        />
        {/* Right fade - clean white to transparent */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 140,
            zIndex: 20,
            pointerEvents: "none",
            background: "linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0.85) 40%, transparent 100%)",
          }}
        />

        {/* ── Continuous Auto-Sliding Marquee Track (Pauses on Hover) ── */}
        <div className="testimonial-marquee-wrapper">
          <div className="testimonial-marquee-track">
            {loopedTestimonials.map((t, idx) => (
              <article
                key={`${t.id}-${idx}`}
                className="ts-card flex-shrink-0 select-none group"
                style={{
                  width: "calc(100vw - 4rem)",
                  maxWidth: 400,
                  background: "#ffffff",
                  borderRadius: 28,
                  padding: "36px 32px 28px",
                  boxShadow:
                    "0 4px 20px rgba(16,42,67,0.04), 0 1px 3px rgba(0,0,0,0.02)",
                  border: "1px solid #EAEFEA",
                  transition:
                    "box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow =
                    "0 14px 34px rgba(16,42,67,0.08), 0 2px 6px rgba(0,0,0,0.03)";
                  el.style.transform = "translateY(-4px)";
                  el.style.borderColor = "#A7F3D0";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow =
                    "0 4px 20px rgba(16,42,67,0.04), 0 1px 3px rgba(0,0,0,0.02)";
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "#EAEFEA";
                }}
              >
                {/* Subtle pale-mint corner radial glow matching the reference image */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 140,
                    height: 140,
                    background:
                      "radial-gradient(circle at top right, rgba(209, 250, 229, 0.45) 0%, transparent 70%)",
                    borderRadius: "0 28px 0 100%",
                    pointerEvents: "none",
                  }}
                />

                {/* Mint Green Double Quote Icon in top-right matching reference image */}
                <div
                  style={{
                    position: "absolute",
                    top: 26,
                    right: 28,
                    pointerEvents: "none",
                    userSelect: "none",
                    color: "#86EFAC",
                  }}
                >
                  <svg
                    style={{ width: 28, height: 28 }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.17 6.17A4.2 4.2 0 0 0 3 10.37c0 1.96 1.18 3.48 2.8 3.93-.32 1.62-1.3 3.12-2.8 4.2l1.6 1.5c2.6-1.8 4.4-4.5 4.4-7.8 0-.58-.06-1.14-.17-1.68a4.17 4.17 0 0 0-1.66-4.35zm11 0A4.2 4.2 0 0 0 14 10.37c0 1.96 1.18 3.48 2.8 3.93-.32 1.62-1.3 3.12-2.8 4.2l1.6 1.5c2.6-1.8 4.4-4.5 4.4-7.8 0-.58-.06-1.14-.17-1.68a4.17 4.17 0 0 0-1.66-4.35z" />
                  </svg>
                </div>

                {/* 5 Bright Golden/Amber Stars matching reference image */}
                <div style={{ display: "flex", gap: 5, marginBottom: 20 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      style={{ width: 18, height: 18 }}
                      viewBox="0 0 20 20"
                      fill={i < t.rating ? "#F59E0B" : "#E5E7EB"}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Quote Text matching reference image */}
                <p
                  style={{
                    color: "#1E293B",
                    fontSize: 15.5,
                    lineHeight: 1.68,
                    fontWeight: 500,
                    marginBottom: 24,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Footer container pushed to bottom */}
                <div style={{ marginTop: "auto" }}>
                  {/* Subtle Horizontal Divider Line */}
                  <div
                    style={{
                      height: 1,
                      marginBottom: 20,
                      background: "#F1F5F9",
                    }}
                  />

                  {/* Author Info Row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    {/* Rounded Squircle Avatar with bold white initials */}
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 16,
                        flexShrink: 0,
                        background:
                          t.gradient ||
                          "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 15,
                        fontWeight: 800,
                        color: "#ffffff",
                        boxShadow: "0 4px 12px rgba(15,23,42,0.12)",
                      }}
                    >
                      {t.initials}
                    </div>

                    {/* Name and Designation */}
                    <div>
                      <p
                        style={{
                          color: "#0F172A",
                          fontWeight: 700,
                          fontSize: 15,
                          lineHeight: 1.25,
                          marginBottom: 3,
                        }}
                      >
                        {t.name}
                      </p>
                      <p
                        style={{
                          color: "#94A3B8",
                          fontSize: 13,
                          fontWeight: 500,
                          lineHeight: 1.2,
                        }}
                      >
                        {t.role} &middot; {t.company}
                      </p>
                    </div>

                    {/* Verified Checkmark Badge in light indigo circle matching reference */}
                    <div
                      style={{
                        marginLeft: "auto",
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "#EEF2FF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        style={{ width: 13, height: 13 }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#4F46E5"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-marquee-wrapper {
          display: flex;
          overflow: hidden;
          user-select: none;
          padding-top: 10px;
          padding-bottom: 24px;
        }

        .testimonial-marquee-track {
          display: flex;
          gap: 1.75rem;
          width: max-content;
          will-change: transform;
          animation: testimonialMarquee 140s linear infinite;
          padding: 8px 0;
        }

        .testimonial-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes testimonialMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }

        @media (max-width: 768px) {
          .testimonial-marquee-track {
            gap: 1.25rem;
            animation-duration: 110s;
          }
        }
      `}</style>
    </section>
  );
}

export default memo(TestimonialsSection);
