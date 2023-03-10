import axios from "axios";
const base = import.meta.env.PUBLIC_API_BASE
const url = base + '/tasks'
const loadTasks = async () => {
    
    try {
        const { data } = await axios.get(url +'/tasks.json')
        console.log('loaded data')
        console.log(data)
        return data
        
    } catch (error) {
        console.log(error);
    }
};

export default loadTasks