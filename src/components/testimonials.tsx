"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { createChildFade, createStagger, fadeInUp } from "@/lib/motion-presets";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.section
      id="testimonials"
      className="mx-auto max-w-6xl px-6 py-24 text-[color:var(--color-foreground)]"
      initial="hidden"
      whileInView="visible"
      variants={createStagger(0.15)}
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.div
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        variants={fadeInUp}
      >
        <motion.div variants={createChildFade(0.05)}>
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--color-muted)]">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Our Students Says
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center gap-3"
          variants={createChildFade(0.12)}
        >
          <motion.button
            type="button"
            onClick={handlePrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/70 text-[color:var(--color-primary)] shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.25 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            type="button"
            onClick={handleNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/70 text-[color:var(--color-primary)] shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.25 }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative mt-16 grid gap-6 md:grid-cols-3"
        variants={createStagger(0.14)}
      >
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.article
              key={testimonial.name}
              variants={createChildFade(0.1 + index * 0.1)}
              className={`relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_20px_45px_rgba(40,16,178,0.12)] ${
                isActive
                  ? "md:border-[color:var(--color-primary)] md:shadow-[0_28px_65px_rgba(40,16,178,0.18)]"
                  : ""
              }`}
              whileHover={{ translateY: -8, scale: 1.03 }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              style={{ willChange: "transform" }}
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-[#8fd3ff]" />
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGD4DwABBAEAH52I7QAAAABJRU5ErkJggg=="
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-[color:var(--color-muted)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[color:var(--color-muted)]">
                {testimonial.quote}
              </p>

              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between">
                <motion.button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/80 text-[color:var(--color-primary)] shadow-md md:hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={handleNext}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/80 text-[color:var(--color-primary)] shadow-md md:hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      <motion.div
        className="mt-12 flex justify-center"
        variants={createChildFade(0.25)}
      >
        <motion.a
          href="#"
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
