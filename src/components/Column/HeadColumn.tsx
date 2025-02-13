import CircleIcon from "@mui/icons-material/FiberManualRecord";
import { Box, Theme, Typography } from "@mui/material";
import { Task } from "../../interface/Task";
import { statusConfig as confing } from './statusConfig';

interface HeadColumnProps {
	filteredTasks: Task[];
	status: Task['status'];
	statusConfig: typeof confing;
	theme: Theme;
}

export default function HeadColumn({ filteredTasks, status, statusConfig, theme }: HeadColumnProps) {
	return (
		<Box display="flex" alignItems="center" gap={1.5} mb={3} sx={{ px: 1 }}>
			<CircleIcon
				sx={{
					fontSize: "0.8rem",
					color: statusConfig(theme)[status].color,
				}}
			/>
			<Typography
				variant="h6"
				fontWeight={600}
				sx={{
					color: theme.palette.text.primary,
					fontFamily: theme.typography.fontFamily, // Usa la tipografía del tema
				}}
			>
				{statusConfig(theme)[status].label}
			</Typography>
			<Box
				sx={{
					ml: "auto",
					bgcolor: statusConfig(theme)[status].color + "15",
					color: statusConfig(theme)[status].color,
					px: 1.5,
					py: 0.5,
					borderRadius: "6px",
					fontSize: "0.875rem",
					fontWeight: 500,
				}}
			>
				{filteredTasks.length}
			</Box>
		</Box>
	)
}
