import { generateJobMetadata } from "../../../lib/utils/seo";
import { getJobBySlug } from "../../../lib/data/jobsData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Job Opening" };
  }

  return generateJobMetadata(job);
}

export default function JobDetailLayout({ children }) {
  return <>{children}</>;
}
