export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter Plan",
    description: "Free core CRM — upgrade anytime",
    price: "0",
    priceLabel: null,
    period: "Free forever · No credit card required",
    employeeLimit: "Up to 5 active users",
    additionalCost: null,
    cta: "Start Free Trial",
    ctaAction: "trial",
    recommended: false,
  },
  {
    id: "professional",
    name: "Professional Plan",
    description: "Everything your team needs to manage leads, deals, and relationships",
    price: "2,500",
    priceLabel: null,
    period: "per month (billed annually at ₹30,000/year)",
    employeeLimit: "includes 50 employees",
    additionalCost: {
      amount: "50",
      suffix: "per additional user / month"
    },
    cta: "Get Professional",
    ctaAction: "trial",
    recommended: true,
    badge: "🔥 MOST POPULAR",
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    description: "Tailored for large teams and enterprise-grade SLA & security",
    price: "Custom",
    priceLabel: null,
    period: "On-premise deployment optional",
    employeeLimit: "Dedicated support & SLA",
    additionalCost: null,
    cta: "Contact Sales",
    ctaAction: "contact",
    recommended: false,
  },
];

/** @param {'check'|'cross'|'addon'|'text'} type */
function cell(type, label = null) {
  return { type, label };
}

function item(title, starter, professional, enterprise, depth = 2) {
  return {
    type: "item",
    title,
    depth,
    plans: [starter, professional, enterprise],
  };
}

function section(title, children, depth = 1) {
  return {
    type: "section",
    title,
    depth,
    children,
  };
}

/**
 * Feature comparison for Isarva CRM pricing.
 * Cell types: check | cross | addon | text
 */
export const FEATURE_COMPARISON = [
  section("Lead & Deal Management", [
    item("Active Users", cell("text", "Up to 5 users"), cell("text", "50 users included"), cell("text", "Unlimited / Custom")),
    item(
      "Analytical Dashboard",
      cell("text", "KPIs, charts, sales targets"),
      cell("text", "Dashboard + Analytics"),
      cell("text", "Advanced Performance & Revenue Analytics")
    ),
    item(
      "Leads Management",
      cell("text", "Filter, convert to deals"),
      cell("text", "Filter, convert, call reports"),
      cell("text", "Full control + manager permissions")
    ),
    item("Deals Management & Pipeline Stages", cell("check"), cell("check"), cell("check")),
    item(
      "Company & Contact Management",
      cell("check"),
      cell("text", "Filter, export, delete, bulk export"),
      cell("text", "Manager + Admin controls")
    ),
  ]),

  section("Activity & Task Management", [
    item(
      "Task Management",
      cell("text", "Overdue/Today/Upcoming"),
      cell("text", "Role-based visibility (Manager sees team tasks)"),
      cell("text", "Manager + Admin controls for all modules")
    ),
    item(
      "Meeting Management",
      cell("text", "Google Meet integration"),
      cell("text", "Offline/online, calendar view, Meet links & reminders"),
      cell("text", "Manager + Admin controls")
    ),
  ]),

  section("Quotation & Product Directory", [
    item("Quotations Suite & Basic Reports", cell("check"), cell("check"), cell("check")),
    item("Quotation PDF Generation", cell("cross"), cell("check"), cell("check")),
    item("Product Management", cell("cross"), cell("text", "Create/edit/delete"), cell("text", "Create/edit/delete")),
  ]),

  section("Reports & Analytics", [
    item(
      "Reports & Analytics",
      cell("text", "Quotations & reports suite"),
      cell("text", "Leads/Deals reports, sales source, user perf, product & call logs"),
      cell("text", "Advanced performance & revenue analytics")
    ),
    item(
      "Advanced Analytics",
      cell("cross"),
      cell("text", "Revenue reports, lead comparison, deal analytics"),
      cell("text", "Advanced performance & revenue analytics")
    ),
  ]),

  section("Admin Settings & Security", [
    item(
      "Advanced User Management",
      cell("cross"),
      cell("cross"),
      cell("text", "Roles, module permissions, Admin only access")
    ),
    item(
      "Full Settings Suite",
      cell("cross"),
      cell("cross"),
      cell("text", "Company branding, logo, role settings, change password")
    ),
    item("Data Backup & FY Closure", cell("cross"), cell("cross"), cell("check")),
    item("Custom Security Policies & Audit Logs", cell("cross"), cell("cross"), cell("check")),
  ]),

  section("Deployment & Support", [
    item(
      "Deployment Options",
      cell("text", "Cloud SaaS"),
      cell("text", "Cloud SaaS"),
      cell("text", "Cloud SaaS / On-premise deployment optional")
    ),
    item(
      "Customer Support",
      cell("text", "Standard email support"),
      cell("text", "Standard support"),
      cell("text", "Priority support with dedicated account manager")
    ),
    item("SLA Guarantee", cell("cross"), cell("cross"), cell("check", "Enterprise-grade SLA")),
  ]),
];
