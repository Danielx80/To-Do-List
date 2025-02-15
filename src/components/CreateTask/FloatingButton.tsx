import { Fab } from '@mui/material'
import AddIcon from "@mui/icons-material/Add";

interface FloatingButtonProps {
	handleOpen: React.MouseEventHandler<HTMLButtonElement>;
}

export default function FloatingButton({ handleOpen }: FloatingButtonProps) {
	return (
		<Fab
			sx={{
				position: "fixed",
				bottom: 20,
				right: 20,
				zIndex: 1000,
				transition: "all 0.2s ease",
				"&:hover": {
					transform: "scale(1.1)",
				},
				"&:focus": {
					outline: "2px solid #1976d2",
				},
			}}
			color="primary"
			aria-label="Crear una nueva tarea"
			aria-haspopup="dialog"
			title="Crear una nueva tarea"
			onClick={handleOpen}
		>
			<AddIcon />
		</Fab>
	)
}
