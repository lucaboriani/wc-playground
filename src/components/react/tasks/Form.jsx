const Form = ({task, styles, addTask, handleChange }) => {
    return (
        <form 
            onSubmit={(e)=>{
                e.preventDefault()
                addTask(task)
            }} 
            className={'flex w-full items-center h-10 mb-5'}
        >
            <input
                className={'pl-2 grow outline-0 text-slate-800'}
                style={{height: 'inherit'}}
                type="text"
                placeholder="Task to be done..."
                onChange={handleChange}
                value={task.task}
            />
            <button 
                type="submit" 
                className={'text-xl font-bold cursor-pointer w-24 bg-red-400 hover:bg-red-500 text-black'} 
                style={{height: 'inherit'}}
            >
                {task._id ? "Update" : "Add"}
            </button>
        </form>
    )
}

export default Form