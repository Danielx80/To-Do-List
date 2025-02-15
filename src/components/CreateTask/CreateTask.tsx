import { useState, useCallback, useRef, useEffect } from "react";
import { Dialog } from "@mui/material";
import { useTaskStore } from "../../store/kanbanStore";
import FloatingButton from "./FloatingButton";
import ModalComponent from "./ModalComponent";
import { useSnackbarStore } from "../../store/snackbarStore";

export default function CreateTask() {
  const { addTask } = useTaskStore();
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const { setSnackbarOpen } = useSnackbarStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmedInput = input.trim();
      if (!trimmedInput) return;

      addTask(trimmedInput);
      setInput("");
      setOpen(false);
      setSnackbarOpen(true, "Tarea Creada");
    },
    [input, addTask, setSnackbarOpen]
  );

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) {
      // Usamos setTimeout para dar tiempo a que el modal se renderice
      const timeout = setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <>
      <FloatingButton handleOpen={handleOpen} />
      <Dialog
        sx={{ p: 12 }}
        open={open}
        onClose={handleClose}
        aria-labelledby="create-task-dialog-title"
        aria-describedby="create-task-dialog-description"
      >
        <ModalComponent
          input={input}
          handleSubmit={handleSubmit}
          inputRef={inputRef}
          setOpen={setOpen}
          setInput={setInput}
          open={open}
        />
      </Dialog>
    </>
  );
}
