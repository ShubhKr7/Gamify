// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  avatar: String, // optional for fun profile pic
  points: { type: Number, default: 0 },
  completedTasks: [
    {
      task: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
      completedAt: Date,
    },
  ],
  inProgressTasks: [
    {
      task: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
      startedAt: Date,
    },
  ],
});

export default mongoose.model("User", userSchema);
