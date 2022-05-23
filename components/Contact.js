import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import resumeData from "../resumeData.json";
import { MailIcon, AtSymbolIcon, PhoneIcon } from "@heroicons/react/solid";
import styles from "../styles/contact-effects.module.css";
import { InView, useInView } from "react-intersection-observer";
import Image from "next/image";

function Contact(
  {
    /* myEmojiRef,
  myEmojiElementIsVisible,
  myContactTextRef,
  myContactTextElementIsVisible, */
  }
) {
  const { ref: myEmojiRef, inView: myEmojiElementIsVisible } = useInView();
  const { ref: myContactTextRef, inView: myContactTextElementIsVisible } =
    useInView();

  return (
    <div
      id="contact"
      style={{ background: "#091c29" }}
      className="flex min-h-screen justify-center   for-shape:-> relative      ForRocket-not-breaking-screen: overflow-hidden"
    >
      {/* SHAPE DIVIDER */}
      <div className={`${styles.customShapeDividerTop}`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={`${styles.shapeFill}`}
          ></path>
        </svg>
      </div>

      <div className="w-10/12 flex items-center justify-between">
        <div className={`flex flex-col text-white w-2/3    /bg-red-400`}>
          <h1
            className={` xs:text-5xl text-3xl text-white font-bold mb-2 xs:mb-4   smaller:flex `}
          >
            Ping me!&nbsp;
            <InView triggerOnce>
              {({
                inView: myEmojiElementIsVisible,
                ref: myEmojiRef,
                entry,
              }) => (
                <p
                  ref={myEmojiRef}
                  className={`${styles.eomji} ${
                    myEmojiElementIsVisible ? styles.animateEmoji : ""
                  } /sm:inline-block /hidden h-1 w-1 /xs:h-0 /xs:w-0 z-10 relative`}
                >
                  {/* ☎️  */}
                  🚀
                </p>
              )}
            </InView>
          </h1>

          <InView triggerOnce>
            {({
              inView: myContactTextElementIsVisible,
              ref: myContactTextRef,
              entry,
            }) => (
              <p
                ref={myContactTextRef}
                className={`${
                  !myContactTextElementIsVisible && "translate-y-10 opacity-0"
                }      transform transition duration-1000 ease-in-out     xs:text-base text-contactText /picture-covering-mail-text: w-10/12 xs:w-2/3 max-w-3xl`}
              >
                I am Peter Eriksson, a self-taught front end-developer,
                especially in to React.js. Always eager to learn new stuff.
                Fluent in Swedish and English.
              </p>
            )}
          </InView>

          {/*Contact info */}
          <InView triggerOnce>
            {({
              inView: myContactTextElementIsVisible,
              ref: myContactTextRef,
              entry,
            }) => (
              <section
                ref={myContactTextRef}
                className={`${
                  !myContactTextElementIsVisible && "translate-y-10 opacity-0"
                } transform transition duration-1000 ease-in-out     flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 /picture-covering-mail-text: mt-4 xs:mt-2.5`}
              >
                <div>
                  <h3 className="xs:text-md font-bold   hidden xs:inline">
                    Phone
                  </h3>
                  <div className="/flex items-center xs:space-x-2 space-x-1    hidden xs:flex">
                    <PhoneIcon className=" xs:w-5  w-3 h-5" />
                    <p className="text-sm">070-41...39..</p>
                  </div>
                </div>
                <div>
                  <h3 className="xs:text-md font-bold   hidden xs:inline">
                    Mail
                  </h3>
                  <div className="/flex items-center xs:space-x-2 space-x-1    hidden xs:flex">
                    <MailIcon className=" xs:w-5  w-3 h-5" />
                    <p className="text-sm">peter...@hotmail.com</p>
                  </div>
                </div>
                <div className="">
                  <h3 className="xs:text-md font-bold   hidden xs:inline">
                    Linkedin
                  </h3>

                  <div className="/bg-red-500 hidden w-6 xs:inline">
                    <a
                      href="https://www.linkedin.com/in/peter-eriksson-13b8b1120/"
                      target="_blank"
                    >
                      <img
                        className="h-5 w-5 xs:w-6 xs:h-6 rounded-lg lg:mx-auto"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png"
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="xs:text-md font-bold hidden xs:inline ">
                    Github
                  </h3>
                  <div className="/bg-red-500 w-6 hidden xs:inline ">
                    <a
                      className=""
                      href="https://github.com/PeterEriksson"
                      target="_blank"
                    >
                      <img
                        className="w-5 h-5 xs:w-6 xs:h-6 rounded-lg lg:mx-auto"
                        src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
                        alt="github"
                      />
                    </a>
                  </div>

                  {/* BUTTONS FOR PHONE+EMAIL */}
                  <button
                    className="py-2 px-3 border flex space-x-1.5
                    items-center justify-center border-gray-300 rounded-2xl w-11/12 xs:hidden -mt-7 xs:-mt-0"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <p className="text-sm">070 41 ...70</p>
                  </button>
                  <button
                    className="py-2 px-3 border flex space-x-1.5 mt-2
                    items-center justify-center border-gray-300 rounded-2xl w-11/12 xs:hidden"
                  >
                    {/* <MailIcon className="w-5 h-5" /> */}
                    <p className="text-xs">peter...@hotmail.com</p>
                  </button>

                  {/* MOBILE BUTTONS FOR SOCIALS */}
                  <a
                    href="https://github.com/PeterEriksson"
                    target="_blank"
                    className="mt-2 py-2 px-3 border flex space-x-1.5
                    items-center justify-center border-gray-300 rounded-2xl w-11/12 xs:hidden"
                  >
                    <img
                      className="w-5 h-5  rounded-lg  "
                      src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
                      alt="github"
                    />
                    <p className="text-sm">Github</p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/peter-eriksson-13b8b1120/"
                    target="_blank"
                    className="mt-2 py-2 px-3 border flex space-x-1.5
                    items-center justify-center border-gray-300 rounded-2xl w-11/12 xs:hidden"
                  >
                    <img
                      className="h-5 w-5  rounded-lg  "
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png"
                      alt="linkedin"
                    />
                    <p className="text-sm">Linkedin</p>
                  </a>
                </div>
              </section>
            )}
          </InView>
        </div>

        {/* right image container */}
        <div className="//picture-covering-mail-text: //pb-14 xs:pb-0  ">
          <InView /* triggerOnce */>
            {({ inView: myEmojiElementIsVisible, ref: myEmojiRef, entry }) => (
              <img
                ref={myEmojiRef}
                src="/peterprofilebeer.png"
                className={`rounded-xl    ${
                  myEmojiElementIsVisible
                    ? "transform transition duration-1000  ease-in-out"
                    : "opacity-0"
                }`}
              />
            )}
          </InView>
        </div>
      </div>
    </div>
  );
}

export default Contact;
