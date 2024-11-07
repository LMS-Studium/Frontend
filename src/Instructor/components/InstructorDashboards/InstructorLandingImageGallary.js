import React, { useState } from "react";
import PersonOne from "../../assets/person1.jpg";
import PersonTwo from "../../assets/person2.jpg";
import PersonThree from "../../assets/person3.jpg";
import { Star } from "lucide-react";

const InstructorLandingImageGallary = () => {
  return (
    <div className="flex justify-center items-center mt-10 mb-20">
      <div className=" flex justify-between w-[80%] gap-20">
        <div className="w-[50%] h-[450px]  text-center  rounded-lg shadow-xl ">
          <img src={PersonOne} className="rounded-t-lg"></img>
          <h1 className="font-bold">Frank Kane </h1>
          <h1>Data Science & IT Certifications</h1>
          <p className="p-2 text-gray-500">
            Guiding students to view challenges as growth opportunities builds
            confidence and perseverance, turning obstacles into valuable
            learning moments.
          </p>
          <div className="flex justify-center items-end">
            <Star className="fill-yellow-500 " />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="w-[50%] h-[450px] text-center rounded-lg shadow-xl">
          <img src={PersonTwo} className="rounded-t-lg"></img>
          <h1 className="font-bold">Frank Kane </h1>
          <h1>Data Science & IT Certifications</h1>
          <p className="p-2 text-gray-500">
            Helping students reframe difficulties as part of the learning
            journey fosters resilience, making them more adaptable and
            motivated.
          </p>
          <div className="flex justify-center">
            <Star className="fill-yellow-500 border-white" />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="w-[50%] h-[450px]  text-center rounded-lg shadow-xl">
          <img src={PersonThree} className="rounded-t-lg"></img>
          <h1 className="font-bold">Frank Kane </h1>
          <h1>Data Science & IT Certifications</h1>
          <p className="p-2 text-gray-500">
            Encouraging a growth-focused mindset allows students to see mistakes
            as chances to improve, nurturing a positive, proactive approach to
            learning.
          </p>
          <div className="flex justify-center">
            <Star className="fill-yellow-500 border-white" />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorLandingImageGallary;
