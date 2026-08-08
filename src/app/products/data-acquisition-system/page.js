import DataAcquisitionSystemClient from "./DataAcquisitionSystemClient";

export const metadata = {
  title: "Data Acquisition System with Display | Isarva Infotech & RDL",
  description:
    "All-in-one Data Acquisition System (DAS) with Display to collect, monitor, and visualize real-time data from multiple sensors and field devices with integrated Samsung display and Windows 11 PC.",
  openGraph: {
    title: "Data Acquisition System with Display | Isarva Infotech & RDL",
    description:
      "Industrial Data Acquisition System with Display featuring 64 configurable channels, isolated analog/digital I/O, Modbus RTU/TCP, and real-time visualization.",
  },
};

export default function DataAcquisitionSystemPage() {
  return <DataAcquisitionSystemClient />;
}
