import { servicesData } from "../lib/data/services-data";
import ServicesListClient from "./ServicesListClient";

export const metadata = {
  title: "Our Services - Isarva | Digital Excellence",
  description: "Explore our comprehensive range of IT services including website development, cloud services, AI/ML consulting, and more.",
};

export default function ServicesPage() {
  return <ServicesListClient servicesData={servicesData} />;
}
