import { create } from "zustand";

type SnackbarMessage =
  | ""
  | "Tarea Creada"
  | "Tarea Eliminada"
  | "Tarea Editada";

interface SnackbarState {
  snackbarOpen: boolean;
  snackbarMessage: SnackbarMessage;
  setSnackbarOpen: (open: boolean, message?: SnackbarMessage) => void;
}

export const useSnackbarStore = create<SnackbarState>()((set) => ({
  snackbarOpen: false,
  snackbarMessage: "",
  setSnackbarOpen: (open: boolean, message: SnackbarMessage = "") =>
    set({ snackbarOpen: open, snackbarMessage: message }),
}));
