"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/content";
import { createChildFade, createStagger, fadeInUp } from "@/lib/motion-presets";

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      id="faq"
      className="mx-auto max-w-6xl px-6 pb-24 text-[color:var(--color-foreground)]"
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
          FAQ
        </motion.span>
        <motion.h2
          className="mt-3 text-3xl font-bold sm:text-4xl"
          variants={createChildFade(0.12)}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="mt-4 text-base text-[color:var(--color-muted)]"
          variants={createChildFade(0.18)}
        >
          Quick answers about our Algerian e-learning experience, live
          mentorship, and flexible class schedules.
        </motion.p>
      </motion.div>

      <motion.div className="mt-14 space-y-4" variants={createStagger(0.1)}>
        {faqs.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.article
              key={item.question}
              variants={createChildFade(0.08 + index * 0.06)}
              className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 shadow-[0_20px_45px_rgba(40,16,178,0.12)]"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:text-[color:var(--color-primary)]"
              >
                <span className="text-base font-semibold sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-[color:var(--color-primary)] transition-transform ${
                    isActive ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                  isActive
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-6 pb-6 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  {item.answer}
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
