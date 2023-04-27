
const Task = ({task, styles, updateTask, editTask, deleteTask}) =>{
    
    return (
        <div className={'cursor-pointer group flex items-center w-full p-2 m-2 mt-0 border-b hover:bg-red-400 hover:text-black hover:border-black'}>
            <div className="flex align-center grow">
                <input
                    type="checkbox"
                    className={'cursor-pointer text-xl outline-0 px-2'}
                    checked={task.completed}
                    onChange={() => updateTask(task._id)}
                />
                <p
                    className={
                        task.completed
                            ? 'grow px-2 line-through text-red-300 group-hover:text-black'
                            : 'grow px-2 text-red-400 group-hover:text-gray-800'
                    }
                    
                >
                    {task.task}
                </p>
            </div>
            <div className="flex">
                <button
                    onClick={() => editTask(task._id)}
                    className={'outline-none bg-transparent text-slate-100 group-hover:text-black text-xl cursor-pointer px-2'}
                >
                    &#9998;
                </button>
                <button
                    onClick={() => deleteTask(task._id)}
                    className={'outline-none bg-transparent text-slate-100 group-hover:text-black text-xl cursor-pointer px-2'}
                >
                    &#10006;
                </button>
            </div>
            
            
        </div>
    )
}

export default Task