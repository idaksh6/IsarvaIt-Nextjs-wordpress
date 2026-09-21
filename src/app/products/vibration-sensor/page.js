import VibrationProductClient from "./VibrationProductClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Industrial 3-Axis Vibration Sensor & Temperature Probe",
  description:
    "3-Axis Industrial Vibration & Temperature Sensor for predictive maintenance and condition monitoring. Measures RMS velocity, peak acceleration, displacement, and temperature across Modbus RS485, Wi-Fi, and 4G LTE.",
  image: "/products/vibration-sensor/vibration-hero.png",
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
