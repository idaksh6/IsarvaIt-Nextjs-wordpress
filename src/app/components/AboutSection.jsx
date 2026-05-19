"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#f8fffe" }}
    >
      {/* ── Soft gradient mesh background (aurora blobs, no noise) ── */}
      {/* Top-left warm teal blob */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: "-120px",
          left: "-100px",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.13) 0%, rgba(52,211,153,0.06) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Bottom-right lime blob */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          bottom: "-80px",
          right: "-80px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(132,204,22,0.11) 0%, rgba(16,185,129,0.06) 50%, transparent 72%)",
          filter: "blur(55px)",
        }}
      />
      {/* Center subtle sky tint */}
      <div
        className="absolute pointer-events-none z-0 inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(237, 253, 238, 1) 0%, rgba(255,255,255,0.4) 50%, rgba(240,253,244,0.6) 100%)",
        }}
      />
      {/* Soft diagonal lines (CSS only, no SVG, no noise) */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(120deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 60px)",
        }}
      />

      {/* Green accent line at top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full" />

      {/* Two-column layout */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        {/* ── LEFT: Circular image ── */}
        <div className="relative flex-shrink-0 flex items-center justify-center w-72 h-72 lg:w-96 lg:h-96">
          {/* ── Glow layers around the image ── */}
          {/* Outermost large diffused glow — heartbeat outer pulse */}
          <div
            className="absolute rounded-full pointer-events-none glow-pulse-outer"
            style={{
              inset: "-60px",
              background:
                "radial-gradient(circle, rgba(16,185,129,0.22) 0%, rgba(52,211,153,0.10) 50%, transparent 70%)",
              filter: "blur(28px)",
            }}
          />
          {/* Mid glow — double-beat heartbeat */}
          <div
            className="absolute rounded-full pointer-events-none glow-pulse-mid"
            style={{
              inset: "-28px",
              background:
                "radial-gradient(circle, rgba(16,185,129,0.28) 0%, rgba(132,204,22,0.10) 55%, transparent 75%)",
              filter: "blur(16px)",
            }}
          />
          {/* Inner tight glow — fast sharp heartbeat flash */}
          <div
            className="absolute rounded-full pointer-events-none glow-pulse-inner"
            style={{
              inset: "-10px",
              background:
                "radial-gradient(circle, rgba(16,185,129,0.38) 0%, rgba(52,211,153,0.12) 50%, transparent 65%)",
              filter: "blur(8px)",
            }}
          />

          {/* Spinning dashed ring (on top of glow) */}
          <div
            className="absolute inset-[-18px] rounded-full border border-dashed border-emerald-400/40"
            style={{ animation: "spin 30s linear infinite" }}
          />
          {/* Subtle solid ring */}
          <div className="absolute inset-[-6px] rounded-full border border-emerald-400/20" />

          {/* Circle image */}
          <div className="w-full h-full rounded-full overflow-hidden relative shadow-[0_0_0_6px_white,0_25px_60px_rgba(0,0,0,0.12),0_8px_20px_rgba(16,185,129,0.12)] bg-gradient-to-br from-sky-100 via-emerald-100 to-green-50">
            <img
              src="/about-team.jpg"
              alt="Isarva team at work"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            {/* Brand "Z" mark overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Image src="/Isarva-logo copy.png" width={200} height={78} alt="Isarva Logo" loading="lazy" />
            </div>
          </div>

          {/* Floating years badge */}
          <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-white rounded-2xl px-5 py-3 flex flex-col items-center shadow-[0_12px_32px_rgba(16,185,129,0.4)] border-[3px] border-white z-10">
            <span className="text-2xl font-extrabold leading-none tracking-tight">
              12+
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest opacity-90 mt-0.5 whitespace-nowrap">
              Years of Excellence
            </span>
          </div>
        </div>

        {/* ── RIGHT: Text content ── */}
        <div className="flex-1 lg:text-left text-center">
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-4 lg:justify-start justify-center">
            <div className="w-7 h-0.5 bg-emerald-500 rounded-full" />
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-emerald-500">
              Who We Are
            </p>
          </div>

          {/* Headline */}
          <h2 className="text-slate-900 mb-5 er text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
            We craft{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent">
              awesome websites
            </span>{" "}
            and dynamic digital solutions to grow your business.
          </h2>

          {/* Body copy */}
          <p className="text-base leading-relaxed text-slate-500 font-[450] max-w-[480px] mx-auto lg:mx-0 mb-9">
            Based in our studio, we work with companies like yours around the
            globe — ensuring the highest quality delivery of creativity that
            converts. From strategy to execution, we&apos;re your end-to-end
            digital partner.
          </p>

          {/* Stats strip */}
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-7 py-6 mb-10">
            <div className="flex flex-col items-center flex-1 gap-1">
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                150+
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 text-center">
                Projects Delivered
              </span>
            </div>
            <div className="w-px h-9 bg-slate-200" />
            <div className="flex flex-col items-center flex-1 gap-1">
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                100+
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 text-center">
                Happy Clients
              </span>
            </div>
            <div className="w-px h-9 bg-slate-200" />
            <div className="flex flex-col items-center flex-1 gap-1">
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                100%
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 text-center">
                Satisfaction Rate
              </span>
            </div>
          </div>

          {/* CTA row */}
          <div className="flex items-center gap-7 flex-wrap lg:justify-start justify-center">
            {/* Yellow CTA button — matches reference design */}
            <Link href="/about" className="press-illusion-btn-orange text-white w-fit font-bold px-8 py-4 text-base items-center space-x-2 flex">
              <span>About Us</span>
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

            {/* Phone link */}
            <a
              href="tel:+911234567890"
              className="group flex items-center gap-3 text-slate-800 hover:opacity-70 transition-opacity duration-200 no-underline"
            >
              <span className="w-9 h-9 rounded-full border border-slate-200 bg-slate-50 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white text-slate-500 flex items-center justify-center transition-all duration-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                </svg>
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  Call our team today
                </span>
                <span className="text-sm font-bold text-slate-900">
                  +91 12345 67890
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
