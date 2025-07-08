import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PointsProvider } from "./contexts/PointsContext";
import { SurveyProvider } from "./contexts/SurveyContext";
import TaskPage from "./pages/TaskPage";
import SurveyPage from "./pages/SurveyPage";
import ProtectedRoute from "./ProtectedRoutes";
import ResponsesPage from "./pages/ResponsesPage";
import MyProgressPage from "./pages/MyProgressPage";
import LoginPage from "./pages/LoginPage";
import AdminTaskPage from "./pages/AdminTaskPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

function Root() {
  return (
    <PointsProvider>
      <SurveyProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<LoginPage />} />

            <Route element={<ProtectedRoute />}>
              {/* User Routes */}
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/task/:id" element={<TaskPage />} />
              <Route path="/survey/:id" element={<SurveyPage />} />
              <Route path="/responses" element={<ResponsesPage />} />
              <Route path="/my-progress" element={<MyProgressPage />} />
              <Route path="/task/create/:id" element={<CreateTaskPage />} />

              {/* Admin Routes */}
              <Route path="/admin/task/:id" element={<AdminTaskPage />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
              
              {/* Admin routes that should show Coming Soon */}
              <Route path="/admin" element={<NotFound />} />
              <Route path="/admin/*" element={<NotFound />} />
            </Route>
            
            {/* Catch-all route for 404s */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </SurveyProvider>
    </PointsProvider>
  );
}

export default Root;
