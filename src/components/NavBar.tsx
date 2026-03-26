"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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

  if (!mounted) return null;

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 bg-background/90 backdrop-blur-md flex flex-col",
        scrolled ? "border-b border-primary shadow-[0_4px_30px_rgba(204,0,0,0.1)]" : ""
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto px-6 w-full flex items-center justify-between transition-all duration-300",
        scrolled ? "py-4" : "py-6"
      )}>
        <a href="/" className="font-heading text-2xl tracking-wider text-white hover:text-primary transition-colors">
          JB
        </a>

        {/* Desktop Nav */}
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

      {/* Mobile Scrollable Nav */}
      <div className="md:hidden w-full px-6 pb-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <nav className="flex items-center gap-6 min-w-max">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[15px] font-medium transition-colors relative flex items-center justify-center pb-1",
                  isActive ? "text-white" : "text-foreground hover:text-white"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 w-full h-[2px] bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
