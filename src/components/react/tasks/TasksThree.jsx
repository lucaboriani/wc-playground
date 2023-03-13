import { useEffect } from "react";
import { useStore } from '@nanostores/react';
import TaskRedo from './TaskRedo'
import FormRedo from './FormRedo'
import { 
	taskItems,  
	itemSelected,
	initTaskItems,
} from '../../../logics/tasks/taskStore';

export default function ReactTasksThree({tasks}) {  
	
	const $taskItems = useStore(taskItems)
	const $itemSelected = useStore(itemSelected)
	
    useEffect(()=>{
		const num = Object.keys($taskItems).length
		if(num === 0){
			initTaskItems(tasks)
		}
	},[$taskItems])
	
	return (
		<div className={'flex flex-col w-full items-center justify-center bg-slate-700 rounded-xl'}>
			<h1 className={'text-3xl text-slate-100 m-2'}>Yess, another TodoList :( </h1>
			<div className={'flex flex-col w-full items-center md:max-w-xl p-2 rounded-xl bg-slate-400 box-border mb-5'}>
				<FormRedo 
					task={$itemSelected} 
				/>
				{
					Object.keys($taskItems).length < tasks.length 
					?	tasks.map(task => (
						<TaskRedo 
							key={task._id}
							task={task}  
						/>
					))
					: Object.values($taskItems).map(task => (
						<TaskRedo 
							key={task._id}
							task={task}  
						/>
					))
				}
				{}
				{(Object.values($taskItems).length === 0 && tasks.length === 0) && 
					<h2 className={'flex items-center justify-center capitalize rounded-xl bg-slate-300 text-slate-800 text-2xl h-16'}>No tasks</h2>}
			</div>
		</div>
	);
}
