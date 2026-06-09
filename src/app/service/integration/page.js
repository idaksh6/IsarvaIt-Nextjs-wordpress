import Link from "../../components/AppLink";
import {
  CreditCard,
  Smartphone,
  Zap,
  ShieldCheck,
  Mail,
  Send,
  BarChart2,
  Radio,
  MessageSquare,
  Bell,
  FileText,
  Key,
  ArrowRight,
  GitBranch,
  CircleCheck,
  Newspaper,
  MessageCircle,
  CloudUpload,
  Layers,
  Globe,
} from "lucide-react";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

/* ── Design tokens (same as quality-policy) ───────────────── */
const SECTION_LABEL =
  "inline-block text-[#10b981] font-black tracking-[0.2em] uppercase text-[clamp(0.65rem,1.3vw,0.85rem)] mb-4";

const CARD_BASE =
  "group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-[#10b981]/8 shadow-[0_8px_30px_rgba(22,66,60,0.06)] hover:shadow-[0_16px_40px_rgba(22,66,60,0.1)] hover:border-[#10b981]/20 transition-all duration-300 overflow-hidden h-full";

const ICON_SIZE = "w-6 h-6";
const ICON_STROKE = 2;

/* ── SEO: noindex + nofollow ─────────────────────────────── */
export const metadata = generateSEOMetadata({
  title: "Integration Services",
  description:
    "Powerful, future-ready integration services — payment gateways, email platforms, communication APIs, and website ecosystems tailored for scale. Isarva Infotech delivers seamless integrations for your business.",
  keywords: [
    "integration services",
    "payment gateway integration",
    "Razorpay integration",
    "Stripe integration",
    "WhatsApp Business API",
    "SendGrid integration",
    "Mailchimp integration",
    "SMS gateway integration",
    "email service integration",
    "website integration",
  ],
  url: "/service/integration",
  noIndex: true,
});

/* ── Hero highlights ─────────────────────────────────────── */
const heroHighlights = [
  "Payment Gateways",
  "Email Platforms",
  "Communication APIs",
  "Website Ecosystems",
];

/* ── Service cards data ──────────────────────────────────── */
const services = [
  {
    id: "payment-gateway",
    icon: CreditCard,
    title: "Payment Gateway Integrations",
    description:
      "Enable secure, fast, and seamless online transactions with multiple payment gateway integrations tailored for your business needs. We integrate trusted payment solutions that support domestic & international transactions, subscription billing, mobile payments, refunds, and advanced payment security.",
    subtitleIcon: Zap,
    subtitle: "Our Payment Gateway Integration Services",
    badges: [
      { icon: CreditCard, label: "Razorpay Integration" },
      { icon: Smartphone, label: "PhonePe Payment Gateway Integration" },
      { icon: ShieldCheck, label: "Stripe Payment Gateway Integration" },
      { icon: Globe, label: "PayPal Payment Gateway Integration" },
    ],
    footer: "PCI-DSS · Recurring · Global/Local",
    footerIcon: ShieldCheck,
  },
  {
    id: "mail-service",
    icon: Mail,
    title: "Mail Service Integrations",
    description:
      "Enhance your business communication with powerful and reliable email service integrations. We provide complete setup and integration for leading email platforms to automate transactional emails, marketing campaigns, newsletters, notifications, and customer engagement communications. Our solutions ensure high deliverability, secure communication, and scalable email infrastructure.",
    subtitleIcon: Send,
    subtitle: "Our Mail Service Integration Solutions",
    badges: [
      { icon: CloudUpload, label: "SendGrid Email Integration" },
      { icon: BarChart2, label: "Brevo (Sendinblue) Integration" },
      { icon: Radio, label: "Mailchimp Integration" },
      { icon: Send, label: "Mailgun Integration" },
    ],
    footer: "High deliverability · Automation ready",
    footerIcon: BarChart2,
  },
  {
    id: "communication",
    icon: MessageSquare,
    title: "Communication Integrations",
    description:
      "Improve customer engagement and business communication with advanced communication integration solutions. We provide seamless integration of WhatsApp Business APIs, SMS gateways, chat systems, notification services, and automated communication platforms for websites, mobile applications, CRM systems, ERP software, and eCommerce platforms.",
    subtitleIcon: MessageCircle,
    subtitle: "Our Communication Integration Services",
    badges: [
      { icon: MessageSquare, label: "WhatsApp Business API Integration" },
      { icon: Smartphone, label: "SMS Gateway Integration (MSG91 / MSG99)" },
    ],
    footer: "Real-time alerts · Two-way messaging · Global SMS",
    footerIcon: Bell,
  },
  {
    id: "website-content",
    icon: GitBranch,
    title: "Website Page Related Content",
    description:
      "Create a fully functional, interactive, and business-oriented website with advanced content integration solutions. We provide complete website page integration services that connect your website with forms, APIs, communication systems, payment gateways, automation tools, CRM platforms, and third-party services to improve user experience and business operations.",
    subtitleIcon: Layers,
    subtitle: "Our Website Page Integration Services",
    badges: [
      { icon: FileText, label: "Contact Form Integration" },
      { icon: Mail, label: "Notification Email Setup" },
      { icon: Key, label: "OTP & Transaction SMS Setup" },
      { icon: MessageSquare, label: "WhatsApp Notification Automation" },
      { icon: Newspaper, label: "Newsletter & Campaign Integration" },
    ],
    footer: "Lead gen · Automation workflows · CRM ready",
    footerIcon: Layers,
  },
];

/* ── Arrow SVG (same as quality-policy) ─────────────────── */
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

/* ── Reusable: Icon wrapper ──────────────────────────────── */
function ServiceIcon({ icon: Icon, className = "" }) {
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

/* ── Reusable: Badge ─────────────────────────────────────── */
function IntegrationBadge({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 bg-[#f0faf4] border border-[#10b981]/15 text-[#16423C] text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:bg-[#d1fae5] hover:border-[#10b981]/30">
      <Icon className="w-3.5 h-3.5 text-[#10b981] shrink-0" strokeWidth={ICON_STROKE} aria-hidden="true" />
      {label}
    </span>
  );
}

/* ── Reusable: Service card ──────────────────────────────── */
function ServiceCard({ service }) {
  const Icon = service.icon;
  const SubtitleIcon = service.subtitleIcon;
  const FooterIcon = service.footerIcon;

  return (
    <article className={CARD_BASE} id={service.id}>
      {/* Top gradient accent */}
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10b981]/0 via-[#10b981]/60 to-[#10b981]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Icon — center aligned */}
      <div className="flex flex-col items-center text-center">
        <ServiceIcon icon={Icon} className="mb-5 mx-auto" />

        <h2 className="font-display text-[#1a1f24] text-xl lg:text-2xl font-bold mb-3 leading-snug">
          {service.title}
        </h2>

        {/* Description with left border accent */}
        <p className="text-[#53606b] text-sm lg:text-[0.95rem] leading-relaxed mb-5 border-l-[3px] border-[#10b981]/25 pl-4 text-left">
          {service.description}
        </p>

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-2 w-full mb-3">
          <SubtitleIcon className="w-4 h-4 text-[#10b981] shrink-0" strokeWidth={ICON_STROKE} aria-hidden="true" />
          <span className="text-[#16423C] font-bold text-[0.78rem] tracking-[0.12em] uppercase">
            {service.subtitle}
          </span>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-1 w-full">
          {service.badges.map((badge) => (
            <IntegrationBadge key={badge.label} icon={badge.icon} label={badge.label} />
          ))}
        </div>

        {/* Divider */}
        <div className="w-full mt-5 mb-3 h-px bg-gradient-to-r from-transparent via-[#10b981]/20 to-transparent" />

        {/* Footer note */}
        <div className="flex items-center justify-center gap-2 text-[#10b981] text-xs font-semibold">
          <FooterIcon className="w-3.5 h-3.5 shrink-0" strokeWidth={ICON_STROKE} aria-hidden="true" />
          <span>{service.footer}</span>
        </div>
      </div>
    </article>
  );
}

/* ── Page ────────────────────────────────────────────────── */
export default function IntegrationPage() {
  return (
    <div className="bg-[#FDF8F2] overflow-hidden font-sans text-[#1a1f24]">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#F0F7F4] to-[#FDF8F2]">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#10b981] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#84cc16] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="hero-noise-overlay opacity-[0.06]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className={SECTION_LABEL}>Integration Services</span>
          <h1 className="font-display text-[#1a1f24] mb-5 lg:mb-6">
            Integrate.{" "}
            <span className="italic text-[#10b981] font-bold">Automate.</span>{" "}
            Elevate.
          </h1>
          <p className="text-[#53606b] text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Powerful, future-ready integrations — payments, email, communication,
            and website ecosystems tailored for scale.
          </p>

          {/* Highlight pills */}
          <ul className="flex flex-wrap justify-center gap-3" aria-label="Integration highlights">
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
      </section>

      {/* ── Services Grid ─────────────────────────────────── */}
      <section
        className="py-12 lg:py-16 bg-white border-y border-[#10b981]/10"
        aria-labelledby="integration-services-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="mb-10 lg:mb-14 max-w-3xl mx-auto text-center">
            <span className={SECTION_LABEL}>What We Integrate</span>
            <h2
              id="integration-services-heading"
              className="font-display text-[#16423C] capitalize"
            >
              Our Integration Services
            </h2>
            <p className="text-[#53606b] text-base lg:text-lg leading-relaxed mt-4">
              End-to-end integration solutions that connect your business with the
              tools and platforms it needs to grow.
            </p>
          </div>

          {/* Cards grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 list-none">
            {services.map((service) => (
              <li key={service.id} className="flex">
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-[#FDF8F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-[#e8f6ea] border border-[#10b981]/15 p-10 lg:p-16 text-center shadow-[0_8px_30px_rgba(22,66,60,0.06)]">
            {/* Decorative blobs */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#84cc16]/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <span className="inline-block text-[13px] font-bold text-[#1a5b33] tracking-[0.1em] uppercase mb-6 bg-[#cfeade] px-6 py-2.5 rounded-full">
                Ready to Integrate?
              </span>
              <h2 className="font-display text-[#134326] mb-6 capitalize max-w-2xl mx-auto">
                Ready to supercharge your digital ecosystem?
              </h2>
              <p className="text-[#356747] text-base lg:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                Let Isarva's experts implement custom integration solutions tailored
                to your business — from payments to notifications, we handle it
                end-to-end.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  prefetch={false}
                  className="press-illusion-btn-orange bg-orange-500 text-white w-fit font-bold px-6 py-2 text-base flex items-center space-x-2"
                >
                  <span>Talk to an Expert</span>
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
