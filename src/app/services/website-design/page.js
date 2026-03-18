import { servicesData } from "../../lib/data/services-data";
import WebsiteDesignContent from "./WebsiteDesignContent";

export const metadata = {
  title: "Website Design - Isarva Infotech",
  description: "Isarva Infotech delivers visually appealing, responsive web designs focused on user experience and performance, tailored to enhance business goals.",
};

export default function WebsiteDesignPage() {
  return <WebsiteDesignContent servicesData={servicesData} />;
}
