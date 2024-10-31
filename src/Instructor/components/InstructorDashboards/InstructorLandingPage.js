/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "../../../CommonComponent/Navbar";
import InstructorVector from "../../assets/Online_teacher_preview-removebg.png";

const InstructorLandingPage = () => {
  return (
    <div className="font-roboto  ">
      <Navbar></Navbar>
      <div className="">
        <div className="flex justify-center items-center flex-col w-[100%] h-[30vw] bg-[#EDEDED] ">
          <h1 className="text-[#2D2F31] text-6xl font-bold  ">
            Want to teach with us
          </h1>
          <p className="text-[#2D2F31] text-2xl pt-2  ">
            Become instructor on LEXICON
          </p>
          <div className="pt-2">
            <button className="bg-[#3E4143] p-3 w-[200px] text-lg text-white font-semibold ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorLandingPage;
