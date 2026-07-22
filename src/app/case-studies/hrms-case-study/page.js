import HrmsCaseStudyClient from "./HrmsCaseStudyClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "HRMS Case Study - Construction Workforce",
  description: "How Isarva HRMS Replaced Manual Excel Processes with an Automated, Error-Free HR & Payroll System for a Construction Company.",
  url: "/case-studies/hrms-case-study",
  noIndex: true,
});

export default function HrmsCaseStudyPage() {
  return <HrmsCaseStudyClient />;
}
