import consumers from 'stream/consumers'
import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

/**
 * Gets all Tasks
 * @returns Response
 */
export async function get() {
	try {
		await dbConnect();
		const tasks = await Task.find()
		const body =tasks.map(task => {
			return {
				task: task.task,
				_id: task._id.toString(),
				completed:task.completed
			} 
		})
		return  new Response(JSON.stringify(body), {
			status: 200,
			ok: true
		}); 
	} catch (error) {
		console.log(error.message)
	  throw new Error(error.message);
	}
};

/**
 * Creates a new task
 * 
 * @param {Object} Astro context Object 
 * @returns Response
 */
export async function post({ params, request }) {
	let result, message
	let data = await consumers.json(request.body)
	try {
		await dbConnect();
		result = await new Task(data).save();
		message = 'Task Created Successfully'
		return new Response(JSON.stringify({ 
			data: result, 
			message: message 
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json"
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({error:error, message:'could not save Task'}), {
			status: 500,
			headers: {
			  "Content-Type": "application/json"
			}
		});	
	}
}