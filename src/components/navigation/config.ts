export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: readonly NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Activities", href: "/activities" },
  { name: "Contact", href: "/contact" },
];
