import CloudPlcProductClient from "./CloudPlcProductClient";

export const metadata = {
  title: "Cloud PLC 4.0 | Programmable Industrial Edge Controller | Isarva",
  description:
    "Cloud PLC 4.0 — Programmable edge controller with isolated I/O, Modbus RTU/TCP, MQTT, JSON, RESTful, WiFi/BLE/4G, OPC support. OEM & custom solutions for industrial IoT and SCADA.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

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
