import type { Task, TaskFilter } from "@/types";
import TaskItem from "./TaskItem";
import TaskEmptyState from "./TaskEmptyState";

type TaskListProps = {
  tasks: Task[];
  activeFilter: TaskFilter;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TaskList({
  tasks,
  activeFilter,
  onToggle,
  onDelete,
}: TaskListProps) {
  if (tasks.length === 0) {
    return <TaskEmptyState activeFilter={activeFilter} />;
  }

  return (
    <div className="flex flex-col">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
