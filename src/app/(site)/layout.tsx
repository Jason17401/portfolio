export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to Content
      </a>
      <main id="main">{children}</main>
    </>
  );
}
