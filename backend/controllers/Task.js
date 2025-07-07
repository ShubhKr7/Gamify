import Task from "../models/Task.js";
import Category from "../models/Category.js";

const startTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(
      id,
      { $inc: { inProgressCount: 1 } },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error("Error starting task:", error);
    res.status(500).json({ message: "Failed to start task", error });
  }
};

const completeTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findByIdAndUpdate(
      taskId,
      { $inc: { completedCount: 1 } },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error("Error completing task:", error);
    res.status(500).json({ message: "Failed to complete task", error });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.find({ category: id });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Failed to fetch tasks", error });
  }
};

async function createTask(req, res) {
  try {
    const { name, description, details, category, difficulty } = req.body;

    // Step 1: Create the new task
    const task = await Task.create({
      name,
      description,
      details,
      category,
      difficulty,
    });

    // Step 2: Push the task reference into the Category model
    await Category.findByIdAndUpdate(
      category, // category is the category ID
      { $push: { tasks: task._id } },
      { new: true, useFindAndModify: false }
    );

    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: error.message });
  }
}

async function deleteTask(req, res) {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Failed to delete task", error });
  }
}

async function editTask(req, res) {
  const { id } = req.params;
  const { details, difficulty } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(
      id,
      { details, difficulty },
      { new: true }
    );
    if (!task) return res.status(404).json({ error: "Task not found" });

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}

export {
  getAllTasks,
  createTask,
  deleteTask,
  editTask,
  startTask,
  completeTask,
};
