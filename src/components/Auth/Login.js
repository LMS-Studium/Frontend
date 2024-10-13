import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../services/Login"; // Ensure this path is correct

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student", // Default role
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any existing errors

    try {
      const result = await loginUser(formData); // Call login service
      console.log("API Response:", result); // Log the entire response for debugging

      // Check if the result object has the expected properties
      if (result && result.status === 200) {
        const user = result.data.user; // Assuming the API returns user information

        // Check if user exists and has a role
        if (user && user.role) {
          // Navigate based on the user's role
          switch (user.role) {
            case "student":
              navigate("/student-dashboard"); // Navigate to student dashboard
              break;
            case "instructor":
              navigate("/instructor-dashboard"); // Navigate to instructor dashboard
              break;
            case "admin":
              navigate("/admin-dashboard"); // Navigate to admin dashboard
              break;
            default:
              setError("Unknown role");
          }
        } else {
          // If user is not found in the response
          setError("Login failed. No user data returned.");
        }
      } else {
        // If status is not 200, display the error message from the API
        setError(
          result.message || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError(error.message || "An error occurred during login");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-3 py-2 border rounded-md"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full px-3 py-2 border rounded-md"
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}

export default Login;
