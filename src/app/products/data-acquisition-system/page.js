import DataAcquisitionSystemClient from "./DataAcquisitionSystemClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Data Acquisition System with Display | Industrial DAS Solutions",
  description:
    "All-in-one Data Acquisition System (DAS) with Display to collect, monitor, and visualize real-time data from multiple sensors and field devices with integrated Samsung display and Windows 11 PC.",
  image: "/products/rdl-product/DAS with Display.png",
  url: "/products/data-acquisition-system",
  keywords: [
    "Data Acquisition System",
    "DAS with Display",
    "Industrial DAS",
    "64 Channel Data Acquisition",
    "Real-time Sensor Visualization",
    "Industrial Control System",
  ],
});

export default function DataAcquisitionSystemPage() {
  return <DataAcquisitionSystemClient />;
}
