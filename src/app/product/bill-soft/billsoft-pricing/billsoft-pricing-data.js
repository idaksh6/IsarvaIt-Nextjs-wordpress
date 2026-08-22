export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter Plan",
    description: "Best for single-location shops and small trading businesses",
    price: "299",
    priceLabel: null,
    period: "per month",
    employeeLimit: "1 branch · 1 warehouse",
    additionalCost: null,
    cta: "Choose Starter",
    ctaAction: "contact",
    recommended: false,
  },
  {
    id: "professional",
    name: "Professional Plan",
    description: "Best for growing teams with a few outlets",
    price: "999",
    priceLabel: null,
    period: "per month (₹10,000 / year)",
    employeeLimit: "Up to 3 branches · 3 warehouses",
    additionalCost: null,
    cta: "Choose Professional",
    ctaAction: "contact",
    recommended: true,
    badge: "RECOMMENDED",
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    description: "Best for multi-location and compliance-ready businesses",
    price: "Custom",
    priceLabel: null,
    period: "contact for quote",
    employeeLimit: "Unlimited branches & warehouses",
    additionalCost: null,
    cta: "Contact Sales",
    ctaAction: "contact",
    recommended: false,
  },
];

/** @param {'check'|'cross'|'text'} type */
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
 * Feature comparison matrix for BillSoft pricing.
 */
export const FEATURE_COMPARISON = [
  section("Access & workspace", [
    item("Secure username & password login", cell("check"), cell("check"), cell("check")),
    item("Analytical dashboard", cell("cross"), cell("check"), cell("check")),
    item("Users & roles / permissions", cell("check"), cell("check"), cell("check")),
    item("Financial years", cell("check"), cell("check"), cell("check")),
    item("Site options (company profile, logo, bank details, basic preferences)", cell("check"), cell("check"), cell("check")),
    item("Theme customization (UI theme)", cell("cross"), cell("cross"), cell("check")),
    item("Full application customization", cell("cross"), cell("cross"), cell("check")),
  ]),

  section("Organisation & inventory", [
    item("Branches", cell("text", "1"), cell("text", "Up to 3"), cell("text", "Unlimited")),
    item("Warehouses", cell("text", "1"), cell("text", "Up to 3"), cell("text", "Unlimited")),
    item("Products addition", cell("text", "Unlimited"), cell("text", "Unlimited"), cell("text", "Unlimited")),
    item("Product categories", cell("text", "Unlimited"), cell("text", "Unlimited"), cell("text", "Unlimited")),
    item("Parties (customers & suppliers)", cell("check"), cell("check"), cell("check")),
    item("Stock adjustment", cell("check"), cell("check"), cell("check")),
    item("Stock transfer between warehouses", cell("cross"), cell("cross"), cell("check")),
  ]),

  section("Sales & purchases", [
    item("Sales invoice", cell("check"), cell("check"), cell("check")),
    item("Purchase invoice", cell("check"), cell("check"), cell("check")),
    item("Sales return", cell("check"), cell("check"), cell("check")),
    item("Purchase return", cell("check"), cell("check"), cell("check")),
    item("Quotation", cell("check"), cell("check"), cell("check")),
    item("Proforma invoice", cell("check"), cell("check"), cell("check")),
    item("Payment In", cell("check"), cell("check"), cell("check")),
    item("Payment Out", cell("check"), cell("check"), cell("check")),
    item("Invoice templates", cell("text", "1 standard"), cell("text", "3 templates (with customization)"), cell("text", "Many templates (with customization)")),
  ]),

  section("Tax & compliance", [
    item("Basic tax-ready invoicing", cell("check"), cell("check"), cell("check")),
    item("GST / IGST tax rate masters unlock", cell("check"), cell("check"), cell("check")),
    item("TDS & TCS", cell("check"), cell("check"), cell("check")),
  ]),

  section("Expenses, reports & accounting", [
    item("Expenses Module", cell("cross"), cell("check"), cell("check")),
    item("Standard reports (sales / purchase summaries, PDF & Excel)", cell("check"), cell("check"), cell("check")),
    item("Extended business reports", cell("cross"), cell("check"), cell("check")),
    item("All advanced reports", cell("cross"), cell("cross"), cell("check")),
    item("Accounting (chart of accounts, journals, statements, reconciliation)", cell("cross"), cell("cross"), cell("check")),
  ]),

  section("Customer communication", [
    item("Email integration — send invoices to customers", cell("cross"), cell("cross"), cell("check")),
    item("WhatsApp integration — send invoices to customers", cell("cross"), cell("cross"), cell("check")),
  ]),

  section("Support & Training", [
    item("Support", cell("text", "Ticket support"), cell("text", "Priority ticket support"), cell("text", "Priority phone / email support")),
    item("Training", cell("text", "One-time online onboarding"), cell("text", "Guided setup for multi-branch"), cell("text", "Dedicated custom training & setup")),
  ]),
];

export const ADDON_SERVICES = [
  {
    name: "Service Module",
    description: "Service products, service quotation, service proforma invoice, service invoice & service payment in",
    cost: "Available on Any plan",
  },
  {
    name: "Saudi Arabia BillSoft",
    description: "Arabic + English language switch, Saudi tax scheme, ZATCA & Fatoora e-invoicing integration",
    cost: "Available on Any plan",
  },
  {
    name: "Barcode Scanner",
    description: "Scan barcodes for quick product selection on sales, purchase, and stock screens",
    cost: "Available on Any Plan",
  },
  {
    name: "E way bill",
    description: "E WAY BILL Integration, cancellation vehicle updates etc",
    cost: "Available on Any Plan",
  },
  {
    name: "E Invoicing",
    description: "E invoicing Integration",
    cost: "Available on Any Plan",
  },
];
