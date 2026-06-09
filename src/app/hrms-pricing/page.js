import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";
import HrmsPricingClient from "./HrmsPricingClient";

export const metadata = generateSEOMetadata({
  title: "HRMS Software Pricing — Simple & Transparent Plans | Isarva Infotech",
  description:
    "Compare HRMS software pricing plans: Free Trial, Professional, Enterprise & Custom. Payroll, attendance, leave management & biometric integration. Start your 14-day free trial today.",
  keywords: [
    "HRMS pricing",
    "HRMS software pricing India",
    "payroll software pricing",
    "HR software cost",
    "employee management software pricing",
    "attendance management system price",
    "HRMS free trial",
    "payroll HRMS plans",
    "Isarva HRMS",
  ],
  url: "/hrms-pricing",
});

export const dynamic = "force-static";

export default function HrmsPricingPage() {
  return <HrmsPricingClient />;
}
