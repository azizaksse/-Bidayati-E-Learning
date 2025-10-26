"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { createChildFade, createStagger } from "@/lib/motion-presets";

export function JoinCommunity() {
  return (
    <motion.section
      id="register"
      className="mx-auto mt-10 max-w-6xl px-6 py-24 text-[color:var(--color-foreground)]"
      initial="hidden"
      whileInView="visible"
      variants={createStagger(0.15)}
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="grid gap-10 rounded-[2.5rem] border border-white/70 bg-white/85 p-10 shadow-[0_32px_65px_rgba(40,16,178,0.1)] md:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={createChildFade(0.05)} className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-[#e5f7ff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-primary)]">
            Join the movement
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready for your next learning chapter?
          </h2>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Submit the quick application form to get matched with the right track, or sign
            in if you already have an account. Our learner success team will reach out
            within 24 hours with next steps.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="https://forms.gle/WYt384jdqzKJJh7Y6"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2810b2] via-[#49b3e1] to-[#84efc7] px-7 py-3 text-sm font-semibold text-white shadow-[0_24px_45px_rgba(40,16,178,0.2)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03]"
            >
              Apply for the next cohort
            </Link>
            <Link
              href="#signin"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(40,16,178,0.25)] px-7 py-3 text-sm font-semibold text-[color:var(--color-primary)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03]"
            >
              Already enrolled? Sign in
            </Link>
          </div>
        </motion.div>
        <motion.div
          id="signin"
          variants={createChildFade(0.15)}
          className="grid gap-4 rounded-[1.75rem] border border-white/70 bg-white/90 p-8"
        >
          <div>
            <h3 className="text-lg font-semibold">Quick Sign-In</h3>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">
              Access your dashboard to track progress, download resources, and book mentor
              sessions.
            </p>
          </div>
          <form className="grid gap-4" action="https://auth.bidayati.education/login" method="POST">
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="w-full rounded-full border border-[rgba(40,16,178,0.2)] bg-white/95 px-5 py-3 text-sm outline-none transition focus:border-[color:var(--color-primary)]"
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="w-full rounded-full border border-[rgba(40,16,178,0.2)] bg-white/95 px-5 py-3 text-sm outline-none transition focus:border-[color:var(--color-primary)]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2810b2] via-[#49b3e1] to-[#84efc7] px-6 py-3 text-sm font-semibold text-white shadow-[0_24px_45px_rgba(40,16,178,0.2)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]"
            >
              Sign in securely
            </button>
          </form>
          <p className="text-xs text-[color:var(--color-muted)]">
            By signing in you agree to our{" "}
            <Link href="https://bidayati.education/terms" target="_blank" rel="noreferrer">
              terms of service
            </Link>{" "}
            and{" "}
            <Link
              href="https://bidayati.education/privacy"
              target="_blank"
              rel="noreferrer"
            >
              privacy policy
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
