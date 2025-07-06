import express from "express";
import cors from "cors";
import connect from "./connection.js"; // Make sure you include `.js` extension
import CategoryRoutes from "./routes/CategoryRoutes.js";
import TaskRoutes from "./routes/TaskRoutes.js";
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// Connect to MongoDB and start server
connect("mongodb://localhost:27017/Tasks")
  .then(() => {
    app.listen(3001, () => {
      console.log("🚀 Server running on port 3001");
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB", err);
  });

// Routes
app.use("/api/categories", CategoryRoutes);
app.use("/api/task", TaskRoutes);
// Optional test route
app.get("/", (req, res) => {
  res.send("API is working!");
});
