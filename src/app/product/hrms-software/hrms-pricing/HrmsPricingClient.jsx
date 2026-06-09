"use client";

import { useCallback, useState } from "react";
import Link from "../../../components/AppLink";
import ContactFormModal from "../../../components/ContactFormModal";
import { PRICING_PLANS } from "./hrms-pricing-data";
import "./hrms-pricing.css";

function FeatureNode({ node }) {
  const [active, setActive] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  if (!hasChildren) {
    return (
      <li>
        <span className="arrow">▶</span>
        {node.label}
      </li>
    );
  }

  return (
    <li className={`expandable${active ? " active" : ""}`}>
      <div
        className="feature-head"
        role="button"
        tabIndex={0}
        onClick={() => setActive((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setActive((prev) => !prev);
          }
        }}
      >
        <span className="arrow">▶</span>
        {node.label}
      </div>
      <ul className="nested">
        {node.children.map((child) => (
          <FeatureNode key={child.label} node={child} />
        ))}
      </ul>
    </li>
  );
}

function PricingCard({ plan, onCtaClick }) {
  const isOnDemand = plan.priceLabel === "On Demand";

  const topLevelNodes = plan.featureSections.map((section) => ({
    label: section.label,
    children: section.children,
  }));

  return (
    <div className={`pricing-card${plan.recommended ? " recommended" : ""}`}>
      {plan.recommended && <div className="recommended-badge">Recommended</div>}

      <div className="card-header-content">
        <h2 className="plan-name">{plan.name}</h2>
        <p className="plan-desc">{plan.description}</p>

        <div className={`price-block${isOnDemand ? " on-demand" : ""}`}>
          {isOnDemand ? (
            <span className="price-value-text">{plan.priceLabel}</span>
          ) : (
            <>
              <span className="currency-symbol">₹</span>
              <span className="price-value">{plan.price}</span>
              <span className="price-period">{plan.period}</span>
            </>
          )}
        </div>

        {plan.employeeLimit && <p className="employee-limit">{plan.employeeLimit}</p>}

        {plan.additionalCost ? (
          <p className="additional-cost">
            <span className="currency-symbol-small">₹</span>
            <span className="add-price">{plan.additionalCost.amount}</span> per additional employee
          </p>
        ) : plan.price !== null && !isOnDemand ? (
          <p className="additional-cost">Not applicable</p>
        ) : null}
      </div>

      {plan.ctaAction === "contact" ? (
        <Link href="/contact" prefetch={false} className="cta-btn primary">
          {plan.cta}
        </Link>
      ) : (
        <button type="button" className="cta-btn primary" onClick={() => onCtaClick(plan)}>
          {plan.cta}
        </button>
      )}

      <ul className="feature-list">
        {plan.summaryFeatures.map((item) => (
          <li key={item} className="summary-feat">
            {item}
          </li>
        ))}

        {topLevelNodes.map((node) => (
          <FeatureNode key={node.label} node={node} />
        ))}

        {plan.plainFeatures.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function HrmsPricingClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("HRMS Software");

  const handleCta = useCallback((plan) => {
    setSelectedPlan(`${plan.name} — HRMS Software`);
    setIsModalOpen(true);
  }, []);

  return (
    <div className="hrms-pricing-page">
      <header className="main-header pt-32 lg:pt-40 pb-8 lg:pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <span className="pricing-eyebrow">HRMS Software Pricing</span>
          <h1>
            Choose the Right Plan for{" "}
            <span className="heading-accent">Your Team</span>
          </h1>
          <p className="subtitle">
            Flexible plans for payroll, attendance, and HR — start with a 14-day free trial, no credit card required.{" "}
            <Link href="/contact" prefetch={false} id="contact">
              Contact us
            </Link>{" "}
            for custom pricing.
          </p>
        </div>
      </header>

      <main className="pricing-container pb-12 lg:pb-16">
        {PRICING_PLANS.map((plan) => (
          <PricingCard key={plan.id} plan={plan} onCtaClick={handleCta} />
        ))}
      </main>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem={selectedPlan}
        allItems={[{ title: "HRMS Software", slug: "hrms-software" }]}
      />
    </div>
  );
}
