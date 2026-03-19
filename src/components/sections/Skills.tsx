"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { skills } from "@/data/content";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-col gap-16">
        {skills.map((category, index) => (
          <motion.div 
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-col gap-6"
          >
            {/* Category Header */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h3 className="text-2xl font-heading text-primary border-l-4 border-primary pl-4 uppercase tracking-wide mb-2">
                {category.category}
              </h3>
              <p className="text-muted font-body text-sm leading-relaxed pl-5">
                {category.summary}
              </p>
            </motion.div>
            
            {/* Skill Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="group p-5 bg-surface border border-surface-border rounded-sm hover:border-primary/50 transition-all duration-300"
                >
                  <h4 className="text-lg font-heading text-white group-hover:text-primary transition-colors mb-2">
                    {skill.name}
                  </h4>
                  <p className="text-muted font-body text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
