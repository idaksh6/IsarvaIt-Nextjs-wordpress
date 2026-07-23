import Link from "../components/AppLink";
import Image from "next/image";
import {
  ShieldCheck,
  MonitorCheck,
  MessageSquareText,
  Users,
  Wrench,
  SearchCheck,
  Target,
  Handshake,
  Zap,
  Lock,
  Award,
  Layers,
  CircleCheck,
  Heart,
  Cloud,
  Network,
} from "lucide-react";
import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

const SECTION_LABEL =
  "inline-block text-[#10b981] font-black tracking-[0.2em] capitalize text-[clamp(0.65rem,1.3vw,0.85rem)] mb-4";

const CARD_BASE =
  "group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-[#10b981]/8 shadow-[0_8px_30px_rgba(22,66,60,0.06)] hover:shadow-[0_16px_40px_rgba(22,66,60,0.1)] hover:border-[#10b981]/20 transition-all duration-300 overflow-hidden";

const ICON_SIZE = "w-6 h-6";
const ICON_STROKE = 2;

const HERO_IMAGE = "/images/quality-policy/hero-banner.png";

/* ── SEO: noindex + nofollow ─────────────────────────────── */
export const metadata = generateSEOMetadata({
  title: "Quality Policy",
  description:
    "At Isarva Infotech, quality is achieved through clear planning, structured execution, strong technical standards, and continuous improvement. Discover our quality commitment and delivery methodology.",
  keywords: [
    "quality policy",
    "quality assurance",
    "software quality",
    "delivery methodology",
    "enterprise quality standards",
  ],
  url: "/quality-policy",
  image: "https://www.isarvait.com/images/quality-policy/hero-banner.png",
  noIndex: false,
});

const heroHighlights = [
  "Structured delivery",
  "Enterprise-grade QA",
  "Long-term support",
];

/* ── Quality commitment items ───────────────────────────── */
const commitmentItems = [
  {
    icon: Layers,
    title: "Structured & Quality-Focused Development",
    description:
      "Business-driven and strategy-aligned processes ensuring consistent, reliable, and high-quality software delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Secure, Scalable & High-Performance Solutions",
    description:
      "Built with enterprise-grade security, scalability, and optimized performance to handle real-world demands.",
  },
  {
    icon: SearchCheck,
    title: "Enterprise-Grade Coding & Testing",
    description:
      "Rigorous coding standards backed by CI/CD pipelines, unit testing, integration testing, and performance validation.",
  },
  {
    icon: MonitorCheck,
    title: "Continuous Monitoring & Optimization",
    description:
      "Proactive system monitoring, ongoing improvements, and rapid issue resolution to maintain peak application performance.",
  },
  {
    icon: MessageSquareText,
    title: "Transparent Communication & Timely Delivery",
    description:
      "Clear project visibility, honest progress updates, and dependable timelines that keep stakeholders informed at every stage.",
  },
  {
    icon: Users,
    title: "Reliable & User-Centric Experience",
    description:
      "Solutions designed around real user needs — intuitive interfaces, stable performance, and experiences people trust.",
  },
  {
    icon: Wrench,
    title: "Long-Term Support & Improvements",
    description:
      "Dedicated post-launch support, proactive enhancements, and a partnership mindset that grows with your business.",
  },
];

/* ── Delivery methodology steps ─────────────────────────── */
const methodologySteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description: "Understanding your business needs and defining the right solution.",
    image: "/images/quality-policy/methodology_step1.png",
    icon: Users,
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description: "Creating a roadmap and robust architecture for scalability.",
    image: "/images/quality-policy/methodology_step2.png",
    icon: Network,
  },
  {
    number: "03",
    title: "Development",
    description: "Building clean, efficient, and high-performance Laravel applications.",
    image: "/images/quality-policy/methodology_step3.png",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description: "Rigorous testing to ensure functionality, security, and bug-free performance.",
    image: "/images/quality-policy/methodology_step4.png",
    icon: Cloud,
  },
  {
    number: "05",
    title: "Deployment",
    description: "Smooth and secure deployment for a seamless go-live experience.",
    image: "/images/quality-policy/methodology_step5.png",
    icon: MonitorCheck,
  },
  {
    number: "06",
    title: "Support & Maintenance",
    description: "Continuous support and maintenance for long-term reliability and growth.",
    image: "/images/quality-policy/methodology_step6.png",
    icon: Heart,
  },
];

/* ── Isarva advantage items ─────────────────────────────── */
const advantageItems = [
  {
    icon: Zap,
    title: "Innovation-Driven Solutions",
    description:
      "Forward-thinking engineering that applies emerging technologies to solve complex challenges and unlock new opportunities.",
  },
  {
    icon: Lock,
    title: "Scalable & Secure Technologies",
    description:
      "Modern architectures engineered to scale with demand while maintaining robust security across every layer of your stack.",
  },
  {
    icon: Award,
    title: "Enterprise-Level Quality Standards",
    description:
      "Disciplined development practices, thorough testing, and adherence to industry best practices on every engagement.",
  },
  {
    icon: Target,
    title: "Outcome-Focused Development",
    description:
      "We measure success by business impact — delivering features and results that drive measurable growth and efficiency.",
  },
  {
    icon: Handshake,
    title: "Long-Term Technology Partnership",
    description:
      "Beyond project delivery, we build lasting relationships with proactive support and strategic technology guidance.",
  },
];

const GLOBAL_BTN_ARROW = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 9"
    className="h-2 w-4"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
      clipRule="evenodd"
    />
  </svg>
);

function SectionHeader({ label, title, description, centered = false, id }) {
  return (
    <div
      className={`mb-10 lg:mb-14 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <span className={SECTION_LABEL}>{label}</span>
      <h2 id={id} className="font-display text-[#16423C] capitalize">
        {title}
      </h2>
      {description ? (
        <p className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed mt-4">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function PolicyIcon({ icon: Icon, className = "" }) {
  return (
    <div
      className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-[#10b981]/12 to-[#16423C]/5 border border-[#10b981]/15 flex items-center justify-center shrink-0 ${className}`}
    >
      <Icon
        className={`${ICON_SIZE} text-[#10b981]`}
        strokeWidth={ICON_STROKE}
        aria-hidden="true"
      />
    </div>
  );
}

function PolicyCard({ icon, title, description, stepNumber, className = "" }) {
  const Icon = icon;

  return (
    <article className={`${CARD_BASE} h-full flex flex-col items-center text-center w-full ${className}`}>
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10b981]/0 via-[#10b981]/60 to-[#10b981]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      {stepNumber ? (
        <span className="text-[10px] font-black tracking-[0.2em] text-[#10b981]/70 capitalize mb-3">
          {stepNumber}
        </span>
      ) : null}

      <PolicyIcon icon={Icon} className="mb-5" />

      <h3 className="font-display text-[#1a1f24]  mb-3 ">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </article>
  );
}

function PageImage({
  src,
  alt,
  heightClass,
  objectFit = "cover",
  priority = false,
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl lg:rounded-3xl bg-[#F0F7F4] border border-[#10b981]/10 shadow-[0_20px_50px_rgba(22,66,60,0.1)] ring-4 ring-white/60 ${heightClass}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 1280px"
        className={`${objectFit === "contain" ? "object-contain" : "object-cover"} object-center`}
        priority={priority}
      />
    </div>
  );
}



export default function QualityPolicyPage() {
  return (
    <div className="bg-[#FDF8F2] overflow-hidden font-sans text-[#1a1f24]">
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#F0F7F4] to-[#FDF8F2]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#10b981] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#84cc16] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="hero-noise-overlay opacity-[0.06]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className={SECTION_LABEL}>Quality Standards</span>
              <h1 className="font-display text-[#1a1f24] mb-6 lg:mb-8 text-center lg:text-left">
                Our{" "}
                <span className=" text-[#10b981] font-bold">Quality</span>{" "}
                Policy
              </h1>

              <div className="space-y-5 lg:space-y-6 max-w-xl mx-auto lg:mx-0">
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-medium">
                  At Isarva Infotech, quality is achieved through clear planning,
                  structured execution, strong technical standards, and continuous
                  improvement. We focus on delivering secure, scalable, and
                  reliable digital solutions that align with business goals and
                  perform efficiently in real-world operations.
                </p>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-medium">
                  Every stage of the project lifecycle — including requirement
                  analysis, development, deployment, and support — is carefully
                  managed to ensure performance, usability, stability, and
                  long-term scalability while maintaining transparency, timely
                  delivery, and customer satisfaction.
                </p>
              </div>

              <ul className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start" aria-label="Quality highlights">
                {heroHighlights.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-[#10b981]/15 bg-white/80 px-4 py-2 text-sm font-semibold text-[#16423C] shadow-sm"
                  >
                    <CircleCheck
                      className="w-4 h-4 text-[#10b981] shrink-0"
                      strokeWidth={ICON_STROKE}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <PageImage
              src={HERO_IMAGE}
              alt="Quality assurance and software engineering illustration"
              heightClass="h-[260px] sm:h-[320px] lg:h-[420px]"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section
        className="py-12 lg:py-16 bg-white border-y border-[#10b981]/10"
        aria-labelledby="quality-commitment-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            id="quality-commitment-heading"
            label="What We Stand For"
            title="Our Quality Commitment"
            description="Seven pillars that guide how we plan, build, deliver, and support every digital solution."
            centered
          />

          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 list-none">
            {commitmentItems.map((item, index) => (
              <li
                key={item.title}
                className={index === commitmentItems.length - 1 ? "lg:col-start-2" : ""}
              >
                <PolicyCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Delivery Methodology */}
      <section
        className="py-12 lg:py-16 bg-[#f6fff9]"
        aria-labelledby="delivery-methodology-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            id="delivery-methodology-heading"
            label="How We Deliver"
            title="Our Delivery Methodology"
            description="A structured, end-to-end approach that turns business goals into production-ready solutions."
            centered
          />

          {/* Desktop Layout (Horizontal Timeline) */}
          <div className="hidden lg:block">
            <ol className="grid grid-cols-6 gap-x-4 list-none relative">
              {methodologySteps.map((step, index) => {
                const Icon = step.icon;
                const hasLeftLine = index > 0;
                const hasRightLine = index < 5;

                const leftLineDashed = index === 1 || index === 3 || index === 5;
                const rightLineDashed = index === 0 || index === 2 || index === 4;

                return (
                  <li key={step.title} className="relative flex flex-col items-center">

                    {/* 1. Illustration Card (Top) */}
                    <div className="w-[140px] h-[140px] rounded-[1.8rem] bg-white border border-[#10b981]/8 shadow-[0_6px_24px_rgba(22,66,60,0.04)] hover:shadow-[0_16px_36px_rgba(22,66,60,0.08)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center p-3 relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F2] to-transparent opacity-60 group-hover:scale-110 transition-transform duration-500" />
                      <div className="relative w-full h-full z-10 flex items-center justify-center">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          sizes="140px"
                          className="object-contain p-1 select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* 2. Vertical Connector Line */}
                    <div className="w-0.5 h-8 bg-gradient-to-b from-[#10b981]/20 to-[#10b981]/50" />

                    {/* 3. Timeline Circle & Horizontal Connectors */}
                    <div className="relative w-full flex items-center justify-center h-10 my-1">

                      {/* Horizontal connecting lines */}
                      {hasLeftLine && (
                        <div
                          className={`absolute left-0 right-1/2 top-1/2 -translate-y-1/2 border-t-2 ${leftLineDashed ? 'border-dashed border-[#10b981]/30' : 'border-solid border-[#10b981]/40'
                            }`}
                        />
                      )}
                      {hasRightLine && (
                        <div
                          className={`absolute left-1/2 right-0 top-1/2 -translate-y-1/2 border-t-2 ${rightLineDashed ? 'border-dashed border-[#10b981]/30' : 'border-solid border-[#10b981]/40'
                            }`}
                        />
                      )}

                      {/* Midpoint Arrowhead pointing right */}
                      {index > 0 && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center pointer-events-none">
                          <svg className="w-3.5 h-3.5 text-[#10b981]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      )}

                      {/* Step Icon Circle */}
                      <div className="relative z-10 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center border-4 border-white shadow-[0_4px_10px_rgba(16,185,129,0.15)] hover:scale-110 hover:bg-emerald-700 transition-all duration-300">
                        <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* 4. Text Content (Bottom) */}
                    <div className="text-center px-1 mt-3">
                      <h3 className="font-display text-[#16423C]  mb-3 ">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-[170px] mx-auto">
                        {step.description}
                      </p>
                    </div>

                  </li>
                );
              })}
            </ol>
          </div>

          {/* Mobile & Tablet Layout (Vertical Timeline) */}
          <div className="block lg:hidden max-w-xl mx-auto px-4">
            <ol className="relative flex flex-col gap-y-6 list-none">

              {methodologySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="relative flex items-start gap-4 sm:gap-6">

                    {/* Vertical line segment connecting to the next step's circle (ends at index 4) */}
                    {index < 5 && (
                      <div
                        className={`absolute left-[18px] top-9 bottom-[-58px] w-0.5 border-l-2 -translate-x-1/2 z-0 ${index === 0 || index === 2 || index === 4
                          ? 'border-dashed border-[#10b981]/30'
                          : 'border-solid border-[#10b981]/40'
                          }`}
                      >
                        {/* Downward pointing arrowhead mid-segment */}
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center pointer-events-none text-[#10b981] bg-white rounded-full p-0.5 border border-[#10b981]/10 shadow-sm w-4 h-4">
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Circle Icon */}
                    <div className="relative z-10 w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center border-4 border-white shadow-sm shrink-0">
                      <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Content Block */}
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-4 bg-white border border-[#10b981]/8 shadow-[0_4px_20px_rgba(22,66,60,0.03)] rounded-2xl p-4 transition-all duration-300 text-center sm:text-left">

                      {/* Illustration Card */}
                      <div className="w-[80px] h-[80px] rounded-2xl bg-white border border-[#10b981]/8 shadow-[0_4px_16px_rgba(22,66,60,0.03)] flex items-center justify-center p-2 relative shrink-0 overflow-hidden mx-auto sm:mx-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F2] to-transparent opacity-60" />
                        <div className="relative w-full h-full z-10">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            sizes="80px"
                            className="object-contain p-0.5 select-none pointer-events-none"
                          />
                        </div>
                      </div>

                      {/* Text Block */}
                      <div className="flex-1">
                        <h3 className="font-display text-[#16423C] mb-3 ">
                          {step.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                    </div>

                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* The Isarva Advantage */}
      <section
        className="py-12 lg:py-16 bg-gradient-to-b from-white to-[#f0faf4]"
        aria-labelledby="isarva-advantage-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            id="isarva-advantage-heading"
            label="Why Isarva"
            title={
              <>
                The{" "}
                <span className=" text-[#10b981] font-bold">Isarva</span>{" "}
                Advantage
              </>
            }
            description="The qualities that set our engineering partnerships apart."
            centered
          />

          <ul className="grid grid-cols-1 lg:grid-cols-6 gap-5 lg:gap-6 list-none">
            {advantageItems.map((item, index) => (
              <li
                key={item.title}
                className={`lg:col-span-2 ${index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : ""
                  }`}
              >
                <PolicyCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-[#FDF8F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-[#e8f6ea] border border-[#10b981]/15 p-10 lg:p-16 text-center shadow-[0_8px_30px_rgba(22,66,60,0.06)]">
            <div
              className="absolute -top-20 -right-20 w-64 h-64 bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#84cc16]/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <span className="inline-block text-[13px] font-bold text-[#1a5b33] tracking-[0.1em] capitalize mb-6 bg-[#cfeade] px-6 py-2.5 rounded-full">
                Partner With Us
              </span>
              <h2 className="font-display text-[#134326] mb-6 capitalize max-w-2xl mx-auto">
                Ready to experience quality-first development?
              </h2>
              <p className="text-[#356747] text-base lg:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                Partner with Isarva Infotech for solutions engineered with
                precision, built for performance, and designed to grow with your
                business.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  prefetch={false}
                  className="press-illusion-btn-orange bg-orange-500 text-white w-fit font-bold px-6 py-2 text-base flex items-center space-x-2"
                >
                  <span>Get In Touch</span>
                  {GLOBAL_BTN_ARROW}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
