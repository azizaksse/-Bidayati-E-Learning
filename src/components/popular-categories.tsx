"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CircuitBoard,
  MonitorSmartphone,
  Palette,
  Sparkles,
} from "lucide-react";
import { categoryCards } from "@/data/content";
import { createChildFade, createStagger, fadeInUp } from "@/lib/motion-presets";

const iconMap = {
  MonitorSmartphone,
  Sparkles,
  CircuitBoard,
  Palette,
};

export function PopularCategories() {
  return (
    <motion.section
      id="categories"
      className="relative layout-container section-spacing text-[color:var(--color-foreground)]"
      initial="hidden"
      whileInView="visible"
      variants={createStagger(0.15)}
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={fadeInUp}
      >
        <motion.span
          className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--color-muted)]"
          variants={createChildFade(0.05)}
        >
          Categories
        </motion.span>
        <motion.h2
          className="mt-3 text-3xl font-bold sm:text-4xl"
          variants={createChildFade(0.12)}
        >
          Popular <span className="text-[color:var(--color-primary)]">Categories</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-base text-[color:var(--color-muted)]"
          variants={createChildFade(0.18)}
        >
          Dive into tracks curated for Algerian creatives and developers. Each
          pathway blends live instruction, recorded content, and community-led
          critiques.
        </motion.p>
      </motion.div>

      <motion.div
        className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={createStagger(0.15)}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/80 to-transparent" />
        {categoryCards.map((card, idx) => {
          const Icon =
            iconMap[
              card.icon as keyof typeof iconMap
            ] ?? MonitorSmartphone;
          return (
            <motion.article
              key={card.title}
              variants={createChildFade(0.1 + idx * 0.08)}
              className="group relative h-full rounded-[1.75rem] border border-white/60 bg-white/80 p-6 shadow-[0_20px_45px_rgba(40,16,178,0.12)]"
              whileHover={{ scale: 1.05, translateY: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              style={{ willChange: "transform" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5f7ff] text-[color:var(--color-primary)] transition group-hover:bg-[color:var(--color-primary)]/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                {card.description}
              </p>
              <motion.div
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-primary)]"
                whileHover={{ gap: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="#courses">Read More</Link>
                <span aria-hidden="true">&rarr;</span>
              </motion.div>
            </motion.article>
          );
        })}
      </motion.div>

      <motion.div
        className="mt-12 flex justify-center"
        variants={createChildFade(0.25)}
      >
        <motion.a
          href="#courses"
          className="rounded-full border border-[rgba(40,16,178,0.25)] px-8 py-3 text-sm font-semibold text-[color:var(--color-primary)]"
          whileHover={{ scale: 1.06, translateY: -4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        >
          Browse More
        </motion.a>
      </motion.div>
    </motion.section>
  );
}





