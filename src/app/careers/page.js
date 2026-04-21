"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronRight,
  Heart,
  Zap,
  TrendingUp,
  Globe,
  Users,
  Cpu,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Search,
  Code,
  Megaphone,
  Palette,
  DollarSign,
  Settings
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactSection from "../components/ContactSection";
import { getJobsListData } from "../lib/data/jobsData";
import GeneralApplicationModal from "../components/GeneralApplicationModal";

const jobCategories = [
  { id: 'all', name: 'All Jobs', icon: <Briefcase className="w-5 h-5" />, emoji: '💼' },
  { id: 'Development', name: 'Development', icon: <Code className="w-5 h-5" />, emoji: '⚙️' },
  { id: 'Marketing', name: 'Marketing', icon: <Megaphone className="w-5 h-5" />, emoji: '📢' },
  { id: 'Design', name: 'Design', icon: <Palette className="w-5 h-5" />, emoji: '🎨' },
  { id: 'Finance', name: 'Finance', icon: <DollarSign className="w-5 h-5" />, emoji: '💰' },
  { id: 'Operation', name: 'Operation', icon: <Settings className="w-5 h-5" />, emoji: '📋' },
];

const benefits = [
  {
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    title: "Culture of Well-being",
    description: "We champion healthy work-life integration. We provide resources to ensure your personal and professional growth remain balanced."
  },
  {
    icon: <Zap className="w-8 h-8 text-amber-500" />,
    title: "Innovation Unleashed",
    description: "Your ideas matter. We foster creative freedom where every perspective is valued and innovation is encouraged at every level."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
    title: "Accelerated Growth",
    description: "From cutting-edge design to advanced development, we provide opportunities to learn, grow, and lead in a constantly evolving environment."
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    title: "Impactful Solutions",
    description: "We build technology that matters. Join us in creating solutions that improve lives and have a positive effect on the world."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500" />,
    title: "Collaborative Environment",
    description: "Join a team of passionate professionals who support each other and celebrate collective success through the power of teamwork."
  },
  {
    icon: <Cpu className="w-8 h-8 text-cyan-500" />,
    title: "Technology at the Forefront",
    description: "Work with the latest tools and tech. We encourage employees to stay updated with the newest trends in our industry."
  }
];

export default function CareerPage() {
  const jobs = getJobsListData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tabsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, []);

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left'
        ? tabsRef.current.scrollLeft - scrollAmount
        : tabsRef.current.scrollLeft + scrollAmount;

      tabsRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(checkScrollPosition, 100);
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FDF8F2] font-sans text-[#1a1f24]">

      {/* ── HERO SECTION ── */}
      <section className="relative pt-44 lg:pb-32 pb-14 lg:pb-42 overflow-hidden bg-gradient-to-b from-[#F0F7F4] to-[#FDF8F2]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10b981] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-[#84cc16] opacity-[0.05] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#10b981]/10 mb-8 shadow-sm"
              >
                <Briefcase className="w-4 h-4 text-[#10b981]" />
                <span className="text-[#10b981] font-bold tracking-wider uppercase text-xs">Join our Mission</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-[#1a1f24] tracking-tight leading-[1.1] mb-8"
              >
                Shape the Future at <br />
                <span className="italic text-[#10b981] font-bold">Isarva Infotech</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-[#53606b] max-w-2xl leading-relaxed mb-12 font-medium"
              >
                At Isarva Infotech, we don’t just keep up with technology — we drive its evolution. Our passion lies in using cutting-edge engineering to solve real-world challenges with meaningful impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
              >

                <Link
                  href="#openings"
                  rel="noopener noreferrer"
                  className="press-illusion-btn bg-green-400 justify-center text-white text-center lg:mx-0 mx-auto  font-bold px-6 py-2 text-base items-center space-x-2 flex"
                >
                  <span>Explore Roles</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 9"
                    className="h-2 w-4"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link
                  href="/internships"
                  rel="noopener noreferrer"
                  className="press-illusion-btn bg-green-400 justify-center text-white text-center lg:mx-0 mx-auto  font-bold px-6 py-2 text-base items-center space-x-2 flex"
                >
                  <span>Explore Internships</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 9"
                    className="h-2 w-4"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* A subtle glass card for numbers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-2/5 w-full"
            >
              <div className="bg-white/40 backdrop-blur-md rounded-[3rem] p-10 border border-white/50 shadow-2xl relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#10b981]/10 rounded-full blur-2xl"></div>
                <div className="space-y-12">
                  <div className="flex border-b border-[#10b981]/10 pb-12 items-center gap-6 lg:justify-start justify-center">
                    <div className="w-16 h-16 bg-[#10b981] text-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-4xl font-display font-bold text-[#1a1f24]">500+</div>
                      <div className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">Impactful Projects</div>
                    </div>
                  </div>
                  <div className="flex border-b border-[#10b981]/10 pb-12 items-center gap-6 lg:justify-start justify-center">
                    <div className="w-16 h-16 bg-white text-[#10b981] rounded-2xl flex items-center justify-center shadow-lg border border-[#10b981]/10 transform -rotate-3">
                      <Users className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-4xl font-display font-bold text-[#1a1f24]">200+</div>
                      <div className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">Engineers & Designers</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 lg:justify-start justify-center">
                    <div className="w-16 h-16 bg-[#10b981] text-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                      <Globe className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-4xl font-display font-bold text-[#1a1f24]">15+</div>
                      <div className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">Global Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="lg:py-32 py-10 relative bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 rounded-full bg-gradient-to-r from-transparent via-[#10b981]/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center lg:mb-24 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[#10b981] font-black tracking-[0.3em] uppercase text-xs mb-4"
            >
              Our Foundation
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#1a1f24] mb-6">Why Choose Isarva Infotech?</h2>
            <div className="w-24 h-1.5 bg-[#10b981] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#FDF8F2] p-12 rounded-[3.5rem] border border-[#10b981]/5 hover:border-[#10b981]/20 transition-all group hover:shadow-2xl relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 lg:text-left text-center">
                  <div className="mb-8 p-5 bg-white rounded-[2rem] w-fit lg:mx-0 mx-auto shadow-lg shadow-emerald-500/5 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-6 text-[#1a1f24] leading-tight group-hover:text-[#10b981] transition-colors">{benefit.title}</h3>
                  <p className="text-[#53606b] leading-relaxed font-medium text-lg">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section id="openings" className="lg:py-24 py-10 bg-[#FDF8F2] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 px-4">
            <div className="lg:text-left text-center">
              <span className="text-[#10b981] font-black tracking-[0.3em] uppercase text-xs mb-4 inline-block">Career Opportunities</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1f24] leading-tight">Find Your Calling</h2>
            </div>

            {/* Minimalist Search Bar */}
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#53606b] group-focus-within:text-[#10b981] transition-colors" />
              <input
                type="text"
                placeholder="Search roles or locations..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-emerald-500/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#10b981]/20 focus:border-[#10b981] transition-all shadow-sm font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mb-8 px-4 relative">
            {/* Left Arrow - Mobile Only */}
            {canScrollLeft && (
              <button
                onClick={() => scrollTabs('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 border border-emerald-500/10 hover:bg-emerald-50 transition-all lg:hidden"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Right Arrow - Mobile Only */}
            {canScrollRight && (
              <button
                onClick={() => scrollTabs('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 border border-emerald-500/10 hover:bg-emerald-50 transition-all lg:hidden"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Tabs Container - Hide scrollbar on mobile, show on desktop */}
            <div
              ref={tabsRef}
              onScroll={checkScrollPosition}
              className="overflow-x-auto scrollbar-hide-mobile"
            >
              <div className="flex gap-3 min-w-max pb-2">
                {jobCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2
                      ${selectedCategory === category.id
                        ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/20'
                        : 'bg-white text-[#1a1f24] hover:bg-emerald-50 border border-emerald-500/10'
                      }
                    `}
                  >
                    <span className="text-base">{category.emoji}</span>
                    <span>{category.name}</span>
                    {selectedCategory === category.id && (
                      <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                        {category.id === 'all' ? jobs.length : jobs.filter(j => j.category === category.id).length}
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, idx) => (
                  <motion.div
                    key={job.title + idx}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white p-5 md:p-7 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-emerald-500/5 hover:border-[#10b981]/20 group flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-display font-bold text-[#1a1f24] leading-tight group-hover:text-[#10b981] transition-colors mb-4">{job.title}</h3>
                      <div className="flex flex-wrap gap-2.5">
                        <div className="flex items-center gap-1.5 text-[#53606b] text-[10px] font-bold bg-[#FDF8F2] px-3 py-1 rounded-full uppercase tracking-wider">
                          <MapPin className="w-3.5 h-3.5 text-[#10b981]" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1.5 text-[#53606b] text-[10px] font-bold bg-[#FDF8F2] px-3 py-1 rounded-full uppercase tracking-wider">
                          <Clock className="w-3.5 h-3.5 text-emerald-600" />
                          {job.experience}
                        </div>
                        <div className="flex items-center gap-1.5 text-[#10b981] text-[10px] font-black bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-100">
                          {job.jobType}
                        </div>
                        {job.category && (
                          <div className="flex items-center gap-1.5 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border border-purple-100">
                            {jobCategories.find(c => c.id === job.category)?.emoji}
                            <span>{job.category}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <Link
                      href={`/career/${job.slug}`}
                      rel="noopener noreferrer"
                      className="press-illusion-btn bg-green-400 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 flex"
                    >
                      <span>View Details</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 9"
                        className="h-2 w-4"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-20 text-center bg-white/50 rounded-[3rem] border-2 border-dashed border-emerald-500/10"
                >
                  <Search className="w-12 h-12 text-[#10b981]/20 mx-auto mb-4" />
                  <p className="text-[#53606b] font-display text-xl">No roles matching your search.</p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="mt-4 text-[#10b981] font-bold underline underline-offset-4"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* GENERAL APPLICATION FORM CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:mt-32 mt-14 p-12 lg:p-24 bg-[#1a1f24] rounded-[4rem] text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981] opacity-[0.05] rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500 opacity-[0.05] rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10">
              <h4 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8">
                Don't see your <br />
                <span className="text-[#10b981] italic">perfect role?</span>
              </h4>
              <p className="text-xl text-white/70 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
                We're always looking for remarkable people who think differently. Send us your profile and let's see where you fit in our evolution.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <Link
                  onClick={() => setIsModalOpen(true)}
                  href="#"
                  rel="noopener noreferrer"
                  className="press-illusion-btn bg-green-400 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 hidden nav:flex"
                >
                  <span>Send Resume</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 9"
                    className="h-2 w-4"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>

                <Link
                  href="about"
                  rel="noopener noreferrer"
                  className="press-illusion-btn bg-green-400 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 flex"
                >
                  <span> Learn About culture</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 9"
                    className="h-2 w-4"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* General Application Modal */}
      <GeneralApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
