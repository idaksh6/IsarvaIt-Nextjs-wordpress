import BethLivingCaseStudyClient from "./BethLivingCaseStudyClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Beth Living Case Study",
  description: "How Beth Living achieved a 49% increase in leads through UI/UX redesign and performance optimization by Isarva.",
  url: "/case-studies/beth-living-case-study",
  noIndex: true,
});

export default function BethLivingCaseStudyPage() {
  return <BethLivingCaseStudyClient />;
}
