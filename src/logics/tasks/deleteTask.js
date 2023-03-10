import axios from "axios";
const base = import.meta.env.PUBLIC_API_BASE
const url = base + '/tasks'
const deleteTask = async (id) => {
    try {
        await axios.delete(url + "/" + id + ".json");
        return id
    } catch (error) {
        console.log(error);
    }
};
export default deleteTask