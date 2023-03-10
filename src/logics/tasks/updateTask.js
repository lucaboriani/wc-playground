import axios from "axios";

const base = import.meta.env.PUBLIC_API_BASE
const url = base + '/tasks'
const updateTask = async (id, completed) => {
    try {
        const { data } = await axios.post(url + "/" + id + ".json", {
            completed: !completed,
        });
        return data
    } catch (error) {
        console.log(error);
    }
};

export default updateTask