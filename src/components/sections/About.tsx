"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/Avatar";
import { Section } from "@/components/Section";
import { personalInfo, skills } from "@/data/content";

export function About() {
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

      {/* Hobbies & Interests */}
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
          className="text-2xl font-heading text-primary border-l-4 border-primary pl-4 uppercase tracking-wide mb-2"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Hobbies & Interests
        </motion.h3>
        
        <motion.div 
          className="group relative bg-surface p-8 rounded-sm ring-1 ring-surface-border hover:ring-2 hover:ring-primary text-muted font-body leading-relaxed space-y-6 transition-all duration-300"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <div className="relative z-10 space-y-6">
            <p>
              I spend 6 to 8 hours a week weightlifting, both alone and with friends, and have been tracking my macros for two of my three years of training. I am a lifelong Toronto Raptors fan having watched them since age five, and have followed FC Barcelona closely for the past five years.
            </p>
            <p>
              My Coptic Christian faith is a central part of my life, attending church two to three times a week and being actively involved in my church community, with plans to continue that involvement at Waterloo. I am passionate about coding in my spare time and finding unique applications of AI. 
            </p>
            <p>
              I love to travel and have visited the USA, Dominican Republic, Egypt, and Jamaica.
            </p>
          </div>
        </motion.div>

        {/* Hobby Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { src: "/images/DR%201.jpeg", alt: "Dominican Republic 1" },
            { src: "/images/DR%202.jpeg", alt: "Dominican Republic 2" },
            { src: "/images/Church%20trip%20view.jpeg", alt: "Church Trip View" }
          ].map((img, index) => (
            <motion.div 
              key={index}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="aspect-video md:aspect-square relative bg-surface rounded-sm ring-1 ring-surface-border hover:ring-2 hover:ring-primary overflow-hidden flex items-center justify-center group transition-colors duration-300"
            >
              <span className="text-surface-light font-heading tracking-widest text-sm z-0">HOBBIES IMAGE {index + 1}</span>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="absolute inset-0 w-full h-full object-cover object-center opacity-100 transition-opacity duration-300"
                onError={(e) => { 
                  e.currentTarget.style.opacity = '0'; 
                }}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          className="mt-6 text-center text-sm font-body text-muted italic"
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        >
          The first two photos were taken at the Royalton Bavaro Resort in Punta Cana, and the last photo was taken on a church trip to The Valley.
        </motion.p>
      </motion.div>
    </Section>
  );
}
