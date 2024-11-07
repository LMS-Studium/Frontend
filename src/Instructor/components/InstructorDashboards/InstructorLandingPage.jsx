/* eslint-disable jsx-a11y/alt-text */
// @ts-ignore
import React, { useState } from "react";
import Navbar from "../../../CommonComponent/Navbar";
import InstructorVector from "../../assets/bg.png";
import { Book, Lightbulb, DollarSign } from "lucide-react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import PersonOne from "../../assets/person1.jpg";
import PersonTwo from "../../assets/person2.jpg";
import PersonThree from "../../assets/person3.jpg";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const InstructorLandingPage = () => {
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

      <div className="flex justify-center items-start p-10 mt-10 mb-20 space-x-10  h-auto text-center ">
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

      {/*Stats Bar*/}
      <div className="bg-[#008080] flex justify-between items-center p-24  h-[200px]  mt-10 mb-20">
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

      {/*Quick Quick Section*/}
      <div className="flex justify-center items-center flex-col">
        <h1 className=" font-semibold text-4xl">A Guide to Getting Started</h1>
      </div>

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

      {/*Testimonials*/}
      <div className="flex justify-center items-center flex-col mt-10 mb-20">
        <h1 className=" font-semibold text-4xl">Our Top Instructors</h1>
      </div>
      <div className="flex justify-center items-center mt-10 mb-20">
        <div className="flex justify-between w-[80%] gap-20">
          {/* Card 1 */}
          <div className="flex flex-col w-[50%] h-[450px] text-center rounded-lg shadow-xl ">
            <img src={PersonOne} className="rounded-t-lg" />
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1 className="font-bold">Frank Kane</h1>
                <h2>Data Science & IT Certifications</h2>
                <p className="p-2 text-gray-500">
                  Guiding students to view challenges as growth opportunities
                  builds confidence and perseverance, turning obstacles into
                  valuable learning moments.
                </p>
              </div>
              <div className="flex justify-center mb-4">
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col w-[50%] h-[450px] text-center rounded-lg shadow-xl ">
            <img src={PersonTwo} className="rounded-t-lg" />
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1 className="font-bold">Frank Kane</h1>
                <h2>Full Stack MERN Certifications</h2>
                <p className="p-2 text-gray-500">
                  Helping students reframe difficulties as part of the learning
                  journey fosters resilience, making them more adaptable and
                  motivated.
                </p>
              </div>
              <div className="flex justify-center mb-4">
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col w-[50%] h-[450px] text-center rounded-lg shadow-xl ">
            <img src={PersonThree} className="rounded-t-lg" />
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1 className="font-bold">Frank Kane</h1>
                <h2>DSA & DBMS Certifications</h2>
                <p className="p-2 text-gray-500">
                  Encouraging a growth-focused mindset allows students to see
                  mistakes as chances to improve, nurturing a positive,
                  proactive approach to learning.
                </p>
              </div>
              <div className="flex justify-center mb-4">
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*End Section*/}
      <div className="bg-gray-100 w-full h-[400px] mt-10 mb-20">
        <div className="flex justify-center items-center bg-gray-100 h-full flex-col text-center ">
          <h1 className="text-4xl font-bold p-2">
            Get Started With Become Instructor Today
          </h1>
          <h2 className="text-2xl ">
            Join one of the world’s largest online <br />
            learning marketplaces.
          </h2>
          <div className="pt-2">
            <Link to="/instructor-login">
              <button className="bg-[#003b4d] p-3 w-[200px] text-lg text-white font-semibold ">
                Let's Start
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*Footer*/}
      <footer className="bg-gray-900 p-20 flex flex-col h-[300px]">
        <div className="border-b-[1px] pb-5 border-slate-800 flex justify-center mx-auto items-center space-x-96 ">
          <div className="">
            <h1 className="text-white text-3xl font-semibold mb-5">Lexicon</h1>
            <div className="flex justify-between  mt-auto space-x-4 ">
              <FaInstagram size={30} color="white" />
              <FaLinkedin size={30} color="white" />
              <FaTwitter size={30} color="white" />
              <FaGithub size={30} color="white" />
            </div>
          </div>

          <div className="flex justify-between items-center space-x-56 ">
            <div className="text-slate-500 space-y-2">
              <h1>About us</h1>
              <h1>Contact us</h1>
              <h1>Careers</h1>
              <h1>Blog</h1>
            </div>
            <div className="text-slate-500 space-y-2">
              <h1>About us</h1>
              <h1>Contact us</h1>
              <h1>Careers</h1>
              <h1>Blog</h1>
            </div>
            <div className="text-slate-500 space-y-2">
              <h1>About us</h1>
              <h1>Contact us</h1>
              <h1>Careers</h1>
              <h1>Blog</h1>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InstructorLandingPage;
