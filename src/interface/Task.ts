export type TaskStatus = "To Do" | "In progress" | "Done";

export interface Task {
  id: string;
  description: string;
  createdAt: string;
  status: TaskStatus;
}
