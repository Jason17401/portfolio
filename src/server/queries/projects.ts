import "server-only";
import { cache } from "react";
import type { Project, ProjectSummary } from "@/lib/types";

//   {
//     slug: "",
//     title: "",
//     tagline: "",
//     role: "",
//     tech: [],
//     track: "Data & ML",
//     status: "In Progress",
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
    tech: ["Data Processing", "PyQt", "Python", "Git"],
    track: "Data & ML",
    status: "In Progress",
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
    track: "Java",
    status: "In Progress",
    startYear: 2025,
    repository: "https://github.com/Friend-Projects/Chess-App-Project",
    content: {},
    featured: false,
    published: true,
    sortOrder: 2,
  },
];

const bySortOrder = (a: Project, b: Project) => a.sortOrder - b.sortOrder;

export const getPublishedProjects = cache(
  async (): Promise<readonly Project[]> => {
    return projects.filter((project) => project.published).sort(bySortOrder);
  },
);

export const getProjectSummaries = cache(
  async (): Promise<ProjectSummary[]> => {
    const published = await getPublishedProjects();
    return published.map(
      ({ slug, title, tagline, role, tech, status, startYear }) => ({
        slug,
        title,
        tagline,
        role,
        tech,
        status,
        startYear,
      }),
    );
  },
);

export const getFeaturedProject = cache(
  async (): Promise<Project | undefined> => {
    const published = await getPublishedProjects();
    return published.find((project) => project.featured);
  },
);

export const getProjectBySlug = cache(
  async (slug: string): Promise<Project | undefined> => {
    const published = await getPublishedProjects();
    return published.find((project) => project.slug === slug);
  },
);
