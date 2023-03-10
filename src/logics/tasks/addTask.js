import axios from "axios";
const base = import.meta.env.PUBLIC_API_BASE
const url = base + '/tasks'
const addTask = async (task) => {
    
    try {
        if (task._id) {
            const { data } = await axios.post(url + "/" + task._id + '.json', {
                task: task.task,
            })
            return data
        } else {
            const { data } = await axios.post(url + "/tasks.json", {
                task: task.task,
            });
            return data
        }
        
    } catch (error) {
        console.log(error);
    }
};

export default addTask