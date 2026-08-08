import DasDataloggerClient from "./DasDataloggerClient";

export const metadata = {
  title: "DAS Datalogger | Data Acquisition System Data Logger | Isarva",
  description:
    "Comprehensive Data Acquisition System (DAS) Data Logger for real-time data collection, monitoring, 64-channel parameter logging, and IoT integration.",
};

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
