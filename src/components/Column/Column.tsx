
import { useDrop } from "react-dnd";
import { Paper, useTheme } from "@mui/material";
import { useTaskStore } from "../../store/kanbanStore";
import { useMemo, useRef } from "react";
import { TaskStatus } from "../../interface/Task";
import { statusConfig } from "./statusConfig";
import StackComponent from "./StackComponent";
import HeadColumn from "./HeadColumn";

export default function Column({ status }: { status: TaskStatus, }) {
  const theme = useTheme();
  const { tasks, searchTerm, moveTask } = useTaskStore();

  //Utilizamos el useRef para almacenar el valor que muta
  const ref = useRef<HTMLDivElement>(null);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: { id: string; status: TaskStatus }) => {
      if (item.status !== "Done" && item.status !== status) {
        moveTask(item.id, status);
        console.log(`Task ${item.id} moved to ${status}`);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  // use memo para evitar los renders que no son necesarios
  const filteredTasks = useMemo(
    () =>
      tasks
        .filter((task) => task.status === status)
        .filter((task) =>
          task.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
        ),
    [tasks, searchTerm, status]
  )

  drop(drop(ref));
  return (
    <Paper
      component="div"
      ref={ref}
      sx={{
        p: 2,
        bgcolor: statusConfig(theme)[status].bg,
        border: `2px solid ${isOver
          ? theme.palette.primary.main
          : statusConfig(theme)[status].border
          }`,
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
        minHeight: "500px",
        borderRadius: "8px", // Bordes redondeados
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: isOver ? 0.9 : 1,
      }}
    >
      <HeadColumn
        filteredTasks={filteredTasks}
        statusConfig={statusConfig}
        status={status}
      />

      <StackComponent
        filteredTasks={filteredTasks}
        statusConfig={statusConfig}
        status={status}
      />
    </Paper>
  );
}
