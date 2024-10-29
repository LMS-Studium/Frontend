/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="font-roboto ">
      <header className="flex items-center justify-between bg-[#003b4d] px-10 py-5">
        <div className="text-3xl font-semibold  text-white">LEXICON</div>
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
            <Link to="/">
              <li className="cursor-pointer  text-white">Home</li>
            </Link>
            <Link to="/">
              <li className="cursor-pointer  text-white">My courses</li>
            </Link>
          </ul>
          <div className="cursor-pointer ">
            <ShoppingCart size="20" color="white" />
          </div>
        </div>
        <div className="flex space-x-4 items-center mr-[26px]">
          <div className="cursor-pointer  border-[1px] border-white px-4 py-2 text-white rounded-md">
            <Link to="/login">Login</Link>
          </div>
          <div className=" cursor-pointer text-black px-4 py-2 bg-white rounded-md">
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
