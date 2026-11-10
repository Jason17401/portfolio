type NavItem = { href: string; label: string };

export const profile = {
  name: "Jason Perng",
  role: "Software Engineering Graduate",
  location: "Auckland, NZ",
  email: { user: "jason48.p", domain: "gmail.com" },
  links: {
    github: "https://github.com/Jason17401",
    linkedin: "https://www.linkedin.com/in/jason-perng-058505235",
    portfolioRepo: "https://github.com/Jason17401/portfolio",
  },
} as const;

export const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const satisfies readonly NavItem[];

export const siteUrl = "https://jasonperng.vercel.app";
