import Link from "../components/AppLink";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  UserCheck,
  Globe,
  Mail,
  Cookie,
  RefreshCw,
  AlertCircle,
  FileText,
  Phone,
  CircleCheck,
} from "lucide-react";
import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

/* -- Design tokens --------------------------------- */
const PILL_LABEL =
  "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold text-sm mb-6";

const CARD_BASE =
  "group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border-2 border-emerald-200 hover:border-emerald-400 shadow-[0_4px_24px_rgba(16,185,129,0.12)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.25)] transition-all duration-300 overflow-hidden";

const ICON_SIZE = "w-6 h-6";
const ICON_STROKE = 2;

/* -- SEO metadata ---------------------------------- */
export const metadata = generateSEOMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Isarva Infotech collects, uses, and protects your personal information. Our privacy policy outlines your rights and our commitment to data security and transparency.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "data security",
    "GDPR",
    "user privacy",
    "Isarva Infotech privacy",
  ],
  url: "/privacy-policy",
  image: "https://www.isarvait.com/isarva-og.png",
  noIndex: false,
});

/* -- Page data ------------------------------------- */
const heroHighlights = [
  "Data protection",
  "Transparent practices",
  "Your rights matter",
];

const lastUpdated = "January 1, 2025";

const privacySections = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Information You Provide",
        text: "We collect information you voluntarily share with us, including your name, email address, phone number, company name, and any messages or project details you submit through our contact forms, quote requests, or when engaging our services.",
      },
      {
        subtitle: "Information Collected Automatically",
        text: "When you visit our website, we automatically collect certain technical data such as your IP address, browser type, device information, pages visited, time spent on pages, and referring URLs. This data is collected via cookies and analytics tools to help us improve our website experience.",
      },
      {
        subtitle: "Information from Third Parties",
        text: "We may receive information about you from third-party platforms such as LinkedIn, Google, or referral partners when you engage with us through those channels.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your information to respond to inquiries, provide project quotes, deliver our web design, development, and software services, and communicate about ongoing projects.",
      },
      {
        subtitle: "Improving Our Services",
        text: "Analytics data helps us understand how visitors interact with our website, identify areas for improvement, and enhance the overall user experience.",
      },
      {
        subtitle: "Marketing Communications",
        text: "With your consent, we may send you updates about our services, industry insights, case studies, and promotional offers. You may opt out at any time using the unsubscribe link in any email.",
      },
      {
        subtitle: "Legal Compliance",
        text: "We process your data as required to comply with applicable laws, respond to legal requests, and enforce our terms of service.",
      },
    ],
  },
  {
    id: "data-sharing",
    icon: Globe,
    title: "Information Sharing & Disclosure",
    content: [
      {
        subtitle: "We Do Not Sell Your Data",
        text: "Isarva Infotech does not sell, rent, or trade your personal information to third parties for their marketing purposes.",
      },
      {
        subtitle: "Service Providers",
        text: "We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, sending emails, or analyzing data. These providers are contractually obligated to protect your information.",
      },
      {
        subtitle: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of company assets, your information may be transferred as part of that transaction. We will notify you before your data is subject to a different privacy policy.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information when required by law, court order, or government authority, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.",
      },
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies & Tracking Technologies",
    content: [
      {
        subtitle: "What Are Cookies",
        text: "Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, analyze site traffic, and improve your browsing experience.",
      },
      {
        subtitle: "Types of Cookies We Use",
        text: "We use essential cookies (required for website functionality), analytics cookies (Google Analytics, Google Tag Manager, Facebook Pixel), and preference cookies to remember your settings. We do not use advertising cookies for ad targeting on third-party platforms.",
      },
      {
        subtitle: "Managing Cookies",
        text: "You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of some parts of our website.",
      },
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement industry-standard security measures including SSL/TLS encryption, secure server infrastructure, access controls, and regular security audits to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
      },
      {
        subtitle: "Data Retention",
        text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer required, it is securely deleted.",
      },
      {
        subtitle: "Breach Notification",
        text: "In the unlikely event of a data breach that affects your personal information, we will notify you and relevant authorities as required by applicable law, in a timely manner.",
      },
    ],
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "Your Privacy Rights",
    content: [
      {
        subtitle: "Access & Portability",
        text: "You have the right to request a copy of the personal information we hold about you, in a structured and commonly used format.",
      },
      {
        subtitle: "Correction",
        text: "If you believe any information we hold about you is inaccurate or incomplete, you may request that we correct or update it.",
      },
      {
        subtitle: "Deletion",
        text: "You may request that we delete your personal information, subject to certain legal exceptions such as compliance obligations or legitimate business interests.",
      },
      {
        subtitle: "Opt-Out",
        text: "You may opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly. This will not affect communications related to services you have requested.",
      },
      {
        subtitle: "GDPR Rights (EU Residents)",
        text: "If you are located in the European Economic Area, you have additional rights under GDPR, including the right to restrict processing, object to processing, and lodge a complaint with a supervisory authority.",
      },
    ],
  },
  {
    id: "third-party-links",
    icon: FileText,
    title: "Third-Party Links",
    content: [
      {
        subtitle: "External Websites",
        text: "Our website may contain links to third-party websites, social media platforms, or partner sites. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing any personal information.",
      },
      {
        subtitle: "Embedded Content",
        text: "Our website may include embedded content such as videos, maps, or social media widgets from third parties (e.g., YouTube, Google Maps). These services may collect data about you when you interact with them, subject to their own privacy policies.",
      },
    ],
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to This Policy",
    content: [
      {
        subtitle: "Policy Updates",
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations. We will notify you of significant changes by posting the updated policy on this page with a revised effective date.",
      },
      {
        subtitle: "Continued Use",
        text: "Your continued use of our website after any changes to this policy constitutes your acceptance of the updated terms. We encourage you to review this policy periodically.",
      },
    ],
  },
];

const keyPrinciples = [
  {
    icon: ShieldCheck,
    title: "Data Minimization",
    description:
      "We only collect personal information that is necessary for the stated purpose, and nothing more.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We are open about what data we collect, why we collect it, and how we use it.",
  },
  {
    icon: Lock,
    title: "Security First",
    description:
      "Your data is protected with enterprise-grade security measures at every layer.",
  },
  {
    icon: UserCheck,
    title: "Your Control",
    description:
      "You have the right to access, correct, or delete your personal information at any time.",
  },
  {
    icon: AlertCircle,
    title: "No Data Selling",
    description:
      "We never sell, rent, or trade your personal data to third parties for commercial gain.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "We adhere to internationally recognized privacy standards including GDPR best practices.",
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

/* -- Sub-components -------------------------------- */
function SectionHeader({ label, title, description, centered = false, id }) {
  return (
    <div
      className={`mb-10 lg:mb-14 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <div className={centered ? "flex justify-center" : ""}>
        <span className={PILL_LABEL}>{label}</span>
      </div>
      <h2 id={id} className="mb-4 capitalize">
        {title}
      </h2>
      {description ? (
        <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed">
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

function PrincipleCard({ icon, title, description }) {
  return (
    <article className={`${CARD_BASE} h-full flex flex-col items-center text-center w-full`}>
      <PolicyIcon icon={icon} className="mb-5" />
      <h3 className="text-gray-900 font-bold text-base mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </article>
  );
}

function ContentSection({ section }) {
  const Icon = section.icon;
  return (
    <div
      id={section.id}
      className="scroll-mt-28 bg-white rounded-2xl lg:rounded-3xl border-2 border-gray-100 hover:border-emerald-200 shadow-sm transition-all duration-300 overflow-hidden"
    >
      <div className="flex items-center gap-4 p-6 lg:p-8 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-white">
        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-emerald-700" strokeWidth={ICON_STROKE} aria-hidden="true" />
        </div>
        <h2 className="text-gray-900 text-xl lg:text-2xl font-bold">
          {section.title}
        </h2>
      </div>

      <div className="p-6 lg:p-8 space-y-6">
        {section.content.map((item, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="mt-1 shrink-0">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-base mb-1.5">
                {item.subtitle}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TableOfContents() {
  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-28 bg-white rounded-2xl border border-[#10b981]/10 shadow-[0_8px_30px_rgba(22,66,60,0.06)] p-6 hidden lg:block"
    >
      <p className="text-xs font-black tracking-[0.2em] text-[#10b981] uppercase mb-4">
        On This Page
      </p>
      <ul className="space-y-2">
        {privacySections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="flex items-center gap-2.5 text-sm text-gray-900 hover:text-[#10b981] transition-colors duration-200 group py-1"
            >
              <span className="w-1 h-1 rounded-full bg-[#10b981]/30 group-hover:bg-[#10b981] transition-colors duration-200 shrink-0" />
              {section.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-6 border-t border-[#10b981]/10">
        <p className="text-xs font-semibold text-[#16423C] mb-3">Questions?</p>
        <a
          href="mailto:marketing@isarvait.com"
          className="flex items-center gap-2 text-sm text-[#10b981] hover:underline"
        >
          <Mail className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
          marketing@isarvait.com
        </a>
      </div>
    </nav>
  );
}

/* -- Page ------------------------------------------ */
export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white overflow-hidden font-sans text-gray-900">
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 30%, #f0fdfa 60%, #ffffff 100%)' }}>
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-[100px] opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-teal-100 rounded-full blur-[80px] opacity-60 translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <span className={PILL_LABEL}>Legal &amp; Compliance</span>
            </div>
            <h1 className="mb-6 lg:mb-8">
              Privacy{" "}
              <span className="text-emerald-600">Policy</span>
            </h1>

            <p className="text-gray-600 text-base lg:text-xl leading-relaxed font-medium mb-8">
              At Isarva Infotech, we are committed to protecting your personal
              information and being transparent about how we collect, use, and
              safeguard your data. This policy explains our practices and your
              rights in plain, clear language.
            </p>

            <div className="inline-flex items-center gap-2 bg-white border border-emerald-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm mb-8">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2} aria-hidden="true" />
              Last updated: {lastUpdated}
            </div>

            <ul className="flex flex-wrap gap-3 justify-center" aria-label="Privacy highlights">
              {heroHighlights.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
                >
                  <CircleCheck
                    className="w-4 h-4 text-emerald-600 shrink-0"
                    strokeWidth={ICON_STROKE}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section
        className="py-12 lg:py-16 bg-white border-y border-gray-100"
        aria-labelledby="key-principles-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            id="key-principles-heading"
            label="Our Commitment"
            title="Core Privacy Principles"
            description="Six guiding principles that underpin how we handle every piece of information you share with us."
            centered
          />

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 list-none">
            {keyPrinciples.map((item) => (
              <li key={item.title}>
                <PrincipleCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Main Policy Content */}
      <section
        className="py-12 lg:py-16 bg-gray-50"
        aria-label="Privacy policy details"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">
            <TableOfContents />
            <div className="space-y-6">
              {privacySections.map((section) => (
                <ContentSection key={section.id} section={section} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Questions */}
      <section
        className="py-12 lg:py-16 bg-white border-t border-gray-100"
        aria-labelledby="contact-privacy-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="text-center lg:text-left">
                <span className={PILL_LABEL}>Get In Touch</span>
              </div>
              <h2 id="contact-privacy-heading" className="mb-4 capitalize text-center lg:text-left">
                Privacy Questions?
              </h2>
              <p className="text-gray-600 text-base leading-relaxed font-medium mb-6 text-center lg:text-left">
                If you have any questions about this Privacy Policy, want to
                exercise your data rights, or have concerns about how we handle
                your information, our team is here to help.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-gray-900 font-semibold">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-emerald-700" strokeWidth={2} />
                  </div>
                  <a href="mailto:marketing@isarvait.com" className="hover:text-emerald-600 transition-colors">
                    marketing@isarvait.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-900 font-semibold">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-emerald-700" strokeWidth={2} />
                  </div>
                  <a href="tel:+919902863697" className="hover:text-emerald-600 transition-colors">
                    +91 99028 63697
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-emerald-700" strokeWidth={2} />
                  </div>
                  <span>Isarva Infotech, Mangalore, Karnataka, India</span>
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-100 p-8 lg:p-10 shadow-sm">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-teal-200/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
              <div className="relative z-10 text-center lg:text-left">
                <ShieldCheck className="w-10 h-10 text-emerald-600 mb-4 mx-auto lg:mx-0" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-gray-900 text-xl font-bold mb-3">
                  Your data, your control.
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Want to update, access, or delete your personal information?
                  Contact us and we will respond within 30 days as required by applicable law.
                </p>
                <Link
                  href="/contact"
                  prefetch={false}
                  className="press-illusion-btn-orange bg-orange-500 text-white w-fit font-bold px-6 py-2 text-base flex items-center space-x-2 mx-auto lg:mx-0"
                >
                  <span>Contact Us</span>
                  {GLOBAL_BTN_ARROW}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl cta-gradient p-10 lg:p-16 text-center">
            <style>{`
              .cta-gradient { background: linear-gradient(135deg, #064e3b, #065f46, #0f766e, #134e4a); background-size: 300% 300%; animation: ctaGrad 6s ease infinite; }
              @keyframes ctaGrad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
            `}</style>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white font-semibold text-sm">
                  Work With Us
                </span>
              </div>
              <h2 className="text-white mb-6 capitalize max-w-2xl mx-auto">
                Ready to build something secure and scalable?
              </h2>
              <p className="text-emerald-100 text-base lg:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                Partner with Isarva Infotech for solutions built with privacy,
                security, and performance at their core.
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
