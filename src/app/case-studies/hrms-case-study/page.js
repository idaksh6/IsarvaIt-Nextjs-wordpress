import HrmsCaseStudyClient from "./HrmsCaseStudyClient";

export const metadata = {
  title: "HRMS Case Study - Construction Workforce | Isarva Infotech",
  description: "How Isarva HRMS Replaced Manual Excel Processes with an Automated, Error-Free HR & Payroll System for a Construction Company.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function HrmsCaseStudyPage() {
  return <HrmsCaseStudyClient />;
}
