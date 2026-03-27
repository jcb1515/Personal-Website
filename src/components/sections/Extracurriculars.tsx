"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Check } from "lucide-react";
import { extracurriculars } from "@/data/content";

export function Extracurriculars() {
  return (
    <Section id="extracurriculars" title="Extracurriculars & Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {extracurriculars.map((item, index) => (
          <motion.div 
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col md:flex-row items-start gap-4 p-6 bg-surface rounded-sm ring-1 ring-surface-border hover:ring-2 hover:ring-primary hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            <div className="flex-shrink-0 w-8 h-8 mt-1 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
              <Check size={16} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-heading text-white mb-2">{item.title}</h3>
              <p className="text-muted font-body leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
