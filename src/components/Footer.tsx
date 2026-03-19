import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "@/data/content";

export function Footer() {
  return (
    <footer className="w-full border-t border-surface-border bg-surface py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm font-body">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
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
    </footer>
  );
}
