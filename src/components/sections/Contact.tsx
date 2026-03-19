"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { personalInfo } from "@/data/content";

export function Contact() {
  return (
    <Section id="contact" title="" className="text-center min-h-[70vh] flex flex-col justify-center">
      <motion.div 
        className="max-w-2xl mx-auto space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, y: 0,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <motion.h2 
          className="text-5xl md:text-7xl font-heading text-white"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          GET IN TOUCH
        </motion.h2>
        
        <motion.p 
          className="text-muted text-xl font-body leading-relaxed"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          I&apos;m currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
        </motion.p>
        
        <motion.div 
          variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"
        >
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-block px-12 py-5 border-2 border-primary text-primary font-heading text-2xl tracking-widest hover:bg-primary hover:text-white transition-colors duration-300"
          >
            SAY HELLO
          </a>
          <a 
            href={personalInfo.resumePath}
            download="James_Boutros_Resume.pdf"
            className="inline-block px-12 py-5 bg-primary text-white border-2 border-primary font-heading text-2xl tracking-widest hover:opacity-90 transition-colors duration-300"
          >
            DOWNLOAD RESUME
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
