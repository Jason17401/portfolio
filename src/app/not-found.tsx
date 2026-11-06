import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { NotFoundContent } from "@/components/not-found-content";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <SiteShell>
      <NotFoundContent />
    </SiteShell>
  );
}
