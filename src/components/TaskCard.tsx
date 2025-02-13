import { useState, useCallback } from "react";
import {
  Alert,
  Box,
  Card,
  CardContent,
  IconButton,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Check, Delete } from "@mui/icons-material";
import { formatDate } from "../utils/dateUtils";
import { motion } from "framer-motion";
import { useTaskStore } from "../store/kanbanStore";
import { Task } from "../interface/Task";

interface TaskCardProps {
  task: Task;
}


export default function TaskCard({ task, }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDesc, setEditedDesc] = useState(task.description);
  const [snackbarOpen, setOpenSnackbar] = useState(false)
  const { editTask, deleteTask } = useTaskStore();
  const theme = useTheme();

  const handleEdit = useCallback(() => {
    if (editedDesc.trim() && editedDesc !== task.description) {
      editTask(task.id, editedDesc);
      setOpenSnackbar(true);
    }
    setIsEditing(false);
  }, [editedDesc, task.description, task.id, editTask]);

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
        <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
          {isEditing && task.status !== "Done" ? (
            <TextField
              fullWidth
              value={editedDesc}
              onChange={(e) => setEditedDesc(e.target.value)}
              onBlur={handleEdit}
              onKeyDown={(e) => e.key === "Enter" && handleEdit()}
              inputProps={{ maxLength: 100 }}
              autoFocus
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: {
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  px: 1.5,
                  py: 1,
                  borderRadius: "4px",
                  border: `1px solid ${theme.palette.primary.main}`,
                  "&:focus-within": {
                    boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
                  },
                },
                endAdornment: (
                  <IconButton
                    onClick={handleEdit}
                    size="small"
                    sx={{ color: theme.palette.primary.main }}
                    aria-label="Guardar edición"
                  >
                    <Check fontSize="small" />
                  </IconButton>
                ),
              }}
            />
          ) : (
            <Box
              display="flex"
              alignItems="flex-start"
              gap={1}
              sx={{
                cursor: task.status !== "Done" ? "pointer" : "default",
              }}
              onClick={() => task.status !== "Done" && setIsEditing(true)}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  mt: "2px",
                  borderRadius: "4px",
                  border: `2px solid ${theme.palette.divider}`,
                  flexShrink: 0,
                  transition: "all 0.2s ease",
                  ...(task.status === "Done" && {
                    backgroundColor: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                  }),
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  flexGrow: 1,
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                  textDecoration: task.status === "Done" ? "line-through" : "none",
                  color:
                    task.status === "Done"
                      ? theme.palette.text.secondary
                      : theme.palette.text.primary,
                }}
              >
                {task.description}
              </Typography>


              <IconButton
                onClick={() => deleteTask(task.id)}
                size="small"
                sx={{
                  color: task.status === "Done"
                    ? theme.palette.text.disabled
                    : theme.palette.text.secondary,
                  "&:hover": {
                    color: task.status !== "Done" ? theme.palette.error.main : undefined,
                  },
                }}
                aria-label="Eliminar tarea"
                disabled={task.status === "Done"}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Box>
          )}

          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 1,
              ml: 2.5,
              fontSize: "0.75rem",
              color: theme.palette.text.secondary,
            }}
          >
            Creada: {formatDate(task.createdAt)}
          </Typography>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="info"
          sx={{ width: "100%" }}>
          ¡Tarea Editada!
        </Alert>
      </Snackbar>

    </motion.div>
  );
}
