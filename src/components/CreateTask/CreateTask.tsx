import { useState, useCallback, useRef } from "react";
import { Dialog } from "@mui/material";
import { useTaskStore } from "../../store/kanbanStore";
import SnackBarAlert from "./SnackBarAlert";
import FloatingButton from "./FloatingButton";
import ModalComponent from "./ModalComponent";


export default function CreateTask() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const { addTask } = useTaskStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim()) return;

      addTask(input);
      setInput("");
      setOpen(false);
      setSnackbarOpen(true);
    },
    [input, addTask]
  );

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100); // Enfoca el input al abrir el modal
  };

  return (
    <>
      <FloatingButton handleOpen={handleOpen} />
      <Dialog
        sx={{ p: 12 }}
        open={open}
        onClose={() => setOpen(false)}
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

      <SnackBarAlert
        setSnackbarOpen={setSnackbarOpen}
        snackbarOpen={snackbarOpen}
      />

    </>
  );
}
