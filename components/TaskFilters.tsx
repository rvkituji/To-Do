
"use client";

import type { TaskFilter } from "@/types";

type TaskFiltersProps = {
  activeFilter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
  taskCount: number;
};

export default function TaskFilters({
  activeFilter,
  onFilterChange,
  taskCount,
}: TaskFiltersProps) {
  const filters: TaskFilter[] = ["All", "Active", "Completed"];

  return (
    <div className="flex items-center justify-between border-b border-[#E8EEE9] pb-3 mb-4">
      <div className="flex items-center gap-6">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`text-[14px] pb-3 -mb-[14px] transition-all duration-200 ease-in-out active:scale-95 ${
              activeFilter === filter
                ? "font-semibold text-[#236B53] border-b-2 border-[#236B53] scale-[1.05]"
                : "text-[#93A198] hover:text-[#236B53]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <span className="min-w-[26px] h-[25px] px-2 rounded-[6px] bg-[#EAF3ED] text-[#236B53] text-[12px] font-semibold flex items-center justify-center">
        {taskCount}
      </span>
    </div>
  );
}
