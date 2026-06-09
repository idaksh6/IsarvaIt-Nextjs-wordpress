/** @typedef {{ label: string; children?: FeatureNode[] }} FeatureNode */

/** @type {FeatureNode[]} */
export const PAYROLL_FEATURES = [
  { label: "Secure Workspace Login" },
  {
    label: "Payroll Dashboard",
    children: [{ label: "Comprehensive Analytical Dashboard" }],
  },
  {
    label: "Master Settings",
    children: [
      { label: "Departments" },
      { label: "Designations" },
      { label: "Roles" },
      { label: "Employee Status" },
      { label: "Document Type" },
      { label: "Locations" },
    ],
  },
  {
    label: "Employee Management",
    children: [
      { label: "Onboard Process" },
      { label: "Employee Permissions" },
      { label: "Self Portal" },
      { label: "Employee Documents" },
      { label: "Employee Leave Allocation" },
      { label: "Employee Salary Configuration" },
      { label: "Loans/Advance Management" },
      { label: "Employee Exit Process" },
      { label: "Generate Joining Letter/Offer Letter/Experience Letter" },
    ],
  },
  {
    label: "Process Salary",
    children: [
      { label: "Location Based Salary Process" },
      { label: "Review Salary" },
      { label: "Adjust Salary" },
      { label: "Loans/Advance Management During Salary Process" },
      { label: "Compare Salary" },
      { label: "Quick View for Components" },
      { label: "Download Bank Ready Formats for Easy Salary" },
      { label: "Download EPF and ESIC Formats for Easy Portal Uploads" },
      { label: "Bulk/Individual Payslip Sending" },
    ],
  },
  {
    label: "Process OT and Incentives",
    children: [
      { label: "Process OT and Incentives" },
      { label: "Download Bank Ready Formats for Easy Process" },
    ],
  },
  { label: "Dynamic Statutory and Salary Components" },
  {
    label: "Financial Year Settings",
    children: [
      { label: "Financial Year Start and End Date" },
      { label: "Close/Start New Financial Year" },
    ],
  },
  { label: "Company Settings" },
  { label: "Activity Logs" },
  {
    label: "Notifications",
    children: [
      { label: "Manual Notifications" },
      { label: "System Notifications" },
    ],
  },
  {
    label: "Reports",
    children: [
      { label: "Payroll Reports" },
      { label: "Overtime Pay Reports" },
      { label: "Incentive Pay Reports" },
      { label: "Combined OT & Holiday Pay Reports" },
      { label: "Payroll Comparison" },
    ],
  },
];

/** @type {FeatureNode[]} */
export const ATTENDANCE_FEATURES = [
  {
    label: "Attendance Management",
    children: [
      { label: "Comprehensive Analytical Dashboard" },
      { label: "Shift Master (Full configuration)" },
      { label: "Duty Roster Management" },
      { label: "Attendance Policy Configuration" },
      { label: "Attendance Locking & Batch Processing" },
      { label: "Excel Import/Export" },
      { label: "OT Hours Management" },
    ],
  },
  {
    label: "Leave Management",
    children: [
      { label: "Department-wise Leave Setup" },
      { label: "Public Leave Master (Fixed & Flexible Holiday Concept)" },
      { label: "Week-off Configuration (Employee-wise)" },
      { label: "Leave Type Master" },
      { label: "Leave Balance Tracking" },
    ],
  },
  {
    label: "Leave Applications",
    children: [
      { label: "Apply for Leave (Employee Portal)" },
      { label: "2-Level Approval Workflow (Manager → HR)" },
      { label: "Dynamic Exclusion (Week-offs & Public holidays auto-excluded)" },
      { label: "LOP Calculation & Acknowledgment" },
      { label: "Leave Cancellation & Rejection" },
    ],
  },
  {
    label: "Integration & Automation",
    children: [
      { label: "Payroll System Integration (API)" },
      { label: "Employee & Department Sync" },
      { label: "Automated Notifications & Reminders" },
    ],
  },
  {
    label: "Reports",
    children: [
      { label: "Attendance Summary Reports" },
      { label: "Leave Balance Reports" },
      { label: "Monthly Analytics" },
      { label: "Department-wise Reports" },
    ],
  },
];

/** @type {FeatureNode[]} */
export const TRAINING_SUPPORT_FEATURES = [
  { label: "Complete Onetime Training" },
  { label: "Ticket Support (Response Time 24hrs to 48hrs)" },
  { label: "Documentation Access" },
];

/** @type {FeatureNode[]} */
export const ENTERPRISE_PAYROLL_ADDONS = [
  {
    label: "Payroll Dashboard",
    children: [{ label: "Calendar for Show and Save Events" }],
  },
  {
    label: "Employee Management",
    children: [{ label: "Promotion and Increament Module" }],
  },
  {
    label: "Payroll",
    children: [{ label: "Hold and Release Salary" }],
  },
  {
    label: "Reports",
    children: [{ label: "Statutory Component Reports" }],
  },
  {
    label: "Analytical Reports",
    children: [
      { label: "Payroll Analytics Reports" },
      { label: "Analytical Comparison Reports" },
    ],
  },
];

/** @type {FeatureNode[]} */
export const ENTERPRISE_ATTENDANCE_ADDONS = [
  {
    label: "Biometric Integration",
    children: [
      { label: "Multi-Vendor Device Support (ZKTeco, ESSL, Realtime, Generic CSV)" },
      { label: "Bulk Biometric Data Import" },
      { label: "Real-time Sync" },
    ],
  },
  {
    label: "Manual Punch Control",
    children: [
      { label: "Manual Attendance Correction (for biometric failures)" },
      { label: "Shift-based Auto-suggestion" },
      { label: "Approval Workflow for Manual Entries" },
    ],
  },
  {
    label: "Advanced Operations",
    children: [
      { label: "Bulk Attendance Regeneration" },
      { label: "Overtime Calculation & Management" },
      { label: "Attendance Override Controls" },
    ],
  },
];

/** @type {FeatureNode[]} */
export const PRIORITY_SUPPORT_FEATURES = [
  { label: "Dedicated In Person Support" },
  { label: "Priority Ticket Support" },
  { label: "Priority Email & Phone Support" },
  { label: "On-boarding Assistance" },
  { label: "Custom Training Sessions" },
];

export const PRICING_PLANS = [
  {
    id: "free-trial",
    name: "Free Trial",
    description: "Explore the application for 14 days. No Credit Card details required*",
    price: 0,
    priceLabel: null,
    period: "/month, billed annually",
    employeeLimit: "(Limited Employees)",
    additionalCost: null,
    cta: "Start Free Trial",
    ctaAction: "trial",
    recommended: false,
    summaryFeatures: [],
    featureSections: [
      { label: "Payroll", children: PAYROLL_FEATURES },
      { label: "Attendance", children: ATTENDANCE_FEATURES },
    ],
    plainFeatures: [],
  },
  {
    id: "professional",
    name: "Professional Plan",
    description: "Unlock advanced automation features and seamless HR management",
    price: 3500,
    priceLabel: null,
    period: "/month, billed annually",
    employeeLimit: "(Including 50 employees)",
    additionalCost: { amount: 71, suffix: "per additional employee" },
    cta: "Start Free Trial",
    ctaAction: "trial",
    recommended: false,
    summaryFeatures: [],
    featureSections: [
      { label: "Payroll", children: PAYROLL_FEATURES },
      { label: "Attendance", children: ATTENDANCE_FEATURES },
      { label: "Training and Support", children: TRAINING_SUPPORT_FEATURES },
    ],
    plainFeatures: [],
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    description:
      "Comprehensive plan designed to engage employees and take your organization to new heights.",
    price: 5666,
    priceLabel: null,
    period: "/month, billed annually",
    employeeLimit: "(Including 50 employees)",
    additionalCost: { amount: 125, suffix: "per additional employee" },
    cta: "Start Free Trial",
    ctaAction: "trial",
    recommended: true,
    summaryFeatures: ["Everything in Professional"],
    featureSections: [
      { label: "Payroll", children: ENTERPRISE_PAYROLL_ADDONS },
      { label: "Attendance", children: ENTERPRISE_ATTENDANCE_ADDONS },
      { label: "Priority Support", children: PRIORITY_SUPPORT_FEATURES },
    ],
    plainFeatures: [],
  },
  {
    id: "custom",
    name: "Custom Plan",
    description:
      "Tailored to your needs — pay only for the features you use. Get the perfect HR solution within your budget!",
    price: null,
    priceLabel: "On Demand",
    period: null,
    employeeLimit: null,
    additionalCost: null,
    cta: "Contact Us",
    ctaAction: "contact",
    recommended: false,
    summaryFeatures: ["Everything in Enterprise"],
    featureSections: [],
    plainFeatures: [
      "Custom Integrations",
      "Custom Features",
      "Custom Compliance and reports",
    ],
  },
];
