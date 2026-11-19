export type Task = {
  id: number;
  title: string;
  completed: boolean;
};
export type TaskFilter = "All" | "Active" | "Completed";
