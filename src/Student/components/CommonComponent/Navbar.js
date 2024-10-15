/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import LogoOne from "../../assets/studium-high-resolution-logo-transparent.png";

const Navbar = () => {
  return (
    <div className="font-roboto">
      <header className="flex items-center justify-between bg-white shadow-md px-4 py-4">
        <div className="text-3xl font-semibold ">
          <img src={LogoOne} className="w-[150px]"></img>
        </div>
        <div className="relative w-[40%] flex justify-between items-center">
          <input
            placeholder="Search your courses"
            className="w-full text-slate-800 placeholder-slate-400 px-5 py-2  rounded-full border border-black  focus:outline-none "
          ></input>
          <div className="py-2 px-2 cursor-pointer right-1 absolute transform-y-1/2">
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </div>
        </div>
        <div>
          <ul className="flex space-x-10 items-center justify-center">
            <li className="cursor-pointer hover:text-[#003b4d]">
              Free Content
            </li>
            <li className="cursor-pointer hover:text-[#003b4d]">
              Paid Courses
            </li>
            <li className="cursor-pointer hover:text-[#003b4d]">My Courses</li>
          </ul>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="cursor-pointer hover:text-[#003b4d]">Login</div>
          <div className=" cursor-pointer bg-[#003b4d] px-4 py-2 text-white rounded-md">
            Signup
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
