"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";
import CRMBrochureModal from "../../components/CRMBrochureModal";

const SKY = "#0EA5E9";
const SKY_DARK = "#0284C7";
const BLUE = "#3B82F6";

const howItWorksData = [
  {
    title: "Capture Leads",
    desc: "Collect and organize leads from various sources effortlessly.",
    icon: "🎯"
  },
  {
    title: "Track Opportunities",
    desc: "Convert leads into deals and monitor project progress.",
    icon: "📈"
  },
  {
    title: "Manage Deals & Activities",
    desc: "Handle deals, tasks, meetings, and follow-ups in one place.",
    icon: "💼"
  },
  {
    title: "Create Quotations",
    desc: "Generate and share professional quotations quickly.",
    icon: "📄"
  },
  {
    title: "Build Relationships",
    desc: "Maintain complete customer history across all your devices.",
    icon: "🤝"
  }
];

const whyChooseData = [
  { title: "Industry-Specific Solutions", desc: "Tailored CRM features for different business needs.", icon: "🏢" },
  { title: "Dedicated Support Team", desc: "Expert assistance whenever required.", icon: "🎧" },
  { title: "Customizable Modules", desc: "Adapt CRM to your unique workflow.", icon: "⚙️" },
  { title: "Scalable Architecture", desc: "A platform that grows with your business.", icon: "🚀" },
  { title: "Secure Access Control", desc: "Control user permissions and data visibility.", icon: "🔐" },
  { title: "Quick User Adoption", desc: "Easy to learn and implement for any team.", icon: "✨" }
];

const faqData = [
  {
    question: "What is Isarva CRM and how can it benefit my business?",
    answer: "Isarva CRM is a comprehensive customer relationship management solution that helps businesses organize customer data, streamline sales processes, and improve customer interactions. It benefits your business by increasing sales efficiency, improving customer satisfaction, and providing valuable insights through analytics.",
    icon: "🎯",
    color: "#0EA5E9"
  },
  {
    question: "How long does implementation typically take?",
    answer: "Implementation time varies based on business size and complexity, but typically ranges from 2-6 weeks. Our structured implementation process ensures a smooth transition with minimal disruption to your operations.",
    icon: "⏱️",
    color: "#0EA5E9"
  },
  {
    question: "Can Isarva CRM integrate with my existing tools?",
    answer: "Yes, Isarva CRM offers extensive integration capabilities with popular business tools including email platforms, marketing automation software, accounting systems, and productivity apps. Our team will work with you to ensure seamless integration with your current tech stack.",
    icon: "🔗",
    color: "#0EA5E9"
  },
  {
    question: "What kind of training and support do you provide?",
    answer: "We provide comprehensive training during implementation, including administrator training, user training sessions, and detailed documentation. Ongoing support includes a dedicated customer success manager, technical support, and regular product updates.",
    icon: "🎧",
    color: "#0EA5E9"
  },
  {
    question: "Is my data secure with Isarva CRM?",
    answer: "Absolutely. We employ enterprise-grade security measures including data encryption, regular security audits, role-based access controls, and compliance with industry standards. Your data is stored in secure, redundant data centers with regular backups.",
    icon: "🔒",
    color: "#0EA5E9"
  },
  {
    question: "What pricing plans are available?",
    answer: "We offer flexible pricing plans to suit businesses of all sizes, from startups to enterprises. Plans are typically based on the number of users and features required. Contact our sales team for a customized quote based on your specific needs.",
    icon: "💰",
    color: "#0EA5E9"
  }
];

export default function ProductDetailPremiumCRMStaging({
  product,
  relatedProducts,
  allProducts,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* 1. Centered Hero Section */}
      <section className="relative pt-40 lg:pb-32 pb-10 overflow-hidden bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-white">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat"
          }}
        ></div>

        {/* Sky Radial Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_600px_500px_at_center_45%,rgba(14,165,233,0.12)_0%,rgba(14,165,233,0.05)_50%,transparent_100%)] pointer-events-none"></div>

        {/* Additional Sky Glow Accents */}
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#0EA5E9] opacity-[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#0284C7] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full lg:container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold text-[#000000] leading-[1] mb-8">
              Cloud-Based CRM for<br />
              <span className="text-[#0EA5E9]">
                Sales Teams & Growing Businesses
              </span>
              <span style={{ color: SKY }}>.</span>
            </h1>
            <p className="text-base text-[#444444] mb-8 max-w-3xl mx-auto leading-relaxed">
              Isarva CRM is a cloud-based application designed to manage and nurture business relationships with leads, deals, companies, and contacts. It provides powerful tools for tracking opportunities, organizing customer data, and delivering actionable insights to improve sales performance and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="press-illusion-btn-orange bg-orange-600 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 flex cursor-pointer"
              >
                <span>REQUEST DEMO</span>
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
              </button>
            </div>
          </motion.div>
        </div>

        {/* Full Width Dashboard Animation with Wings */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-dashboard-wrapper"
        >
          <div className="dashboard-animation left">
            <div
              className="scroll-img"
              style={{
                backgroundImage: `url('/products/crm/CRM-slide-1.jpg'), url('/products/crm/CRM-slide-2.jpg')`
              }}
            ></div>
          </div>
          <div className="dashboard-animation right">
            <div
              className="scroll-img"
              style={{
                backgroundImage: `url('/products/crm/CRM-slide-3.jpg'), url('/products/crm/CRM-slide-4.jpg')`
              }}
            ></div>
          </div>
          <div className="dashboard-main-img">
            <div className="relative overflow-hidden  ">
              <img
                src="/products/crm/CRM-dashboard-v3.png"
                alt="CRM Dashboard"
                className="w-full object-contain lg:h-[668px] h-full shadow-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* App Download Badges (Static) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10  relative z-20"
        >
          {/* Google Play - Shadow Left */}
          <div className="border-2 border-black rounded-xl px-4 py-2 flex items-center gap-3 bg-white h-[60px] min-w-[200px] shadow-none transition-all hover:translate-x-[4px] hover:-translate-y-[4px] hover:shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] cursor-default">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
              alt="Google Play"
              className="w-8 h-8"
            />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-bold text-gray-600 uppercase">GET IT ON</span>
              <span className="text-xl font-bold text-black">Google Play</span>
            </div>
          </div>

          {/* App Store - Shadow Right */}
          <div className="border-2 border-black rounded-xl px-4 py-2 flex items-center gap-3 bg-white h-[60px] min-w-[200px] shadow-none transition-all hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-default">
            <img
              src="https://www.vectorlogo.zone/logos/apple/apple-icon.svg"
              alt="App Store"
              className="w-7 h-7 object-contain"
            />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-bold text-gray-600 uppercase">Download on the</span>
              <span className="text-xl font-bold text-black">App Store</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Why Businesses Need a CRM Section */}
      <section className="lg:py-32 py-14 bg-white">
        <div className="w-full lg:container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:text-left text-center">
            {/* Left Side - Image (Sticky on Desktop) */}
            <div className="relative lg:sticky lg:top-28 lg:self-start">
              <div
                className="relative z-10 cursor-zoom-in group"
                onClick={() => setSelectedImage("/products/crm/mockups/sync_overview.png")}
              >
                <img
                  src="/products/crm/mockups/sync_overview.png"
                  alt="CRM Sync Overview Mockup"
                  className="w-full h-auto max-h-[350px] lg:max-h-[500px] object-contain drop-shadow-2xl rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 rounded-2xl">
                  <div className="bg-white/90 p-2 rounded-full shadow-lg">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0EA5E9] opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#0EA5E9] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#000000] mb-6 leading-[1]">
                Why Businesses Need{" "}
                <span className="text-[#0EA5E9]">Isarva CRM</span>
              </h2>

              <p className="text-lg text-[#444444] mb-6 leading-relaxed">
                Isarva CRM helps businesses streamline their sales processes from lead generation to deal closure and ongoing customer engagement.
              </p>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center shadow-lg">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Centralized Customer Data
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Consolidate all customer information, interactions, and history in one accessible platform for better decision-making.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Improved Sales Performance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Track leads, manage deals, and monitor sales pipelines to identify opportunities and close more deals faster.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Enhanced Customer Relationships
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Build stronger relationships through personalized interactions and timely follow-ups based on comprehensive customer insights.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center shadow-lg">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Data-Driven Insights
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Leverage powerful analytics and reporting to understand customer behavior, forecast sales, and optimize strategies.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center shadow-lg">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Streamlined Operations
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Automate routine tasks, standardize processes, and improve team collaboration to increase productivity and reduce errors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center lg:justify-start">
                <button
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="press-illusion-btn-orange bg-orange-600 text-white font-bold px-6 py-2 text-base items-center space-x-2 inline-flex cursor-pointer"
                >
                  <span>Download Brochure</span>
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Vertical Tab Section: Powerful GO1 CRM Features */}
      <CRMTabSection setSelectedImage={setSelectedImage} />

      {/* 3. CRM Feature Section (Standard Orbit Layout) */}
      <div id="crm-features-section">
        <CRMFeatureSection />
      </div>

      {/* 4. How Isarva CRM Works Section */}
      <section className="py-10 lg:py-24 bg-white relative overflow-hidden">
        <div className="w-full lg:container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] font-black text-[#0EA5E9] tracking-[0.28em] uppercase mb-3 bg-white px-4 py-2 rounded-full border border-[#0EA5E9]/20 shadow-sm">
              PROCESS
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              How Isarva CRM Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {howItWorksData.map((step, i) => (
              <div key={i} className="relative text-center">
                {i < howItWorksData.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-sky-400 to-transparent z-0"></div>
                )}
                <div className="w-20 h-20 rounded-2xl bg-sky-50 flex items-center justify-center text-3xl mx-auto mb-6 relative z-10 border border-sky-100 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Isarva CRM Section */}
      <section className="py-10 lg:py-24 bg-slate-50 relative overflow-hidden">
        <div className="w-full lg:container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Why Choose Isarva CRM
            </h2>
            <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseData.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center lg:text-left">
                <div className="text-4xl mb-6 flex justify-center lg:justify-start">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-10 lg:py-24 bg-white relative overflow-hidden">
        <div className="w-full lg:container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-black text-[#0EA5E9] tracking-[0.28em] uppercase mb-3 bg-white px-4 py-2 rounded-full border border-[#0EA5E9]/20 shadow-sm">
                FAQ
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0a0a0a] leading-[1] mb-4">
                Everything you need to know
              </h2>
              <p className="text-[#6b7280] max-w-[600px] mx-auto text-base leading-relaxed">
                Get instant answers to common questions about our CRM platform.
                Click any question to expand and learn more.
              </p>
            </motion.div>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-10 lg:py-16 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-transparent to-blue-50"></div>

        <div className="w-full lg:container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-sky-400 to-blue-500 rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(14,165,233,0.2)]"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="relative z-10 px-8 md:px-16 py-10 md:py-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block text-xs font-black text-white/90 tracking-[0.25em] uppercase mb-4 bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm">
                  GET STARTED TODAY
                </span>

                <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-[1] mb-6">
                  Ready to test our new <br className="hidden md:block" />
                  CRM features?
                </h2>

                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join businesses using our CRM platform to manage leads, close deals, and build lasting customer relationships.
                  Download our brochure or schedule a personalized demo today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="press-illusion-btn-orange bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-3 transition-all hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Request Demo</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore More Products Section */}
      <section className="py-10 lg:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230EA5E9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="w-full lg:container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[10px] font-black text-[#0EA5E9] tracking-[0.28em] uppercase mb-3 bg-white px-4 py-2 rounded-full border border-[#0EA5E9]/20 shadow-sm">
                MORE PRODUCTS
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0a0a0a] leading-[1] mb-4">
                Explore Our More Products
              </h2>
              <p className="text-[#6b7280] max-w-[600px] mx-auto text-base leading-relaxed">
                Discover our comprehensive suite of software solutions designed to transform your business operations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {allProducts
              .filter(p => p.slug !== product.slug && !p.slug.includes("staging"))
              .slice(0, 3)
              .map((prod, index) => (
                <motion.div
                  key={prod.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link
                    href={`/product/${prod.slug}`}
                    className="block h-full"
                  >
                    <div className="relative rounded-3xl p-8 h-full bg-white border-2 border-gray-100 shadow-lg flex flex-col">
                      <div className="relative text-center md:text-left flex-grow">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0">
                          <span className="text-3xl">{prod.icon}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {prod.title}
                        </h3>

                        {/* Tagline */}
                        {prod.tagline && (
                          <p className="text-[#0EA5E9] font-semibold mb-3">
                            {prod.tagline}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                          {prod.shortDescription}
                        </p>

                        {/* Category Badge */}
                        <div className="absolute -top-11 -right-2 bg-white text-[#0EA5E9] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#0EA5E9]/30 shadow-md">
                          {prod.category}
                        </div>
                      </div>

                      {/* CTA Link at bottom */}
                      <div className="flex items-center justify-center md:justify-start gap-2 text-[#0EA5E9] font-semibold mt-auto pt-4 border-t border-gray-50">
                        Explore Product
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>

          {/* View All Products CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/products"
              className="press-illusion-btn-orange bg-orange-600 text-white w-fit font-bold px-8 py-4 text-base items-center space-x-2 flex cursor-pointer mx-auto"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem={product.title}
        allItems={allProducts}
      />

      <CRMBrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />

      {/* Image Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full flex justify-center"
            >
              <img
                src={selectedImage}
                alt="Product Preview"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 lg:-right-12 text-white hover:text-sky-400 transition-colors"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFaqItem = (faq, index) => {
    const isOpen = openIndex === index;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
        className={`group relative bg-white border-2 transition-all duration-300 overflow-hidden h-full flex flex-col ${isOpen
          ? "border-[#0EA5E9] shadow-[0_8px_30px_rgba(14,165,233,0.15)]"
          : "border-gray-200 hover:border-gray-300 hover:shadow-md"
          }`}
        style={{
          borderRadius: "20px",
        }}
      >
        {/* Gradient Accent Bar */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          style={{
            background: "linear-gradient(180deg, #0EA5E9 0%, #0284C7 100%)",
          }}
        />

        {/* Question Header */}
        <button
          onClick={() => toggleFaq(index)}
          className="w-full text-left px-6 py-5 flex items-start gap-4 transition-colors duration-200 flex-grow"
        >
          {/* Icon Circle */}
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${isOpen
              ? "bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] shadow-lg scale-110"
              : "bg-gray-100 group-hover:bg-gray-200"
              }`}
          >
            <span className={isOpen ? "filter drop-shadow" : ""}>
              {faq.icon}
            </span>
          </div>

          {/* Question Text */}
          <div className="flex-1 pt-1">
            <h3
              className={`text-[17px] font-bold transition-colors duration-200 pr-8 ${isOpen ? "text-[#0EA5E9]" : "text-[#0a0a0a] group-hover:text-[#0EA5E9]"
                }`}
            >
              {faq.question}
            </h3>
          </div>

          {/* Toggle Icon */}
          <div className="flex-shrink-0 mt-1">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen
                ? "bg-[#0EA5E9] rotate-180"
                : "bg-gray-100 group-hover:bg-gray-200 group-hover:rotate-180"
                }`}
            >
              <svg
                className={`w-5 h-5 transition-colors ${isOpen ? "text-white" : "text-gray-600"
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </button>

        {/* Answer Content with Animation */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pl-[24px]">
                <div className="pt-1 pb-2 border-t border-gray-100 mt-2">
                  <p className="text-[15px] text-[#555] leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
      {faqData.map((faq, index) => renderFaqItem(faq, index))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CRM FEATURE DATA (STANDARD ORBIT LAYOUT - NO TABS)
───────────────────────────────────────────────────────────── */
const crmFeatures = [
  {
    id: "leads",
    label: "Leads Management",
    icon: "🎯",
    color: "#0EA5E9",
    desc: "Capture, track, and nurture leads from multiple sources. Score leads based on engagement and readiness, and seamlessly convert qualified leads into opportunities for your sales team.",
    image: "/products/crm/Leads-management.jpg",
  },
  {
    id: "deals",
    label: "Deals Management",
    icon: "💼",
    color: "#0284C7",
    desc: "Manage the entire sales pipeline from opportunity to closure. Track deal stages, assign values, set probabilities, and forecast revenue with visual pipeline management and customizable deal stages.",
    image: "/products/crm/Deals-management.jpg",
  },
  {
    id: "companies",
    label: "Company Management",
    icon: "🏢",
    color: "#3B82F6",
    desc: "Maintain comprehensive company profiles with detailed information, interaction history, and hierarchical relationships. Link companies to contacts, deals, and activities for complete visibility.",
    image: "/products/crm/Company-management.jpg",
  },
  {
    id: "contacts",
    label: "Contact Person Management",
    icon: "👥",
    color: "#0EA5E9",
    desc: "Build and maintain a centralized database of contact persons with complete profiles, communication preferences, interaction history, and relationship mapping to companies and deals.",
    image: "/products/crm/Contact-Person.jpg",
  },
  {
    id: "analytics",
    label: "Reporting & Analytics",
    icon: "📊",
    color: "#0284C7",
    desc: "Access powerful dashboards and reports to track sales performance, conversion rates, pipeline health, and revenue forecasts. Generate custom reports and export data for deeper analysis.",
    image: "/products/crm/Analytics-Reports.jpg",
  },
  {
    id: "user-access",
    label: "User Management & Access Control",
    icon: "🔐",
    color: "#3B82F6",
    desc: "Manage team members with role-based permissions, control data access, and define workflows. Assign territories, set quotas, and monitor individual and team performance metrics.",
    image: "/products/crm/User-Management.jpg",
  },
  {
    id: "meeting-calendar",
    label: "Meeting Calendar",
    icon: "📅",
    color: "#0EA5E9",
    desc: "Schedule and manage meetings with clients and team members. Sync with your calendar, set reminders, track meeting outcomes, and maintain a complete history of all customer interactions and appointments.",
    image: "/products/crm/Calender.jpg",
  },
];

/* ─────────────────────────────────────────────────────────
   CRM FEATURE SECTION (STANDARD ORBIT LAYOUT)
──────────────────────────────────────────────────────────── */
function CRMFeatureSection() {
  const [activeId, setActiveId] = useState("leads");
  const [mobileOpenId, setMobileOpenId] = useState("leads");

  const leftFeatures = crmFeatures.slice(0, Math.ceil(crmFeatures.length / 2));
  const rightFeatures = crmFeatures.slice(Math.ceil(crmFeatures.length / 2));
  const activeFeature = crmFeatures.find((f) => f.id === activeId) || crmFeatures[0];

  return (
    <section className="py-10 lg:py-20 overflow-hidden bg-[#F7F7F7]">
      <div className="w-full lg:container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="block text-[10px] font-black text-[#0EA5E9] tracking-[0.28em] uppercase mb-2.5">
            SOFTWARE FEATURES
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0a0a0a] leading-[1] mb-3.5">
            Key Features Of <span className="text-[#0EA5E9]">CRM</span> Application
          </h2>
          <p className="text-[#6b7280] max-w-[520px] mx-auto text-[15px] leading-relaxed">
            Comprehensive customer relationship management features designed to drive sales excellence and customer satisfaction.
          </p>
        </div>

        {/* ── DESKTOP ORBIT (xl and above) ── */}
        <div className="hidden xl:block">
          <div className="relative h-[605px] mx-auto xl:w-[80%] lg:w-full">
            {/* Sky arc ellipse */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] rounded-full border-[1.5px] pointer-events-none z-0"
              style={{ borderColor: 'rgba(14, 165, 233, 0.42)' }}
            />

            {/* Left column */}
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 flex flex-col items-end gap-10 z-10 w-[280px]">
              {leftFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold ${activeId === feature.id
                    ? "bg-gray-900 text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "text-gray-800 hover:shadow-md"
                    }`}
                  style={{ borderColor: activeId === feature.id ? feature.color : '#e5e7eb' }}
                >
                  <span className="text-sm leading-none">{feature.icon}</span>
                  <span className="max-w-[180px] truncate">{feature.label}</span>
                  {activeId === feature.id && (
                    <span 
                      className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[7px]" 
                      style={{ borderLeftColor: '#111827' }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 2xl:w-[72%] lg:w-[70%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full h-full rounded-xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.15)]"
                >
                  <img
                    src={activeFeature.image}
                    alt={activeFeature.label}
                    className="w-full h-full object-contain bg-white"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right column */}
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 flex flex-col items-start gap-10 z-10 w-[280px]">
              {rightFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[13px] font-semibold ${activeId === feature.id
                    ? "bg-gray-900 text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "text-gray-800 hover:shadow-md"
                    }`}
                  style={{ borderColor: activeId === feature.id ? feature.color : '#e5e7eb' }}
                >
                  <span className="max-w-[180px] truncate">{feature.label}</span>
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {activeId === feature.id && (
                    <span 
                      className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[7px]" 
                      style={{ borderRightColor: '#111827' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mt-3 pb-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeId + "-d"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
                className="text-center text-[#6b7280] max-w-[600px] mx-auto text-sm leading-relaxed"
              >
                {activeFeature.desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* ── TABLET LAYOUT (lg to xl) ── */}
        <div className="hidden lg:block xl:hidden">
          {/* Navigation buttons on top */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {crmFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`flex items-center gap-2 py-2.5 px-5 rounded-lg font-semibold text-sm transition-all duration-200 ${activeId === feature.id
                    ? "text-white shadow-lg scale-105"
                    : "bg-white border border-gray-200 text-gray-700 hover:shadow-md"
                    }`}
                  style={{ 
                    backgroundColor: activeId === feature.id ? feature.color : 'white',
                    borderColor: activeId === feature.id ? feature.color : '#e5e7eb'
                  }}
                >
                  <span className="text-base">{feature.icon}</span>
                  <span>{feature.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Center image display */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="rounded-xl overflow-hidden shadow-2xl bg-white"
              >
                <img
                  src={activeFeature.image}
                  alt={activeFeature.label}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeId + "-desc"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
                className="text-center text-[#6b7280] max-w-[600px] mx-auto text-sm leading-relaxed"
              >
                {activeFeature.desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* ── MOBILE ACCORDION ── */}
        <div className="lg:hidden border-t border-gray-200">
          {crmFeatures.map((feature) => {
            const isOpen = mobileOpenId === feature.id;
            return (
              <div key={feature.id} className="border-b border-gray-200">
                <button
                  onClick={() => setMobileOpenId(isOpen ? null : feature.id)}
                  className="group w-full flex items-center justify-between p-4 bg-transparent border-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-200 ${isOpen
                        ? "bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] shadow-md scale-110"
                        : "bg-gray-100"
                        }`}
                    >
                      <span className={isOpen ? "filter drop-shadow" : ""}>
                        {feature.icon}
                      </span>
                    </div>
                    <span className={`font-semibold text-sm ${isOpen ? "text-[#0EA5E9]" : "text-gray-800"}`}>
                      {feature.label}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-[#0EA5E9] rotate-180" : "bg-gray-100"
                      }`}
                  >
                    <svg
                      className={`w-4 h-4 ${isOpen ? "text-white" : "text-gray-600"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-3">
                          <img
                            src={feature.image}
                            alt={feature.label}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CRM TAB SECTION (VERTICAL TABS)
───────────────────────────────────────────────────────────── */
const crmTabData = [
  {
    id: "lead",
    title: "Lead Management",
    subtitle: "Capture, organize, and convert leads instantly.",
    description: "Capture, organize, and convert leads instantly using the mobile CRM app. Lead creation and capture are seamless from mobile or web.",
    color: "from-[#0EA5E9] to-[#2563EB]",
    points: [
      { label: "Lead creation", text: "Create and capture leads instantly from mobile or web." },
      { label: "Lead Tracking", text: "Track lead progress and sources across the sales funnel." }
    ],
    image: "/products/crm/mockups/leads_mobile.png"
  },
  {
    id: "pipeline",
    title: "Deal & Pipeline Management",
    subtitle: "Visualize your entire sales funnel in real-time.",
    description: "Visualize your entire sales funnel using powerful sales pipeline software designed for real-time tracking of deal value and probability.",
    color: "from-[#8B5CF6] to-[#6D28D9]",
    points: [
      { label: "Visual deal stages", text: "View and move deals easily across each sales stage." },
      { label: "Opportunity tracking", text: "Track deal value, probability, and progress in real time." }
    ],
    image: "/products/crm/mockups/deals_mobile.png"
  },
  {
    id: "customer",
    title: "Customer Management",
    subtitle: "A centralized CRM for small business teams.",
    description: "A centralized CRM for small business teams to manage customer data, interactions, and sales history in one place with detailed profiles.",
    color: "from-[#F59E0B] to-[#D97706]",
    points: [
      { label: "Customer Profiles", text: "Store all customer details in one centralized profile." },
      { label: "Sales & Activity History", text: "View past sales, interactions, and follow-ups easily." }
    ],
    image: "/products/crm/mockups/customer_mobile_v2.png"
  },
  {
    id: "quotation",
    title: "Quotations & Sales Orders",
    subtitle: "Turn opportunities into revenue smoothly.",
    description: "Turn opportunities into revenue smoothly using mobile-friendly sales tools. Create and track quotes and sales orders efficiently.",
    color: "from-[#10B981] to-[#059669]",
    points: [
      { label: "Quote & Order Tracking", text: "Create and track quotes and sales orders." },
      { label: "Order Status Tracking", text: "Track order status from start to finish." }
    ],
    image: "/products/crm/mockups/quotations_v2.png"
  },
  {
    id: "tasks",
    title: "Tasks & Schedules",
    subtitle: "Monitor tasks, meetings, and schedules in real time.",
    description: "Use Isarva CRM as a sales tracking app to monitor tasks, meetings, and follow-ups in real time, linked to leads and customers.",
    color: "from-[#EC4899] to-[#DB2777]",
    points: [
      { label: "Task Scheduling", text: "Plan and track daily tasks and meetings easily." },
      { label: "Linked Activities", text: "Manage activities connected to leads, deals, and customers." }
    ],
    image: "/products/crm/mockups/tasks_mobile.png"
  },
  {
    id: "mobile",
    title: "Android CRM App",
    subtitle: "A powerful Android mobile CRM app.",
    description: "A powerful Android mobile CRM app designed for real-world sales execution with real-time sync between mobile and web.",
    color: "from-[#3B82F6] to-[#1D4ED8]",
    points: [
      { label: "Android-First App", text: "Built for smooth, mobile-first sales execution." },
      { label: "Real-Time Sync", text: "Sync data instantly between mobile and web." }
    ],
    image: "/products/crm/mockups/sync_overview_v2.png"
  }
];

function CRMTabSection({ setSelectedImage }) {
  const [activeTab, setActiveTab] = useState(crmTabData[0].id);
  const currentTab = crmTabData.find(t => t.id === activeTab);

  const scrollToTab = (tabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(`crm-tab-${tabId}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <section className="py-16 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="w-full lg:container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Powerful <span className="text-[#0EA5E9]">Isarva CRM</span> Features
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base lg:text-lg leading-relaxed">
            Isarva CRM provides powerful tools to manage leads, pipelines, tasks, and customer relationships — all in one scalable cloud-based platform.
          </p>
        </div>

        {/* Mobile Sticky Tab Bar (HRMS Style) */}
        <div className="lg:hidden sticky top-[102px] z-[60] bg-white border-b border-gray-200 -mx-6 mb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex overflow-x-auto no-scrollbar py-2 scroll-smooth" style={{ scrollPadding: '1.5rem' }}>
              {crmTabData.map((tab) => (
                <button
                  key={tab.id}
                  id={`crm-tab-${tab.id}`}
                  onClick={() => scrollToTab(tab.id)}
                  className={`flex-shrink-0 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 mr-4 ${activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Desktop Sidebar (Left Side) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-3">
            {crmTabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border-2 ${activeTab === tab.id
                  ? `bg-gradient-to-br ${tab.color} border-transparent shadow-xl translate-x-2`
                  : "bg-white/40 border-transparent hover:bg-white/60"
                  }`}
              >
                <h3 className={`text-lg lg:text-xl font-bold ${activeTab === tab.id ? "text-white" : "text-gray-900"}`}>
                  {tab.title}
                </h3>
                <p className={`text-sm mt-1 line-clamp-1 ${activeTab === tab.id ? "text-white/80" : "text-gray-500"}`}>{tab.subtitle}</p>
              </button>
            ))}
          </div>

          {/* Right Side: Content Area */}
          <div className="lg:col-span-8 relative">
            {/* Dynamic Gradient Glow Shadow */}
            <div className={`absolute -inset-4 bg-gradient-to-br ${currentTab.color} opacity-20 blur-2xl rounded-[40px] transition-all duration-700`}></div>

            <div className="bg-white rounded-[24px] lg:rounded-[32px] p-6 lg:p-12 shadow-xl border border-slate-100 min-h-[500px] lg:min-h-[650px] relative overflow-hidden flex flex-col justify-center">
              {/* Edge Shades / Decorative Blobs */}
              <div className={`absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br ${currentTab.color} opacity-[0.07] rounded-full blur-[80px]`}></div>
              <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${currentTab.color} opacity-[0.07] rounded-full blur-[80px]`}></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center w-full relative z-10"
                >
                  {/* Content */}
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4">{currentTab.title}</h3>
                    <p className="text-sm lg:text-base text-gray-600 mb-6 lg:mb-8 leading-relaxed">{currentTab.description}</p>

                    <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-10">
                      {currentTab.points.map((pt, i) => (
                        <div key={i} className="flex gap-4">
                          <div className={`w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-br ${currentTab.color} flex items-center justify-center flex-shrink-0 mt-1`}>
                            <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-xs lg:text-sm mb-0.5">{pt.label}</p>
                            <p className="text-gray-500 text-xs lg:text-sm leading-snug">{pt.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image with Popup trigger */}
                  <div className="relative order-1 md:order-2">
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentTab.color} opacity-10 blur-3xl rounded-full`}></div>
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="relative z-10 cursor-zoom-in group"
                      onClick={() => setSelectedImage(currentTab.image)}
                    >
                      <img
                        src={currentTab.image}
                        alt={currentTab.title}
                        className="w-full h-auto max-h-[350px] lg:max-h-[500px] object-contain drop-shadow-2xl rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 rounded-2xl">
                        <div className="bg-white/90 p-2 rounded-full shadow-lg">
                          <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}



