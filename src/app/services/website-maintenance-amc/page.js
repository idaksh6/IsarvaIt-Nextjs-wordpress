import { servicesData } from "../../lib/data/services-data";
import WebsiteMaintenanceContent from "./WebsiteMaintenanceContent";

export const metadata = {
  title: "Website Maintenance – AMC Services | Isarva Infotech",
  description: "Ensure peak performance and security for your website with our comprehensive AMC services including security monitoring, performance optimization, backups, and regular updates.",
};

export default function WebsiteMaintenancePage() {
  return <WebsiteMaintenanceContent servicesData={servicesData} />;
}
