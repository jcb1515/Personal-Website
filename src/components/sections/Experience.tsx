"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactElement } from "react";
import { Section } from "@/components/Section";
import { experience } from "@/data/content";
import { createEntryTransition } from "@/lib/motion";

export function Experience(): ReactElement {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="experience" eyebrow="Experience / 03" title="Learning through real responsibility">
      <div className="border-t border-[var(--line)]">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.role}-${item.company}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={createEntryTransition(index * 0.06)}
            className="content-row grid gap-6 border-b border-[var(--line)] py-9 md:grid-cols-[5rem_1fr_1.4fr] md:py-12"
          >
            <div className="technical-label">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <h2 className="text-3xl leading-tight">{item.role}</h2>
              <p className="mt-3 text-xs uppercase leading-5 text-[var(--signal-bright)]">
                {item.company}
              </p>
              <p className="mt-3 text-xs text-[var(--quiet)]">{item.period}</p>
            </div>
            <ul className="max-w-3xl space-y-3 text-sm leading-7 text-[var(--muted)]">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="grid grid-cols-[0.75rem_1fr] gap-3">
                  <span className="mt-[0.72rem] h-1 w-1 bg-[var(--signal-bright)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
