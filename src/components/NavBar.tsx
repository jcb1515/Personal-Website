"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { ReactElement } from "react";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { navLinks } from "@/components/navigation/config";
import { personalInfo } from "@/data/content";

export function NavBar(): ReactElement {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 24);
      if (Math.abs(delta) > 6) {
        setIsVisible(currentScrollY < 120 || delta < 0);
        lastScrollY.current = currentScrollY;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      animate={{ y: isVisible || isOpen ? 0 : "-100%" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.24, ease: [0.22, 1, 0.36, 1] }
      }
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${isScrolled || isOpen ? "border-[var(--line)] bg-black/95" : "border-transparent bg-black/45"} backdrop-blur-xl`}
    >
      <div className="page-shell flex h-[4.75rem] items-center justify-between">
        <Link
          href="/"
          className="flex min-h-11 min-w-11 items-center font-heading text-2xl font-semibold text-white"
          aria-label="JB - James Boutros home"
        >
          JB
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex min-h-11 items-center text-[0.72rem] font-semibold uppercase text-[var(--muted)] transition-colors hover:text-white ${isActive ? "text-white" : ""}`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="active-route"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--signal-bright)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <a
          href={personalInfo.resumePath}
          download={personalInfo.resumeFilename}
          className="command hidden min-h-11 px-4 xl:flex"
        >
          Resume <Download size={16} />
        </a>

        <button
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center border border-[var(--line)] text-white xl:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <MobileNavigation open={isOpen} reducedMotion={shouldReduceMotion ?? false} />
    </motion.header>
  );
}
