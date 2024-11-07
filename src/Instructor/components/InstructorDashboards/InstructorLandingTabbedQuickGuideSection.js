import React, { useState } from "react";

const InstructorLandingTabbedGuideSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Crafting Your Course Content",
      content: (
        <div className="flex justify-center text-center flex-col space-y-2">
          <p>
            Your teaching style is entirely up to you. Whether you prefer
            interactive sessions, lectures, or tutorials, make the learning
            experience your own. Our platform offers step-by-step guidance to
            help you organize and structure your course.
          </p>
          <span className="text-xl font-bold">How We Support You Our</span>
          <p>
            instructor dashboard and course builder are designed to keep
            everything streamlined and organized. You’ll also have access to
            detailed resources to guide you through creating each module.
          </p>
        </div>
      ),
    },
    {
      label: "Getting Started with Video",
      content: (
        <div className="flex justify-center text-center  flex-col space-y-2">
          <p>
            Creating a course doesn’t require advanced gear — start with your
            smartphone or a DSLR camera, add a quality microphone, and you're
            ready to go. If you prefer not to be on camera, screen recordings
            work great too. We recommend aiming for at least two hours of video
            for a comprehensive paid course.
          </p>
          <span className="text-xl font-bold">How We Support You Our</span>
          <p>
            Our team is here to guide you through video production basics, and
            we offer feedback on your test videos to help you get the best
            results possible.
          </p>
        </div>
      ),
    },
    {
      label: "Promote and Grow Your Course",
      content: (
        <div className="flex justify-center text-center flex-col space-y-2">
          <p>
            Once your course is live, it’s time to get your first ratings and
            reviews. Share your course on social media and within your
            professional networks to build interest and attract students. Your
            course will be featured on our marketplace, allowing you to earn
            revenue from every paid enrollment.
          </p>
          <span className="text-xl font-bold">How We Support You Our</span>
          <p>
            Our platform offers a custom coupon tool so you can create special
            discounts and incentives for potential students. Plus, our global
            promotional efforts help drive traffic to your course. Courses
            selected for special programs like our Business Catalog gain even
            more visibility and reach.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full   mx-auto flex justify-center items-center flex-col space-y-3 mt-10 mb-20 bg-gray-100 ">
      <nav className="flex space-x-4 mb-4 p-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-medium cursor-pointer transition-colors ${
              activeTab === index
                ? "text-blue-500 border-b-2 border-blue-500"
                : " "
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div className="w-[50%] p-5">{tabs[activeTab].content}</div>
    </div>
  );
};

export default InstructorLandingTabbedGuideSection;
