"use client";

import { useState } from "react";
import Link from "../../../components/AppLink";
import ContactFormModal from "../../../components/ContactFormModal";
import { productsData } from "../../../lib/data/products-data";
import {
  ADDON_SERVICES,
  FEATURE_COMPARISON,
  PAYMENT_TERMS,
  PRICING_PLANS,
} from "./woocommerce-pricing-data";
import "./woocommerce-pricing.css";

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
          const shortName = plan.name.split(" — ")[1] || plan.name;
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
  const shortName = plan.name.split(" — ")[1] || plan.name;
  const badgeText = plan.badge || "Most Popular";
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
        {plan.price === "TBD" ? (
          <span className="price-value">TBD</span>
        ) : (
          <>
            <span className="currency-symbol">₹</span>
            <span className="price-value">{plan.price}</span>
            <span className="text-xs font-semibold self-end mb-1 ml-0.5">/month</span>
          </>
        )}
      </div>
      {plan.period && <p className="price-period">{plan.period}</p>}
      {plan.employeeLimit && <p className="employee-limit">{plan.employeeLimit}</p>}

      {/* Package Specific Checklist Bullets from Page 1 */}
      {plan.features && (
        <ul className="text-left mt-5 space-y-2 border-t pt-4 border-gray-100 w-full">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700 leading-snug">
              <span className="text-[#a855f7] font-bold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function WooCommercePricingClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("growth");

  return (
    <div className="woocommerce-pricing-page">
      <header className="main-header pt-32 lg:pt-40 pb-8 lg:pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <h6 className="pricing-eyebrow">WOOCOMMERCE / SOW / 2026</h6>
          <h1 className="mb-4">
            Three packages. One goal — <span className="text-[#a855f7]">commerce that works</span>
          </h1>
          <p className="text-base lg:text-xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
            From a clean launch store to a full commerce OS with wallets, 2-tier referrals, milestone rewards,
            name-day discounts, smart delivery and multi-gateway checkout.
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
                <span>Request Demo</span>
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="plans-intro-title">Commerce Features</h2>
              <p className="plans-intro-text">
                Compare Essential, Growth, and Advanced packages side by side. Expand each section below for full feature details,
                including optional add-ons.
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
                  {plan.name.split(" — ")[1] || plan.name}
                </button>
              ))}
            </div>
            {FEATURE_COMPARISON.map((node, idx) => (
              <FeatureNode key={`${node.title}-${idx}`} node={node} plans={PRICING_PLANS} activeTab={activeTab} />
            ))}
          </div>
        </div>

        {/* Timelines, Add-ons & Payment Terms section */}
        <div className="addons-timeline-section">
          <div className="section-card-wrapper">
            
            {/* Timelines & Payment Terms */}
            <div className="commercials-card">
              <h3>Implementation Timeline</h3>
              <div className="timelines-grid">
                {PRICING_PLANS.map((plan) => (
                  <div key={plan.id} className="timeline-box">
                    <span className="timeline-value">{plan.timeline}</span>
                    <span className="timeline-label">{plan.name.split(" — ")[1] || plan.name}</span>
                  </div>
                ))}
              </div>

              <h3 className="mt-8">Payment Terms</h3>
              <div className="payment-terms-grid">
                {PAYMENT_TERMS.map((term, idx) => (
                  <div key={idx} className="payment-term-box">
                    <span className="payment-term-percentage">{term.percentage}</span>
                    <span className="payment-term-label">{term.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-ons list */}
            <div className="commercials-card">
              <h3>Add-on Services</h3>
              <div className="addons-list">
                {ADDON_SERVICES.map((addon, idx) => (
                  <div key={idx} className="addon-item">
                    <span>{addon.name}</span>
                    <span className="addon-cost">
                      {addon.cost.startsWith("Starting") ? addon.cost : `₹ ${addon.cost}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="important-notes-box">
            <h4 className="important-notes-title">Important Notes</h4>
            <p className="important-notes-text">
              Hosting, domain, ACF Pro, and third-party / premium plugin licenses (initial + renewals) are not included in the package price. 
              Extra plugins for client-specific needs may incur additional cost. Feature availability depends on the selected package and approved scope.
            </p>
          </div>
        </div>

        {/* Bottom Custom CTA matches Page 6 exactly */}
        <div className="bottom-custom-cta">
          <h3 className="bottom-custom-title">Ready to pick Essential, Growth or Advanced?</h3>
          <p className="bottom-custom-desc">
            Share catalog size, delivery model and payment preference.
          </p>
          <div className="bottom-cta-btns">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-premium-orange group !px-10 !py-5 cursor-pointer"
            >
              <div className="shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="relative z-10 flex items-center gap-2 font-bold text-base">
                <span>View live demos</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </main>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem="WooCommerce Development"
        allItems={productsData}
      />
    </div>
  );
}
