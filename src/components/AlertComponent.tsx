import { Alert, Snackbar } from "@mui/material";
import { useSnackbarStore } from "../store/snackbarStore";
import { useMemo } from "react";

export default function AlertComponent() {
	const { snackbarOpen, setSnackbarOpen, snackbarMessage } = useSnackbarStore();

	// Definir el color según la acción
	const severity = useMemo(() => {
		switch (snackbarMessage) {
			case "Tarea Creada":
				return "success";
			case "Tarea Eliminada":
				return "error";
			case "Tarea Editada":
				return "info";
			default:
				return "info";
		}
	}, [snackbarMessage]);

	return (
		<>
			{snackbarMessage && (
				<Snackbar
					open={snackbarOpen}
					autoHideDuration={3000}
					onClose={() => setSnackbarOpen(false)}
					anchorOrigin={{ vertical: "top", horizontal: "center" }}
				>
					<Alert
						onClose={() => setSnackbarOpen(false)}
						severity={severity}
						sx={{ width: "100%" }}
						role="alert"
						aria-live="assertive"
					>
						{snackbarMessage}
					</Alert>
				</Snackbar>
			)}
		</>
	);
}
