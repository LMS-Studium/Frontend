import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <header className="flex items-center justify-between bg-white shadow-md px-4 py-4">
        <div className="text-3xl font-mono font-semibold">LMS</div>
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
            <li className="cursor-pointer hover:text-purple-600">
              Free Content
            </li>
            <li className="cursor-pointer hover:text-purple-600">
              Paid Courses
            </li>
            <li className="cursor-pointer hover:text-purple-600">My Courses</li>
          </ul>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="cursor-pointer hover:text-purple-600">Login</div>
          <div className=" cursor-pointer bg-purple-600 px-4 py-2 text-white rounded-md">
            Signup
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
