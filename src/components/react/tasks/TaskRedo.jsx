
import { useStore } from '@nanostores/react';
import { 
	taskItems, 
	selectTaskItem, 
	updateTaskItem,
	deleteTaskItem 
} from '../../../logics/tasks/taskStore';
const TaskRedo = ({task}) =>{
    const $taskItems = useStore(taskItems)
    return (
        <div className={'flex items-center w-full p-2 m-2 mt-0 border-solid border-slate-900 border-2 rounded-xl'}>
            <div className="flex align-center grow">
                <input
                    type="checkbox"
                    className={'cursor-pointer text-xl outline-0 px-2'}
                    checked={task.completed}
                    onChange={async () => {
                        
                        try {
                            await updateTaskItem({_id:task._id, completed:$taskItems[task._id].completed})
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                />
                <p
                    className={
                        task.completed
                            ? 'grow px-2 line-through text-slate-800'
                            : 'grow px-2 text-slate-900'
                    }
                    
                >
                    {task.task}
                </p>
            </div>
            <div className="flex">
                <button
                    onClick={() => selectTaskItem(task._id)}
                    className={'outline-none bg-transparent text-black text-xl cursor-pointer px-2'}
                >
                    &#9998;
                </button>
                <button
                    onClick={() => deleteTaskItem(task._id)}
                    className={'outline-none bg-transparent text-black text-xl cursor-pointer px-2'}
                >
                    &#10006;
                </button>
            </div>
            
            
        </div>
    )
}

export default TaskRedo