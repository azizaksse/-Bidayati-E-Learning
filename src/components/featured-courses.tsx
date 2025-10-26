"use client";

import {
  useCallback,
  useMemo,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { courseCards } from "@/data/content";
import { createChildFade, createStagger, fadeInUp } from "@/lib/motion-presets";

export function FeaturedCourses() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);

  const scroll = useCallback((direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = direction === "left" ? -380 : 380;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }, []);

  const beginDrag = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") {
      return;
    }
    const container = scrollRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    startXRef.current = event.clientX;
    scrollStartRef.current = container.scrollLeft;
    container.classList.add("cursor-grabbing");
    container.classList.remove("cursor-grab");
    container.setPointerCapture?.(event.pointerId);
  }, []);

  const moveDrag = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    event.preventDefault();
    const container = scrollRef.current;
    if (!container) return;
    const delta = event.clientX - startXRef.current;
    container.scrollLeft = scrollStartRef.current - delta;
  }, []);

  const endDrag = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const container = scrollRef.current;
    isDraggingRef.current = false;
    if (container) {
      container.classList.add("cursor-grab");
      container.classList.remove("cursor-grabbing");
      container.releasePointerCapture?.(event.pointerId);
    }
  }, []);

  const headerStagger = useMemo(() => createStagger(0.12), []);

  return (
    <motion.section
      id="courses"
      className="layout-container section-spacing text-[color:var(--color-foreground)]"
      initial="hidden"
      whileInView="visible"
      variants={createStagger(0.15)}
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.div
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        variants={headerStagger}
      >
        <motion.div variants={fadeInUp}>
          <motion.span
            className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--color-muted)]"
            variants={createChildFade(0.05)}
          >
            Featured
          </motion.span>
          <motion.h2
            className="mt-3 text-3xl font-bold sm:text-4xl"
            variants={createChildFade(0.12)}
          >
            Explore Featured Courses
          </motion.h2>
        </motion.div>

        <motion.div
          className="hidden items-center gap-3 sm:flex"
          variants={createChildFade(0.18)}
        >
          <motion.button
            type="button"
            onClick={() => scroll("left")}
            className="touch-target flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/70 text-[color:var(--color-primary)] shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.25 }}
            aria-label="Previous course"
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
            aria-label="Next course"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        ref={scrollRef}
        className="edge-fade mt-12 flex snap-x gap-6 overflow-x-auto pb-4 pr-4 [scrollbar-width:none] [-ms-overflow-style:none] md:cursor-grab"
        onPointerDown={beginDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        variants={createStagger(0.12)}
      >
        {courseCards.map((course, idx) => (
          <motion.article
            key={course.title}
            variants={createChildFade(0.08 + idx * 0.1)}
            className="relative min-w-[80%] max-w-full snap-start overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_20px_45px_rgba(40,16,178,0.12)] sm:min-w-[60%] md:min-w-[48%] lg:min-w-[32%] xl:min-w-[25%]"
            whileHover={{ scale: 1.05, translateY: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ willChange: "transform" }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-width: 768px) 280px, 320px"
                className="h-full w-full object-cover transition duration-700 ease-out hover:scale-105"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGD4DwABBAEAH52I7QAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="space-y-5 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={course.avatar}
                      alt={course.teacher}
                      fill
                      sizes="40px"
                      className="object-cover"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGD4DwABBAEAH52I7QAAAABJRU5ErkJggg=="
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[color:var(--color-muted)]">
                      Instructor
                    </p>
                    <p className="text-sm font-semibold">{course.teacher}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-[#e5f7ff] px-3 py-1 text-xs font-semibold text-[color:var(--color-primary)]">
                  <Star className="h-4 w-4 fill-[color:var(--color-primary)] text-[color:var(--color-primary)]" />
                  <span>{course.rating.toFixed(1)}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold leading-tight">
                {course.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-[color:var(--color-primary)]">
                  {course.price}
                </p>
                <motion.a
                  href="#"
                  className="rounded-full border border-[rgba(40,16,178,0.25)] px-4 py-2 text-xs font-semibold text-[color:var(--color-primary)]"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                >
                  View Course
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
