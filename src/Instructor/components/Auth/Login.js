import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            className="mt-1 block w-full p-2 border rounded focus:ring focus:ring-blue-200 outline-none"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            required
            className="mt-1 block w-full p-2 border rounded focus:ring focus:ring-blue-200 outline-none"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
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
