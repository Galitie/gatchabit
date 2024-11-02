import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI + "DB");
mongoose.Promise = global.Promise;

const taskSchema = new Schema(
  {
    title: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
export default Task;
