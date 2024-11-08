import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Student/components/Auth/Register";
import Login from "./Student/components/Auth/Login";
import StudentLandingPaged from "./Student/components/StudentDashboards/StudentLandingPage";
import InstructorDashboard from "./Instructor/components/InstructorDashboards/InstructorDashboardSidebar";
import AdminDashboard from "./Admin/components/AdminDashboards/AdminDashboard";
import GetCourses from "./Student/components/StudentDashboards/CourseList";
import InstructorAuthLogin from "./Instructor/components/Auth/Login";
import InstructorAuthSignup from "./Instructor/components/Auth/Signup";
import CreateCourse from "./Instructor/components/InstructorDashboards/CreateCourse";
import InstructorLandingPage from "./Instructor/components/InstructorDashboards/InstructorLandingPage";
import InstructorCommunication from "./Instructor/components/InstructorDashboards/Communication.jsx";
import InstructorPerformance from "./Instructor/components/InstructorDashboards/Performance.jsx";
import InstructorHelp from "./Instructor/components/InstructorDashboards/Help.jsx";

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
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/instructor-landing" element={<InstructorLandingPage />} />
        <Route path="/communication" element={<InstructorCommunication />} />
        <Route path="/performance" element={<InstructorPerformance />} />
        <Route path="/help" element={<InstructorHelp />} />
      </Routes>
    </Router>
  );
}

export default App;
