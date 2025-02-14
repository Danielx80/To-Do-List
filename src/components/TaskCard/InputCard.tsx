import { Check } from "@mui/icons-material";
import { IconButton, TextField, useTheme } from "@mui/material";

interface InputCardProps {
	editedDesc: string;
	handleEdit: () => void;
	setEditedDesc: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputCard({ editedDesc, handleEdit, setEditedDesc }: InputCardProps) {
	const theme = useTheme();
	const isDescEmpty = !editedDesc.trim();

	return (
		<TextField
			fullWidth
			value={editedDesc}
			onChange={(e) => setEditedDesc(e.target.value)}
			onBlur={handleEdit}
			onKeyDown={(e) => e.key === "Enter" ? handleEdit() : null}
			inputProps={{ maxLength: 100 }}
			variant="standard"
			InputProps={{
				disableUnderline: true,
				sx: {
					fontSize: "0.875rem",
					fontWeight: 500,
					px: 1.5,
					py: 1,
					borderRadius: "4px",
					border: `1px solid ${theme.palette.primary.main}`,
					"&:focus-within": {
						boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
					},
				},
				endAdornment: (
					<IconButton
						onClick={handleEdit}
						size="small"
						sx={{ color: theme.palette.primary.main }}
						aria-label="Guardar edición"
						disabled={isDescEmpty}
					>
						<Check fontSize="small" />
					</IconButton>
				),
			}}
		/>
	);
}
