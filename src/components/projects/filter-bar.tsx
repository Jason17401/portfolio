import {
  STATUS_LABELS,
  TECH,
  TRACK_LABELS,
  type FilterOption,
  type ProjectFilters,
} from "@/lib/types";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { PillFilter } from "./pill-filter";
import { DropDownFilter } from "./dropdown-filter";

const BAR =
  "flex flex-wrap items-end justify-between gap-4 border-b border-border py-6";

const toOptions = (labels: Record<string, string>): FilterOption[] =>
  Object.entries(labels).map(([value, label]) => ({ value, label }));

const TRACK_OPTIONS = toOptions(TRACK_LABELS);
const STATUS_OPTIONS = toOptions(STATUS_LABELS);
const TECH_OPTIONS: FilterOption[] = TECH.map((t) => ({ value: t, label: t }));

type FilterBarProps = { filters: ProjectFilters };

export function FilterBar({ filters }: FilterBarProps) {
  return (
    <search aria-label="Filter Projects" className={BAR}>
      <PillFilter
        name={"track"}
        label="Track"
        options={TRACK_OPTIONS}
        filters={filters}
      />
      <div className="flex gap-3">
        <DropDownFilter
          name={"tech"}
          label="Tech"
          options={TECH_OPTIONS}
          filters={filters}
        />
        <DropDownFilter
          name={"status"}
          label="Status"
          options={STATUS_OPTIONS}
          filters={filters}
        />
      </div>
    </search>
  );
}

export function FilterBarSkeleton() {
  return (
    <div className={BAR}>
      <div className="flex gap-2">
        {["w-12", "w-16", "w-14", "w-24"].map((w) => (
          <Skeleton key={w} className={cn("h-9 rounded-full", w)} />
        ))}
      </div>
      <div className="flex gap-3">
        {[0, 1].map((i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-9 w-32" />
          </div>
        ))}
      </div>
    </div>
  );
}
