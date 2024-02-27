import React from "react";
import icon from "../../assets/icon.png";
import "./Header.css";
import Project from "../Projects/Project";
import { PROJECTS } from "../../Data/dataProjects";

const Header = () => {
  return (
    <div className="grid justify-center h-screen bg-black">
      <div className="grid justify-center items-center">
        <h1 className="text-2xl text-center font-bold mt-10 text-white">
          HI!, I'M A{" "}
          <span className="devText underline text-3xl">DEVELOPER</span>
        </h1>
        <p className="text-center max-w-md mx-auto text-white">
          I am a passionate{" "}
          <span className="text-red-500 underline">frontend developer</span>{" "}
          with experience in{" "}
          <span className="text-yellow-400 underline">full stack</span>{" "}
          development.
        </p>
        <div>
        <p className="text-center text-white">My projects:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project) => (
          <Project key={project.id} {...project}/>
        ))}
        </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={icon} alt="" className="h-2/4 sm:w-full sm:max-w-xs" />
        </div>
      </div>
    </div>
  );
};
export default Header;
