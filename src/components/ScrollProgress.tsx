"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { ReactElement } from "react";

export function ScrollProgress(): ReactElement | null {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 34,
    mass: 0.3,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-[var(--signal-bright)]"
      style={{ scaleX }}
    />
  );
}
