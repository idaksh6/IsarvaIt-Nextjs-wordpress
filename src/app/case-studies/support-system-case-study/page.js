import SupportSystemCaseStudyClient from "./SupportSystemCaseStudyClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Case Study: Transforming a Web Design Company",
  description: "How Isarva ISS Transformed a Web Design Company from Manual Chaos to a Structured, Data-Driven Workflow.",
  url: "/case-studies/support-system-case-study",
  noIndex: true,
});

export default function SupportSystemCaseStudyPage() {
  return <SupportSystemCaseStudyClient />;
}
