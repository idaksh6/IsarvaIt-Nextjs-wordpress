"use client";

import { useEffect, useState } from 'react';

export default function ScrollingIcon() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById('features');
      if (!featuresSection) return;

      const rect = featuresSection.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress within the features section
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = sectionHeight - viewportHeight;
      const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="hidden lg:block absolute left-1/2 w-12 h-12 -ml-6 transition-all duration-300 ease-out z-20"
      style={{
        top: `${scrollProgress * 100}%`,
      }}
    >
      {/* Glowing circle */}
      <div className="relative w-12 h-12">
        {/* Outer glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-md opacity-60 animate-pulse"></div>
        
        {/* Main circle */}
        <div className="absolute inset-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg flex items-center justify-center">
          {/* Rocket icon */}
          <svg className="w-6 h-6 text-white transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
        </div>
        
        {/* Inner white dot */}
        <div className="absolute inset-4 bg-white rounded-full"></div>
        
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
