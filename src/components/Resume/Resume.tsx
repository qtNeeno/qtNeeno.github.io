import React from "react";
import Navbar from "../Navbar/Navbar";
import fotoCv from "../../assets/CvAndrea Lentini.png";

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className="grid justify-center">
        <a
          href="/Cv Andrea Lentini.pdf"
          className="mt-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4"
          download={"CvAndreaLentini.pdf"}
        >
          Download cv
        </a>
      </div>
      <div className="flex justify-center mt-5">
        <img src={fotoCv} alt="" className="w-full md:w-1/2 md:h-1/2" />
      </div>
    </>
  );
};

export default Resume;
