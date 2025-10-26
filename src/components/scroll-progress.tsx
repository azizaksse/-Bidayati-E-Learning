"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[999] h-[3px] origin-left bg-gradient-to-r from-[#2810b2] via-[#49b3e1] to-[#84efc7]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
