import React from "react";
import InstructorSidebar from "./InstructorDashboardSidebar";
import { Link } from "react-router-dom";

const CreateCourse = () => {
  return (
    <div className="font-roboto">
      <InstructorSidebar />
      <div iv className="flex justify-end  w-[100%] min-h-screen p-20">
        <div className=" border-[1px] border-gray-100  w-[95%] h-32 flex justify-between items-center p-20 rounded-md shadow-lg ">
          <h1 className="">Let’s Dive In and Create Your First Course!</h1>
          <Link to="/create-course-form">
            <button className="bg-[#18469afe] text-white w-64 h-12 rounded-sm font-semibold hover:bg-[#422f9d]">
              Create Your Course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
