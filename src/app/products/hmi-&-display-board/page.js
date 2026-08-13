import HmiProductClient from "./HmiProductClient";

export const metadata = {
  title: "HMI & Display Board | Industrial Human Machine Interface | Isarva",
  description:
    "HMI & Display Board solutions for industrial control. Supports standee and panel mount HMI models, custom .NET, QT, Web apps integration, WinCC RT, EXOR JMobile SCADA, and plant floor display boards.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function HmiPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add("rdl-scroll-stable");`,
        }}
      />
      <HmiProductClient />
    </>
  );
}
