import "server-only";
import { cache } from "react";
import type { Project, ProjectSummary } from "@/lib/types";

//   {
//     slug: "",
//     title: "",
//     tagline: "",
//     role: "",
//     tech: [],
//     track: "data-ml",
//     status: "in-progress",
//     startYear: 0,
//     repository: "",
//     content: {},
//     featured: false,
//     published: false,
//     sortOrder: 1,
//   },

const projects: Project[] = [
  {
    slug: "book-selling-pipeline",
    title: "Book Selling Pipeline",
    tagline:
      "Capturing photos of books to automate online marketplace listings.",
    role: "Solo",
    tech: ["Data Processing", "PyQt", "Python"],
    track: "data-ml",
    status: "in-progress",
    startYear: 2026,
    repository: "https://github.com/Jason17401/Book-Selling-Pipeline",
    content: {},
    featured: false,
    published: true,
    sortOrder: 1,
  },
  {
    slug: "chess-app-project",
    title: "Chess App",
    tagline: "A Java chess app with beginner-level engines",
    role: "Solo",
    tech: ["Java"],
    track: "java",
    status: "in-progress",
    startYear: 2025,
    repository: "https://github.com/Friend-Projects/Chess-App-Project",
    content: {},
    featured: false,
    published: true,
    sortOrder: 2,
  },
];

const bySortOrder = (a: Project, b: Project) => a.sortOrder - b.sortOrder;
const isPublished = (p: Project) => p.published;

const toSummary = ({
  slug,
  title,
  tagline,
  role,
  tech,
  track,
  status,
  startYear,
  published,
}: Project) => {
  return {
    slug,
    title,
    tagline,
    role,
    tech,
    track,
    status,
    startYear,
    published,
  };
};

const getPublishedProjects = cache(async (): Promise<readonly Project[]> =>
  projects.filter(isPublished).sort(bySortOrder),
);

export const getProjectSummaries = cache(
  async (): Promise<readonly ProjectSummary[]> =>
    (await getPublishedProjects()).map(toSummary),
);

export const getFeaturedProject = cache(
  async (): Promise<Project | undefined> =>
    (await getPublishedProjects()).find((project) => project.featured),
);

export const getProjectBySlug = cache(
  async (slug: string): Promise<Project | undefined> =>
    (await getPublishedProjects()).find((project) => project.slug === slug),
);
