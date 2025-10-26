"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/content";
import { createChildFade, createStagger, fadeInUp } from "@/lib/motion-presets";

export function LatestBlogs() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = direction === "left" ? -360 : 360;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }, []);

  return (
    <motion.section
      id="blogs"
      className="mx-auto max-w-6xl px-6 pb-24 text-[color:var(--color-foreground)]"
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
            Insights
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Latest Blogs</h2>
        </motion.div>
        <motion.div
          className="flex items-center gap-3"
          variants={createChildFade(0.12)}
        >
          <motion.button
            type="button"
            onClick={() => scroll("left")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/70 text-[color:var(--color-primary)] shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.25 }}
            aria-label="Previous blog"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            type="button"
            onClick={() => scroll("right")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/70 text-[color:var(--color-primary)] shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.25 }}
            aria-label="Next blog"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        ref={scrollRef}
        className="edge-fade mt-12 flex gap-6 overflow-x-auto pb-4 pr-4 [-ms-overflow-style:none] [scrollbar-width:none]"
        variants={createStagger(0.12)}
      >
        {blogPosts.map((blog, idx) => (
          <motion.article
            key={blog.title}
            variants={createChildFade(0.08 + idx * 0.1)}
            className="min-w-[280px] max-w-[360px] overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_20px_45px_rgba(40,16,178,0.12)]"
            whileHover={{ scale: 1.05, translateY: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ willChange: "transform" }}
          >
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 280px, 360px"
                className="h-full w-full object-cover transition duration-700 ease-out hover:scale-105"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGD4DwABBAEAH52I7QAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="space-y-4 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                {blog.meta}
              </p>
              <h3 className="text-lg font-semibold leading-tight">
                {blog.title}
              </h3>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-primary)]"
                whileHover={{ gap: 12 }}
                transition={{ duration: 0.3 }}
              >
                Read Article
                <span>→</span>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

