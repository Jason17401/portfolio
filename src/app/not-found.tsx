import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <SiteShell>
      <section className="py-24">
        <Container>
          <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
            404
          </p>
          <h1 className="mt-4 text-4xl font-bold">
            This page doesn&apos;t exist
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            The link might be broken, or the page may have moved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className={buttonVariants()}>
              Back to home
            </Link>
            <Link
              href="/projects"
              className={buttonVariants({ variant: "outline" })}
            >
              See my projects
            </Link>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
