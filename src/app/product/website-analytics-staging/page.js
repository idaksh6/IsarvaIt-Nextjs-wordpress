import WebsiteAnalyticsStagingClient from "./WebsiteAnalyticsStagingClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Isarva Analytics — Website Insights Dashboard | Isarva Infotech",
  description: "Isarva Analytics — live visitors, visitor maps, top pages, and trends in one clean dashboard. Multi-site clients, weekly WhatsApp reports, and branded client login.",
  noIndex: true, // Do not index the staging page
});

export default function Page() {
  return <WebsiteAnalyticsStagingClient />;
}
