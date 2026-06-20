import TrainingProgramsPremium from "./TrainingProgramsPremium";

export const metadata = {
  title: "Training Programs — iSARVA Infotech",
  description:
    "Hands-on industry-ready training programs in CRM, HRMS, Web & Backend Development, Frontend & UI/UX, Data & Cloud Engineering, and Digital Marketing & AI. Enroll today.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TrainingProgramsPage() {
  return <TrainingProgramsPremium />;
}
