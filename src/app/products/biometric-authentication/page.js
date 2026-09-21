import BiometricProductClient from "./BiometricProductClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Biometric Authentication | Secure PLC & HMI Access Control",
  description:
    "Biometric Authentication System for industrial PLC, SCADA, and HMI access control. Supports fingerprint enrollment, RS485 Modbus, Modbus TCP, RS232, and secure encrypted access logs.",
  image: "/products/biometric-authentication/biometric-11.jpg",
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
