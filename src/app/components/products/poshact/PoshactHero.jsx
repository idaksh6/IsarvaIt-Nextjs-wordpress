"use client";

import { useEffect, useState } from "react";
import {
  Layers,
  CheckCircle2,
  Clock,
  Shield,
  Users,
  ListChecks,
  ClipboardCheck,
  Briefcase,
  FileText,
} from "lucide-react";
import { POSHACT_HERO_SLIDES } from "./poshact-modules";

const HERO_CHIPS = [
  { id: "ic-setup", label: "IC Setup", icon: Users },
  { id: "operate", label: "9-Step Wizard", icon: ListChecks },
  { id: "compliance", label: "Compliance", icon: ClipboardCheck },
  { id: "management", label: "Employer action", icon: Briefcase },
  { id: "annual-report", label: "Annual Report", icon: FileText },
];

export default function PoshactHero({ onJumpToModule, onRequestDemo }) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    POSHACT_HERO_SLIDES.forEach((s) => {
      const preload = new window.Image();
      preload.src = s.image;
    });
  }, []);

  useEffect(() => {
    const intervalMs = 4200;
    const tickMs = 50;
    let elapsed = 0;

    const tick = setInterval(() => {
      elapsed += tickMs;
      setProgress(Math.min(100, (elapsed / intervalMs) * 100));
    }, tickMs);

    const slide = setInterval(() => {
      elapsed = 0;
      setProgress(0);
      setCurrent((c) => (c + 1) % POSHACT_HERO_SLIDES.length);
    }, intervalMs);

    return () => {
      clearInterval(tick);
      clearInterval(slide);
    };
  }, []);

  const slide = POSHACT_HERO_SLIDES[current];

  return (
    <section className="poshact-section-bg section-hero relative overflow-hidden pt-32 lg:pt-40 pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="hero-layout grid lg:grid-cols-2 gap-4 min-[480px]:gap-10 lg:gap-14 items-center w-full">
          <div className="hero-copy relative z-10 flex w-full min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex max-w-[calc(100vw-2rem)] items-center gap-1.5 sm:gap-2 rounded-full bg-white/85 backdrop-blur border border-indigo-200/70 text-indigo-900 text-[11px] min-[375px]:text-xs sm:text-sm font-semibold whitespace-nowrap px-2.5 sm:px-4 py-1.5 sm:py-2 shadow-sm mb-4 min-[480px]:mb-6">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              POSH Act 2013 · 16 modules in one app
            </div>

            <h1 className="w-full max-w-full text-[#1a1f24] mb-4 min-[480px]:mb-6 text-center text-[clamp(1.75rem,8vw,2.25rem)] leading-tight lg:text-left lg:text-[clamp(2.25rem,5vw,3.75rem)]">
              Workplace safety
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                built for trust.
              </span>
            </h1>

            <p className="w-full max-w-xl text-base lg:text-xl text-slate-600 leading-relaxed mb-5 min-[480px]:mb-8 mx-auto lg:mx-0">
              IC setup, confidential intake, 9-step inquiry, employer duties, and annual reporting — explore each module in detail below.
            </p>

            <div className="inline-flex flex-col items-stretch mx-auto lg:mx-0 min-[480px]:flex-row min-[480px]:items-center gap-4 mb-5 min-[480px]:mb-8">
              <a
                href="#modules"
                className="press-illusion-btn-orange inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold w-full min-[480px]:w-auto shrink-0"
              >
                <Layers className="w-4 h-4 shrink-0" />
                Explore all modules
              </a>
              <button
                type="button"
                onClick={onRequestDemo}
                className="press-illusion-btn-orange inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold w-full min-[480px]:w-auto shrink-0"
              >
                Request demo
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-slate-600 mb-5 min-[480px]:mb-8">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                Sections 4–22 covered
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                HRMS + standalone
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                7-step go-live guide
              </span>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {HERO_CHIPS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => onJumpToModule(id)}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/75 backdrop-blur px-3 py-2 text-xs font-semibold text-slate-700 hover:border-indigo-300 hover:shadow-md transition"
                >
                  <Icon className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="hero-visual relative flex w-full min-w-0 flex-col items-center min-h-0 min-[480px]:min-h-[340px] sm:min-h-[440px] lg:min-h-[500px]">
            <div className="hero-orbit-wrap hidden sm:block" aria-hidden="true">
              <div className="hero-orbit-spin">
                <svg className="w-full h-full" viewBox="0 0 420 420" fill="none">
                  <defs>
                    <linearGradient id="poshactOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <circle cx="210" cy="210" r="188" stroke="rgba(99,102,241,0.12)" strokeWidth="1" />
                  <circle cx="210" cy="210" r="188" stroke="url(#poshactOrbitGrad)" strokeWidth="2.5" className="hero-orbit-comet" />
                </svg>
              </div>
              {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((deg, i) => (
                <div
                  key={deg}
                  className="hero-step"
                  style={{
                    "--angle": `${deg}deg`,
                    "--radius": "188px",
                    "--delay": `${-i * 2}s`,
                  }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-indigo-200 text-[10px] font-bold text-indigo-600 shadow-sm">
                    {i + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative z-10 w-full max-w-[min(100%,20rem)] sm:max-w-md mx-auto lg:max-w-none sm:w-[88%] lg:w-[82%] pt-0 min-[480px]:pt-4 sm:pt-8">
              <div className="rounded-2xl p-[2px] bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-400 hero-viewport">
                <div className="rounded-[14px] overflow-hidden bg-white">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-200/80">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400/90" />
                    <span className="ml-2 flex-1 rounded-md bg-white border border-slate-200 px-3 py-1 text-[11px] text-slate-500 truncate">
                      {slide.url}
                    </span>
                  </div>
                  <div id="hero-slideshow" className="hero-slideshow">
                    {POSHACT_HERO_SLIDES.map((s, i) => (
                      <img
                        key={s.image}
                        src={s.image}
                        alt={`${s.label} preview`}
                        className={`hero-slide${i === current ? " is-active" : ""}`}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 w-full rounded-2xl border border-white/60 bg-white/85 backdrop-blur-md px-4 py-3.5 shadow-lg shadow-indigo-500/10">
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 mb-2.5 text-center sm:text-left">
                  <div className="min-w-0 w-full sm:w-auto">
                    <p className="font-bold text-slate-900 truncate">{slide.label}</p>
                    <p className="text-xs text-slate-500 truncate">{slide.sub}</p>
                  </div>
                  <div className="flex shrink-0 justify-center gap-1.5">
                    {POSHACT_HERO_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Show slide ${i + 1}`}
                        onClick={() => {
                          setCurrent(i);
                          setProgress(0);
                        }}
                        className={`h-2 rounded-full transition-all ${
                          i === current ? "w-6 bg-indigo-500" : "w-2 bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="h-1 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="hero-progress-fill h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="hero-float-a absolute left-0 sm:-left-4 top-12 z-20 rounded-2xl glass-card border border-indigo-100 px-4 py-3 shadow-xl max-w-[10.5rem] hidden sm:block">
              <div className="flex items-center gap-2 mb-1">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <Clock className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">Deadline alert</span>
              </div>
              <p className="text-sm font-bold text-slate-900 leading-snug">90-day inquiry tracking</p>
            </div>

            <div className="hero-float-b absolute right-0 sm:-right-4 bottom-16 z-20 rounded-2xl glass-card border border-violet-100 px-4 py-3 shadow-xl hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                  <Shield className="w-3.5 h-3.5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Section 16</p>
                  <p className="text-sm font-bold text-slate-900">Confidential</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 min-[480px]:mt-12 lg:mt-16 relative z-10">
          {[
            { n: "16", t: "Product modules", d: "Full POSH process covered" },
            { n: "9", t: "Step IC wizard", d: "Sections 9–12 covered" },
            { n: "14", t: "Employer duties", d: "Section 19 checklist" },
            { n: "QR", t: "Public intake", d: "24/7 anonymous filing", icon: true },
          ].map((stat) => (
            <div
              key={stat.t}
              className="hero-stat-card glass-card rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center gap-2 min-[480px]:flex-row min-[480px]:items-center min-[480px]:text-left min-[480px]:gap-3 sm:gap-4"
            >
              <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 font-extrabold text-base sm:text-lg">
                {stat.icon ? "QR" : stat.n}
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-slate-900 text-sm">{stat.t}</p>
                <p className="text-xs text-slate-500">{stat.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
