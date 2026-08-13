import RLiFiProductClient from "./RLiFiProductClient";

export const metadata = {
  title: "R-LiFi 3.0 | Visible Light Communication & Secure Optical Wireless | Isarva",
  description:
    "R-LiFi (Light Fidelity) enables secure, high-speed, line-of-sight wireless optical communication using visible light spectrums. 100% RF-free & EMI immune for defense, healthcare, aviation, and underwater applications.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

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
