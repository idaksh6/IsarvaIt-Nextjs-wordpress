import { Metadata } from "next";

export const metadata: Metadata = {
  title: "White-Label Agency Partnerships | Isarva",
  description: "Scale your agency with a reliable white-label partner. Expert execution, fast delivery, and complete confidentiality—guaranteed.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WhiteLabelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
