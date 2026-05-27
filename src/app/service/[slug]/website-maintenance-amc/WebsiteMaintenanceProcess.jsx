"use client";

import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Settings } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "Discovery",
    badge: "ONCE",
    description: "We start by understanding your website, creating backups, and establishing a strong technical foundation.",
  },
  {
    title: "Defense",
    badge: "ONGOING",
    description: "Proactive protection keeps your website secure through monitoring, threat prevention, and access control.",
  },
  {
    title: "Optimization",
    badge: "ROUTINE",
    description: "Routine maintenance and updates ensure your website remains stable, compatible, and high-performing.",
  },
  {
    title: "Visibility",
    badge: "MONTHLY",
    description: "Clear monthly reporting keeps you informed with updates on site performance, maintenance activity, and reliability.",
  },
  {
    title: "Dedicated Support",
    badge: "AS NEEDED",
    description: "Whenever you need edits, fixes, or guidance, our team is ready to respond and keep things moving.",
  },
];

const TimelineDot = ({ dotRef }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dotRef.current) return;
      const rect = dotRef.current.getBoundingClientRect();
      const dotCenter = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      setActive(dotCenter <= viewCenter);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dotRef]);

  return (
    <div
      ref={dotRef}
      className={`w-7 h-7 rounded-full flex items-center justify-center relative z-20 bg-white transition-all duration-300 ${
        active
          ? "border-[7px] border-emerald-500"
          : "border-[1.5px] border-dashed border-gray-500"
      }`}
    >
      <div 
        className={`rounded-full transition-all duration-300 ${
          active ? "w-0 h-0 opacity-0" : "w-2.5 h-2.5 bg-gray-700 opacity-100"
        }`} 
      />
    </div>
  );
};

const WebsiteMaintenanceProcess = () => {
  const containerRef = useRef(null);
  const columnRef = useRef(null);
  const lineRef = useRef(null);
  const dotRefs = useRef(steps.map(() => React.createRef()));
  const [lineStyle, setLineStyle] = useState({ top: 96, bottom: 96 });

  useEffect(() => {
    const updateLine = () => {
      if (
        dotRefs.current[0].current &&
        dotRefs.current[steps.length - 1].current &&
        columnRef.current
      ) {
        const firstCard = dotRefs.current[0].current.closest('.group');
        const lastCard = dotRefs.current[steps.length - 1].current.closest('.group');

        if (firstCard && lastCard) {
          // Calculate the exact vertical center of the first card relative to the column
          const top = firstCard.offsetTop + firstCard.offsetHeight / 2;
          
          // Calculate the exact vertical center of the last card
          const lastCenterY = lastCard.offsetTop + lastCard.offsetHeight / 2;
          const bottom = columnRef.current.offsetHeight - lastCenterY;

          setLineStyle({ top, bottom });
        }
      }
    };
    
    updateLine();
    
    const observer = new ResizeObserver(updateLine);
    if (columnRef.current) {
      observer.observe(columnRef.current);
    }
    
    window.addEventListener("resize", updateLine);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateLine);
    };
  }, []);

  const { scrollYProgress: lineScrollProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      className="py-10 lg:py-16 bg-gray-50 relative"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

          {/* Left Column — Sticky */}
          <div className="lg:w-2/5 text-center lg:text-left">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs tracking-wider uppercase mb-8 border border-emerald-100">
                <Settings className="w-4 h-4" />
                How We Deliver
              </div>

              <h2 className="text-gray-900 mb-6 text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                A Proven Website Maintenance System
              </h2>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
                Built around consistency and transparency, our maintenance process outlines what happens on your website, when it happens, and how it supports long-term performance and reliability.
              </p>
            </div>
          </div>

          {/* Right Column — Scrolling Timeline */}
          <div className="lg:w-3/5 relative" ref={columnRef}>
            <div 
              ref={lineRef}
              className="absolute left-[27px] w-0.5 border-l-2 border-dashed border-gray-200"
              style={{ top: lineStyle.top, bottom: lineStyle.bottom }}
            />

            <motion.div
              className="absolute left-[27px] w-0.5 bg-emerald-500 origin-top"
              style={{ top: lineStyle.top, bottom: lineStyle.bottom, scaleY: lineScrollProgress }}
            />

            <div className="flex flex-col gap-6 md:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 md:pl-20 group flex items-center"
                >
                  <div className="flex absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center z-10">
                    <TimelineDot dotRef={dotRefs.current[index]} />
                  </div>

                  <div className="hidden md:block absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 text-[10rem] lg:text-[14rem] font-normal text-gray-50 pointer-events-none select-none z-0 tracking-tighter leading-none">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm group-hover:shadow-xl group-hover:border-emerald-200 transition-all duration-300 relative z-10 w-full md:w-[80%] lg:w-[75%] overflow-hidden">
                    
                    {/* Mobile Corner Number */}
                    <div className="md:hidden absolute top-0 right-0 w-12 h-12 border-l border-b border-gray-300 rounded-bl-3xl flex items-start justify-end pt-2 pr-3 text-xl font-normal text-gray-400">
                      {index + 1}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 pr-8 md:pr-0">
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-extrabold tracking-widest uppercase border border-emerald-100">
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebsiteMaintenanceProcess;