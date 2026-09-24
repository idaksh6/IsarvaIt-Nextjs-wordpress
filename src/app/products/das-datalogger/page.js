import DasDataloggerClient from "./DasDataloggerClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "DAS Datalogger | Data Acquisition System Data Logger",
  description:
    "Comprehensive Data Acquisition System (DAS) Data Logger for real-time data collection, monitoring, 64-channel parameter logging, and IoT integration.",
  image: "/products/rdl-product/das-with-display-og.jpg",
  url: "/products/das-datalogger",
  keywords: [
    "DAS Datalogger",
    "Data Acquisition System",
    "Industrial Datalogger",
    "64 Channel Logger",
    "Modbus Data Logger",
    "Real-Time Parameter Monitoring",
  ],
});

export default function DasDataloggerPage() {
  return (
    <>
      {/* Apply before paint so header never runs blur/transition path */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add("rdl-scroll-stable");`,
        }}
      />
      <DasDataloggerClient />
    </>
  );
}
