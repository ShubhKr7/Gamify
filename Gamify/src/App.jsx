import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PointsProvider, usePoints } from "./contexts/PointsContext";
import { SurveyProvider, useSurvey } from "./contexts/SurveyContext";
import TaskPage from "./pages/TaskPage";
import SurveyPage from "./pages/SurveyPage";
import { motion, AnimatePresence } from "framer-motion";
import ProtectedRoute from "./ProtectedRoutes";
import ResponsesPage from "./pages/ResponsesPage";
import { useNavigate } from "react-router-dom";
import MyProgressPage from "./pages/MyProgressPage";
import LoginPage from "./pages/LoginPage";
import AdminTaskPage from "./pages/AdminTaskPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ComingSoon from "./pages/ComingSoon";

function Root() {
  return (
    <PointsProvider>
      <SurveyProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/task/:id" element={<TaskPage />} />
              <Route path="/survey/:id" element={<SurveyPage />} />
              <Route path="/responses" element={<ResponsesPage />} />
              <Route path="/my-progress" element={<MyProgressPage />} />
              <Route path="/admin/task/:id" element={<AdminTaskPage />} />
              <Route path="/task/create/:id" element={<CreateTaskPage />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
            </Route>
          </Routes>
        </Router>
      </SurveyProvider>
    </PointsProvider>
  );
}

export default Root;
