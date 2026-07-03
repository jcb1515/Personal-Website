"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactElement } from "react";
import { Section } from "@/components/Section";
import { skills } from "@/data/content";
import { createEntryTransition } from "@/lib/motion";

export function Skills(): ReactElement {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="skills" eyebrow="Skills / 05" title="Tools proven through projects">
      <div className="border-t border-[var(--line)]">
        {skills.map((category, categoryIndex) => (
          <motion.section
            key={category.category}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={createEntryTransition(categoryIndex * 0.06)}
            className="content-row grid gap-7 border-b border-[var(--line)] py-9 lg:grid-cols-[5rem_17rem_1fr]"
          >
            <span className="technical-label">
              {String(categoryIndex + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-2xl leading-tight">{category.category}</h2>
              <p className="mt-4 text-xs leading-6 text-[var(--quiet)]">
                {category.summary}
              </p>
            </div>
            <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {category.items.map((skill) => (
                <li
                  key={skill.name}
                  className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr] sm:gap-5"
                >
                  <span className="text-sm font-semibold text-white">{skill.name}</span>
                  <span className="text-xs leading-6 text-[var(--muted)]">
                    {skill.description}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </Section>
  );
}
