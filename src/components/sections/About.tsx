"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ReactElement } from "react";
import { Section } from "@/components/Section";
import { personalInfo } from "@/data/content";
import { createEntryTransition } from "@/lib/motion";

const principles = [
  {
    index: "01",
    title: "Systems thinking",
    text: "I like work where software meets a physical system: sensors, signals, interfaces, and decisions.",
  },
  {
    index: "02",
    title: "Disciplined practice",
    text: "Whether I am lifting, studying, or building, I improve through consistency and measured progress.",
  },
  {
    index: "03",
    title: "Community",
    text: "My Coptic Christian faith, family, and service keep ambition connected to responsibility.",
  },
] as const;

const lifestyleImages = [
  { src: "/images/DR%201.jpeg", alt: "James in Punta Cana" },
  { src: "/images/DR%202.jpeg", alt: "James travelling in Punta Cana" },
  { src: "/images/Church%20trip%20view.jpeg", alt: "View from a church community trip" },
] as const;

const outsideDetails = [
  {
    title: "Faith & community",
    text: "My Coptic Christian faith keeps ambition connected to service, family, and responsibility to the people around me.",
  },
  {
    title: "Training",
    text: "Six to eight hours of weekly training gives me a measurable practice in patience, consistency, and incremental progress.",
  },
  {
    title: "Sport & curiosity",
    text: "I follow FC Barcelona and the Toronto Raptors, travel when I can, and keep exploring practical uses for emerging AI tools.",
  },
] as const;

export function About(): ReactElement {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="about" eyebrow="Profile / 01" title="Built through curiosity and consistency">
      <div className="grid gap-10 border-y border-[var(--line)] py-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-16">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={createEntryTransition(0)}
          className="media-frame relative aspect-[4/5] overflow-hidden bg-[var(--surface)]"
        >
          <Image
            src="/james_about.jpg"
            alt="Portrait of James Boutros"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-between bg-black/80 px-5 py-4 text-[0.68rem] uppercase text-[var(--muted)]">
            <span>Burlington, Ontario</span>
            <span>Incoming Waterloo EE</span>
          </div>
        </motion.div>

        <div className="flex flex-col justify-between gap-12">
          <div className="space-y-7">
            {personalInfo.bio.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={createEntryTransition(index * 0.06)}
                className={
                  index === 0
                    ? "max-w-3xl font-heading text-3xl leading-tight text-white sm:text-4xl"
                    : "max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base"
                }
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="space-y-2">
            {principles.map((principle) => (
              <div
                key={principle.index}
                className="content-row grid gap-3 border-y border-r border-[#5f1717] py-5 sm:grid-cols-[4rem_12rem_1fr] sm:items-start"
                style={{ borderLeftColor: "var(--signal)", borderLeftWidth: "3px" }}
              >
                <span className="technical-label">{principle.index}</span>
                <h2 className="text-lg">{principle.title}</h2>
                <p className="text-sm leading-6 text-[var(--muted)]">{principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="flex flex-col gap-8">
            <div>
              <div className="technical-label mb-4">Outside the lab</div>
              <h2 className="max-w-xl text-4xl leading-tight sm:text-5xl">
                Faith, training, sport, and travel keep the work grounded.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
              I train six to eight hours each week, follow FC Barcelona and the Toronto
              Raptors, stay active in my church community, and look for useful applications
              of AI in my spare time.
            </p>
          </div>
          <div className="divide-y divide-[#5f1717] border-y border-[#5f1717]">
            {outsideDetails.map((detail, index) => (
              <div key={detail.title} className="content-row grid gap-3 py-5 sm:grid-cols-[3rem_1fr]">
                <span className="technical-label">0{index + 1}</span>
                <div>
                  <h3 className="text-lg">{detail.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-[var(--muted)]">{detail.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {lifestyleImages.map((image) => (
            <div key={image.src} className="media-frame relative aspect-[3/4] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
              />
            </div>
          ))}
        </div>
        <p className="border-x-2 border-b-2 border-[#8b1111] bg-black/85 px-5 py-4 text-xs leading-6 text-[var(--muted)] transition-colors hover:border-[var(--signal-bright)] hover:text-[var(--signal-bright)]">
          The first two photos were taken at the Royalton Bavaro Resort in Punta Cana,
          and the last photo was taken on a church trip to The Valley.
        </p>
      </div>
    </Section>
  );
}
