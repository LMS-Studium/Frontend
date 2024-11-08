/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "../../../CommonComponent/Navbar";
import PictureIcon from "../../assets/Group 2621.png";

const StudentLandingPage = () => {
  return (
    <div className="font-roboto">
      <Navbar></Navbar>
      <div className="w-[100%]  flex justify-center items-center ">
        <div className="w-[100%] p-10 flex justify-between bg-[#03151b]">
          <div className="flex flex-col gap-y-10 ">
            <div className="w-[80%]">
              <h1 className="text-white text-5xl font-bold">
                Build and Create Dreams Together with LEXICON{" "}
              </h1>
            </div>
            <div className=" w-[60%]">
              <p className="text-xl text-white">
                Free online course and training service which aims to help you
                achieve your ambitions in the field of technology.
              </p>
            </div>
            <div className="">
              <button className="bg-white p-3 rounded-md text-black w-[20%] font-bold">
                View Courses
              </button>
            </div>
          </div>
          <div>
            <img src={PictureIcon}></img>
          </div>
        </div>
      </div>
      {/*Stats Bar*/}
      <div className="bg-[#EEF4FA] flex justify-between items-center p-24  h-[200px]  ">
        <div className="flex justify-center items-center flex-col font-semibold text-2xl text-black">
          <h1>85M+</h1>
          <p>Students</p>
        </div>
        <div className="flex justify-center items-center flex-col font-semibold text-2xl text-black">
          <h1>180+</h1>
          <p>Countries</p>
        </div>
        <div className="flex justify-center items-center flex-col font-semibold text-2xl text-black">
          <h1>150+</h1>
          <p>Languages</p>
        </div>
        <div className="flex justify-center items-center flex-col font-semibold text-2xl text-black">
          <h1>1 Million+</h1>
          <p>Top Mentors</p>
        </div>
      </div>
    </div>
  );
};

export default StudentLandingPage;
