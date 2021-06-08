import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TinderCard from "react-tinder-card";
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
      className="min-h-screen flex flex-col items-center justify-center "
    >
      <div
        aria-label="PROJECTS + Some of my work"
        className="flex flex-col items-center space-y-2 mb-3"
      >
        <h1 className="text-5xl font-bold">Projects</h1>
        <h3 className="text-xl font-extralight">Some of my work</h3>
      </div>

      {resumeData.work.map((item, i) => (
        <div
          key={i}
          className={`${
            i === index
              ? "bg-gray-100 shadow-2xl rounded-lg flex z-10 flex-col justify-center items-center opacity-1 transition duration-700 ease-in"
              : "opacity-0 flex absolute z-0"
          }`}
        >
          <LazyLoadImage
            src={resumeData.work[index].url2}
            /* effect="blur" */
            className="rounded-xl mt-3"
            /* height="200px" */
            /* width="200px" */
          />
          <div
            aria-label="DIV FOR:project header desc + tags github. Fixed height -> so buttons pos below are consistent"
            className="flex flex-col h-40 text-center mt-3"
          >
            <h2 className="text-xl font-bold">
              {resumeData.work[index].title}
            </h2>
            <p className="max-w-sm text-center text-sm font-extralight ">
              {resumeData.work[index].desc}
            </p>

            <p className="text-xs font-extralight italic mt-2 p-0">
              {resumeData.work[index].tags}
            </p>
            <a
              href={resumeData.work[index].githubUrl}
              className="font-extralight text-xs hover:underline mt-2"
            >
              Github
            </a>
          </div>
        </div>
      ))}

      <div className="flex mt-5 space-x-2">
        <ArrowCircleLeftIcon
          onClick={handleClickLeft}
          className="h-8 cursor-pointer"
        />
        <ArrowCircleRightIcon
          onClick={handleClickRight}
          className="h-8 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Work;