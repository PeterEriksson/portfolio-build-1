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
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div
        aria-label="Heading text"
        className="flex flex-col items-center space-y-2 mb-3"
      >
        <h1 className="text-5xl font-bold">Projects</h1>
        <h3 className="text-xl font-extralight">Some of my work</h3>
      </div>

      <div className="flex flex-col justify-center items-center">
        <LazyLoadImage
          src={resumeData.work[index].url}
          effect="blur"
          className="rounded-xl "
          height="300px"
          width="300px"
          /* key={i} */
        />
        <h2 className="text-xl font-bold">{resumeData.work[index].title}</h2>
        <p className="max-w-sm text-center text-sm font-light">
          {resumeData.work[index].desc}
        </p>
        <a
          href={resumeData.work[index].githubUrl}
          className="font-light text-sm mt-3"
        >
          Github
        </a>
        <p className="text-xs font-extralight italic mt-3">
          {resumeData.work[index].tags}
        </p>
        <div className="flex mt-4">
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
    </div>
  );
}

export default Work;
