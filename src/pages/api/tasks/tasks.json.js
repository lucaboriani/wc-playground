import consumers from 'stream/consumers'
import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

/**
 * Gets all Tasks
 * @returns Response
 */
export async function get() {
	let responseBody
	let responseStatus
	let isResponseOk
	try {
		await dbConnect();
		const tasks = await Task.find()
		responseStatus = 200
		isResponseOk = true
		responseBody = tasks.map(task => {
			return {
				task: task.task,
				_id: task._id.toString(),
				completed:task.completed
			} 
		})
		
	} catch (error) {
		responseBody = { error:error }
		responseStatus = 500
		isResponseOk = false
	}
	return  new Response(JSON.stringify(responseBody), {
		status: responseStatus,
		ok: isResponseOk
	}); 
};

/**
 * Creates a new task
 * 
 * @param {Object} Astro context Object 
 * @returns Response
 */
export async function post({ params, request }) {
	let result
	let responseBody
	let responseStatus
	let isResponseOk

	let data = await consumers.json(request.body)
	try {
		await dbConnect();
		result = await new Task(data).save();
		responseBody = { 
			data: result, 
			message: 'Task Created Successfully' 
		}
		responseStatus = 200
		isResponseOk = true
	} catch (error) {
		responseStatus = 500
		isResponseOk = false
		responseBody = { 
			error:error, 
			message: 'could not save Task' 
		}
		
	}
	return new Response(JSON.stringify(responseBody), {
		status: responseStatus,
		ok: isResponseOk,
		headers: {
			"Content-Type": "application/json"
		}
	});
}