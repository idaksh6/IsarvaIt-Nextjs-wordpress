"use client";

import { memo, useState, useEffect } from "react";

const REAL_ALPU_TESTIMONIALS = [
  {
    id: 170,
    name: "Jagdish Bhat",
    company: "FTR",
    quote:
      "Working with Alpu Infotech was an excellent experience. The team was professional, attentive, and delivered a clean, intuitive design that exceeded our expectations. Their clear communication and dedication made the entire project smooth and efficient. We’re very happy with the final result.",
    video: "",
    videoType: "none",
    photo: "/isarva-testimonials/customer-jagdish-bhat.webp",
    logoImg: "/isarva-testimonials/Logo-1.png",
  },
  {
    id: 173,
    name: "Jitin",
    company: "HIGHLANDS ESTATES",
    quote:
      "The experience was exceptional from start to finish. The website is visually appealing, user-friendly, and fast, greatly enhancing our digital presence and earning wonderful feedback from guests. Special thanks to Mr. Deep Kiran for his guidance and commitment.",
    video: "",
    videoType: "none",
    photo: "/isarva-testimonials/customer-jitin.webp",
    logoImg: "/isarva-testimonials/Highland-Estate-Logo.png",
  },
  {
    id: 146,
    name: "Prajwal Shetty",
    company: "VIDVATH EDUCATION FOUNDATION",
    quote:
      "The website redesign has transformed our digital presence, increasing online admissions and talent test registrations. It’s now faster, mobile-friendly, and truly reflects Vidvath PU College’s standards. ISarva Infotech delivered exactly what we needed.",
    video: "",
    videoType: "none",
    photo: "/isarva-testimonials/customer-prajwal-shetty.webp",
    logoImg: "/isarva-testimonials/vidvath-ogo.png",
  },
  {
    id: 154,
    name: "Gunashree",
    company: "IRIS EVENT DECOR",
    quote: "",
    video: "https://youtu.be/HBQ3JHfqUhI?si=HeukSmXpge9BYkfz",
    videoType: "youtube",
    photo: "/isarva-testimonials/customer-gunashree.webp",
    logoImg: "/isarva-testimonials/Iris-logo.png",
  },
  {
    id: 162,
    name: "Mr. Jayakar Shettigar",
    company: "GURUCHARAN INDUSTRIES",
    quote:
      "Our new website has transformed our digital presence, helping us attract more high-quality international inquiries and present a more professional image to global clients. Alpu Infotech has provided a powerful platform for our global growth.",
    video: "",
    videoType: "none",
    photo: "/isarva-testimonials/customer-jayakar-shettigar.webp",
    logoImg: "/isarva-testimonials/gurucharan-logo.png",
  },
  {
    id: 169,
    name: "David Richards",
    company: "GLUE CREATIVE SOLUTIONS",
    quote:
      "We’ve worked with Alpu for over a decade and consider them a trusted partner. Their team consistently delivers high-quality work, provides excellent support, and often goes above and beyond to meet our needs.",
    video: "",
    videoType: "none",
    photo: "/isarva-testimonials/customer-david-richards.webp",
    logoImg: "/isarva-testimonials/glue-logo.png",
  },
];

function getYouTubeEmbedUrl(url) {
  let videoId = "";
  if (!url) return "";
  if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1]?.split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  } else if (url.includes("embed/")) {
    videoId = url.split("embed/")[1]?.split("?")[0];
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&controls=1`;
}

function TestimonialsSection() {
  const [activeVideoItem, setActiveVideoItem] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Lock body scroll and handle Escape key when video modal is open
  useEffect(() => {
    if (!activeVideoItem) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveVideoItem(null);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideoItem]);

  // Build minimum 8 cards per group for seamless continuous loop (6 * 2 = 12 cards)
  let groupCards = [...REAL_ALPU_TESTIMONIALS];
  while (groupCards.length < 8) {
    groupCards = [...groupCards, ...REAL_ALPU_TESTIMONIALS];
  }

  const isPaused = isHovered || activeVideoItem !== null;

  const renderCard = (item, cardIdx, groupPrefix) => {
    const cardKey = `${groupPrefix}-${item.id || cardIdx}-${cardIdx}`;
    const hasVideo = Boolean(item.video);

    return (
      <div
        key={cardKey}
        className={`isarva-customer-card ${hasVideo ? "cursor-pointer" : ""}`}
        onClick={hasVideo ? () => setActiveVideoItem(item) : undefined}
      >
        {/* Background photo */}
        <img
          src={item.photo}
          className="customer-card-bg"
          alt={item.name}
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="customer-card-gradient" />

        {/* Client Header Info */}
        <div className="customer-header">
          <h3 className="customer-name">{item.name}</h3>
          {item.company && (
            <div className="customer-company">{item.company}</div>
          )}
        </div>

        {/* Centered Play Button (for cards with video) */}
        {hasVideo && (
          <div
            className="customer-video-play-btn js-play-card-video"
            onClick={(e) => {
              e.stopPropagation();
              setActiveVideoItem(item);
            }}
            aria-label={`Play ${item.name} video testimonial`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="58"
              viewBox="0 0 83 83"
              fill="none"
            >
              <path
                d="M57.4122 42.8193L31.2416 57.8864C30.7455 58.4791 29.8919 58.6273 29.225 58.2343C28.5582 57.8413 28.2715 57.023 28.5485 56.3014V26.1681C28.2715 25.4465 28.5582 24.6283 29.225 24.2352C29.8918 23.8422 30.7456 23.9904 31.2416 24.5832L57.4122 39.6502C58.0308 39.9337 58.427 40.5522 58.427 41.2352C58.427 41.9181 58.0308 42.5358 57.4122 42.8193ZM82.4687 41.2344C82.4687 52.1714 78.123 62.6597 70.3912 70.3912C62.6593 78.1226 52.1705 82.4687 41.2344 82.4687C30.2982 82.4687 19.809 78.123 12.0775 70.3912C4.3461 62.6593 0 52.1705 0 41.2344C0 30.2982 4.34569 19.809 12.0775 12.0775C19.8094 4.3461 30.2982 0 41.2344 0C52.1705 0 62.6597 4.34569 70.3912 12.0775C78.1226 19.8094 82.4687 30.2982 82.4687 41.2344ZM76.1257 41.2344C76.1257 31.9822 72.4501 23.1077 65.907 16.5614C59.3611 10.0186 50.4862 6.34267 41.234 6.34267C31.9819 6.34267 23.1074 10.0183 16.561 16.5614C10.0183 23.1073 6.34234 31.9822 6.34234 41.2344C6.34234 50.4865 10.018 59.361 16.561 65.9073C23.107 72.4501 31.9819 76.126 41.234 76.126C50.4862 76.126 59.3607 72.4504 65.907 65.9073C72.4498 59.3614 76.1257 50.4865 76.1257 41.2344Z"
                fill="white"
              />
            </svg>
          </div>
        )}

        {/* Testimonial Quote Text (Positioned exactly 30px ABOVE the company logo) */}
        {!hasVideo && item.quote && (
          <div className="customer-quote-box">
            <p className="customer-quote-text">{item.quote}</p>
          </div>
        )}

        {/* Pinned Bottom Client Logo Badge */}
        <div className="customer-logo-badge">
          {item.logoImg && (
            <img
              src={item.logoImg}
              alt={item.company || item.name}
              loading="lazy"
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="isarva-testimonials-section reveal-section bg-white" id="testimonials">
      {/* ── Section Header (Old Exact Title) ── */}
      <div className="relative z-10 text-center mb-10 sm:mb-12 px-6">
        <div className="inline-flex items-center gap-2 mb-3">
          <span
            style={{
              display: "block",
              height: 1,
              width: 32,
              background: "linear-gradient(90deg,transparent,#00A86B)",
            }}
          />
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#00A86B",
            }}
          >
            CLIENT TESTIMONIALS
          </span>
          <span
            style={{
              display: "block",
              height: 1,
              width: 32,
              background: "linear-gradient(90deg,#00A86B,transparent)",
            }}
          />
        </div>

        <h2
          style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.25rem)",
            fontWeight: 800,
            color: "#0F2B48",
            letterSpacing: "-0.03em",
            marginBottom: "0.75rem",
            lineHeight: 1.15,
          }}
        >
          What Our Clients Say
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            color: "#64748b",
            maxWidth: 480,
            margin: "0 auto",
          }}
        >
          Trusted by industry leaders across the globe
        </p>
      </div>

      {/* Full-Width Truly Continuous Infinite Loop Marquee (Pauses on Hover, Zero Blank Space) */}
      <div
        className="isarva-testimonials-marquee-wrap"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`isarva-marquee-track ${isPaused ? "is-paused" : ""}`}>
          {/* Group 1 */}
          <div className="marquee-group">
            {groupCards.map((item, idx) => renderCard(item, idx, "grp1"))}
          </div>

          {/* Group 2 (Clone for 100% seamless infinite loop without blank gaps) */}
          <div className="marquee-group" aria-hidden="true">
            {groupCards.map((item, idx) => renderCard(item, idx, "grp2"))}
          </div>
        </div>
      </div>

      {/* ── Video Modal Popup ── */}
      {activeVideoItem && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeVideoItem.name} video testimonial`}
        >
          {/* Backdrop with click-to-close */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setActiveVideoItem(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-[#111827] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/10 z-10 flex flex-col">
            {/* Header bar inside modal */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-black/50 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base leading-tight">
                    {activeVideoItem.name}
                  </h4>
                  {activeVideoItem.company && (
                    <p className="text-[11px] sm:text-xs text-white/70 font-semibold uppercase tracking-wider">
                      {activeVideoItem.company}
                    </p>
                  )}
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveVideoItem(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-200 cursor-pointer"
                aria-label="Close video"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Responsive 16:9 Video Player */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              {activeVideoItem.videoType === "local" ||
                activeVideoItem.video?.match(/\.(mp4|webm|mov|ogg)(\?.*)?$/i) ? (
                <video
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src={activeVideoItem.video} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              ) : (
                <iframe
                  src={getYouTubeEmbedUrl(activeVideoItem.video)}
                  title={activeVideoItem.name}
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(TestimonialsSection);
