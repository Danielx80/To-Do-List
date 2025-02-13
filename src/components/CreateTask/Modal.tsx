import { Theme } from '@mui/material/styles';
import {
	Typography,
	OutlinedInput,
	Box,
	DialogActions,
	DialogTitle,
	Button,
} from '@mui/material'

interface ModalProps {
	setInput: (input: string) => void;
	input: string;
	handleSubmit: (e: React.FormEvent) => void;
	inputRef: React.RefObject<HTMLInputElement | null>;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	theme: Theme;
}

export default function Modal({ theme, setInput, input, handleSubmit, inputRef, setOpen }: ModalProps) {
	return (
		<Box sx={{ p: 3 }}>
			<DialogTitle id="create-task-dialog-title">
				Agregar nueva tarea
			</DialogTitle>
			<form onSubmit={handleSubmit}>
				<Box sx={{ position: "relative" }}>
					<OutlinedInput
						fullWidth
						placeholder="Escribe una nueva tarea..."
						size="small"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						inputProps={{ maxLength: 100 }}
						inputRef={inputRef}
					/>
					<Box
						sx={{
							position: "absolute",
							right: 10,
							bottom: 6,
							color: theme.palette.text.secondary,
						}}
					>
						<Typography variant="caption">{input.length}/100</Typography>
					</Box>
				</Box>

				<DialogActions>
					<Button
						onClick={() => setOpen(false)}
						color="primary">
						Cancelar
					</Button>
					<Button
						type="submit"
						variant="contained"
						disabled={!input.trim()}
					>
						Agregar
					</Button>
				</DialogActions>
			</form>
		</Box>
	)
}
