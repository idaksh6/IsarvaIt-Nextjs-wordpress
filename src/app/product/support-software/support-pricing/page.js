import { generateMetadata as generateSEOMetadata } from "../../../lib/utils/seo";
import SupportPricingClient from "./SupportPricingClient";

export const metadata = generateSEOMetadata({
  title: "Support Software Pricing — Plans for Every Support Team | Isarva Infotech",
  description:
    "Compare Support Software pricing plans: Basic (Starter), Intermediate (Growth), and Advanced (Complete). Manage daily work, tasks, projects, tickets, client support, and team performance. Start your demo today.",
  keywords: [
    "Support software pricing",
    "Support software pricing India",
    "project management software pricing",
    "ticket management software cost",
    "AMC management pricing",
    "support ticketing system price",
    "Isarva Support Software",
  ],
  url: "/product/support-software/support-pricing",
  image: "https://www.isarvait.com/products/support/support_dashboard_img_1.jpg",
  noIndex: true,
});

export const dynamic = "force-static";

export default function SupportPricingPage() {
  return <SupportPricingClient />;
}
