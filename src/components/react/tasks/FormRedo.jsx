import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { 
    postTaskItem, 
	itemSelected,
    initTaskItems 
} from '../../../logics/tasks/taskStore';

import FormTextInput from './FormTextInput'

const FormRedo = ({ tasks }) => {
    const $itemSelected = useStore(itemSelected)
    useEffect(()=>{
        initTaskItems(tasks)
    },[])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await postTaskItem($itemSelected)
            itemSelected.set({ task: "" })
            // ssr & uze da platform
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
            <FormTextInput/>
            <button 
                type="submit" 
                className={'text-xl font-bold cursor-pointer w-24 bg-red-400 hover:bg-red-500 text-black'} 
                style={{height: 'inherit'}}
            >
                {$itemSelected._id ? "Update" : "Add"}
            </button>
        </form>
    )
}

export default FormRedo