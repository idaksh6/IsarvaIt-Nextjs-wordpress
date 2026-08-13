import VibrationProductClient from "./VibrationProductClient";

export const metadata = {
  title: "Industrial 3-Axis Vibration Sensor & Temperature Probe | Isarva",
  description:
    "3-Axis Industrial Vibration & Temperature Sensor for predictive maintenance and condition monitoring. Measures RMS velocity, peak acceleration, displacement, and temperature across Modbus RS485, Wi-Fi, and 4G LTE.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

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
