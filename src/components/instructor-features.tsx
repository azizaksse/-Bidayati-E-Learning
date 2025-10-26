"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Mic, PlayCircle, RadioTower } from "lucide-react";
import {
  instructorBullets,
  instructorFeatures,
} from "@/data/content";
import { createChildFade, createStagger, fadeInUp } from "@/lib/motion-presets";

const bulletIconMap = {
  Mic,
  RadioTower,
  PlayCircle,
};

export function InstructorSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageParallax = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);

  return (
    <motion.section
      ref={sectionRef}
      id="features"
      className="relative layout-container overflow-hidden rounded-[2.5rem] section-spacing text-[color:var(--color-foreground)]"
      initial="hidden"
      whileInView="visible"
      variants={createStagger(0.18)}
      viewport={{ once: true, margin: "-140px" }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#e8f5f3] via-[#eef2ff] to-[#e8e9f8]" />
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div className="space-y-6" variants={fadeInUp}>
          <motion.span
            className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--color-muted)]"
            variants={createChildFade(0.05)}
          >
            Instructors
          </motion.span>
          <motion.h2
            className="text-3xl font-bold sm:text-4xl"
            variants={createChildFade(0.12)}
          >
            World&apos;s Famous Experts Instructor
          </motion.h2>
          <motion.p
            className="text-base leading-relaxed text-[color:var(--color-muted)]"
            variants={createChildFade(0.18)}
          >
            Our mentors blend Algerian market insight with global best
            practices. Each instructor curates masterclasses to accelerate hybrid
            learning for ambitious students.
          </motion.p>

          <motion.div className="space-y-4" variants={createStagger(0.12)}>
            {instructorFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                variants={createChildFade(0.2 + idx * 0.08)}
                className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/80 p-4"
                whileHover={{ scale: 1.03, translateX: 6 }}
                transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                style={{ willChange: "transform" }}
              >
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f7ff] text-[color:var(--color-primary)]">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-[color:var(--color-muted)]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 pt-2"
            variants={createStagger(0.08)}
          >
            {instructorBullets.map((item, idx) => {
              const Icon =
                bulletIconMap[
                  item.icon as keyof typeof bulletIconMap
                ] ?? Mic;
              return (
                <motion.span
                  key={item.label}
                  variants={createChildFade(0.1 + idx * 0.06)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold text-[color:var(--color-primary)]"
                  whileHover={{ scale: 1.04 }}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </motion.span>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          variants={createChildFade(0.18)}
          style={{ y: imageParallax, willChange: "transform" }}
        >
          <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#49b3e125] blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-cyan-200/40 blur-3xl" />

          <motion.div
            className="relative overflow-hidden rounded-[3rem] border border-white/80 bg-white shadow-[0_35px_80px_rgba(40,16,178,0.22)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <Image
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80&fm=webp"
              alt="Expert instructor working with students"
              width={800}
              height={640}
              className="h-full w-full object-cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGD4DwABBAEAH52I7QAAAABJRU5ErkJggg=="
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
