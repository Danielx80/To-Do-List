import { useSnackbarStore } from "../../../store/snackbarStore";
import { useTaskStore } from "../../../store/kanbanStore";
import { useCallback, useEffect, useState } from "react";

export function useTaskActions(taskId: string, initialDesc: string) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDesc, setEditedDesc] = useState(initialDesc);

  const { editTask, deleteTask } = useTaskStore();
  const { snackbarOpen, snackbarMessage, setSnackbarOpen } = useSnackbarStore();

  useEffect(() => {
    setEditedDesc(initialDesc);
  }, [initialDesc]);

  const handleEdit = useCallback(() => {
    if (editedDesc.trim() && editedDesc !== initialDesc) {
      editTask(taskId, editedDesc);
      setSnackbarOpen(true, "Tarea Editada");
    }
    setIsEditing(false);
  }, [editedDesc, initialDesc, taskId, editTask]);

  const handleDelete = useCallback(() => {
    deleteTask(taskId);
    setSnackbarOpen(true, "Tarea Eliminada");
  }, [taskId, deleteTask]);

  const handleCreate = useCallback(() => {
    // Supón que creas una nueva tarea aquí
    setSnackbarOpen(true, "Tarea Creada");
  }, []);

  return {
    isEditing,
    setIsEditing,
    editedDesc,
    setEditedDesc,
    handleEdit,
    handleDelete,
    handleCreate,
    snackbarOpen,
    snackbarMessage,
    setSnackbarOpen,
  };
}
