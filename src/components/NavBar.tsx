"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Activities", href: "/activities" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 bg-background/90 backdrop-blur-md",
        scrolled ? "border-b border-primary py-4 shadow-[0_4px_30px_rgba(204,0,0,0.1)]" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="/" className="font-heading text-2xl tracking-wider text-white hover:text-primary transition-colors">
          JB
        </a>

        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-primary transition-colors p-2 z-50 relative"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group flex items-center justify-center",
                  isActive ? "text-white" : "text-foreground hover:text-white"
                )}
              >
                {link.name}
                {isActive ? (
                  <span className="absolute -bottom-2 w-1.5 h-1.5 bg-primary" />
                ) : (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <a href={`mailto:${personalInfo.email}`} className="text-muted hover:text-primary transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
          <a href={`tel:${personalInfo.phone}`} className="text-muted hover:text-primary transition-colors">
            <Phone size={20} />
            <span className="sr-only">Phone</span>
          </a>
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-start overflow-y-auto pt-24 pb-12 px-6"
          >
            <nav className="flex flex-col items-center gap-6 w-full max-w-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-3xl font-heading tracking-widest transition-all relative flex items-center justify-center w-full py-3 text-center",
                      isActive ? "text-white" : "text-foreground hover:text-white"
                    )}
                  >
                    <span className="relative">
                      {link.name}
                      {isActive && (
                        <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary" />
                      )}
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-16 flex items-center gap-8">
              <a href={`mailto:${personalInfo.email}`} className="text-muted hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors">
                <Github size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
