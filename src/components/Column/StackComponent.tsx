import { Stack, Typography, useTheme } from '@mui/material'
import DraggableTask from '../DraggableTask'
import { Task } from '../../interface/Task';
import { statusConfig } from './statusConfig';

interface StackComponentProp {
	filteredTasks: Task[];
	status: Task['status'];
}

export default function StackComponent({ filteredTasks, status, }: StackComponentProp) {
	const theme = useTheme();
	return (
		<Stack spacing={1.5}>
			{filteredTasks.map((task: Task, index: number) => (
				<DraggableTask key={task.id} task={task} index={index} />
			))}
			{filteredTasks.length === 0 && (
				<Typography
					variant="body2"
					sx={{
						textAlign: "center",
						color: theme.palette.text.secondary,
						py: 2,
						fontFamily: theme.typography.fontFamily,
					}}
				>
					{statusConfig(theme)[status].text}
				</Typography>
			)}
		</Stack>
	)
}
