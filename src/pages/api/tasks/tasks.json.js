import consumers from 'stream/consumers'


const headers = {
	"Content-Type": "application/json",
	"api-key":import.meta.env.MONGO_API_KEY
}
/**
 * Gets all Tasks
 * @returns Response
 */
export async function get() {
	console.log('CALLED GET', import.meta.env.MONGO_ENDPOINT + '/action/find')
	let responseBody
	let responseStatus
	let isResponseOk

	try {
		const dbParams = {
			dataSource: import.meta.env.MONGO_DATASOURCE,
			database: import.meta.env.MONGO_DBNAME_TASKS,
			collection: import.meta.env.MONGO_COLLECTION_TASKS
		}
		const url = import.meta.env.MONGO_ENDPOINT + '/action/find'
		const apiResponse = await fetch(url, {
			headers: headers,
			method: "POST",
			body: JSON.stringify(dbParams)	
		})
		const apiData = await apiResponse.json()
		responseStatus = 200
		isResponseOk = true
		responseBody = apiData
		console.log('apiData')
		console.log(apiData)
		
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
	console.log('POST CALLED', import.meta.env.MONGO_ENDPOINT + '/action/insertOne')
	let responseBody
	let responseStatus
	let isResponseOk
	let data = await consumers.json(request.body)
	console.log(data)
	try {
		const url = import.meta.env.MONGO_ENDPOINT + '/action/insertOne'
		const dbParams = {
			dataSource: import.meta.env.MONGO_DATASOURCE,
			database: import.meta.env.MONGO_DBNAME_TASKS,
			collection: import.meta.env.MONGO_COLLECTION_TASKS,
			document:data
		}
		
		const apiResponse = await fetch(url, {
			headers: headers,
			method: "POST",
			body: JSON.stringify(dbParams)	
		})

		const apiResponseData = await apiResponse.json()
		responseBody = { 
			data: apiResponseData, 
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