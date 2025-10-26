"use client";

const pattern = "DISCOVER ✦ DESIGN ✦ DEVELOP ✦";
const bannerText = Array.from({ length: 20 }, () => pattern).join(" ");

export function AnimatedBanner() {
  return (
    <section className="banner-wrapper border-y border-white/20 bg-gradient-to-br from-[#2810b2] via-[#1b0b85] to-[#0f075b] py-5 text-white">
      <div className="banner-track">
        <span className="banner-text">{bannerText}</span>
        <span className="banner-text" aria-hidden="true">
          {bannerText}
        </span>
      </div>
    </section>
  );
}

