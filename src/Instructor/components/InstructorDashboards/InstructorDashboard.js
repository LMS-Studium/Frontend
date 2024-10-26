import React from "react";
import {
  LayoutDashboard,
  Video,
  Users,
  DollarSign,
  Settings,
  PlusCircle,
  BookOpen,
  Star,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  BarChart,
  FileText,
} from "lucide-react";

const InstructorDashboard = () => {
  return (
    <div className="flex min-h-screen box-border font-roboto ">
      <div className="w-[25%]">
        <aside className="bg-[#003b4d] text-white h-full  w-[100%] ">
          <div className="text-3xl font-extrabold  text-white  border-b-[2px]  flex justify-start items-center p-5 h-16">
            <h1 className="text-white">Lexicon Instructor</h1>
          </div>
          <div className="w-full flex justify-start items-start p-5  text-white ">
            <div className="flex justify-between items-center space-x-5">
              <div className="flex flex-col space-y-5 ">
                <LayoutDashboard></LayoutDashboard>
                <BookOpen></BookOpen>
                <BarChart></BarChart>
                <MessageSquare></MessageSquare>
              </div>
              <div className="flex flex-col space-y-5">
                <span>Dashboard</span>
                <span>Course Management</span>
                <span>Performance</span>
                <span>Communication</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="flex justify-center items-center left-0  w-[100%] ">
        <h1 className="font-bold text-3xl">DASHBOARD</h1>
      </div>
    </div>
  );
};

export default InstructorDashboard;
