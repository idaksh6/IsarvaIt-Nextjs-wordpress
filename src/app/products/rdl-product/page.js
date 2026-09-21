import RdlProductClient from "./RdlProductClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Data Logger IIoT 4.0 | Intelligent Industrial Data Logger",
  description:
    "Intelligent Data Logger with isolated I/O, Modbus RTU/TCP, MQTT, JSON, FTP, 4G LTE, flame-proof & IP65 options. OEM, custom solutions, downloads & SDKs for industrial IoT.",
  image: "/products/rdl-product/data-logger-hero.png",
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
