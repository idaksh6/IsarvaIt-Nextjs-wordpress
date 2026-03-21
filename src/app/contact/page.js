import Link from "next/link";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us - Isarva | Get in Touch",
  description: "Have a project in mind? Contact Isarva for expert technology solutions. We respond within 24 hours. Offices in New York, London, and Singapore.",
};

// Force static rendering
export const dynamic = 'force-static';

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      content: "hello@isarva.com",
      description: "Send us an email anytime!",
      link: "mailto:hello@isarva.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm",
      link: "tel:+15551234567",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      content: "123 Business Street, New York, NY 10001",
      description: "Come say hello at our office",
      link: "https://maps.google.com/?q=123+Business+Street+New+York+NY+10001",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Working Hours",
      content: "Monday - Friday: 9AM - 6PM",
      description: "Weekend appointments available",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-gradient-to-b from-[#d4f4dd] via-[#defae4] to-white"
        style={{ contain: "layout style paint" }}
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" style={{ transform: "translateZ(0)" }}>
          <div className="absolute inset-0 bg-mesh-green opacity-40"></div>
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-emerald-200/40 blur-[80px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-200/30 blur-[80px] rounded-full"></div>
          <div className="hero-noise-overlay opacity-[0.12]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-md text-emerald-800 font-semibold text-sm mb-6 border border-white/60 shadow-lg">
              <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
              Let's Connect
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 hero-noise-overlay opacity-[0.02]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="relative rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 text-white">
                    {info.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors block mb-2"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-semibold mb-2">{info.content}</p>
                  )}
                  
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form and Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <ContactForm pageType="Contact Page" />
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98823492346205!3d40.75889713492988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1710184234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              {/* Social Links */}
              <div className="rounded-3xl p-8 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay connected with us on social media for updates, insights, and more.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 rounded-xl bg-white hover:bg-emerald-500 border-2 border-emerald-100 hover:border-emerald-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Link */}
              <div className="rounded-3xl p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Quick Answers?
                </h3>
                <p className="text-gray-600 mb-6">
                  Check out our FAQ section for instant answers to common questions.
                </p>
                <Link
                  href="/about"
                  prefetch={true}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-200"
                >
                  Visit FAQ
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations (Optional) */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-green opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have offices around the world to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "New York",
                address: "123 Business Street, Suite 100",
                postal: "New York, NY 10001",
                flag: "🇺🇸",
              },
              {
                city: "London",
                address: "456 Tech Avenue, Floor 5",
                postal: "London, UK EC1A 1BB",
                flag: "🇬🇧",
              },
              {
                city: "Singapore",
                address: "789 Innovation Drive, #10-01",
                postal: "Singapore 018956",
                flag: "🇸🇬",
              },
            ].map((office, index) => (
              <div
                key={index}
                className="rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {office.flag}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {office.city}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {office.address}<br />
                  {office.postal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}