"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { GraduationCap, ChevronDown } from "lucide-react";
import { education } from "@/data/content";

export function Education() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (institution: string) => {
    if (expanded === institution) {
      setExpanded(null);
    } else {
      setExpanded(institution);
    }
  };

  return (
    <Section id="education" title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((item, index) => {
          const isAssumption = item.institution.includes("Assumption");
          const isExpanded = expanded === item.institution;

          return (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className={`p-8 bg-surface border border-surface-border rounded-sm relative overflow-hidden group transition-all duration-300 flex flex-col h-full ${isAssumption ? 'cursor-pointer hover:border-primary' : 'hover:border-primary'}`}
              onClick={() => isAssumption && toggleExpand(item.institution)}
            >
              <GraduationCap
                size={120}
                className="absolute -right-6 -bottom-6 text-surface-light opacity-50 group-hover:text-primary/10 transition-colors duration-500"
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-heading text-white mb-2 pr-4">{item.institution}</h3>
                  {isAssumption && (
                    <motion.div
                      className="flex items-center gap-2 text-primary mt-1 bg-primary/10 hover:bg-primary/20 px-4 py-1.5 rounded-sm transition-colors border border-primary/20 shrink-0"
                    >
                      <span className="text-xs uppercase tracking-widest font-heading hidden sm:inline">{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                        <ChevronDown size={18} />
                      </motion.div>
                    </motion.div>
                  )}
                </div>
                <h4 className="text-xl font-body text-primary mb-2">{item.period}</h4>
                <p className="text-muted leading-relaxed flex-1">
                  {item.details}
                </p>

                {isAssumption && (
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-4 border-t border-surface-border space-y-4 text-sm font-body text-muted leading-relaxed">
                          <p>
                            I maintained a 98% average in Grade 12 with a 4.0 unweighted GPA as a dedicated AP student for all four years.
                          </p>
                          <p>
                            AP courses completed include Advanced Functions, Calculus AB, Physics 1, Chemistry, and English. Currently self-studying AP Calculus BC and AP Physics C Electricity and Magnetism independently. Will be writing the AP Calculus AB exam in May 2026.
                          </p>
                          <p>
                            Clubs and activities include Model UN with participation in an in-house conference, VEX Robotics, DECA with a regional competition appearance at Brock University, Senior Reach, and Chess Club. Also served as a peer tutor for Mathematics inside of school.
                          </p>
                          <p>
                            Academic awards include the Grade 11 AP Advanced Functions Award and the top score at my school on the University of Waterloo Galois Math Contest.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
