import DataAcquisitionSystemClient from "./DataAcquisitionSystemClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Data Acquisition System (DAS) with Display",
  description:
    "Industrial Data Acquisition System (DAS) with Samsung Display, 64-channel logging, built-in Windows 11 PC, Modbus, and real-time visualization.",
  image: "/products/rdl-product/das-with-display-og.jpg",
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
