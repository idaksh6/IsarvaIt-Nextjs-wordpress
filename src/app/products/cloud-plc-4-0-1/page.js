import CloudPlcProductClient from "./CloudPlcProductClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Cloud PLC 4.0 | Industrial Edge Controller",
  description:
    "Programmable Cloud PLC edge controller with isolated I/O, Modbus RTU/TCP, MQTT, WiFi/4G, and OPC support. OEM & custom SCADA solutions.",
  image: "/products/cloud-plc/cloud-plc-4-0.png",
  url: "/products/cloud-plc-4-0-1",
  keywords: [
    "Cloud PLC",
    "Industrial Edge Controller",
    "PLC 4.0",
    "Modbus RTU TCP",
    "MQTT Controller",
    "IIoT Gateway",
    "Industrial Automation",
  ],
});

export default function CloudPlcPage() {
  return (
    <>
      {/* Apply before paint so header never runs blur/transition path */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add("rdl-scroll-stable");`,
        }}
      />
      <CloudPlcProductClient />
    </>
  );
}
