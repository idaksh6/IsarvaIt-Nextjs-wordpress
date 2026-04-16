import { notFound } from "next/navigation";
import { getServiceBySlug, servicesData } from "../../lib/data/services-data";
import WordPressDevelopmentPremiumStaging from "../[slug]/WordPressDevelopmentPremiumStaging";
import { generateServiceMetadata } from "../../lib/utils/seo";

// Force dynamic rendering for staging review
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const service = getServiceBySlug("wordpress-development");

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const baseMetadata = generateServiceMetadata(service);

  return {
    ...baseMetadata,
    title: `[STAGING] ${service.title}`,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  };
}

export default async function WordPressDevelopmentStagingPage() {
  const service = getServiceBySlug("wordpress-development");

  if (!service) {
    notFound();
  }

  return (
    <WordPressDevelopmentPremiumStaging
      service={service}
      servicesData={servicesData}
    />
  );
}
