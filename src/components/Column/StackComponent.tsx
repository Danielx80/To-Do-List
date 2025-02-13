import { Stack, Typography } from '@mui/material'
import DraggableTask from '../DraggableTask'
import { Task } from '../../interface/Task';
import { theme } from '../../theme/theme';

interface StackComponentProp {
	filteredTasks: any;
	status: Task['status']
	statusConfig: any;
}

export default function StackComponent({ filteredTasks, status, statusConfig }: StackComponentProp) {
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
