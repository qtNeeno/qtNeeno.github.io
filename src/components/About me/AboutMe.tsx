import Navbar from "../Navbar/Navbar";
import { MyInformations } from "../../interfaces/myInformations";
import foto from "../../assets/Andrea-cv.jpg";
import { Link } from "react-router-dom";

const AboutMe = (props: MyInformations) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center h-full text-white text-center mt-10">
        <div className="max-w-md mr-10">
          <h1 className="text-3xl"> About me:</h1>
          <h2 className="uppercase mt-2">
            {" "}
            Mi chiamo <span className="text-blue-600">{props.name}</span> e ho{" "}
            {props.age} anni. Vivo a {props.basedIn}{" "}
          </h2>
          <p>{props.description}</p>
        </div>
        <img
          src={foto}
          className="max-w-md md:mt-0 md:ml-4 w-4/12 rounded-full"
          alt="foto"
        />
      </div>
      <div className="text-white grid text-center justify-center mt-10">
        <p>Ti servono altre informazioni?</p>
        <button className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <Link to="/resume">Guarda il mio cv</Link>
        </button>
      </div>
    </>
  );
};

export default AboutMe;
