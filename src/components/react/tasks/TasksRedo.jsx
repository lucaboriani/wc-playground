import { useEffect } from "react";
import { useStore } from '@nanostores/react';
import Task from './Task'
import Form from './Form'
import { 
	postTaskItem, 
	taskItems, 
	selectTaskItem, 
	itemSelected,
	initTaskItems,
	updateTaskItem,
	deleteTaskItem 
} from '../../../logics/tasks/taskStore';

export default function ReactTasksRedo({tasks}) {  
	
	const $taskItems = useStore(taskItems)
	const $itemSelected = useStore(itemSelected)
	
    useEffect(()=>{
		const num = Object.keys($taskItems).length
		if(num === 0){
			initTaskItems(tasks)
		}
	},[$taskItems])
	
	const handleChange = ({ currentTarget: input }) => {
		if(input.value === ""){
			itemSelected.set({ task: "" })
		} else {
			itemSelected.set({ 
				...$taskItems[$itemSelected._id], 
				task: input.value 
			})
		}
	};
	const addTask = async (task) => {
		try {
			await postTaskItem(task)
		} catch (error) {
			console.log(error);
		}
	};

	const editTask = id => selectTaskItem(id)
	
	const updateTask = async (id) => {
		try {
			await updateTaskItem({_id:id, completed:$taskItems[id].completed})
		} catch (error) {
			console.log(error);
		}
	};

	const deleteTask = async (id) => {
		try {
			await deleteTaskItem(id)
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={'flex flex-col w-full items-center justify-center bg-slate-700 rounded-xl'}>
			<h1 className={'text-3xl text-slate-100 m-2'}>Yess, another TodoList :( </h1>
			<div className={'flex flex-col w-full items-center md:max-w-xl p-2 rounded-xl bg-slate-400 box-border mb-5'}>
				<Form 
					task={$itemSelected} 
					addTask={addTask} 
					handleChange={handleChange}
				/>
				{
					Object.keys($taskItems).length < tasks.length 
					?	tasks.map(task => (
						<Task 
							key={task._id}
							task={task}  
							updateTask={updateTask} 
							editTask={editTask} 
							deleteTask={deleteTask}
						/>
					))
					: Object.values($taskItems).map(task => (
						<Task 
							key={task._id}
							task={task}  
							updateTask={updateTask} 
							editTask={editTask} 
							deleteTask={deleteTask}
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
