import {
  FILTER_KEY,
  FilterKey,
  ProjectFilters,
  ProjectSummary,
  STATUS_LABELS,
  TECH_LABELS,
  TRACK_LABELS,
} from "./types";

type RawParams = Record<string, string | string[] | undefined>;

const first = (value: string | string[] | undefined): string | undefined =>
  Array.isArray(value) ? value[0] : value;

const isKeyOf = <T extends object>(
  labels: T,
  value: unknown,
): value is keyof T =>
  typeof value === "string" && Object.hasOwn(labels, value);

export function parseFilters(params: RawParams): ProjectFilters {
  const track = first(params.track)?.toLowerCase();
  const tech = first(params.tech)?.toLowerCase();
  const status = first(params.status)?.toLowerCase();
  return {
    track: isKeyOf(TRACK_LABELS, track) ? track : undefined,
    tech: isKeyOf(TECH_LABELS, tech) ? tech : undefined,
    status: isKeyOf(STATUS_LABELS, status) ? status : undefined,
  };
}

export function hasActiveFilters(filters: ProjectFilters): boolean {
  return FILTER_KEY.some((key) => filters[key] !== undefined);
}

export function filtersHref(
  current: ProjectFilters,
  key: FilterKey,
  value: string | undefined,
): string {
  const params = new URLSearchParams();
  for (const k of FILTER_KEY) {
    const v = k === key ? value : current[k];
    if (v) params.set(k, v);
  }
  const query = params.toString();
  return query ? `/projects?${query}` : "/projects";
}

export function filterProjects(
  projects: readonly ProjectSummary[],
  filters: ProjectFilters,
): ProjectSummary[] {
  return projects.filter(
    (project) =>
      (!filters.track || project.track === filters.track) &&
      (!filters.status || project.status === filters.status) &&
      (!filters.tech || project.tech.includes(filters.tech)),
  );
}
