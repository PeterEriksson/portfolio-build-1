import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import resumeData from "../resumeData.json";
import Typical from "react-typical";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";

function Header() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <header
      id="header"
      style={{ background: "#091c29" }}
      className="min-h-screen flex items-center justify-center "
    >
      <div className="w-10/12 flex flex-col md:flex-row-reverse items-center justify-between ">
        <div className="md:w-2/5 w-full">
          <img
            src={resumeData.header.img}
            /* effect="blur" */
            className={`rounded-xl ${!animated && "opacity-0"}  ${
              animated && "transform transition duration-1000 ease-in-out"
            }`}
          />
        </div>
        <div className="text-white text-center md:text-left    pt-4 xs:pt-0">
          <h1
            className={`
          ${
            !animated && "translate-y-10 opacity-0"
          } transform transition duration-1000 ease-in-out
          text-3xl font-bold md:text-5xl`}
          >
            {resumeData.header.text[0]}
            <br />
            {resumeData.header.text[1]}
          </h1>
          <h2
            className={`${
              !animated && "translate-y-10 opacity-0"
            } transform transition duration-1000 ease-in-out text-2xl  text-gray-500`}
          >
            {resumeData.header.text[2]}
            <Typical
              steps={resumeData.header.typical}
              /* steps={resumeData.stack.additionalTypical} */
              loop={Infinity}
              className="inline-block"
            />
          </h2>
          <ScrollLink to="skills" smooth="true">
            <button className=" group relative hover:bg-indigo-600 bg-indigo-700 transition duration-300 transform hover:scale-105 py-3 px-10 text-lg/ uppercase/ rounded-xl mt-5 mb-3 focus:outline-none">
              {/* {resumeData.header.btnText} */}
              <p className=" text-lg uppercase">discover more</p>
              <span
                className={`absolute right-5 top-3  group-hover:opacity-100 group-hover:translate-x-2   md:inline hidden opacity-0  !transition !duration-500 transform ease-in-out `}
              >
                🔍
              </span>
            </button>
          </ScrollLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
