"use client";

import { useState, useEffect, useRef } from "react";
import Link from "../../components/AppLink";
import ContactFormModal from "../../components/ContactFormModal";

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

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── FAQ Item ──────────────────────────────────────── */
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`cy-faq-item rounded-2xl border transition-all duration-300 overflow-hidden ${open ? "border-emerald-400 shadow-lg shadow-emerald-50 bg-emerald-50/20" : "border-gray-200 bg-white hover:border-gray-300"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer" aria-expanded={open}>
        <span className="font-bold text-gray-900 text-base lg:text-lg leading-snug">{question}</span>
        <span className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${open ? "bg-emerald-500 text-white rotate-45 shadow-md shadow-emerald-500/30" : "bg-gray-100 text-gray-500"}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm lg:text-base border-t border-gray-100 pt-4 whitespace-pre-line">{answer}</div>
      </div>
    </div>
  );
}

/* ─── Main Cybersecurity Component ─────────────────── */
export default function CybersecurityPremium() {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState("Cybersecurity Assessment");

  const handleOpenModal = (itemName = "Cybersecurity Assessment") => {
    setModalItem(itemName);
    setIsModalOpen(true);
  };

  const stats = [
    { value: 500, suffix: "+", label: "Security Audits Completed" },
    { value: 99, suffix: "%", label: "Vulnerability Remediation" },
    { value: 12, suffix: "+", label: "Years Cybersecurity Mastery" },
    { value: 24, suffix: "/7", label: "Threat Response Support" },
  ];

  const coreServices = [
    {
      id: "01",
      title: "Vulnerability Assessment & Penetration Testing (VAPT)",
      shortTitle: "VAPT & Pentesting",
      icon: "🔍",
      tagline: "Find & Remediate Exploits Before Attackers Do",
      color: "from-blue-500 to-indigo-600",
      badgeColor: "text-blue-700 bg-blue-100 border-blue-200",
      description: "VAPT helps organizations identify vulnerabilities across their applications, systems, networks and infrastructure. Our certified ethical hackers simulate real-world attacks to evaluate your defense posture and provide actionable remediation guidance.",
      includes: [
        "Web application penetration testing",
        "API penetration testing",
        "Mobile application testing (iOS & Android)",
        "Network penetration testing",
        "External infrastructure assessment",
        "Internal network assessment",
        "Cloud security assessment",
        "Configuration security review",
        "Zero-day exploit simulation",
        "Security retesting & verification"
      ],
      deliverables: [
        "Executive summary for leadership",
        "Technical findings & proof of concept",
        "Vulnerability classification & CVSS scoring",
        "Step-by-step remediation guide",
        "Retesting validation report",
        "Letter of attestation / audit certificate"
      ],
      cta: "Request a VAPT Assessment"
    },
    {
      id: "02",
      title: "Web Application Security",
      shortTitle: "Web App Security",
      icon: "💻",
      tagline: "Harden Your Web Portals & Customer SaaS",
      color: "from-emerald-500 to-teal-600",
      badgeColor: "text-emerald-700 bg-emerald-100 border-emerald-200",
      description: "Modern web applications handle valuable business and customer information, making them prime targets. We systematically assess your web applications for vulnerabilities across business logic, authentication, data handling, and server configuration.",
      includes: [
        "OWASP Top 10 vulnerabilities",
        "SQL Injection & NoSQL Injection",
        "Cross-Site Scripting (XSS) & CSRF",
        "Broken Access Control & IDOR",
        "Authentication & session hijacking",
        "Security misconfiguration",
        "Insecure file upload vulnerabilities",
        "Sensitive customer data exposure",
        "Server-Side Request Forgery (SSRF)",
        "Business logic flaws & payment bypass"
      ],
      deliverables: [
        "Corporate websites & portals",
        "E-commerce & payment gateways",
        "SaaS platforms & microservices",
        "Customer & partner portals",
        "Enterprise ERP & CRM systems",
        "React, Next.js & Node.js stacks"
      ],
      cta: "Secure My Web Application"
    },
    {
      id: "03",
      title: "API Security Testing",
      shortTitle: "API Security",
      icon: "🔗",
      tagline: "Protect the Gateway to Your Digital Ecosystem",
      color: "from-purple-500 to-indigo-600",
      badgeColor: "text-purple-700 bg-purple-100 border-purple-200",
      description: "APIs are the backbone of modern apps, microservices, and integrations. A compromised API can expose sensitive database records or allow unauthorized actions. We assess REST, GraphQL, and SOAP APIs against OWASP API Top 10 risks.",
      includes: [
        "OWASP API Security Top 10",
        "Broken object-level authorization (BOLA)",
        "Broken user authentication & JWT testing",
        "Rate-limiting & DoS vulnerability checks",
        "Data leakage & object property exposure",
        "Unrestricted resource consumption",
        "Server-side request forgery in APIs",
        "API gateway configuration review",
        "Third-party integration security",
        "Token & session life-cycle security"
      ],
      deliverables: [
        "API vulnerability diagnosis report",
        "Authentication weakness findings",
        "Authorization gap matrix",
        "Data exposure risk assessment",
        "Code-level remediation code snippets",
        "Post-fix verification retest"
      ],
      cta: "Get an API Security Assessment"
    },
    {
      id: "04",
      title: "Mobile Application Security",
      shortTitle: "Mobile Security",
      icon: "📱",
      tagline: "End-to-End Protection for Android & iOS",
      color: "from-rose-500 to-pink-600",
      badgeColor: "text-rose-700 bg-rose-100 border-rose-200",
      description: "Mobile applications can expose confidential data if client-side code, local storage, IPC, or backend APIs are flawed. Our security specialists evaluate both the client binary and server communication against OWASP Mobile Top 10 standards.",
      includes: [
        "Static & dynamic analysis (SAST & DAST)",
        "Reverse engineering & decompilation resilience",
        "Insecure local data storage (Keychain/Keystore)",
        "Insecure network communication & SSL pinning",
        "Biometric & authentication bypass",
        "Cryptographic weakness verification",
        "Inter-process communication (IPC) flaws",
        "Tampering & emulator detection testing",
        "Backend API penetration testing",
        "Third-party SDK risk assessment"
      ],
      deliverables: [
        "Mobile app security audit report",
        "OWASP MASVS compliance evaluation",
        "Client-side code security analysis",
        "Backend API vulnerability report",
        "Developer-friendly fix instructions",
        "Final certificate of security testing"
      ],
      cta: "Secure My Mobile Application"
    },
    {
      id: "05",
      title: "Cloud Security Assessment",
      shortTitle: "Cloud Security",
      icon: "☁️",
      tagline: "Lock Down AWS, Azure & Multi-Cloud Infrastructure",
      color: "from-sky-500 to-cyan-600",
      badgeColor: "text-sky-700 bg-sky-100 border-sky-200",
      description: "Cloud environments provide agility, but misconfigurations and excessive permissions leave doors open to attacks. We evaluate your AWS, Microsoft Azure, or GCP posture against CIS Benchmarks to ensure bulletproof cloud configurations.",
      includes: [
        "AWS & Microsoft Azure architecture review",
        "IAM roles, permissions & least-privilege audit",
        "Cloud storage bucket & database exposure",
        "Security groups & Virtual Private Cloud (VPC)",
        "Kubernetes & container security",
        "Cloud logging, monitoring & alert audit",
        "Encryption at rest & in transit validation",
        "Serverless & Lambda function auditing",
        "CIS benchmark compliance scoring",
        "Cost & security posture optimization"
      ],
      deliverables: [
        "Cloud security architecture audit",
        "Misconfiguration priority roadmap",
        "IAM privilege reduction strategy",
        "Automated posture benchmark report",
        "Infrastructure-as-code hardening scripts",
        "Compliance alignment matrix"
      ],
      cta: "Secure My Cloud Infrastructure"
    },
    {
      id: "06",
      title: "DPDP Act Compliance & Data Privacy",
      shortTitle: "DPDP Act & Privacy",
      icon: "🔒",
      tagline: "Safeguard Personal Data & Comply with Indian Law",
      color: "from-emerald-500 to-green-600",
      badgeColor: "text-emerald-700 bg-emerald-100 border-emerald-200",
      description: "India's Digital Personal Data Protection (DPDP) Act 2023 mandates strict measures for personal data processing and introduces penalties up to ₹250 Crores. We guide your organization through end-to-end readiness, discovery, and governance.",
      includes: [
        "DPDP Act readiness & gap assessment",
        "Personal data discovery & inventory mapping",
        "Data flow diagrams & cross-border checks",
        "Consent management & purpose limitation",
        "Privacy notices & terms alignment",
        "Data Principal Rights handling workflows",
        "Data retention & secure deletion protocols",
        "Data Protection Impact Assessments (DPIA)",
        "Third-party vendor privacy assessments",
        "Data breach notification preparedness"
      ],
      deliverables: [
        "DPDP compliance gap analysis report",
        "Personal data classification inventory",
        "Data flow maps across systems",
        "Privacy policy & notice templates",
        "Data Principal request SOPs",
        "Executive board compliance presentation"
      ],
      cta: "Start Your DPDP Assessment"
    }
  ];

  const additionalServices = [
    {
      id: "07",
      icon: "🌐",
      title: "Network Security Assessment",
      desc: "Evaluate firewalls, routers, switches, and perimeter systems to eliminate unauthorized access pathways.",
      items: ["Firewall rule review", "Network segmentation", "VPN & remote access", "Internal infrastructure", "Port & service hardening"]
    },
    {
      id: "08",
      icon: "📋",
      title: "Security Compliance & Audit",
      desc: "Align operations with national and global frameworks to satisfy client audits and regulatory standards.",
      items: ["ISO 27001", "DPDP Act 2023", "CERT-In Guidelines", "SOC 2 Type II", "PCI DSS & GDPR"]
    },
    {
      id: "09",
      icon: "⚠️",
      title: "Cybersecurity Risk Assessment",
      desc: "Identify and rank critical business risks across your technology stack, vendors, and operational workflows.",
      items: ["Threat modeling", "Crown jewel identification", "Third-party vendor risk", "Business impact analysis", "Risk treatment roadmap"]
    },
    {
      id: "10",
      icon: "🚨",
      title: "Incident Response & Forensics",
      desc: "Rapid containment, investigation, and recovery when a breach, ransomware, or compromise strikes.",
      items: ["Emergency containment", "Ransomware recovery", "Malware analysis", "Log forensic investigation", "Root-cause reporting"]
    },
    {
      id: "11",
      icon: "📡",
      title: "Managed Security & Monitoring",
      desc: "Round-the-clock defense and real-time SIEM monitoring to detect and neutralize threats proactively.",
      items: ["24/7 SIEM monitoring", "Threat intelligence", "Endpoint detection (EDR)", "Real-time alert triage", "Continuous telemetry"]
    },
    {
      id: "12",
      icon: "🎯",
      title: "Cybersecurity Consulting & vCISO",
      desc: "Executive-level cybersecurity leadership to guide your security roadmap without the full-time executive overhead.",
      items: ["Virtual CISO leadership", "Security roadmap planning", "Board reporting", "Security policy creation", "Vendor evaluation"]
    }
  ];

  const protects = [
    { icon: "🌐", title: "Websites & Portals", desc: "Corporate, marketing, and customer websites protected from malware and defacement." },
    { icon: "💻", title: "Web Applications", desc: "Custom SaaS and enterprise portals safeguarded against injection and unauthorized access." },
    { icon: "📱", title: "Mobile Applications", desc: "Android and iOS apps protected against reverse-engineering and insecure storage." },
    { icon: "🔗", title: "APIs & Integrations", desc: "Microservices and third-party data pipelines shielded from data leaks and abuse." },
    { icon: "☁️", title: "Cloud Environments", desc: "AWS, Azure, and GCP architectures configured for maximum compliance and defense." },
    { icon: "🖥️", title: "Corporate Networks", desc: "Internal and external networks fortified against lateral movement and intruder entry." },
    { icon: "🗄️", title: "Databases & Storage", desc: "Sensitive customer PII and business records encrypted at rest and in transit." },
    { icon: "👤", title: "User Identity & Access", desc: "Zero-trust credential policies, multi-factor authentication, and IAM controls." }
  ];

  const process = [
    { step: "01", title: "Discover", icon: "🔎", desc: "We scope your technology landscape, applications, architecture, and regulatory requirements to define clear rules of engagement." },
    { step: "02", title: "Assess", icon: "📊", desc: "Our certified specialists conduct automated scanning and deep manual ethical hacking to locate vulnerabilities across your perimeter." },
    { step: "03", title: "Validate", icon: "✅", desc: "Every finding is verified to eliminate false positives and assessed for real-world exploitability and business risk impact." },
    { step: "04", title: "Report", icon: "📋", desc: "We deliver clear executive summaries along with in-depth technical documentation, CVSS scores, and precise code-level remediation guidance." },
    { step: "05", title: "Remediate", icon: "🛠️", desc: "Our team collaborates directly with your engineering and DevOps staff to support quick, effective vulnerability patching." },
    { step: "06", title: "Retest", icon: "🔁", desc: "Once fixes are deployed, we perform thorough verification testing to guarantee that every vulnerability has been successfully resolved." },
    { step: "07", title: "Continuous Posture", icon: "📈", desc: "Security is a continuous journey. We help you implement ongoing monitoring, recurring audits, and updated compliance frameworks." }
  ];

  const whyUs = [
    { icon: "⚙️", title: "Technology-First Methodology", desc: "We understand modern stacks — from Next.js and React to cloud microservices, Docker, and enterprise databases." },
    { icon: "🏢", title: "Business-Aligned Risk Prioritization", desc: "We don't just dump raw alerts; we highlight the vulnerabilities that directly threaten your revenue, operations, and data." },
    { icon: "📄", title: "Actionable Remediation Guidance", desc: "Developer-ready instructions, code snippets, and configuration tweaks so your engineers can patch fast without confusion." },
    { icon: "🔄", title: "Full-Spectrum Cyber Defense", desc: "One cohesive partner covering applications, mobile, cloud, network, compliance audits, and incident response." },
    { icon: "📏", title: "Scalable for Startups to Enterprises", desc: "Tailored testing packages designed to fit high-growth startups, mid-market leaders, and global institutions." },
    { icon: "🔐", title: "Combined Security & Privacy Expertise", desc: "Unique dual mastery of technical ethical hacking and legal data protection frameworks like India's DPDP Act and GDPR." }
  ];

  const industries = [
    { icon: "🏦", title: "Banking & FinTech", desc: "Secure payment gateways, core banking APIs, customer PII, and comply with strict RBI & PCI DSS standards." },
    { icon: "🏥", title: "Healthcare & MedTech", desc: "Safeguard electronic health records (EHR), telemedicine platforms, and medical IoT infrastructure." },
    { icon: "🛒", title: "E-Commerce & Retail", desc: "Prevent checkout breaches, account takeovers, card skimming, and protect consumer purchase histories." },
    { icon: "💻", title: "SaaS & Technology", desc: "Harden multi-tenant cloud architectures, defend APIs, and achieve SOC 2 and ISO 27001 readiness for enterprise sales." },
    { icon: "🏭", title: "Manufacturing & IoT", desc: "Protect connected industrial control systems, OT networks, and intellectual property from espionage." },
    { icon: "🎓", title: "Education & EdTech", desc: "Protect student records, learning management systems, and high-volume digital assessment platforms." },
    { icon: "🏨", title: "Hospitality & Travel", desc: "Secure booking engines, loyalty databases, guest identity credentials, and credit card processing." },
    { icon: "🚚", title: "Logistics & Supply Chain", desc: "Ensure operational uptime for fleet tracking, ERP systems, warehouse automation, and partner data interchanges." }
  ];


  const faqs = [
    {
      question: "What is cybersecurity and why is it vital for modern businesses?",
      answer: "Cybersecurity is the discipline of defending digital systems, networks, applications, and sensitive information from malicious attacks, unauthorized access, and disruption.\n\nFor businesses, a strong security posture protects revenue, prevents devastating operational downtime, safeguards customer trust, and ensures full compliance with statutory regulations."
    },
    {
      question: "What is the difference between Vulnerability Assessment and Penetration Testing (VAPT)?",
      answer: "Vulnerability Assessment (VA) is a largely automated process designed to scan systems and identify potential security flaws and misconfigurations.\n\nPenetration Testing (PT) goes a critical step further: certified ethical hackers actively and safely attempt to exploit those flaws using real-world cyberattack techniques to verify if an attacker could compromise data or breach your network. Combining both into VAPT provides complete visibility into your true security posture."
    },
    {
      question: "What is India's Digital Personal Data Protection (DPDP) Act 2023?",
      answer: "The DPDP Act 2023 is India's landmark legislation governing the processing and protection of digital personal data. It mandates verifiable consent, strict purpose limitation, transparency notices, and rigorous security safeguards.\n\nNon-compliance can attract statutory financial penalties of up to ₹250 Crores per violation. We help businesses audit personal data flows, establish consent architectures, and operationalize Data Principal Rights."
    },
    {
      question: "Does my organization need a DPDP Act compliance assessment?",
      answer: "If your business collects, stores, or processes digital personal data belonging to individuals in India (customers, users, or employees), the DPDP Act applies directly to you.\n\nA DPDP assessment evaluates your data inventory, legal grounds for processing, vendor contracts, security controls, and breach-notification procedures to ensure full readiness."
    },
    {
      question: "How frequently should our systems undergo security testing?",
      answer: "Industry standards and regulatory bodies recommend comprehensive VAPT at least once a year. Additionally, testing should always be conducted whenever you:\n• Launch a new major release or feature\n• Undergo cloud migrations or architecture redesigns\n• Deploy new APIs or third-party integrations\n• Experience significant infrastructure changes\n• Prepare for enterprise client audits or fundraising."
    },
    {
      question: "Will penetration testing disrupt our live production systems or cause downtime?",
      answer: "No. Our ethical hackers follow strict, mutually agreed Rules of Engagement (RoE). We can conduct testing during off-peak hours or against staging/UAT environments that mirror production to ensure zero disruption to your daily operations."
    },
    {
      question: "What deliverables and documentation will we receive after the assessment?",
      answer: "You receive a comprehensive audit package containing:\n1. Executive Summary: High-level risk posture and business impact for leadership.\n2. Technical Findings: Detailed vulnerability explanations with CVSS severity scoring.\n3. Proof-of-Concept (PoC): Evidence of each vulnerability.\n4. Actionable Remediation Guide: Clear developer-ready instructions on how to patch each issue.\n5. Retest Report & Attestation: Verification certificate confirming that vulnerabilities were resolved."
    },
    {
      question: "Can Isarva Infotech help our engineering team fix the discovered vulnerabilities?",
      answer: "Yes. Unlike assessment-only firms that just deliver a PDF, Isarva Infotech provides active developer remediation support. We conduct technical debriefs, advise on configuration hardening, and guide your team on code fixes prior to retesting."
    },
    {
      question: "How do we get started with a cybersecurity assessment?",
      answer: "Getting started is seamless. Click 'Get a Security Assessment' or 'Talk to a Cybersecurity Expert' on this page, or submit the inquiry modal. Our cybersecurity lead will schedule a confidential discovery session to understand your scope and provide a tailored proposal within 24 hours."
    }
  ];

  return (
    <>
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-16px); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .cy-float1 { animation: float 6s ease-in-out infinite; }
        .cy-float2 { animation: float2 8s ease-in-out infinite; }
        .cy-shimmer-title {
          background: linear-gradient(90deg, #059669, #10B981, #0891b2, #059669);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .cy-hero-bg {
          background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 30%, #f0fdfa 65%, #ffffff 100%);
        }
        .cy-hero-mesh {
          background-image:
            radial-gradient(circle at 15% 20%, rgba(16,185,129,0.14) 0%, transparent 45%),
            radial-gradient(circle at 85% 80%, rgba(8,145,178,0.12) 0%, transparent 45%);
        }
        .cy-glass-badge {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(16, 185, 129, 0.25);
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.12);
        }
        .cy-stat-card {
          background: #ffffff;
          border: 1px solid rgba(16, 185, 129, 0.16);
          box-shadow: 0 6px 24px rgba(16, 185, 129, 0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .cy-stat-card:hover {
          transform: translateY(-5px);
          border-color: #10B981;
          box-shadow: 0 16px 40px rgba(16, 185, 129, 0.15);
        }
        .cy-tab-pill {
          transition: all 0.25s ease;
          border: 2px solid transparent;
        }
        .cy-tab-pill.active {
          background: linear-gradient(135deg, #059669, #0d9488);
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
        }
        .cy-tab-pill:not(.active) {
          background: #ffffff;
          border-color: #e5e7eb;
          color: #4b5563;
        }
        .cy-tab-pill:not(.active):hover {
          border-color: #10b981;
          color: #059669;
          background: #f0fdf4;
        }
        .cy-card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .cy-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(16, 185, 129, 0.12);
          border-color: #10b981;
        }
        .cy-dark-mesh-banner {
          background: linear-gradient(135deg, #022c22 0%, #064e3b 40%, #0f766e 75%, #083344 100%);
        }
        .cy-tabs-scroller {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: rgba(16, 185, 129, 0.25) transparent;
        }
        .cy-tabs-scroller::-webkit-scrollbar {
          height: 4px;
        }
        .cy-tabs-scroller::-webkit-scrollbar-track {
          background: transparent;
        }
        .cy-tabs-scroller::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.25);
          border-radius: 4px;
        }
      `}</style>

      <div className="bg-white overflow-hidden text-gray-900">
        {/* ─── 1. HERO SECTION ───────────────────────────────────── */}
        <section className="cy-hero-bg cy-hero-mesh relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-emerald-200/50 rounded-full blur-[110px]" />
            <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-cyan-200/50 rounded-full blur-[90px] translate-x-1/4" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-cy-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#10B981" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-cy-grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-emerald-600 transition-colors font-medium">Home</Link>
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/services" className="hover:text-emerald-600 transition-colors font-medium">Services</Link>
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-emerald-600 font-semibold">Cybersecurity Services</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading & Value */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-100/90 text-emerald-800 font-bold text-xs sm:text-sm mb-6 border border-emerald-200 shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                  </span>
                  Comprehensive Cybersecurity & Data Privacy Solutions
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15] mb-6">
                  Protect Your Business.{" "}
                  <span className="cy-shimmer-title block sm:inline">Secure Your Digital Future.</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-4 leading-snug">
                  Comprehensive Cybersecurity & Data Privacy Solutions for Modern Businesses
                </p>

                <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-normal mb-8 max-w-2xl mx-auto lg:mx-0">
                  Cyber threats are evolving every day. From ransomware and phishing attacks to vulnerable web apps, APIs, cloud misconfigurations, and strict DPDP regulations, businesses face expanding risks. At Isarva Infotech, we identify vulnerabilities, harden critical systems, and defend your digital perimeter.
                </p>

                {/* Badges / Value Pills */}
                <div className="flex flex-wrap gap-2.5 mb-10 justify-center lg:justify-start">
                  {[
                    "🛡️ VAPT Assessments",
                    "🔒 DPDP Act 2023",
                    "☁️ Cloud Security",
                    "⚡ API Security",
                    "🚨 Incident Response",
                    "🎯 vCISO Advisory"
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full text-gray-700 text-xs sm:text-sm font-semibold bg-white/90 border border-emerald-200/80 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
                  <button
                    id="cy-hero-primary-cta"
                    onClick={() => handleOpenModal("Cybersecurity Assessment")}
                    className="press-illusion-btn-orange bg-orange-500 text-white font-bold px-8 py-4 text-base cursor-pointer shadow-lg hover:shadow-orange-500/25 transition-all"
                  >
                    Get a Security Assessment
                    <svg className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <button
                    id="cy-hero-secondary-cta"
                    onClick={() => handleOpenModal("Consult with Cybersecurity Expert")}
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-gray-800 bg-white border-2 border-emerald-300/80 rounded-xl hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/50 transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    Talk to a Cybersecurity Expert
                  </button>
                </div>
              </div>

              {/* Right Column: Premium Generated Hero Image & Floating Glass Badges */}
              <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 blur-[70px] rounded-full pointer-events-none" />

                {/* Floating Widget 1: Top Right */}
                <div className="absolute -top-6 -right-4 cy-float1 hidden sm:block z-20">
                  <div className="cy-glass-badge rounded-2xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-600 text-lg font-bold">
                        🛡️
                      </div>
                      <div>
                        <div className="text-gray-900 text-xs font-bold leading-tight">Zero-Day Defense</div>
                        <div className="text-emerald-600 text-[11px] font-semibold flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Active Monitoring
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Widget 2: Bottom Left */}
                <div className="absolute -bottom-6 -left-4 cy-float2 hidden sm:block z-20">
                  <div className="cy-glass-badge rounded-2xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-600 text-lg font-bold">
                        ⚡
                      </div>
                      <div>
                        <div className="text-gray-900 text-xs font-bold leading-tight">DPDP & ISO 27001</div>
                        <div className="text-cyan-700 text-[11px] font-semibold">100% Audit Ready</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Image Frame */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-200/80 shadow-[0_25px_70px_rgba(16,185,129,0.22)] bg-slate-950">
                  <img
                    src="/cybersecurity_hero_shield.jpg"
                    alt="Isarva Infotech Cybersecurity Defense Shield & Penetration Testing"
                    className="w-full h-[420px] sm:h-[480px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Image Overlay Strip */}
                  <div className="absolute bottom-4 left-4 right-4 cy-glass-badge rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-black text-sm">
                        ✓
                      </div>
                      <div>
                        <div className="text-gray-900 text-xs sm:text-sm font-bold">500+ Security Assessments</div>
                        <div className="text-emerald-700 text-[11px] font-semibold">Enterprise-Grade Protection</div>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300">
                      Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics & Impact Strip */}
            <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((s, i) => (
                <div key={i} className="cy-stat-card rounded-2xl p-6 text-center cursor-default">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-600 mb-1">
                    <AnimatedCounter end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm font-bold tracking-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2. WHY CYBERSECURITY MATTERS ──────────────────────── */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-gray-100">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
          <div className="absolute -top-24 right-0 w-[450px] h-[450px] bg-red-50/70 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Modern Analyst & Threat Center Image */}
              <div className="lg:col-span-6 relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-red-200/40 via-orange-100/30 to-emerald-100/30 blur-[60px] rounded-3xl pointer-events-none" />

                <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-slate-900">
                  <img
                    src="/cybersecurity_vapt_audit.jpg"
                    alt="Cybersecurity Security Operations Center & Vulnerability Testing"
                    className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 cy-glass-badge rounded-2xl p-5 border border-white/60">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-wider text-red-600">High-Impact Threat Reality</span>
                    </div>
                    <p className="text-gray-900 text-sm font-bold leading-snug">
                      The global average cost of a data breach exceeds $4.45M. Proactive testing reduces exposure by up to 80%.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Real Attack Vectors */}
              <div className="lg:col-span-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-700 font-bold text-xs uppercase tracking-wider mb-4">
                  ⚠️ Critical Business Imperative
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
                  Why Cybersecurity <span className="text-emerald-600">Matters</span>
                </h2>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                  Your organization's website, web applications, customer databases, cloud infrastructure, and sensitive consumer data are your most valuable assets. A single overlooked configuration or unpatched library can invite immediate compromise.
                </p>

                {/* Threat vectors grid */}
                <div className="grid grid-cols-2 gap-3 mb-8 text-left">
                  {[
                    { icon: "💸", label: "Financial Extortion" },
                    { icon: "🔓", label: "Data Breaches & Leaks" },
                    { icon: "🦠", label: "Ransomware Lockdown" },
                    { icon: "🌐", label: "Site Defacement & Spoof" },
                    { icon: "👤", label: "Customer PII Exposure" },
                    { icon: "🚷", label: "Unauthorized API Access" },
                    { icon: "⛔", label: "Operational Shutdown" },
                    { icon: "⚖️", label: "DPDP Statutory Fines" }
                  ].map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 hover:border-red-300 hover:bg-red-50/30 transition-colors">
                      <span className="text-base">{t.icon}</span>
                      <span className="text-gray-800 text-xs sm:text-sm font-semibold">{t.label}</span>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 mb-8 text-left">
                  <div className="text-emerald-800 font-black text-base sm:text-lg mb-1">
                    Identify Weaknesses. Protect Assets. Neutralize Threats.
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Cybersecurity cannot be an afterthought or a once-a-year checkbox. We provide ongoing, proactive defense that safeguards your bottom line and customer trust.
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <button
                    onClick={() => handleOpenModal("Cybersecurity Risk Assessment")}
                    className="press-illusion-btn-orange bg-orange-500 text-white font-bold px-8 py-4 text-base cursor-pointer shadow-lg"
                  >
                    Protect Your Organization Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. CORE SERVICES SHOWCASE (INTERACTIVE TABS) ──────── */}
        <section id="cyber-services" className="py-16 lg:py-24 bg-gray-50/70 relative overflow-hidden border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
                🛡️ Complete Security Portfolio
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
                Tailored Security Services for Modern Systems
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                From rigorous penetration testing to cloud architecture reviews and data privacy frameworks, explore how Isarva Infotech protects every layer of your business.
              </p>
            </div>

            {/* Service Tabs Navigation */}
            <div className="w-full overflow-hidden mb-8">
              <div className="cy-tabs-scroller flex flex-nowrap lg:flex-wrap items-center justify-start lg:justify-center gap-2 sm:gap-3 pb-3 overflow-x-auto w-full -mx-6 px-6 sm:mx-0 sm:px-0">
                {coreServices.map((srv, idx) => (
                  <button
                    key={srv.id}
                    onClick={() => setActiveTab(idx)}
                    className={`cy-tab-pill shrink-0 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap cursor-pointer flex items-center gap-2 ${activeTab === idx ? "active" : ""}`}
                  >
                    <span>{srv.icon}</span>
                    <span>{srv.shortTitle}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Tab Showcase Card */}
            {coreServices[activeTab] && (
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xl overflow-hidden transition-all duration-300 w-full">
                {/* Header Strip */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 p-5 sm:p-8 lg:p-10 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-start sm:items-center gap-3 min-w-0">
                      <span className="shrink-0 text-2xl sm:text-4xl p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 border border-white/10 shadow-inner">
                        {coreServices[activeTab].icon}
                      </span>
                      <div className="min-w-0">
                        <span className="text-emerald-400 text-[11px] sm:text-xs font-black uppercase tracking-widest block mb-0.5">
                          Service {coreServices[activeTab].id} of 12
                        </span>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight break-words">
                          {coreServices[activeTab].title}
                        </h3>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold border border-white/20 bg-white/10 text-white backdrop-blur-md break-words max-w-full">
                      {coreServices[activeTab].tagline}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl">
                    {coreServices[activeTab].description}
                  </p>
                </div>

                {/* Body: What We Assess & Deliverables */}
                <div className="p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                  {/* Scope & Inclusions */}
                  <div className="lg:col-span-7">
                    <h4 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      What We Test & Assess
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {coreServices[activeTab].includes.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-xs sm:text-sm font-medium hover:border-emerald-300 hover:bg-emerald-50/40 transition-colors"
                        >
                          <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Deliverables */}
                  <div className="lg:col-span-5 bg-emerald-50/40 rounded-2xl p-6 border border-emerald-100 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-500" />
                        Deliverables & Reports
                      </h4>
                      <ul className="space-y-2.5 mb-6">
                        {coreServices[activeTab].deliverables.map((deliv, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-semibold">
                            <span className="text-emerald-500 font-black">→</span>
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-emerald-200/60">
                      <button
                        onClick={() => handleOpenModal(coreServices[activeTab].title)}
                        className="w-full press-illusion-btn-orange bg-orange-500 text-white font-bold py-3.5 px-6 text-sm sm:text-base cursor-pointer shadow-md"
                      >
                        {coreServices[activeTab].cta}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ─── 4. DPDP ACT & DATA PRIVACY SPOTLIGHT ──────────────── */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Real High-Tech Biometric Safe / Privacy Vault Image */}
              <div className="lg:col-span-6 relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-300/30 to-teal-200/30 blur-[60px] rounded-3xl pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-200 shadow-2xl bg-slate-950">
                  <img
                    src="/cybersecurity_data_privacy.jpg"
                    alt="India DPDP Act 2023 Compliance & Data Privacy Encryption Vault"
                    className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 cy-glass-badge rounded-2xl p-5 border border-emerald-200 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-emerald-800 text-xs font-black uppercase tracking-wider">
                          Digital Personal Data Protection
                        </div>
                        <div className="text-gray-900 text-sm sm:text-base font-bold">
                          ₹250 Crore Penalty Prevention Framework
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                        Act 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Regulatory Breakdown & 4 Pillars */}
              <div className="lg:col-span-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
                  🔒 Regulatory Governance
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
                  India DPDP Act 2023 &{" "}
                  <span className="text-emerald-600">Data Privacy Compliance</span>
                </h2>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                  The Digital Personal Data Protection Act transforms how Indian businesses collect, store, and process digital personal information. Isarva Infotech turns mandatory compliance into a competitive trust advantage.
                </p>

                {/* 4 Pillars */}
                <div className="space-y-4 mb-8 text-left">
                  {[
                    {
                      title: "Data Discovery & Flow Inventory",
                      desc: "Identify exactly where customer, employee, and partner PII resides across your databases, cloud buckets, and third-party SaaS."
                    },
                    {
                      title: "Consent & Purpose Architecture",
                      desc: "Implement itemized, multilingual consent collection mechanisms that stand up to regulatory audits."
                    },
                    {
                      title: "Data Principal Rights Handling",
                      desc: "Create automated workflows for customer data access, correction, erasure, and grievance redressal."
                    },
                    {
                      title: "Breach Notification & DPIA Readiness",
                      desc: "Establish protocol procedures to identify, contain, and report personal data breaches within statutory deadlines."
                    }
                  ].map((pillar, i) => (
                    <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-bold text-sm sm:text-base mb-0.5">{pillar.title}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start">
                  <button
                    onClick={() => handleOpenModal("DPDP Act Compliance Readiness")}
                    className="press-illusion-btn-orange bg-orange-500 text-white font-bold px-8 py-4 text-base cursor-pointer shadow-lg"
                  >
                    Start Your DPDP Compliance Audit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. EXTENDED SECURITY SERVICES (GRID) ──────────────── */}
        <section className="py-16 lg:py-24 bg-gray-50/70 relative overflow-hidden border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
                🌐 Specialized Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
                Additional Cybersecurity Capabilities
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Holistic cyber risk mitigation covering perimeter networks, incident investigation, 24/7 SIEM monitoring, and executive virtual CISO leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {additionalServices.map((s) => (
                <div
                  key={s.id}
                  className="cy-card-hover bg-white rounded-2xl p-7 border border-gray-200 flex flex-col justify-between items-center text-center relative"
                >
                  <div className="w-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-3xl mb-4 mx-auto shadow-sm">
                      {s.icon}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">{s.desc}</p>

                    <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                      {s.items.map((item, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenModal(s.title)}
                    className="w-full py-2.5 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors text-center border border-emerald-200 cursor-pointer"
                  >
                    Inquire About {s.title.split(' ')[0]} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. WHAT WE PROTECT ────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
                🛡️ Digital Perimeter
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
                What We Protect
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Every asset in your digital environment is an entry point. We build concentric defense circles around your entire tech stack.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {protects.map((p, idx) => (
                <div
                  key={idx}
                  className="cy-card-hover bg-white rounded-2xl p-6 border border-gray-200 text-center flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-2xl mb-4 shadow-sm">
                    {p.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. OUR 7-STEP METHODOLOGY ─────────────────────────── */}
        <section className="py-16 lg:py-24 bg-gray-50/80 relative overflow-hidden border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
                🔄 Systematic Approach
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
                Our 7-Step Security Methodology
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                A disciplined, ethical testing workflow designed to deliver actionable clarity without operational downtime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, idx) => (
                <div
                  key={idx}
                  className={`cy-card-hover bg-white rounded-2xl p-6 border border-gray-200 relative flex flex-col items-center text-center justify-between ${idx === 6 ? "md:col-span-2 lg:col-span-2" : ""}`}
                >
                  <div className="w-full flex flex-col items-center text-center">
                    <div className="flex flex-col items-center gap-2 mb-4">
                      <span className="text-xs font-black px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
                        Step {step.step}
                      </span>
                      <span className="text-3xl mt-1 block">{step.icon}</span>
                    </div>
                    <h3 className="text-lg font-black text-gray-900 mb-2 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 8. WHY CHOOSE US ───────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
                🏆 Why Isarva Infotech
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
                Why Choose Us as Your Cybersecurity Partner
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                We bridge the divide between theoretical compliance and deep hands-on technical hardening.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {whyUs.map((w, idx) => (
                <div
                  key={idx}
                  className="cy-card-hover bg-white rounded-2xl p-7 border border-gray-200 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-2xl mb-4 mx-auto shadow-sm">
                    {w.icon}
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2 text-center">{w.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 9. INDUSTRIES WE PROTECT ──────────────────────────── */}
        <section className="py-16 lg:py-24 bg-gray-50/70 relative overflow-hidden border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
                🏢 Sector Expertise
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
                Industries We Help Protect
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Customized threat models adapted to your vertical's specific data sensitivity and regulatory framework.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="cy-card-hover bg-white rounded-2xl p-6 border border-gray-200 text-center flex flex-col items-center justify-between"
                >
                  <div className="w-full flex flex-col items-center text-center">
                    <span className="text-3xl mb-3 block mx-auto">{ind.icon}</span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 text-center">{ind.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ─── 11. FAQ ACCORDION ─────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-gray-50/80 relative overflow-hidden border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-200">
                ❓ Common Questions
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Answers to common questions regarding our cybersecurity testing, scope definition, methodology, and DPDP readiness.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── 12. FINAL HIGH-IMPACT CTA BANNER ──────────────────── */}
        <section className="py-20 lg:py-28 cy-dark-mesh-banner relative overflow-hidden text-white">
          <div className="absolute inset-0 pointer-events-none opacity-15">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-cy-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#10B981" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-cy-dots)" />
            </svg>
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs uppercase tracking-wider mb-6 border border-emerald-400/30 backdrop-blur-md">
              🛡️ Take Proactive Action Now
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Ready to Strengthen Your{" "}
              <span className="text-emerald-400">Security Posture?</span>
            </h2>

            <p className="text-base sm:text-xl text-gray-200 leading-relaxed font-medium mb-10 max-w-3xl mx-auto">
              Don't wait for a devastating breach or a regulatory notice to uncover critical vulnerabilities. Partner with Isarva Infotech to safeguard your systems, defend your users, and protect your brand equity.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <button
                id="cy-final-cta-primary"
                onClick={() => handleOpenModal("Cybersecurity Assessment Consultation")}
                className="press-illusion-btn-orange bg-orange-500 text-white font-bold px-9 py-4 text-base cursor-pointer shadow-xl hover:shadow-orange-500/30 transition-all"
              >
                Schedule a Security Assessment
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                id="cy-final-cta-secondary"
                onClick={() => handleOpenModal("Cybersecurity Expert Discussion")}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl backdrop-blur-md transition-all cursor-pointer"
              >
                Speak with a Security Specialist
              </button>
            </div>
          </div>
        </section>

        {/* Contact Form Modal */}
        <ContactFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          preSelectedType="services"
          preSelectedItem={modalItem}
        />
      </div>
    </>
  );
}
