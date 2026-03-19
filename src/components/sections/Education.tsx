"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/content";

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((item, index) => (
          <motion.div 
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="p-8 bg-surface border border-surface-border rounded-sm relative overflow-hidden group hover:border-primary transition-colors duration-300"
          >
            <GraduationCap 
              size={120} 
              className="absolute -right-6 -bottom-6 text-surface-light opacity-50 group-hover:text-primary/10 transition-colors duration-500" 
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-heading text-white mb-2">{item.institution}</h3>
              <h4 className="text-xl font-body text-primary mb-2">{item.period}</h4>
              <p className="text-muted leading-relaxed">
                {item.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
