import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Student/components/Auth/Register";
import Login from "./Student/components/Auth/Login";
import StudentLandingPaged from "./Student/components/StudentDashboards/StudentLandingPage";
import InstructorDashboard from "./Student/components/InstructorDashboards/InstructorDashboard";
import AdminDashboard from "./Student/components/AdminDashboards/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student-dashboard" element={<StudentLandingPaged />} />
        <Route path="/register" element={<Register />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
