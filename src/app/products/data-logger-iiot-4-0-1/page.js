import RdlProductClient from "./RdlProductClient";

export const metadata = {
  title: "Data Logger IIoT 4.0 | Intelligent Industrial Data Logger | Isarva",
  description:
    "Intelligent Data Logger with isolated I/O, Modbus RTU/TCP, MQTT, JSON, FTP, 4G LTE, flame-proof & IP65 options. OEM, custom solutions, downloads & SDKs for industrial IoT.",
};

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
