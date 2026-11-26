import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  STATUS_LABELS,
  TECH_LABELS,
  TRACK_LABELS,
  type ProjectSummary,
} from "@/lib/types";

type ProjectRowProps = { project: ProjectSummary; className?: string };

export function ProjectRow({ project, className }: ProjectRowProps) {
  return (
    <li className={cn("group relative", className)}>
      <p className="font-mono text-xs text-muted-foreground md:pt-1.5">
        <span className="sr-only">Started </span>
        {project.startYear}
      </p>
      <div>
        <h2 className="text-lg font-medium">
          <Link
            href={`/projects/${project.slug}`}
            className="underline-offset-4 group-hover:underline after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:rounded-md focus-visible:after:ring-2 focus-visible:after:ring-ring"
          >
            {project.title}
          </Link>
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
        <p className="mt-1 text-xs text-muted-foreground">{project.role}</p>
      </div>
      <p className="text-sm">
        <span className="sr-only">Track: </span>
        {TRACK_LABELS[project.track]}
      </p>
      <p className="text-sm">
        <span className="sr-only">Stack: </span>
        {project.tech.length > 1
          ? project.tech.map((tech) => TECH_LABELS[tech]).join(" · ")
          : TECH_LABELS[project.tech[0]]}
      </p>
      <p className="text-sm">
        <span className="sr-only">Status: </span>
        {STATUS_LABELS[project.status]}
      </p>
    </li>
  );
}
