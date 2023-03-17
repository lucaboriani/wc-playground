import { useState } from "react";
import axios from "axios";

import Task from './Task'
import Form from './Form'


const base = import.meta.env.PUBLIC_API_BASE
const url = base + '/tasks'

export default function ReactTasks(props) {  
	console.log(props)  
	const [tasks, setTasks] = useState(props.tasks);
	const [task, setTask] = useState({ task: "" });
	const handleChange = ({ currentTarget: input }) => {
		input.value === ""
			? setTask({ task: "" })
			: setTask((prev) => ({ ...prev, task: input.value }));
	};

	const addTask = async (e) => {
		e.preventDefault();
        
		try {
			if (task._id) {
                const { data } = await axios.post(url + "/" + task._id + '.json', {
					task: task.task,
				})
				const originalTasks = [...tasks];
				const index = originalTasks.findIndex((t) => t._id === task._id);
				originalTasks[index] = data.data;
				setTasks(originalTasks);
				setTask({ task: "" });
			} else {
                const { data } = await axios.post(url + ".json", {
					task: task.task,
				});
				setTasks((prev) => [...prev, data.data]);
				setTask({ task: "" });
			}
		} catch (error) {
			console.log(error);
		}
	};

	const editTask = (id) => {
		const currentTask = tasks.filter((task) => task._id === id);
		setTask(currentTask[0]);
	};

	const updateTask = async (id) => {
		try {
			const originalTasks = [...tasks];
			const index = originalTasks.findIndex((t) => t._id === id);
			const { data } = await axios.post(url + "/" + id + ".json", {
				completed: !originalTasks[index].completed,
			});
			originalTasks[index] = data.data;
			setTasks(originalTasks);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteTask = async (id) => {
		try {
			const { data } = await axios.delete(url + "/" + id + ".json");
			setTasks((prev) => prev.filter((task) => task._id !== id));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={'flex flex-col w-full items-center justify-center bg-slate-700 rounded-xl'}>
			<h1 className={'text-3xl text-slate-100 m-2'}>Yess, another TodoList :( </h1>
			<div className={'flex flex-col w-full items-center md:max-w-xl p-2 rounded-xl bg-slate-400 box-border mb-5'}>
				<Form 
					task={task} 
					addTask={addTask} 
					handleChange={handleChange}
				/>
				{tasks.map((task) => (
					<Task 
						key={task._id}
						task={task}  
						updateTask={updateTask} 
						editTask={editTask} 
						deleteTask={deleteTask}
					/>
					
				))}
				{tasks.length === 0 && 
					<h2 className={'flex items-center justify-center capitalize rounded-xl bg-slate-300 text-slate-800 text-2xl h-16'}>No tasks</h2>}
			</div>
		</div>
	);
}
