/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import LogoOne from "../../assets/studium-high-resolution-logo-transparent.png";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="font-roboto">
      <header className="flex items-center justify-between bg-white shadow-md px-4 py-4">
        <div className="text-3xl font-semibold ">
          <img src={LogoOne} className="w-[150px]"></img>
        </div>
        <div className="relative w-[50%] flex justify-between items-center">
          <input
            placeholder="Search your courses"
            className="w-full text-slate-800 placeholder-slate-400 px-5 py-2  rounded-full border border-black  focus:outline-none "
          ></input>
          <div className="py-2 px-2 cursor-pointer right-1 absolute transform-y-1/2">
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-10">
          <ul className="flex space-x-10 items-center justify-center">
            <li className="cursor-pointer hover:text-[#003b4d]">Courses</li>
            <li className="cursor-pointer hover:text-[#003b4d]">
              Become Instructor
            </li>
          </ul>
          <div className="cursor-pointer hover:text-[#003b4d]">
            <ShoppingCart size="20" color="#003b4d" />
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="cursor-pointer  border-[1px] border-black px-4 py-2 text-black rounded-md">
            Login
          </div>
          <div className=" cursor-pointer bg-[#003b4d] px-4 py-2 text-white rounded-md">
            Signup
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
