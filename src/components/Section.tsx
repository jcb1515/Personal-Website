"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactElement, ReactNode } from "react";
import { createEntryTransition } from "@/lib/motion";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  eyebrow?: string;
}

export function Section({
  id,
  className,
  children,
  title,
  eyebrow,
}: SectionProps): ReactElement {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={`page-shell pb-24 pt-36 md:pb-32 md:pt-40 ${className ?? ""}`}
    >
      {(eyebrow !== undefined || title !== undefined) && (
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={createEntryTransition(0)}
          className="mb-12 grid gap-4 md:mb-16 md:grid-cols-[10rem_1fr] md:items-end"
        >
          <div className="technical-label">{eyebrow ?? id}</div>
          {title !== undefined && (
            <h1 className="max-w-4xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
              {title}
            </h1>
          )}
        </motion.header>
      )}
      {children}
    </section>
  );
}
