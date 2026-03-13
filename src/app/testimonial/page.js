import ContactSection from "../components/ContactSection";
import TestimonialGrid from "./TestimonialGrid";

// We'll add "image" "span" props to support the masonry layout
const testimonials = [
  {
    id: 1,
    name: "Jagdish Bhat",
    role: "CEO",
    company: "FTR",
    image: "/Testimonials/ftr.jpg", 
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    gradientColor: "from-slate-900/90",
    text: "Working with Isarva Infotech has been an outstanding experience from start to finish. The team showed exceptional professionalism, great attention to detail, and a deep understanding of our requirements. They delivered a clean, intuitive design that not only met but exceeded our expectations. Throughout the project, communication was clear, timely, and proactive, which made the entire collaboration smooth and efficient. We truly appreciate their dedication and responsiveness, and we are very satisfied with the final outcome. We highly recommend Isarva Infotech Pvt Ltd. to anyone looking for quality, creativity, and reliability in their projects.",
  },
  {
    id: 2,
    name: "Gunashree",
    role: "CEO",
    company: "Iris",
    youtubeId: "HBQ3JHfqUhI", 
    colSpan: "col-span-1 lg:col-span-2",
    rowSpan: "row-span-1 lg:row-span-2",
    gradientColor: "from-emerald-900/90",
  },
  {
    id: 3,
    name: "David Richards",
    role: "Director",
    company: "Glue Creative Prod. Solutions, UK",
    image: "/Testimonials/david.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    gradientColor: "from-blue-900/90",
    text: "We have been working with Isarva for well over a decade and consider them a valued and trusted partner. Having the Team in place to facilitate not only our own but also our client's online presence gives great comfort and security. We are sure in the knowledge of the work being carried out to a high standard and this is testament to the Team's technical ability, knowledge and understanding, all of which are incredible. We are a UK based company and despite the time and geographic differences we have never experienced any issue with delivery up of projects. The Team are always on hand to help and often go above and beyond expectation to deliver and work so collaboratively they genuinely are viewed as an integral part of our own in-house Team which speaks volumes of their dedication and support in helping us deliver to our clients continuously and to a consistent high standard.",
  },
  {
    id: 4,
    name: "Mohithpal Kunder",
    role: "Global Head Bus. Dev",
    company: "Atlaspoint Tech Pvt Ltd",
    image: "/Testimonials/image5.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    gradientColor: "from-sky-900/90",
    text: "The team at ISarva Infotech did a fantastic job bringing our website vision to life. They combined creativity with functionality, delivering a website that’s both visually appealing and user-friendly. Their process was efficient, communication was clear, and the end result exceeded our expectations. We’re very pleased with the outcome and highly recommend them.",
  },
  {
    id: 5,
    name: "Jitin",
    role: "Owner",
    company: "Highlands Estates",
    image: "/Testimonials/image6.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    gradientColor: "from-red-900/90",
    text: "I had the pleasure of working with Isarva Infotech for the development of our website, www.highlandestate.in, and I must say the experience has been exceptional from start to finish. The team is incredibly professional, creative, and attentive to our specific needs and their technical expertise and the ability to quickly understand and execute our vision made the entire journey smooth and highly productive. The website is not only visually appealing but also user-friendly and fast, which has significantly enhanced our digital presence and received wonderful feedback from our guests. A special mention and heartfelt thanks to Mr. Deep Kiran, the CEO of Isarva Infotech, whose guidance, commitment, and continuous support were instrumental throughout the project. His proactive approach and personal involvement ensured that we achieved the highest quality outcome. The team at Isarva Infotech went above and beyond to deliver a product we are proud of, and their post-launch support has been equally commendable. I highly recommend Isarva Infotech to anyone looking for a reliable, skilled, and supportive web development partner. Thank you once again for your outstanding work!",
  },
  {
    id: 6,
    name: "Chandrabhushan Pandey",
    role: "Director",
    company: "Tentoro Technologies",
    image: "/Testimonials/tentoro-1.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    gradientColor: "from-emerald-800/90",
    text: "The team at Isarva Infotech did an excellent job on our pitch deck. They quickly understood our requirements and delivered a professional, visually impressive presentation. Their responsiveness and attention to detail made the entire process smooth. I’d definitely recommend them to anyone looking for high-quality presentation or branding support",
  },
  {
    id: 7,
    name: "George Thomas",
    role: "Owner",
    company: "Beth Lifestyle Private Limited",
    image: "/Testimonials/image7.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    gradientColor: "from-cyan-900/90",
    text: "Working with Isarva Infotech was a seamless and insightful experience. They understood the premium, innovation-driven identity of Beth Living and translated it into a sleek, structured, and high-performing website. The layout is clean and modern, reflecting the modular nature of our products while making it easy for visitors to explore and inquire. They paid close attention to the little things that matter — from product presentation to user experience — ensuring every detail aligned with our brand identity.",
  },
  {
    id: 8,
    name: "Dev Prakash",
    role: "Owner",
    company: "Meraki Beach Resort",
    image: "/Testimonials/Prakash.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    gradientColor: "from-orange-900/90",
    text: "Working with the team at Isarva Infotech Pvt Ltd was an absolute pleasure. The team took the time to truly understand our vision and brand, and transformed it into a beautiful, functional, and modern website that perfectly captures the serene experience and services we offer at Meraki Beach Resort. The design is modern, clean, responsive, and easy to navigate — exactly what we needed to attract and engage both domestic and international guests \n\nTheir professionalism, timely delivery, and ongoing support made the entire process smooth and stress-free. We’ve received great feedback from our customers, and the website has already helped us increase our direct bookings. Highly recommend their services to anyone looking for a reliable and creative web development partner.",
  },
  {
    id: 9,
    name: "Charulata",
    role: "Owner",
    company: "Charus Cuisines",
    image: "/Testimonials/image8-1.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    gradientColor: "from-purple-900/90",
    text: "Isarva Infotech truly captured the essence of what Charu’s Cuisine stands for — warmth, authenticity, and trust. They transformed our vision into a clean, inviting website that beautifully showcases our homemade food offerings and makes online ordering effortless. Their thoughtful design and understanding of the customer journey have helped us connect better with our audience. We’ve seen a real improvement in how people discover and engage with our brand online.",
  },
];

export const metadata = {
  title: "Testimonials — Isarva Infotech",
  description: "Read what our clients have to say about working with Isarva Infotech. Real reviews from real businesses.",
};

export default function TestimonialPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col pt-24">
      {/* ── Internal Page Header ── */}
      <section className="relative py-20 px-6 text-center border-b border-emerald-500/10 overflow-hidden bg-white">
        {/* Soft Background Blobs */}
        <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[200%] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-[-50%] right-[-10%] w-[40%] h-[150%] bg-lime-400/5 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-emerald-500 rounded-full" />
            <p className="text-emerald-600 font-bold uppercase tracking-[0.15em] text-sm">
              Client Watch
            </p>
            <span className="w-10 h-[2px] bg-gradient-to-l from-transparent to-emerald-500 rounded-full" />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Hear from our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500">partners</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
            Watch and read real stories from the incredible businesses and leaders we've had the pleasure of working with around the globe.
          </p>
        </div>
      </section>

      {/* ── Wall of Honor Collage ── */}
      <TestimonialGrid testimonials={testimonials} />

      <ContactSection />
    </div>
  );
}
