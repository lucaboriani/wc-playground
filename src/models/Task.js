import mongoose from "mongoose";


mongoose.set('strictQuery', true)

const taskSchema = new mongoose.Schema({
	task: { type: String, required: true },
	completed: { type: Boolean, default: false },
});

export default mongoose.models?.Task || mongoose.model("Task", taskSchema);
