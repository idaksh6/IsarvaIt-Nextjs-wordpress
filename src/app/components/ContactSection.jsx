'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.contact-content > *', {
      scrollTrigger: { trigger: '.contact-content', start: 'top 85%' },
      y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      aria-labelledby="contact-section-heading"
    >
      <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="contact-content">
          {/* Header */}
          <div className="mb-12">
            <h2 id="contact-section-heading" className="text-white mb-4 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss your project and turn your ideas into reality
            </p>
          </div>

          {/* Call to Action */}
          <div>
            <Link
                href="/contact"
                className="press-illusion-btn-orange bg-orange-600 text-white w-fit mx-auto font-bold px-6 py-2 text-base  items-center space-x-2  inline-flex"
                aria-label="Navigate to contact page"
              >
                <span>Get In Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4" aria-hidden="true">
                  <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
                </svg>
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
