"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
}

export function Section({ id, className, children, title }: SectionProps) {
  return (
    <section id={id} className={`py-24 ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading mb-12"
          >
            {title}
          </motion.h2>
        )}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
