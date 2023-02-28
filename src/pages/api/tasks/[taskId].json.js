import consumers from 'stream/consumers'
import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

/* export default async (req, res) => {
	const { method } = req;
	const { id } = req.query;

	// Connect to database
	await dbConnect();

	if (method === "PUT") {
		try {
			const result = await Task.findByIdAndUpdate(
				id,
				{ $set: req.body },
				{ new: true }
			);

			res
				.status(200)
				.json({ data: result, message: "Task Updated Successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}

	if (method === "DELETE") {
		try {
			await Task.findByIdAndDelete(id);
			res.status(200).json({ message: "Task Deleted Successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}
}; */

export async function get({ params }) {
	const id = params.taskId;
	let task
	await dbConnect();
	try {
		task = await Task.findById(id);
	} catch (error) {
		return new Response(JSON.stringify({error:'resource not found'}), {
			status: 400,
			headers: {
			  "Content-Type": "application/json"
			}
		});	
	}
	
	return new Response(JSON.stringify(task), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	});
}

export async function post({ params, request }) {
	const id = params.taskId
	let result, message
	let data = await consumers.json(request.body)
	try {
		await dbConnect();
		if(id){
			// update
			result = await Task.findByIdAndUpdate(
				id,
				{ $set: data },
				{ new: true }
			);
			message = 'Task Updated Successfully'
		} else {
			throw new Error('this route requires an id')
		}
		
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
		console.log(error)
		return new Response(JSON.stringify({error:error, message:'could not update resource'}), {
			status: 500,
			headers: {
			  "Content-Type": "application/json"
			}
		});	
	}
}

export async function del({ params, request }) {
	const id = params.taskId
	await dbConnect();
	try {
		await Task.findByIdAndDelete(id);
		return new Response(JSON.stringify({ 
			message: "Task Deleted Successfully" 
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json"
			}
		});
		
	} catch (error) {
		return new Response(JSON.stringify({error:error,message:'could not delete resource'}), {
			status: 500,
			headers: {
			  "Content-Type": "application/json"
			}
		});	
	}
}