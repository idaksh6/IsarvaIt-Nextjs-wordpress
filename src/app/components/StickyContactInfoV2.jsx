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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ transform: `translateY(${translateY}px)` }}
      className="sticky-contact-info"
    >
      <div className="relative order-1 lg:order-2">
        <div
          className="space-y-8 transition-transform duration-100 ease-out"
          style={{ transform: "translateY(0px)" }}
        >
          <div className="mb-6 lg:text-left text-center">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-md text-emerald-800 font-semibold text-sm mb-6 border border-white/60 shadow-lg"
            >
              <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
              Let's Connect
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-base lg:text-xl text-gray-700 leading-relaxed font-medium">
              Have a project in mind? We'd love to hear about it. Send us a message
              and we'll respond within 24 hours.
            </p>
          </div>
          <div className="rounded-3xl lg:text-left text-center p-8 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100">
            <h3 className="mb-4">Follow Us</h3>
            <p className="text-gray-600 mb-6">
              Stay connected with us on social media for updates, insights, and
              more.
            </p>
            <div className="flex gap-4 lg:justify-start justify-center">
              {socialLinks.map((link, index) => (
                <a
                  key={link.href || index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white hover:bg-emerald-500 border-2 border-emerald-100 hover:border-emerald-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showMap && <p>Map is shown here.</p>}
    </div>
  );
}