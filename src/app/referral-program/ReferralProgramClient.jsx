"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ChevronDown,
  Gift,
  Check,
  User,
  Phone,
  Building2,
  MessageSquare,
  HelpCircle,
  TrendingUp,
  Award,
  Users2,
  DollarSign,
  AlertCircle,
  Share2,
  Presentation,
  BadgeIndianRupee,
  FileSignature,
  ClipboardList
} from "lucide-react";


const PRODUCT_STEPS = [
  {
    n: "1",
    title: "Share your referral link",
    desc: "Send your unique referral link to business owners, HRs, or decision-makers who need to automate and streamline their business operations.",
    icon: Share2,
    image: "/images/referral_product_1_share.png"
  },
  {
    n: "2",
    title: "We qualify and demo",
    desc: "Our product experts will immediately connect with the lead, set up a personalized product demo, and handle all the follow-ups.",
    icon: Presentation,
    image: "/images/referral_product_2_demo.png"
  },
  {
    n: "3",
    title: "They subscribe, you earn",
    desc: "You get paid once they become a paying customer. For annual subscriptions, you receive your full referral reward upfront!",
    icon: BadgeIndianRupee,
    image: "/images/referral_product_3_earn.png"
  },
];

const SERVICE_STEPS = [
  {
    n: "1",
    title: "Share your referral link",
    desc: "Introduce us to businesses, startups, or brands looking to launch a new website, redesign an existing one, or scale their digital presence.",
    icon: Share2,
    image: "/images/referral_service_1_share.png"
  },
  {
    n: "2",
    title: "We define SoW and Timeline",
    desc: "Our consulting team connects with the lead to understand their exact project requirements. We handle everything—from drafting the Statement of Work (SoW) to mapping out clear project milestones and timelines.",
    icon: FileSignature,
    image: "/images/referral_service_2_sow.png"
  },
  {
    n: "3",
    title: "One-time setup, you earn",
    desc: "Once the project is approved, the \"One-time Setup\" or \"Website Development & Implementation\" contract is finalized, and the initial advance invoice is cleared, your reward is unlocked!",
    icon: ClipboardList,
    image: "/images/referral_service_3_earn.png"
  },
];

const THINGS_TO_KNOW = [
  {
    title: "Who can join?",
    text: "Anyone can refer! You don’t need to be an active iSarva customer or have a login to start earning.",
    color: "#34d399", // green
    icon: Users2
  },
  {
    title: "Referral Eligibility",
    text: "Referred businesses must be new prospects and should not already be engaged in active discussions with iSarva.",
    color: "#a78bfa", // purple
    icon: Award
  },
  {
    title: "What counts as a valid lead?",
    text: "A legally registered company with a functional business setup and a valid corporate email address belonging to an active decision-maker.",
    color: "#fb923c", // orange
    icon: Building2
  },
  {
    title: "What you don't need to do",
    text: "No sales chasing, no software demo booking, and no technical paperwork. Our team takes care of all client onboarding, scoping, and closures.",
    color: "#38bdf8", // blue
    icon: HelpCircle
  },
  {
    title: "How tracking works",
    text: "Referral progress updates will be shared periodically via email, WhatsApp, or your registered communication channel.",
    color: "#34d399", // green
    icon: TrendingUp
  }
];

const WHY_POINTS = [
  { text: "Multiple business solutions under one roof" },
  { text: "HRMS, CRM, Support & Billing Solutions" },
  { text: "Website Design, Redesign & Digital Marketing Services" },
  { text: "Dedicated implementation and support team" },
  { text: "Transparent referral process and payouts" }
];

const FAQS = [
  {
    q: "Do I need to be an iSarva client to refer?",
    a: "No, our referral program is completely open to tech enthusiasts, freelancers, agency owners, and anyone within our network."
  },
  {
    q: "What is the difference between Product and Service referrals?",
    a: "Products (like HRMS and CRM) involve software subscription models and demo sessions. Services (like Web Development and Digital Marketing) are custom-tailored solutions based on a dedicated Statement of Work (SoW), fixed project timelines, and a one-time setup fee."
  },
  {
    q: "When do I get paid?",
    a: "Product rewards are paid out based on demo and subscription milestones. Service rewards are disbursed as soon as the client signs the project agreement and pays the initial deployment/implementation invoice."
  },
  {
    q: "Is there a limit to how much I can earn?",
    a: "Absolutely not. You can refer to as many businesses as you like across all our software products and digital services."
  }
];

export default function ReferralProgramClient() {
  const router = useRouter();

  // Active workflow tab
  const [activeWorkflow, setActiveWorkflow] = useState("products"); // "products" | "services"

  // Form States
  const [step, setStep] = useState(1); // 1 = Email only, 2 = Rest of details
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // FAQ Accordion State
  const [activeFAQIndex, setActiveFAQIndex] = useState(0);

  useEffect(() => {
    router.prefetch("/thank-you");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    setErrorMessage("");
    setStep(2);
  };

  const handleSubmitAll = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: "Referral Program Registration",
          message: formData.message || "Request to join the Referral Program.",
          pageType: "Referral Program",
          itemName: "Referral Program",
          categoryId: 60
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        if (window.dataLayer) {
          window.dataLayer.push({ event: "enquiry_success" });
        }
        setTimeout(() => {
          router.push("/thank-you?type=referral&item=Referral%20Program");
        }, 1500);
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          typeof data.error === "string"
            ? data.error
            : "Something went wrong. Please try again."
        );
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToHeroForm = useCallback(() => {
    const emailField = document.getElementById("hero-email");
    if (emailField) {
      emailField.scrollIntoView({ behavior: "smooth", block: "center" });
      emailField.focus();
    }
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .shimmer-title {
          background: linear-gradient(90deg, #6d28d9, #8b5cf6, #7c3aed, #6d28d9);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .hero-bg { background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 30%, #fdf4ff 60%, #ffffff 100%); }
        .hero-mesh {
          background-image:
            radial-gradient(circle at 20% 20%, rgba(139,92,246,0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(124,58,237,0.10) 0%, transparent 50%);
        }
        .stat-card {
          background: white;
          border: 1px solid rgba(139,92,246,0.15);
          box-shadow: 0 4px 24px rgba(139,92,246,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .stat-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(139,92,246,0.15); }
        .tab-btn { transition: all 0.3s; border: 2px solid transparent; }
        .tab-btn.active { background: linear-gradient(135deg, #8b5cf6, #6d28d9); color: white; box-shadow: 0 8px 24px rgba(139,92,246,0.35); }
        .tab-btn:not(.active) { background: white; border-color: #e5e7eb; color: #6b7280; }
        .tab-btn:not(.active):hover { border-color: #8b5cf6; color: #7c3aed; background: #faf5ff; }
        .why-card { background: white; border: 2px solid #f3f4f6; transition: all 0.3s; }
        .why-card:hover { border-color: #8b5cf6; background: #faf5ff; transform: translateY(-4px); box-shadow: 0 12px 32px rgba(139,92,246,0.12); }
        .cta-gradient { background: linear-gradient(135deg, #4c1d95, #5b21b6, #6d28d9, #7c3aed); background-size: 300% 300%; animation: gradientShift 6s ease infinite; }
      `}</style>

      {/* 1. Hero Section */}
      <section className="hero-bg hero-mesh relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] opacity-60" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-fuchsia-100 rounded-full blur-[80px] opacity-60 translate-x-1/4" />
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.04]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="referral-grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#referral-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">

          {/* Left Column: Copy & Badges */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-purple-100 text-purple-800 font-semibold text-sm mb-8 border border-purple-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600" />
              </span>
              Internal Program
            </div>

            <h1 className="mb-6">
              Have a Business Referral? <br />
              <span className="shimmer-title">Share It Today</span> and Get Rewarded.
            </h1>

            <p className="text-base lg:text-xl text-gray-600 leading-relaxed font-medium mb-8 max-w-xl">
              Earn rewards for every successful referral. Join the iSarva Referral Program and get rewarded for every qualified business you refer. We handle the entire process—from qualification and demos to follow-ups and deployment—you just register once and start sharing.
            </p>

            <div className="inline-flex flex-col md:flex-row items-center gap-3 px-5 py-3 rounded-full border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-700 flex items-center justify-center">
                <Gift className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-gray-800">
                INR 2,00,000 disbursed already this month
              </span>
            </div>
          </div>

          {/* Right Column: Multi-step Form Card */}
          <div className="lg:col-span-5 relative">
            <div className="stat-card rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Join the iSarva Referral Program
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Fill the form below to get your referral link and access the dashboard to track referrals, status and payouts.
              </p>

              {step === 1 ? (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="hero-email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="hero-email"
                      type="email"
                      name="email"
                      required
                      placeholder="Type here..."
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/15"
                    />
                  </div>
                  {errorMessage && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-red-600">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {errorMessage}
                    </div>
                  )}
                  <button type="submit" className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl font-semibold text-white bg-[#7c3aed] shadow-lg shadow-purple-600/25 transition-all duration-200 cursor-pointer border-none hover:bg-[#6d28d9] hover:-translate-y-px active:translate-y-0 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none disabled:cursor-not-allowed mt-2">
                    Continue
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmitAll} className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-purple-700 bg-purple-50 px-3 py-2 rounded-lg mb-2">
                    <span>Email: <strong>{formData.email}</strong></span>
                    <button type="button" onClick={() => setStep(1)} className="font-bold underline cursor-pointer">
                      Edit
                    </button>
                  </div>

                  <div>
                    <label htmlFor="hero-name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-gray-400 pointer-events-none">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        id="hero-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-300 bg-white text-[#0f172a] outline-none transition-all duration-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/15 pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-gray-400 pointer-events-none">
                        <Phone className="w-4 h-4" />
                      </span>
                      <input
                        id="hero-phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-300 bg-white text-[#0f172a] outline-none transition-all duration-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/15 pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero-company" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Company Name *
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-gray-400 pointer-events-none">
                        <Building2 className="w-4 h-4" />
                      </span>
                      <input
                        id="hero-company"
                        type="text"
                        name="company"
                        required
                        placeholder="Company name"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-300 bg-white text-[#0f172a] outline-none transition-all duration-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/15 pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero-message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Any specific requirements? (optional)
                    </label>
                    <div className="relative flex items-start">
                      <span className="absolute left-3.5 top-4 text-gray-400 pointer-events-none">
                        <MessageSquare className="w-4 h-4" />
                      </span>
                      <textarea
                        id="hero-message"
                        name="message"
                        rows={2}
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-300 bg-white text-[#0f172a] outline-none transition-all duration-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/15 pl-10 resize-none"
                      />
                    </div>
                  </div>

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-red-600">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  {submitStatus === "success" && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 p-2.5 rounded-lg">
                      <Check className="w-4 h-4 shrink-0" />
                      Registration successful! Redirecting you shortly...
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl font-semibold text-white bg-[#7c3aed] shadow-lg shadow-purple-600/25 transition-all duration-200 cursor-pointer border-none hover:bg-[#6d28d9] hover:-translate-y-px active:translate-y-0 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Registering..." : "Submit Registration"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Process Section with Dynamic Tabs */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="mb-3">
            3 Steps: We Handle the Rest
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
            Select an ecosystem to see how our referral journey flows:
          </p>

          {/* Premium Tab Toggles */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex flex-col md:flex-row bg-gray-50 p-1.5 rounded-2xl border border-gray-100 shadow-inner">
              <button
                onClick={() => setActiveWorkflow("products")}
                className={`tab-btn px-6 py-3.5 rounded-xl font-bold text-sm lg:text-base ${activeWorkflow === "products" ? "active" : ""
                  }`}
              >
                Workflow A: For Our Products
              </button>
              <button
                onClick={() => setActiveWorkflow("services")}
                className={`tab-btn px-6 py-3.5 rounded-xl font-bold text-sm lg:text-base md:ml-2 mt-2 md:mt-0 ${activeWorkflow === "services" ? "active" : ""
                  }`}
              >
                Workflow B: For Our Services
              </button>
            </div>
          </div>

          {activeWorkflow === "products" ? (
            <div>
              <p className="text-xs capitalize tracking-widest font-black text-gray-400 mb-10">
                Applicable to: HRMS, CRM, Support Application, Billing Software, etc.
              </p>
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                {PRODUCT_STEPS.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="relative w-44 h-44 mb-6 flex items-center justify-center">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="mb-3 group-hover:text-purple-600 transition-colors">{idx + 1}. {step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-xs uppercase tracking-widest font-black text-gray-400 mb-10">
                Applicable to: Website Design, Website Redesign, Digital Marketing, etc.
              </p>
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                {SERVICE_STEPS.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="relative w-44 h-44 mb-6 flex items-center justify-center">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="mb-3 group-hover:text-purple-600 transition-colors">{idx + 1}. {step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Reward Structure Table Section */}
      <section className="py-12 lg:py-16 bg-white border-t border-gray-100 relative isolate">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="mb-12 text-center capitalize">Reward Structure</h2>

          <div className="lg:max-w-4xl mx-auto border border-gray-200 rounded-3xl shadow-sm overflow-hidden bg-white">
            {/* Desktop Header */}
            <div className="hidden md:grid md:grid-cols-3 bg-[#7c3aed] text-white text-xs font-bold uppercase tracking-wider">
              <div className="px-6 py-4">Referral Category</div>
              <div className="px-6 py-4">Milestone Triggers</div>
              <div className="px-6 py-4">Payout Event</div>
            </div>

            {/* Row 1: Products */}
            <div className="flex flex-col md:grid md:grid-cols-3 border-b border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center md:text-left">
              <div className="px-6 py-5 bg-gray-50/50 md:bg-transparent">
                <div className="text-sm font-bold text-white bg-[#7c3aed] -mx-6 -mt-5 mb-4 px-6 py-2 uppercase tracking-wider md:hidden text-center">Referral Category</div>
                <div className="text-sm font-bold text-gray-900">
                  Products <span className="text-xs text-gray-500 font-normal block mt-1">(HRMS, CRM, Billing etc.)</span>
                </div>
              </div>
              <div className="px-6 py-5">
                <div className="text-sm font-bold text-white bg-[#7c3aed] -mx-6 -mt-5 mb-4 px-6 py-2 uppercase tracking-wider md:hidden text-center">Milestone Triggers</div>
                <div className="text-sm text-gray-600">
                  Qualified Lead &rarr; Demo Conducted &rarr; Subscription Purchased
                </div>
              </div>
              <div className="px-6 py-5">
                <div className="text-sm font-bold text-white bg-[#7c3aed] -mx-6 -mt-5 mb-4 px-6 py-2 uppercase tracking-wider md:hidden text-center">Payout Event</div>
                <div className="text-sm text-gray-600">
                  Referral reward released upon successful subscription activation and first payment realization.
                </div>
              </div>
            </div>

            {/* Row 2: Services */}
            <div className="flex flex-col md:grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center md:text-left">
              <div className="px-6 py-5 bg-gray-50/50 md:bg-transparent">
                <div className="text-sm font-bold text-white bg-[#7c3aed] -mx-6 -mt-5 mb-4 px-6 py-2 uppercase tracking-wider md:hidden text-center">Referral Category</div>
                <div className="text-sm font-bold text-gray-900">
                  Services <span className="text-xs text-gray-500 font-normal block mt-1">(Web Design, Redesign, Digital Marketing)</span>
                </div>
              </div>
              <div className="px-6 py-5">
                <div className="text-sm font-bold text-white bg-[#7c3aed] -mx-6 -mt-5 mb-4 px-6 py-2 uppercase tracking-wider md:hidden text-center">Milestone Triggers</div>
                <div className="text-sm text-gray-600">
                  Project Scoping &rarr; SoW &amp; Timeline signed off.
                </div>
              </div>
              <div className="px-6 py-5">
                <div className="text-sm font-bold text-white bg-[#7c3aed] -mx-6 -mt-5 mb-4 px-6 py-2 uppercase tracking-wider md:hidden text-center">Payout Event</div>
                <div className="text-sm text-gray-600">
                  One-time payout upon project agreement sign-off and clearance of the initial project invoice.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Things You Should Know Section */}
      <section className="py-12 lg:py-16 bg-[#FFF8E6] relative isolate">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="mb-16 text-center capitalize">Things You Should Know</h2>

          <div className="flex flex-wrap justify-center gap-6 ">
            {THINGS_TO_KNOW.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="why-card rounded-2xl p-6 flex flex-col items-center text-center w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 shadow-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Why Refer iSarva Infotech? */}
      <section className="py-12 lg:py-16 bg-white relative isolate">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="mb-12 text-center capitalize">Why Refer iSarva Infotech?</h2>

          <div className="flex flex-wrap justify-center gap-6">
            {WHY_POINTS.map((item, idx) => (
              <div key={idx} className="why-card p-6 rounded-2xl flex items-start gap-4 text-left w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <span className="w-6 h-6 rounded-full bg-purple-100 text-[#7c3aed] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </span>
                <p className="text-sm font-bold text-gray-800 leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs Section */}
      <section className="py-12 lg:py-16 bg-white border-t border-gray-100 relative isolate">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="mb-12 text-center capitalize">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isActive = activeFAQIndex === idx;
              return (
                <div key={idx} className="bg-white border border-purple-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:border-purple-300 hover:shadow-md">
                  <button
                    onClick={() => setActiveFAQIndex(isActive ? null : idx)}
                    className="w-full flex items-center justify-between py-5 px-6 sm:px-8 font-semibold text-base sm:text-lg text-slate-800 bg-transparent border-none cursor-pointer text-left hover:text-[#7c3aed] transition-colors"
                  >
                    <h3>{faq.q}</h3>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 shrink-0 ml-4 ${isActive ? "rotate-180 text-[#7c3aed]" : "text-slate-400"}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? "max-h-96" : "max-h-0"}`}>
                    <p className="pb-6 px-6 sm:px-8 pt-0 text-slate-600 text-sm md:text-base leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA Banner (Footer Conversion Zone) */}
      <section className="mx-6 my-16 max-w-full  relative isolate">
        <div className="cta-gradient rounded-3xl py-12 px-6 sm:p-16 text-center text-white relative overflow-hidden">
          {/* Absolute Background Circles */}
          <div className="absolute rounded-full pointer-events-none w-40 h-40 -bottom-16 -left-8 bg-white/15"></div>
          <div className="absolute rounded-full pointer-events-none w-10 h-10 top-16 right-16 bg-white/15"></div>
          <div className="absolute rounded-full pointer-events-none w-[500px] h-[500px] -bottom-[200px] -right-[150px] bg-white/15"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="mb-4 capitalize text-white">
              Ready to Start Earning?
            </h2>
            <p className="text-purple-100 text-base lg:text-lg leading-relaxed mb-8 opacity-90 ">
              Know Businesses Looking for HRMS, CRM, Website Development or Digital Marketing Services? Refer them to iSarva Today and earn attractive rewards for every successful referral.
            </p>
            <button
              onClick={scrollToHeroForm}
              className="press-illusion-btn-orange text-white w-fit font-bold px-8 py-3 text-base items-center space-x-2  transition-all duration-300 mx-auto"
            >
              Get Your Referral Link Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
