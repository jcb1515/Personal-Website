"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactElement } from "react";
import { Section } from "@/components/Section";
import { extracurriculars } from "@/data/content";
import { createEntryTransition } from "@/lib/motion";

const outcomes = ["Team systems", "Technical pathway", "Consistency", "Community"] as const;

export function Extracurriculars(): ReactElement {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="extracurriculars"
      eyebrow="Beyond coursework / 06"
      title="Leadership, discipline, and community"
    >
      <div className="border-t border-[var(--line)]">
        {extracurriculars.map((item, index) => (
          <motion.article
            key={item.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={createEntryTransition(index * 0.06)}
            className="content-row grid gap-5 border-b border-[var(--line)] py-8 md:grid-cols-[5rem_1fr_1.2fr_10rem] md:items-start"
          >
            <span className="technical-label">{String(index + 1).padStart(2, "0")}</span>
            <h2 className="text-2xl leading-tight">{item.title}</h2>
            <p className="text-sm leading-7 text-[var(--muted)]">{item.description}</p>
            <span className="text-xs uppercase text-[var(--state)] md:text-right">
              {outcomes[index]}
            </span>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
