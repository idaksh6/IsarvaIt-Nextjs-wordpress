"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Target, 
  Users, 
  TrendingUp, 
  Lightbulb,
  Heart,
  Zap,
  Globe,
  Upload,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Rocket,
  Brain,
  Code,
  ArrowRight
} from "lucide-react";

const whatYouExpect = [
  {
    icon: <Target className="w-8 h-8 text-emerald-500" />,
    title: "Real-World Projects",
    description: "Get involved in meaningful work that directly impacts our solutions and helps improve lives."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Mentorship and Learning",
    description: "Receive guidance from experienced professionals eager to help you grow and succeed."
  },
  {
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    title: "Collaborative Culture",
    description: "Work in an environment that values diversity, creativity, and teamwork, where your contributions truly matter."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
    title: "Professional Growth",
    description: "Build your skills and knowledge while working with cutting-edge technologies and innovative processes."
  }
];

const lookingFor = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Passion for Technology",
    description: "You should have a genuine interest in technology and a desire to work on projects that tackle real-world challenges."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Eager to Learn",
    description: "We welcome individuals who are curious and ready to dive into new technologies, methodologies, and tools. Your willingness to learn and adapt is crucial."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Strong Interpersonal Skills",
    description: "Collaboration is key at Isarva Infotech. We're looking for team players who can communicate effectively, share ideas, and work well with others."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Problem-Solving Mindset",
    description: "We seek individuals who are excited about solving complex problems and who can approach challenges with creativity and analytical thinking."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Innovative Thinkers",
    description: "We value fresh perspectives and encourage our interns to bring new ideas to the table. If you're someone who loves to innovate and think outside the box, you'll thrive here."
  }
];

const joinUsReasons = [
  {
    icon: <Globe className="w-12 h-12 text-emerald-500" />,
    title: "Explore Your Potential",
    description: "At Isarva Infotech, we believe in nurturing talent. You'll be given the opportunity to stretch your abilities and discover new areas of interest."
  },
  {
    icon: <Target className="w-12 h-12 text-blue-500" />,
    title: "Work on Impactful Projects",
    description: "Your work here will make a difference. From day one, you'll be involved in projects that have real-world impact, allowing you to see the results of your efforts."
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-purple-500" />,
    title: "Grow with Us",
    description: "Our team is committed to your growth. You'll receive mentorship, training, and support as you develop your skills and prepare for your future career."
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-amber-500" />,
    title: "Innovation-Driven Environment",
    description: "Be part of a team where creativity and innovation are at the core of everything we do. Your ideas will be heard, and your contributions will shape our solutions."
  }
];

export default function InternshipsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });
  const [resume, setResume] = useState(null);
  const [resumeFileName, setResumeFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("Resume file size should be less than 5MB");
        setSubmitStatus("error");
        setTimeout(() => {
          setSubmitStatus(null);
          setErrorMessage("");
        }, 5000);
        return;
      }

      // Check file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage("Please upload a PDF or Word document");
        setSubmitStatus("error");
        setTimeout(() => {
          setSubmitStatus(null);
          setErrorMessage("");
        }, 5000);
        return;
      }

      setResume(file);
      setResumeFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('jobTitle', `Internship - ${formData.position || 'General'}`);
      submitData.append('jobSlug', 'internship');
      submitData.append('pageUrl', '/internships');
      
      if (resume) {
        submitData.append('resume', resume);
      }

      const response = await fetch('/api/job-application', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        // Redirect to thank you page
        const queryParams = new URLSearchParams({
          type: 'internship-application',
          item: formData.position || 'Internship'
        });
        
        router.push(`/thank-you?${queryParams.toString()}`);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        
        setTimeout(() => {
          setSubmitStatus(null);
          setErrorMessage("");
        }, 7000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage("");
      }, 7000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F2] font-sans text-[#1a1f24]">
      {/* Hero Section */}
      <section className="relative pt-44 lg:pb-32 pb-14 overflow-hidden bg-gradient-to-b from-[#F0F7F4] to-[#FDF8F2]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10b981] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-[#84cc16] opacity-[0.05] rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#10b981]/10 mb-8 shadow-sm"
            >
              <GraduationCap className="w-4 h-4 text-[#10b981]" />
              <span className="text-[#10b981] font-bold tracking-wider uppercase text-xs">Launch Your Career</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-[#1a1f24] tracking-tight leading-[1.1] mb-8"
            >
              Internship at <br /> 
              <span className="italic text-[#10b981] font-bold">Isarva Infotech</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#53606b] max-w-4xl mx-auto leading-relaxed mb-12 font-medium"
            >
              Isarva Infotech offers internships that transcend traditional learning. Interns are immersed in dynamic projects, tackling complex challenges and gaining hands-on experience with cutting-edge technologies. This program provides a platform for aspiring professionals to apply theoretical knowledge to real-world scenarios, fostering a deep understanding of the industry and accelerating career readiness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a 
                href="#apply"
                className="press-illusion-btn bg-[#10b981] text-white font-bold px-12 py-6 text-xl inline-flex items-center justify-center gap-3 transition-transform hover:scale-105 rounded-2xl shadow-xl hover:shadow-2xl"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 rounded-full bg-gradient-to-r from-transparent via-[#10b981]/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[#10b981] font-black tracking-[0.3em] uppercase text-xs mb-4"
            >
              Your Experience
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#1a1f24] mb-6">What You Can Expect</h2>
            <div className="w-24 h-1.5 bg-[#10b981] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouExpect.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#FDF8F2] p-10 rounded-[3rem] lg:text-left text-center border border-[#10b981]/5 hover:border-[#10b981]/20 transition-all group hover:shadow-2xl"
              >
                <div className="mb-6 p-4 bg-white lg:mx-0 mx-auto rounded-2xl w-fit shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-[#1a1f24]">{item.title}</h3>
                <p className="text-[#53606b] leading-relaxed font-medium text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-24 bg-[#FDF8F2] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[#10b981] font-black tracking-[0.3em] uppercase text-xs mb-4"
            >
              Ideal Candidate
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#1a1f24] mb-6">Who We're Looking For</h2>
            <p className="text-xl text-[#53606b] max-w-4xl mx-auto leading-relaxed font-medium">
              At Isarva Infotech, we're on the lookout for passionate and driven individuals who are eager to make a difference. Our ideal intern is someone who is not only enthusiastic about learning but also committed to contributing to our projects in meaningful ways. We value candidates who bring a positive attitude, a willingness to take on challenges, and the ability to think critically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lookingFor.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border lg:text-left text-center border-[#10b981]/5 hover:border-[#10b981]/20 transition-all group hover:shadow-xl"
              >
                <div className="mb-4 p-3 bg-emerald-50 rounded-xl w-fit lg:mx-0 mx-auto text-[#10b981] transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-[#1a1f24]">{item.title}</h3>
                <p className="text-[#53606b] leading-relaxed font-medium">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[#10b981] font-black tracking-[0.3em] uppercase text-xs mb-4"
            >
              Your Journey Starts Here
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#1a1f24] mb-6">Join Us</h2>
            <p className="text-xl text-[#53606b] max-w-4xl mx-auto leading-relaxed font-medium">
              Kick-start your career by joining Isarva Infotech, where innovation meets opportunity. As an intern, you'll have the chance to explore your potential, build your skills, and gain invaluable experience in a thriving and supportive environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {joinUsReasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#FDF8F2] p-12 rounded-[3.5rem] border lg:text-left text-center border-[#10b981]/5 hover:border-[#10b981]/20 transition-all group hover:shadow-2xl"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 w-fit lg:mx-0 mx-auto">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-[#1a1f24]">{reason.title}</h3>
                <p className="text-[#53606b] leading-relaxed font-medium text-lg">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-[#53606b] max-w-4xl mx-auto leading-relaxed font-medium">
              If you're ready to take the first step towards a rewarding career, apply for an internship at Isarva Infotech today. Join a team that not only values your growth and creativity but also empowers you to make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-gradient-to-b from-[#FDF8F2] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10b981] opacity-[0.02] rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[#10b981] font-black tracking-[0.3em] uppercase text-xs mb-4"
            >
              Ready to Start?
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1f24] mb-6">Internship Application Form</h2>
            <p className="text-lg text-[#53606b] font-medium">
              Please Fill Out the Form Below to Submit Your Internship Application!
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-[#10b981]/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
                  placeholder="email@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Position Select */}
              <div>
                <label htmlFor="position" className="block text-sm font-semibold text-gray-900 mb-2">
                  Select Position
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
                >
                  <option value="">Select a position</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block text-sm font-semibold text-gray-900 mb-2">
                  Resume *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    required
                  />
                  <label
                    htmlFor="resume"
                    className="w-full px-4 py-3 rounded-xl border-2 border-dashed border-gray-300 hover:border-emerald-500 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 bg-gray-50 hover:bg-emerald-50"
                  >
                    <Upload className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700 font-medium">
                      {resumeFileName || "No file chosen"}
                    </span>
                  </label>
                </div>
                {resumeFileName && (
                  <p className="mt-2 text-sm text-emerald-600 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    {resumeFileName}
                  </p>
                )}
              </div>

              {/* Error Message */}
              {submitStatus === "error" && errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800 text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#10b981] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                By applying, you agree to our terms and privacy policy
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
