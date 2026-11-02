import Link from "next/link";
import { profile, navItems } from "@/lib/site";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";

export function NavBar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-medium">
          {profile.name}
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <nav aria-label="Main">
            <ul className="flex items-center gap-4 sm:gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
