export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Basic Plan — Starter",
    description: "Best for small teams getting started",
    price: "999",
    priceLabel: null,
    period: "per month (placeholder)",
    employeeLimit: "Run daily work, projects, basic tasks, and your team — simply.",
    additionalCost: null,
    cta: "Get Started",
    ctaAction: "contact",
    recommended: false,
  },
  {
    id: "growth",
    name: "Professional Plan — Growth",
    description: "Best for growing support & delivery teams",
    price: "1,999",
    priceLabel: null,
    period: "per month (placeholder)",
    employeeLimit: "Add tickets, Google login, task documents & assets, more reports, and backup.",
    additionalCost: null,
    cta: "Choose Growth",
    ctaAction: "contact",
    recommended: true,
    badge: "🔥 RECOMMENDED",
  },
  {
    id: "complete",
    name: "Enterprise Plan — Complete",
    description: "Best for full control & client transparency",
    price: "3,499",
    priceLabel: null,
    period: "per month (placeholder)",
    employeeLimit: "Full power — all reports, renewals, activity logs, client portal, credentials & project history.",
    additionalCost: null,
    cta: "Go Advanced",
    ctaAction: "contact",
    recommended: false,
  },
];

/** @param {'check'|'cross'|'addon'|'text'} type */
function cell(type, label = null) {
  return { type, label };
}

function item(title, starter, growth, complete, depth = 2) {
  return {
    type: "item",
    title,
    depth,
    plans: [starter, growth, complete],
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
 * Feature comparison for Support Software pricing.
 */
export const FEATURE_COMPARISON = [
  section("Access & Login", [
    item("Username & password login", cell("check"), cell("check"), cell("check")),
    item("Google login", cell("cross"), cell("check"), cell("check")),
    item("Team access / page rights", cell("check"), cell("check"), cell("check")),
  ]),

  section("Daily Work & Projects", [
    item("Dashboard", cell("check"), cell("check"), cell("check")),
    item("Daily tasks", cell("check"), cell("check"), cell("check")),
    item("Daily reports", cell("check"), cell("check"), cell("check")),
    item("Project management", cell("check"), cell("check"), cell("check")),
    item("Billed hours tracking", cell("cross"), cell("check"), cell("check")),
  ]),

  section("Task Management", [
    item("Basic task management", cell("check"), cell("check"), cell("check")),
    item("Internal documents", cell("cross"), cell("check"), cell("check")),
    item("Timeline documents", cell("cross"), cell("check"), cell("check")),
    item("Assets", cell("cross"), cell("check"), cell("check")),
    item("Credentials Management", cell("cross"), cell("cross"), cell("check")),
    item("Project history", cell("cross"), cell("cross"), cell("check")),
    item("Full task workspace tools", cell("cross"), cell("cross"), cell("check")),
  ]),

  section("Support & Tickets", [
    item("Ticket module", cell("cross"), cell("check"), cell("check")),
    item("Assign to team", cell("cross"), cell("check"), cell("check")),
    item("Ticket notifications", cell("cross"), cell("check"), cell("check")),
    item("Client portal access", cell("cross"), cell("cross"), cell("check")),
  ]),

  section("Clients & Team", [
    item("Client management", cell("check"), cell("check"), cell("check")),
    item("Members management", cell("check"), cell("check"), cell("check")),
    item("Page rights / permissions", cell("check"), cell("check"), cell("check")),
  ]),

  section("Reports & Analytics", [
    item("Essential reports (2)", cell("check"), cell("check"), cell("check")),
    item("Additional operational reports", cell("cross"), cell("check"), cell("check")),
    item("All reports / advanced reports", cell("cross"), cell("cross"), cell("check")),
    item("Advanced analytics suite", cell("cross"), cell("cross"), cell("check")),
  ]),

  section("Notifications & Continuity", [
    item("Email notifications", cell("check"), cell("check"), cell("check")),
    item("Google Chat notifications", cell("check"), cell("check"), cell("check")),
    item("Backup module", cell("cross"), cell("check"), cell("check")),
    item("Renewal & service expiry tracking", cell("cross"), cell("cross"), cell("check")),
    item("Activity logs", cell("cross"), cell("cross"), cell("check")),
  ]),

  section("Support & Assistance", [
    item("Support assistance", cell("check"), cell("check"), cell("check")),
    item("Onboarding help", cell("text", "Standard"), cell("text", "Standard"), cell("text", "High Priority")),
  ]),

  section("Add-on Modules", [
    item("AMC Management Module", cell("addon", "₹799 / month"), cell("addon", "₹799 / month"), cell("addon", "₹799 / month")),
    item("Public Client Request Form", cell("addon", "₹399 / month"), cell("addon", "₹399 / month"), cell("addon", "₹399 / month")),
  ]),
];
