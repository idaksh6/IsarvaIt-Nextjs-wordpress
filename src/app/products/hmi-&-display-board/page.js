import HmiProductClient from "./HmiProductClient";

export const metadata = {
  title: "HMI & Display Board | Industrial Human Machine Interface | Isarva",
  description:
    "HMI & Display Board solutions. Supports standee and panel mount HMI models, custom .net/QT/Web apps integration, Wincc RT and EXOR JMobile SCADA systems.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
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
