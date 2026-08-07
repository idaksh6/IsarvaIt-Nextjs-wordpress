import CaseStudiesClient from "./CaseStudiesClient";
import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Case Studies - Real Business Transformations",
  description: "Discover how businesses across industries are transforming their operations and scaling efficiently with Isarva software solutions.",
  keywords: ["case studies", "client success", "business transformation", "software results", "Isarva projects"],
  url: "/case-studies",
  image: "https://www.isarvait.com/isarva-og.jpg",
});

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
