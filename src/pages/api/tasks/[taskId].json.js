import consumers from 'stream/consumers'
import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

const headers = {
	"Content-Type": "application/json",
	"api-key":import.meta.env.MONGO_API_KEY
}

export async function get({ params }) {
	const id = params.taskId;
	let task
	let apiData
	
	try {
		
		const dbParams = {
			dataSource: import.meta.env.MONGO_DATASOURCE,
			database: import.meta.env.MONGO_DBNAME_TASKS,
			collection: import.meta.env.MONGO_COLLECTION_TASKS,
			filter: {
				_id: { $oid: id }
			}
		}
		const url = import.meta.env.MONGO_ENDPOINT + '/action/findOne'
		const apiResponse = await fetch(url, {
			headers: headers,
			method: "POST",
			body: JSON.stringify(dbParams)	
		})
		apiData = await apiResponse.json()
		console.log(apiData)
	} catch (error) {
		return new Response(JSON.stringify({error:'resource not found'}), {
			status: 400,
			headers: {
			  "Content-Type": "application/json"
			}
		});	
	}
	
	return new Response(JSON.stringify(apiData.document), {
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