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
                className={'pl-2 grow outline-0 rounded-tl rounded-bl border-solid border-2 border-slate-800 text-slate-800'}
                style={{height: 'inherit'}}
                type="text"
                placeholder="Task to be done..."
                onChange={handleChange}
                value={task.task}
            />
            <button 
                type="submit" 
                className={'text-xl font-bold cursor-pointer w-24 bg-slate-600 text-white rounded-tr rounded-br border-solid border-2 border-slate-900'} 
                style={{height: 'inherit'}}
            >
                {task._id ? "Update" : "Add"}
            </button>
        </form>
    )
}

export default Form