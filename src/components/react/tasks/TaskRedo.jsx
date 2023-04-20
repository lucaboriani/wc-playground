import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { 
    itemSelected,
	taskItems, 
	selectTaskItem, 
	updateTaskItem,
	deleteTaskItem 
} from '../../../logics/tasks/taskStore';
const TaskRedo = (props) =>{
    const $taskItems = useStore(taskItems)
    const [task, setTask] = useState(props.task)
    
    // state handled on client
    const toggleComplete = async () => {
        try {
            await updateTaskItem({
                _id:task._id, 
                completed:$taskItems[task._id].completed
            })
            setTask(taskItems.get()[task._id])
        } catch (error) {
            console.log(error);
        }
    }
    // state handled on server
    const handleDelete = async () => {
        await deleteTaskItem(task._id)
        window.location.reload()
    }
    // state handled on client, have to find something "smarter..."
    const handleSelect = () => {
        selectTaskItem(task._id)
        setTask(itemSelected.get())
    }

    return (
        <div className={'cursor-pointer group flex items-center w-full p-2 m-2 mt-0 border-b hover:bg-red-400 hover:text-black hover:border-black'}>
            <div className="flex align-center grow">
                <input
                    type="checkbox"
                    className={'cursor-pointer text-xl outline-0 px-2'}
                    checked={task.completed}
                    onChange={toggleComplete}
                />
                <p className={ task.completed 
                        ? 'grow px-2 line-through text-red-300 group-hover:text-black'
                        : 'grow px-2 text-red-400 group-hover:text-gray-800'
                }>
                    {task.task}
                </p>
            </div>
            <div className="flex">
                <button
                    onClick={handleSelect}
                    className={'outline-none bg-transparent text-slate-100 group-hover:text-black text-xl cursor-pointer px-2'}
                >
                    &#9998;
                </button>
                <button
                    onClick={handleDelete}
                    className={'outline-none bg-transparent text-slate-100 group-hover:text-black text-xl cursor-pointer px-2'}
                >
                    &#10006;
                </button>
            </div>
            
            
        </div>
    )
}

export default TaskRedo