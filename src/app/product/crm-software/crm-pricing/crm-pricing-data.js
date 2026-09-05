export const PRICING_PLANS = [
  {
    id: "professional",
    name: "Professional Plan",
    description: "Unlock advanced automation features and seamless sales management",
    price: "110",
    priceLabel: null,
    period: "per user / month",
    employeeLimit: null,
    additionalCost: null,
    cta: "Choose Professional",
    ctaAction: "contact",
    recommended: false,
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    description: "Comprehensive plan designed to engage teams and take your organization to new heights.",
    price: "250",
    priceLabel: null,
    period: "per user / month",
    employeeLimit: null,
    additionalCost: null,
    cta: "Choose Enterprise",
    ctaAction: "contact",
    recommended: true,
    badge: "RECOMMENDED",
  },
];

/** @param {'check'|'cross'|'text'} type */
function cell(type, label = null) {
  return { type, label };
}

function item(title, professional, enterprise, depth = 2) {
  return {
    type: "item",
    title,
    depth,
    plans: [professional, enterprise],
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
 * Feature comparison matrix for CRM software pricing (Professional vs Enterprise).
 */
export const FEATURE_COMPARISON = [
  section("Login", [
    item("Username & Password used to login", cell("check"), cell("check")),
    item("Google Authentication Login", cell("cross"), cell("check")),
    item("Two Factor Authentication", cell("cross"), cell("check")),
  ]),

  section("Lead Management", [
    item("Create, Edit, Delete Leads", cell("check"), cell("check")),
    item("Lead Filter Options — Source / Status / Priority / Category / Owner", cell("check"), cell("check")),
    item("Lead assignment to users", cell("check"), cell("check")),
    item("Lead related Task / Meeting Reminder — Notification generated", cell("check"), cell("check")),
    item("Lead Related Notes / File Attach Option", cell("check"), cell("check")),
    item("Lead Convert into Deal / Opportunity", cell("check"), cell("check")),
    item("Lead capture — web forms", cell("cross"), cell("check")),
    item("Lead capture — social media, ads", cell("cross"), cell("check")),
  ]),

  section("Contact / Customer Management", [
    item("Store customer details (name, phone, email, address)", cell("check"), cell("check")),
    item("Related Company Links", cell("check"), cell("check")),
  ]),

  section("Company Management", [
    item("Manage company profiles", cell("check"), cell("check")),
    item("Link contacts & deals to companies", cell("check"), cell("check")),
  ]),

  section("Deal / Opportunity Management", [
    item("Manage deals with stages — Create, Edit, Delete", cell("check"), cell("check")),
    item("Pipeline visualization", cell("check"), cell("check")),
    item("Track deal value & closing probability", cell("check"), cell("check")),
    item("Deal related Task Reminder / Meeting Reminder — Notification generated", cell("check"), cell("check")),
    item("Deal Related Notes / File upload option", cell("check"), cell("check")),
  ]),

  section("Quotation Management", [
    item("Deal related Quotation generate and Download Quotation", cell("cross"), cell("check")),
    item("Quote send Mail Option", cell("cross"), cell("check")),
    item("Quote listed in related deals", cell("cross"), cell("check")),
  ]),

  section("Product Management", [
    item("Product Management (Create / Edit / Delete)", cell("cross"), cell("check")),
  ]),

  section("Call Logs", [
    item("Daily Called list — Update it", cell("cross"), cell("check")),
  ]),

  section("User & Role Management", [
    item("Admin / Manager / Employee roles", cell("check"), cell("check")),
    item("Permissions control", cell("cross"), cell("check")),
    item("Access-based modules", cell("cross"), cell("check")),
  ]),

  section("Reports Management", [
    item("Leads Reports (Today's leads, By source, By Status, Converted leads)", cell("check"), cell("check")),
    item("Deals Reports (Today's Sales, By source, Open, Lost, Closing This Month)", cell("check"), cell("check")),
    item("User Reports (Daily, Monthly, Performance, Reminder, Task, Product-wise)", cell("cross"), cell("check")),
    item("Analytics Reports (Leads, Deals, Revenue, User Performance)", cell("cross"), cell("check")),
    item("Analytics Dashboard", cell("cross"), cell("check")),
    item("Event Calendar", cell("cross"), cell("check")),
  ]),

  section("Admin & System", [
    item("Data Backup Concept", cell("cross"), cell("check")),
    item("Financial Year Setup", cell("check"), cell("check")),
    item("Profile & Change Password Edit Option", cell("check"), cell("check")),
    item("Company Details Updates", cell("check"), cell("check")),
    item("Audit Logs", cell("cross"), cell("check")),
  ]),
];
