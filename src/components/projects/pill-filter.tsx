import { filtersHref } from "@/lib/project-filters";
import { FilterKey, FilterOption, ProjectFilters } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

type PillFilterProps = {
  name: FilterKey;
  label: string;
  options: readonly FilterOption[];
  filters: ProjectFilters;
};

export function PillFilter({ name, label, options, filters }: PillFilterProps) {
  const current = filters[name] ?? "";
  const items: FilterOption[] = [{ value: "", label: "All" }, ...options];

  return (
    <div role="group" aria-label={label}>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => {
          const isActive = current === item.value;
          return (
            <li key={item.value}>
              <Link
                href={filtersHref(filters, name, item.value)}
                scroll={false}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex h-9 items-center rounded-full border px-4 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-input hover:bg-accent",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
