
const Task = ({task, styles, updateTask, editTask, deleteTask}) =>{
    
    return (
        <div className={'flex items-center w-full p-2 m-2 mt-0 border-solid border-slate-900 border-2 rounded-xl'}>
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
                            ? 'grow px-2 line-through text-slate-800'
                            : 'grow px-2 text-slate-900'
                    }
                    
                >
                    {task.task}
                </p>
            </div>
            <div className="flex">
                <button
                    onClick={() => editTask(task._id)}
                    className={'outline-none bg-transparent text-black text-xl cursor-pointer px-2'}
                >
                    &#9998;
                </button>
                <button
                    onClick={() => deleteTask(task._id)}
                    className={'outline-none bg-transparent text-black text-xl cursor-pointer px-2'}
                >
                    &#10006;
                </button>
            </div>
            
            
        </div>
    )
}

export default Task