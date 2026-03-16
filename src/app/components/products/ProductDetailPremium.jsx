"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import ContactFormModal from "../../components/ContactFormModal";

const ZOHO_RED = "#E24343";
const ZOHO_DARK = "#4B4B4B";
const ZOHO_GREY = "#F5F5F5";

// Helper for segmented features data
const getSegmentItems = (segment) => {
  const data = {
    "travel-expense": [
      {
        title: "Business travel simplified: Book smart, save big.",
        desc: "Book flights, hotels, cabs, and trains with our new-age online booking tool, giving you access to the widest range of inventory. Enjoy unmatched control, incredible savings, and exclusive perks, all while staying within company policies.",
        icon: "✈️",
      },
      {
        title: "Receipts to reimbursements: Automation that works for you.",
        desc: "Scan receipts on the go and let AI categorize them automatically. Speed up approvals and ensure timely reimbursements for your team.",
        icon: "🧾",
      },
      {
        title: "Automate card reconciliation: Any bank, any card.",
        desc: "Connect your corporate cards and watch transactions flow in. Matches expenses automatically to save hours of manual work.",
        icon: "💳",
      },
    ],
    "procure-to-pay": [
      {
        title: "Centralized Procurement: Buy what you need, when you need it.",
        desc: "Streamline your purchasing process from request to delivery. Maintain a central catalog and track every order in real-time.",
        icon: "📦",
      },
      {
        title: "Vendor Management: Build stronger relationships.",
        desc: "Manage all your vendors in one place. Track performance, handle contracts, and ensure compliance easily.",
        icon: "👥",
      },
    ],
    payroll: [
      {
        title: "Error-free Payroll: Pay your team on time, every time.",
        desc: "Automate complex calculations, handle tax filings, and disburse salaries with a single click. Compliance is built-in.",
        icon: "💰",
      },
      {
        title: "Employee Self-Service: Empower your workforce.",
        desc: "Give your employees access to payslips, tax declarations, and reimbursement status through a dedicated portal.",
        icon: "📱",
      },
    ],
  };
  return data[segment] || [];
};

export default function ProductDetailPremium({
  product,
  relatedProducts,
  allProducts,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSegment, setActiveSegment] = useState("travel-expense");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);

      const sections = [
        "travel-expense",
        "procure-to-pay",
        "payroll",
        "security",
        "pricing",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSegment(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white font-sans selection:bg-red-100 selection:text-red-900">
      {/* 1. Centered Hero Section with Zoho Side-Animations */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-premium-noise opacity-5 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_550px_450px_at_center_55%,#fbe8e7_50%,rgba(255,199,64,0)_100%)] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[32px] md:text-[50px] font-extrabold text-[#000000] leading-tight mb-8">
              One platform. Every <br />
              <span className="text-[#2bc735]">
                {product.title.split(" ")[0]}
              </span>{" "}
              <span className="text-[#000000]">
                {product.title.split(" ").slice(1).join(" ")} under control
              </span>
              <span style={{ color: ZOHO_RED }}>.</span>
            </h1>
            <p className="text-base text-[#444444] mb-8 max-w-3xl mx-auto leading-relaxed">
              {product.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                prefetch={true}
                className="press-illusion-btn bg-green-400 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 hidden md:flex"
              >
                <span> SIGN UP FOR FREE</span>
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
                href="/contact"
                prefetch={true}
                className="press-illusion-btn bg-green-400 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 hidden md:flex"
              >
                <span> REQUEST DEMO</span>
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
            <div className="scroll-img"></div>
          </div>
          <div className="dashboard-animation right">
            <div className="scroll-img"></div>
          </div>
          <div className="dashboard-main-img">
            <div className="relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] bg-white">
              <img
                src="/dashboard.webp"
                alt="Dashboard Preview"
                className="w-full object-contain h-[668px] shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </section>{" "}
      {/* 2. Take Control Section (Segmented features) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[50px] font-extrabold text-[#000000] mb-6 leading-tight">
              Take control of every{" "}
              <span className="text-[#E24343]">business spend</span>
              <span className="text-[#000000]">.</span>
            </h2>
            <p className="text-lg text-[#444444] max-w-4xl mx-auto leading-relaxed">
              Zoho Spend is the industry-first, complete spend management
              platform. It unifies travel, expense, procurement, AP automation,
              and payroll, giving businesses the power to track, control, and
              save on all business spending.
            </p>
          </div>

          <div className="flex justify-center mb-20">
            <div className="bg-[#4B4B4B] p-1.5 rounded-full flex gap-1">
              {[
                { id: "travel-expense", label: "Travel & Expense" },
                { id: "procure-to-pay", label: "Procure-to-Pay" },
                { id: "payroll", label: "Payroll" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSegment(tab.id)}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                    activeSegment === tab.id
                      ? "bg-[#E24343] text-white shadow-lg"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[600px]">
            {/* Left side: Mockup */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSegment}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="bg-[#EAEAEA] rounded-[2rem] p-10 md:p-16 shadow-inner aspect-[4/3] flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-4">
                    {/* Mockup content based on activeSegment */}
                    <div className="w-full h-full bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex flex-col p-6">
                      {activeSegment === "travel-expense" && (
                        <div className="space-y-4">
                          <div className="h-8 w-1/3 bg-green-500 rounded-md mb-8 flex items-center px-4 text-white text-xs font-bold">
                            Ticket Booked
                          </div>
                          <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                          <div className="h-32 w-full bg-gray-100 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400 text-sm font-medium">
                              Booking Confimation
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                      )}
                      {activeSegment === "procure-to-pay" && (
                        <div className="space-y-4">
                          <div className="h-8 w-1/3 bg-blue-500 rounded-md mb-8 flex items-center px-4 text-white text-xs font-bold">
                            PO #4521 Approved
                          </div>
                          <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                          <div className="h-40 w-full bg-gray-100 rounded-lg p-4">
                            <div className="flex justify-between mb-4">
                              <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                              <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 w-full bg-gray-200 rounded"></div>
                              <div className="h-2 w-full bg-gray-200 rounded"></div>
                              <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeSegment === "payroll" && (
                        <div className="space-y-4">
                          <div className="h-8 w-1/3 bg-orange-500 rounded-md mb-8 flex items-center px-4 text-white text-xs font-bold">
                            Payroll Processed
                          </div>
                          <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                            <div className="space-y-2">
                              <div className="h-3 w-32 bg-gray-300 rounded"></div>
                              <div className="h-2 w-24 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                          <div className="h-32 w-full bg-blue-50 rounded-lg flex flex-col justify-center px-6">
                            <div className="text-[#000] text-lg font-bold">
                              Net Pay: $25,432.00
                            </div>
                            <div className="text-blue-600 text-xs mt-1">
                              Disbursed on July 30, 2024
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right side: Accordion list */}
            <div>
              <div className="mb-2">
                <span className="text-[10px] font-black text-[#E24343] uppercase tracking-[0.3em]">
                  {activeSegment.replace(/-/g, " ")}
                </span>
              </div>
              <div className="space-y-6">
                {getSegmentItems(activeSegment).map((item, idx) => (
                  <div
                    key={idx}
                    className="border-b border-gray-100 pb-6 transition-all"
                  >
                    <button
                      className="w-full flex items-start gap-4 text-left group"
                      onClick={() => {}}
                    >
                      <div className="mt-1 w-12 h-12 bg-[#333] rounded-lg flex items-center justify-center text-white shrink-0 group-hover:bg-[#E24343] transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-extrabold text-black group-hover:text-[#E24343] transition-colors">
                            {item.title}
                          </h3>
                          {idx === 0 && (
                            <svg
                              className="w-5 h-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                              />
                            </svg>
                          )}
                        </div>
                        {idx === 0 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            className="overflow-hidden"
                          >
                            <p className="text-[#555] leading-relaxed mb-4">
                              {item.desc}
                            </p>
                            <Link
                              href="#"
                              className="text-xs font-bold text-gray-500 border-b border-gray-300 hover:text-[#E24343] hover:border-[#E24343] transition-all pb-1 inline-flex items-center gap-2"
                            >
                              Explore {activeSegment.replace(/-/g, " ")}{" "}
                              <span className="text-lg">›</span>
                            </Link>
                          </motion.div>
                        )}
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trusted By Section (Small logos beneath) */}
          <div className="text-center mt-32">
            <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.5em] mb-12">
              Trusted by users across the world
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-30 grayscale hover:opacity-80 transition-opacity">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                className="h-6"
                alt="Amazon"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                className="h-6"
                alt="Google"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                className="h-8"
                alt="IBM"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                className="h-6"
                alt="Netflix"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg"
                className="h-6"
                alt="Slack"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 3. Feature Grid (Restored & Polished) */}
      <section className="py-32 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#000000] mb-6">
            Everything your business needs
            <span className="text-[#E24343]">.</span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {product.features.slice(0, 4).map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-50 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-red-50 text-[#E24343] rounded-xl flex items-center justify-center mb-6 font-black">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Seamlessly integrated solution designed to automate high-volume
                processes and reduce manual errors.
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* 4. Security Section (Restored & Polished) */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full font-bold text-xs mb-8 tracking-widest uppercase">
            SECURE & COMPLIANT
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 leading-tight">
            Truly global and enterprise ready
            <span className="text-[#E24343]">.</span>
          </h2>
          <p className="text-xl text-[#444444] leading-relaxed mb-16 px-4">
            Your data is protected by bank-level security. We are SOC 2, GDPR,
            and ISO compliant, ensuring your financial information is always
            safe and private.
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-30 px-6">
            <span className="font-black text-2xl tracking-tighter">
              ISO 27001
            </span>
            <span className="font-black text-2xl tracking-tighter">
              SOC 2 TYPE II
            </span>
            <span className="font-black text-2xl tracking-tighter">GDPR</span>
            <span className="font-black text-2xl tracking-tighter">HIPAA</span>
          </div>
        </div>
      </section>
      {/* 5. Final CTA / Pricing Section */}
      <section className="py-32 bg-[#4B4B4B] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-10">
            Start your journey today<span className="text-[#E24343]">.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
            Get started for free or schedule a personalized walkthrough with our
            product specialists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-12 py-5 bg-[#E24343] text-white font-extrabold text-xl rounded-full hover:scale-105 transition-all shadow-xl shadow-red-900/40"
            >
              SIGN UP FOR FREE
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-12 py-5 border-2 border-white text-white font-extrabold text-xl rounded-full hover:bg-white/10 transition-all"
            >
              BOOK A DEMO
            </button>
          </div>
        </div>
      </section>
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem={product.title}
        allItems={allProducts}
      />
    </div>
  );
}

function FeatureShowcase() {
  const [index, setIndex] = useState(0);

  const slides = [
    { title: "Dashboard", img: "/hrms_dashboard_mockup_1773468510844.png" },
    {
      title: "Analytics",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Team Management",
      img: "https://images.unsplash.com/photo-1522210349136-f81513460b7d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Mobile Access",
      img: "https://images.unsplash.com/photo-151242855908e-56035ceaf52c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Payroll Control",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative pt-10">
      <div className="flex items-center justify-center gap-4 mb-12">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-300 rounded-full ${index === i ? "w-12 bg-[#E24343]" : "w-4 bg-gray-200"}`}
          />
        ))}
      </div>

      <div className="relative h-[400px] md:h-[600px] flex items-center justify-center perspective-1000">
        <AnimatePresence initial={false}>
          {slides.map((slide, i) => {
            let offset = i - index;
            if (offset > 2) offset -= slides.length;
            if (offset < -2) offset += slides.length;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            if (!isVisible && !isCenter) return null;

            return (
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, x: offset * 500, scale: 0.8 }}
                animate={{
                  opacity: isCenter ? 1 : 0.6,
                  x:
                    offset *
                    (typeof window !== "undefined" && window.innerWidth < 768
                      ? 200
                      : 550),
                  scale: isCenter ? 1 : 0.85,
                  zIndex: isCenter ? 10 : 5,
                  filter: isCenter ? "blur(0px)" : "blur(4px)",
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="absolute w-full max-w-[1100px] cursor-pointer px-4"
                onClick={() => {
                  if (offset !== 0) setIndex(i);
                }}
              >
                <div
                  className={`rounded-[3rem] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.22)] border-[8px] border-white bg-white transition-all duration-500 ${isCenter ? "ring-1 ring-gray-100" : "grayscale-[40%] opacity-70"}`}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-auto"
                  />
                </div>
                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-28 left-1/2 -translate-x-1/2 text-center w-full"
                  >
                    <h4 className="text-4xl font-black text-gray-900 tracking-tight">
                      {slide.title}
                    </h4>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <svg
            className="w-6 h-6 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-4 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
