import React from "react";
import "./Header.css";
import Project from "../Projects/Project";
import { PROJECTS } from "../../Data/dataProjects";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
    <Navbar />
    <div className="grid justify-center">
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
        <p className="text-center text-white mt-10">My projects:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {PROJECTS.map((project) => (
          <Project key={project.id} {...project}/>
        ))}
        </div>
        </div>
    </div>
    </>
  );
};
export default Header;
