import { formatDate } from "../../utils/dateUtils";
import { CardContent, Typography, useTheme, } from "@mui/material";
import { Task } from "../../interface/Task";
import InputCard from "./InputCard";
import TaskView from "./TaskView";

interface CardComponentProps {
  isEditing: boolean;
  editedDesc: string;
  handleEdit: () => void;
  setEditedDesc: React.Dispatch<React.SetStateAction<string>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  deleteTask: (id: string) => void;
  task: Task;
}

export default function CardComponent({
  isEditing,
  editedDesc,
  handleEdit,
  setEditedDesc,
  setIsEditing,
  deleteTask,
  task,
}: CardComponentProps) {
  const theme = useTheme();

  return (
    <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
      {isEditing && task.status !== "Done" ? (
        <InputCard
          editedDesc={editedDesc}
          handleEdit={handleEdit}
          setEditedDesc={setEditedDesc}
        />
      ) : (
        <TaskView
          setIsEditing={setIsEditing}
          deleteTask={deleteTask}
          task={task}
        />
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
  );
}
