
"use client";

import { useState, type FormEvent } from "react";

type TaskFormProps = {
  onAddTask: (title: string) => void;
};

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newTask.trim()) return;

    onAddTask(newTask.trim());
    setNewTask("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full min-h-[74px] rounded-2xl border border-[#DCE9E2] bg-[#F4F8F5] p-2 flex flex-col sm:flex-row items-center gap-2 transition-colors duration-200"
      >
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="What needs to get done?"
          className="w-full h-[56px] border border-white bg-white rounded-[12px] px-4 text-[16px] text-[#213D35] outline-none placeholder:text-[#93A198] focus:border-[#236B53] focus:ring-2 focus:ring-[#236B53]/10 transition-all duration-200"
        />

        <button
          type="submit"
          className="w-full sm:w-[128px] h-[48px] shrink-0 bg-[#236B53] hover:bg-[#19563F] rounded-[12px] gap-2 flex items-center justify-center transition-all duration-200 active:scale-[0.97]"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>

          <span className="text-white text-[14px] font-semibold">
            Add task
          </span>
        </button>
      </form>

      <div className="flex items-center justify-end gap-2 mt-3 mb-8">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#93A198"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 10 4 15l5 5" />
          <path d="M20 4v7a4 4 0 0 1-4 4H4" />
        </svg>

        <p className="text-[12px] text-[#93A198]">
          Enter to add a task
        </p>
      </div>
    </>
  );
}
