import VibrationProductClient from "./VibrationProductClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "3-Axis Vibration Sensor | Industrial Condition Monitoring",
  description:
    "Industrial 3-Axis Vibration & Temperature Sensor for predictive maintenance, bearing monitoring, and machinery health with Modbus RS485 & 4G LTE.",
  image: "/products/vibration-sensor/vibration-sensor-og.jpg",
  url: "/products/vibration-sensor",
  keywords: [
    "Vibration Sensor",
    "3-Axis Vibration Sensor",
    "Predictive Maintenance",
    "Bearing Condition Monitoring",
    "Industrial Temperature Probe",
    "Modbus RS485 Sensor",
  ],
});

export default function VibrationPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add("rdl-scroll-stable");`,
        }}
      />
      <VibrationProductClient />
    </>
  );
}
