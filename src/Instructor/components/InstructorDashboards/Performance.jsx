import React from "react";
import InstructorSidebar from "./InstructorDashboardSidebar";

const Performance = () => {
  return (
    <div className="flex ">
      <InstructorSidebar />
      <div className=" flex justify-center w-full flex-1">Performance</div>
    </div>
  );
};

export default Performance;
