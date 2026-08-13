import RfidProductClient from "./RfidProductClient";

export const metadata = {
  title: "UHF RFID Reader & Antennas | Long-Range Asset & Access Control | Isarva",
  description:
    "High-performance UHF RFID Readers & Antennas with fast multi-tag identification, IP65 housing, TCP/IP, MQTT, Wi-Fi, and 4G LTE uplink. Includes handheld, wall-mount, and desktop RFID reader models.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

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
