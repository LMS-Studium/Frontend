import React, { useState } from "react";
import {
  LayoutDashboard,
  DollarSign,
  PlusCircle,
  BookOpen,
  Star,
  MessageSquare,
  ChevronDown,
  BarChart,
  Edit,
  MessageCircle,
  LogOut,
  CheckCircle,
  Clock,
} from "lucide-react";

const InstructorDashboard = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [active, setActive] = useState(null);

  const sideBarMenuList = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Course Management",
      icon: BookOpen,
      submenu: [
        { title: "Create course", icon: PlusCircle },
        { title: "Edit existing course", icon: Edit },
      ],
    },
    {
      title: "Performance",
      icon: BarChart,
      submenu: [
        { title: "Revenue", icon: DollarSign },
        { title: "Reviews", icon: Star },
      ],
    },
    {
      title: "Communication",
      icon: MessageSquare,
      submenu: [
        { title: "Q&A", icon: MessageCircle },
        { title: "Message", icon: MessageSquare },
      ],
    },
    {
      title: "Logout",
      icon: LogOut,
    },
  ];

  const handleMenuClick = (index) => {
    setIsOpen(isOpen === index ? null : index);
    setActive(index);
  };

  return (
    <div className="flex min-h-screen box-border font-roboto">
      <div className="w-[20%]">
        <aside className="bg-[#003b4d] text-white h-full w-full">
          <div className="text-xl font-bold border-b border-white/20 pl-6 h-16 flex items-center">
            <h1 className="text-3xl">Lexicon Instructor</h1>
          </div>

          <div className="p-4">
            {sideBarMenuList.map((item, index) => (
              <div key={index} className="mb-2">
                <button
                  onClick={() => handleMenuClick(index)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 hover:bg-white/10
                `}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} />
                    <span>{item.title}</span>
                  </div>
                  {item.submenu && (
                    <ChevronDown
                      className={`transition-transform duration-200 ${
                        isOpen === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {item.submenu && (
                  <div
                    className={`overflow-hidden transition-all duration-200
                    ${
                      isOpen === index
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className={`w-full text-left p-3 pl-12 rounded-lg transition-colors duration-200 hover:bg-white/10
                      `}
                      >
                        <div className="flex items-center gap-3">
                          <subItem.icon size={18} />
                          <span>{subItem.title}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>
      <div className="">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-3xl">DASHBOARD</h1>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
