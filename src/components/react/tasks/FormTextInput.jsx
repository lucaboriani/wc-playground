import { useStore } from '@nanostores/react';
import { itemSelected } from '../../../logics/tasks/taskStore';

const FormTextInput = () => {
    const $itemSelected = useStore(itemSelected)
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
    return (
        
        <input
            className={'pl-2 grow outline-0 text-slate-800'}
            style={{height: 'inherit'}}
            type="text"
            placeholder="Task to be done..."
            onChange={handleChange}
            value={$itemSelected.task}
        />
       
    )
}

export default FormTextInput