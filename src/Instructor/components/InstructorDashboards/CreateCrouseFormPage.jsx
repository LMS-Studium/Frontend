import React, { useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  "Do you have a working title in mind?",
  "What category best describes the knowledge you'll be sharing?",
  "Have you decided on a price?",
];

const Stepper = () => {
  const [step, setStep] = useState(0);
  const [courseData, setCourseData] = useState({
    title: "",
    category: "",
    price: "",
  });

  const next = () => setStep(Math.min(step + 1, steps.length - 1));
  const back = () => setStep(Math.max(step - 1, 0));
  const reset = () => {
    setStep(0);
    setCourseData({ title: "", category: "", price: "" });
  };

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4 ">
            <input
              type="text"
              name="title"
              value={courseData.title}
              onChange={handleChange}
              placeholder="eg: Learn MERN Full Stack Development from scratch"
              className="w-full p-3 border border-gray-300  focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <select
              name="category"
              value={courseData.category}
              onChange={handleChange}
              className="w-full p-3  border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="">Select a category</option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
              <option value="marketing">Marketing</option>
              <option value="photography">Photography</option>
            </select>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <input
              type="number"
              name="price"
              value={courseData.price}
              onChange={handleChange}
              placeholder="Enter course price"
              min="0"
              className="w-full p-3 border border-gray-300  focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="font-roboto">
      {/* Header - Fixed Position */}
      <div className="border-b-2 w-full p-4">
        <h1 className="text-3xl font-semibold">LEXICON</h1>
      </div>

      {/* Centered Content Container */}
      <div className="flex justify-center items-center min-h-[calc(100vh-120px)]">
        <div className="w-[50%] p-8 rounded-lg min-h-[400px]">
          <div className="w-full max-w-lg mx-auto">
            {/* Step Counter and Exit */}
            <div className="flex justify-between mb-6">
              <h1 className="font-medium text-black">
                Step {step + 1} of {steps.length}
              </h1>
              <Link to="/create-course">
                <button className="text-black hover:text-gray-800">Exit</button>
              </Link>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-gray-200 rounded-full mb-6">
              <div
                className="h-full bg-blue-950 transition-all duration-300"
                style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Current Step */}
            <div className="text-center mb-8 font-medium text-xl text-black">
              {steps[step]}
            </div>

            {/* Form Content */}
            <div className="bg-white  mb-6">{renderStepContent()}</div>

            {/* Buttons */}
            <div className="flex justify-between gap-4">
              <button
                onClick={back}
                disabled={step === 0}
                className="px-6 py-2 bg-black  transition-colors text-white cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={step === steps.length - 1 ? reset : next}
                className="px-6 py-2 bg-blue-950 text-white  transition-colors"
              >
                {step === steps.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;