import { Skeleton } from "@/components/ui/skeleton";
import type { ProjectSummary } from "@/lib/types";
import { ProjectRow } from "./project-row";

const COLUMNS =
  "md:grid md:grid-cols-[3.5rem_minmax(0,2fr)_6rem_minmax(0,1.5fr)_7rem] md:gap-x-12";
const SUBGRID = "md:col-span-5 md:grid md:grid-cols-subgrid";
const ROW = `grid gap-y-2 border-b border-border py-6 md:gap-y-0 ${SUBGRID}`;

function ListHeader() {
  return (
    <div
      aria-hidden="true"
      className={`hidden border-b border-border py-3 font-mono text-xs tracking-widest text-muted-foreground uppercase ${SUBGRID}`}
    >
      <span>Year</span>
      <span>Project</span>
      <span>Track</span>
      <span>Stack</span>
      <span>Status</span>
    </div>
  );
}

export function ProjectList({
  projects,
}: {
  projects: readonly ProjectSummary[];
}) {
  return (
    <div className={COLUMNS}>
      <ListHeader />
      <ul className={SUBGRID}>
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} className={ROW} />
        ))}
      </ul>
    </div>
  );
}

export function ProjectListSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className={COLUMNS}>
      <ListHeader />
      <div className={SUBGRID}>
        {Array.from({ length: rows }, (_, i) => (
          <div key={i} className={ROW}>
            <Skeleton className="h-4 w-10" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-3 w-10" />
            </div>
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
}
