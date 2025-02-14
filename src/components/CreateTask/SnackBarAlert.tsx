import { Alert, Snackbar } from '@mui/material';

interface SnackBarAlertProps {
	setSnackbarOpen: (snackbarOpen: boolean) => void;
	snackbarOpen: boolean;
}

export default function SnackBarAlert({ setSnackbarOpen, snackbarOpen }: SnackBarAlertProps) {

	return (
		<Snackbar
			open={snackbarOpen}
			autoHideDuration={3000}
			onClose={() => setSnackbarOpen(false)}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
		>
			<Alert
				onClose={() => setSnackbarOpen(false)}
				severity="success"
				variant="standard"
				sx={{ width: "100%" }}
			>
				¡Tarea creada con éxito!
			</Alert>
		</Snackbar>
	);
}
