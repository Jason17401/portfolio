import { NavBar } from "@/components/layout/nav-bar";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to Content
      </a>
      <NavBar />
      <main id="main">{children}</main>
    </>
  );
}
