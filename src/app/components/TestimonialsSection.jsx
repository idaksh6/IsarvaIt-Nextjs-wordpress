'use client';

import { useRef, memo, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const defaultTestimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    initials: 'SJ',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    rating: 5,
    text: 'Working with this team has been an absolute game-changer for our business. Their expertise in web development and attention to detail exceeded every single expectation we had.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateLabs',
    initials: 'MC',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    rating: 5,
    text: 'The level of professionalism and technical knowledge is outstanding. They delivered our mobile app ahead of schedule with exceptional quality and zero compromises.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthHub',
    initials: 'ER',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    rating: 5,
    text: 'Our e-commerce platform has seen a 300% increase in conversions since the redesign. The UI/UX improvements made a tremendous impact on our bottom line.',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'CTO',
    company: 'CloudScale Systems',
    initials: 'DT',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    rating: 5,
    text: 'Their cloud solutions expertise helped us scale our infrastructure seamlessly. The migration was smooth and our system performance improved by over 200%.',
  },
  {
    id: 5,
    name: 'Lisa Park',
    role: 'Founder',
    company: 'StartupVenture',
    initials: 'LP',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    rating: 5,
    text: 'From concept to launch, they guided us through every step with clarity. Their ongoing support ensures our platform runs flawlessly 24/7, 365 days a year.',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Director of Operations',
    company: 'Enterprise Solutions',
    initials: 'JW',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    rating: 5,
    text: 'The custom web application they built has completely transformed our operations, saving us countless hours every week. Exceptional work from start to finish.',
  },
  {
    id: 7,
    name: 'Amanda Foster',
    role: 'VP of Engineering',
    company: 'DataFlow Inc.',
    initials: 'AF',
    gradient: 'linear-gradient(135deg, #fda085 0%, #f6d365 100%)',
    rating: 5,
    text: 'Incredible attention to performance optimization. Our application is now lightning fast and handles 10x the traffic with zero downtime. Truly impressive results.',
  },
  {
    id: 8,
    name: 'Robert Martinez',
    role: 'Head of Product',
    company: 'NextGen Solutions',
    initials: 'RM',
    gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    rating: 5,
    text: 'Best development partner we have ever worked with. Communication is excellent, code quality is top-notch, and they always deliver exactly what they promise.',
  },
];

function TestimonialsSection({ data }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const stRef = useRef(null);       // ScrollTrigger instance
  const drag = useRef({ on: false, startX: 0, startSL: 0, lastX: 0, lastT: 0, vel: 0 });
  const momentumRef = useRef(null);       // GSAP momentum tween

  const testimonials = data?.testimonials || defaultTestimonials;
  const sectionTitle = data?.title || 'What Our Clients Say';
  const sectionSub = data?.subtitle || 'Trusted by industry leaders across the globe';

  // ── helpers ─────────────────────────────────────────────────────────────────
  const killMomentum = () => {
    if (momentumRef.current) { momentumRef.current.kill(); momentumRef.current = null; }
  };

  const pauseST = () => { if (stRef.current) stRef.current.disable(); };
  const resumeST = () => {
    setTimeout(() => { if (stRef.current) stRef.current.enable(); }, 800);
  };

  // ── pointer drag ────────────────────────────────────────────────────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // -- Down
    const onDown = (e) => {
      killMomentum();
      pauseST();
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      drag.current = { on: true, startX: x, startSL: track.scrollLeft, lastX: x, lastT: performance.now(), vel: 0 };
      track.style.cursor = 'grabbing';
    };

    // -- Move
    const onMove = (e) => {
      if (!drag.current.on) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const now = performance.now();
      const dt = now - drag.current.lastT;
      if (dt > 0) drag.current.vel = (drag.current.lastX - x) / dt; // px/ms
      drag.current.lastX = x;
      drag.current.lastT = now;

      const rawTarget = drag.current.startSL + (drag.current.startX - x) * 1.1;
      // Live smooth update via GSAP (not JS scroll) for buttery feel
      gsap.to(track, { scrollLeft: rawTarget, duration: 0.05, ease: 'none', overwrite: true });
    };

    // -- Up / Cancel — apply momentum inertia
    const onUp = () => {
      if (!drag.current.on) return;
      drag.current.on = false;
      track.style.cursor = 'grab';

      const vel = drag.current.vel; // px/ms, positive = moving left
      if (Math.abs(vel) > 0.05) {
        // Coast: travel = vel * coastMs (capped)
        const coastMs = 900;
        const targetSL = Math.max(0, Math.min(track.scrollWidth - track.clientWidth, track.scrollLeft + vel * coastMs));
        momentumRef.current = gsap.to(track, {
          scrollLeft: targetSL,
          duration: coastMs / 1000,
          ease: 'power2.out',
          onComplete: resumeST,
        });
      } else {
        resumeST();
      }
    };

    track.addEventListener('mousedown', onDown);
    track.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);

    return () => {
      track.removeEventListener('mousedown', onDown);
      track.removeEventListener('touchstart', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  // ── GSAP scroll-driven ───────────────────────────────────────────────────────
  useGSAP(() => {
    // Header entrance
    gsap.from('.ts-label, .ts-title, .ts-sub, .ts-hint', {
      scrollTrigger: { trigger: '.ts-header', start: 'top 88%' },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power3.out',
    });

    // Cards fade-in only — no y offset so cards never appear displaced
    gsap.from('.ts-card', {
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      opacity: 0,
      duration: 1.1,
      stagger: 0.07,
      ease: 'power2.out',
    });

    // Scroll-driven slide (SLOW & smooth — large scrub value)
    const track = trackRef.current;
    if (!track) return;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 55%',
      end: 'bottom 10%',
      scrub: 4,                 // ← high = very slow / smooth lag
      onUpdate: (self) => {
        if (drag.current.on) return;
        const max = track.scrollWidth - track.clientWidth;
        gsap.to(track, {
          scrollLeft: max * self.progress,
          duration: 0.6,       // extra smoothing on top of scrub lag
          ease: 'power1.out',
          overwrite: true,
        });
      },
    });

    stRef.current = st;
    return () => st.kill();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative lg:py-24 py-10 overflow-hidden"
      style={{
        background: '#f8f9eb',
      }}
    >
      {/* ── Soft decorative blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '-8%', left: '-5%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-5%', right: '-5%',
          width: 450, height: 450, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }} />
        <div style={{
          position: 'absolute', top: '35%', left: '45%',
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
      </div>

      {/* ── Section Header ── */}
      <div className="ts-header relative z-10 text-center mb-16 px-6">
        <div className="ts-label inline-flex items-center gap-2 mb-4">
          <span style={{ display: 'block', height: 1, width: 32, background: 'linear-gradient(90deg,transparent,#6366f1)' }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: '#3b8d4d', textTransform: 'uppercase' }}>
            Client Testimonials
          </span>
          <span style={{ display: 'block', height: 1, width: 32, background: 'linear-gradient(90deg,#6366f1,transparent)' }} />
        </div>

        <h2
          className="ts-title text-5xl md:text-6xl font-extrabold mb-5 tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #1e1b4b 50%, #1e1b4b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
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
        {/* Left fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 20, pointerEvents: 'none',
          background: 'linear-gradient(90deg, #f0f4ff 0%, transparent 100%)',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 20, pointerEvents: 'none',
          background: 'linear-gradient(270deg, #f0f4ff 0%, transparent 100%)',
        }} />

        {/* ── The scrollable track ── */}
        <div
          ref={trackRef}
          className="flex gap-7 overflow-x-scroll py-10 px-20"
          style={{
            cursor: 'grab',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'auto',
          }}
        >
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="ts-card flex-shrink-0 select-none"
              style={{
                width: 380,
                background: '#ffffff',
                borderRadius: 28,
                padding: '36px 36px 32px',
                boxShadow: '0 4px 24px rgba(79,70,229,0.07), 0 1px 4px rgba(0,0,0,0.04)',
                border: '1px solid rgba(99,102,241,0.1)',
                transition: 'box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.boxShadow = '0 12px 40px rgba(79,70,229,0.14), 0 4px 12px rgba(0,0,0,0.05)';
                el.style.transform = 'translateY(-4px)';
                el.style.borderColor = 'rgba(99,102,241,0.25)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.boxShadow = '0 4px 24px rgba(79,70,229,0.07), 0 1px 4px rgba(0,0,0,0.04)';
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(99,102,241,0.1)';
              }}
            >
              {/* Decorative corner accent */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: 100, height: 100,
                background: 'linear-gradient(225deg, rgba(99,102,241,0.06) 0%, transparent 65%)',
                borderRadius: '0 28px 0 100%',
                pointerEvents: 'none',
              }} />

              {/* Big decorative quote */}
              <div style={{
                position: 'absolute', top: 24, right: 28,
                fontSize: 70, lineHeight: 1,
                fontFamily: 'Georgia, serif',
                color: 'rgba(99,102,241,0.09)',
                pointerEvents: 'none',
                userSelect: 'none',
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} style={{ width: 16, height: 16 }} viewBox="0 0 20 20"
                    fill={i < t.rating ? '#f59e0b' : '#e5e7eb'}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial text */}
              <p style={{
                color: '#374151',
                fontSize: 15,
                lineHeight: 1.75,
                fontWeight: 500,
                marginBottom: 28,
                position: 'relative',
                zIndex: 1,
              }}>
                "{t.text}"
              </p>

              {/* Divider */}
              <div style={{
                height: 1,
                marginBottom: 24,
                background: 'linear-gradient(90deg, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0.03) 80%, transparent 100%)',
              }} />

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 16, flexShrink: 0,
                  background: t.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 800, color: '#fff',
                  boxShadow: `0 6px 20px rgba(0,0,0,0.12)`,
                }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{ color: '#111827', fontWeight: 700, fontSize: 14, marginBottom: 2 }}>
                    {t.name}
                  </p>
                  <p style={{ color: '#9ca3af', fontSize: 12, fontWeight: 500 }}>
                    {t.role} &middot; {t.company}
                  </p>
                </div>
                {/* Verified badge */}
                <div style={{ marginLeft: 'auto' }}>
                  <svg style={{ width: 22, height: 22 }} viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="rgba(99,102,241,0.1)" />
                    <path d="M9 12l2 2 4-4" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="relative z-10 text-center mt-16 px-6">
        <p className="text-gray-400 text-sm mb-6 font-medium">
          Join 500+ businesses that trust us with their digital growth
        </p>
        <Link
          href="/contact"
          className="press-illusion-btn bg-green-400 text-black w-fit mx-auto font-bold px-6 py-2 text-base  items-center space-x-2  inline-flex"
        >
          <span>Start Your Project Today</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4">
            <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);
