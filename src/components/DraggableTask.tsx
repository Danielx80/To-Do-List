
import { useDrag } from "react-dnd";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import TaskCard from "./TaskCard";
import { useMemo } from "react";
import { Task } from "../interface/Task";

export default function DraggableTask({ task }: { task: Task; index: number }) {

  const theme = useTheme();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id, originalStatus: task.status },
    canDrag: task.status !== "Done", // No mover tareas en Done
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // Definir estilos dinámicos 
  const dragStyles = useMemo(
    () => ({
      opacity: isDragging ? 0.7 : 1,
      transform: isDragging ? "rotate(2deg)" : "none",
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      filter: isDragging ? "brightness(0.98)" : "none",
    }),
    [isDragging]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      ref={drag}
      style={{
        position: "relative",
        cursor: task.status === "Done" ? "default" : "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
    >
      {/* Contenedor de la tarea */}
      <div style={dragStyles}>
        <TaskCard task={task}/>

        {/* Cuando se arrastra */}
        {isDragging && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "8px",
              border: `2px dashed ${theme.palette.primary.main}`,
              backgroundColor: `${theme.palette.primary.light}1A`,
            }}
          />
        )}
      </div>
    </motion.div>
  );
}