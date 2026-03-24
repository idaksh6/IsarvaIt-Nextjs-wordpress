"use client";

import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Briefcase,
  CheckCircle2,
  Star,
  Users,
  Globe,
  Award,
  TrendingUp,
  Zap,
  Heart
} from "lucide-react";
import Link from "next/link";
import { getJobBySlug } from "../../lib/data/jobsData";
import { notFound } from "next/navigation";
import CareerApplicationForm from "../../components/CareerApplicationForm";

export default function JobDetailPage({ params }) {
  const { slug } = use(params);
  const [job, setJob] = useState(null);

  useEffect(() => {
    const jobData = getJobBySlug(slug);
    if (!jobData) {
      notFound();
    }
    setJob(jobData);
  }, [slug]);

  if (!job) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#10b981] mx-auto"></div>
          <p className="mt-4 text-[#53606b] font-medium">Loading job details...</p>
        </div>
      </div>
    );
  }

  const perksData = [
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Work-Life Balance",
      description: "Flexible hours and remote options"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
      title: "Growth Opportunities",
      description: "Continuous learning and development"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Great Team",
      description: "Collaborative and supportive environment"
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: "Competitive Package",
      description: "Industry-leading compensation"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F2] font-sans text-[#1a1f24]">

      {/* BACK BUTTON */}
      <div className="bg-white border-b border-emerald-500/10 pt-32 pb-6">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-[#53606b] hover:text-[#10b981] transition-colors font-bold group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Jobs</span>
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-white to-[#FDF8F2] lg:py-16 py-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10b981] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 lg:text-left text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Job Type Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-[#10b981]/20 mb-6">
              <Briefcase className="w-4 h-4 text-[#10b981]" />
              <span className="text-[#10b981] font-bold tracking-wider uppercase text-xs">
                {job.jobType}
                {job.duration && ` • ${job.duration}`}
                {job.workModel && ` • ${job.workModel}`}
              </span>
            </div>

            {/* Job Title */}
            <h1 className="text-4xl md:text-6xl font-display font-bold text-[#1a1f24] mb-8 leading-tight">
              {job.title}
            </h1>

            {/* Job Meta Info */}
            <div className="flex flex-wrap gap-4 mb-8 lg:justify-start justify-center">
              <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-emerald-500/10 shadow-sm">
                <MapPin className="w-5 h-5 text-[#10b981]" />
                <span className="font-bold text-[#1a1f24]">{job.location}</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-emerald-500/10 shadow-sm">
                <Clock className="w-5 h-5 text-[#10b981]" />
                <span className="font-bold text-[#1a1f24]">{job.experience}</span>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="lg:py-16 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* LEFT COLUMN - Main Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* About the Role */}
              {job.description && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-10 rounded-3xl border border-emerald-500/10 shadow-sm"
                >
                  <h2 className="text-3xl font-display font-bold text-[#1a1f24] mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-[#10b981] rounded-full"></div>
                    About the Role
                  </h2>
                  <p className="text-[#53606b] text-lg leading-relaxed font-medium">
                    {job.description}
                  </p>
                </motion.div>
              )}

              {/* Key Responsibilities */}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-10 rounded-3xl border border-emerald-500/10 shadow-sm"
                >
                  <h2 className="text-3xl font-display font-bold text-[#1a1f24] mb-8 flex items-center gap-3">
                    <div className="w-2 h-8 bg-[#10b981] rounded-full"></div>
                    Key Responsibilities
                  </h2>

                  <div className="space-y-8">
                    {job.responsibilities.map((section, idx) => (
                      <div key={idx}>
                        {section.category && (
                          <h3 className="text-xl font-bold text-[#1a1f24] mb-4">
                            {section.category}
                          </h3>
                        )}
                        <ul className="space-y-3">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                              <span className="text-[#53606b] leading-relaxed font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Qualifications */}
              {job.qualifications && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-10 rounded-3xl border border-emerald-500/10 shadow-sm"
                >
                  <h2 className="text-3xl font-display font-bold text-[#1a1f24] mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-[#10b981] rounded-full"></div>
                    Qualifications
                  </h2>

                  <div className="space-y-4">
                    {job.qualifications.education && (
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-[#1a1f24]">Education: </span>
                          <span className="text-[#53606b] font-medium">{job.qualifications.education}</span>
                        </div>
                      </div>
                    )}
                    {job.qualifications.experience && (
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-[#1a1f24]">Experience: </span>
                          <span className="text-[#53606b] font-medium">{job.qualifications.experience}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Required Skills */}
              {job.requiredSkills && job.requiredSkills.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-10 rounded-3xl border border-emerald-500/10 shadow-sm"
                >
                  <h2 className="text-3xl font-display font-bold text-[#1a1f24] mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-[#10b981] rounded-full"></div>
                    Required Skills
                  </h2>

                  <ul className="space-y-3">
                    {job.requiredSkills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                        <span className="text-[#53606b] leading-relaxed font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Preferred Skills */}
              {job.preferredSkills && job.preferredSkills.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-10 rounded-3xl border border-emerald-500/10 shadow-sm"
                >
                  <h2 className="text-3xl font-display font-bold text-[#1a1f24] mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-[#10b981] rounded-full"></div>
                    Preferred Skills
                  </h2>

                  <ul className="space-y-3">
                    {job.preferredSkills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                        <span className="text-[#53606b] leading-relaxed font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Perks (for internship) */}
              {job.perks && job.perks.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-emerald-50 to-white p-8 md:p-10 rounded-3xl border border-emerald-500/20 shadow-sm"
                >
                  <h2 className="text-3xl font-display font-bold text-[#1a1f24] mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-[#10b981] rounded-full"></div>
                    Perks and Benefits
                  </h2>

                  <ul className="space-y-3">
                    {job.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                        <span className="text-[#53606b] leading-relaxed font-medium">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Interview Process */}
              {job.interviewProcess && job.interviewProcess.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-10 rounded-3xl border border-emerald-500/10 shadow-sm"
                >
                  <h2 className="text-3xl font-display font-bold text-[#1a1f24] mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-[#10b981] rounded-full"></div>
                    Interview Process
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {job.interviewProcess.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 bg-[#FDF8F2] rounded-xl border border-emerald-500/10"
                      >
                        <div className="w-10 h-10 bg-[#10b981] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {idx + 1}
                        </div>
                        <span className="text-[#1a1f24] font-bold">{step}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </div>

            {/* RIGHT COLUMN - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">

                {/* Application Form Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl border border-emerald-500/10 shadow-xl"
                >
                  <h3 className="text-2xl font-display font-bold text-[#1a1f24] mb-2 lg:text-left text-center">Submit Your Application</h3>
                  <p className="text-[#53606b] mb-6 leading-relaxed lg:text-left text-center">
                    Fill out the form below and we'll get back to you shortly.
                  </p>

                  <CareerApplicationForm
                    jobTitle={job.title}
                    jobSlug={slug}
                  />
                </motion.div>

                {/* Company Perks */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-emerald-500/10 shadow-sm"
                >
                  <h3 className="text-xl font-display font-bold text-[#1a1f24] mb-6 lg:text-left text-center">
                    Why Isarva Infotech?
                  </h3>

                  <div className="space-y-6">
                    {perksData.map((perk, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#FDF8F2] rounded-xl flex items-center justify-center flex-shrink-0">
                          {perk.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1a1f24] mb-1">{perk.title}</h4>
                          <p className="text-[#53606b] text-sm">{perk.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Share Job */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#FDF8F2] p-6 rounded-2xl border border-emerald-500/10"
                >
                  <p className="text-[#53606b] text-sm text-center font-medium">
                    Know someone perfect for this role? Share this opportunity with them!
                  </p>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-[#1a1f24] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981] opacity-[0.05] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Excited about this opportunity?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Apply using the form above, or explore more career opportunities with Isarva Infotech.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/careers"
                className="bg-[#10b981] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
              >
                View All Openings
              </Link>
              <Link
                href="/about"
                className="press-illusion-btn bg-[#10b981] text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all hover:scale-105"
              >
                Learn About culture
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
