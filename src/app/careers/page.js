"use client";

import { useState } from "react";
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
  Search
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactSection from "../components/ContactSection";

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

const jobs = [
  {
    title: "Software Developer – C++",
    location: "Bangalore",
    experience: "5–8 years",
    type: "Full-time"
  },
  {
    title: "Client Solution Executive",
    location: "Bajpe, Mangalore",
    experience: "0–3 years",
    type: "Full-time"
  },
  {
    title: "Lead AI/ML Engineer – NLP & Generative AI",
    location: "Bangalore",
    experience: "Fresher",
    type: "Full-time"
  },
  {
    title: "Senior Software Developer – Python",
    location: "Bangalore",
    experience: "5+ years",
    type: "Full-time"
  },
  {
    title: "AI/ML Internship – Agentic AI (Autonomous Agents)",
    location: "Remote",
    experience: "Fresher",
    type: "Internship"
  },
  {
    title: "Senior Software Engineer (Backend C# - Microservices & RESTful APIs)",
    location: "Bangalore",
    experience: "4-8 years",
    type: "Full-time"
  },
  {
    title: "Senior Software Test Automation Engineer",
    location: "Bangalore",
    experience: "5-10 years",
    type: "Full-time"
  },
  {
    title: "Senior Software Developer – .NET Web",
    location: "Bangalore",
    experience: "5 - 7 years",
    type: "Full-time"
  },
  {
    title: "Business Development Executive",
    location: "Bajpe, Mangalore",
    experience: "0-1 year",
    type: "Full-time"
  },
  {
    title: "Accounts Executive",
    location: "Bajpe, Mangalore",
    experience: "0-1 year",
    type: "Full-time"
  },
  {
    title: "Quality Assurance Tester",
    location: "Bangalore",
    experience: "2 – 4 years",
    type: "Full-time"
  },
  {
    title: "Full Stack Java Developer",
    location: "Bangalore",
    experience: "3-8 years",
    type: "Full-time"
  },
  {
    title: "Full Stack Node.js Developer",
    location: "Bangalore",
    experience: "4 – 6 years",
    type: "Full-time"
  },
  {
    title: "Systems Engineer – Manufacturing & Knowledge Base Specialist",
    location: "Bangalore",
    experience: "2-4 years",
    type: "Full-time"
  },
  {
    title: "Marketing Intern",
    location: "Bajpe, Mangalore",
    experience: "Currently Pursuing MBA",
    type: "Internship"
  },
  {
    title: "HR Intern",
    location: "Bajpe, Mangalore",
    experience: "Currently pursuing MBA",
    type: "Internship"
  },
  {
    title: "IT Intern",
    location: "Bajpe, Mangalore",
    experience: "Currently pursuing BCA, MCA, B.Tech",
    type: "Internship"
  },
  {
    title: "Devops Engineer",
    location: "Bangalore",
    experience: "5 years",
    type: "Full-time"
  },
  {
    title: "C# Development Engineer",
    location: "Bangalore",
    experience: "4 to 7 years",
    type: "Full-time"
  }
];

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FDF8F2] font-sans text-[#1a1f24]">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-44 pb-32 lg:pb-48 overflow-hidden bg-gradient-to-b from-[#F0F7F4] to-[#FDF8F2]">
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
                      className="press-illusion-btn bg-[#10b981] text-white w-full sm:w-fit font-bold px-10 py-5 text-xl flex items-center justify-center gap-3 transition-transform hover:scale-105 rounded-2xl shadow-xl hover:shadow-2xl"
                    >
                      <span>Explore Roles</span>
                      <ArrowRight className="w-5 h-5 text-white" />
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
                       <div className="flex border-b border-[#10b981]/10 pb-12 items-center gap-6">
                           <div className="w-16 h-16 bg-[#10b981] text-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                              <CheckCircle2 className="w-8 h-8" />
                           </div>
                           <div>
                              <div className="text-4xl font-display font-bold text-[#1a1f24]">500+</div>
                              <div className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">Impactful Projects</div>
                           </div>
                       </div>
                       <div className="flex border-b border-[#10b981]/10 pb-12 items-center gap-6">
                           <div className="w-16 h-16 bg-white text-[#10b981] rounded-2xl flex items-center justify-center shadow-lg border border-[#10b981]/10 transform -rotate-3">
                              <Users className="w-8 h-8" />
                           </div>
                           <div>
                              <div className="text-4xl font-display font-bold text-[#1a1f24]">200+</div>
                              <div className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">Engineers & Designers</div>
                           </div>
                       </div>
                       <div className="flex items-center gap-6">
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
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 rounded-full bg-gradient-to-r from-transparent via-[#10b981]/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
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
                
                <div className="relative z-10">
                  <div className="mb-8 p-5 bg-white rounded-[2rem] w-fit shadow-lg shadow-emerald-500/5 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
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
      <section id="openings" className="py-24 bg-[#FDF8F2] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
            <div className="text-left">
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
                          {job.type}
                        </div>
                      </div>
                    </div>

                    <Link 
                      href="/contact"
                      className="bg-[#1a1f24]/5 hover:bg-[#10b981] text-[#1a1f24] hover:text-white px-8 py-3.5 rounded-xl font-bold transition-all transform active:scale-95 flex items-center gap-2 text-sm"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
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
                    onClick={() => setSearchTerm("")}
                    className="mt-4 text-[#10b981] font-bold underline underline-offset-4"
                  >
                    Clear search filters
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
            className="mt-32 p-12 lg:p-24 bg-[#1a1f24] rounded-[4rem] text-center relative overflow-hidden shadow-2xl"
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
                    href="/contact"
                    className="press-illusion-btn bg-[#10b981] text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all hover:scale-105"
                  >
                    Send Resume
                  </Link>
                  <Link 
                    href="/about"
                    className="text-white font-bold text-xl hover:text-[#10b981] transition-colors flex items-center gap-3"
                  >
                    Learn About culture <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
