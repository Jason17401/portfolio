import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import {
  getProjectBySlug,
  getPublishedProjects,
} from "@/server/queries/projects";
import { Content, ContentSkeleton } from "./content";

export async function generateStaticParams() {
  const published = await getPublishedProjects();
  return published.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.tagline };
}

export default function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <article className="py-24">
      <Container>
        <Suspense fallback={<ContentSkeleton />}>
          <Content params={params} />
        </Suspense>
      </Container>
    </article>
  );
}
