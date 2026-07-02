"use client";

import Link from "next/link";
import { Apple, ArrowRight, Code2, Cpu, Download, Mail } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactElement } from "react";
import { personalInfo } from "@/data/content";
import { createEntryTransition } from "@/lib/motion";
import { HeroEvidence } from "@/components/home/HeroEvidence";
import { HeroSceneLayer } from "@/components/scene/HeroSceneLayer";

interface ProofPoint {
  label: string;
  detail: string;
  icon: typeof Apple;
}

const proofPoints: readonly ProofPoint[] = [
  { label: "Apple / CEC", detail: "iOS application development", icon: Apple },
  { label: "Embedded systems", detail: "Four hardware and firmware builds", icon: Cpu },
  { label: "Software", detail: "React, Next.js, Swift, C++", icon: Code2 },
];

export function Hero(): ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 96]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.25]);
  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip border-b border-[var(--line)] bg-black"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={shouldReduceMotion ? undefined : { y: sceneY, opacity: sceneOpacity }}
      >
        <HeroSceneLayer />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-black/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-[-8%] z-[1] w-[62%] bg-black/80 blur-3xl"
        aria-hidden="true"
      />

      <div className="page-shell relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-center pb-16 pt-28 md:min-h-[calc(100svh-5rem)] md:pb-20 md:pt-32">
        <motion.div
          {...reveal}
          transition={createEntryTransition(0)}
          className="mb-7 flex items-center gap-4"
        >
          <span className="h-0.5 w-9 bg-[var(--signal-bright)]" />
          <span className="technical-label text-[var(--muted)]">
            Builder · problem solver · engineer
          </span>
        </motion.div>

        <h1
          className="max-w-5xl text-[clamp(4rem,11vw,10.5rem)] leading-[0.78] tracking-normal"
          style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
        >
          {personalInfo.name}
        </h1>

        <p className="mt-8 max-w-3xl text-base text-[var(--foreground)] sm:text-xl md:text-2xl">
          {personalInfo.tagline}
        </p>

        <motion.div
          {...reveal}
          transition={createEntryTransition(0.16)}
          className="mt-7 flex max-w-3xl flex-wrap gap-x-7 gap-y-3"
        >
          {proofPoints.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-xs font-semibold uppercase text-[var(--muted)]"
            >
              <Icon size={16} className="text-[var(--signal-bright)]" />
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          {...reveal}
          transition={createEntryTransition(0.2)}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Link href="/projects" className="command command-primary min-w-48">
            Explore work <ArrowRight size={17} />
          </Link>
          <a
            href={personalInfo.resumePath}
            className="command min-w-48"
            download={personalInfo.resumeFilename}
          >
            Download resume <Download size={17} />
          </a>
          <Link href="/contact" className="command min-w-48">
            Contact <Mail size={17} />
          </Link>
        </motion.div>

        <div className="absolute bottom-7 left-0 hidden text-[0.62rem] uppercase text-[var(--quiet)] md:block">
          <div>TIME 10.00ms/div</div>
          <div>TRIG CH1 ↑ 0.00V</div>
        </div>
      </div>

      <HeroEvidence />
    </section>
  );
}
