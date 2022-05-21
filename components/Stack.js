import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import resumeData from "../resumeData.json";
import styles from "../styles/stack-effects.module.css";
import { InView } from "react-intersection-observer";

function Stack({
  myStackRef,
  myStackElementIsVisible,
  myStackCardsRef,
  myStackCardsElementIsVisible,
}) {
  return (
    <div
      /* id="stack" */
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-200   "
    >
      <InView /* triggerOnce */>
        {({
          inView: myStackCardsElementIsVisible,
          ref: myStackCardsRef,
          entry,
        }) => (
          <h1
            ref={myStackCardsRef}
            className={`${
              myStackCardsElementIsVisible
                ? "transform transition duration-1000  ease-in-out"
                : "transform transition duration-1000  ease-in-out opacity-0"
            }   text-3xl xs:text-5xl font-bold pt-4`}
          >
            Tech I use
          </h1>
        )}
      </InView>

      <div className="flex flex-wrap justify-center mt-5  max-w-3xl  ">
        <InView /* triggerOnce */>
          {({
            inView: myStackCardsElementIsVisible,
            ref: myStackCardsRef,
            entry,
          }) =>
            resumeData.stack.tech.map((item, i) => (
              <span
                ref={myStackCardsRef}
                key={i}
                className={`${
                  myStackCardsElementIsVisible
                    ? "transform transition duration-1000  ease-in-out "
                    : "transform transition duration-1000  ease-in-out opacity-0"
                }    group bg-white xs:p-3  /w-24 /h-24 p-1.5 w-20 h-20   xs:w-36 xs:h-36 shadow-2xl m-3 flex flex-col justify-center  rounded-full`}
              >
                <LazyLoadImage
                  src={item.img}
                  alt={item.alt}
                  key={i}
                  className="rounded-full xs:object-contain    object-cover"
                />
                {/* <p className=" flex cursor-default font-normal justify-center opacity-0 group-hover:opacity-100 transition duration-250 transform ease-in text-xs xs:text-sm">
                  {item.desc}
                </p> */}
              </span>
            ))
          }
        </InView>
      </div>

      <InView triggerOnce>
        {({ inView: myStackElementIsVisible, ref: myStackRef, entry }) => (
          <p
            ref={myStackRef}
            className={` /translate-y-10 /translate-x-10 /opacity-0
              ${myStackElementIsVisible && styles.slidingElement}
                /transform /transition /duration-1000 /ease-in-out  px-10  max-w-twoPointFivexl text-center font-extralight mt-4 mb-2 text-verySmall  xs:text-base`}
          >
            {resumeData.stack.dummyText2}
          </p>
        )}
      </InView>
    </div>
  );
}

export default Stack;
