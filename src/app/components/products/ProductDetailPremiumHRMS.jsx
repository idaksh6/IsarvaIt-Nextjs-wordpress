"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "../AppLink";
import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";
import HRMSBrochureModal from "../../components/HRMSBrochureModal";

const PRIMARY_BLUE = "#0066FF";
const TEXT_DARK = "#1A1A1A";
const TEXT_GRAY = "#4D4D4D";

const GLOBAL_BTN_ARROW = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
      clipRule="evenodd"
    />
  </svg>
);

const GLOBAL_BTN_ORANGE = "press-illusion-btn-orange text-white w-fit font-bold px-8 py-3 text-base flex cursor-pointer";
const GLOBAL_BTN_GREEN = "press-illusion-btn-green text-white w-fit font-bold px-8 py-3 text-base flex cursor-pointer";

const TABS = [
  { id: "setup", label: "Company Setup" },
  { id: "employee", label: "Employee Mgmt" },
  { id: "payroll", label: "Payroll" },
  { id: "reporting", label: "Reporting" },
  { id: "analytics", label: "Analytics" },
  { id: "ess", label: "ESS Portal" },
  { id: "shifts", label: "Shifts & Rosters" },
  { id: "portalpunch", label: "Portal Punch" },
  { id: "face", label: "Face Attendance" },
  { id: "gps", label: "GPS Attendance" },
  { id: "attendance", label: "Attendance" },
  { id: "biometric", label: "Biometric" },
  { id: "mobile", label: "Mobile App" },
  { id: "holidays", label: "Public Holidays" },
  { id: "leavepolicy", label: "Leave Policy" },
  { id: "posh", label: "POSH" },
  { id: "dpdp", label: "DPDP" },
  { id: "other", label: "Other Features" },
];

const TAB_CONTENT = {
  "setup": {
    title: "Smart Company Setup",
    subtitle: "Customize your organization structure with ease",
    description: "Easily customize your departments, roles, and office locations to fit your business perfectly—no coding required.",
    image: "/products/hrms/Company-setup.png",
    features: [
      "Master setup for Salary and statutory components",
      "Departments",
      "Designations",
      "Roles",
      "Employee status",
      "Employee document types",
      "Office / work location master",
      "Salary Settings",
      "Financial Year Settings",
      
    ]
  },
  "employee": {
    title: "Centralized Employee Management",
    subtitle: "360-degree view of your workforce",
    description: "Create a comprehensive employee database with 360-degree profiles, organizational mapping, and role-based access controls for seamless workforce management.",
    image: "/products/hrms/Personnel-details.jpg",
    features: [
      "Role-based access and permissions",
      "Document management and vault",
      "Employee personal details",
      "Employee salary structure",
      "Employee level weekoff and leave mapping",
      "Auto generated Joining form, Offer letter, Experience letter in case of exit",
      "Employee self-service portal",
      "Employee exit details and Experience letter",
      "Increments and Promotion modules",
    ]
  },
  "payroll": {
    title: "Automated Payroll Processing",
    subtitle: "Process payroll with confidence and accuracy",
    description: "Process payroll with confidence using our automated engine, designed to handle multiple locations seamlessly. It also generates bank-ready formats for salary processing and provides portal upload-ready formats for EPF and ESIC.",
    image: "/products/hrms/Payroll-management.jpg",
    features: [
      "Multi location payroll processing",
      "Override salary components",
      "Add/update employee advances",
      "Comparison view for previous and current month salaries",
      "Bank ready formats for salary process",
      "EPF and ESIC portal upload-ready formats",
      "One-click salary slip sending",
      "TDS configuration with tax regime options",
      "Option for early salary check box",
    ]
  },
  "reporting": {
    title: "Robust Reporting",
    subtitle: "Analyze and grow your organization",
    description: "We offer different types of reports that helps organization to analyse",
    image: "/products/hrms/Reporting-&-analytics.jpg",
    features: [
      "Payroll reports",
      "Comparison reports for payroll",
      "Payroll analytical reports",
      "Employee leave reports",
      "LOP reports",
      "Attendance report",
      "Overtime reports",
      "Incentive reports",
      "Combined payroll, OT & incentive reports",
    ]
  },
  "analytics": {
    title: "HR Analytics & Insights",
    subtitle: "Data-driven decisions for your people",
    description: "HR Analytics & Insights delivers real-time dashboards and actionable workforce data to help you make smarter HR decisions.",
    image: "/products/hrms/Reporting-&-analytics.jpg",
    features: [
      "Real-time dashboard",
      "Attendance & leave insights",
      "Payroll and cost analysis",
      "Department-wise analytics",
      "Quick note calendar for HR",
      "Employee related information (Birthdays, anniversaries, etc)",
    ]
  },
  "ess": {
    title: "Employee Self-Service Portal",
    subtitle: "Empower your workforce with self-service tools",
    description: "Empower employees through a self-service portal for leave, payslips, tax documents, and advances—with accurate balances and real-time updates.",
    image: "/products/Emplyee self Service.png",
    features: [
      "Apply for single-day or multiple-day leave",
      "Half-day leave customization",
      "Automatic exclusion of public holidays and weekly offs",
      "Real-time leave balance based on payroll data",
      "Streamlined leave request and approval process",
      "Automated email notifications",
      "View and download payslips",
      "Download Form 16 by financial year",
      "View salary advances",
    ]
  },
  "shifts": {
    title: "Shifts & Duty Rosters",
    subtitle: "Flexible shift scheduling and bulk assignment",
    description: "Efficiently manage employee shifts and duty rosters with flexible scheduling and bulk assignment capabilities.",
    image: "/products/hrms/Shift-scheduling.jpg",
    features: [
      "Duty roster management with flexible scheduling",
      "Bulk assignment of shifts across multiple employees and date ranges",
      "Easy planning and allocation of workforce shifts",
      "Improved scheduling efficiency and accuracy",
      "Long-shift rules with comp-off / recovery days",
      "Overtime planning linked to shift schedules",
    ]
  },
  "portalpunch": {
    title: "Self Attendance & Portal Punch",
    subtitle: "Mark attendance from the self-service portal",
    description: "Empower employees to mark attendance from the self-service portal with check-in/out, monthly calendar view, and correction requests—reducing dependency on devices alone.",
    image: "/products/hrms/HRMS-App-Dashboard.jpg",
    images: [
      "/products/hrms/HRMS-App-Dashboard.jpg",
      "/products/hrms/HRMS-App-Attendance.jpg",
    ],
    imageVertical: true,
    features: [
      "Web-based check-in and check-out for employees",
      "Monthly attendance calendar view",
      "Attendance correction requests with review",
      "Portal punch history for employees",
      "Admin audit of all portal punches",
      "Works alongside biometric and field attendance",
    ]
  },
  "face": {
    title: "Isarva Face Attendance",
    subtitle: "AI face recognition with GPS geofencing",
    description: "Android Mobile App Face Attendance empower on-the-go and on-site employees to mark attendance using AI facial recognition with GPS geofencing and offline auto-sync—eliminating proxy punches and dedicated hardware costs.",
    image: "/products/hrms/HRMS-Face-Attendance.jpg",
    images: [
      "/products/hrms/HRMS-Face-Attendance.jpg",
      "/products/hrms/HRMS-Face-Attendance-Register.jpg",
    ],
    imageVertical: true,
    features: [
      "AI-powered facial recognition check-in and check-out",
      "GPS geofencing and real-time location validation",
      "Offline punch mode with automated background sync",
      "Anti-spoofing and live face liveness detection",
      "Mobile punch history with real-time shift status",
      "Seamless integration with biometric, web, and payroll records",
    ]
  },
  "gps": {
    title: "GPS & Field Attendance",
    subtitle: "Track field teams with location-verified punches",
    description: "Track field and on-site employees with GPS-based attendance, so organizations can verify location while staff mark presence on the go.",
    image: "/products/hrms/GPS-Tracking.png",
    features: [
      "GPS-based field check-in and check-out",
      "Live and historical location tracking for admins",
      "Office geofence support for valid punches",
      "Route/timeline view of employee movement",
      "Ideal for field sales, site, and remote workforce",
      "Mobile-ready GPS punch support",
    ]
  },
  "attendance": {
    title: "Attendance Processing",
    subtitle: "Accurate tracking with payroll integration",
    description: "Easily manage and finalize employee attendance with accurate tracking and seamless integration with payroll systems.",
    image: "/products/hrms/Attendance.png",
    features: [
      "Admin can select the attendance processing modes",
      "Admins can view and manage attendance for all employees",
      "Manual updates for attendance entries (Present, Leave, Holiday, etc.)",
      "Save & Lock feature to finalize monthly attendance",
      "Seamless integration with payroll via API for salary processing",
      "Ensures data accuracy and prevents post-finalization changes",
      "Manual punch entry for corrections",
      "Preview, regenerate, and lock monthly attendance",
      "Prevent changes after finalization",
    ]
  },
  "biometric": {
    title: "Biometric Connections",
    subtitle: "Real-time biometric attendance integration",
    description: "Seamlessly manage employee attendance with biometric integration via the Timestation API, supporting both automated syncing and manual uploads for accurate and flexible processing.",
    image: "/products/hrms/Biometric.png",
    features: [
      "Integration with Timestation API for real-time attendance tracking",
      "Manual biometric data upload option",
      "Admin control to override attendance data when required",
      "Automatic calculation of leaves, late entries, and overtime",
      "Accurate attendance processing based on in/out data",
      "Centralized employee attendance management",
      "Biometric policy for late, early, and half-day rules",
      "Grace periods and monthly late penalties",
      "Overtime calculation and approval workflow", 
    ]
  },
  "mobile": {
    title: "Mobile Workforce App",
    subtitle: "Attendance, leave, and approvals on mobile",
    description: "Give employees and managers a mobile-ready experience for daily attendance, leave, and approvals—so HR actions don’t wait for desktop access.",
    image: "/products/Emplyee self Service.png",
    features: [
      "Secure mobile login for employees and managers",
      "Mobile check-in / check-out and monthly attendance view",
      "Apply leave and track leave status on mobile",
      "Manager leave approve / reject / forward",
      "GPS punch support for field staff",
      "Real-time attendance and leave updates",
    ]
  },
  "holidays": {
    title: "Public Holiday Master Management",
    subtitle: "Flexible department-wise holiday configuration",
    description: "Easily configure and manage public holidays with flexible options, including department-wise customization to suit organizational needs.",
    image: "/products/hrms/public-holiday.png",
    features: [
      "Admin control to manage public holidays",
      "Department-wise holiday configuration",
      "Restrict eligibility for applying public holidays",
      "Flexible holiday setup based on organizational policies",
      "Employees can apply for eligible public / flexible holidays",
      "Financial year concept",
    ]
  },
  "leavepolicy": {
    title: "Leave Policy Management",
    subtitle: "Multi-level leave policies for every department",
    description: "Easily create and manage multiple leave policies by assigning leave types, days, and departments, ensuring employees can only apply for leaves applicable to them.",
    image: "/products/hrms/Leave-Policy.png",
    features: [
      "Create and manage multiple leave policies",
      "Assign leave types and number of days",
      "Department-wise leave policy configuration",
      "Employees can apply only for assigned leave types",
      "Streamlined and controlled leave management",
      "Multi level leave approval",
    ]
  },
  "posh": {
    title: "POSH Act Compliance",
    subtitle: "Workplace harassment compliance workflow",
    description: "Stay compliant with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 through a dedicated POSH workflow—from policy acknowledgement to inquiry and reporting.",
    image: "/products/hrms/posh.png",
    features: [
      "Digital POSH policy publish and employee acknowledgement",
      "Internal Committee (IC) setup with required members",
      "Complaint filing with evidence and anonymous option",
      "Structured inquiry workflow till management action",
      "Employer compliance checklist and prevention activities",
      "Annual report generation for statutory submission",
      "QR / public intake link for easy complaint access",
      "Audit log and SLA alerts for overdue actions",
      "POSH complaint status tracking and updates",
    ]
  },
  "dpdp": {
    title: "DPDP Act Compliance",
    subtitle: "Data protection for HR and payroll",
    description: "Ensure full adherence to India's Digital Personal Data Protection (DPDP) Act & Rules across HR and payroll operations with automated consent workflows, employee privacy rights management, and encrypted data lifecycle governance.",
    image: "/products/hrms/dpdp.png",
    features: [
      "Digital consent management with purpose tracking and opt-in/opt-out logs",
      "Employee Data Principal portal for data access, correction, and erasure requests",
      "Automated retention schedules and rule-based ex-employee record purging",
      "Encrypted storage and role-based access control (RBAC) for PII and biometrics",
      "Built-in classification for statutory payroll, PF, ESI, and tax legitimate uses",
      "Data breach incident logging with interactive HR compliance audit checklist",
    ]
  },
  "other": {
    title: "Other Features",
    subtitle: "Powerful extras built into Isarva HRMS",
    description: "Isarva HRMS is not limited it has many more useful features",
    image: "/products/hrms/Other-features.png",
    features: [
      "Activity logger for additional security",
      "Auto realtime sync between attendance and payroll system",
      "Notification center for company announcements",
      "Separate OT and incentive calculations",
      "Hold and release salary modules",
      "Increments and promotions with history",
      "Full and final settlement on employee exit",
      "Employee birthday reminders",
      "Adapts to diverse employee work schedules and regional practices",
    ]
  }
};

const TAB_THEMES = {
  "setup": { bg: "bg-blue-600", gradient: "from-[#2563EB] to-[#1E40AF]", shadow: "shadow-blue-500/20", text: "text-blue-600", lightBg: "bg-blue-50", hoverBorder: "hover:border-blue-200", accent: "blue" },
  "employee": { bg: "bg-emerald-600", gradient: "from-[#10B981] to-[#059669]", shadow: "shadow-emerald-500/20", text: "text-emerald-600", lightBg: "bg-emerald-50", hoverBorder: "hover:border-emerald-200", accent: "emerald" },
  "payroll": { bg: "bg-violet-600", gradient: "from-[#7C3AED] to-[#6D28D9]", shadow: "shadow-violet-500/20", text: "text-violet-600", lightBg: "bg-violet-50", hoverBorder: "hover:border-violet-200", accent: "violet" },
  "reporting": { bg: "bg-rose-600", gradient: "from-[#E11D48] to-[#BE123C]", shadow: "shadow-rose-500/20", text: "text-rose-600", lightBg: "bg-rose-50", hoverBorder: "hover:border-rose-200", accent: "rose" },
  "analytics": { bg: "bg-sky-600", gradient: "from-[#0EA5E9] to-[#0284C7]", shadow: "shadow-sky-500/20", text: "text-sky-600", lightBg: "bg-sky-50", hoverBorder: "hover:border-sky-200", accent: "sky" },
  "ess": { bg: "bg-amber-500", gradient: "from-[#F59E0B] to-[#D97706]", shadow: "shadow-amber-500/20", text: "text-amber-600", lightBg: "bg-amber-50", hoverBorder: "hover:border-amber-200", accent: "amber" },
  "shifts": { bg: "bg-teal-600", gradient: "from-[#0D9488] to-[#0F766E]", shadow: "shadow-teal-500/20", text: "text-teal-600", lightBg: "bg-teal-50", hoverBorder: "hover:border-teal-200", accent: "teal" },
  "portalpunch": { bg: "bg-lime-600", gradient: "from-[#65A30D] to-[#4D7C0F]", shadow: "shadow-lime-500/20", text: "text-lime-600", lightBg: "bg-lime-50", hoverBorder: "hover:border-lime-200", accent: "lime" },
  "face": { bg: "bg-red-500", gradient: "from-[#EF4444] to-[#DC2626]", shadow: "shadow-red-500/20", text: "text-red-600", lightBg: "bg-red-50", hoverBorder: "hover:border-red-200", accent: "red" },
  "gps": { bg: "bg-green-600", gradient: "from-[#16A34A] to-[#15803D]", shadow: "shadow-green-500/20", text: "text-green-600", lightBg: "bg-green-50", hoverBorder: "hover:border-green-200", accent: "green" },
  "attendance": { bg: "bg-orange-500", gradient: "from-[#F97316] to-[#EA580C]", shadow: "shadow-orange-500/20", text: "text-orange-600", lightBg: "bg-orange-50", hoverBorder: "hover:border-orange-200", accent: "orange" },
  "biometric": { bg: "bg-cyan-600", gradient: "from-[#0891B2] to-[#0E7490]", shadow: "shadow-cyan-500/20", text: "text-cyan-600", lightBg: "bg-cyan-50", hoverBorder: "hover:border-cyan-200", accent: "cyan" },
  "mobile": { bg: "bg-slate-600", gradient: "from-[#475569] to-[#334155]", shadow: "shadow-slate-500/20", text: "text-slate-600", lightBg: "bg-slate-50", hoverBorder: "hover:border-slate-200", accent: "slate" },
  "holidays": { bg: "bg-pink-600", gradient: "from-[#DB2777] to-[#BE185D]", shadow: "shadow-pink-500/20", text: "text-pink-600", lightBg: "bg-pink-50", hoverBorder: "hover:border-pink-200", accent: "pink" },
  "leavepolicy": { bg: "bg-indigo-600", gradient: "from-[#4F46E5] to-[#4338CA]", shadow: "shadow-indigo-500/20", text: "text-indigo-600", lightBg: "bg-indigo-50", hoverBorder: "hover:border-indigo-200", accent: "indigo" },
  "posh": { bg: "bg-purple-600", gradient: "from-[#9333EA] to-[#7E22CE]", shadow: "shadow-purple-500/20", text: "text-purple-600", lightBg: "bg-purple-50", hoverBorder: "hover:border-purple-200", accent: "purple" },
  "dpdp": { bg: "bg-stone-600", gradient: "from-[#78716C] to-[#57534E]", shadow: "shadow-stone-500/20", text: "text-stone-600", lightBg: "bg-stone-50", hoverBorder: "hover:border-stone-200", accent: "stone" },
  "other": { bg: "bg-fuchsia-600", gradient: "from-[#D946EF] to-[#A21CAF]", shadow: "shadow-fuchsia-500/20", text: "text-fuchsia-600", lightBg: "bg-fuchsia-50", hoverBorder: "hover:border-fuchsia-200", accent: "fuchsia" }
};

export default function ProductDetailPremiumHRMS({
  product,
  relatedProducts,
  allProducts,
}) {
  // Toggle to re-enable CRM popup form later
  const CRM_POPUP_ENABLED = false;

  const [activeTab, setActiveTab] = useState("setup");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const contentTopRef = useRef(null);
  const isFirstRender = useRef(true);

  const hasSubmittedRef = useRef(false);
  const wasOpenedRef = useRef(false);

  const openCrmPopup = () => {
    if (!CRM_POPUP_ENABLED) return;
    setIsModalOpen(true);
  };

  // Helper to check if user has already submitted the form in this session
  const isFormSubmitted = () => {
    try {
      return (
        hasSubmittedRef.current ||
        sessionStorage.getItem("hrms_form_submitted") === "true"
      );
    } catch (e) {
      return hasSubmittedRef.current;
    }
  };

  // 1. Initial trigger: 3-second delay on page load (if not submitted)
  useEffect(() => {
    if (!CRM_POPUP_ENABLED || isFormSubmitted()) return;

    const timer = setTimeout(() => {
      if (!isFormSubmitted()) {
        wasOpenedRef.current = true;
        setIsModalOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // 2. Pure Time-based Re-trigger: re-opens 15 seconds after closing (if not submitted)
  useEffect(() => {
    if (!CRM_POPUP_ENABLED) return;

    if (isModalOpen) {
      wasOpenedRef.current = true;
      return;
    }

    if (!isModalOpen && wasOpenedRef.current && !isFormSubmitted()) {
      const timer = setTimeout(() => {
        if (!isFormSubmitted()) {
          setIsModalOpen(true);
        }
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  // Scroll to top of content area when tab changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (contentTopRef.current) {
      const offset = 160; // Space for sticky header (102px) + tabs (~58px)
      const elementPosition = contentTopRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeContent = TAB_CONTENT[activeTab] || TAB_CONTENT["setup"];
  const contentImages =
    activeContent.images?.length > 0
      ? activeContent.images
      : activeContent.image
        ? [activeContent.image]
        : [];
  const isVerticalGallery = Boolean(activeContent.imageVertical);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .sidebar-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .sidebar-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .sidebar-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.25);
          border-radius: 9999px;
        }
        .sidebar-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.45);
        }
      `}} />
      <div className={`relative font-sans selection:bg-blue-100 selection:text-blue-900 transition-colors duration-1000 bg-white`}>
      {/* --- Dynamic Shifting Background (Soft & Light) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Very subtle ambient gradient */}
        <div className={`absolute inset-0 opacity-10 transition-colors duration-500 bg-gradient-to-br ${TAB_THEMES[activeTab].gradient} blur-[120px] scale-125`} />

        {/* Simplified Static Blobs for Performance */}
        <div className={`absolute top-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full opacity-[0.08] blur-[100px] ${TAB_THEMES[activeTab].bg}`} />
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] rounded-full opacity-[0.06] bg-violet-500 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full opacity-[0.05] bg-blue-400 blur-[90px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-10 bg-indigo-500 blur-[120px]" />

        {/* Global patterns */}
        <div className="absolute inset-0 bg-dots opacity-[0.1]" />
        <div className="absolute inset-0 bg-grid-slate-200/[0.05] [mask-image:linear-gradient(to_bottom,white,transparent,white)]" />
      </div>

      <div className="relative z-40 pt-0">
        {/* Intro Section Above Tabs */}
        <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF]/60 to-white border-b border-slate-100/80">
          <div className="absolute inset-0 aurora-mesh pointer-events-none" />
          <div className="absolute inset-0 hero-grid opacity-[0.25] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 sm:px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="relative inline-flex items-center justify-center lg:gap-3 gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-blue-100/50 mb-8 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-black text-xs capitalize tracking-[0.2em] text-center leading-tight">
                    POWER BONDS WITH PEOPLE
                  </span>
                </div>

                <div className="relative">
                  <h1 className="mb-6">
                    <span className="shimmer-title inline-block py-2">
                      All-in-One HR, Payroll
                    </span>{" "}
                    <br />
                    <span className="text-[clamp(1.5rem,4vw,3.5rem)] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent font-bold">
                      & Attendance Platform
                    </span>
                  </h1>
                </div>

                <p className="text-base lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-medium">
                  An all-in-one platform combining Payroll, Attendance, Leave, Document Generation, and advanced settings — designed to simplify workforce management, ensure compliance, and improve efficiency with automated, real-time insights.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
                  <Link
                    href="/product/hrms-software/hrms-pricing"
                    prefetch={false}
                    className={`${GLOBAL_BTN_ORANGE}`}
                  >
                    <span>View Pricing Plans</span>
                    {GLOBAL_BTN_ARROW}
                  </Link>
                  <button
                    onClick={() => setIsBrochureModalOpen(true)}
                    className={`${GLOBAL_BTN_GREEN}`}
                  >
                    <span>Download Brochure</span>
                    {GLOBAL_BTN_ARROW}
                  </button>
                </div>

                <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start items-center text-xs font-black text-slate-400 capitalize tracking-widest">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-base">✓</span> No Commitment
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-base">✓</span> No Credit Card Required
                  </div>
                </div>
              </div>

              <div className="relative image-3d-wrapper">
                <div className="relative h-[250px] sm:h-[400px] lg:h-[480px] w-full px-4 sm:px-0">
                  <div className="absolute top-0 right-0 w-full h-[100%] p-3 z-10 flex items-center justify-center transition-all duration-500 hover:scale-[1.02] overflow-hidden bg-transparent">
                    <img
                      src="/products/hrms/hrms-banner-main.png"
                      alt="All-in-One HRMS Dashboard"
                      className="w-full h-full object-contain relative z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative z-40 pb-12 lg:pb-16">
        {/* Mobile View (Horizontal Scroll) - Full-width white background bar with constrained content */}
        <div className="lg:hidden sticky top-[102px] z-[60] bg-white border-b border-gray-100 shadow-sm w-full overflow-hidden">
          <div
            className="max-w-7xl mx-auto px-6 py-2 overflow-x-auto no-scrollbar w-full"
            style={{ scrollPaddingLeft: '1.5rem', scrollPaddingRight: '1.5rem' }}
          >
            <div className="flex items-center space-x-1 whitespace-nowrap">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                const theme = TAB_THEMES[tab.id];
                return (
                  <button
                    key={tab.id}
                    onClick={(e) => {
                      setActiveTab(tab.id);
                      e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                    }}
                    className={`px-5 py-2.5 rounded-full font-bold text-[12px] capitalize tracking-wider transition-all duration-300 relative ${isActive ? "text-white" : "text-gray-400"}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabMobile"
                        className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} z-0 rounded-full`}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div ref={contentTopRef} className="w-full lg:container mx-auto px-6 py-12 lg:py-16">

          <div className="flex flex-col lg:flex-row gap-0 lg:gap-12">

            {/* Sidebar Sidebar */}
            <aside className="lg:w-[22rem] flex-shrink-0">
              <div className={`lg:sticky lg:top-32 transition-all duration-500 space-y-4`}>
                {/* Mobile version remains as a horizontal scroll or grid, but for desktop we want vertical */}
                <div className="hidden lg:flex flex-col bg-white/60 backdrop-blur-3xl border border-white/50 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-[2.5rem]">
                  <div
                    className="flex flex-col space-y-1 overflow-y-auto pr-1 sidebar-scrollbar"
                    style={{
                      maxHeight: 'calc(100vh - 11rem)',
                      scrollbarWidth: 'thin',
                      scrollbarColor: 'rgba(0,0,0,0.12) transparent',
                    }}
                  >
                    {TABS.map((tab) => {
                      const isActive = activeTab === tab.id;
                      const theme = TAB_THEMES[tab.id];
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`group relative flex items-center gap-4 px-6 py-3 rounded-[2rem] font-bold text-sm capitalize tracking-widest transition-all duration-500 overflow-hidden ${isActive
                            ? "text-white shadow-lg"
                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-50/50"
                            }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeTabDesktop"
                              className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} z-0`}
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}

                          <div className={`relative z-10 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? "bg-white/20" : theme.lightBg + " " + theme.text}`}>
                            <span className="text-lg">
                              {tab.id === 'setup' ? '🏢' : tab.id === 'employee' ? '👥' : tab.id === 'payroll' ? '💰' : tab.id === 'reporting' ? '📊' : tab.id === 'analytics' ? '📈' : tab.id === 'ess' ? '🔐' : tab.id === 'shifts' ? '📅' : tab.id === 'portalpunch' ? '🖥️' : tab.id === 'face' ? '😊' : tab.id === 'gps' ? '📍' : tab.id === 'attendance' ? '⏰' : tab.id === 'biometric' ? '🖐️' : tab.id === 'mobile' ? '📱' : tab.id === 'holidays' ? '🎉' : tab.id === 'leavepolicy' ? '📋' : tab.id === 'posh' ? '⚖️' : tab.id === 'dpdp' ? '🛡️' : '✨'}
                            </span>
                          </div>

                          <span className="relative z-10 flex-1 text-left">{tab.label}</span>

                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="relative z-10 w-2 h-2 bg-white rounded-full"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>


              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0 flex flex-col gap-10 lg:gap-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col gap-10 lg:gap-16"
                >
                  {/* 3. Module Dashboard Header + Visual + Feature Grid */}
                  <section className="pt-4">
                    <div className="flex flex-col justify-between gap-6 mb-8 text-center lg:text-left items-center lg:items-start">
                      <div className="max-w-none flex flex-col items-center lg:items-start">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[14px] font-black capitalize tracking-[0.2em] mb-6 ${TAB_THEMES[activeTab].lightBg} ${TAB_THEMES[activeTab].text} border-white/50 shadow-sm`}
                        >
                          <span className="relative flex h-2 w-2">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${TAB_THEMES[activeTab].bg}`}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${TAB_THEMES[activeTab].bg}`}></span>
                          </span>
                          {TABS.find(t => t.id === activeTab)?.label} Module
                        </motion.div>

                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold font-black text-gray-900 leading-[1.25] mb-4 tracking-tighter text-center lg:text-left"
                        >
                          {activeContent.title}
                        </motion.h1>

                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-base lg:text-xl text-gray-500 font-medium leading-relaxed max-w-none text-center lg:text-left"
                        >
                          {activeContent.description}
                        </motion.p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="w-full flex justify-center lg:justify-start"
                      >
                        <button
                          onClick={openCrmPopup}
                          className="press-illusion-btn-orange w-full sm:w-auto sm:min-w-[240px] px-8 py-4 capitalize flex items-center justify-center gap-3"
                        >
                          Get Started Free
                        </button>
                      </motion.div>
                    </div>

                    {/* 4. Primary Product Visual */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="relative mb-12"
                    >
                      {isVerticalGallery && contentImages.length > 1 ? (
                        <div className="relative z-10 w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-[1.75rem] sm:rounded-[2.5rem] border border-gray-100 shadow-xl">
                          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 items-start justify-items-center">
                            {contentImages.map((imgSrc, imgIdx) => (
                              <div
                                key={imgSrc}
                                className="relative w-full flex justify-center cursor-pointer group overflow-hidden rounded-2xl"
                                onClick={() => setSelectedImage(imgSrc)}
                              >
                                <img
                                  src={imgSrc}
                                  alt={`${activeContent.title} ${imgIdx + 1}`}
                                  loading="lazy"
                                  className="object-contain group-hover:scale-[1.03] transition-transform duration-700 h-[18rem] sm:h-[26rem] lg:h-[32rem] w-auto max-w-full"
                                />
                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 rounded-2xl">
                                  <div className={`bg-white/90 backdrop-blur-sm ${TAB_THEMES[activeTab].text} p-3 rounded-full shadow-2xl`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`relative z-10 ${
                            isVerticalGallery
                              ? "mx-auto w-fit max-w-full"
                              : "w-full"
                          }`}
                        >
                          {contentImages.map((imgSrc, imgIdx) => (
                            <div
                              key={imgSrc}
                              className="relative p-2 bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 shadow-xl cursor-pointer group overflow-hidden"
                              onClick={() => setSelectedImage(imgSrc)}
                            >
                              <div className="rounded-[1.1rem] sm:rounded-[1.5rem] overflow-hidden relative flex justify-center bg-white">
                                <img
                                  src={imgSrc}
                                  alt={`${activeContent.title} ${imgIdx + 1}`}
                                  loading="lazy"
                                  className={`object-contain group-hover:scale-105 transition-transform duration-700 bg-white ${
                                    isVerticalGallery
                                      ? "h-[18rem] sm:h-[24rem] lg:h-[28rem] w-auto max-w-full"
                                      : "w-full h-auto"
                                  }`}
                                />
                              </div>
                              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 backdrop-blur-[2px]">
                                <div className={`bg-white/90 backdrop-blur-sm ${TAB_THEMES[activeTab].text} p-3 rounded-full shadow-2xl`}>
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>

                  </section>

                  {/* 5. Key Features */}
                  <section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {activeContent.features.map((f, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-4 p-5 rounded-[24px] bg-white border border-gray-100 ${TAB_THEMES[activeTab].hoverBorder} transition-all group shadow-sm hover:shadow-md`}
                        >
                          <div className={`w-8 h-8 rounded-full ${TAB_THEMES[activeTab].lightBg || "bg-blue-50"} flex items-center justify-center ${TAB_THEMES[activeTab].text || "text-blue-600"} flex-shrink-0 shadow-inner`}>
                            <span className="text-[10px] font-black">✓</span>
                          </div>
                          <span className="text-[14px] font-extrabold text-gray-700 capitalize tracking-tight leading-tight">
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                </motion.div>
              </AnimatePresence>

              {/* Static Content (Section 4, 6, 7) */}
              {/* These sections are outside AnimatePresence so they don't flash on tab change, but scroll alongside */}

              {/* 4. The "Broken HR" Modern Section */}
              <section className="relative p-8 lg:p-12 bg-white overflow-hidden border-y border-gray-100 rounded-[3rem]">
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[100px]" />
                  <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
                </div>
                <div className="relative z-10 ">
                  <div className="flex flex-col items-center lg:items-start mb-4 md:mb-10 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-bold text-[14px] mb-6 w-fit capitalize tracking-widest">
                      The Problem
                    </div>

                    <h2 className="mb-6 capitalize">
                      Traditional HR{" "}
                      <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 py-2">
                        Is Broken.
                      </span>
                    </h2>

                    <p className="text-base lg:text-lg text-gray-500 font-medium leading-relaxed">
                      Organizations are stuck with outdated systems that waste time, frustrate employees, and hold back growth. It's time for a change.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: "Endless Paperwork", icon: "📄", desc: "HR spends more time on forms than people.", color: "rose" },
                      { title: "Disconnected Apps", icon: "🔌", desc: "Messy data spread across too many places.", color: "violet" },
                      { title: "Frustrated Employees", icon: "😠", desc: "Hard-to-use software ruins productivity.", color: "amber" },
                      { title: "Risky Security", icon: "🔓", desc: "Old ways leave you open to legal threats.", color: "slate" }
                    ].map((item, idx) => (
                      <div key={idx} className="group flex flex-col items-center p-8 rounded-[32px] border border-gray-100 hover:shadow-xl transition-all duration-500 bg-white text-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${item.color}-50 text-${item.color}-600 font-bold text-2xl`}>
                          {item.icon}
                        </div>
                        <h3 className="mb-2 capitalize">{item.title}</h3>
                        <p className="text-[14px] text-gray-500 font-bold capitalize tracking-tight">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>



              {/* 7. Final CTA Section */}
              <section>
                <div className="relative rounded-[3rem] bg-gradient-to-br from-white to-gray-50 p-12 lg:p-24 overflow-hidden text-center shadow-[0_40px_80px_rgba(0,0,0,0.05)] border border-gray-100">
                  <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${TAB_THEMES[activeTab].gradient} opacity-5 blur-[100px]`}></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <h2 className="mb-6 capitalize">Build the <br /> future today.</h2>
                    <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">Join 10,000+ teams transforming their workplace.</p>
                    <button
                      onClick={openCrmPopup}
                      className="press-illusion-btn-orange w-full sm:w-auto sm:min-w-[280px] px-12 py-6 capitalize flex items-center justify-center gap-3"
                    >
                      Request Free Access
                    </button>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      <HrmsFeatureSection />

      {CRM_POPUP_ENABLED && (
        <ContactFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmitSuccess={() => {
            hasSubmittedRef.current = true;
            try {
              sessionStorage.setItem("hrms_form_submitted", "true");
            } catch (e) {}
          }}
          preSelectedType="Product"
          preSelectedItem="HRMS Software"
          allItems={allProducts}
        />
      )}

      <HRMSBrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              aria-label="Close image preview"
              onClick={() => setSelectedImage(null)}
              className="fixed top-4 right-4 md:top-6 md:right-6 z-[1001] w-11 h-11 md:w-12 md:h-12 bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:rotate-90 shadow-lg"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative h-auto flex flex-col items-center cursor-default ${
                isVerticalGallery ? "w-auto max-w-[min(100%,22rem)] sm:max-w-[min(100%,26rem)]" : "w-full max-w-5xl"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex justify-center">
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className={`object-contain bg-white ${
                    isVerticalGallery
                      ? "max-h-[78vh] w-auto max-w-full"
                      : "w-full h-auto max-h-[85vh]"
                  }`}
                />
              </div>

              <div className="mt-4 md:mt-6 text-white text-center px-2">
                <h3 className="capitalize tracking-widest">{activeContent.title}</h3>
                <p className="text-white/60 font-bold mt-1 capitalize text-sm tracking-widest">{activeContent.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </>
  );
}




/* ─────────────────────────────────────────────────────────────
   HRMS FEATURE DATA (PORTED FROM LIVE)
───────────────────────────────────────────────────────────── */
const hrmsFeatures = [
  {
    id: "personnel",
    label: "Personnel Management",
    icon: "👤",
    color: "#4F46E5",
    desc: "Centralise every employee record in one place. Manage profiles, org charts, documents, and HR workflows with precision and ease.",
    placeholder: "PM",
    image: "/products/hrms/Personnel-details.jpg",
  },
  {
    id: "attendance",
    label: "Time & Attendance",
    icon: "⏰",
    color: "#0EA5E9",
    desc: "Track work hours accurately with biometric, mobile, and web-based check-in. Gain real-time visibility into team availability.",
    placeholder: "TA",
    image: "/products/Time and Attendence.png",
  },
  {
    id: "shift",
    label: "Shift Scheduling",
    icon: "📅",
    color: "#10B981",
    desc: "Plan, publish, and manage employee shifts with a drag-and-drop visual scheduler. Eliminate conflicts and last-minute gaps.",
    placeholder: "SS",
    image: "/products/hrms/Shift-scheduling.jpg",
  },
  {
    id: "leave",
    label: "Leave Management",
    icon: "🌴",
    color: "#F59E0B",
    desc: "Automate leave requests, multi-level approvals, and policy enforcement. Employees get instant visibility into their leave balance.",
    placeholder: "LM",
    image: "/products/hrms/Leave-management.jpg",
  },
  {
    id: "security",
    label: "Security & Access Control",
    icon: "🔒",
    color: "#EF4444",
    desc: "Define granular role-based permissions, enforce multi-factor authentication, and maintain complete audit trails for compliance.",
    placeholder: "SC",
    image: "/products/Security.png",
  },
  {
    id: "analytics",
    label: "Reporting & Analytics",
    icon: "📊",
    color: "#8B5CF6",
    desc: "Unlock data-driven HR insights with pre-built dashboards and custom reports covering headcount, payroll, attrition, and more.",
    placeholder: "RA",
    image: "/products/hrms/Reporting-&-analytics.jpg",
  },
  {
    id: "ess",
    label: "Employee Self-Service Portal",
    icon: "💼",
    color: "#06B6D4",
    desc: "Empower employees to manage their own information, submit requests, access payslips, and track approvals — all in a clean portal.",
    placeholder: "ES",
    image: "/products/Emplyee self Service.png",
  },
  {
    id: "payroll",
    label: "Payroll Management System",
    icon: "💰",
    color: "#22C55E",
    desc: "Ensure accurate, compliant, and on-time salary processing. Handle deductions, taxes, and statutory filings with zero manual effort.",
    placeholder: "PY",
    image: "/products/hrms/Payroll-management.jpg",
  },
];

/* ─────────────────────────────────────────────────────────────
   PLACEHOLDER IMAGE COMPONENT
───────────────────────────────────────────────────────────── */
function FeaturePlaceholder({ feature }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center rounded-2xl overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${feature.color}10 0%, ${feature.color}20 100%)`,
      }}
    >
      <img
        src={feature.image}
        alt={feature.label}
        className="w-full h-full object-contain"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   HRMS FEATURE ORBIT SECTION — Production-Grade (EXACT LIVE VERSION)
──────────────────────────────────────────────────────────── */
function HrmsFeatureSection() {
  const [activeId, setActiveId] = useState("personnel");
  const [mobileOpenId, setMobileOpenId] = useState("personnel");

  const leftFeatures = hrmsFeatures.slice(0, Math.ceil(hrmsFeatures.length / 2));
  const rightFeatures = hrmsFeatures.slice(Math.ceil(hrmsFeatures.length / 2));
  const activeFeature = hrmsFeatures.find((f) => f.id === activeId);

  return (
    <section className="py-12 lg:py-16 overflow-hidden bg-[#F7F7F7]">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="block text-[14px] font-black text-[#22C55E] tracking-[0.28em] capitalize mb-2.5">
            KEY FEATURES
          </span>
          <h2 className="text-gray-900 mb-3.5 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">
            Key Features Of <span className="text-[#22C55E]">HRMS</span> Software
          </h2>
          <p className="text-[#6b7280] max-w-[520px] mx-auto text-[15px] leading-relaxed">
            HRMS & Payroll software automates and streamlines every HR function
            — from personnel management to payroll — delivering a highly
            time-efficient experience.
          </p>
        </div>

        {/* ── DESKTOP ORBIT (xl and above) ── */}
        <div className="hidden xl:block">
          <div className="relative h-[605px] mx-auto xl:w-[80%] lg:w-full">
            {/* Green arc ellipse */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] rounded-full border-[1.5px] pointer-events-none z-0"
              style={{ borderColor: 'rgba(34, 197, 94, 0.42)' }}
            />

            {/* Left column */}
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 flex flex-col items-end gap-10 z-10 w-[220px]">
              {leftFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[14px] font-semibold whitespace-nowrap ${activeId === feature.id
                    ? "bg-green-50 border-green-600 text-gray-800 shadow-[0_4px_16px_rgba(34,197,94,0.15)]"
                    : "border-green-300 text-gray-800 hover:border-green-500 hover:shadow-md"
                    }`}
                >
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {feature.label}
                  {activeId === feature.id && (
                    <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[7px] border-l-green-900" />
                  )}
                </button>
              ))}
            </div>

            {/* Center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 2xl:w-[72%] lg:w-[70%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full h-full rounded-xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.15)]"
                >
                  <img
                    src={activeFeature.image}
                    alt={activeFeature.label}
                    className="w-full h-full object-contain bg-white"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right column */}
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 flex flex-col items-start gap-10 z-10 w-[220px]">
              {rightFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[14px] font-semibold whitespace-nowrap ${activeId === feature.id
                    ? "bg-green-50 border-green-600 text-gray-800 shadow-[0_4px_16px_rgba(34,197,94,0.15)]"
                    : "border-green-300 text-gray-800 hover:border-green-500 hover:shadow-md"
                    }`}
                >
                  {feature.label}
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {activeId === feature.id && (
                    <span className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[7px] border-r-green-900" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mt-3 pb-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeId + "-d"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
                className="text-center text-[#6b7280] max-w-[500px] mx-auto text-sm leading-relaxed"
              >
                {activeFeature.desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* ── TABLET LAYOUT (lg to xl) ── */}
        <div className="hidden lg:block xl:hidden">
          {/* Navigation buttons on top */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {hrmsFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`flex items-center gap-2 py-2.5 px-5 rounded-lg font-semibold text-sm transition-all duration-200 ${activeId === feature.id
                    ? "bg-[#22C55E] text-white shadow-lg scale-105"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#22C55E] hover:shadow-md"
                    }`}
                >
                  <span className="text-base">{feature.icon}</span>
                  <span>{feature.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Center image display */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="rounded-xl overflow-hidden shadow-2xl bg-white"
              >
                <img
                  src={activeFeature.image}
                  alt={activeFeature.label}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeId + "-desc"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
                className="text-center text-[#6b7280] max-w-[600px] mx-auto text-sm leading-relaxed"
              >
                {activeFeature.desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* ── MOBILE ACCORDION ── */}
        <div className="lg:hidden border-t border-gray-200">
          {hrmsFeatures.map((feature) => {
            const isOpen = mobileOpenId === feature.id;
            return (
              <div key={feature.id} className="border-b border-gray-200">
                <button
                  onClick={() => setMobileOpenId(isOpen ? null : feature.id)}
                  className="group w-full flex items-center justify-between p-4 bg-transparent border-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors duration-200 shrink-0"
                      style={{
                        background: isOpen ? feature.color : "#e5e7eb",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <span
                      className={`font-bold text-sm transition-colors ${isOpen ? "text-gray-900" : "text-gray-500"
                        }`}
                    >
                      {feature.label}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 shrink-0 ${isOpen
                      ? "bg-gray-900 border-gray-900"
                      : "bg-transparent border-gray-300 group-hover:border-gray-400"
                      }`}
                  >
                    <span
                      className={`text-lg font-light leading-none block transition-transform duration-200 ${isOpen ? "text-white rotate-45" : "text-gray-400 group-hover:rotate-45"
                        }`}
                    >
                      +
                    </span>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-1 pb-5">
                        <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md mb-3">
                          <img
                            src={feature.image}
                            alt={feature.label}
                            className="w-full h-auto object-contain bg-white"
                          />
                        </div>
                        <p className="text-[#6b7280] text-[14px] leading-relaxed m-0">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




