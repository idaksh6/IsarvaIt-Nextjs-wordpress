import HmiProductClient from "./HmiProductClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "HMI & Display Board | Industrial Human Machine Interface",
  description:
    "HMI & Display Board solutions for industrial control. Supports standee and panel mount HMI models, custom .NET, QT, Web apps integration, WinCC RT, EXOR JMobile SCADA, and plant floor display boards.",
  image: "/products/hmi-display-board/hmi-scada-runtime.png",
  url: "/products/hmi-&-display-board",
  keywords: [
    "HMI Display Board",
    "Industrial HMI",
    "Touchscreen HMI",
    "Andon Display",
    "Plant Floor Display",
    "WinCC RT SCADA",
    "Paperless Quality Checklist",
  ],
});

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
