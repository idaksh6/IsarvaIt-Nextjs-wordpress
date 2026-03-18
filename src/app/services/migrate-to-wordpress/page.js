import { servicesData } from "../../lib/data/services-data";
import MigrateToWordPressContent from "./MigrateToWordPressContent";

export const metadata = {
  title: "Migrate to WordPress | Expert Migration Services | Isarva Infotech",
  description: "Experience hassle-free WordPress migration with Isarva Infotech. Secure, seamless, and optimized for peak performance. Over 200 successful Drupal to WordPress migrations.",
};

export default function MigrateToWordPressPage() {
  return <MigrateToWordPressContent servicesData={servicesData} />;
}
