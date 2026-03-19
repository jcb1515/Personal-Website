"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative border-l border-surface-border ml-3 md:ml-0 md:pl-0">
        {experience.map((item, index) => (
          <motion.div 
            key={index}
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            className="mb-12 relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className="absolute w-4 h-4 bg-primary rounded-full -left-[8.5px] top-6 border-4 border-background"
            />
            
            <div className="p-8 bg-surface border border-surface-border rounded-sm hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(204,0,0,0.2)] transition-all duration-300 flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-heading text-white">{item.role}</h3>
                    <h4 className="text-lg font-body text-primary">{item.company}</h4>
                  </div>
                  <span className="inline-block px-3 py-1 bg-surface-light text-muted font-body text-sm border border-surface-border whitespace-nowrap self-start md:self-auto">
                    {item.period}
                  </span>
                </div>
                <p className="text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
