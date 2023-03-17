import { atom, map, action } from 'nanostores';
import addTask from './addTask';
import updateTask from './updateTask';
import deleteTask from './deleteTask';
import loadTasks from './loadTasks';
/**
 * @typedef {Object} TaskItem
 * @property {string} _id
 * @property {string} task
 * @property {Boolean} completed
 */

/** @type {import('nanostores').MapStore<Record<string, TaskItem>>} */
export const taskItems = map({});

export const initTaskItems = action(
    taskItems, 
    'initTaskItems', 
    async (store, tasks) => {
        Object.values(tasks).forEach(task => {
            store.setKey(
                task._id,
                { 
                    _id:task._id, 
                    task:task.task, 
                    completed: task.completed 
                }
            );
        })
        return store.get()
    }
)


export const itemSelected = atom({task:''});

export const selectTaskItem = (id) =>{
    itemSelected.set(taskItems.get()[id])
}

export const postTaskItem = action(
    taskItems, 
    'postTaskItem', 
    async (store, taskData) => {
        const { insertedId } = await addTask(taskData)
        const { task } = taskData
        const existingEntry = store.get()[insertedId];
        if (existingEntry) {
            store.setKey(insertedId, {
                ...existingEntry,
                task: task,
                completed: existingEntry.completed,
            })
        } else {
            store.setKey(insertedId,{ 
                insertedId, 
                task, 
                completed: false 
            })
        }
        return store.get()
    }
)

export const updateTaskItem = action(
    taskItems, 
    'updateTaskItem',
    async (store, taskData) => {
        const { data } = await updateTask(taskData._id, taskData.completed) 
        const { _id, task, completed } = data
        const existingEntry = store.get()[_id];
        if (existingEntry) {
            store.setKey(_id, {
                ...existingEntry,
                task: task,
                completed: completed,
            })
        } 
        
        return store.get()
    } 
)
export const deleteTaskItem = action(
    taskItems,
    'deleteTaskItem',
    async (store, id) => {
        await deleteTask(id) 
        const entries = {...store.get()}
        const existingEntry = entries[id];
        if (existingEntry) {
            delete entries[id]
            store.set(entries)
        } 
        return store.get()
    } 
)

export const loadTaskItems = action(
    taskItems,
    'loadTaskItems',
    async (store) => {
        const data = await loadTasks()
        
        data.forEach(task => {
            taskItems.setKey(
                task._id,
                { 
                    _id:task._id, 
                    task:task.task, 
                    completed: task.completed 
                }
            );
        })
        return store.get()
    } 
)