"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { projects, microloop } from "@/data/content";
import Image from "next/image";
import { FileText, Smartphone, Code, Paintbrush } from "lucide-react";

export function Projects() {
  const softwareProjects = projects.filter(p => p.type === "software");
  const hardwareProjects = projects.filter(p => p.type === "hardware");

  const ProjectCard = ({ project }: { project: any }) => (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      className="group relative h-full flex flex-col bg-surface border border-surface-border rounded-sm overflow-hidden transition-all duration-300"
    >
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 z-0 pointer-events-none" />
      <div className="absolute -inset-1 rounded-sm bg-gradient-to-r from-primary to-primary opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500 z-0 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full bg-surface">
        <div className="relative w-full border-b-2 border-primary shadow-[0_0_30px_rgba(204,0,0,0.3)] overflow-hidden flex items-center justify-center aspect-video bg-[#0a0a0a]">
           <div className="absolute inset-0 flex items-center justify-center text-primary font-heading tracking-widest bg-background z-0">
             {project.type === 'hardware' ? 'CIRCUIT IMAGE' : 'PROJECT SCREENSHOT'}
           </div>
           
           <div className="absolute inset-4 z-10 flex items-center justify-center">
             <Image src={project.image} alt={project.title} fill className="object-contain" unoptimized onError={(e) => { e.currentTarget.style.display = 'none'; }} />
           </div>

           {project.schematicImage && (
              <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center p-4">
                <div className="absolute inset-0 flex items-center justify-center text-primary font-heading tracking-widest z-0">
                  SCHEMATIC IMAGE
                </div>
                {project.schematicImage.endsWith('.pdf') ? (
                  <iframe src={`${project.schematicImage}#toolbar=0&view=FitH`} className="relative w-full h-full z-30 pointer-events-auto border border-primary/20 rounded-sm shadow-2xl bg-white" title={project.title + " Schematic"} />
                ) : (
                  <div className="absolute inset-4 z-30 flex items-center justify-center">
                    <Image src={project.schematicImage} alt={project.title + " Schematic"} fill className="object-contain" unoptimized onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  </div>
                )}
              </div>
           )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-2xl font-heading text-white group-hover:text-primary transition-colors mb-3">{project.title}</h3>
          <p className="text-muted text-sm font-body flex-1 mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="mt-auto flex flex-col gap-4">
            <ul className="flex flex-wrap gap-2 text-xs font-body text-surface-border">
              {project.tech.map((tech: string) => (
                <li key={tech} className="px-2 py-1 bg-surface-light text-primary border border-surface-border rounded-sm">
                  {tech}
                </li>
              ))}
            </ul>
            {project.codePath && (
              <a
                href={project.codePath}
                download
                className="mt-2 text-center py-3 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-heading tracking-widest flex items-center justify-center gap-2"
              >
                <FileText size={16} /> DOWNLOAD CODE ({project.codePath.split('.').pop()?.toUpperCase()})
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <Section id="projects" title="Projects">
      
      {/* ──────────── MICROLOOP SHOWCASE ──────────── */}
      <div className="mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Header */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-sm bg-primary/10 border-2 border-primary flex items-center justify-center shadow-[0_0_25px_rgba(204,0,0,0.3)]">
                <Smartphone size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-heading text-white">MICROLOOP</h3>
                <p className="text-primary font-body text-sm tracking-widest">iOS APPLICATION — APPLE CO-OP</p>
              </div>
            </div>
            <p className="text-muted font-body text-lg leading-relaxed max-w-4xl">
              {microloop.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {microloop.tech.map(tech => (
                <span key={tech} className="px-4 py-2 bg-surface border border-surface-border text-primary font-body text-sm rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Designed Features */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Paintbrush size={22} className="text-primary" />
              <h4 className="text-2xl font-heading text-white tracking-wider">DESIGNED FEATURES</h4>
              <div className="flex-1 h-px bg-surface-border ml-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {microloop.designedFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="group bg-surface border border-surface-border rounded-sm overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative aspect-video w-full border-b-2 border-primary shadow-[0_0_20px_rgba(204,0,0,0.2)] bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="text-lg font-heading text-white mb-2 group-hover:text-primary transition-colors">{feature.title}</h5>
                    <p className="text-muted font-body text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coded Features */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Code size={22} className="text-primary" />
              <h4 className="text-2xl font-heading text-white tracking-wider">CODED FEATURES</h4>
              <div className="flex-1 h-px bg-surface-border ml-4" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {microloop.codedFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className={`group bg-surface border border-surface-border rounded-sm overflow-hidden hover:border-primary/50 transition-all duration-300 ${i === microloop.codedFeatures.length - 1 && microloop.codedFeatures.length % 3 === 2 ? 'lg:col-start-2' : ''} ${i === microloop.codedFeatures.length - 1 && microloop.codedFeatures.length % 2 === 1 ? 'col-span-2 lg:col-span-1 max-w-sm mx-auto lg:max-w-none' : ''}`}
                >
                  <div className="relative aspect-[9/16] w-full border-b-2 border-primary shadow-[0_0_20px_rgba(204,0,0,0.2)] bg-black overflow-hidden">
                    <video
                      src={feature.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="text-lg font-heading text-white mb-2 group-hover:text-primary transition-colors">{feature.title}</h5>
                    <p className="text-muted font-body text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-surface-border my-12" />

      {/* ──────────── SOFTWARE PROJECTS ──────────── */}
      <div className="mb-12">
        <h3 className="text-3xl font-heading text-white mb-8 border-b border-surface-border pb-4">Software Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softwareProjects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
      </div>

      {/* ──────────── HARDWARE PROJECTS ──────────── */}
      <div>
        <h3 className="text-3xl font-heading text-white mb-8 border-b border-surface-border pb-4">Hardware &amp; Circuit Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hardwareProjects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
      </div>

    </Section>
  );
}
