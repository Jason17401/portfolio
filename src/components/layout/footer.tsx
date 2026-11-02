import Link from "next/link";
import { profile } from "@/lib/site";
import { Container } from "./container";

const linkClass = "underline underline-offset-4 hover:text-foreground";

async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="mx-auto flex flex-col gap-4 px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CopyrightYear /> {profile.name} · Built with Next.js ·{" "}
          <a href={profile.links.portfolioRepo} className={linkClass}>
            Source on GitHub
          </a>
        </p>
        <nav aria-label="Contact and Socials">
          <ul className="flex gap-4">
            <li>
              <Link href="/contact" className={linkClass}>
                Email
              </Link>
            </li>
            <li>
              <a href={profile.links.github} className={linkClass}>
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.links.linkedin} className={linkClass}>
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
