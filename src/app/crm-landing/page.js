import CRMLandingClient from "./CRMLandingClient";

export const metadata = {
  title: "Isarva CRM | Cloud-Based Sales & Customer Management Platform",
  description:
    "Capture leads effortlessly, manage Kanban deal pipelines, automate quotations, and nurture customer relationships with Isarva CRM.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function CRMLandingPage() {
  return <CRMLandingClient />;
}
