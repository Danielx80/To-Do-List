import { Theme } from "@mui/material";

export const statusConfig = (theme: Theme) => ({
  "To Do": {
	label: "Por Hacer",
	color: theme.palette.primary.main,
	bg: theme.palette.primary.light + "20",
	border: theme.palette.primary.light,
	text: "No hay tareas pendientes",
  },
  "In progress": {
	label: "En Progreso",
	color: theme.palette.warning.main,
	bg: theme.palette.warning.light + "20",
	border: theme.palette.warning.light,
	text: "No hay tareas en proceso",
  },
  Done: {
	label: "Completado",
	color: theme.palette.success.main,
	bg: theme.palette.success.light + "20",
	border: theme.palette.success.light,
	text: "No hay tareas terminadas",
  },
});