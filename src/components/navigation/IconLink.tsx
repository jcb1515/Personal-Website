import type { ReactElement } from "react";

interface IconLinkProps {
  href: string;
  label: string;
  children: ReactElement;
}

export function IconLink({ href, label, children }: IconLinkProps): ReactElement {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="flex min-h-11 min-w-11 items-center justify-center border border-transparent text-[var(--muted)] transition-colors hover:border-[var(--line)] hover:text-white"
    >
      {children}
    </a>
  );
}
