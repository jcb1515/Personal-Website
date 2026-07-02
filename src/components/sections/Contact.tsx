"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";
import type { FormEvent, ReactElement } from "react";
import { Section } from "@/components/Section";
import { personalInfo } from "@/data/content";

export function Contact(): ReactElement {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);

    window.location.assign(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
  };

  return (
    <Section id="contact" eyebrow="Open channel / 07" title="Let's build something">
      <div className="grid gap-12 border-t border-[var(--line)] pt-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="max-w-lg text-base leading-8 text-[var(--muted)]">
              Have a role, project, or technical problem worth discussing? Send the details
              and I will respond within 24 hours.
            </p>
          </div>
          <div className="flex gap-2">
            <ContactLink href={`mailto:${personalInfo.email}`} label="Email">
              <Mail size={19} />
            </ContactLink>
            <ContactLink href={`https://${personalInfo.linkedin}`} label="LinkedIn">
              <Linkedin size={19} />
            </ContactLink>
            <ContactLink href={`https://${personalInfo.github}`} label="GitHub">
              <Github size={19} />
            </ContactLink>
          </div>
        </div>

        <form className="grid gap-6" onSubmit={handleSubmit}>
          <Field label="Name" name="name" type="text" autoComplete="name" />
          <Field label="Email" name="email" type="email" autoComplete="email" />
          <label className="grid gap-2 text-xs uppercase text-[var(--muted)]">
            Message
            <textarea
              name="message"
              required
              rows={7}
              className="resize-y border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm normal-case text-white outline-none transition-colors focus:border-[var(--signal-bright)]"
            />
          </label>
          <button type="submit" className="command command-primary justify-self-start">
            Open email draft <Send size={17} />
          </button>
        </form>
      </div>
    </Section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: "text" | "email";
  autoComplete: "name" | "email";
}

function Field({ label, name, type, autoComplete }: FieldProps): ReactElement {
  return (
    <label className="grid gap-2 text-xs uppercase text-[var(--muted)]">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="min-h-12 border border-[var(--line)] bg-[var(--surface)] px-4 text-sm normal-case text-white outline-none transition-colors focus:border-[var(--signal-bright)]"
      />
    </label>
  );
}

interface ContactLinkProps {
  href: string;
  label: string;
  children: ReactElement;
}

function ContactLink({ href, label, children }: ContactLinkProps): ReactElement {
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
