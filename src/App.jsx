import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PointsProvider, usePoints } from "./contexts/PointsContext";
import { SurveyProvider, useSurvey } from "./contexts/SurveyContext";
import TaskPage from "./pages/TaskPage";
import SurveyPage from "./pages/SurveyPage";
import { motion, AnimatePresence } from "framer-motion";
import ResponsesPage from "./pages/ResponsesPage";
import { useNavigate } from "react-router-dom";
import MyProgressPage from "./pages/MyProgressPage";

function Dashboard() {
  const { points } = usePoints();
  const navigate = useNavigate();

  const tasks = {
    1: {
      name: "Chores",
      emoji: "🧹",
      color: "#F4A261", // warm orange
      tasks: ["Make your bed", "Put away your toys", "Help set the table"],
    },
    2: {
      name: "Homework Time",
      emoji: "📚",
      color: "#2A9D8F", // teal green
      tasks: [
        "Finish your math homework",
        "Practice reading for 15 minutes",
        "Write 3 English sentences",
      ],
    },
    3: {
      name: "Physical Activity",
      emoji: "🏃",
      color: "#E76F51", // coral red
      tasks: [
        "Run around the house or garden 3 times",
        "Do 10 jumping jacks",
        "Dance to your favorite song",
      ],
    },
    4: {
      name: "Creative Corner",
      emoji: "🎨",
      color: "#E9C46A", // yellow ochre
      tasks: [
        "Draw a picture of your family",
        "Paint using your fingers",
        "Build something with blocks or Legos",
      ],
    },
    5: {
      name: "Mindful Moments",
      emoji: "🌈",
      color: "#9C89B8", // soft purple
      tasks: [
        "Take 5 deep breaths with your eyes closed",
        "Say 3 things that made you happy today",
        "Sit quietly and listen to sounds around you",
      ],
    },
    6: {
      name: "Helping Hands",
      emoji: "🤝",
      color: "#F3722C", // orange-red
      tasks: [
        "Help mom or dad with laundry",
        "Water the plants",
        "Feed your pet (if you have one)",
      ],
    },
    7: {
      name: "Fun & Games",
      emoji: "🎲",
      color: "#577590", // navy blue
      tasks: [
        "Play a board game with family",
        "Solve a jigsaw puzzle",
        "Build a fort with pillows and blankets",
      ],
    },
    8: {
      name: "Good Habits",
      emoji: "🦷",
      color: "#43AA8B", // mint green
      tasks: [
        "Brush your teeth in the morning and night",
        "Wash your hands before meals",
        "Pack your school bag for tomorrow",
      ],
    },
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-float"
            style={{
              background: ["#4CAF50", "#2196F3", "#FF9800", "#9C27B0"][i % 4],
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Gamified Navigation Bar */}
        <nav className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-4 mb-8 md:mb-12 border-2 border-purple-100/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Quest Dashboard
              </h1>
              <span className="text-xl">🎯</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => navigate("/my-progress")}
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all"
              >
                <span>My Progress</span>
                <span className="text-lg">📊</span>
              </button>

              <button
                onClick={() => navigate("/responses")}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all"
              >
                <span>View Achievements</span>
                <span className="text-lg">🏆</span>
              </button>

              <div className="flex items-center gap-2 bg-blue-500/10 border-2 border-blue-500/30 text-blue-700 px-4 py-2 rounded-full font-bold shadow-md">
                <span className="text-lg">✨</span>
                <span>XP: {points}</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Animated Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(tasks).map(([id, category]) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: id * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document
                  .getElementById(`card-${id}`)
                  ?.classList.add("animate-pulse");
                setTimeout(() => navigate(`/task/${id}`), 300);
              }}
              className="cursor-pointer"
            >
              <div
                id={`card-${id}`}
                className="h-full bg-white/90 backdrop-blur-sm shadow-md rounded-2xl p-6 hover:shadow-xl transition-all border-t-8 flex flex-col"
                style={{ borderColor: category.color || "#ccc" }}
              >
                <div className="flex-1">
                  <div
                    className="text-4xl mb-3 text-center"
                    style={{ color: category.color || "#333" }}
                  >
                    {category.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.min(100, Math.random() * 30 + 20)}%`,
                        backgroundColor: category.color || "#999",
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    {category.tasks.length} quests available
                  </p>
                </div>

                <button
                  className="mt-4 w-full py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: `${category.color || "#ccc"}20`,
                    color: category.color || "#333",
                  }}
                >
                  View Tasks →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add these to your global CSS */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

function Root() {
  return (
    <PointsProvider>
      <SurveyProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/task/:id" element={<TaskPage />} />
            <Route path="/survey/:id" element={<SurveyPage />} />
            <Route path="/responses" element={<ResponsesPage />} />
            <Route path="/my-progress" element={<MyProgressPage />} />
          </Routes>
        </Router>
      </SurveyProvider>
    </PointsProvider>
  );
}

export default Root;
