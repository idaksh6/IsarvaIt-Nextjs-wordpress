import { generateMetadata as generateSEOMetadata } from "../../../lib/utils/seo";
import CrmPricingStagingClient from "./CrmPricingClient";

export const metadata = generateSEOMetadata({
  title: "CRM Software Pricing (Staging) — Plans for Every Team Size | Isarva Infotech",
  description:
    "Compare CRM software pricing plans: Starter, Plus, and Enterprise. Manage leads, deals, tasks, meetings, and customer relationships. Start your 14-day free trial today.",
  keywords: [
    "CRM pricing",
    "CRM software pricing India",
    "customer relationship management software cost",
    "leads management software pricing",
    "deals management pricing",
    "sales pipeline software cost",
    "CRM free trial",
    "Isarva CRM pricing",
  ],
  url: "/product/crm-software/crm-pricing-staging",
  image: "https://www.isarvait.com/products/crm/CRM-dashboard-v3.png",
  noIndex: true,
});

export const dynamic = "force-static";

export default function CrmPricingStagingPage() {
  return <CrmPricingStagingClient />;
}
