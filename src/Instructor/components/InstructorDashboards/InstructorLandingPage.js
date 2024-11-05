/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "../../../CommonComponent/Navbar";
import InstructorVector from "../../assets/bg.png";
import { Book, Lightbulb, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const InstructorLandingPage = () => {
  return (
    <div className="font-roboto">
      <Navbar></Navbar>
      <div className="flex justify-between items-center bg-[#003b4d] ">
        <div className="flex justify-center p-10  flex-col w-[50%] h-[30vw]">
          <h1 className="text-[#ffffff] text-6xl font-bold  ">
            Want to teach with us
          </h1>
          <p className="text-[#ffffff] text-2xl pt-2  ">
            Become instructor on LEXICON
          </p>
          <div className="pt-2">
            <Link to="/instructor-login">
              <button className="bg-white p-3 w-[200px] text-lg text-black font-semibold ">
                Let's Start
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <img className="w-[100%] h-[30vw]" src={InstructorVector}></img>
        </div>
      </div>

      <div className="flex justify-center items-start p-10 mt-[100px] mb-[100px] space-x-10  h-auto text-center ">
        <div className="flex flex-col items-center bg-white  p-5 ">
          <Book className="h-10 w-10 text-blue-500 mb-3" />
          <h1 className="font-bold text-lg">Teach on Your Terms</h1>
          <p className="mt-3">
            Publish the course you want, in the way you want, and always have
            control of your own content.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white  p-5 ">
          <Lightbulb className="h-10 w-10 text-blue-500 mb-3" />
          <h1 className="font-bold text-lg">Empower Learners</h1>
          <p className="mt-3">
            Teach what you know and help learners explore their interests, gain
            new skills, and advance their careers.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white  p-5 ">
          <DollarSign className="h-10 w-10 text-blue-500 mb-3" />
          <h1 className="font-bold text-lg">Earn and Grow</h1>
          <p className="mt-3">
            Expand your professional network, build your expertise, and earn
            money on each paid enrollment.
          </p>
        </div>
      </div>

      <div className="bg-[#008080] flex justify-between items-center p-24  h-[200px]  mb-[150px]">
        <div className="flex justify-center items-center flex-col font-semibold text-2xl text-white">
          <h1>85M+</h1>
          <p>Students</p>
        </div>
        <div className="flex justify-center items-center flex-col font-semibold text-2xl text-white">
          <h1>180+</h1>
          <p>Countries</p>
        </div>
        <div className="flex justify-center items-center flex-col font-semibold text-2xl text-white">
          <h1>150+</h1>
          <p>Languages</p>
        </div>
        <div className="flex justify-center items-center flex-col font-semibold text-2xl text-white">
          <h1>$5,677</h1>
          <p>Avg instructor revenue</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <h1 className=" font-semibold text-4xl">A Guide to Getting Started</h1>
      </div>
    </div>
  );
};

export default InstructorLandingPage;
