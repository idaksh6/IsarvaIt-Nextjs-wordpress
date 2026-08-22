export const PRICING_PLANS = [
  {
    id: "essential",
    name: "Sell — Essential",
    description: "New brands launching online with clarity and speed.",
    price: "TBD",
    priceLabel: "Price TBD",
    period: "Formerly Basic Package",
    employeeLimit: "A clean store that accepts orders and payments.",
    additionalCost: null,
    cta: "Choose Essential",
    ctaAction: "contact",
    recommended: false,
    timeline: "2-3 weeks",
    features: [
      "WP + WooCommerce + Astra / Bootscore",
      "Up to 50 products, 10 categories",
      "Basic variations, coupons, COD",
      "1 payment gateway",
      "Flat / zone shipping + SSL + order emails",
      "Local delivery assignment (manual)",
      "Stock status + GST-ready tax setup",
      "Contact page + enquiry form",
      "Responsive UI + basic SEO"
    ]
  },
  {
    id: "growth",
    name: "Deliver — Growth",
    description: "Delivery logic, richer catalog and conversion tools.",
    price: "TBD",
    priceLabel: "Price TBD",
    period: "Formerly Standard Package",
    employeeLimit: "Higher conversion with a clear delivery promise.",
    additionalCost: null,
    cta: "Choose Growth",
    ctaAction: "contact",
    recommended: true,
    badge: "MOST POPULAR",
    timeline: "3-5 weeks",
    features: [
      "Everything in Essential",
      "Up to 200 products, 25 categories",
      "Advanced variations + import / export",
      "2 payment gateways + wishlist",
      "Same-day slots + pincode check",
      "Area-wise delivery charges",
      "Cross-sell, related products, tracking",
      "Guest checkout + 6 months support"
    ]
  },
  {
    id: "advanced",
    name: "Retain — Advanced",
    description: "Loyalty, referrals, customisation and ops dashboards.",
    price: "TBD",
    priceLabel: "Price TBD",
    period: "Formerly Premium Package",
    employeeLimit: "Sell, retain and run daily operations.",
    additionalCost: null,
    cta: "Choose Advanced",
    ctaAction: "contact",
    recommended: false,
    timeline: "5-7 weeks",
    features: [
      "Everything in Growth",
      "Up to 1000 products, 50 categories",
      "Wallet + 2-tier referral engine",
      "Milestone + name-day discounts",
      "Photo upload + staff dashboards",
      "Split pay (wallet + gateway)",
      "Referral network view for admins",
      "Today’s delivery + top-customer reports",
      "3–4 gateways + 12 months priority support"
    ]
  },
];

/** @param {'check'|'cross'|'text'} type */
function cell(type, label = null) {
  return { type, label };
}

function item(title, essential, growth, advanced, depth = 2) {
  return {
    type: "item",
    title,
    depth,
    plans: [essential, growth, advanced],
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
 * Detailed Feature Matrix for WooCommerce & WordPress Solution Packages.
 * Matches Page 2 of PDF exactly.
 */
export const FEATURE_COMPARISON = [
  section("Product Management", [
    item("Product listings", cell("text", "Up to 50"), cell("text", "Up to 200"), cell("text", "Up to 1000")),
    item("Product categories", cell("text", "Up to 10"), cell("text", "Up to 25"), cell("text", "Up to 50")),
    item("Product variations", cell("text", "Basic"), cell("text", "Advanced"), cell("text", "Adv. + bulk edit")),
    item("Product import / export", cell("cross"), cell("check"), cell("check")),
  ]),

  section("Payments & Checkout", [
    item("Payment gateways", cell("text", "Any 1"), cell("text", "2 gateways"), cell("text", "3-4 / all major")),
    item("Cash on delivery", cell("check"), cell("check"), cell("check")),
    item("Wallet + split pay", cell("cross"), cell("cross"), cell("check", "NEW")),
  ]),

  section("Customer Experience", [
    item("Mobile responsive design", cell("check"), cell("check"), cell("check")),
    item("Product reviews", cell("check"), cell("check"), cell("check")),
    item("Wishlist / comparison", cell("cross"), cell("check"), cell("check")),
    item("Photo / file upload", cell("cross"), cell("cross"), cell("check", "NEW")),
  ]),

  section("Delivery & Operations", [
    item("Flat / zone shipping", cell("check"), cell("check"), cell("check")),
    item("Local delivery assignment", cell("text", "Manual"), cell("check"), cell("check")),
    item("Pincode + same-day slots", cell("cross"), cell("check"), cell("check")),
    item("Order tracking", cell("cross"), cell("check"), cell("check")),
    item("Staff / kitchen dashboards", cell("cross"), cell("cross"), cell("check")),
  ]),

  section("Marketing & Loyalty", [
    item("Discount coupons", cell("check"), cell("check"), cell("check")),
    item("Cross-sells & upsells", cell("cross"), cell("check"), cell("check")),
    item("Abandoned cart recovery", cell("cross"), cell("cross"), cell("check")),
    item("2-tier referral engine", cell("cross"), cell("cross"), cell("check", "NEW")),
    item("Milestone + name-day discounts", cell("cross"), cell("cross"), cell("check", "NEW")),
  ]),

  section("Support & Analytics", [
    item("Training", cell("text", "1 demo"), cell("text", "2 hours"), cell("text", "5 hours")),
  ]),
];

/**
 * WooCommerce Add-on Services
 */
export const ADDON_SERVICES = [
  { name: "Social login integration", cost: "TBD" },
  { name: "Live chat / chatbot integration", cost: "TBD" },
  { name: "Multilingual support", cost: "TBD" },
  { name: "Currency conversion", cost: "TBD" },
  { name: "Subscription services", cost: "TBD" },
  { name: "Custom API development", cost: "Starting at TBD" },
  { name: "Additional training", cost: "TBD / hour" },
];

/**
 * Payment Terms
 */
export const PAYMENT_TERMS = [
  { percentage: "50%", label: "Upfront on project kickoff" },
  { percentage: "25%", label: "On completion of development" },
  { percentage: "25%", label: "On final delivery & approval" },
];
