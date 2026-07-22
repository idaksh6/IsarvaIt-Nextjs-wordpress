import ErpSoftwareClient from './ErpSoftwareClient';
import { generateMetadata as generateSEOMetadata } from '../../lib/utils/seo';

// SEO Metadata — noindex/nofollow scoped to this page only
export const metadata = generateSEOMetadata({
  title: "ERP Software",
  description: "ERP Software unifies CRM, HRMS, Inventory, Finance, Accounting, and Project Management into one intelligent platform.",
  keywords: ["ERP software", "enterprise resource planning", "business management system", "ERP solution"],
  url: "/product/erp-software",
  image: "https://www.isarvait.com/isarva-og.png",
  noIndex: true, // Keep it non-indexable as it was originally set
});

// Force fully static rendering — no server-side data needed
export const dynamic = 'force-static';

export default function ErpSoftwarePage() {
  return <ErpSoftwareClient />;
}
