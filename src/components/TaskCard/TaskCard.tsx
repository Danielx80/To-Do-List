import { Alert, Card, Snackbar, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Task } from "../../interface/Task";
import CardComponent from "./CardComponent";
import { useTaskActions } from "./hook/useTaskActions";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task, }: TaskCardProps) {
  const theme = useTheme()

  // Usamos el hook para manejar lógica
  const {
    isEditing,
    setIsEditing,
    editedDesc,
    setEditedDesc,
    handleEdit,
    handleDelete,
    snackbarOpen,
    setSnackbarOpen,
  } = useTaskActions(task.id, task.description);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >

      <Card
        variant="outlined"
        sx={{
          borderRadius: "8px",
          borderColor: theme.palette.divider,
          backgroundColor: theme.palette.background.paper,
          transition: "all 0.2s ease",
          "&:hover": {
            borderColor: theme.palette.primary.light,
            boxShadow:
              task.status !== "Done"
                ? `0 1px 3px 0 ${theme.palette.primary.light}20`
                : "none",
          },
        }}
      >
        <CardComponent
          isEditing={isEditing}
          editedDesc={editedDesc}
          handleEdit={handleEdit}
          setEditedDesc={setEditedDesc}
          setIsEditing={setIsEditing}
          deleteTask={handleDelete}
          task={task}
        />
      </Card>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="info"
          sx={{ width: "100%" }}>
          ¡Tarea Editada!
        </Alert>
      </Snackbar>
    </motion.div>

  );
}
