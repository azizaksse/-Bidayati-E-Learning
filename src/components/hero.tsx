"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { createChildFade, createStagger } from "@/lib/motion-presets";

const fadeFast = createChildFade();
const fadeMid = createChildFade(0.2);
const fadeSlow = createChildFade(0.4);

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-36 text-[color:var(--color-foreground)]"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] mint-gradient" />
      <div className="absolute inset-y-0 left-1/3 -z-10 hidden w-3/4 rounded-full bg-gradient-to-tr from-[#49b3e122] via-[#2810b222] to-transparent blur-[120px] md:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 lg:grid-cols-[1fr_0.95fr]">
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={createStagger(0.2)}
        >
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-primary)] shadow-[0_8px_20px_rgba(40,16,178,0.12)]"
            variants={fadeFast}
            style={{ willChange: "transform" }}
          >
            <span className="text-base">DZ</span> Bidayati | Algerian LMS
          </motion.span>

          <motion.h1
            className="text-4xl font-bold leading-tight text-[color:var(--color-foreground)] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.15]"
            variants={fadeFast}
            style={{ willChange: "transform" }}
          >
            Learn, Grow, and Succeed{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[color:var(--color-primary)]">
                Online
              </span>
              <span className="absolute inset-x-0 bottom-0 h-3 rounded-full bg-[rgba(40,16,178,0.2)] blur-[2px]" />
            </span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg"
            variants={fadeMid}
            style={{ willChange: "transform" }}
          >
            Experience Bidayati&apos;s immersive e-learning built for Algerian
            students. Curated curricula, expert mentors, and project-based
            learning designed to accelerate your journey.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            variants={fadeSlow}
            style={{ willChange: "transform" }}
          >
            <a
              href="#courses"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2810b2] via-[#49b3e1] to-[#84efc7] px-8 py-3 text-sm font-semibold text-white shadow-[0_24px_45px_rgba(40,16,178,0.2)] transition-transform duration-300 ease-out hover:translate-y-[-4px] hover:scale-[1.03] active:scale-95"
            >
              Get Started
            </a>
            <a
              href="#signin"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(40,16,178,0.25)] px-8 py-3 text-sm font-semibold text-[color:var(--color-primary)] transition-transform duration-300 ease-out hover:translate-y-[-4px] hover:scale-[1.03] active:scale-95"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f7ff]">
                <Play className="h-4 w-4 text-[color:var(--color-primary)]" />
              </span>
              Free Trial
            </a>
          </motion.div>

          <div className="grid gap-6 pt-8 sm:grid-cols-3">
            {[
              {
                title: "12+ Learning Tracks",
                description:
                  "Choose programs aligned with Algerian industry needs.",
              },
              {
                title: "Project-Based",
                description:
                  "Build a portfolio with real-world briefs and mentorship.",
              },
              {
                title: "24/7 Community",
                description:
                  "Engage with ambitious students across Algeria.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_18px_35px_rgba(40,16,178,0.12)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_26px_45px_rgba(40,16,178,0.18)]"
              >
                <p className="text-sm font-semibold text-[color:var(--color-primary)]">
                  {feature.title}
                </p>
                <p className="mt-2 text-xs text-[color:var(--color-muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          style={{ willChange: "transform" }}
        >
          <div className="relative w-full max-w-xl">
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-white/80 blur-2xl" />
            <div className="absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-[#49b3e133] blur-3xl" />

            <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white shadow-[0_35px_80px_rgba(40,16,178,0.18)]">
              <Image
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80&fm=webp"
                alt="Student learning online"
                width={640}
                height={640}
                className="h-full w-full object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGD4DwABBAEAH52I7QAAAABJRU5ErkJggg=="
              />
            </div>

            <div className="absolute -right-12 top-10 hidden w-40 rounded-3xl border border-white/60 bg-white/90 p-5 text-sm shadow-[0_20px_45px_rgba(40,16,178,0.18)] sm:block">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">
                Trusted Mentors
              </p>
              <p className="mt-1 text-2xl font-bold text-[color:var(--color-primary)]">
                300+
              </p>
              <p className="text-xs text-[color:var(--color-muted)]">
                Expert mentors across MENA & Europe.
              </p>
            </div>

            <div className="absolute -left-12 bottom-10 hidden w-44 rounded-3xl border border-white/60 bg-white/90 p-5 text-sm shadow-[0_20px_45px_rgba(40,16,178,0.18)] sm:block">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">
                Empowered Students
              </p>
              <p className="mt-1 text-2xl font-bold text-[color:var(--color-primary)]">
                50K+
              </p>
              <p className="text-xs text-[color:var(--color-muted)]">
                Learners thriving across Algeria & beyond.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


