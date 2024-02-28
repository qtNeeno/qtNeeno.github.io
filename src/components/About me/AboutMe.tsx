import Navbar from "../Navbar/Navbar";
import { MyInformations } from "../../interfaces/myInformations";
import ritratto from "../../assets/ritratto.jpg";

const AboutMe = (props: MyInformations) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center h-full text-white text-center">
        <div className="max-w-md">
          <h1 className="text-3xl"> About me:</h1>
          <h2 className="uppercase mt-2"> Mi chiamo <span className="text-blue-600">{props.name}</span>, ho {props.age} anni </h2>
          <p>{props.description}</p>
          <p>{props.basedIn}</p>
        </div>
        <img src={ritratto} className="max-w-md mt-4 md:mt-0 md:ml-4" alt="foto" />
      </div>
    </>
  );
};

export default AboutMe;
