"use client";

import { FilterKey, FilterOption, ProjectFilters } from "@/lib/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, useId, useOptimistic, useTransition } from "react";

type DropDownFilterProps = {
  name: FilterKey;
  label: string;
  options: readonly FilterOption[];
  filters: ProjectFilters;
};

export function DropDownFilter({
  name,
  label,
  options,
  filters,
}: DropDownFilterProps) {
  const id = useId();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useOptimistic(filters[name] ?? "");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const next = event.target.value;
    startTransition(() => {
      setValue(next);
      router.replace("", { scroll: false });
    });
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-mono text-xs tracking-widest text-muted-foreground uppercase"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        aria-busy={isPending}
        className="h-9 w-32 rounded-md border border-input bg-background px-2 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <option value="">Any</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
