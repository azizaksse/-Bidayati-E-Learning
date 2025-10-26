"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { mentorCards } from "@/data/content";
import { createChildFade, createStagger, fadeInUp } from "@/lib/motion-presets";

export function ProfessionalMentors() {
  return (
    <motion.section
      id="mentors"
      className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-24 text-[color:var(--color-foreground)]"
      initial="hidden"
      whileInView="visible"
      variants={createStagger(0.15)}
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="absolute inset-0 -z-10 mint-gradient opacity-70" />
      <div className="absolute -right-20 top-10 -z-10 h-56 w-56 rounded-full bg-[#49b3e125] blur-3xl" />
      <div className="absolute -left-24 bottom-10 -z-10 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl" />

      <motion.div
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        variants={fadeInUp}
      >
        <motion.div variants={createChildFade(0.05)}>
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--color-muted)]">
            Team
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Our Professional Mentor
          </h2>
        </motion.div>
        <motion.a
          href="#"
          className="rounded-full border border-[rgba(40,16,178,0.25)] px-6 py-3 text-sm font-semibold text-[color:var(--color-primary)]"
          whileHover={{ scale: 1.05, translateY: -4 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        >
          Browse More
        </motion.a>
      </motion.div>

      <motion.div
        className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        variants={createStagger(0.15)}
      >
        {mentorCards.map((mentor, idx) => (
          <motion.article
            key={mentor.name}
            variants={createChildFade(0.12 + idx * 0.08)}
            className={`relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/80 p-6 shadow-[0_20px_45px_rgba(40,16,178,0.12)] ${
              mentor.highlight
                ? "bg-gradient-to-br from-[#2810b2] via-[#49b3e1] to-[#84efc7] text-white shadow-[0_35px_80px_rgba(40,16,178,0.22)]"
                : ""
            }`}
            whileHover={
              mentor.highlight
                ? { scale: 1.03, translateY: -8 }
                : { scale: 1.05, translateY: -10 }
            }
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ willChange: "transform" }}
          >
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-3xl border-4 border-white/60 shadow-[0_24px_45px_rgba(40,16,178,0.2)]">
              <Image
                src={mentor.image}
                alt={mentor.name}
                fill
                sizes="144px"
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGD4DwABBAEAH52I7QAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold">{mentor.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  mentor.highlight
                    ? "text-white/80"
                    : "text-[color:var(--color-muted)]"
                }`}
              >
                {mentor.role}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
