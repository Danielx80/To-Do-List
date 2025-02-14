import { useTheme } from '@mui/material/styles';
import { Typography, OutlinedInput, Box, DialogActions, DialogTitle, Button, Modal } from '@mui/material';
import React from 'react';

interface ModalProps {
	setInput: (input: string) => void;
	input: string;
	handleSubmit: (e: React.FormEvent) => void;
	inputRef: React.RefObject<HTMLInputElement | null>;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
}

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90%',
	maxWidth: 500,
	bgcolor: 'background.paper',
	borderRadius: '8px',
	boxShadow: 24,
	p: 4,
};

export default function ModalComponent({
	setInput,
	input,
	handleSubmit,
	inputRef,
	setOpen,
	open,
}: ModalProps) {
	const theme = useTheme();

	return (
		<Modal
			keepMounted
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="create-task-dialog-title"
			aria-describedby="create-task-dialog-description"
		>
			<Box sx={style}>
				<DialogTitle id="create-task-dialog-title">
					Agregar nueva tarea
				</DialogTitle>
				<form onSubmit={handleSubmit}>
					<Box sx={{ position: 'relative' }}>
						<OutlinedInput
							fullWidth
							placeholder="Escribe una nueva tarea..."
							size="small"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							inputProps={{
								maxLength: 100,
								'aria-label': 'Descripción de tarea',
							}}
							inputRef={inputRef}
							sx={{
								'&:focus': {
									borderColor: theme.palette.primary.main,
								},
							}}
						/>
						<Box
							sx={{
								position: 'absolute',
								right: 10,
								bottom: 6,
								color: theme.palette.text.secondary,
							}}
						>
							<Typography variant="caption">{input.length}/100</Typography>
						</Box>
					</Box>

					<DialogActions>
						<Button onClick={() => setOpen(false)} color="primary" aria-label="Cancelar tarea">
							Cancelar
						</Button>
						<Button
							type="submit"
							variant="contained"
							disabled={!input.trim()}
							sx={{
								opacity: !input.trim() ? 0.5 : 1,
							}}
							aria-label="Agregar tarea"
						>
							Agregar
						</Button>
					</DialogActions>
				</form>
			</Box>
		</Modal>
	);
}
