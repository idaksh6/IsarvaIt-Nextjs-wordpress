import { generateMetadata as generateSEOMetadata } from "../../../lib/utils/seo";
import BillSoftPricingClient from "./BillSoftPricingClient";

export const metadata = generateSEOMetadata({
  title: "BillSoft Software Pricing — Billing & Multi-Branch Business Plans | Isarva Infotech",
  description:
    "Compare BillSoft pricing packages: Starter, Professional, and Enterprise. GST ready billing, multi-warehouse inventory management, and branch sync solutions.",
  keywords: [
    "BillSoft pricing packages",
    "GST ready billing software price",
    "multi-branch billing system cost",
    "inventory management software pricing India",
    "Isarva BillSoft packages",
  ],
  url: "/product/bill-soft/billsoft-pricing",
  image: "https://www.isarvait.com/products/billsoft/Dashboard.jpg",
  noIndex: true,
});

export const dynamic = "force-static";

export default function BillSoftPricingPage() {
  return <BillSoftPricingClient />;
}
