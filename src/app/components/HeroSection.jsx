'use client';

import { useRef, memo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Helper function to strip HTML tags from WYSIWYG content
// Moved outside component to avoid recreation on every render
function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
}

// Fallback content used when WordPress is not configured
const DEFAULT_HERO_DATA = {
  stripTag: '🚀 Scalable IT Solutions for Global Enterprises',
  heading: 'We Build <span style="background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Digital Solutions</span> That Drive Growth',
  description: '<p>Your trusted technology partner for end-to-end digital transformation. From custom software to enterprise platforms — we help businesses innovate, scale, and succeed.</p>',
  backgroundImage: null,
  hasButton: true,
  buttonText: 'Start Your Project →',
  buttonLink: '/contact',
  buttonTarget: '_self',
};

function HeroSection({ data }) {
  const container = useRef(null);

  // Use fallback data when WordPress is not configured
  const heroData = data || DEFAULT_HERO_DATA;

  useGSAP(() => {
    gsap.from('.hero-content > *', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power4.out',
    });

    gsap.from('.floating-card', {
      y: 100,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      stagger: 0.2,
      ease: 'elastic.out(1, 0.75)',
    });

    // Floating animation
    gsap.to('.floating-card', {
      y: '+=15',
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: {
        each: 0.5,
        repeat: -1,
        yoyo: true
      }
    });

    // Animate the new SVG architecture
    gsap.from('.hero-architecture-img', {
      scale: 0.8,
      opacity: 0,
      duration: 2,
      delay: 0.8,
      ease: 'power2.out',
    });

    // Animate top glow
    gsap.from('.top-glow', {
      opacity: 0,
      scale: 0.5,
      duration: 2,
      delay: 1.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-[100vh] flex flex-col items-center pt-32 pb-0 overflow-hidden bg-no-repeat bg-grid"
      style={{
        backgroundImage: heroData.backgroundImage ? `url("${heroData.backgroundImage}")` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >

      <div className="max-w-7xl mx-auto px-6 relative z-20 text-center hero-content">
        {/* Badge */}
        {heroData.stripTag && (
          <div className="inline-flex mb-12">
            <span className="badge">
              {stripHtml(heroData.stripTag)}
            </span>
          </div>
        )}

        {/* Main Headline */}
        {heroData.heading && (
          <h1
            className="text-[70px] hero_heading font-bold leading-tight text-white mb-10 tracking-tighter max-w-6xl mx-auto  drop-shadow-2xl"
            dangerouslySetInnerHTML={{ __html: heroData.heading }}
          />
        )}

        {/* Subtext */}
        {heroData.description && (
          <div
            className="text-white/60 text-lg md:text-2xl max-w-4xl mx-auto mb-16 font-medium leading-relaxed prose prose-invert"
            dangerouslySetInnerHTML={{ __html: heroData.description }}
          />
        )}

        {/* CTA Button */}
        {heroData.hasButton && (
          <div className="relative z-30 mb-20">
            <Link
              href={heroData.buttonLink}
              className="press-illusion-btn bg-green-400 text-black w-fit  font-bold px-6 py-2 text-base mx-auto items-center space-x-2  md:flex"
            >
              Get In Touch
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4">
                <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        )}
        {/* Floating Cards Mockup */}
        <div className="-mt-40 relative h-[600px] w-full max-w-6xl mx-auto hidden lg:block">
          {/* Web Platforms Card */}
          <div className="floating-card absolute left-[-150px] top-0 w-80 glass-card p-8 rounded-[2.5rem] border border-white/10 text-left shadow-2xl z-10">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner ring-1 ring-white/10">🌐</div>
            <h3 className="text-white font-bold text-xl mb-4 flex items-center justify-between">
              Web Platforms <span className="w-5 h-5 rounded-md border-2 border-white/20"></span>
            </h3>
            <p className="text-white/40 text-[13px] leading-relaxed font-medium">
              We design and build high-performance website solutions applied basically for speed, scalability, and user experience.
            </p>
          </div>

          {/* Custom Software Card */}
          <div className="floating-card absolute right-[-150px] top-0 w-80 glass-card p-8 rounded-[2.5rem] border border-white/10 text-left shadow-2xl z-10">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner ring-1 ring-white/10">💻</div>
            <h3 className="text-white font-bold text-xl mb-4 flex items-center justify-between">
              Custom Software <span className="w-5 h-5 rounded-md border-2 border-white/20"></span>
            </h3>
            <p className="text-white/40 text-[13px] leading-relaxed font-medium">
              Tailored digital solutions built to solve complex business challenges and support long-term growth.
            </p>
          </div>

          {/* E-commerce Solutions Card (Center Bottom) */}
          <div className="floating-card absolute left-1/2 -translate-x-1/2 bottom-[150px] w-96 glass-card p-10 rounded-[3rem] border border-white/10 text-left shadow-[0_45px_100px_rgba(0,0,0,0.9)] z-20">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-[#adff2f]/30 rounded-[1.5rem] flex items-center justify-center text-4xl text-[#adff2f] shadow-glow ring-1 ring-[#adff2f]/40">💰</div>
              <h3 className="text-white font-bold text-2xl">E-commerce Solutions</h3>
            </div>
            <p className="text-white/40 text-[15px] leading-relaxed mb-8 font-bold">
              Launch powerful online stores with secure payments, optimized performance, and conversion-focused design.
            </p>
            <div className="w-8 h-8 rounded-lg border-2 border-white/20 ml-auto flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <span className="text-[10px] opacity-20">GO</span>
            </div>
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
