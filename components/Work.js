import { LazyLoadImage } from "react-lazy-load-image-component";
import resumeData from "../resumeData.json";

function Work() {
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
              src={resumeData.work[0].url}
              effect="blur"
              className=""
            />
          </div>
          {/* Project title plus desc plus tags plus button(GitHub) */}
          <div className=" text-center bg-gray-50 rounded-b-xl">
            <h1 className="text-2xl font-semibold">
              {resumeData.work[0].title}
            </h1>
            <p className="text-sm font-light mx-3 mt-2">
              {resumeData.work[0].desc}
            </p>
            <p className="text-xs font-extralight italic mt-3">
              {resumeData.work[0].tags}
            </p>
            <button className="bg-indigo-400 text-white w-1/4 px-2 font-light text-lg uppercase rounded-xl mt-5 mb-3 focus:outline-none">
              github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
