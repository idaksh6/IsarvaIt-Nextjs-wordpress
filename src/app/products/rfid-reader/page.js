import RfidProductClient from "./RfidProductClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "UHF RFID Reader & Antennas | Long-Range Asset & Access Control",
  description:
    "High-performance UHF RFID Readers & Antennas with fast multi-tag identification, IP65 housing, TCP/IP, MQTT, Wi-Fi, and 4G LTE uplink. Includes handheld, wall-mount, and desktop RFID reader models.",
  image: "/products/rfid-reader/RFID.jpg",
  url: "/products/rfid-reader",
  keywords: [
    "UHF RFID Reader",
    "RFID Antennas",
    "Long-Range RFID",
    "Asset Tracking RFID",
    "EPC Gen2 RFID",
    "Industrial RFID Scanner",
  ],
});

export default function RfidPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add("rdl-scroll-stable");`,
        }}
      />
      <RfidProductClient />
    </>
  );
}
