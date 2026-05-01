import Link from "next/link";
import ContactForm from "../components/ContactForm";
import StickyContactInfoV2 from "../components/StickyContactInfoV2";
import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Contact Us - Get in Touch with Our Experts",
  description: "Have a project in mind? Contact Isarva for expert technology solutions. We respond within 24 hours. Offices in Mangalore, Bangalore, Dubai, and UK. Call +91 9902863697 or email marketing@isarvait.com",
  keywords: ["contact", "get in touch", "IT support", "project inquiry", "consultation", "reach us"],
  url: "/contact",
});

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
      content: "marketing@isarvait.com",
      description: "Send us an email anytime!",
      link: "mailto:marketing@isarvait.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      content: "+91 9902863697",
      description: "Mon-Fri from 9.30am to 6.30pm",
      link: "tel:+919902863697",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Working Hours",
      content: "Monday - Friday: 9.30AM - 6.30PM",
      description: "Weekend appointments available",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/isarva-infotech-private-limited",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/IsarvaInfotech",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/isarvainfotech/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Contact Section with Banner Gradient */}
      <section className="relative pt-32 lg:pt-40 pb-10 lg:pb-20 bg-gradient-to-b from-[#d4f4dd] via-[#defae4] to-white">
        {/* Background Decorations - Wrapped to contain overflow without breaking sticky */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" style={{ contain: "layout style paint" }}>
          <div className="absolute inset-0 bg-mesh-green opacity-40"></div>
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-emerald-200/40 blur-[80px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-200/30 blur-[80px] rounded-full"></div>
          <div className="hero-noise-overlay opacity-[0.12]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left: Contact Form */}
            <div className="relative order-2 lg:order-1 h-full">
              <div className="h-full rounded-3xl p-8 lg:p-10 bg-white/80 backdrop-blur-sm border-2 border-emerald-100 shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex-grow">
                    <ContactForm pageType="Contact Page" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Get in Touch Text and Additional Info */}
            <div className="relative order-1 lg:order-2">
              <StickyContactInfoV2 socialLinks={socialLinks} showMap={false} />
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="relative rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative lg:text-left text-center">
                  <div className="w-14 h-14 rounded-2xl lg:mx-0 mx-auto bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 text-white">
                    {info.icon}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {info.title}
                  </h3>

                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
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
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-10 lg:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                city: "Mangalore",
                address: "Bajpe",
                postal: "Mangalore, India",
                mapEmbedUrl: "https://maps.google.com/maps?q=Bajpe,Mangalore,India&t=&z=13&ie=UTF8&iwloc=&output=embed",
                googleMapsLink: "https://maps.app.goo.gl/33PWqCCNP69tLAXQ7",
              },
              {
                city: "Bangalore",
                address: "",
                postal: "Bangalore, India",
                mapEmbedUrl: "https://maps.google.com/maps?q=Bangalore,India&t=&z=12&ie=UTF8&iwloc=&output=embed",
                googleMapsLink: "https://www.google.com/maps/place/Bangalore",
              },
              {
                city: "Dubai",
                address: "",
                postal: "Dubai, UAE",
                mapEmbedUrl: "https://maps.google.com/maps?q=Dubai,UAE&t=&z=12&ie=UTF8&iwloc=&output=embed",
                googleMapsLink: "https://www.google.com/maps/place/Dubai",
              },
              {
                city: "UK",
                address: "",
                postal: "United Kingdom",
                mapEmbedUrl: "https://maps.google.com/maps?q=London,UK&t=&z=11&ie=UTF8&iwloc=&output=embed",
                googleMapsLink: "https://www.google.com/maps/place/London,+UK",
              },
            ].map((office, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
              >
                {/* Map Background with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  {/* Google Maps Iframe - Non-interactive Background */}
                  <iframe
                    src={office.mapEmbedUrl}
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-60 grayscale-[30%] brightness-110"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${office.city}`}
                  ></iframe>

                  {/* Light Overlay for better visibility */}
                  <div className="absolute inset-0 bg-white/40"></div>

                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>

                  {/* Location Pin Icon */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 text-emerald-500 group-hover:scale-110 transition-transform duration-300 z-10">
                    <svg className="w-10 h-10 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>

                  {/* Location Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 drop-shadow-sm">
                        {office.city}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className="p-4">
                  <p className="text-gray-600 leading-relaxed text-center">
                    {office.address && <>{office.address} , </>}
                    {office.postal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}