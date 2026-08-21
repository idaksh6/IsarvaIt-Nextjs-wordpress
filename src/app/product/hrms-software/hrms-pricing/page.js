import { generateMetadata as generateSEOMetadata } from "../../../lib/utils/seo";
import HrmsPricingClient from "./HrmsPricingClient";

export const metadata = generateSEOMetadata({
  title: "HRMS Software Pricing — Plans for Every Team Size | Isarva Infotech",
  description:
    "Compare HRMS software pricing plans: Professional and Enterprise. Payroll, attendance, leave management & biometric integration. Start your 14-day free trial today.",
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
  url: "/product/hrms-software/hrms-pricing",
  image: "https://www.isarvait.com/products/hrms/hrms-banner-main.png",
});

export const dynamic = "force-static";

export default function HrmsPricingPage() {
  return <HrmsPricingClient />;
}
