import IsarvaErpClient from './IsarvaErpClient';

// SEO Metadata — noindex/nofollow scoped to this page only
export const metadata = {
  title: 'ISARVA ERP | Isarva Infotech',
  description:
    'ISARVA ERP unifies CRM, HRMS, Inventory, Finance, Accounting, and Project Management into one intelligent platform.',
  authors: [{ name: 'Isarva Infotech' }],
  creator: 'Isarva Infotech',
  publisher: 'Isarva Infotech',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'ISARVA ERP | Isarva Infotech',
    description:
      'ISARVA ERP unifies CRM, HRMS, Inventory, Finance, Accounting, and Project Management into one intelligent platform.',
    url: 'https://www.isarvait.com/product/isarva-erp',
    siteName: 'Isarva Infotech',
    locale: 'en_US',
    type: 'website',
  },
};

// Force fully static rendering — no server-side data needed
export const dynamic = 'force-static';

export default function IsarvaErpPage() {
  return <IsarvaErpClient />;
}
