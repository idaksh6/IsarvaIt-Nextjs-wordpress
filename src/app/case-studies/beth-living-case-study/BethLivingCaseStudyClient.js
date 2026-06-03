"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  Clock,
  ArrowRight,
  Server,
  Zap,
  Activity,
  Briefcase,
  AlertTriangle,
  CheckCircle,
  MousePointer2,
  Rocket,
  Globe,
  Settings,
  Heart,
  Layout,
  BarChart3,
  PhoneCall,
  Users
} from "lucide-react";
import Link from "../../components/AppLink";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function BethLivingCaseStudyClient() {
  return (
    <div className="min-h-screen bg-[#FDF8F2] text-gray-800 selection:bg-amber-200 selection:text-amber-900 overflow-hidden font-sans">

      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-amber-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-orange-100/30 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block py-1.5 px-4 mb-6 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold tracking-wide uppercase border border-amber-200"
            >
              Case Study
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
            >
              Beth Living Achieves <span className="text-amber-600">49% Increase</span> in Leads through UI/UX Redesign
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base lg:text-xl text-gray-600 mb-10 leading-relaxed font-medium"
            >
              A combination of UI/UX refresh, improved hosting, and optimized lead capture by Isarva helped Beth Living redefine its digital presence.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm font-medium text-gray-500 mb-8 md:mb-12">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-gray-700">
                <Briefcase size={16} className="text-amber-500" /> Home Décor Industry
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-gray-700">
                <Globe size={16} className="text-amber-500" /> Modular Stainless Steel
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-gray-700">
                <Rocket size={16} className="text-amber-500" /> Performance Optimization
              </span>
            </motion.div>

            {/* Tags */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 text-xs font-bold text-amber-700 uppercase tracking-wider mb-8">
              <span className="bg-amber-50 px-3 py-1 rounded-md">UI/UX Refresh</span>
              <span className="bg-amber-50 px-3 py-1 rounded-md">Lead Generation</span>
              <span className="bg-amber-50 px-3 py-1 rounded-md">Performance Audit</span>
              <span className="bg-amber-50 px-3 py-1 rounded-md">CRM Integration</span>
              <span className="bg-amber-50 px-3 py-1 rounded-md">Secure Hosting</span>
            </motion.div>
          </motion.div>

          {/* Highlight Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mt-8"
          >
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">49%</div>
              <div className="text-gray-600 font-medium italic">Lead Submission Growth</div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">35%</div>
              <div className="text-gray-600 font-medium italic">Avg. Session Duration Increase</div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">25%</div>
              <div className="text-gray-600 font-medium italic">Decrease in Bounce Rate</div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT BETH LIVING */}
        <section className="py-10 lg:py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl text-gray-900 mb-6 flex items-center justify-center md:justify-start gap-3 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">
              <Heart className="text-amber-500" /> About Beth Living
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 text-center md:text-left">
              Beth Living is India’s first stainless steel modular home décor brand. It offers kitchens, bedrooms, living and dining furniture, work-from-home setups, and bathroom interiors — all designed as a modern, eco-friendly alternative to wood.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center md:text-left">
              With hygienic, fireproof, pest-proof, water-resistant, and eco-conscious products, Beth Living is redefining the durability and sustainability standards of the modular furniture industry.
            </p>
          </div>
        </section>

        {/* THE REQUIREMENT */}
        <section className="pt-10 lg:pt-16  px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="text-gray-900 mb-8 md:mb-10 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">The Requirement</h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-8 font-medium text-center md:text-left">Beth Living wanted a modern website that could achieve the following business goals:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Engaging Showcase", desc: "Highlight its eco-friendly, durable product range in a modern way." },
                { title: "Easy Exploration", desc: "Simplify navigation across modular kitchens, bedrooms, and bathrooms." },
                { title: "Feature Highlighting", desc: "Showcase salient USP like pest-proof, fireproof, and water-resistant." },
                { title: "Lead Generation", desc: "Increase capture via 'Locate a Dealer' and 'Request a Quote' CTAs." },
                { title: "Mobile Performance", desc: "Deliver faster load times and a superior mobile experience." }
              ].map((req, idx) => (
                <div key={idx} className="flex gap-3 p-5 bg-amber-50/50 rounded-2xl border border-amber-100/50 hover:bg-amber-50 transition-colors">
                  <div className="mt-1 text-amber-600"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="mb-1">{req.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUSINESS CHALLENGES COMPARISON */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-gray-900 mb-4 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Requirement vs. Isarva Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-center">How we revamped Beth Living’s digital presence with a focus on performance and UI/UX optimization.</p>
            </div>

            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Header Row */}
              <div className="hidden md:grid grid-cols-2 bg-gray-50 border-b border-gray-100 p-6">
                <div className="font-bold text-gray-900 uppercase tracking-wider text-[20px] flex items-center gap-2">
                  <AlertTriangle size={18} className="text-amber-600" /> Requirement
                </div>
                <div className="font-bold text-amber-700 uppercase tracking-wider text-[20px] flex items-center gap-2 md:pl-12">
                  <CheckCircle size={18} className="text-amber-500" /> Isarva Solution
                </div>
              </div>

              {/* Data Rows */}
              <div className="divide-y divide-gray-100">
                {[
                  { r: "Low performance scores and slow loading assets", s: "Full audit, asset optimization, and cleaner codebase implementation" },
                  { r: "Outdated hosting infrastructure", s: "Migration to a modern, scalable, and reliable hosting setup" },
                  { r: "Friction in lead capture forms", s: "Redesigned forms with conditional logic and mobile-friendly layouts" },
                  { r: "Manual lead data entry and slow sales response", s: "Seamless CRM integration for faster lead processing and tracking" },
                  { r: "Complex navigation across diverse product lines", s: "Simplified UI/UX flow for modular kitchens, bedrooms, and bathrooms" }
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-6 hover:bg-amber-50/30 transition-colors group relative">
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full items-center justify-center text-gray-300 group-hover:text-amber-500 group-hover:border-amber-200 transition-all shadow-sm z-10">
                      <ArrowRight size={20} />
                    </div>
                    <div className="md:pr-12 mb-4 md:mb-0 flex flex-col justify-center">
                      <div className="md:hidden flex items-center gap-2 text-amber-600 font-bold text-[10px] uppercase tracking-wider mb-2">
                        Requirement
                      </div>
                      <p className="text-gray-700 font-medium text-base md:text-lg">{item.r}</p>
                    </div>
                    <div className="md:pl-12 flex flex-col justify-center">
                      <div className="md:hidden flex items-center gap-2 text-amber-700 font-bold text-[10px] uppercase tracking-wider mb-2 mt-2 pt-4 border-t border-gray-100">
                        Isarva Solution
                      </div>
                      <p className="text-gray-900 font-bold text-base md:text-lg text-amber-700">{item.s}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CORE SOLUTIONS DEPLOYED */}
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-10 md:mb-16 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Solutions for Beth Living</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { title: "Site Cleanup & Optimization", desc: "Removed redundant elements, simplified navigation, and optimized assets for a 40% faster load time.", icon: <Settings /> },
                { title: "Modern Hosting Setup", desc: "Upgraded to reliable infrastructure for a scalable, secure, and faster foundation.", icon: <Server /> },
                { title: "Redesigned Lead Forms", desc: "Custom forms for 'Locate a Dealer' and 'Request Quote' with better validation and logic.", icon: <MousePointer2 /> },
                { title: "CRM Integration", desc: "Automated lead capture to reduce manual entry and allow sales teams to respond faster.", icon: <Activity /> }
              ].map((sol, i) => (
                <div key={i} className="bg-[#FDF8F2] p-6 md:p-8 rounded-2xl shadow-sm border border-amber-50 hover:shadow-lg transition-all md:hover:-translate-y-1 flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                    {sol.icon}
                  </div>
                  <h3 className="md:text-xl mb-3">{sol.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS & BUSINESS IMPACT */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-gray-900 mb-10 md:mb-16 text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Results & Business Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: "49%", label: "Increase in Leads", sub: "Within 3 months post-launch" },
                { value: "35%", label: "Session Duration", sub: "Easier navigation flow" },
                { value: "25%", label: "Bounce Rate Reduction", sub: "Faster page loads" },
                { value: "60%", label: "Rise in Dealer Inquiries", sub: "Better CTA visibility" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-amber-50 flex flex-col items-center text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-1">{stat.value}</div>
                  <div className="text-base font-bold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 h-full">
                <BarChart3 className="text-amber-500 w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="mb-2">Performance Milestone</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Achieved a cleaner codebase and improved performance scores across all devices, ensuring the website remains competitive in the modern home décor market.</p>
                </div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 h-full">
                <Users className="text-amber-500 w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="mb-2">Lead Ecosystem</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Integrated lead capture with a lightweight CRM setup to bridge the gap between digital interaction and physical dealership visits.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="bg-[#FDF8F2] rounded-3xl p-8 md:p-14 shadow-lg border border-amber-100 relative">
              <div className="absolute -top-2 -left-2 md:-top-6 md:-left-6 text-amber-200">
                <svg width="60" height="60" className="md:w-[80px] md:h-[80px]" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic relative z-10 mb-6 md:mb-8 mt-2 md:mt-0">
                “Isarva was pivotal in modernizing our website, ultimately resulting in a better user experience for our customers and greater accessibility for our team to manage the site. Their expertise helped us optimize performance, streamline lead generation, and align the website with our brand vision.”
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl flex-shrink-0">
                  B
                </div>
                <div>
                  <h5 className="md:text-lg">Management Team</h5>
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-bold">Beth Living</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-10 lg:py-16 bg-[#FDF8F2] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <h2 className="mb-6 capitalize">Need a Redesign Partner?</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Are you not able to achieve your business goals with your existing website? A modern UI/UX refresh and performance optimization by Isarva can help you serve your customers better.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="press-illusion-btn-orange bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-orange-500/30 flex items-center gap-2">
                Discuss Your Project <ArrowRight size={18} />
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-400 font-medium tracking-wide italic">
              www.isarvait.com • Turning Digital Visions into Reality
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}