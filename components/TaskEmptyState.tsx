
import type { TaskFilter } from "@/types";

type TaskEmptyStateProps = {
  activeFilter: TaskFilter;
};

export default function TaskEmptyState({
  activeFilter,
}: TaskEmptyStateProps) {
  const isEmptyList = activeFilter === "All";

  return (
    <div className="py-10 flex flex-col items-center justify-center text-center">
      <div className="w-[48px] h-[48px] rounded-full bg-[#EAF3ED] flex items-center justify-center mb-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#236B53"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      </div>

      <p className="text-[15px] font-semibold text-[#213D35]">
        {isEmptyList ? "Your list starts here!" : "No tasks here!"}
      </p>

      <p className="text-[13px] text-[#93A198] mt-1">
        {isEmptyList
          ? "Add your first task above."
          : "Try another filter to see your tasks."}
      </p>
    </div>
  );
}
