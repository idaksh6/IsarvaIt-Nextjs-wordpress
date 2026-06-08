"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "../AppLink";
import ContactFormModal from "../ContactFormModal";
import { motion } from "framer-motion";
import {
  Box,
  Rocket,
  Network,
  ShoppingCart,
  Bolt,
  CloudUpload,
  Shield,
  Wrench,
  Sliders,
  GitBranch,
  Server,
  PenTool,
  Database,
  ClipboardList,
  Monitor,
  LineChart,
  RefreshCw,
  RotateCw,
  Gauge,
  Puzzle,
  Boxes,
  Brain,
  Search,
  MessageCircle,
  Sparkles,
  Layers,
  CircleCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./laravel/laravel.css";

const GLOBAL_BTN_ARROW = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
      clipRule="evenodd"
    />
  </svg>
);

const GLOBAL_BTN_ORANGE = "press-illusion-btn-orange text-white w-fit font-bold px-8 py-3 text-base flex cursor-pointer";

const TICKER_ITEMS = [
  "LARAVEL 11",
  "PHP 8.3",
  "ELOQUENT ORM",
  "LIVEWIRE",
  "INERTIA.JS",
  "MYSQL & POSTGRESQL",
  "REDIS CACHING",
  "VUE & REACT",
  "REST & GRAPHQL API",
  "TAILWIND CSS",
  "DOCKER & KUBERNETES",
  "AWS VAPOR & FORGE",
];

const SERVICES = [
  { icon: Box, title: "Custom Web Applications", desc: "End-to-end bespoke web apps built using MVC monolith architecture or modern headless SPAs (Inertia/Vue/React)." },
  { icon: Rocket, title: "Legacy Migration & Upgrades", desc: "Smooth migration from old legacy architectures, PHP versions, or frameworks to Laravel 11 with zero data loss." },
  { icon: Network, title: "RESTful & GraphQL APIs", desc: "Secure, well-documented, and highly optimized API layers designed for mobile apps, frontend clients, or third-party syndication." },
  { icon: ShoppingCart, title: "Custom Ecommerce Systems", desc: "High-converting transactional platforms with custom shopping funnels, payment gateways, and CRM synchronization." },
  { icon: Bolt, title: "Performance Optimization", desc: "Speed tuning utilizing Laravel Octane, Redis caching, query optimization, and asynchronous queue management." },
  { icon: CloudUpload, title: "DevOps, AWS & CI/CD", desc: "Production environment architecture using Laravel Forge, Vapor, Docker containers, and fully automated deployment workflows." },
  { icon: Shield, title: "Security & Hardening", desc: "Enterprise audits, penetration shielding, CSRF/XSS protection, database isolation, and encrypted data storage pipelines." },
  { icon: Wrench, title: "Support & Maintenance", desc: "Active monitoring, security patches, regular library upgrades, backup oversight, and feature extensions." },
];

const FIGMA_FEATURES = [
  { icon: Sliders, title: "Custom Logic Tuning", desc: "Every database table, routing rule, and business requirement is tailored to your business operations.", tag: "100% Tailored" },
  { icon: GitBranch, title: "Agile Engineering", desc: "We build iteratively using sprints. Regular demonstrations let you see and test your software as it grows.", tag: "Iterative Sprints" },
  { icon: Server, title: "Enterprise Standard", desc: "Ready to scale, highly secured, and optimized to handle high concurrent user traffic.", tag: "Built to Scale" },
];

const ARCH_INPUTS = [
  { icon: PenTool, color: "#f59e0b", title: "Wireframes & Mockups", desc: "Visual UI specifications" },
  { icon: Database, color: "#6366f1", title: "Legacy Data", desc: "Relational SQL databases" },
  { icon: ClipboardList, color: "#10b981", title: "Custom Logic", desc: "Business flow requirements" },
];

const ARCH_RESULTS = [
  { icon: Monitor, color: "#3b82f6", title: "Custom Web App", desc: "Interactive client frontends" },
  { icon: LineChart, color: "#10b981", title: "Analytics & SEO", desc: "Optimized index & metrics" },
  { icon: RefreshCw, color: "#8b5cf6", title: "CRM & API Sync", desc: "Automated cloud sync" },
];

const LOGIC_PILLS = ["Eloquent ORM", "Routing & Middleware", "Queue Systems", "Sanctum Auth"];

const CAPABILITIES = [
  { icon: RotateCw, title: "Seamless Migration", desc: "We handle total application relocations while keeping data pipelines live and routing active with zero loss." },
  { icon: Gauge, title: "Feature-Driven Velocity", desc: "Laravel's modular ecosystems allow rapid feature deployment, delivering business value quickly without rewriting standard modules." },
  { icon: Puzzle, title: "Custom Package Architecture", desc: "Build scalable, modular features encapsulated into custom Laravel packages for clean code maintenance." },
  { icon: Bolt, title: "Performance Tuning", desc: "Sub-100ms API response times through database optimizations, multi-level Redis caching, and Laravel Octane." },
  { icon: Shield, title: "Ironclad Built-in Security", desc: "Out-of-the-box defense mechanisms against CSRF, SQL injections, XSS, and session hijack threats protect your users from day one." },
  { icon: Boxes, title: "Queue & Background Jobs", desc: "Offload heavy workflows (emails, reports, syncs) using queue workers backed by Laravel Horizon and Redis." },
];

const ENTERPRISE_ITEMS = [
  "Enterprise Dashboards",
  "Cloud Auto-scaling",
  "Multi-tenant Architecture",
  "Secure Vault Integration",
  "SSO / OAuth Providers",
  "Automated Unit Tests",
  "Data Warehousing",
  "Real-time WebSockets",
  "Compliance Monitoring",
  "Audit Log Trails",
];

const PROCESS_SLIDES = [
  {
    number: "01",
    title: "Team Assembly",
    desc: "We form a dedicated engineering unit equipped with the specific skills required for your custom web app requirements.",
    bullets: ["Expert Laravel Architect assignments", "UI/UX Frontend Specialists integration", "Devops engineer allocation for server blueprinting"],
  },
  {
    number: "02",
    title: "Discovery",
    desc: "Deep-dive assessment of legacy setups, relational structures, user personas, and target business integrations.",
    bullets: ["Requirement matrix compilation", "Database structure diagrams mapping", "User journey flow reviews"],
  },
  {
    number: "03",
    title: "Planning",
    desc: "Comprehensive system design blueprints, interface routes, caching strategies, and milestones mapping.",
    bullets: ["API endpoint route documentation", "Server configuration and hosting layout", "Sprint milestones and timeline scheduling"],
  },
  {
    number: "04",
    title: "Implementation",
    desc: "Agile development cycles accompanied by continuous unit testing and regular codebase demonstrations.",
    bullets: ["Clean, decoupled code structure", "Automated test cases (Pest & PHPUnit)", "Bi-weekly demonstration milestones"],
  },
  {
    number: "05",
    title: "Launch",
    desc: "Seamless deployments on production servers with server hardening, load tests, and analytics tracking integrations.",
    bullets: ["Zero-downtime deployment pipelines", "Performance tuning and caching activation", "Error tracking engine configuration"],
  },
  {
    number: "06",
    title: "Support",
    desc: "Continuous server updates, framework patch updates, database backups, and ongoing optimization cycles.",
    bullets: ["Continuous server uptime & health monitoring", "Security patching & major version upgrades", "Direct developer access and feature additions"],
  },
];

const AI_CAPS = [
  { icon: Brain, title: "Intelligent Analytics", desc: "Predictive analysis models running on custom dashboard metrics, predicting churn and pipeline forecasts." },
  { icon: Search, title: "Semantic Vector Search", desc: "Replace basic searches with contextual similarity queries mapping keywords with precise intents." },
  { icon: MessageCircle, title: "AI Agents & Chatbots", desc: "Context-aware virtual assistants connected directly to database APIs to service users automatically." },
  { icon: Sparkles, title: "Automated Workflows", desc: "Generative text/media integrations speeding up content curation directly within your CMS admin dashboard." },
];

function ProcessSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((idx) => setCurrentSlide(idx), []);
  const nextSlide = useCallback(() => setCurrentSlide((p) => (p + 1) % PROCESS_SLIDES.length), []);
  const prevSlide = useCallback(() => setCurrentSlide((p) => (p - 1 + PROCESS_SLIDES.length) % PROCESS_SLIDES.length), []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="lv-slider-container">
      <div className="lv-slider-viewport">
        <div className="lv-slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {PROCESS_SLIDES.map((slide) => (
            <div key={slide.number} className="lv-slide">
              <div>
                <div className="lv-slide-number">{slide.number}</div>
                <h3>{slide.title}</h3>
              </div>
              <div>
                <p className="lv-slide-desc">{slide.desc}</p>
                <ul className="lv-slide-bullets">
                  {slide.bullets.map((item) => (
                    <li key={item}>
                      <CircleCheck className="lv-bullet-check w-5 h-5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lv-slider-controls">
        <button type="button" className="lv-slider-nav-btn" onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="lv-slider-dots">
          {PROCESS_SLIDES.map((slide, idx) => (
            <button
              key={slide.number}
              type="button"
              className={`lv-dot ${idx === currentSlide ? "lv-dot-active" : ""}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button type="button" className="lv-slider-nav-btn" onClick={nextSlide} aria-label="Next slide">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function ProductDetailPremiumLaravel({ product, allProducts = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openContact = useCallback(() => setIsModalOpen(true), []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="laravel-page">
      {/* Hero */}
      <section className="lv-hero pt-32 lg:pt-40 pb-12 lg:pb-16">
        <div className="lv-container">
          <div className="lv-hero-grid">
            <div className="text-center lg:text-left">
              <div className="lv-hero-tag mx-auto lg:mx-0 w-fit">
                <span className="lv-ticker-dot" />
                Premium Engineering
              </div>
              <h1 className="mb-6">
                Laravel
                <br />
                Built for <span className="lv-grad-text">Performance & Scale</span>
              </h1>
              <p className="lv-hero-desc mx-auto lg:mx-0">
                At Isarva, we don&apos;t just &apos;do&apos; Laravel development—we live and breathe it. We combine our technical, creative, and engineering expertise with dedicated support to bring you outstanding, secure, and robust custom web applications.
              </p>
              <div className="lv-hero-ctas">
                <button type="button" onClick={openContact} className={GLOBAL_BTN_ORANGE}>
                  <span>Book a Free Consultation</span>
                  {GLOBAL_BTN_ARROW}
                </button>
                <button type="button" onClick={() => scrollTo("services")} className="lv-btn-secondary">
                  View Services
                </button>
              </div>
              <div className="lv-hero-stats">
                <div className="lv-stat-item">
                  <h3>100%</h3>
                  <p>Quality Codebase</p>
                </div>
                <div className="lv-stat-item">
                  <h3>A+</h3>
                  <p>Speed & Vitals</p>
                </div>
                <div className="lv-stat-item">
                  <h3>Secure</h3>
                  <p>Built-in Protection</p>
                </div>
              </div>
            </div>

            <div className="lv-hero-visual px-2 sm:px-0">
              <img
                src="/products/laravel/laravel_dashboard.png"
                alt="Laravel Development Dashboard Isarva"
                className="lv-main-graphic"
              />
              <div className="lv-visual-badge lv-badge-speed">
                <div className="lv-badge-icon">
                  <Bolt className="w-5 h-5" />
                </div>
                <div className="lv-badge-info">
                  <h4>Application Speed</h4>
                  <p>99/100 Core Vitals</p>
                </div>
              </div>
              <div className="lv-visual-badge lv-badge-arch">
                <div className="lv-badge-icon">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="lv-badge-info">
                  <h4>Next-Gen</h4>
                  <p>Laravel Architecture</p>
                </div>
              </div>
              <div className="lv-floating-code hidden sm:block">
                <span style={{ color: "#ff2d20" }}>Route</span>
                ::get(<span style={{ color: "#ecc48d" }}>&apos;/api/v1/scale&apos;</span>, ScaleController::class);
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech ticker */}
      <section className="lv-ticker-section" aria-hidden="true">
        <div className="lv-ticker-wrap">
          <div className="lv-ticker">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <div key={`${item}-${i}`} className="lv-ticker-item">
                <span className="lv-ticker-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 lg:py-16 bg-[#f8fafc]" id="services">
        <div className="lv-container">
          <div className="lv-section-header">
            <span className="lv-section-label">What We Offer</span>
            <h2 className="mb-4 capitalize">
              Explore Our <span className="lv-grad-text">Laravel Development</span> Services
            </h2>
            <p className="lv-section-desc">
              Comprehensive, high-performance solutions to build, optimize, and scale your custom web application ecosystem.
            </p>
          </div>
          <div className="lv-services-grid">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="lv-service-card">
                <div className="lv-service-icon">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mb-3">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Idea to Software */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="lv-container">
          <div className="lv-figma-grid">
            <div className="text-center lg:text-left">
              <span className="lv-section-label">Idea to Software</span>
              <h2 className="mb-4 capitalize">
                Your Idea,
                <br />
                Brought to Life.
              </h2>
              <p className="lv-section-desc mb-6">
                We take your custom requirements, wireframes, or feature ideas and turn them into fast, secure, and fully customized Laravel web applications—built from the ground up with clean, scalable code. No shortcuts, no bloated builder packages.
              </p>
              <div className="lv-figma-alert text-left">
                <span className="text-2xl shrink-0">💡</span>
                <p>
                  <strong>Don&apos;t have a structured requirements list yet?</strong> Our product design team can collaborate with you to define, map, and document your premium features before our engineering team begins coding.
                </p>
              </div>
              <button type="button" onClick={openContact} className={`${GLOBAL_BTN_ORANGE} mx-auto lg:mx-0`}>
                <span>Convert Your Idea into Software</span>
                {GLOBAL_BTN_ARROW}
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="/products/laravel/figma_to_laravel.png"
                alt="Custom requirements to custom Laravel software"
                className="lv-figma-main-img"
              />
            </div>
          </div>
          <div className="lv-figma-features">
            {FIGMA_FEATURES.map(({ icon: Icon, title, desc, tag }) => (
              <div key={title} className="lv-f-feature-card">
                <div className="lv-f-icon">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="mb-2">{title}</h4>
                <p>{desc}</p>
                <span className="lv-f-feature-tag">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-12 lg:py-16 bg-[#f8fafc]" id="architecture">
        <div className="lv-container">
          <div className="lv-section-header">
            <span className="lv-section-label">Architecture</span>
            <h2 className="mb-4 capitalize">
              Your <span className="lv-grad-text">Laravel Ecosystem</span>
            </h2>
            <p className="lv-section-desc">
              How we architect and connect every tier of your modern custom web application framework.
            </p>
          </div>
          <div className="lv-arch-map">
            <div className="lv-arch-column">
              <div className="lv-arch-col-title">Inputs</div>
              {ARCH_INPUTS.map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="lv-arch-card">
                  <div className="lv-arch-card-icon">
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div className="lv-arch-card-details">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lv-arch-column lg:justify-center">
              <div className="lv-arch-col-title">Logic & Core Engine</div>
              <div className="lv-arch-logic-block">
                <h3 className="text-white mb-2">Laravel Core</h3>
                <p>Enterprise Standard Framework</p>
                <div className="lv-arch-sub-grid">
                  {LOGIC_PILLS.map((pill) => (
                    <div key={pill} className="lv-logic-pill">
                      {pill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lv-arch-column">
              <div className="lv-arch-col-title">Results</div>
              {ARCH_RESULTS.map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="lv-arch-card">
                  <div className="lv-arch-card-icon">
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div className="lv-arch-card-details">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="lv-container">
          <div className="lv-section-header">
            <span className="lv-section-label">Core Capabilities</span>
            <h2 className="mb-4 capitalize">Engineered for Success</h2>
            <p className="lv-section-desc">
              Elite engineering methodologies combined with comprehensive PHP standards for unmatched growth.
            </p>
          </div>
          <div className="lv-caps-grid">
            {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="lv-cap-card">
                <div className="lv-cap-icon">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="lv-cap-info">
                  <h3 className="mb-2">{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-12 lg:py-16 bg-[#f8fafc]">
        <div className="lv-container">
          <div className="lv-section-header">
            <span className="lv-section-label">Enterprise Solutions</span>
            <h2 className="mb-4 capitalize">Laravel for Business Growth</h2>
            <p className="lv-section-desc">
              High-scale setups with consolidated databases, robust middleware logic, and custom integrations.
            </p>
          </div>
          <div className="lv-ent-grid">
            {ENTERPRISE_ITEMS.map((item) => (
              <div key={item} className="lv-ent-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 lg:py-16 bg-white" id="process">
        <div className="lv-container">
          <div className="lv-section-header">
            <span className="lv-section-label">Process</span>
            <h2 className="mb-4 capitalize">
              Our <span className="lv-grad-text">Development Lifecycle</span>
            </h2>
            <p className="lv-section-desc">
              A structured, six-phase implementation framework that delivers precision results on time.
            </p>
          </div>
          <ProcessSlider />
        </div>
      </section>

      {/* AI */}
      <section className="py-12 lg:py-16 lv-ai-section" id="ai-integration">
        <div className="lv-container">
          <div className="lv-section-header">
            <span className="lv-section-label">AI-Enhanced Laravel</span>
            <h2 className="mb-4 capitalize">Supercharged with Artificial Intelligence</h2>
            <p className="lv-section-desc">
              We integrate cutting-edge LLMs and machine learning algorithms directly into your Laravel web application backends to deliver superior user experiences.
            </p>
          </div>
          <div className="lv-ai-grid">
            <div className="lv-ai-caps">
              {AI_CAPS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="lv-ai-cap-card">
                  <div className="lv-ai-icon-wrap">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-2">{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <div className="lv-ai-visual">
              <h3 className="mb-3">Ready to bring AI to your Laravel Stack?</h3>
              <p>Integrate open source LLMs or APIs (Gemini, OpenAI, Anthropic) seamlessly into your backend jobs structure.</p>
              <button type="button" onClick={openContact} className={`${GLOBAL_BTN_ORANGE} mx-auto`}>
                <span>Explore AI Integration Options</span>
                {GLOBAL_BTN_ARROW}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-white" id="contact">
        <div className="lv-container">
          <div className="lv-cta-wrap">
            <h2 className="mb-4 capitalize">Your Trusted Development Partner</h2>
            <p>
              Collaborate with a highly experienced team that understands Laravel inside out and is committed to your long-term success.
            </p>
            <div className="lv-hero-ctas">
              <button type="button" onClick={openContact} className={GLOBAL_BTN_ORANGE}>
                <span>Hire Our Experts</span>
                {GLOBAL_BTN_ARROW}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-12 lg:py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-[10px] font-black text-[#ff2d20] tracking-[0.28em] uppercase mb-3 bg-red-50 px-4 py-2 rounded-full border border-red-100">
              MORE PRODUCTS
            </span>
            <h2 className="mb-4 capitalize">Explore Our More Products</h2>
            <p className="text-gray-500 max-w-[600px] mx-auto text-base leading-relaxed">
              Discover our comprehensive suite of software solutions designed to transform your business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {allProducts
              .filter((p) => p.slug !== product.slug && !p.slug.includes("staging") && !p.slug.includes("-old") && p.slug !== "bill-soft")
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
                  <Link href={`/product/${prod.slug}`} prefetch={false} className="block h-full">
                    <div className="relative rounded-3xl p-8 h-full bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group">
                      <div className="inline-flex items-center justify-center bg-white text-[#ff2d20] text-xs font-bold px-3 py-1 rounded-full border-2 border-red-200 shadow-md mb-4">
                        {prod.category}
                      </div>
                      <div className="relative flex-grow w-full flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff2d20] to-[#ff6b35] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                          <span className="text-3xl">{prod.icon}</span>
                        </div>
                        <h3 className="mb-3 uppercase">{prod.title}</h3>
                        {prod.tagline && (
                          <p className="text-[#ff2d20] font-bold text-sm mb-3 uppercase tracking-wide">{prod.tagline}</p>
                        )}
                        <p className="text-gray-500 leading-relaxed mb-6 text-sm font-medium">{prod.shortDescription}</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-[#ff2d20] font-black text-xs uppercase tracking-widest mt-auto pt-4 border-t border-gray-50 group-hover:gap-3 transition-all w-full">
                        Explore Product
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" prefetch={false} className={`${GLOBAL_BTN_ORANGE} mx-auto`}>
              <span>View All Products</span>
              {GLOBAL_BTN_ARROW}
            </Link>
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
