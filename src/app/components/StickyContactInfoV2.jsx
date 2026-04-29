"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyContactInfoV2({ socialLinks, showMap = true }) {
  const containerRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      // Only apply scroll behavior on large screens (desktop)
      const isLargeScreen = window.innerWidth >= 1024; // lg breakpoint
      if (!isLargeScreen) {
        setTranslateY(0);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const parentRect = containerRef.current.parentElement.getBoundingClientRect();
      
      // Calculate how much space is available to scroll within the parent
      const containerHeight = containerRef.current.offsetHeight;
      const parentHeight = containerRef.current.parentElement.offsetHeight;
      const offsetTop = containerRef.current.offsetTop;
      
      // The track is the parent height minus the space already taken by Top content (offsetTop)
      const maxScroll = Math.max(0, parentHeight - containerHeight - offsetTop);

      if (maxScroll > 0) {
        // Calculate scroll progress within the parent
        // We start scrolling when the parent hits the top of the viewport
        const scrollProgress = Math.max(0, -parentRect.top);
        const newTranslateY = Math.min(scrollProgress, maxScroll);
        setTranslateY(newTranslateY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="space-y-8 transition-transform duration-100 ease-out"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      {/* Header Text - Now part of the sticky container */}
      <div className="mb-6 lg:text-left text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-md text-emerald-800 font-semibold text-sm mb-6 border border-white/60 shadow-lg">
          <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
          Let's Connect
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Have a project in mind? We'd love to hear about it. Send us a message and we'll respond within 24 hours.
        </p>
      </div>
      {/* Map */}
      {showMap && (
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9520052597973!2d74.8774165!3d12.9749216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba357d93869fb05%3A0x53a9e387a608a967!2sIsarva%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1774259662325!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
            title="Isarva Infotech office location in Mangalore, Karnataka"
          ></iframe>
        </div>
      )}

      {/* Social Links */}
      <div className="rounded-3xl lg:text-left text-center p-8 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Follow Us
        </h3>
        <p className="text-gray-600 mb-6">
          Stay connected with us on social media for updates, insights, and more.
        </p>
        <div className="flex gap-4 lg:justify-start justify-center">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white hover:bg-emerald-500 border-2 border-emerald-100 hover:border-emerald-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-110"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
