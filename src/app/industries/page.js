import { industriesData } from "../lib/data/industries-data";
import IndustriesListClient from "./IndustriesListClient";
import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Industries We Serve - Expert Solutions Across Sectors",
  description: "Delivering specialized technology solutions across Banking, Healthcare, Education, Manufacturing, Insurance, Media, and BPO industries.",
  keywords: ["industries", "verticals", "banking IT", "healthcare software", "education technology", "manufacturing solution"],
  url: "/industries",
  image: "https://www.isarvait.com/partner_ecosystem_no_text.png",
});

export default function IndustriesPage() {
  return <IndustriesListClient industriesData={industriesData} />;
}
