export const PRICING_PLANS = [
  {
    id: "starter",
    name: "CRM Starter Plan",
    description: "Essential tools to manage leads, contacts, and kickstart sales workflows",
    price: "149",
    priceLabel: null,
    period: "per user / month",
    employeeLimit: null,
    additionalCost: null,
    cta: "Choose Starter",
    ctaAction: "contact",
    recommended: false,
  },
  {
    id: "plus",
    name: "CRM Plus Plan",
    description: "Advanced automation, quotations, and outreach for growing teams",
    price: "249",
    priceLabel: null,
    period: "per user / month",
    employeeLimit: null,
    additionalCost: null,
    cta: "Choose Plus",
    ctaAction: "contact",
    recommended: true,
    badge: "⭐ Most Popular",
  },
  {
    id: "enterprise",
    name: "CRM Enterprise Plan",
    description: "Comprehensive CRM suite with analytics, WhatsApp & email logs, and unlimited scale",
    price: "399",
    priceLabel: null,
    period: "per user / month",
    employeeLimit: null,
    additionalCost: null,
    cta: "Choose Enterprise",
    ctaAction: "contact",
    recommended: false,
  },
];

/** @param {'check'|'cross'|'text'} type */
function cell(type, label = null) {
  return { type, label };
}

function item(title, starter, plus, enterprise, depth = 2) {
  return {
    type: "item",
    title,
    depth,
    plans: [starter, plus, enterprise],
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
 * Feature comparison matrix for CRM software pricing.
 * Only the main sections (Secure Workspace Login, Outreach Management, User & Role Management,
 * Reports Management, Admin & System, Mobile App) have children.
 */
export const FEATURE_COMPARISON = [
  section("Secure Workspace Login", [
    item("Username & Password used to login", cell("check"), cell("check"), cell("check")),
    item("Google Authentication Login", cell("check"), cell("check"), cell("check")),
    item("Two Factor Authentication", cell("check"), cell("check"), cell("check")),
  ]),

  item("Lead Management", cell("check"), cell("check"), cell("check")),
  item("Contact, company management", cell("check"), cell("check"), cell("check")),
  item("Deal pipeline management", cell("check"), cell("check"), cell("check")),
  item("Task management and activity feed", cell("check"), cell("check"), cell("check")),
  item("Notification & Reminders", cell("cross"), cell("check"), cell("check")),

  section("Quote Management", [
    item("Quote creation and management", cell("cross"), cell("check"), cell("check")),
    item("Deal related Quotation generate and Download Quotation", cell("cross"), cell("check"), cell("check")),
    item("Quote Send Email", cell("cross"), cell("cross"), cell("check")),
    item("Quote Send Via Whatsapp", cell("cross"), cell("cross"), cell("check")),
    item("Email and Whatsapp Logs", cell("cross"), cell("cross"), cell("check")),
  ]),

  item("Product Management", cell("cross"), cell("check"), cell("check")),

  section("Outreach Management", [
    item("Calls / Email / WhatsApp / LinkedIn / Meetings / Follow-ups", cell("cross"), cell("check"), cell("check")),
  ]),

  section("User & Role Management", [
    item("User Profiles Management", cell("text", "Only 5 User Access"), cell("text", "50 User access"), cell("text", "Unlimited")),
    item("Permissions control", cell("cross"), cell("check"), cell("check")),
    item("Access-based modules", cell("cross"), cell("check"), cell("check")),
  ]),

  section("Reports Management", [
    item("Leads Reports (Today's leads, By source, By Status, Converted leads)", cell("check"), cell("check"), cell("check")),
    item("Deals Reports (Today's Sales, By source, Open, Lost, Closing This Month)", cell("check"), cell("check"), cell("check")),
    item("User Reports (Daily, Monthly, Performance, Reminder, Task, Product-wise)", cell("check"), cell("check"), cell("check")),
    item("Analytics Reports (Leads, Deals, Revenue, User Performance)", cell("cross"), cell("cross"), cell("check")),
    item("Analytics Dashboard", cell("cross"), cell("cross"), cell("check")),
    item("Event Calender", cell("cross"), cell("check"), cell("check")),
  ]),

  section("Admin & System", [
    item("Data Backup", cell("cross"), cell("check"), cell("check")),
    item("Financial Year Setup", cell("check"), cell("check"), cell("check")),
    item("Profile & Change Password Edit Option", cell("check"), cell("check"), cell("check")),
    item("Company Details Updates", cell("check"), cell("check"), cell("check")),
    item("Audit Logs", cell("cross"), cell("check"), cell("check")),
  ]),

  section("Mobile App", [
    item("Create/Edit /Delete Leads", cell("cross"), cell("check"), cell("check")),
    item("Leads List and view Detail Page", cell("check"), cell("check"), cell("check")),
    item("Deals Create/Edit/Delete Options", cell("cross"), cell("check"), cell("check")),
    item("Deals List and View Detail Page", cell("check"), cell("check"), cell("check")),
    item("Tasks List Page", cell("check"), cell("check"), cell("check")),
    item("Tasks Management", cell("cross"), cell("check"), cell("check")),
    item("Activity Management - Notes/tasks/calls/Meetings", cell("cross"), cell("check"), cell("check")),
    item("phone Call/Whatsapp/Email", cell("cross"), cell("check"), cell("check")),
    item("Notification and Reminder", cell("cross"), cell("cross"), cell("check")),
    item("Profile View", cell("check"), cell("check"), cell("check")),
  ]),
];

export const ADDON_CARD_DATA = {
  primaryCard: {
    badge: "MODULAR ADD-ONS",
    title: "Addon Features",
    description: "Supercharge your sales and support workflow with specialized integrations and power tools.",
    subtitle: "Available Add-on Capabilities",
    features: [
      "Email Templates for Quotation & Normal Email",
      "Email Integration [Gmail / Outlook / SMTP]",
      "Google Calendar Integration",
      "WhatsApp Integration",
      "Custom Reports",
      "Social Ads Integration",
      "Webforms Integration",
      "Data Import & Export",
    ],
    primaryBtn: "Request Demo",
    secondaryBtn: "Talk to Sales",
  },
  sideCard: {
    title: "Custom Integrations",
    subtitle: "Tailored API connections, proprietary workflows, and dedicated onboarding support.",
    callout: "Available across all plan tiers",
    btnText: "Talk to Sales",
    btnLink: "/contact",
  },
};
