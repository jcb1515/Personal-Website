"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/Avatar";
import { Section } from "@/components/Section";
import { personalInfo, skills } from "@/data/content";

export function About() {
  const softSkills = skills.find(s => s.category === "Soft Skills")?.items || [];

  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Avatar size={320} src="/james_about.jpg" />
        </motion.div>
        
        <div className="flex-1 space-y-6 text-muted font-body text-lg">
          {personalInfo.bio.map((paragraph, idx) => (
             <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
               <p className={idx === 0 ? "text-2xl leading-relaxed text-white font-heading tracking-wide" : ""}>
                 {paragraph}
               </p>
             </motion.div>
          ))}
        </div>
      </div>

      {/* Core Qualities */}
      <motion.div
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.h3 
          className="text-2xl font-heading text-primary border-l-4 border-primary pl-4 uppercase tracking-wide mb-8"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Core Qualities
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {softSkills.map((trait) => (
            <motion.div 
              key={trait.name}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="group p-5 bg-surface rounded-sm border border-surface-border hover:border-primary/50 transition-all duration-300"
            >
              <h4 className="text-lg font-heading text-white group-hover:text-primary transition-colors mb-2 capitalize">{trait.name}</h4>
              <p className="text-muted font-body text-xs leading-relaxed">{trait.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
