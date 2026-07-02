"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactElement, ReactNode } from "react";
import { createPageTransition } from "@/lib/motion";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps): ReactElement {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
          transition={createPageTransition()}
          className="w-full min-w-0"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      {!shouldReduceMotion && (
        <motion.div
          key={`scan-${pathname}`}
          className="route-scan"
          initial={{ scaleX: 0, opacity: 0.9 }}
          animate={{ scaleX: [0, 1, 1], opacity: [0.9, 0.9, 0] }}
          transition={{ duration: 0.62, times: [0, 0.55, 1], ease: "easeInOut" }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
