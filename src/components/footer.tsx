"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/bidayati", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/bidayati.learning", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/bidayati.learning", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@bidayati", label: "YouTube" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-24 border-t border-white/40 bg-white/80 py-16 text-[color:var(--color-foreground)]"
    >
      <div className="layout-container grid gap-10 md:grid-cols-[1.1fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[#dce3ff]">
              <Image
                src="/logo.png"
                alt="Bidayati emblem"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">
                Bidayati
              </p>
              <p className="text-lg font-bold text-[color:var(--color-primary)]">
                E-Learning
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-[color:var(--color-muted)]">
            Bidayati delivers live cohorts, mentorship, and Algerian-focused programmes
            that bridge the gap between curiosity and career-ready skills.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-[color:var(--color-muted)]">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-[color:var(--color-primary)]" />
              <Link href="mailto:hello@bidayati.education">hello@bidayati.education</Link>
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-[color:var(--color-primary)]" />
              <Link href="tel:+213770000000">+213 770 00 00 00</Link>
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[color:var(--color-primary)]" />
              45 Rue Didouche Mourad, Algiers
            </span>
          </div>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="touch-target flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/80 text-[color:var(--color-primary)] shadow-md transition hover:scale-105 hover:border-[color:var(--color-primary)]"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
            Company
          </h3>
          <ul className="mt-4 space-y-4 text-sm text-[color:var(--color-muted)]">
            <li>
              <Link href="#about" className="transition hover:text-[color:var(--color-primary)]">
                About us
              </Link>
            </li>
            <li>
              <Link href="#mentors" className="transition hover:text-[color:var(--color-primary)]">
                Meet the mentors
              </Link>
            </li>
            <li>
              <Link href="#blogs" className="transition hover:text-[color:var(--color-primary)]">
                Stories & insights
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
            Resources
          </h3>
          <ul className="mt-4 space-y-4 text-sm text-[color:var(--color-muted)]">
            <li>
              <Link href="#courses" className="transition hover:text-[color:var(--color-primary)]">
                Course catalogue
              </Link>
            </li>
            <li>
              <Link href="#faq" className="transition hover:text-[color:var(--color-primary)]">
                Help centre
              </Link>
            </li>
            <li>
              <Link href="#register" className="transition hover:text-[color:var(--color-primary)]">
                Become a learner
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
            Newsletter
          </h3>
          <p className="mt-4 text-sm text-[color:var(--color-muted)]">
            Join 20K+ ambitious students receiving weekly insights, design critiques, and
            invitations to live workshops.
          </p>
          <form
            className="mt-5 flex flex-col gap-3 sm:flex-row"
            action="https://formspree.io/f/moqgqkve"
            method="POST"
          >
            <input
              type="email"
              name="email"
              required
              inputMode="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/60 bg-white/80 px-5 py-3 text-sm outline-none transition focus:border-[color:var(--color-primary)]"
            />
            <button
              type="submit"
              className="inline-flex touch-target items-center justify-center rounded-full bg-gradient-to-r from-[#2810b2] via-[#49b3e1] to-[#84efc7] px-6 py-3 text-sm font-semibold text-white shadow-[0_24px_45px_rgba(40,16,178,0.2)] transition hover:brightness-110"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="layout-container mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/40 pt-6 text-xs text-[color:var(--color-muted)] md:flex-row">
        <p>Copyright {new Date().getFullYear()} Bidayati. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link
            href="https://bidayati.education/privacy"
            className="transition hover:text-[color:var(--color-primary)]"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://bidayati.education/terms"
            className="transition hover:text-[color:var(--color-primary)]"
            target="_blank"
            rel="noreferrer"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
