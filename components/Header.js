import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import resumeData from "../resumeData.json";
import Typical from "react-typical";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div
      id="header"
      style={{ background: "#091c29" }}
      className="min-h-screen flex items-center justify-center "
    >
      <div className="w-10/12 flex flex-col md:flex-row-reverse items-center justify-between ">
        <div className="md:w-2/5 w-full">
          <LazyLoadImage
            src={resumeData.header.img2}
            effect="blur"
            className="rounded-xl"
          />
        </div>
        <div className="text-white text-center md:text-left ">
          <h2
            className={`
          ${
            !animated && "translate-y-10 opacity-0"
          } transform transition duration-1000 ease-in-out
          text-3xl font-bold md:text-5xl`}
          >
            {resumeData.header.text[0]}
            <br />
            {resumeData.header.text[1]}
          </h2>
          <h1
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
          </h1>
          <ScrollLink to="stack" smooth="true">
            <button className="bg-indigo-500 transition duration-150 transform hover:scale-110 py-3 px-10 text-lg uppercase rounded-xl mt-5 mb-3 focus:outline-none">
              {resumeData.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
