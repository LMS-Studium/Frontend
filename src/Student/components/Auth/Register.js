/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import LoginPng from "../../assets/Login page img.png";
import { Link, useNavigate } from "react-router-dom";
import "../../../App.css";
import { registerUser } from "../../services/RegisterApi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    console.log("you pass is", password);

    try {
      // Now correctly passing an object
      const response = await registerUser({ name, email, password });
      console.log("Sign-up success", response);

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="font-roboto flex justify-between items-center p-4 w-[100%] h-screen  bg-[#D8E9F8]">
      <div className="h-[100%] w-[50%] flex items-center justify-center ">
        <div className="h-full w-[50%] flex items-center justify-center">
          <img src={LoginPng} className="h-[50%] w-[100%] object-contain" />
        </div>
      </div>

      <div className="w-[40%] bg-slate-100 shadow-2xl rounded-3xl h-full flex items-center justify-center ">
        <div className="w-[80%]  p-6 ">
          <div className="flex items-center justify-center font-semibold text-[30px]">
            <h1>Let's get started</h1>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form className="mt-10 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex justify-center flex-col">
              <label
                htmlFor="Name"
                className="mb-2 text-s font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-[#b0bac37a] h-[50px] p-5 rounded-xl border-none outline-none"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center flex-col">
              <label
                htmlFor="Email"
                className="mb-2 text-s font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#b0bac37a] h-[50px] p-5 rounded-xl border-none outline-none"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center flex-col">
              <label
                htmlFor="Password"
                className="mb-2 text-s font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-[#b0bac37a] h-[50px] p-5 rounded-xl border-none outline-none"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-center bg-[#003b4d] rounded-xl h-[50px] cursor-pointer mt-4">
              <button type="submit" className="text-white">
                Create account
              </button>
            </div>
          </form>

          <div className="flex flex-col items-center justify-center mt-10">
            <p className="text-[#9b9c9c]">- OR -</p>
            <p className="mt-5">
              Already have an account?{" "}
              <Link to="/" className="text-[#1e6dfff8] cursor-pointer">
                Sign-in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
