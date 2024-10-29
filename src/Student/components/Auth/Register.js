/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import LoginPng from "../../assets/loginbg-removebg.png";
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

      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="font-roboto flex flex-col md:flex-row justify-between items-center w-full h-screen p-0 md:p-0 bg-[#088cffcb]">
      <div className="hidden md:flex h-full w-full md:w-[50%] items-center justify-center">
        <img src={LoginPng} className="h-[100%] w-[100%]" />
      </div>

      {/* Form section */}
      <div className="w-full md:w-[40%] bg-[#fafafa] shadow-2xl  h-full flex items-center justify-center p-5 md:p-0">
        <div className="w-full md:w-[80%] ">
          <div className="flex items-center justify-center font-semibold text-[24px] md:text-[30px]">
            <h1>Let's get started !</h1>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <form className="mt-10 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label
                htmlFor="Name"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent h-[50px] p-5 rounded-l border-[1px] border-black outline-none "
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="Email"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent h-[50px] p-5 rounded-l border-[1px] border-black outline-none "
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="Password"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="bg-transparent h-[50px] p-5 rounded-l border-[1px] border-black outline-none "
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-center bg-[#003b4d] rounded-l h-[50px] cursor-pointer mt-4">
              <button type="submit" className="text-white">
                Create account
              </button>
            </div>
          </form>

          <div className="flex flex-col items-center justify-center mt-10">
            <p className="text-black">- OR -</p>
            <p className="mt-5">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#1100ff] cursor-pointer font-bold underline"
              >
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
