export const STATUS_LABELS = {
  "in-progress": "In Progress",
  completed: "Completed",
  hiatus: "Hiatus",
} as const;
export type Status = keyof typeof STATUS_LABELS;

export const TRACK_LABELS = {
  web: "Web",
  java: "Java",
  "data-ml": "Data & ML",
} as const;
export type Track = keyof typeof TRACK_LABELS;

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
  constraints?: string[];
  architecture?: string;
  decisions?: ProjectDecision[];
  challenges?: string;
  results?: string;
  next?: string[];
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
  | "slug"
  | "title"
  | "tagline"
  | "role"
  | "tech"
  | "track"
  | "status"
  | "startYear"
  | "published"
>;

export interface ProjectFilters {
  track?: Track;
  tech?: Tech;
  status?: Status;
}
export const FILTER_KEY = ["track", "tech", "status"] as const;
export type FilterKey = (typeof FILTER_KEY)[number];

export type FilterOption = {
  value: string;
  label: string;
};
