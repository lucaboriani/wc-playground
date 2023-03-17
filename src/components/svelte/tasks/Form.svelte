<script>
    import { onMount } from 'svelte';
    import { 
        postTaskItem, 
        itemSelected,
        initTaskItems 
    } from '../../../logics/tasks/taskStore';
    import FormTextInput from './FormTextInput.svelte';
    export let tasks

    const handleSubmit = async (e) => {
        try {
            await postTaskItem(itemSelected.value)
            itemSelected.set({ task: "" })
            // ssr & uze da platform
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }
    onMount(()=>{
        initTaskItems(tasks)
    })
</script>
<form 
    on:submit|preventDefault={handleSubmit} 
    class="flex w-full items-center h-10 mb-5"
>
    <FormTextInput/>
    <button 
        type="submit" 
        class="text-xl font-bold cursor-pointer w-24 bg-slate-600 text-white rounded-tr rounded-br border-solid border-2 border-slate-900" 
        style="height: inherit"
    >
        {$itemSelected._id ? "Update" : "Add"}
    </button>
</form>