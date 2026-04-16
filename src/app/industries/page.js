import { industriesData } from "../lib/data/industries-data";
import IndustriesListClient from "./IndustriesListClient";

export const metadata = {
  title: "Industries We Serve - Isarva | Expert Solutions Across Sectors",
  description: "Delivering specialized technology solutions across Banking, Healthcare, Education, Manufacturing, Insurance, Media, and BPO industries.",
};

export default function IndustriesPage() {
  return <IndustriesListClient industriesData={industriesData} />;
}
