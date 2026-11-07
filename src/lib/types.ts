export const STATUS_LABELS = {
  "in-progress": "In Progress",
  completed: "Completed",
  hiatus: "Hiatus",
} as const;
export type Status = keyof typeof STATUS_LABELS;
export const STATUS = Object.keys(STATUS_LABELS) as Status[];

export const TRACK_LABELS = {
  "data-ml": "Data & ML",
  web: "Web",
  java: "Java",
} as const;
export type Track = keyof typeof TRACK_LABELS;
export const TRACK = Object.keys(TRACK_LABELS) as Track[];

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

export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface ProjectDecision {
  title: string;
  reason: string;
  tradeoff: string;
}

export interface ProjectContent {
  coverImage?: ProjectImage;
  highlights?: ProjectHighlight[];
  overview?: string;
  problem?: string;
  constraints?: string;
  architecture?: string;
  decisions?: ProjectDecision[];
  challenges?: string;
  results?: string;
  next?: string;
  aiUsage?: string;
}

export interface Project {
  // Project Details
  slug: string;
  title: string;
  tagline: string;
  role: string;
  tech: Tech[];
  track: Track;
  status: Status;
  startYear: number;
  repository: string;
  content: ProjectContent;

  // Project Settings
  featured: boolean;
  published: boolean;
  sortOrder: number;
}

export type ProjectSummary = Pick<
  Project,
  "slug" | "title" | "tagline" | "role" | "tech" | "status" | "startYear"
>;
