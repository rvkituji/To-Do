"use client";

import { useState } from "react";
import type { Task, TaskFilter } from "@/types";
import { TaskList, TaskFilters, TaskForm, TaskHeader } from "@/components";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeFilter, setActiveFilter] = useState<TaskFilter>("All");

  const addTask = (title: string) => {
    setTasks((prev) => [...prev, { id: Date.now(), title, completed: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "Active") return !task.completed;
    if (activeFilter === "Completed") return task.completed;
    return true;
  });

  return (
    <main className="min-h-screen bg-[#EAF0EB] flex items-center justify-center px-4 py-10 font-sans">
      <div className="w-full max-w-[672px] min-h-[476px] bg-white rounded-[24px] shadow-sm p-8 sm:p-10">
        <TaskHeader />

        <TaskForm onAddTask={addTask} />

        <TaskFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          taskCount={tasks.length}
        />

        <TaskList
          tasks={filteredTasks}
          activeFilter={activeFilter}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </main>
  );
}
