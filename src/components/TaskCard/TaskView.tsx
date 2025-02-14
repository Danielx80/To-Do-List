import { Delete } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Task } from "../../interface/Task";

interface Card2Props {
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
	deleteTask: (id: string) => void;
	task: Task;
}

export default function TaskView({ setIsEditing, deleteTask, task }: Card2Props) {

	const theme = useTheme();
	const handleClick = () => {
		if (task.status !== 'Done') setIsEditing(true)
	}

	return (
		<Box
			display="flex"
			alignItems="flex-start"
			gap={1}
			sx={{ cursor: task.status !== "Done" ? "pointer" : "default", }}
			onClick={handleClick}
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
	)
}
