"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "../components/AppLink";

/* ─── Animated Counter ──────────────────────────────── */
function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Main Component ─────────────────────────────────── */
export default function TrainingProgramsPremium() {
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    background: "",
    course: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null); // null | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const programs = [
    {
      id: "crm",
      value: "CRM",
      icon: "🎯",
      title: "CRM",
      tagline: "100% Practical Implementation",
      color: "from-violet-500 to-purple-600",
      lightBg: "from-violet-50 to-purple-50",
      accent: "text-violet-700 bg-violet-100",
      borderHover: "hover:border-violet-300",
      tagBg: "bg-violet-100 text-violet-700",
      description:
        "Master customer data management, sales pipelines, workflow automation, and client communication frameworks. Learn how businesses track and drive revenue through live simulated environments.",
      keyTakeaway: "100% Practical Implementation & Real-World Case Studies.",
    },
    {
      id: "hrms",
      value: "HRMS",
      icon: "👥",
      title: "HRMS",
      tagline: "For HR Professionals & Managers",
      color: "from-sky-500 to-blue-600",
      lightBg: "from-sky-50 to-blue-50",
      accent: "text-sky-700 bg-sky-100",
      borderHover: "hover:border-sky-300",
      tagBg: "bg-sky-100 text-sky-700",
      description:
        "Gain end-to-end operational knowledge of modern HR environments. This covers employee onboarding, payroll modules, performance tracking, attendance management, and HR analytics.",
      keyTakeaway: "Designed for aspiring HR professionals and operational managers.",
    },
    {
      id: "web-backend",
      value: "Web & Backend Development",
      icon: "⚙️",
      title: "Web & Backend Development",
      tagline: "Build Scalable Modern Applications",
      color: "from-emerald-500 to-teal-600",
      lightBg: "from-emerald-50 to-teal-50",
      accent: "text-emerald-700 bg-emerald-100",
      borderHover: "hover:border-emerald-300",
      tagBg: "bg-emerald-100 text-emerald-700",
      description:
        "Build powerful, secure, and scalable modern web applications. Acquire extensive core programming expertise in robust modern backend frameworks and systems.",
      keyTakeaway: "PHP, Laravel, CodeIgniter, Core Java, Python, WordPress, Elementor, Statamic.",
    },
    {
      id: "frontend-uiux",
      value: "Frontend & UI/UX & Graphic Design",
      icon: "🎨",
      title: "Frontend & UI/UX & Graphic Design",
      tagline: "Craft Immersive User Journeys",
      color: "from-pink-500 to-rose-500",
      lightBg: "from-pink-50 to-rose-50",
      accent: "text-pink-700 bg-pink-100",
      borderHover: "hover:border-pink-300",
      tagBg: "bg-pink-100 text-pink-700",
      description:
        "Master user-centric architecture, modern interface layout patterns, and client-side application logic to craft immersive user journeys across web and mobile viewports.",
      keyTakeaway: "React, React Native, Angular, Figma, Adobe Photoshop, CorelDRAW, Axure.",
    },
    {
      id: "data-cloud",
      value: "Data & Cloud Engineering",
      icon: "☁️",
      title: "Data & Cloud Engineering",
      tagline: "Architect Data-Intensive Systems",
      color: "from-amber-500 to-orange-500",
      lightBg: "from-amber-50 to-orange-50",
      accent: "text-amber-700 bg-amber-100",
      borderHover: "hover:border-amber-300",
      tagBg: "bg-amber-100 text-amber-700",
      description:
        "Uncover complex business intelligence patterns while architecting automated CI/CD continuous deployment infrastructure in data-intensive environments.",
      keyTakeaway: "Data Analytics, Data Warehouse, Snowflake, Apache Spark, AWS, DevOps.",
    },
    {
      id: "digital-marketing-ai",
      value: "Digital Marketing & Next-Gen AI",
      icon: "🚀",
      title: "Digital Marketing & Next-Gen AI",
      tagline: "Scale Global Market Expansion",
      color: "from-indigo-500 to-violet-600",
      lightBg: "from-indigo-50 to-violet-50",
      accent: "text-indigo-700 bg-indigo-100",
      borderHover: "hover:border-indigo-300",
      tagBg: "bg-indigo-100 text-indigo-700",
      description:
        "Harness the power of AI-driven optimization, cross-channel paid ad logic, and programmatic marketing systems to dramatically scale global market expansion.",
      keyTakeaway: "Google Ads, OpenAI ChatGPT 4.0, Cornerstone.",
    },
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Students Trained" },
    { value: 6, suffix: "+", label: "Training Tracks" },
    { value: 95, suffix: "%", label: "Placement Rate" },
    { value: 15, suffix: "+", label: "Expert Mentors" },
  ];

  const knowledgePillars = [
    { icon: "💻", label: "Live Projects" },
    { icon: "🏭", label: "Industry Knowledge" },
    { icon: "🤝", label: "Real Client Interaction" },
    { icon: "💼", label: "Work Professionally" },
    { icon: "🏢", label: "Corporate Experience" },
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Job Placement Assistance",
      description:
        "Benefit from localized and individualized career support engineered around your specific professional goals to give you a definitive edge in the talent market.",
    },
    {
      icon: "🧠",
      title: "Learn From Experts",
      description:
        "Interact with, and be mentored directly by, corporate industry professionals possessing years of collaborative software and engineering architecture experience.",
    },
    {
      icon: "⏰",
      title: "Flexible Timings",
      description:
        "Balance your existing academic schedules or work commitments comfortably with highly flexible morning, evening, or weekly batch options.",
    },
    {
      icon: "🖥️",
      title: "Online or Classroom Formats",
      description:
        "Embrace structured virtual modules from anywhere or choose direct interactive classroom experiences with instructors and peer groups.",
    },
    {
      icon: "🏆",
      title: "Industry-Recognized Certifications",
      description:
        "Validate your newly acquired engineering, operational, or marketing skill sets by earning official credentials that align with top standards.",
    },
    {
      icon: "🔗",
      title: "Career Alignment",
      description:
        "Seamlessly bridge the gap between our specialized training curriculum, active Internships, and permanent full-time Careers right here at iSARVA.",
    },
  ];

  const backgroundOptions = [
    "Technical Student",
    "Non-Technical",
    "Working Professional",
  ];

  const handleJoinNow = (courseValue) => {
    setSelectedCourse(courseValue);
    setFormData((prev) => ({ ...prev, course: courseValue }));
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    setErrorMessage("");

    // Build message combining background + user message
    const combinedMessage = [
      formData.background ? `Background: ${formData.background}` : "",
      formData.message || "",
    ].filter(Boolean).join("\n");

    const submissionData = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.contact,
      company: "Training Enquiry", // placeholder — CRM requires org_name
      subject: `Training Enquiry: ${formData.course || "General"}`,
      message: combinedMessage,
      pageType: "Training",
      itemName: formData.course || "",
      categoryId: 62,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (data.success) {
        // Fire GTM event (same as all other forms)
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({ event: "enquiry_success" });
        }
        // Redirect to thank-you page
        router.push("/thank-you?type=training&item=" + encodeURIComponent(formData.course || "Training Programs"));
      } else {
        // Parse CRM error into a user-friendly message
        let friendly = "Something went wrong. Please try again.";
        if (typeof data.error === "string") {
          if (data.error.includes("already registered")) {
            friendly = "This email or mobile number is already registered.";
          } else {
            friendly = data.error.replace(/CRM API error \(\d+\):\s*/g, "");
          }
        }
        setFormStatus("error");
        setErrorMessage(friendly);
        setTimeout(() => { setFormStatus(null); setErrorMessage(""); }, 7000);
      }
    } catch {
      setFormStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
      setTimeout(() => { setFormStatus(null); setErrorMessage(""); }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes tp-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(2deg); }
        }
        @keyframes tp-float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes tp-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes tp-gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes tp-pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
        .tp-float1 { animation: tp-float 6s ease-in-out infinite; }
        .tp-float2 { animation: tp-float2 8s ease-in-out infinite; }
        .tp-shimmer-title {
          background: linear-gradient(90deg, #4f46e5, #7c3aed, #6366f1, #4f46e5);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: tp-shimmer 3s linear infinite;
        }
        .tp-hero-bg {
          background: linear-gradient(135deg, #f8faff 0%, #eef2ff 30%, #f0f4ff 60%, #ffffff 100%);
        }
        .tp-hero-mesh {
          background-image:
            radial-gradient(circle at 20% 20%, rgba(99,102,241,0.10) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139,92,246,0.08) 0%, transparent 50%);
        }
        .tp-float-badge {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(99,102,241,0.2);
          box-shadow: 0 8px 32px rgba(99,102,241,0.10);
        }
        .tp-stat-card {
          background: white;
          border: 1px solid rgba(99,102,241,0.15);
          box-shadow: 0 4px 24px rgba(99,102,241,0.07);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .tp-stat-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(99,102,241,0.14); }
        .tp-program-card {
          background: white;
          border: 2px solid #f3f4f6;
          transition: all 0.3s;
        }
        .tp-program-card:hover {
          transform: translateY(-6px);
          border-color: #e0e7ff;
          box-shadow: 0 20px 48px rgba(99,102,241,0.12);
        }
        .tp-benefit-card {
          background: white;
          border: 2px solid #f3f4f6;
          transition: all 0.3s;
        }
        .tp-benefit-card:hover {
          border-color: #c7d2fe;
          background: #f8faff;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(99,102,241,0.10);
        }
        .tp-pillar-chip {
          background: white;
          border: 1.5px solid #e5e7eb;
          transition: all 0.2s;
        }
        .tp-pillar-chip:hover { border-color: #6366f1; background: #eef2ff; }
        .tp-form-input {
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          transition: all 0.2s;
          background: white;
        }
        .tp-form-input:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99,102,241,0.10);
        }
        .tp-cta-gradient {
          background: linear-gradient(135deg, #312e81, #3730a3, #4338ca, #3730a3);
          background-size: 300% 300%;
          animation: tp-gradientShift 6s ease infinite;
        }
        .tp-join-btn {
          background: linear-gradient(135deg, #6366f1, #7c3aed);
          transition: all 0.3s;
          box-shadow: 0 4px 14px rgba(99,102,241,0.30);
        }
        .tp-join-btn:hover {
          background: linear-gradient(135deg, #4f46e5, #6d28d9);
          box-shadow: 0 8px 24px rgba(99,102,241,0.40);
          transform: translateY(-2px);
        }
        .tp-enroll-btn {
          background: #f97316;
          box-shadow: 0 6px #ea580c, 0 8px 12px rgba(234,88,12,0.30), 0 12px 24px rgba(234,88,12,0.15);
          transition: all 0.3s;
          border-radius: 8px;
        }
        .tp-enroll-btn:hover {
          background: #ea580c;
          transform: perspective(1000px) translateY(3px) translateZ(0);
          box-shadow: 0 3px #ea580c, 0 8px 12px rgba(234,88,12,0.30);
        }
        .tp-hero-tag {
          background: white;
          border: 1px solid rgba(99,102,241,0.25);
          box-shadow: 0 2px 8px rgba(99,102,241,0.08);
        }
        .tp-section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent);
        }
        @media (max-width: 480px) {
          .tp-mobile-px { padding-left: 12px !important; padding-right: 12px !important; }
        }
      `}</style>

      <div className="bg-white overflow-hidden">

        {/* ─── HERO ──────────────────────────────────────────────── */}
        <section className="tp-hero-bg tp-hero-mesh relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[100px] opacity-60" />
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-100 rounded-full blur-[80px] opacity-60 translate-x-1/4" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="tp-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#6366f1" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tp-grid)" />
            </svg>
          </div>


          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-10">
              <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-indigo-600 font-semibold">Training Programs</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-indigo-100 text-indigo-800 font-semibold text-sm mb-8 border border-indigo-200">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600" />
                  </span>
                  Industry-Ready Training Programs
                </div>
                <h1 className="mb-6">
                  Elevate Your Career with{" "}
                  <span className="tp-shimmer-title">Industry-Ready</span>
                  <br />
                  Skills
                </h1>
                <p className="text-base lg:text-xl text-gray-600 leading-relaxed font-medium mb-8 max-w-xl">
                  Hands-on training programs designed by software experts for both business operations and technical fields. Kickstart your journey or upgrade your existing skills.
                </p>
                <div className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start">
                  {["Hands-On Learning", "Live Projects", "Expert Mentors", "Career Support"].map((tag) => (
                    <span key={tag} className="tp-hero-tag px-4 py-1.5 rounded-full text-gray-700 text-sm font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button
                    id="tp-hero-enroll-cta"
                    onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="tp-enroll-btn text-white w-fit font-bold px-8 py-4 text-base items-center space-x-2 flex cursor-pointer"
                  >
                    Enroll Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <a
                    href="#programs"
                    className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-400 hover:text-indigo-700 hover:bg-indigo-50 transition-all duration-300 shadow-sm"
                  >
                    Explore Programs
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-200/40 to-violet-200/40 blur-[60px] rounded-full" />
                <div className="relative rounded-3xl overflow-hidden border border-indigo-100 shadow-[0_24px_80px_rgba(99,102,241,0.15)]">
                  <img
                    src="/Services/Training/Banner-img.jpg"
                    alt="Training Programs at iSARVA Infotech"
                    className="w-full h-[480px] lg:h-[520px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 tp-float-badge rounded-2xl px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white text-sm font-bold">✓</div>
                      <div>
                        <div className="text-gray-900 text-sm font-bold">Certified Training</div>
                        <div className="text-indigo-600 text-xs font-semibold">Industry-recognized programs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {stats.map((s, i) => (
                <div key={i} className="tp-stat-card rounded-2xl p-5 md:p-6 text-center cursor-default min-w-0">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-indigo-600 mb-1 truncate">
                    <AnimatedCounter end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-gray-600 text-xs md:text-sm font-semibold leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EMPOWERING INTRO ─────────────────────────────────── */}
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px tp-section-divider" />
          <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-violet-50 rounded-full blur-[100px] opacity-80" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-50 rounded-full blur-[80px] opacity-60" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100/60 to-violet-100/60 blur-[50px] rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-indigo-100 shadow-2xl">
                  <img
                    src="/Services/Training/training_courses_grid.png"
                    alt="Training Courses at iSARVA"
                    className="w-full object-cover rounded-3xl"
                  />
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold text-sm mb-6">
                  🌟 Empowering Professionals
                </div>
                <h2 className="mb-6 capitalize">
                  Empowering the Next Generation of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">
                    Professionals
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you're a beginner looking to kickstart your career or an experienced professional aiming to upgrade your skills, our training services are tailored to meet your specific needs. With a focus on practical learning and real-world applications, we empower our clients and students to gain the knowledge and confidence needed to excel in the fast-paced and ever-evolving world of software development.
                </p>
                <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                  {["Beginners Welcome", "Career Upgrades", "Real-World Projects", "Expert Guidance"].map((chip) => (
                    <span key={chip} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold hover:border-indigo-300 transition-all duration-200">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {chip}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 rounded-xl hover:from-indigo-600 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Journey
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TRAINING PROGRAMS / CARDS ───────────────────────── */}
        <section id="programs" className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.04),transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 font-semibold text-sm mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Find Your Calling
              </div>
              <h2 className="mb-6 capitalize">
                Explore Our Training Tracks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive training tracks designed to bridge the gap between education and industry demands. Click <strong>"Join Now"</strong> on any program to auto-select it in the registration form below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <div key={program.id} className={`tp-program-card rounded-2xl p-7 flex flex-col items-center text-center`}>
                  {/* Icon — centered at top */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden mb-4`}>
                    <span className="text-3xl leading-none flex items-center justify-center">{program.icon}</span>
                  </div>

                  {/* Badge — centered below icon */}
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${program.tagBg} mb-4`}>
                    {program.title === "CRM" || program.title === "HRMS" ? "Business Track" : "Tech Track"}
                  </span>

                  <h3 className="mb-3">{program.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                    {program.description}
                  </p>

                  {/* Key Takeaway */}
                  <div className={`w-full rounded-xl p-3.5 mb-5 bg-gradient-to-br ${program.lightBg} border border-opacity-50`} style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    <span className="text-sm font-bold text-gray-500 block mb-1">
                      {program.id === "web-backend" || program.id === "frontend-uiux" || program.id === "data-cloud" || program.id === "digital-marketing-ai"
                        ? "Tech Covered:"
                        : "Key Takeaway:"}
                    </span>
                    <p className="text-sm text-gray-700 font-semibold">
                      {program.keyTakeaway}
                    </p>
                  </div>

                  <button
                    id={`tp-join-${program.id}`}
                    onClick={() => handleJoinNow(program.value)}
                    className="tp-join-btn w-full text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Join Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BECOME KNOWLEDGEABLE ──────────────────────────────── */}
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-violet-50 rounded-full blur-3xl opacity-60" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold text-sm mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Become Knowledgeable
              </div>
              <h2 className="mb-6 capitalize">
                Our Specialized Professional Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our specialized professional programs equip you with deep domain expertise to confidently navigate the digital ecosystem.
              </p>
            </div>

            {/* Knowledge pillars */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {knowledgePillars.map((pillar, i) => (
                <div key={i} className="tp-pillar-chip flex items-center justify-center gap-3 px-6 py-4 rounded-2xl cursor-default w-full sm:w-[calc(50%-8px)] lg:w-auto">
                  <span className="text-2xl leading-none flex items-center justify-center">{pillar.icon}</span>
                  <span className="text-gray-800 font-bold text-sm">{pillar.label}</span>
                </div>
              ))}
            </div>

            {/* Banner image + content */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="/Services/Training/training_mentors_team_indian.png"
                alt="iSARVA Training Mentors and Experts"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/85 via-indigo-800/70 to-indigo-800/50 flex items-center lg:text-left text-center">
                <div className="px-10 lg:px-16 max-w-xl tp-mobile-px">
                  <p className="text-indigo-300 text-sm font-bold capitalize tracking-widest mb-3">
                    How We Can Help You
                  </p>
                  <h3 className="text-white mb-4">
                    Unleash Your Full Professional Potential
                  </h3>
                  <p className="text-white/80 text-base leading-relaxed mb-8">
                    We bridge your academic and functional baseline knowledge to high-tier enterprise standards by managing real corporate project delivery under strict, realistic deployment lifecycles.
                  </p>
                  <button
                    onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="tp-enroll-btn text-white w-fit font-bold px-8 py-3 text-base items-center space-x-2 flex transition-all duration-300 mx-auto lg:mx-0"
                  >
                    Get Started Today
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Floating stat cards */}
              <div className="absolute top-6 right-6 hidden lg:flex lg:flex-col lg:gap-3">
                <div className="tp-float-badge rounded-xl px-4 py-3 text-center">
                  <div className="text-2xl font-black text-indigo-600">500+</div>
                  <div className="text-xs font-semibold text-gray-600">Students Trained</div>
                </div>
                <div className="tp-float-badge rounded-xl px-4 py-3 text-center">
                  <div className="text-2xl font-black text-indigo-600">95%</div>
                  <div className="text-xs font-semibold text-gray-600">Placement Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BENEFITS OF TRAINING ──────────────────────────────── */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05),transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* ── Row 1: Image (left) + Text (right) ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden border border-indigo-100 shadow-xl">
                <img
                  src="/Services/Training/training_benefits_banner_indian.png"
                  alt="Training Benefits at iSARVA"
                  className="w-full h-72 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/70 via-indigo-700/50 to-indigo-600/40 flex items-center">
                  <div className="px-8 w-full text-center lg:text-left">
                    <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-2">Career-First Approach</p>
                    <h3 className="text-white text-xl lg:text-2xl">
                      From Training to Full-Time Careers at iSARVA
                    </h3>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold text-sm mb-6">
                  🎓 How We Can Help You
                </div>
                <h2 className="mb-5 capitalize">
                  A Training System Built for{" "}
                  <span className="text-indigo-600">Real Success</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Unleash your full professional potential with a balanced, comprehensive training system that seamlessly blends deep industry theories with modern platform frameworks.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through systematic technical coaching, our advisors help you identify core operational deficiencies and customize your individual learning path for maximum career acceleration.
                </p>
              </div>
            </div>

            {/* ── Row 2: Benefit cards (full width) ── */}
            <h3 className="text-center mb-8 text-indigo-600">Benefits of Training</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="tp-benefit-card p-6 rounded-2xl flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden">
                    <span className="text-xl leading-none flex items-center justify-center">{benefit.icon}</span>
                  </div>
                  <div>
                    <h4 className="mb-1.5">{benefit.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ─── ENROLLMENT FORM ───────────────────────────────────── */}
        <section id="enroll" ref={formRef} className="py-12 lg:py-16 relative overflow-hidden">
          {/* Gradient background for the form section */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50/60 to-white" />
          <div className="absolute top-0 left-0 w-full h-px tp-section-divider" />
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[100px] opacity-50" />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-violet-100 rounded-full blur-[100px] opacity-40" />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-indigo-200 text-indigo-700 font-semibold text-sm mb-6 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Ready to Shape Your Future?
              </div>
              <h2 className="mb-4 capitalize">
                Enquire & Secure Your Seat
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Enquire today to secure your seat or request a customised corporate training blueprint.
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-indigo-100 overflow-hidden">
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />

              <div className="p-8 lg:p-12">
                {formStatus === "success" ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-green-700 mb-3">Enrollment Submitted!</h3>
                    <p className="text-gray-600 text-lg mb-8">
                      Thank you for your interest! Our team will reach out to you within 24 hours to confirm your enrollment.
                    </p>
                    <button
                      onClick={() => setFormStatus(null)}
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form id="tp-enrollment-form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="tp-fullName">
                          Full Name <span className="text-indigo-600">*</span>
                        </label>
                        <input
                          id="tp-fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleFormChange}
                          placeholder="Your full name"
                          className="tp-form-input w-full px-4 py-3.5 text-gray-900 text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="tp-email">
                          Email Address <span className="text-indigo-600">*</span>
                        </label>
                        <input
                          id="tp-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="your@email.com"
                          className="tp-form-input w-full px-4 py-3.5 text-gray-900 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Contact */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="tp-contact">
                          Contact Number <span className="text-indigo-600">*</span>
                        </label>
                        <input
                          id="tp-contact"
                          name="contact"
                          type="tel"
                          required
                          value={formData.contact}
                          onChange={handleFormChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="tp-form-input w-full px-4 py-3.5 text-gray-900 text-sm"
                        />
                      </div>

                      {/* Background */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="tp-background">
                          Background <span className="text-indigo-600">*</span>
                        </label>
                        <select
                          id="tp-background"
                          name="background"
                          required
                          value={formData.background}
                          onChange={handleFormChange}
                          className="tp-form-input w-full px-4 py-3.5 text-gray-900 text-sm appearance-none bg-white cursor-pointer"
                        >
                          <option value="">Select your background</option>
                          {backgroundOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Training Course */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="tp-course">
                        Training Course <span className="text-indigo-600">*</span>
                      </label>
                      <select
                        id="tp-course"
                        name="course"
                        required
                        value={formData.course}
                        onChange={handleFormChange}
                        className="tp-form-input w-full px-4 py-3.5 text-gray-900 text-sm appearance-none bg-white cursor-pointer"
                      >
                        <option value="">Select a training course</option>
                        {programs.map((p) => (
                          <option key={p.id} value={p.value}>{p.value}</option>
                        ))}
                      </select>
                      {formData.course && (
                        <p className="mt-2 text-xs font-semibold text-indigo-600 flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Course selected: {formData.course}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="tp-message">
                        Message / Comments
                      </label>
                      <textarea
                        id="tp-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Tell us about your goals, questions, or any specific requirements..."
                        className="tp-form-input w-full px-4 py-3.5 text-gray-900 text-sm resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
                      <p className="text-xs text-gray-500 max-w-sm">
                        By submitting, you agree to our privacy policy. We'll never share your data.
                      </p>
                      <button
                        id="tp-enroll-submit"
                        type="submit"
                        disabled={isSubmitting}
                        className="tp-enroll-btn text-white font-bold px-10 py-4 text-base flex items-center gap-3 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Enroll Now
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Inline error message */}
                    {formStatus === "error" && (
                      <div className="rounded-xl bg-red-50 border-2 border-red-200 p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-red-900 text-sm">Submission failed</p>
                            <p className="text-red-700 text-sm">{errorMessage || "Please try again or contact us directly."}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── EXPLORE MORE / CTA STRIP ─────────────────────────── */}
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px tp-section-divider" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  slug: "internships",
                  icon: "🚀",
                  title: "Internship Program",
                  desc: "Gain real-world corporate experience with our structured internship program.",
                  href: "/internships",
                },
                {
                  slug: "careers",
                  icon: "💼",
                  title: "Career Opportunities",
                  desc: "Explore full-time career positions and grow your professional path with iSARVA.",
                  href: "/careers",
                },
                {
                  slug: "contact",
                  icon: "📞",
                  title: "Contact Us",
                  desc: "Have questions about training? Our team is ready to help you choose the right path.",
                  href: "/contact",
                },
              ].map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className=""
                >
                  <div className="h-full p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-indigo-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center mb-6 shadow-md shadow-indigo-100 transition-transform duration-300 overflow-hidden">
                      <span className="text-2xl leading-none flex items-center justify-center">{item.icon}</span>
                    </div>
                    <h3 className="mb-3 transition-colors">{item.title}</h3>
                    <p className="text-gray-600 mb-6">{item.desc}</p>
                    <div className="flex items-center justify-center gap-2 text-indigo-600 font-bold mt-auto">
                      <span>Explore</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
