import type { ReactNode } from "react";
import { NavBar } from "./nav-bar";
import { Footer } from "./footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to Content
      </a>
      <NavBar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
