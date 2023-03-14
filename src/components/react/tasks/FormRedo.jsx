import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { 
    postTaskItem, 
	itemSelected,
    initTaskItems 
} from '../../../logics/tasks/taskStore';

const FormRedo = ({ task, tasks }) => {
    const $itemSelected = useStore(itemSelected)
    useEffect(()=>{
        initTaskItems(tasks)
    },[])
    const handleChange = ({ currentTarget: input }) => {
		if(input.value === ""){
			itemSelected.set({ task: "" })
		} else {
			itemSelected.set({ 
				...$itemSelected, 
				task: input.value 
			})
		}
	};
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await postTaskItem($itemSelected)
            itemSelected.set({ task: "" })
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form 
            onSubmit={handleSubmit} 
            className={'flex w-full items-center h-10 mb-5'}
        >
            <input
                className={'pl-2 grow outline-0 rounded-tl rounded-bl border-solid border-2 border-slate-800 text-slate-800'}
                style={{height: 'inherit'}}
                type="text"
                placeholder="Task to be done..."
                onChange={handleChange}
                value={$itemSelected.task}
            />
            <button 
                type="submit" 
                className={'text-xl font-bold cursor-pointer w-24 bg-slate-600 text-white rounded-tr rounded-br border-solid border-2 border-slate-900'} 
                style={{height: 'inherit'}}
            >
                {$itemSelected._id ? "Update" : "Add"}
            </button>
        </form>
    )
}

export default FormRedo