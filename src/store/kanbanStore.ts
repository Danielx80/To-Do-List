import { create } from "zustand";
import { persist } from "zustand/middleware";
import { generateId } from "../utils/generateId";
import { Task, TaskStatus } from "../interface/Task";

interface TaskStore {
  tasks: Task[];
  addTask: (description: string) => void;
  editTask: (id: string, newDescription: string) => void;
  moveTask: (id: string, newStatus: TaskStatus) => void;
  deleteTask: (id: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  getFilteredTask: () => Task[];
}

export const useTaskStore = create<TaskStore>()(
  persist(
    // Recordar que el get se usa para acceder al estado dentro del metodo
    (set, get) => ({
      tasks: [],
      searchTerm: "",
      // Añadir tarea
      addTask: (description) =>
        set((state) => {
          if (!description.trim()) return state;
          // No agregar tareas vacías
          return {
            tasks: [
              ...state.tasks,
              {
                id: generateId(),
                description: description.trim(),
                createdAt: new Date().toISOString(),
                status: "To Do",
              },
            ],
          };
        }),

      // Editar la tarea
      editTask: (id, newDescription) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, description: newDescription } : task
          ),
        })),

      // Mover tarea
      moveTask: (id, newStatus) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id &&
            task.status !== "Done" &&
            task.status !== newStatus
              ? { ...task, status: newStatus }
              : task
          ),
        })),

      // Eliminar la tarea
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      // Buscar tarea
      setSearchTerm: (term) => set({ searchTerm: term }),

      // Obtener tareas filtradas
      getFilteredTask: () => {
        const { tasks, searchTerm } = get();
        return tasks.filter((task) =>
          task.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      },
    }),
    { name: "task-storage" }
  )
);
