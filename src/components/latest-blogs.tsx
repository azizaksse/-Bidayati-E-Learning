"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/content";
import { createChildFade, createStagger, fadeInUp } from "@/lib/motion-presets";

export function LatestBlogs() {
  return (
    <motion.section
      id="blogs"
      className="layout-container section-spacing text-[color:var(--color-foreground)]"
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
      </motion.div>

      <motion.div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={createStagger(0.12)}>
        {blogPosts.map((blog, idx) => (
          <motion.article
            key={blog.title}
            variants={createChildFade(0.08 + idx * 0.1)}
            className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_20px_45px_rgba(40,16,178,0.12)]"
            whileHover={{ translateY: -10 }}
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
                <span aria-hidden="true">&rarr;</span>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}



