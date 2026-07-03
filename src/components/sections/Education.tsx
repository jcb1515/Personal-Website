"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ReactElement } from "react";
import { Section } from "@/components/Section";
import { accomplishments, education } from "@/data/content";
import { createEntryTransition } from "@/lib/motion";

export function Education(): ReactElement {
  const shouldReduceMotion = useReducedMotion();
  const [expandedInstitution, setExpandedInstitution] = useState<string | null>(null);

  return (
    <Section id="education" eyebrow="Education / 02" title="Building a rigorous foundation">
      <div className="border-t border-[var(--line)]">
        {education.map((item, index) => {
          const isExpandable = item.institution.includes("Assumption");
          const isExpanded = expandedInstitution === item.institution;

          return (
            <motion.article
              key={item.institution}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={createEntryTransition(index * 0.06)}
              className="content-row border-b border-[var(--line)] py-8 md:py-11"
            >
              <div className="grid gap-5 md:grid-cols-[5rem_1fr_13rem] md:items-start">
                <span className="technical-label">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="max-w-3xl text-3xl leading-tight sm:text-4xl">
                    {item.institution}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.details}</p>
                </div>
                <div className="flex items-center justify-between gap-4 md:flex-col md:items-end">
                  <span className="text-xs uppercase text-[var(--signal-bright)]">
                    {item.period}
                  </span>
                  {isExpandable && (
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls="assumption-details"
                      className="command px-3"
                      onClick={() =>
                        setExpandedInstitution(isExpanded ? null : item.institution)
                      }
                    >
                      {isExpanded ? "Hide school details" : "View school details"}
                      <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>
                  )}
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isExpandable && isExpanded && (
                  <motion.div
                    id="assumption-details"
                    initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8 grid gap-6 border-l border-[var(--signal)] pl-6 text-sm leading-7 text-[var(--muted)] md:ml-20 md:grid-cols-2">
                      <p>
                        Maintained a 98% Grade 12 average and a 4.0 unweighted GPA while
                        completing advanced coursework in mathematics, physics, chemistry,
                        and English.
                      </p>
                      <p>
                        Participated in VEX Robotics, DECA, Model UN, Senior Reach, Chess
                        Club, and peer tutoring while earning school and Waterloo math
                        awards.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <div className="technical-label mb-4">Academic recognition</div>
          <h2 className="text-4xl leading-tight sm:text-5xl">Results earned over time</h2>
        </div>
        <ol className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {accomplishments.map((item, index) => (
            <li key={item} className="grid grid-cols-[3rem_1fr] gap-4 py-4 text-sm">
              <span className="text-[var(--signal-bright)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
