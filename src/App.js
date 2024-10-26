import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Student/components/Auth/Register";
import Login from "./Student/components/Auth/Login";
import StudentLandingPaged from "./Student/components/StudentDashboards/StudentLandingPage";
import InstructorDashboard from "./Instructor/components/InstructorDashboards/InstructorDashboard";
import AdminDashboard from "./Admin/components/AdminDashboards/AdminDashboard";
import GetCourses from "./Student/components/StudentDashboards/CourseList";
import InstructorAuthLogin from "./Instructor/components/Auth/Login";
import InstructorAuthSignup from "./Instructor/components/Auth/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<StudentLandingPaged />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/get-courses" element={<GetCourses />} />
        <Route path="/instructor-login" element={<InstructorAuthLogin />} />
        <Route path="/instructor-signup" element={<InstructorAuthSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
