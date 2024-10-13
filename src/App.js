import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import StudentLandingPaged from "./components/StudentDashboards/StudentLandingPage";
import InstructorDashboard from "./components/InstructorDashboards/InstructorDashboard";
import AdminDashboard from "./components/AdminDashboards/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentLandingPaged />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
