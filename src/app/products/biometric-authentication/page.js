import BiometricProductClient from "./BiometricProductClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Biometric Authentication | PLC & HMI Access Control",
  description:
    "Industrial Biometric Authentication System with fingerprint scanning for PLC, SCADA, and HMI. Supports Modbus RTU/TCP & encrypted logs.",
  image: "/products/biometric-authentication/biometric-authentication-og.jpg",
  url: "/products/biometric-authentication",
  keywords: [
    "Biometric Authentication",
    "Industrial Access Control",
    "PLC Biometrics",
    "HMI Security",
    "Fingerprint Scanner RS485",
    "Modbus Access Control",
    "Industrial Fingerprint Reader",
  ],
});

export default function BiometricPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add("rdl-scroll-stable");`,
        }}
      />
      <BiometricProductClient />
    </>
  );
}
