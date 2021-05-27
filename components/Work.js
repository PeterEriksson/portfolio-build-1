import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import resumeData from "../resumeData.json";

function Work() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    if (index !== 3) {
      setIndex((i) => i + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div
      id="work"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      {/* Heading text */}
      <div className="flex flex-col items-center space-y-2 mb-3">
        <h1 className="text-5xl font-bold">Projects</h1>
        <h3 className="text-xl font-extralight">I have done</h3>
      </div>

      {/* ProjectItems container */}
      <div className="flex flex-col w-10/12 items-center">
        {/* ProjectItem div */}
        <div className="flex flex-col justify-center border-solid border-4">
          {/* Image div */}
          <div className="h-1/2">
            <LazyLoadImage
              src={resumeData.work[index].url}
              effect="blur"
              className=""
            />
          </div>
          {/* Project title plus description plus tags plus button(GitHub) */}
          <div className=" text-center bg-gray-50 rounded-b-xl">
            <h1 className="text-2xl font-semibold">
              {resumeData.work[index].title}
            </h1>
            <p className="text-sm font-light mx-3 mt-2">
              {resumeData.work[index].desc}
            </p>
            <p className="text-xs font-extralight italic mt-3">
              {resumeData.work[index].tags}
            </p>
            {/*  <a
              href="https://aftonbladet.se"
              target="_blank"
              className="bg-black text-white w-1/4 px-3 font-light text-xl uppercase rounded-xl mt-3 mb-4 focus:outline-none"
            >
              Github
            </a> */}
          </div>
        </div>
        <button onClick={handleClick}>next project</button>
      </div>
    </div>
  );
}

export default Work;
