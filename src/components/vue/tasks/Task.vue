<template>
<div class="flex items-center w-full p-2 m-2 mt-0 border-solid border-slate-900 border-2 rounded-xl">
    <div class="flex align-center grow">
        <input
            type="checkbox"
            class="cursor-pointer text-xl outline-0 px-2"
            :checked="item.completed"
            @change="toggleComplete"
        />
        <p :class="item.completed 
                ? 'grow px-2 line-through text-slate-800'
                : 'grow px-2 text-slate-900'"
        >
            {{task.task}}
        </p>
    </div>
    <div class="flex">
        <button
            @click="handleSelect"
            class="outline-none bg-transparent text-black text-xl cursor-pointer px-2"
        >
            &#9998;
        </button>
        <button
            @click="handleDelete"
            class="outline-none bg-transparent text-black text-xl cursor-pointer px-2"
        >
            &#10006;
        </button>
    </div>
</div>
</template>
<script setup>
import {ref} from 'vue'
import { 
    itemSelected,
	taskItems, 
	selectTaskItem, 
	updateTaskItem,
	deleteTaskItem 
} from '../../../logics/tasks/taskStore';
const props = defineProps({
  task: Object
})

const item = ref(props.task)
// state handled on client
const toggleComplete = async () => {
    try {
        await updateTaskItem({
            _id:item.value._id, 
            completed:item.value.completed
        })
        item.value = taskItems.get()[item.value._id]
        
    } catch (error) {
        console.log(error);
    }
}
// state handled on server
const handleDelete = async () => {
    await deleteTaskItem(item.value._id)
    window.location.reload()
}
// state handled on client, have to find something "smarter..."
const handleSelect = () => {
    selectTaskItem(item.value._id)
    item.value = itemSelected.get()
}
</script>