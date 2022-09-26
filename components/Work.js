import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import resumeData from "../resumeData.json";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";
import styles from "../styles/projects.module.css";

function Work() {
  const { ref: myProjectCardRef, inView: myProjectCardElementIsVisible } =
    useInView();

  const [index, setIndex] = useState(1);

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
        className="flex flex-col items-center space-y-1    xs:mb-4 mb-1"
      >
        <h1 className="xs:text-5xl text-3xl font-bold    //center: pt-6">
          Projects
        </h1>
        <h3 className="xs:text-xl text-lg font-extralight  ">
          Some of my work
        </h3>
      </div>

      {resumeData.work.map((item, i) => (
        <InView key={i} triggerOnce>
          {({
            inView: myProjectCardElementIsVisible,
            ref: myProjectCardRef,
            entry,
          }) => (
            <div
              ref={myProjectCardRef}
              aria-label="PROJECT CARD"
              key={i}
              className={`${
                i === index
                  ? "bg-gray-100 shadow-2xl rounded-lg flex z-10 flex-col justify-center items-center transition duration-500  ease-in border border-gray-200 xs:mx-0 mx-5   "
                  : "opacity-0 /flex z-0  absolute     "
              } pt-2 px-8 pb-4     xs:h-projectCard h-96 ${
                myProjectCardElementIsVisible && styles.highlightCard
              } `}
            >
              <a
                href={resumeData.work[index]?.link}
                target="_blank"
                className={` ${
                  i === index &&
                  "overflow-hidden rounded-xl //bg-red-500  heightEqualsWithImageHeightBelow: h-52  "
                }    `}
              >
                <img
                  alt="current project pic"
                  src={resumeData.work[index].url2}
                  /* priority */
                  /* effect="blur" */
                  className={`hover:scale-105 transition transform duration-200 ease-in     `}
                  /* height="208px"
                     width="330px" */
                  /* projectContent: "320px", (used in description) */
                  /* Canva edited images sizes 200*200 👆 ...new: 330*208*/
                />
              </a>

              <div
                aria-label="DIV FOR:project header desc + tags github. Fixed height -> so buttons pos below are consistent"
                className="flex flex-col text-center pt-2  /h-48  "
              >
                <h2
                  className={`xs:text-xl text-base font-bold     "
               `}
                >
                  {resumeData.work[index].title}
                </h2>
                <p className="/max-w-sm max-w-projectContent  text-center font-extralight mx-3.5   xs:text-sm text-xs">
                  {resumeData.work[index].desc}
                </p>

                <h4 className="text-xs font-extralight italic mt-2 p-0">
                  {resumeData.work[index].tags}
                </h4>

                <hr className="border border-gray-200 w-11/12 mx-auto mt-1.5" />

                <a
                  href={resumeData.work[index].githubUrl}
                  className="font-extralight text-xs hover:underline mt-1.5   mx-auto"
                  target="_blank"
                >
                  Github - read more
                </a>
                {resumeData.work[index].link && (
                  <a
                    href={resumeData.work[index]?.link}
                    className="font-extralight text-xs hover:underline mt-1.5    mx-auto"
                    target="_blank"
                  >
                    Link to site
                  </a>
                )}
              </div>
            </div>
          )}
        </InView>
      ))}
      <div
        aria-label="DIV FOR ALIGNING ARROWS AND DOTS"
        className="flex flex-col items-center  //marginToShapeDivider: xs:pb-4"
      >
        <div className="flex mt-3 space-x-2">
          <ArrowCircleLeftIcon
            onClick={handleClickLeft}
            className="xs:h-8 h-7 cursor-pointer  hover:opacity-85 "
          />
          <ArrowCircleRightIcon
            onClick={handleClickRight}
            className="xs:h-8 h-7 cursor-pointer  hover:opacity-85 "
          />
        </div>

        {/* DOTS */}
        <div className="flex mt-1.5">
          {resumeData.work.map((item, i) => (
            <span
              onClick={() => setIndex(i)}
              key={i}
              className={`h-2 w-2 cursor-pointer rounded-full  mx-1 transition transform duration-300 ease-in ${
                i !== index && "hover:scale-120"
              }  ${i === index ? "bg-black" : "bg-gray-500"}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
