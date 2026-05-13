import HrmsCaseStudyClient from "./HrmsCaseStudyClient";

export const metadata = {
  title: "HRMS Case Study - Construction Workforce | Isarva Infotech",
  description: "How Isarva HRMS Replaced Manual Excel Processes with an Automated, Error-Free HR & Payroll System for a Construction Company.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function HrmsCaseStudyPage() {
  return <HrmsCaseStudyClient />;
}
