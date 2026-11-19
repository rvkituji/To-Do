"use client";

import type { Task } from "@/types";

type TaskItemProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div
      className={`h-[64px] flex items-center justify-between  ${
        task.completed
          ? "border border-[#F8FAF8] bg-[#F8FAF8] rounded-[12px] line-through"
          : "border-b border-[#EEF2EF]"
      }`}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onToggle(task.id)}
          className={`w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0 ${
            task.completed ? "bg-[#236B53]" : "border-[1.5px] border-[#C7D5CC]"
          }`}
          aria-label="Toggle task completion"
        >
          {task.completed && (
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          )}
        </button>

        <p
          className={`text-[15px] ${
            task.completed ? "text-[#A6B2AA]" : "text-[#213D35]"
          }`}
        >
          {task.title}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
        className="w-[44px] h-[44px] flex items-center justify-center  hover:border-red-50 hover:bg-red-50 rounded-[12px] text-[#A6B2AA]  transition-colors"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <path d="m19 6-1 14H6L5 6" />
          <path d="M10 11v5M14 11v5" />
        </svg>
      </button>
    </div>
  );
}
