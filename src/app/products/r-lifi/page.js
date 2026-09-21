import RLiFiProductClient from "./RLiFiProductClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "R-LiFi 3.0 | Visible Light Communication & Secure Optical Wireless",
  description:
    "R-LiFi (Light Fidelity) enables secure, high-speed, line-of-sight wireless optical communication using visible light spectrums. 100% RF-free & EMI immune for defense, healthcare, aviation, and underwater applications.",
  image: "/products/r-lifi/lifi-hardware.png",
  url: "/products/r-lifi",
  keywords: [
    "R-LiFi",
    "Visible Light Communication",
    "Optical Wireless",
    "RF-Free Wireless",
    "Light Fidelity",
    "Underwater Optical Modem",
    "Secure Wireless Communication",
  ],
});

export default function RLiFiPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add("rdl-scroll-stable");`,
        }}
      />
      <RLiFiProductClient />
    </>
  );
}
