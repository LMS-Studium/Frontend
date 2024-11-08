import React from "react";
import InstructorSidebar from "./InstructorDashboardSidebar";

const CreateCourse = () => {
  return (
    <div className="flex ">
      <InstructorSidebar />
      <div className=" flex justify-center w-full flex-1">
        <div className=" border-[1px] border-gray-100 w-[95%] h-32 mt-20 flex justify-between items-center p-20 rounded-md shadow-lg">
          <h1 className="">Let’s Dive In and Create Your First Course!</h1>
          <button className="bg-[#18469afe] text-white w-64 h-12 rounded-sm font-semibold">
            Create Your Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
