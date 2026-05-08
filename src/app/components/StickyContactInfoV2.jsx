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
      <h2>Sticky Contact Info</h2>
      {socialLinks && (
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon} {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
      {showMap && <p>Map is shown here.</p>}
    </div>
  );
}