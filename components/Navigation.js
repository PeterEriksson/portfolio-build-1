import resumeData from "../resumeData.json";
import { Link as ScrollLink } from "react-scroll";
import styles from "../styles/button-active.module.css";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Transition } from "@headlessui/react";

function Navigation() {
  const [menuActive, setMenuActive] = useState(false);

  const [isShowing, setIsShowing] = useState(false);

  return (
    <div
      className="fixed top-0 w-screen z-40"
      style={{ background: "#091c29" }}
    >
      <div className="flex items-center  text-white justify-between  w-10/12 mx-auto    py-3 flex-col sm:flex-row  sm:flex">
        {/* LEFT section */}
        <div className="flex justify-between items-center //bg-red-500 w-full">
          <ScrollLink
            to="header"
            smooth="true"
            activeClass={styles._active}
            spy={true}
            offset={-40}
            /* for some space between link and border -> */
            /* className="pb-1" */
            /* avoid navbar changing height -> have an "invinsible" bottom border -> */
            className="border-b-2 border-mainDarkBlue"
          >
            <h1 className="cursor-pointer text-3xl font-bold">
              {resumeData.nav.logo}
              <span className="w-2 h-2 bg-red-500 inline-block rounded-full ml-2 mb-1"></span>
            </h1>
          </ScrollLink>

          {menuActive ? (
            <XIcon
              onClick={() => setMenuActive((prev) => !prev)}
              className=" h-7 w-7 cursor-pointer sm:hidden    transform transition duration-150 ease-in-out"
            />
          ) : (
            <MenuIcon
              onClick={() => setMenuActive((prev) => !prev)}
              className=" h-7 w-7 cursor-pointer sm:hidden     transform transition duration-150 ease-in-out"
            />
          )}
        </div>
        {/* RIGHT section */}
        <div className="space-x-5 mt-2   sm:flex hidden">
          {resumeData.nav.links.map((item, i) => (
            <ScrollLink
              to={item.to}
              smooth="true"
              key={i}
              activeClass={styles._active}
              spy={true}
              /* offset={} */
              /* for some space between link and border -> */
              /* className="pb-1" */
              className="border-b-2 border-mainDarkBlue"
            >
              <span className="cursor-pointer text-xl ">{item.text}</span>
            </ScrollLink>
          ))}
        </div>

        {/*HAMBURGER MENU CONTAINER */}
        <Transition
          show={menuActive}
          enter="transition-opacity duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className={`sm:hidden flex flex-col space-y-1 items-center pb-2 w-full  //bg-red-500 ///ForTakingUpTheWholeSpace: absolute top-14 bg-mainDarkBlue   //transform //transition //ease-in-out   `}
        >
          <ScrollLink
            to="header"
            smooth="true"
            //activeClass={styles._active}
            spy={true}
            className="flex justify-center "
          >
            <p className="cursor-pointer text-lg font-semibold">Intro</p>
          </ScrollLink>
          {resumeData.nav.links.map((item, i) => (
            <ScrollLink
              key={i}
              to={item.to}
              smooth="true"
              activeClass={styles._active}
              spy={true}
              className="flex justify-center border-b-2 border-mainDarkBlue"
            >
              <p className="cursor-pointer text-lg font-semibold">
                {item.text}
              </p>
            </ScrollLink>
          ))}
        </Transition>
      </div>
    </div>
  );
}

export default Navigation;
