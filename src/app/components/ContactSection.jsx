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
    >
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="contact-content">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss your project and turn your ideas into reality
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-gray-300">hello@isarva.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-300">Silicon Valley, CA</p>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <Link
                href="/contact"
                className="press-illusion-btn bg-green-400 text-black w-fit mx-auto font-bold px-6 py-2 text-base  items-center space-x-2  inline-flex"
              >
                <span>Get In Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4">
                  <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
                </svg>
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}