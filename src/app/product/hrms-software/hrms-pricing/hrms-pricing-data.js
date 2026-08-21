export const PRICING_PLANS = [
  {
    id: "professional",
    name: "Professional Plan",
    description: "Unlock advanced automation features and seamless HR management",
    price: 200,
    priceLabel: null,
    period: "per employee per month",
    employeeLimit: null,
    additionalCost: null,
    cta: "Start Free Trial",
    ctaAction: "trial",
    recommended: false,
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    description:
      "Comprehensive plan designed to engage employees and take your organization to new heights.",
    price: 300,
    priceLabel: null,
    period: "per employee per month",
    employeeLimit: null,
    additionalCost: null,
    cta: "Start Free Trial",
    ctaAction: "trial",
    recommended: true,
    badge: "Recommended",
  },
];

/** @param {'check'|'cross'|'addon'|'text'} type */
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
 * Feature comparison from Isarva HRMS pricing HTML reference.
 * Cell types: check | cross | addon | text
 */
export const FEATURE_COMPARISON = [
  section("HR & Payroll Management", [
    item("Secure Workspace Login", cell("check"), cell("check")),
    item(
      "Analytical Dashboard",
      cell("text", "Comprehensive Analytical Dashboard"),
      cell("text", "Dashboard + Calendar Events")
    ),
    item(
      "Master Settings (Dept, Designation, Roles, Status, Doc Type, Locations)",
      cell("text", "Full Settings"),
      cell("text", "Full Settings")
    ),
    item(
      "Employee Onboard Process & Permissions",
      cell("text", "Full Access"),
      cell("text", "Full Access")
    ),
    item("Employee Self Portal & Documents", cell("check"), cell("check")),
    item(
      "Salary Configuration & Leave Allocation",
      cell("text", "Configurable"),
      cell("text", "Configurable")
    ),
    item(
      "Loans & Advance Management",
      cell("text", "During onboarding & payroll"),
      cell("text", "During onboarding & payroll")
    ),
    item("Employee Exit Process", cell("check"), cell("check")),
    item(
      "Document Generator (Joining/Offer/Experience Letters)",
      cell("check"),
      cell("check")
    ),
    item("Location Based Salary Process", cell("check"), cell("check")),
    item("Review & Adjust Salary Components", cell("check"), cell("check")),
    item("Hold & Release Salary", cell("cross"), cell("check")),
    item("Promotion & Increment Module", cell("cross"), cell("check")),
    item("EPF, ESIC, and Bank Ready Formats", cell("check"), cell("check")),
    item(
      "Bulk/Individual Payslip Sending",
      cell("text", "Email & App"),
      cell("text", "Email & App")
    ),
    item(
      "OT and Incentives Processing",
      cell("text", "Standard"),
      cell("text", "Advanced Automation")
    ),
    item(
      "Company Settings & Activity Logs",
      cell("text", "Complete Logs"),
      cell("text", "Complete Logs")
    ),
  ]),

  section("Attendance & Leave Management", [
    item(
      "Shift Master & Duty Roster",
      cell("text", "Full Roster Management"),
      cell("text", "Full Roster Management")
    ),
    item(
      "Attendance Policy & Locking Config",
      cell("text", "Full configuration & lock"),
      cell("text", "Full configuration & lock")
    ),
    item(
      "Leave Management (Dept-wise setup, week-offs, holidays)",
      cell("text", "Full Setup & Balances"),
      cell("text", "Full Setup & Balances")
    ),
    item(
      "Approval Workflows",
      cell("text", "2-Level (Manager → HR)"),
      cell("text", "2-Level (Manager → HR)")
    ),
    item(
      "Biometric Device Integration (ZKTeco, ESSL, Realtime, CSV)",
      cell("cross"),
      cell("check", "Realtime Sync & Bulk Import")
    ),
    item(
      "Manual punch correction approval",
      cell("text", "Online Only"),
      cell("text", "Shift-based Auto-suggestion")
    ),
    item(
      "Advanced Operations (Bulk Regeneration & Override)",
      cell("cross"),
      cell("check")
    ),
  ]),

  section("Integrations, Reports & Support", [
    item(
      "Payroll System Integration (API)",
      cell("text", "Basic API Sync"),
      cell("text", "Full API & Department Sync")
    ),
    item("Automated Notifications & Reminders", cell("check"), cell("check")),
    item(
      "Detailed Reports (Payroll, OT, Incentives, Statutory)",
      cell("text", "Comprehensive Reports"),
      cell("text", "Reports + Analytics Comparisons")
    ),
    item(
      "Support SLA",
      cell("text", "Ticket Support (24-48h)"),
      cell("text", "Priority Phone/Email Support")
    ),
    item(
      "Training & On-boarding",
      cell("text", "Complete Onetime Online Training"),
      cell("text", "Dedicated Custom Training & setup")
    ),
  ]),

  section("Self service Mobile app", [
    section(
      "Employee Data",
      [
        item("Access to self employee information", cell("check"), cell("check"), 3),
        item("Mark attendance from employee app", cell("cross"), cell("check"), 3),
      ],
      2
    ),
    section(
      "Leave Features",
      [
        item("Request for leaves", cell("check"), cell("check"), 3),
        item("View leave applications", cell("check"), cell("check"), 3),
        item("Delete leave applications", cell("check"), cell("check"), 3),
      ],
      2
    ),
    section(
      "Payroll Features",
      [item("Download Payslips", cell("check"), cell("check"), 3)],
      2
    ),
  ]),

  section("Add-on Features", [
    item("Self portal punch with GPS and IP", cell("addon"), cell("check")),
    item("Isarva Face attendance app", cell("addon"), cell("addon")),
    item("Employee Tracking with GPS", cell("addon"), cell("addon")),
    item("Shift Management", cell("addon"), cell("check")),
  ]),
];
