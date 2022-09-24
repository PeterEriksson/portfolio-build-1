import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import resumeData from "../resumeData.json";
import styles from "../styles/stack-effects.module.css";
import { InView, useInView } from "react-intersection-observer";

function Stack() {
  const { ref: myStackRef, inView: myStackElementIsVisible } = useInView();
  const { ref: myStackCardsRef, inView: myStackCardsElementIsVisible } =
    useInView();

  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-200     forShapeDivider:-> relative      "
    >
      {/* TEST SHAPE DIVIDER */}
      <div className={`${styles.customShapeDividerTop}`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            className={`${styles.shapeFill}`}
          ></path>
        </svg>
      </div>

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

      <div className="flex flex-wrap justify-center max-w-3xl   mt-1.5 xs:mt-5  ">
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
                    ? "transform transition duration-600  ease-in-out "
                    : "transform transition duration-600  ease-in-out opacity-0"
                }    group bg-white  relative         xs:p-3  p-1.5 w-20 h-20   xs:w-36 xs:h-36 shadow-2xl m-3 flex flex-col justify-center  rounded-full  `}
              >
                <LazyLoadImage
                  src={item.img}
                  alt={item.alt}
                  key={i}
                  className="rounded-full xs:object-contain object-cover        group-hover:opacity-0     transform transition duration-600  ease-in-out"
                />
                <p className="xs:text-4xl text-2xl   absolute mx-auto text-center left-0 right-0 opacity-0 group-hover:opacity-80 transform transition duration-600  ease-in-out cursor-default">
                  {item.percentage}
                </p>
              </span>
            ))
          }
        </InView>
      </div>

      <InView triggerOnce>
        {({ inView: myStackElementIsVisible, ref: myStackRef, entry }) => (
          <article
            ref={myStackRef}
            className={` 
              ${myStackElementIsVisible && styles.slidingElement}
                  px-10  max-w-twoPointFivexl text-center font-extralight mt-4 mb-2 text-verySmall  xs:text-base`}
          >
            {resumeData.stack.dummyText2}
          </article>
        )}
      </InView>
    </div>
  );
}

export default Stack;
