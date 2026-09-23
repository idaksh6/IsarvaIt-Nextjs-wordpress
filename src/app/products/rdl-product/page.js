import RdlProductClient from "./RdlProductClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Data Logger IIoT 4.0 | Industrial IoT Gateway",
  description:
    "Intelligent Industrial Data Logger with isolated I/O, Modbus RTU/TCP, MQTT, 4G LTE & IP65 options. Custom OEM solutions, downloads & SDKs.",
  image: "/products/rdl-product/data-logger-og.jpg",
  url: "/products/rdl-product",
  keywords: [
    "Data Logger IIoT",
    "RDL Product",
    "Industrial IoT Gateway",
    "Modbus MQTT Datalogger",
    "Industrial Automation",
  ],
});

export default function RdlProductPage() {
  return (
    <>
      {/* Apply before paint so header never runs blur/transition path */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add("rdl-scroll-stable");`,
        }}
      />
      <RdlProductClient />
    </>
  );
}
