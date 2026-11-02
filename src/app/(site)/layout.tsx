import { NavBar } from "@/components/layout/nav-bar";
import { Footer } from "@/components/layout/footer";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to Content
      </a>
      <NavBar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
