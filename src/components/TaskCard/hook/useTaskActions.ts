import { useState, useCallback, useEffect } from "react";
import { useTaskStore } from "../../../store/kanbanStore";

export function useTaskActions(taskId: string, initialDesc: string) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDesc, setEditedDesc] = useState(initialDesc);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { editTask, deleteTask } = useTaskStore();


  useEffect(() => {
    setEditedDesc(initialDesc)
  }, [initialDesc])
  

  const handleEdit = useCallback(() => {
    if (editedDesc.trim() && editedDesc !== initialDesc) {
      editTask(taskId, editedDesc);
      setSnackbarOpen(true);
    }
    setIsEditing(false);
  }, [editedDesc, initialDesc, taskId, editTask]);

  const handleDelete = useCallback(() => {
    deleteTask(taskId);
  }, [taskId, deleteTask]);

  return {
    isEditing,
    setIsEditing,
    editedDesc,
    setEditedDesc,
    handleEdit,
    handleDelete,
    snackbarOpen,
    setSnackbarOpen,
  };
}
