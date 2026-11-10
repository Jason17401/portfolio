import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/server/queries/projects";

type ContentProps = {
  params: PageProps<"/projects/[slug]">["params"];
};

export async function Content({ params }: ContentProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <header>
        <h1 className="text-5xl font-bold">{project.title}</h1>
      </header>
      <div>
        <div></div>
        <aside></aside>
      </div>
    </>
  );
}

export function ContentSkeleton() {
  return (
    <div aria-hidden="true" className="space-y-4">
      <div className="h-12 w-2/3 rounded-md bg-muted motion-safe:animate-pulse" />
      <div className="h-6 w-1/2 rounded-md bg-muted motion-safe:animate-pulse" />
    </div>
  );
}
