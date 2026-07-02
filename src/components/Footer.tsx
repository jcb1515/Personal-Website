import { Github, Linkedin, Mail, Phone } from "lucide-react";
import type { ReactElement } from "react";
import { personalInfo } from "@/data/content";

export function Footer(): ReactElement {
  return (
    <footer className="border-t border-[var(--line)] bg-black">
      <div className="page-shell grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="technical-label mb-3">End of transmission</div>
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} {personalInfo.name}. Built in Burlington, Ontario.
          </p>
        </div>
        <div className="flex gap-2">
          <FooterLink href={`mailto:${personalInfo.email}`} label="Email">
            <Mail size={19} />
          </FooterLink>
          <FooterLink href={`tel:${personalInfo.phone}`} label="Phone">
            <Phone size={19} />
          </FooterLink>
          <FooterLink href={`https://${personalInfo.linkedin}`} label="LinkedIn">
            <Linkedin size={19} />
          </FooterLink>
          <FooterLink href={`https://${personalInfo.github}`} label="GitHub">
            <Github size={19} />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  label: string;
  children: ReactElement;
}

function FooterLink({ href, label, children }: FooterLinkProps): ReactElement {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="flex min-h-11 min-w-11 items-center justify-center border border-[var(--line)] text-[var(--muted)] transition-colors hover:border-[var(--signal)] hover:text-white"
    >
      {children}
    </a>
  );
}
