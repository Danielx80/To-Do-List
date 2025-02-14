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
			}}
			color="primary"
			aria-label="Crear una nueva tarea"
			onClick={handleOpen}
		>
			<AddIcon />
		</Fab>
	)
}
