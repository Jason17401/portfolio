"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname == href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-sm text-muted-foreground transition-colors hover:text-foreground",
        isActive && "text-foreground underline underline-offset-8",
      )}
    >
      {children}
    </Link>
  );
}
