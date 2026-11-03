export const STATUS = ["In Progress", "Completed", "Hiatus"] as const;
export type ProjectStatus = (typeof STATUS)[number];

export const TRACK = ["Web", "Java", "Data & ML"] as const;
export type Track = (typeof TRACK)[number];

export const TECH = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "Python",
  "PyQt",
  "Android Java",
  "Computer Vision",
  "Data Processing",
  "NoSQL",
  "HTML",
  "CSS",
  "Express",
  "RESTful API",
  "Git",
] as const;
export type Tech = (typeof TECH)[number];

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  // Project Details
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  role: string;
  tech: Tech[];
  track: Track;
  status: ProjectStatus;
  startYear: number;
  coverImage: ProjectImage;
  repository: string;
  caseStudy: string;

  // Project Settings
  featured: boolean;
  published: boolean;
  sortOrder: number;
}

export type ProjectSummary = Pick<
  Project,
  "slug" | "title" | "tagline" | "role" | "tech" | "status" | "startYear"
>;
