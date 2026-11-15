import { Suspense } from "react";
import { Container } from "@/components/layout/container";
import { getProjectSummaries } from "@/server/queries/projects";

async function ProjectCount() {
  const projects = await getProjectSummaries();
  const n = projects.length;
  return (
    <>
      {n} {n === 1 ? "project" : "projects"}{" "}
    </>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <header className="pt-16 pb-10 md:pt-24">
        <Container>
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            <Suspense
              fallback={<span className="invisible">Index · 00 projects</span>}
            >
              Index · <ProjectCount />
            </Suspense>
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Projects
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Everything I have built with a working prototype. Each one links to
            further details of the problem and subsequent solution.
          </p>
        </Container>
      </header>
      <section aria-labelledby="project-list" className="pb-16 md:pb-24">
        <Container>
          <div className="border-t border-rule">
            <div aria-hidden="true" className="space-y-4">
              <div className="mt-4 h-12 rounded-md bg-muted motion-safe:animate-pulse" />
              <div className="h-6 rounded-md bg-muted motion-safe:animate-pulse" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
