"use client";

import { useState } from "react";
import Link from "../../../components/AppLink";
import ContactFormModal from "../../../components/ContactFormModal";
import { productsData } from "../../../lib/data/products-data";
import {
  ADDON_SERVICES,
  FEATURE_COMPARISON,
  PRICING_PLANS,
} from "./billsoft-pricing-data";
import "./billsoft-pricing.css";

function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className="fill-current"
        d="M12 22.5C7.28595 22.5 4.92893 22.5 3.46447 21.0355C2 19.5711 2 17.214 2 12.5C2 7.78595 2 5.42893 3.46447 3.96447C4.92893 2.5 7.28595 2.5 12 2.5C16.714 2.5 19.0711 2.5 20.5355 3.96447C22 5.42893 22 7.78595 22 12.5C22 17.214 22 19.5711 20.5355 21.0355C19.0711 22.5 16.714 22.5 12 22.5ZM16.0303 9.46967C16.3232 9.76256 16.3232 10.2374 16.0303 10.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303L7.96967 13.5303C7.67678 13.2374 7.67678 12.7626 7.96967 12.4697C8.26256 12.1768 8.73744 12.1768 9.03033 12.4697L10.5 13.9393L14.9697 9.46967C15.2626 9.17678 15.7374 9.17678 16.0303 9.46967Z"
      />
    </svg>
  );
}

function CrossIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className="fill-current"
        d="M12 22.5C7.28595 22.5 4.92893 22.5 3.46447 21.0355C2 19.5711 2 17.214 2 12.5C2 7.78595 2 5.42893 3.46447 3.96447C4.92893 2.5 7.28595 2.5 12 2.5C16.714 2.5 19.0711 2.5 20.5355 3.96447C22 5.42893 22 7.78595 22 12.5C22 17.214 22 19.5711 20.5355 21.0355C19.0711 22.5 16.714 22.5 12 22.5ZM8.96965 9.46967C9.26254 9.17678 9.73742 9.17678 10.0303 9.46967L12 11.4394L13.9696 9.46969C14.2625 9.1768 14.7374 9.1768 15.0303 9.46969C15.3232 9.76258 15.3232 10.2375 15.0303 10.5303L13.0606 12.5L15.0303 14.4697C15.3232 14.7626 15.3232 15.2374 15.0303 15.5303C14.7374 15.8232 14.2625 15.8232 13.9696 15.5303L12 13.5607L10.0303 15.5303C9.73742 15.8232 9.26254 15.8232 8.96965 15.5303C8.67676 15.2374 8.67676 14.7626 8.96965 14.4697L10.9393 12.5L8.96965 10.5303C8.67676 10.2374 8.67676 9.76256 8.96965 9.46967Z"
      />
    </svg>
  );
}

function ChevronIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className="fill-current"
        d="M5.1631 14.7634C4.91962 14.4794 4.95251 14.0517 5.23657 13.8082L11.5591 8.38889C11.8128 8.17144 12.1872 8.17144 12.4409 8.38889L18.7634 13.8082C19.0475 14.0517 19.0804 14.4794 18.8369 14.7634C18.5934 15.0475 18.1658 15.0804 17.8817 14.8369L12 9.79544L6.11829 14.8369C5.83423 15.0804 5.40658 15.0475 5.1631 14.7634Z"
      />
    </svg>
  );
}

function AvailabilityMark({ checked }) {
  return (
    <span className={`availability-mark${checked ? " is-checked" : " is-unchecked"}`} aria-label={checked ? "Included" : "Not included"}>
      {checked ? <CheckIcon className="mark-icon" /> : <CrossIcon className="mark-icon" />}
    </span>
  );
}

function PlanCellValue({ value }) {
  if (!value || value === true) {
    return <AvailabilityMark checked />;
  }
  if (value === false) {
    return <AvailabilityMark checked={false} />;
  }

  const type = typeof value === "string" ? "text" : value.type;
  const label = typeof value === "string" ? value : value.label;

  if (type === "check") {
    return (
      <span className="cell-value cell-check-wrap">
        <AvailabilityMark checked />
        {label ? <span className="cell-note">{label}</span> : null}
      </span>
    );
  }

  if (type === "cross") {
    return <AvailabilityMark checked={false} />;
  }

  return <span className="cell-text">{label}</span>;
}

function FeatureNode({ node, plans, activeTab }) {
  const [open, setOpen] = useState(true);
  const depth = node.depth || 1;

  if (node.type === "section") {
    return (
      <div className={`feature-block depth-${depth}${open ? " is-open" : ""}`}>
        <button type="button" className="feature-section-btn" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          <span className="feature-section-title">{node.title}</span>
          <ChevronIcon className={`section-chevron${open ? " open" : ""}`} />
        </button>

        <div className={`feature-block-children${open ? " open" : ""}`}>
          {node.children?.map((child, idx) => (
            <FeatureNode key={`${child.title}-${idx}`} node={child} plans={plans} activeTab={activeTab} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`feature-row depth-${depth}`}>
      <div className="feature-name">{node.title}</div>
      <div className="feature-marks">
        {plans.map((plan, i) => {
          const shortName = plan.name.replace(/\s*Plan$/i, "");
          const isActive = plan.id === activeTab;
          return (
            <div
              key={plan.id}
              className={`feature-mark-cell${plan.recommended ? " recommended-col" : ""}${isActive ? " active-mobile-col" : " hide-mobile-col"}`}
            >
              <span className="mark-plan-label">{shortName}</span>
              <PlanCellValue value={node.plans?.[i]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlanHeader({ plan, activeTab }) {
  const shortName = plan.name.replace(/\s*Plan$/i, "");
  const badgeText = plan.badge || "Recommended";
  const isActive = plan.id === activeTab;

  return (
    <div className={`plan-header-col${plan.recommended ? " recommended" : ""}${isActive ? " active-mobile-col" : " hide-mobile-col"}`}>
      {plan.recommended && <span className="recommended-pill">{badgeText}</span>}
      <h3 className="plan-name">
        <span className="plan-name-full">{plan.name}</span>
        <span className="plan-name-short">{shortName}</span>
      </h3>
      <p className="plan-desc">{plan.description}</p>

      <div className="price-block">
        {plan.price !== "Custom" && <span className="currency-symbol">₹</span>}
        <span className="price-value">{plan.price}</span>
      </div>
      {plan.period && <p className="price-period">{plan.period}</p>}
      {plan.employeeLimit && <p className="employee-limit">{plan.employeeLimit}</p>}
    </div>
  );
}

export default function BillSoftPricingClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("professional");

  return (
    <div className="billsoft-pricing-page">
      <header className="main-header pt-32 lg:pt-40 pb-8 lg:pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <h6 className="pricing-eyebrow">BillSoft Pricing</h6>
          <h1 className="mb-4">
            Plans for Every <span className="text-[#0284c7]">Business Size</span>
          </h1>
          <p className="text-base lg:text-xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
            Compare Starter, Professional, and Enterprise. Expand each section for full feature details, including optional add-ons.
          </p>

          <div className="pricing-demo-cta">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="btn-premium-orange group !px-10 !py-5 cursor-pointer"
            >
              <div className="shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="relative z-10 flex items-center gap-3 font-bold text-base">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>Request Free Demo</span>
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="pricing-section pb-12 lg:pb-16">
        <div className="pricing-shell">
          <div className="plans-header-row">
            <div className="plans-header-intro">
              <div className="plans-intro-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="plans-intro-title">BillSoft Features</h2>
              <p className="plans-intro-text">
                Compare Starter, Professional, and Enterprise side by side. Expand each section below for full feature details across your inventory and billing workflows.
              </p>
            </div>
            <div className="plans-header-cols">
              {PRICING_PLANS.map((plan) => (
                <PlanHeader key={plan.id} plan={plan} activeTab={activeTab} />
              ))}
            </div>
          </div>

          <div className="features-matrix">
            <div className="mobile-plan-switcher" aria-hidden="true">
              {PRICING_PLANS.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setActiveTab(plan.id)}
                  className={`mobile-switcher-btn${activeTab === plan.id ? " is-active" : ""}${plan.recommended ? " recommended" : ""}`}
                >
                  {plan.name.replace(/\s*Plan$/i, "")}
                </button>
              ))}
            </div>
            {FEATURE_COMPARISON.map((node, idx) => (
              <FeatureNode key={`${node.title}-${idx}`} node={node} plans={PRICING_PLANS} activeTab={activeTab} />
            ))}
          </div>
        </div>

        {/* Add-on services */}
        <div className="addons-timeline-section">
          <div className="section-card-wrapper">
            <div className="commercials-card">
              <h3>Available Add-on Features</h3>
              <div className="addons-list">
                {ADDON_SERVICES.map((addon, idx) => (
                  <div key={idx} className="addon-item">
                    <div className="addon-title-wrap">
                      <span className="addon-name">{addon.name}</span>
                      <span className="addon-desc">{addon.description}</span>
                    </div>
                    <span className="addon-cost">{addon.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Custom CTA */}
        <div className="bottom-custom-cta">
          <h3 className="bottom-custom-title">Need a custom plan?</h3>
          <p className="bottom-custom-desc">
            We’ll match features and pricing to your team size. Get in touch to design a tailor-made plan.
          </p>
          <div className="bottom-cta-btns">
            <button
              onClick={() => setIsModalOpen(true)}
              className="press-illusion-btn-orange bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-base inline-flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
            >
              Request Demo
            </button>
            <Link
              href="/contact"
              prefetch={false}
              className="press-illusion-btn-purple bg-[#9333EA] hover:bg-[#7e22ce] text-white px-8 py-3 rounded-full font-bold text-base inline-flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
            >
              Contact Sales
            </Link>
            <a
              href="https://wa.me/919902863697"
              target="_blank"
              rel="noopener noreferrer"
              className="press-illusion-btn-green bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3 rounded-full font-bold text-base inline-flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem="BillSoft Software"
        allItems={productsData}
      />
    </div>
  );
}
