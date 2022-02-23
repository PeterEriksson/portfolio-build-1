import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import resumeData from "../resumeData.json";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";

function Work() {
  const [index, setIndex] = useState(0);

  const handleClickRight = () => {
    if (index !== resumeData.work.length - 1) {
      setIndex((i) => i + 1);
    } else {
      setIndex(0);
    }
  };

  const handleClickLeft = () => {
    if (index !== 0) {
      setIndex((i) => i - 1);
    } else {
      setIndex(resumeData.work.length - 1);
    }
  };

  return (
    <div
      id="work"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div
        aria-label="PROJECTS + Some of my work"
        className="flex flex-col items-center space-y-2    xs:mb-4 mb-1"
      >
        <h1 className="xs:text-5xl text-3xl font-bold    //center: pt-7">
          Projects
        </h1>
        <h3 className="xs:text-xl text-lg font-extralight">Some of my work</h3>
        {/* <h3 className="text-xs font-light">
          Check Github readme for thorough explanation
        </h3> */}
      </div>

      {resumeData.work.map((item, i) => (
        <div
          key={i}
          className={`${
            i === index
              ? "bg-gray-100 shadow-2xl rounded-lg flex z-10 flex-col justify-center items-center //opacity-1 transition duration-700 ease-in   border border-gray-200"
              : "opacity-0 flex absolute z-0"
          }`}
        >
          <LazyLoadImage
            src={resumeData.work[index].url2}
            /* effect="blur" */
            className="rounded-xl mt-3"
            /* height="200px" */
            /* width="200px" */
            /* Canva edited images sizes 👆 */
          />
          <div
            aria-label="DIV FOR:project header desc + tags github. Fixed height -> so buttons pos below are consistent"
            className="flex flex-col h-48 text-center mt-3"
          >
            <h2 className="xs:text-xl text-base font-bold">
              {resumeData.work[index].title}
            </h2>
            <p className="max-w-sm text-center font-extralight mx-3.5   xs:text-sm text-xs">
              {resumeData.work[index].desc}
            </p>

            <p className="text-xs font-extralight italic mt-2 p-0">
              {resumeData.work[index].tags}
            </p>
            <a
              href={resumeData.work[index].githubUrl}
              className="font-extralight text-xs hover:underline mt-2"
              target="_blank"
            >
              Github - read more
            </a>
            {resumeData.work[index].link && (
              <a
                href={resumeData.work[index]?.link}
                className="font-extralight text-xs hover:underline mt-2"
                target="_blank"
              >
                Link to site
              </a>
            )}
          </div>
        </div>
      ))}
      <div
        aria-label="DIV FOR ALIGNING ARROWS AND DOTS"
        className="flex flex-col items-center"
      >
        <div className="flex mt-3 space-x-2">
          <ArrowCircleLeftIcon
            onClick={handleClickLeft}
            className="xs:h-8 h-7 cursor-pointer"
          />
          <ArrowCircleRightIcon
            onClick={handleClickRight}
            className="xs:h-8 h-7 cursor-pointer"
          />
        </div>
        {/* (EXPERIMENT) NEW DOT SLIDE FEATURE */}
        <div className="flex mt-2">
          {resumeData.work.map((item, i) => (
            <span
              onClick={() => setIndex(i)}
              key={i}
              className={`h-2 w-2 cursor-pointer rounded-full  mx-1 transition duration-300 ease-in ${
                i === index ? "bg-black" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
