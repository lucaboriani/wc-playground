import { useStore } from '@nanostores/react';
import { 
    taskItems,
	postTaskItem, 
	itemSelected, 
} from '../../../logics/tasks/taskStore';

const FormRedo = ({ task }) => {
    const $itemSelected = useStore(itemSelected)
    const $taskItems = useStore(taskItems)
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
    return (
        <form 
            onSubmit={async (e)=>{
                e.preventDefault()
                try {
                    await postTaskItem(task)
                    itemSelected.set({ task: "" })
                } catch (error) {
                    console.log(error);
                }
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

export default FormRedo