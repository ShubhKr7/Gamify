import Task from "../models/Task.js";
import Category from "../models/Category.js";
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
    const task = await Task.create({ name, description, details, category,difficulty });

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
  try {
    const { id } = req.params;
    const { name, description, details, category,difficulty } = req.body;
    const task = await Task.findByIdAndUpdate(
      id,
      { name, description, details, category,difficulty },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error("Error editing task:", error);
    res.status(500).json({ message: "Failed to edit task", error });
  }
}

export { getAllTasks, createTask, deleteTask, editTask };
