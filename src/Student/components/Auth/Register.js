/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import LoginPng from "../../assets/Login page img.png";
import { Link } from "react-router-dom";
import "../../../App.css";

const Register = () => {
  return (
    <div className="font-roboto flex justify-between items-center h-screen">
      <div className="h-[100%] w-[50%] flex items-center justify-center ">
        <div className="h-full w-[50%] flex items-center justify-center">
          <img src={LoginPng} className="h-[50%] w-[100%] object-contain" />
        </div>
      </div>

      <div className="w-[50%] bg-slate-100 shadow-2xl rounded-l-3xl h-full flex items-center justify-center ">
        <div className="w-[80%]  p-6 ">
          <div className="flex items-center justify-center font-semibold text-[30px]">
            <h1>Create Your Account</h1>
          </div>
          <div className="mt-10 flex flex-col gap-5">
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
              />
            </div>

            <div className="flex justify-center bg-[#D8E9F8] rounded-xl h-[50px] cursor-pointer mt-4">
              <button>Create account</button>
            </div>
          </div>

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
