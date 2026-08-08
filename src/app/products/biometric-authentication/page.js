import BiometricProductClient from "./BiometricProductClient";

export const metadata = {
  title: "Biometric Authentication | Secure PLC & HMI Access Control | Isarva",
  description:
    "Biometric Authentication System for industrial PLC, SCADA, and HMI access control. Supports fingerprint enrollment, RS485 Modbus, Modbus TCP, RS232, and secure encrypted access logs.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

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
