/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import LoginPng from "../../assets/Login page img.png";
import { Link } from "react-router-dom";
import "../../../App.css";

const Login = () => {
  return (
    <div className="font-roboto flex justify-between items-center h-screen">
      {/* Left Side Image */}
      <div className="h-[100%] w-[50%] flex items-center justify-center">
        <div className="h-full w-[50%] flex items-center justify-center">
          <img src={LoginPng} className="h-[50%] w-[100%] object-contain" />
        </div>
      </div>

      {/* Right Side Container (Login Form) with Sliding and Fading */}
      <div className="w-[50%] bg-slate-100 shadow-2xl rounded-l-3xl ">
        <div className="w-full h-screen flex items-center justify-center ">
          <div className="w-[80%] h-[80%] p-6 pb-[200px] ">
            <div className="flex items-center justify-center font-semibold text-[30px]">
              <h1>Login Your Account</h1>
            </div>
            <div className="mt-10 h-[80%] gap-8 flex flex-col">
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
                ></input>
              </div>
              <div className="flex justify-center flex-col">
                <label
                  htmlFor="password"
                  className="mb-2 text-s font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-[#b0bac37a] h-[50px] p-5 rounded-xl border-none outline-none"
                ></input>
              </div>
            </div>
            <div className="flex justify-center bg-[#D8E9F8] rounded-xl h-[50px] cursor-pointer">
              <button>Login</button>
            </div>

            <div className="flex justify-center mt-10">
              <p className="text-[#9b9c9c]">- OR -</p>
            </div>

            <div className="flex justify-center mt-10">
              <p>
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-[#1e6dfff8] cursor-pointer"
                >
                  Sign-Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
