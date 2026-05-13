"use client";
// Fixed: Removed momentumRef references

import { useRef, memo, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const defaultTestimonials = [
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
];

function TestimonialsSection({ data }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const testimonials = data?.testimonials || defaultTestimonials;
  const sectionTitle = data?.title || "What Our Clients Say";
  const sectionSub =
    data?.subtitle || "Trusted by industry leaders across the globe";

  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const dragX = useMotionValue(0);

  // Calculate constraints based on track width vs container width
  useLayoutEffect(() => {
    const updateConstraints = () => {
      if (trackRef.current && sectionRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const containerWidth = sectionRef.current.offsetWidth;
        setDragConstraints({
          left: -(trackWidth - containerWidth + 100), // Buffer for padding
          right: 0,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, [testimonials]);

  // ── GSAP scroll-driven ───────────────────────────────────────────────────────
  useGSAP(
    () => {
      // Header entrance
      gsap.from(".ts-label, .ts-title, .ts-sub, .ts-hint", {
        scrollTrigger: { trigger: ".ts-header", start: "top 88%" },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Cards fade-in only — no y offset so cards never appear displaced
      gsap.from(".ts-card", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        opacity: 0,
        duration: 1.1,
        stagger: 0.07,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative lg:py-16 py-10 overflow-hidden"
      style={{
        background: "#f8f9eb",
      }}
    >
      {/* ── Soft decorative blobs ── */}
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
              "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
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
              "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "45%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
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
              background: "linear-gradient(90deg,transparent,#6366f1)",
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "#3b8d4d",
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
              background: "linear-gradient(90deg,#6366f1,transparent)",
            }}
          />
        </div>

        <h2
          className="ts-title text-5xl md:text-6xl font-extrabold mb-5 tracking-tight"
          style={{
            background:
              "linear-gradient(135deg, #1e1b4b 0%, #1e1b4b 50%, #1e1b4b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {sectionTitle}
        </h2>

        <p className="ts-sub text-gray-500 text-lg max-w-xl mx-auto font-medium leading-relaxed">
          {sectionSub}
        </p>
      </div>

      {/* ── Row wrapper with edge fades ── */}
      <div className="relative z-10">
        {/* Left fade - hide on mobile */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 120,
            zIndex: 20,
            pointerEvents: "none",
            background: "linear-gradient(90deg, #f0f4ff 0%, transparent 100%)",
          }}
        />
        {/* Right fade - hide on mobile */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 120,
            zIndex: 20,
            pointerEvents: "none",
            background: "linear-gradient(270deg, #f0f4ff 0%, transparent 100%)",
          }}
        />

        {/* ── The draggable track ── */}
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.06} // Clean edge feel
          dragMomentum={true} // High quality momentum physics
          style={{ x: dragX }}
          className="flex gap-7 px-6 md:px-20 cursor-grab active:cursor-grabbing"
        >
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="ts-card flex-shrink-0 select-none snap-center"
              style={{
                width: "calc(100vw - 4rem)", // Slightly more padding for mobile
                maxWidth: 380, // Max width on desktop
                background: "#ffffff",
                borderRadius: 28,
                padding: "36px 36px 32px",
                boxShadow:
                  "0 4px 24px rgba(79,70,229,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                border: "1px solid rgba(99,102,241,0.1)",
                transition:
                  "box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow =
                  "0 12px 40px rgba(79,70,229,0.14), 0 4px 12px rgba(0,0,0,0.05)";
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = "rgba(99,102,241,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow =
                  "0 4px 24px rgba(79,70,229,0.07), 0 1px 4px rgba(0,0,0,0.04)";
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(99,102,241,0.1)";
              }}
            >
              {/* Decorative corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 100,
                  height: 100,
                  background:
                    "linear-gradient(225deg, rgba(99,102,241,0.06) 0%, transparent 65%)",
                  borderRadius: "0 28px 0 100%",
                  pointerEvents: "none",
                }}
              />

              {/* Big decorative quote */}
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: 28,
                  fontSize: 70,
                  lineHeight: 1,
                  fontFamily: "Georgia, serif",
                  color: "rgba(99,102,241,0.09)",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                "
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    style={{ width: 16, height: 16 }}
                    viewBox="0 0 20 20"
                    fill={i < t.rating ? "#f59e0b" : "#e5e7eb"}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial text */}
              <p className=""
                style={{
                  color: "#374151",
                  fontSize: 15,
                  lineHeight: 1.75,
                  fontWeight: 500,
                  marginBottom: 28,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                "{t.text}"
              </p>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  marginBottom: 24,
                  background:
                    "linear-gradient(90deg, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0.03) 80%, transparent 100%)",
                }}
              />

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 16,
                    flexShrink: 0,
                    background: t.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#fff",
                    boxShadow: `0 6px 20px rgba(0,0,0,0.12)`,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      color: "#111827",
                      fontWeight: 700,
                      fontSize: 14,
                      marginBottom: 2,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{ color: "#9ca3af", fontSize: 12, fontWeight: 500 }}
                  >
                    {t.role} &middot; {t.company}
                  </p>
                </div>
                {/* Verified badge */}
                <div style={{ marginLeft: "auto" }}>
                  <svg
                    style={{ width: 22, height: 22 }}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="rgba(99,102,241,0.1)"
                    />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="#6366f1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);
