"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bookmark, ArrowLeft, ArrowRight, Check } from "lucide-react";

const caseStudies = [
  {
    url: "ameapower.com",
    link: "https://ameapower.com",
    image: "/Services/website-maintenence/ameapower.jpg",
    work: [
      "Regular Backup",
      "Core & Plugin Update",
      "Performance Optimization",
      "Security Firewall Implementation"
    ]
  },
  {
    url: "bethliving.com",
    link: "https://bethliving.com",
    image: "/Services/website-maintenence/bethliving.jpg",
    work: [
      "Regular Backup",
      "Core & Plugin Update",
      "Performance Optimization",
      "Security Firewall Implementation"
    ]
  },
  {
    url: "dkhfw.in",
    link: "https://dkhfw.in",
    image: "/Services/website-maintenence/dkhfw.jpg",
    work: [
      "Regular Backup",
      "Core & Plugin Update",
      "Performance Optimization",
      "Security Firewall Implementation"
    ]
  },
  {
    url: "mangaloreclub.com",
    link: "https://mangaloreclub.com/",
    image: "/Services/website-maintenence/mangalore-club.jpg",
    work: [
      "Regular Backup",
      "Core & Plugin Update",
      "Performance Optimization",
      "Security Firewall Implementation"
    ]
  },
  {
    url: "dharmasthaladrc.com",
    link: "https://dharmasthaladrc.com/",
    image: "/Services/website-maintenence/sdm-deaddication.jpg",
    work: [
      "Regular Backup",
      "Core & Plugin Update",
      "Performance Optimization",
      "Security Firewall Implementation"
    ]
  },
  {
    url: "snspt.org",
    link: "https://www.snspt.org/",
    image: "/Services/website-maintenence/snspt.jpg",
    work: [
      "Regular Backup",
      "Core & Plugin Update",
      "Performance Optimization",
      "Security Firewall Implementation"
    ]
  }
];

const WebsiteMaintenanceCaseStudies = () => {
  const scrollContainerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setIsAtStart(scrollLeft <= 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScrollPosition, { passive: true });
    checkScrollPosition();
    return () => el.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scrollLeft = () => {
    if (isAtStart || !scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (scrollLeft + 400 >= maxScroll) {
      // Snap to the very end to fully align the last slide
      scrollContainerRef.current.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 lg:py-16 bg-[#F4F7FB] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8 text-center lg:text-left">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-emerald-700 font-bold text-xs tracking-wider uppercase mb-6 shadow-sm">
              <Bookmark className="w-4 h-4 text-emerald-500" />
              Trusted Maintenance Partners
            </div>

            <h2 className="text-gray-900 mb-4 text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              Websites We Support Continuously
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Explore a selection of websites we actively maintain, including the platforms they use and the regular updates, monitoring, and support we provide to keep them performing at their best.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollLeft}
              disabled={isAtStart}
              className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${isAtStart
                ? "opacity-30 cursor-not-allowed text-gray-400"
                : "text-gray-600 hover:text-emerald-600 hover:shadow-lg cursor-pointer"
                }`}
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              disabled={isAtEnd}
              className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${isAtEnd
                ? "opacity-30 cursor-not-allowed text-gray-400"
                : "text-gray-600 hover:text-emerald-600 hover:shadow-lg cursor-pointer"
                }`}
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative -mr-6 lg:-mr-[calc(50vw-50%)]">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pr-6 lg:pr-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[320px] max-w-[320px] md:min-w-[400px] md:max-w-[400px] bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 snap-start flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-[220px] w-full border-b border-gray-100 overflow-hidden rounded-t-xl group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={study.image}
                    alt={`Site maintained: ${study.url}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {study.flag && study.country && (
                    <div className="absolute top-4 right-4 bg-black rounded shadow-md overflow-hidden border-2 border-black">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={study.flag}
                        alt={study.country}
                        className="w-8 h-auto object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Link Section */}
                <div className="py-4 px-6 border-b border-gray-100 flex justify-center">
                  <a
                    href={study.link}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="group flex items-center gap-2 text-[13px] font-bold text-gray-900 uppercase tracking-wide hover:text-emerald-600 transition-colors"
                  >
                    {study.url}
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-grow">
                  <h4 className="text-lg font-bold text-gray-900 mb-6">Work Summary:</h4>
                  <ul className="space-y-4">
                    {study.work.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600">
                        <span className="font-medium text-gray-400 mt-[1px]">
                          {String(i + 1).padStart(2, '0')}.
                        </span>
                        <div className="flex items-start gap-2">
                          <Check className="w-[18px] h-[18px] text-emerald-500 flex-shrink-0 mt-[2px] stroke-[3]" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
            {/* Spacers for exact snap alignment at the end */}
            <div
              className="flex-shrink-0 snap-end hidden lg:block"
              style={{ width: "calc(max(0px, (100vw - 1400px) / 2))" }}
            ></div>
            <div className="flex-shrink-0 snap-end w-px lg:hidden"></div>
          </div>
        </div>

      </div >
    </section >
  );
};

export default WebsiteMaintenanceCaseStudies;