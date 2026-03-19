"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { personalInfo } from "@/data/content";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden">
      {/* Animated Hex/Geometric Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#cc0000 1px, transparent 1px), linear-gradient(90deg, #cc0000 2px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Avatar size={160} glow={true} initials="JB" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-primary font-body tracking-widest mb-4 uppercase"
        >
          Hello, my name is
        </motion.div>
        
        <div className="overflow-hidden mb-6 flex space-x-2">
          {personalInfo.name.split(" ").map((word, wordIdx) => (
            <motion.span key={wordIdx} className="inline-block overflow-hidden">
              <motion.span
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.3 + wordIdx * 0.1 }}
                className="inline-block text-6xl md:text-8xl lg:text-9xl font-heading tracking-tight"
              >
                {word}
              </motion.span>
            </motion.span>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-muted text-lg md:text-xl font-body max-w-2xl mb-12"
        >
          {personalInfo.tagline}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.8 } }
          }}
        >
          <motion.a
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
            href="/projects"
            className="px-8 py-4 border-2 border-surface-border text-white font-heading text-lg md:text-xl tracking-wide rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
          >
            View Projects
          </motion.a>
          
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
          >
            <a
              href={personalInfo.resumePath}
              download="James_Boutros_Resume.pdf"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-heading text-lg md:text-xl tracking-wide rounded-sm overflow-hidden animate-pulse hover:animate-none hover:bg-primary-hover transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume <Download size={20} />
              </span>
            </a>
          </motion.div>

          <motion.a
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
            href={`mailto:${personalInfo.email}`}
            className="px-8 py-4 border-2 border-surface-border text-white font-heading text-lg md:text-xl tracking-wide rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
