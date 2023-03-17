<script>
    import { itemSelected } from '../../../logics/tasks/taskStore';
    const handleChange = ({ currentTarget: input }) => {
		if(input.value === ""){
			itemSelected.set({ task: "" })
		} else {
			itemSelected.set({ 
				...itemSelected.get(), 
				task: input.value 
			})
		}
	};

</script>
<input
    class={'pl-2 grow outline-0 rounded-tl rounded-bl border-solid border-2 border-slate-800 text-slate-800'}
    style="height: inherit"
    type="text"
    placeholder="Task to be done..."
    on:input={handleChange}
    value={$itemSelected.task}
/>