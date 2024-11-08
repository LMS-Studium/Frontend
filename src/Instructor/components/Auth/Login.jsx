import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginInstructor } from "../../services/LoginApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Now correctly passing an object
      const response = await loginInstructor({ email, password });
      console.log("Login Successful", response);

      navigate("/instructor-dashboard-home");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen  bg-[#003b4d]">
      <form
        className="bg-white p-8 rounded-2xl  shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            className="mt-1 block w-full p-2 border rounded focus:ring-1 focus:ring-blue-200 outline-none"
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            required
            className="mt-1 block w-full p-2 border rounded focus:ring-1 focus:ring-blue-200 outline-none"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          type="submit"
          className="w-full bg-[#003b4d] text-white p-2 rounded"
        >
          Login
        </button>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a
            href="/instructor-signup"
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
