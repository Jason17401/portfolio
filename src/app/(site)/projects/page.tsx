import { Suspense } from "react";
import { Container } from "@/components/layout/container";
import { getProjectSummaries } from "@/server/queries/projects";
import {
  ProjectList,
  ProjectListSkeleton,
} from "@/components/projects/project-list";
import { FilterBar, FilterBarSkeleton } from "@/components/projects/filter-bar";
import {
  filterProjects,
  hasActiveFilters,
  parseFilters,
} from "@/lib/project-filters";
import Link from "next/link";

async function ProjectCount() {
  const projects = await getProjectSummaries();
  const n = projects.length;
  return (
    <>
      {n} {n === 1 ? "project" : "projects"}
    </>
  );
}

async function ProjectBrowser({
  searchParams,
}: {
  searchParams: PageProps<"/projects">["searchParams"];
}) {
  const filters = parseFilters(await searchParams);
  const projects = await getProjectSummaries();
  const filteredProjects = filterProjects(projects, filters);
  const isFiltered = hasActiveFilters(filters);
  return (
    <>
      <FilterBar filters={filters} />
      <p aria-live="polite" className="sr-only">
        {isFiltered
          ? `Showing ${filteredProjects.length} of ${projects.length} projects`
          : ""}
      </p>
      {filteredProjects.length > 0 ? (
        <ProjectList projects={filteredProjects} />
      ) : (
        <p className="py-12 text-muted-foreground">
          {isFiltered ? (
            <>
              No projects match these filters.{" "}
              <Link
                href="/projects"
                className="text-foreground underline underline-offset-4"
              >
                Clear filters
              </Link>
            </>
          ) : (
            "No projects published yet."
          )}
        </p>
      )}
    </>
  );
}

function ProjectBrowserSkeleton() {
  return (
    <div role="status">
      <span className="sr-only">Loading projects</span>
      <FilterBarSkeleton />
      <ProjectListSkeleton />
    </div>
  );
}

export default function ProjectsPage({ searchParams }: PageProps<"/projects">) {
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
            <Suspense fallback={<ProjectBrowserSkeleton />}>
              <ProjectBrowser searchParams={searchParams} />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
