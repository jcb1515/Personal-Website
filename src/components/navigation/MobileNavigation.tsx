"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactElement } from "react";
import { IconLink } from "@/components/navigation/IconLink";
import { navLinks } from "@/components/navigation/config";
import { personalInfo } from "@/data/content";

interface MobileNavigationProps {
  open: boolean;
  reducedMotion: boolean;
}

export function MobileNavigation({ open, reducedMotion }: MobileNavigationProps): ReactElement {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-navigation"
          initial={reducedMotion ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="h-[calc(100dvh-4.75rem)] border-t border-[var(--line)] bg-black xl:hidden"
        >
          <nav className="page-shell flex h-full flex-col py-6" aria-label="Mobile navigation">
            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex min-h-14 items-center justify-between text-lg text-white"
                >
                  <span>{link.name}</span>
                  <span className="technical-label">{String(index + 1).padStart(2, "0")}</span>
                </Link>
              ))}
            </div>
            <a
              href={personalInfo.resumePath}
              download={personalInfo.resumeFilename}
              className="command command-primary mt-6 w-full"
            >
              Download resume <Download size={17} />
            </a>
            <div className="mt-auto grid grid-cols-4 gap-2 pb-6">
              <IconLink href={`mailto:${personalInfo.email}`} label="Email">
                <Mail size={20} />
              </IconLink>
              <IconLink href={`tel:${personalInfo.phone}`} label="Phone">
                <Phone size={20} />
              </IconLink>
              <IconLink href={`https://${personalInfo.linkedin}`} label="LinkedIn">
                <Linkedin size={20} />
              </IconLink>
              <IconLink href={`https://${personalInfo.github}`} label="GitHub">
                <Github size={20} />
              </IconLink>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
