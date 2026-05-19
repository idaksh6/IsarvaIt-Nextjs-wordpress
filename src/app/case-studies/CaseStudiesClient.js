"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowRight, Briefcase, Tag, Sparkles } from "lucide-react";
import Link from "next/link";

// Mock data for Case Studies
const CASE_STUDIES = [
  {
    id: 1,
    title: "Transforming a Web Design Company with Isarva Support System",
    client: "Mid-Sized Website Design Company",
    industry: "Web Design",
    product: "Isarva Support System",
    slug: "/case-studies/support-system-case-study",
    tags: ["Zero Errors", "Auto-Pilot Tracking", "Ticketing", "Project Management"],
    color: "from-emerald-400 to-green-600",
    bgLight: "bg-emerald-50",
    textDark: "text-emerald-700",
    hoverBorder: "group-hover:border-emerald-500/50",
    hoverBg: "group-hover:bg-emerald-600",
    buttonBorder: "border-emerald-600/20",
    hoverShadow: "hover:shadow-emerald-500/20"
  },
  {
    id: 2,
    title: "Transforming Construction Workforce Management",
    client: "Leading Construction Company",
    industry: "Construction",
    product: "Isarva HRMS",
    slug: "/case-studies/hrms-case-study",
    tags: ["Payroll Automation", "Attendance", "Compliance"],
    color: "from-blue-400 to-indigo-600",
    bgLight: "bg-blue-50",
    textDark: "text-blue-700",
    hoverBorder: "group-hover:border-blue-500/50",
    hoverBg: "group-hover:bg-blue-600",
    buttonBorder: "border-blue-600/20",
    hoverShadow: "hover:shadow-blue-500/20"
  },
  {
    id: 3,
    title: "Beth Living achieves 49% increase in leads through UI/UX redesign",
    client: "Beth Living",
    industry: "Home Decor",
    product: "UI/UX Redesign",
    slug: "/case-studies/beth-living-case-study",
    tags: ["Lead Generation", "UI/UX", "Performance"],
    color: "from-amber-400 to-orange-600",
    bgLight: "bg-amber-50",
    textDark: "text-amber-700",
    hoverBorder: "group-hover:border-amber-500/50",
    hoverBg: "group-hover:bg-amber-600",
    buttonBorder: "border-amber-600/20",
    hoverShadow: "hover:shadow-amber-500/20"
  }
];

// Extract unique categories
const INDUSTRIES = ["All", ...new Set(CASE_STUDIES.map(cs => cs.industry))];
const PRODUCTS = ["All", ...new Set(CASE_STUDIES.map(cs => cs.product))];

export default function CaseStudiesClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [activeProduct, setActiveProduct] = useState("All");

  // Filter logic
  const filteredStudies = useMemo(() => {
    return CASE_STUDIES.filter(study => {
      const matchesSearch =
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.client.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesIndustry = activeIndustry === "All" || study.industry === activeIndustry;
      const matchesProduct = activeProduct === "All" || study.product === activeProduct;

      return matchesSearch && matchesIndustry && matchesProduct;
    });
  }, [searchQuery, activeIndustry, activeProduct]);

  return (
    <div className="min-h-screen bg-[#FDF8F2] text-gray-800 font-sans selection:bg-emerald-200">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] bg-emerald-200/30 rounded-full blur-[120px]" />
        <div className="absolute top-[10%] -right-[10%] w-[40%] h-[60%] bg-blue-200/20 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 pt-32 pb-12 md:pb-24 px-6 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6"
          >
            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={14} /> Our Work
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Case Studies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600"
          >
            Our case studies highlight the real-world impact of our work, showcasing how we help businesses overcome challenges and achieve success. Each project reflects our commitment to innovation, strategy, and measurable results. From initial ideas to final execution, we focus on creating solutions that truly make a difference. Explore these success stories to see how we turn visions into reality across diverse industries.
          </motion.p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-4 rounded-3xl shadow-lg border border-gray-100 mb-12 flex flex-col lg:flex-row gap-4"
        >
          {/* Search */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search by title or client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
            />
          </div>

          <div className="h-px lg:h-auto lg:w-px bg-gray-100 my-2 lg:my-0"></div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="flex-1 flex items-center gap-3">
              <Briefcase size={18} className="text-gray-400 shrink-0 ml-2" />
              <select
                value={activeIndustry}
                onChange={(e) => setActiveIndustry(e.target.value)}
                className="w-full bg-transparent text-gray-700 font-medium py-3 focus:outline-none cursor-pointer"
              >
                {INDUSTRIES.map(ind => <option key={ind} value={ind}>{ind === "All" ? "All Industries" : ind}</option>)}
              </select>
            </div>

            <div className="hidden sm:block w-px bg-gray-100"></div>

            <div className="flex-1 flex items-center gap-3">
              <Tag size={18} className="text-gray-400 shrink-0 ml-2" />
              <select
                value={activeProduct}
                onChange={(e) => setActiveProduct(e.target.value)}
                className="w-full bg-transparent text-gray-700 font-medium py-3 focus:outline-none cursor-pointer"
              >
                {PRODUCTS.map(prod => <option key={prod} value={prod}>{prod === "All" ? "All Products" : prod}</option>)}
              </select>
            </div>
          </div>
        </motion.div>

        {/* RESULTS COUNT */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-gray-500 font-medium">
            Showing <span className="text-gray-900 font-bold">{filteredStudies.length}</span> case studies
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={study.id}
                className={`group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border-2 border-gray-100 ${study.hoverBorder} shadow-sm hover:shadow-xl ${study.hoverShadow} transition-all duration-300`}
              >
                {/* Card Header / Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${study.color} relative p-6 flex flex-col justify-between`}>
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="flex justify-between items-start relative z-10">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <Link
                      href={study.slug}
                      className="w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="text-white/90 text-sm font-medium mb-1">Product Used:</h3>
                    <p className="text-white font-bold text-lg">{study.product}</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-500 mb-6 font-medium">
                    Client: <span className="text-gray-900">{study.client}</span>
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-8">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs font-bold px-3 py-1 rounded-md ${study.bgLight} ${study.textDark}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={study.slug}
                    className={`inline-flex items-center justify-center w-full py-4 rounded-xl font-bold text-[14px] bg-gray-50 text-gray-900 border-2 ${study.buttonBorder} ${study.hoverBg} group-hover:text-white group-hover:border-transparent transition-all duration-300`}
                  >
                    Read Full Story
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty State */}
          {filteredStudies.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-500">Try adjusting your filters or search query.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveIndustry("All"); setActiveProduct("All"); }}
                className="mt-6 px-6 py-2 bg-emerald-100 text-emerald-700 font-bold rounded-full hover:bg-emerald-200 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
