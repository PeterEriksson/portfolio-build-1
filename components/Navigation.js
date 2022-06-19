import resumeData from "../resumeData.json";
import { Link as ScrollLink } from "react-scroll";
import styles from "../styles/navigation.module.css";
import stylesMobile from "../styles/navMobile-effects.module.css";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import mobileStyles from "../styles/navMobile-effects.module.css";
import useComponentVisible from "../utils/menuVisibleHelper";
import useNavbarVisible from "../utils/navShowHideHelper";
import { debounce } from "../utils/debounceHelper";
import useNavbarVisible2 from "../utils/navShowHideHelper2";

function Navigation() {
  const { ref, isMenuComponentVisible, setIsMenuComponentVisible } =
    useComponentVisible(false);

  /*  const { show } = useNavbarVisible(); */
  /*  navShowHide using debounceHelper.js(not lodash library) ------ move to own file and hook into instead ----*/

  const { visible } = useNavbarVisible2();
  /* ------- */

  /* avoid slideClose-effect on page-reload*/
  const [initialMenuState, setInitialMenuState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialMenuState(true);
    }, 300);
  }, []);

  const [linkActive, setLinkActive] = useState("");
  const handleSetActive = (to) => {
    setLinkActive(to);
    /*  console.log(linkActive); */
    /* setIsComponentVisible(false); */
  };

  const handleMenuClick = () => {
    setIsMenuComponentVisible((prev) => !prev);
    /* setInitialMenuState(true); */
  };

  /* const navBarTransp = true; */
  return (
    <nav
      className={`fixed top-0 w-screen z-40    transform transition duration-500 ease-in-out
        ${visible ? "scale-y-100 origin-top" : "scale-y-0 origin-top"}    `}
      style={{ background: "#091c29" }}
      /* style={
        navBarTransp
          ? { background: "rgba(9, 28, 41, 0.75)" }
          : { background: "#091c29" }
      } */
    >
      <section className="flex items-center  text-white justify-between  w-10/12 mx-auto    py-3 flex-col /sm:flex-row  /sm:flex md:flex md:flex-row">
        {/* LEFT div */}
        <section className="flex justify-between items-center //bg-red-500 w-full">
          <ScrollLink
            to="header"
            smooth="true"
            activeClass={styles._active}
            spy={true}
            offset={-40}
            onSetActive={handleSetActive}
            /* for some space between link and border -> */
            /* className="pb-1" */
            /* avoid navbar changing height -> have an "invinsible" bottom border -> */
            className={`border-b-2 border-mainDarkBlue ${
              linkActive !== "header" && styles.hoverAnimation
            } `}
          >
            <h1
              className={`cursor-pointer text-3xl font-bold  opacity-opacityNavLink hover:opacity-100   ${
                "header" == linkActive && "!opacity-100"
              }   `}
            >
              {resumeData.nav.logo}
              <span
                className={` w-2 h-2 bg-red-500 inline-block rounded-full ml-2 mb-1`}
              ></span>
            </h1>
          </ScrollLink>

          {/* menu-btn. Toggle between hamburger and cross */}
          <section
            onClick={handleMenuClick}
            className={`md:hidden /sm:hidden ${stylesMobile.menuBtn}   opacity-opacityNavLink hover:opacity-100`}
          >
            {/* menu-btn__burger */}
            <section
              className={`md:hidden /sm:hidden ${
                isMenuComponentVisible && stylesMobile.burgerAnimation
              } ${stylesMobile.burger}`}
            ></section>
          </section>
        </section>

        {/* RIGHT div */}
        <section className="space-x-5 mt-2  /sm:flex md:flex hidden">
          {resumeData.nav.links.map((item, i) => (
            <ScrollLink
              to={item.to}
              smooth="true"
              key={i}
              activeClass={styles._active}
              spy={true}
              onSetActive={handleSetActive}
              /* offset={} */
              /* for some space between link and border -> */
              /* className="pb-1" */
              className={` //avoidNavChangingSize: border-b-2 border-mainDarkBlue `}
            >
              <span
                className={`cursor-pointer text-xl    ${
                  item.to !== linkActive && styles.hoverAnimation
                }  opacity-opacityNavLink hover:opacity-100  `}
              >
                {item.text}
              </span>
            </ScrollLink>
          ))}
        </section>

        {/*HAMBURGER MENU-CONTAINER */}
        {/* in handleCLickOutside:  if event.target.tagName.toLowerCase()=="section" then return. Maybe not best solution, since section tag where hamburger+cross lives ought to be unique */}
        {/* avoid slideClose-effect on page-reload? -> timeout fcn... */}
        <div
          ref={ref}
          className={`  
          ${
            initialMenuState && "transform transition duration-850 ease-in-out"
          } 
            
          ${
            isMenuComponentVisible
              ? "scale-y-100 origin-top"
              : ` opacity-0 scale-y-0 origin-top `
          }
             md:hidden flex flex-col space-y-1 items-center pb-2 w-full absolute top-14 bg-mainDarkBlue  `}
        >
          <ScrollLink
            /* TEST TEMP onClick */
            onClick={() => setIsMenuComponentVisible(false)}
            to="header"
            smooth="true"
            //activeClass={styles._active}
            spy={true}
            className="flex justify-center "
          >
            <p
              className={`cursor-pointer text-lg font-semibold   opacity-opacityNavLink hover:opacity-100    ${
                linkActive === "header" && "opacity-100 "
              }`}
            >
              Intro
            </p>
          </ScrollLink>
          {resumeData.nav.links.map((item, i) => (
            <ScrollLink
              /* TEST TEMP onClick */
              onClick={() => setIsMenuComponentVisible(false)}
              key={i}
              to={item.to}
              smooth="true"
              activeClass={styles._active}
              spy={true}
              className="flex justify-center border-b-2 border-mainDarkBlue"
            >
              <p
                className={`cursor-pointer text-lg font-semibold opacity-opacityNavLink hover:opacity-100 ${
                  linkActive === item.to && "opacity-100 "
                }`}
              >
                {item.text}
              </p>
            </ScrollLink>
          ))}
        </div>

        {/* -- */}
      </section>
    </nav>
  );
}

export default Navigation;
